import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';


export function ImageGalleryItem ({image, tag, largeImage}) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  
  const handleToggleModal = () => {
   setIsOpenModal(prevState => !prevState) 
  }
 
    // const { image, tag, largeImage } = this.props;
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          onClick={handleToggleModal}
          className={styles.ImageGalleryItemImage}
          src={image}
          alt={tag}
        />

        {isOpenModal && (
          <Modal largeImage={largeImage} onClose={handleToggleModal} />
        )}
      </li>
    );
  }

ImageGalleryItem.propTypes = {
  tag: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
