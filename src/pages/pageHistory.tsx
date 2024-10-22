import ButtonCloudinary from "@/components/buttonCloudinary";
// import Drawer from "@/components/Drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ImageIcon } from "lucide-react";
import { useImage } from "@/store/useImage";
import { Story, generateHistoryAndImages } from "@/services/cloudinary_service";
import { useState } from "react";
import { AdvancedImage } from "@cloudinary/react";

const newStory: Story = {
  title: "",
  chapters: [],
  images: [],
};

export default function PageHistory() {
  const stateImage = useImage((state) => state);

  const [myStory, setStory] = useState(newStory);

  const generateStory = () => {
    generateHistoryAndImages(stateImage.imagePublicId, {}).then((response) => {
      setStory(response);
    });
  };

  return (
    <>
      <div className="gradient-decoration">
        {/* <Drawer> */}
        <div className="p-6 bg-transparent text-white min-h-screen">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Crea tu historia
          </h1>
          <div className="flex items-center justify-center">
            <Card className="w-[26rem]  h-[40rem] md:w-[40rem] bg-transparent border-dashed border-2 border-gray-600  flex flex-col items-center justify-center ">
              {stateImage.url ? (
                <img
                  alt="respuesta de imagen"
                  src={stateImage.url}
                  className="w-full h-full"
                />
              ) : (
                <>
                  <ImageIcon className="w-32 h-32 text-gray-400 mb-4" />
                  <p className="text-gray-400 text-lg">Sube tu Imagen</p>
                </>
              )}
            </Card>
          </div>
          <div className="my-5 text-center">
            <ButtonCloudinary />
            <button className="button ml-7" onClick={generateStory}>
              Generar historia
            </button>
          </div>
          <Separator color="white" />
          {myStory.chapters.map((chapter, index) => (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5"
              key={"chapter_" + index}
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4">{myStory.title}</h2>
                <p className="w-full h-64 bg-transparent border-none resize-none">
                  {chapter}
                </p>
              </div>
              <div>
                <Card className="bg-transparent border-none overflow-hidden">
                  <CardContent className="w-full h-auto max-w-full">
                    <AdvancedImage cldImg={myStory.images[index]} />
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        {/* </Drawer> */}
      </div>
    </>
  );
}
