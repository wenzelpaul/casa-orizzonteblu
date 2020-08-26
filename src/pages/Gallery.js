import React, { useState } from 'react';
import UploadForm from '../components/UploadForm';
import Modal from '../components/Modal';
import ImageGrid from '../components/ImageGrid';

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      {/*The surrounding HTML is left untouched by FirebaseUI.
     Your app may use that space for branding, controls and other customizations.*/}
      {/*ui.start('#firebaseui-auth-container', uiConfig)*/}
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Gallery;