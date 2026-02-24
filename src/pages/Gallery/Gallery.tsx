import { useGallery } from './hooks/useGallery';
import GalleryFilters from './components/GalleryFilters';
import GalleryGrid from './components/GalleryGrid';
import GalleryModal from './components/GalleryModal';

const Gallery = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedImage,
    categories,
    filteredImages,
    openModal,
    closeModal
  } = useGallery();

  return (
    <div className="bg-white min-h-screen pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-900 mt-8 mb-6">Gallery</h1>
          <p className="text-gray-600 text-lg">Explore our campus life through images</p>
        </div>

        {/* Filter Buttons */}
        <GalleryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* Gallery Grid */}
        <GalleryGrid
          images={filteredImages}
          onImageClick={openModal}
        />

        {/* Modal */}
        <GalleryModal
          selectedImage={selectedImage}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default Gallery;
