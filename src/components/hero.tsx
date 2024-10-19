const Hero = () => {
  return (
    <>
      <section className="hero gradient-decoration">
        <div className="hero-body">
          <div className="container text-column">
            <h1 className="gradient-title">TramaFlow</h1>
            <h2 className="subtitle">
              Crea una historia aterradora con tu imagen
            </h2>
            <div className="buttons">
              <a href="/history" className="button">
                Comenzar
              </a>
              <a href="#" className="button is-outlined">
                Ver las historias
              </a>
            </div>
          </div>
          <div className="logo-container">
            <img src="/logo.svg" alt="Logotipo de tramaflow" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
