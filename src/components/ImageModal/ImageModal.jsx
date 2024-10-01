import Modal from "react-modal";



export default function ImageModal({ isOpen, onClose, image }) {
  
  return (
     <Modal 
       isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </Modal>
  );
}