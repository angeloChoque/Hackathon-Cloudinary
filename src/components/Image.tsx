import { AdvancedImage } from "@cloudinary/react";
// Import required actions and qualifiers.
import { useImage } from "@/store/useImage";
import {
  generateHistoryAndImages,
  Story,
  uploadImage,
} from "@/services/cloudinary_service";
import { useState } from "react";

// import { format, quality } from "@cloudinary/url-gen/actions/delivery";

export const Image = () => {
  // Create and configure your Cloudinary instance.
  const stateImage = useImage((state) => state);

  const newStory: Story = {
    title: "",
    chapters: [],
    images: [],
  };

  const [myStory, setStory] = useState(newStory);

  // Use the image with public ID, 'front_face'.
  // const faceImage = "zombie";
  // const backGround = "skull island";
  const generateStory = () => {
    generateHistoryAndImages(stateImage.imagePublicId, {}).then((response) => {
      setStory(response);
    });
  };

  // Render the transformed image in a React component.
  return (
    <>
      <button className="button ml-7" onClick={generateStory}>Generar historia</button>
      <h1>{myStory.title}</h1>
      {myStory.chapters.map((chapter, index) => (
        <div>
          <div key={"chapter_" + index}>
            <p className=" bg-white">{chapter}</p>
          </div>
          <div>
            <AdvancedImage cldImg={myStory.images[index]} />
            <div>
              <img src={stateImage.url} alt="image" />
            </div>
            <button
              onClick={() => uploadImage(myStory.images[index])}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            />
          </div>
        </div>
      ))}
    </>
  );
};
