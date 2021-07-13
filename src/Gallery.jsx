import React from 'react';

function Gallery({results, onPhotoClick}) {
  return (
    <div className="gallery">
      {results.map((item, id) => {
        return (
          <img
            onClick={() => onPhotoClick(item.urls.regular)}
            className="item"
            key={id}
            src={item.urls.small}
            alt="galleryImg"
          />
        );
      })}
    </div>
  );
}

export default Gallery;
