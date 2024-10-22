"use client";
import { Carousel, Card } from "@/components/apple-cards-carousel";

export function CarouselApple() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="community-stories">
      <div className="stories-body pb-20 mt-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-white  font-sans">
          Historias de la Comunidad
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

function DummyContent(title: string, chapters: string[], imageUrls: string[]) {
  console.log(title, chapters, imageUrls);
  return (
    <>
      {chapters.map((chapter, index) => {
        return (
          <div
            key={"dummy-content"}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              {chapter}
            </p>
            <img
              src={imageUrls[index]}
              alt="Macbook mockup from Aceternity UI"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
}

const data = [
  {
    category: "La Casa de la Noche Eterna",
    title: "Emma Mora Dev",
    src: "https://res.cloudinary.com/dkepusbx2/image/upload/e_gen_background_replace:prompt_La%20Casa%20de%20la%20Noche%20Eterna%20Dark%20forest%20at%20dusk%20with%20misty%20fog%20and%20faded%20moonlight%20filtering%20through%20the%20trees%20creating%20an%20eerie%20atmosphere%20with%20plenty%20of%20depth%20and%20mystery/e_gen_replace:from_clothes;to_halloween%20outfit/cq469zux7fqecsx19yxy?_a=DAJAUVWIZAA0",
    content: DummyContent(
      "Emma Mora Dev",
      [
        "Usted había oído hablar de la casa de su abuelo ubicada en el más profundo de un valle donde la oscuridad reinaba suprema y la naturaleza parecía ensombrecida por un maleficio invisible Aunque siempre había disfrutado de la aventura no podía resistir la curiosidad que le impulsaba a explorar la misteriosa vivienda Así que arriesgó su vida y cruzó el puente de madera que atravesaba el río que lamía los sillares de la casa Al principio todo parecía tranquilo pero a medida que caminaba notó un ambiente opresivo como si la casa estuviera esperando para recibirlo Las ventanas estaban tapiadas con tablas de madera y las rejas de hierro adornaban las puertas como si fueran la entrada a un cementerio Finalmente logró abrir la puerta de la casa y entró en un dormitorio en penumbra donde una cama ruinosamente vieja esperaba para recibirlo",
        "La habitación era un reflejo del abandono y la desolación La ropa había sido echada en un rincón las cortinas estaban hechas pedazos y el aire estaba lleno de polvo Pero fue entonces cuando notó algo extraño La habitación parecía estar en constante movimiento como si los objetos estuvieran bailando en la oscuridad La silla se movía levemente el piano emitía un sonido amortiguado y los candelabros parecían estar girando lentamente Usted se sintió invadido por una sensación de desesperación como si estuviera atrapado en un sueño de pesadilla",
        "Mientras caminaba por la casa encontró una habitación llena de objetos que parecían pertenecer a un pasado lejano Vio una colección de dagas y cuchillos una gran amount of ropa antigua y archivos llenos de papeles viejos Pero fue entonces cuando radio un objeto que le hizo percatarse era un espejo grande y solarlo En él vio su imagen reflejada pero con una diferencia",
      ],
      [
        "https://res.cloudinary.com/dkepusbx2/image/upload/e_gen_background_replace:prompt_La%20Casa%20de%20la%20Noche%20Eterna%20Dark%20forest%20at%20dusk%20with%20misty%20fog%20and%20faded%20moonlight%20filtering%20through%20the%20trees%20creating%20an%20eerie%20atmosphere%20with%20plenty%20of%20depth%20and%20mystery/e_gen_replace:from_clothes;to_halloween%20outfit/cq469zux7fqecsx19yxy?_a=DAJAUVWIZAA0",
        "https://res.cloudinary.com/dkepusbx2/image/upload/e_gen_background_replace:prompt_Usted%20había%20oído%20hablar%20de%20la%20casa%20de%20su%20abuelo%20Old%20wornout%20wooden%20bridge%20crossing%20a%20murky%20river%20with%20overgrown%20vegetation%20and%20mosscovered%20stones%20giving%20off%20an%20air%20of%20abandonment%20and%20foreboding/e_gen_replace:from_clothes;to_halloween%20outfit/cq469zux7fqecsx19yxy?_a=DAJAUVWIZAA0",
        "https://res.cloudinary.com/dkepusbx2/image/upload/e_gen_background_replace:prompt_La%20habitación%20era%20un%20reflejo%20del%20abandono%20y%20la%20desolación%20Flickering%20candlelight%20illuminates%20a%20dimly%20lit%20dusty%20room%20with%20cobwebcovered%20furniture%20with%20shadows%20dancing%20across%20the%20walls%20and%20a%20sense%20of%20unease%20palpable%20in%20the%20air/e_gen_replace:from_clothes;to_halloween%20outfit/cq469zux7fqecsx19yxy?_a=DAJAUVWIZAA0",
      ]
    ),
  },
  {
    category: "Tema de Trauma",
    title: "Angelo ",
    src: "https://res.cloudinary.com/dkepusbx2/image/upload/e_gen_background_replace:prompt_%20Shadows%20creeping%20across%20the%20walls%20cobwebs%20dancing%20in%20the%20faint%20breeze%20and%20a%20faint%20unsettling%20whisper%20in%20the%20background%20with%20the%20cuadros%20frame%20becoming%20increasingly%20worn%20and%20distressed/e_gen_replace:from_clothes;to_halloween%20outfit/ifmqunm5h7tp2prfrjel?_a=DAJAUVWIZAA0",
    content: DummyContent(
      "Tema de Trauma",
      [
        "Era una noche oscura y tórdida y yo me encontraba envuelto en la pesadilla de un sueño recurrente Me desperté con un sobresalto sudando profusamente y con la sensación de que algo había estado escondido detrás de la puerta de mi cuarto Me levanté atravesé la habitación y comprobé que todo estaba en orden pero la sensación de malestar persistía Me acosté y traté de dormir pero pronto me encontré rodeado de sombras y silencios que parecían tener vida propia La casa era antigua y tenía plantas cubiertas de moho y yo no podía evitar la sensación de que algo detrás de esas paredes aspadas y ajadas estaba esperando",
        "Me desperté varias veces durante la nocheaccumulate llagas y heridas que no recordaba cómo las había obtenido La luz del sol comenzó a filtrarse a través de la ventana y poco a poco la oscuridad comenzó a retirarse Me levanté decidido a abordar la fuente de mi pesadilla Miré alrededor de la habitación y vi un cuadro antiguo sobre la pared con un tema repentino Era un anciano con una expresión estúpida y un gesto de terror en la cara rodeado de flores marchitas y ramas de sauce Sentí un sudor frío correr por mi espalda al recordar la imagen del anciano que me había perturbado toda la noche",
        "Me acerqué al cuadro y lo examine con atención La pintura era vieja y descolorida pero la expresión del anciano parecía vivificarse a medida que me acercaba a él Me detuve conmocionado y escuché un susurro que parecía provenir del cuadro Era una palabra una sola palabra mío Me sintió un nudo en el estómago y comprendí que no podía dejar de investigar más allí Qué era lo que había estado pasando en mi cuarto Y qué había sido lo que me había estado mostrando todo ese tiempo No pude responder a esas preguntas pero sabía que tenía que seguir",
      ],
      [
        "https://res.cloudinary.com/dkepusbx2/image/upload/e_gen_background_replace:prompt_%20Sombrío%20decrepit%20and%20dirty%20stone%20walls%20with%20peeling%20paint%20and%20mold%20creaking%20wooden%20floorboards%20faint%20whispers%20in%20the%20background%20and%20a%20dim%20eerie%20glow/e_gen_replace:from_clothes;to_halloween%20outfit/ifmqunm5h7tp2prfrjel?_a=DAJAUVWIZAA0",
        "https://res.cloudinary.com/dkepusbx2/image/upload/e_gen_background_replace:prompt_%20Dilapidated%20ancient%20walls%20with%20aged%20tapestries%20flickering%20candles%20in%20the%20background%20eerie%20shadows%20and%20a%20sense%20of%20foreboding/e_gen_replace:from_clothes;to_halloween%20outfit/ifmqunm5h7tp2prfrjel?_a=DAJAUVWIZAA0",
        "https://res.cloudinary.com/dkepusbx2/image/upload/e_gen_background_replace:prompt_%20Shadows%20creeping%20across%20the%20walls%20cobwebs%20dancing%20in%20the%20faint%20breeze%20and%20a%20faint%20unsettling%20whisper%20in%20the%20background%20with%20the%20cuadros%20frame%20becoming%20increasingly%20worn%20and%20distressed/e_gen_replace:from_clothes;to_halloween%20outfit/ifmqunm5h7tp2prfrjel?_a=DAJAUVWIZAA0",
      ]
    ),
  },
];
