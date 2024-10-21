import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
// Import required actions and qualifiers.
import { useImage } from "@/store/useImage";
import { generativeReplace } from "@cloudinary/url-gen/actions/effect";
import axios from "axios";

// import { format, quality } from "@cloudinary/url-gen/actions/delivery";

export const Image = () => {
  // Create and configure your Cloudinary instance.
  const stateImage = useImage((state) => state);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dalbwyfa6",
    },
  });

  // Use the image with public ID, 'front_face'.
  // const faceImage = "zombie";
  // const backGround = "skull island";

  const myImage = cld
    .image(stateImage.imagePublicId)
    .effect(
      generativeReplace().from("body").to("the person in the image put beard")
    );

  const uploadImage = async () => {
    try {
      // Subir la imagen transformada a Cloudinary
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dkepusbx2/image/upload`,
        {
          file: myImage.toURL(),
          upload_preset: "newApp",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Imagen subida:", response.data);
    } catch (error) {
      console.error("Error al subir la imagen transformada:", error);
    }
  };

  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
      {/* <div>
        <img src={stateImage.url} alt="image" />
      </div>
      <button
        onClick={uploadImage}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/> */}
    </div>
  );
};
