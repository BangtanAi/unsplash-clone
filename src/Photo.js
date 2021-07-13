import React from 'react';

function Photo({ setPhotoOpened, photo }) {
  return (
    <div className="overlay">
      <div className="wrapper">
        <img className="photoUrl" src={photo} alt="photourl" />
        <img
          className="removeBtn"
          onClick={() => setPhotoOpened(false)}
          src="img/btn-remove.svg"
          alt="photoOpen"
        />
      </div>
    </div>
  );
}

export default Photo;
