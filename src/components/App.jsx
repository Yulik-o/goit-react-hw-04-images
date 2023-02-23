import { Component } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { requestImages } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    page: 1,
    query: '',
    perPage: 12,
    loadMore: false,
    isLoading: false,
    error: null,
    totalHits: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ isLoading: true });
      try {
        const response = await requestImages({ query, page });
        this.setState({
          totalHits: response.totalHits,
          images:
            page === 1
              ? response.hits
              : [...this.state.images, ...response.hits],
        });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  formSubmitHandler = query => {
    this.setState({ query, page: 1 });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { images, isLoading, totalHits } = this.state;
    return (
      <>
        <SearchBar formSubmitHandler={this.formSubmitHandler} />
        <ImageGallery images={images} totalHits={totalHits} />
        {isLoading && <Loader />}
        {Math.floor(totalHits / this.state.perPage) > 1 && (
          <Button onClick={this.handleLoadMore} />
        )}
      </>
    );
  }
}
