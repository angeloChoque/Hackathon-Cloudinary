import React, { useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget"; // Asegúrate de la ruta

const ButtonCloudinary: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUploadSuccess = (url: string) => {
    setImageUrl(url); // Guarda la URL de la imagen en el estado
  };

  return (
    <div>
      <h1>Sube tu Imagen</h1>
      <CloudinaryUploadWidget
        uploadPreset="newApp" // Reemplaza con tu upload preset
        cloudName="dkepusbx2" // Reemplaza con tu cloud name
        onUploadSuccess={handleUploadSuccess} // Maneja la URL de la imagen subida
      />
      {imageUrl && ( // Muestra la imagen subida si existe la URL
        <div>
          <h3>Imagen subida:</h3>
          <img
            src={imageUrl}
            alt="Imagen subida"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      )}
    </div>
  );
};

export default ButtonCloudinary;
