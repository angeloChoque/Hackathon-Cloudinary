import Hero from "../components/hero";
const Home = () => {
  return (
    <>
      <Hero />
      <section className="community-stories">
        <div className="community-stories-body">
          <h2 className="title">Historias de la comunidad</h2>
          <div className="stories-container">
            {stories.map((story) => (
              <div
                className="story-card"
                style={{ "--banner-url": `url(${story.img})` } as React.CSSProperties}
              >
                <div className="card-header">
                  <h3 className="card-title">{story.title}</h3>
                  <p className="story-description">{story.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const stories = [
  {
    title: "Mi experiencia con Next.js",
    description:
      "Next.js es un framework de React que me ha permitido crear aplicaciones web de",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    title: "Mi experiencia con Next.js",
    description:
      "Next.js es un framework de React que me ha permitido crear aplicaciones web de",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    title: "Mi experiencia con Next.js",
    description:
      "Next.js es un framework de React que me ha permitido crear aplicaciones web de",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    title: "Mi experiencia con Next.js",
    description:
      "Next.js es un framework de React que me ha permitido crear aplicaciones web de",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
];

export default Home;
