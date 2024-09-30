import Modal from "react-modal";
import styles from './ImageModal.module.css';

export default function ImageModal({ isOpen, onClose, image }) {
  return (
    <Modal className={styles.modal} overlayClassName={styles.overlay}
      
       isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
}