import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return (
    // {this.state.error && <p>Oops, something went wrong...</p>}
    <ul className={styles.ImageGallery}>
      {images &&
        images.map(image => {
          return (
            <ImageGalleryItem
              key={image.id}
              image={image.webformatURL}
              largeImage={image.largeImageURL}
              tag={image.tags}
            />
          );
        })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
