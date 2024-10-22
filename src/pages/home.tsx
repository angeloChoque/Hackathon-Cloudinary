import ButtonCloudinary from "@/components/buttonCloudinary";
import Hero from "../components/hero";
import { Image } from "../components/Image";
import { CarouselApple } from "@/components/carouselApple";
const Home = () => {
  return (
    <>
      <Hero />

      <ButtonCloudinary />
      <Image />
      <CarouselApple />
    </>
  );
};

export default Home;
