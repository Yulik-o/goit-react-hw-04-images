// import * as basicLightbox from 'basiclightbox'
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export function Modal({ onClose, largeImage, tag }) {
  useEffect(() => {
    const onCloseByEsc = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onCloseByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseByEsc);
    };
  }, [onClose]);

  const handleClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  // const { id, largeImage, tag } = this.props;
  return (
    <div className={styles.Overlay} onClick={handleClick}>
      <div className={styles.Modal}>
        <img src={largeImage} alt={tag} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  tag: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};
