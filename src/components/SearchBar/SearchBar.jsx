// import PropTypes from 'prop-types';
import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import styles from './SearchBar.module.css';

export function SearchBar (props) {
  const [query, setQuery] = useState()
  
  const handleChange = event => {
    setQuery(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.formSubmitHandler(query);
   setQuery('');
  };


    return (
      <header className={styles.SearchBar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
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
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }


// SearchBar.propTypes = {
//   onSubmit: propTypes.func.isRequired,
// }