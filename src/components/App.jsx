import { useState } from 'react';
import { useEffect } from 'react';
import { SearchBar } from './SearchBar/SearchBar';
import { requestImages } from '../services/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

const perPage = 12;
export function App () {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [totalHits, setTotalHits] = useState(0)
  
useEffect(() => {
  if(!query) return;
async function getImages() {
       setIsLoading(true);
      try {
        const response = await requestImages({ query, page });
       
          setTotalHits(response.totalHits)
          setImages((prevState) => { 
            return page === 1
              ? response.hits
              : [...prevState, ...response.hits]})

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
  
}
getImages()

}, [query, page])
  
   

  const formSubmitHandler = query => {
    setQuery(query);
    setPage(1);
  };
  const handleLoadMore = () => {
    setPage(prevState => prevState.page + 1);
  };
  
    // const { images, isLoading, totalHits } = this.state;
    return (
      <>
      {error && <p>Error, something went wrong</p>}
        <SearchBar formSubmitHandler={formSubmitHandler} />
        <ImageGallery images={images} totalHits={totalHits} />
        {isLoading && <Loader />}
        {Math.floor(totalHits / perPage) > 1 && (
          <Button onClick={handleLoadMore} />
        )}
      </>
    );
  }

