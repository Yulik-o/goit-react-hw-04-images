// import * as basicLightbox from 'basiclightbox'
import { Component } from 'react';
import styles from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseByEsc);
  }
  onCloseByEsc = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    const { id, largeImage, tag } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleClick}>
        <div className={styles.Modal} key={id}>
          <img src={largeImage} alt={tag} />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  tag: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onClose: PropTypes.func,

}
