import React from 'react';
import BtnRemove from './assets/btn-remove.svg';

function Photo({ setPhotoOpened, photo }) {
  return (
    <div className="overlay">
        <img className="photoUrl" src={photo} alt="photourl" />
        <img className="removeBtn" onClick={() => setPhotoOpened(false)} src={BtnRemove} alt="photoOpen" />
    </div>
  );
}

export default Photo;
