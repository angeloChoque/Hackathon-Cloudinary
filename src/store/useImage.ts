import { create } from "zustand";

interface ImageState {
  imagePublicId: string;
  url: string;
  setImageId: (id: string, url: string) => void;
}

export const useImage = create<ImageState>((set) => ({
  imagePublicId: "",
  url: "",
  setImageId: (id: string, url: string) => {
    set({ imagePublicId: id, url: url });
  },
}));
