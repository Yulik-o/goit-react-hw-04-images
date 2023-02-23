// import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import styles from './SearchBar.module.css';

export class SearchBar extends Component {
  state = {
    query: '',
  };
  handleChange = event => {
    this.setState({ query: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.formSubmitHandler(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span>
              {' '}
              <ImSearch
                size="18px"
                // className={styles.SearchFormButtonLabel}
              />
            </span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            //autoComplete
            autoFocus
            placeholder="Search images and photos"
            name="img"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

// SearchBar.propTypes = {
//   onSubmit: propTypes.func.isRequired,
// }