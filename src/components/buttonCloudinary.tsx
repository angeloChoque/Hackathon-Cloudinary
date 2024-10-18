import { useImage } from "@/store/useImage";
import React, { useEffect, useState } from "react";

// Define una interfaz para el objeto del widget de Cloudinary
interface CloudinaryWidget {
  open: () => void;
}

const ButtonCloudinary: React.FC = () => {
  const [widget, setWidget] = useState<CloudinaryWidget | null>(null);
  const imageSetter = useImage((state) => state.setImageId);

  useEffect(() => {
    // Cargar el script de Cloudinary de forma dinámica
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://upload-widget.cloudinary.com/latest/global/all.js";
      script.async = true;
      script.onload = () => {
        // Crear el widget de Cloudinary una vez que el script se haya cargado
        const newWidget = (window as any).cloudinary.createUploadWidget(
          {
            cloudName: "dkepusbx2", // Reemplaza con tu cloudName
            uploadPreset: "newApp", // Reemplaza con tu uploadPreset
          },
          (error: any, result: any) => {
            if (!error && result && result.event === "success") {
              console.log(
                "¡Carga exitosa! Información del archivo:",
                result.info
              );
              imageSetter(result.info.public_id, result.info.url);
            }
          }
        );
        setWidget(newWidget);
      };
      document.body.appendChild(script);
    };

    if (!(window as any).cloudinary) {
      loadScript();
    }
  }, []); // Se ejecuta solo al montar el componente

  // Función para abrir el widget
  const handleUploadClick = () => {
    if (widget) {
      widget.open();
    }
  };

  return (
    <button
      onClick={handleUploadClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Subir archivos
    </button>
  );
};

export default ButtonCloudinary;
