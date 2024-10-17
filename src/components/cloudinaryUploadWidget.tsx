import React, { useEffect, useState } from "react";

interface CloudinaryUploadWidgetProps {
  uploadPreset: string; // El nombre de tu upload preset
  cloudName: string; // Tu cloud name
  onUploadSuccess: (url: string) => void; // Callback para manejar la URL de la imagen subida
}

declare global {
  interface Window {
    cloudinary: {
      createUploadWidget: (
        options: {
          cloudName: string;
          uploadPreset: string;
          sources: string[];
        },
        callback: (
          error: CloudinaryError | null,
          result: CloudinaryResult
        ) => void
      ) => { open: () => void };
    };
  }
}

// Define los tipos de error y resultado para el callback
interface CloudinaryError {
  // Añade las propiedades relevantes del error
  message: string;
}

interface CloudinaryResult {
  event: string;
  info: {
    secure_url: string;
    // Otras propiedades que necesites
  };
}

const CloudinaryUploadWidget: React.FC<CloudinaryUploadWidgetProps> = ({
  uploadPreset,
  cloudName,
  onUploadSuccess,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleUpload = () => {
    if (loaded) {
      const widget = window.cloudinary.createUploadWidget(
        {
          cloudName,
          uploadPreset,
          sources: ["local", "url", "camera"],
        },
        (error: CloudinaryError | null, result: CloudinaryResult) => {
          if (!error && result && result.event === "success") {
            console.log("Imagen subida:", result.info);
            onUploadSuccess(result.info.secure_url);
          } else if (error) {
            console.error("Error al subir la imagen:", error.message);
          }
        }
      );

      widget.open();
    }
  };

  return (
    <button onClick={handleUpload} disabled={!loaded}>
      Cargar Imagen
    </button>
  );
};

export default CloudinaryUploadWidget;
