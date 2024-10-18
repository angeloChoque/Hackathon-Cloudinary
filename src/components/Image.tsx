import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
// Import required actions and qualifiers.

import { useImage } from "@/store/useImage";
import { generativeReplace } from "@cloudinary/url-gen/actions/effect";

// import { format, quality } from "@cloudinary/url-gen/actions/delivery";

export const Image = () => {
  // Create and configure your Cloudinary instance.
  const stateImage = useImage((state) => state);

  const cld = new Cloudinary({
    cloud: {
      cloudName: "dkepusbx2",
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

  // Render the transformed image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
      <div>
        <img src={stateImage.url} alt="image" />
      </div>
    </div>
  );
};
