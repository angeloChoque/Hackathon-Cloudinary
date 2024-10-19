import { Link } from "react-router-dom";

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
              <Link to={"/history"} className="button">
                Comenzar
              </Link>
              <Link to={'#'} className="button is-outlined">
                Ver las historias
              </Link>
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
