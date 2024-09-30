
import './ImageGallery.module.css'
export default function ImageGallery({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map((image) => (
        <li  className="ImageGalleryItem" key={image.id}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
}

function ImageCard({ image }) {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}
