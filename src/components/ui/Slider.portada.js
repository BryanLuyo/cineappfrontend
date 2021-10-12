import React from "react";
export const SliderPortada = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/slider1.jpg" className="" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5><span>Rock Dog 2</span> Renace <br /> una estrella</h5>
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </p> 
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.cineplanet.com.pe/contentAsset/raw-data/5a4d11fb-04db-4f7b-bf5d-f8efd769d8ed" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.cineplanet.com.pe/contentAsset/raw-data/5a4d11fb-04db-4f7b-bf5d-f8efd769d8ed" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="estreno">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1">
              <h3 className="titulo titulo--mediano">Próximos Estrenos</h3>
            </div>
            <div className="col-lg-5  d-flex align-items-center justify-content-end">
              <span><a href=".">ver más <img src="/assets/view.png" alt="" /></a></span>
            </div>
            <div className="col-lg-12">
            <div className="owl-carousel owl-theme">
                  <div className="item"><h4>1</h4></div>
                  <div className="item"><h4>2</h4></div>                  
              </div>
            </div>
                       
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="container">
          <div className="row">
              <div className="col-lg-11 offset-lg-1">
                 <div className="banner__titulo">
                    <h2><span>Bienvenido</span> <br/> Socio Cineplanet</h2>
                    <div className="pregunta">
                      <h4>Estas listo para vivir las más grande experiencia
                      y disfrutar los mejores beneficios?</h4>
                      <p>Socio Cineplanet  es el programa que esperabas</p>
                    </div>
                 </div>
              </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
                <ul>
                  <li><a>Condiciones de uso y seguridad</a></li>
                  <li><a>Información financiera</a></li>
                  <li><a>Hechos de importancia</a></li>
                  <li><a>Libro de Reclamaciones</a></li>
                </ul>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};
