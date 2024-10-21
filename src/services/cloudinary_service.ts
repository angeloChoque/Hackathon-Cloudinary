import { generativeBackgroundReplace, generativeReplace } from "@cloudinary/url-gen/actions/effect";
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen/index";
import axios from "axios";
import { getHorrorStory, StoryParams } from "./history_worker";

export interface Story {
    title: string;
    chapters: string[];
    images: CloudinaryImage[];
}


const cld = new Cloudinary({
    cloud: {
      cloudName: 'dkepusbx2',
    },
  });

export const uploadImage = async (myImage: CloudinaryImage) => {
    try {
      // Subir la imagen transformada a Cloudinary
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dkepusbx2/image/upload`,
        {
          file: myImage.toURL(),
          upload_preset: 'newApp',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Imagen subida:', response.data);
    } catch (error) {
      console.error('Error al subir la imagen transformada:', error);
    }
  }

export const modifyImage = async (imagePublicId: string,backgroundPrompt: string, personPrompt: string) => {
    return cld
    .image(imagePublicId)
    .effect(
        generativeBackgroundReplace().prompt(
          backgroundPrompt,
        )
      )
    .effect(
      generativeReplace().from("clothes").to(personPrompt)
    )
};

export async function generateHistoryAndImages(imagePublicId: string,params: StoryParams): Promise<Story> {
    const workerResponse = await getHorrorStory(params);
    const storyChapters = (workerResponse[0].response.response as string).replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\n\s]/g, '').split('\n\n');
    const storyPrompts = (workerResponse[2].response as string).replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\n\s]/g, '').split('\n\n');
    if(storyPrompts.length > 3){
        storyPrompts.shift();
    }
    const storyImages = storyPrompts.map(async (prompt: string) => {
        return await modifyImage(imagePublicId,prompt,'halloween outfit');
    });
    const images = await Promise.all(storyImages);
    const title = storyChapters[0];
    storyChapters.shift();
    const story: Story = {
        title: title,
        chapters: storyChapters,
        images,
    };
    return story;
}