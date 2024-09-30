
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import axios from "axios";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

import './App.css'

import Modal from "react-modal";


Modal.setAppElement("#root");


const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "s59p4VYm3Acb8z77Sa8gmjO2I2_fdyb757akeP_HzbE";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  
  

  useEffect(() => {
    if (!query) {
      return;
    }

  const fetchImages = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(API_URL, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: ACCESS_KEY,
          },
        });
        setImages((prevImages) => [...prevImages, ...data.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
      };
      fetchImages();
  }, [query, page]);
   
  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };


  const loadMore = () => setPage((prevPage) => prevPage + 1);
  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };


  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick}/>
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={Boolean(selectedImage)}
          onClose={() => setSelectedImage(null)}
          image={selectedImage}
        />
      )}
    </div>
  )
}

export default App
