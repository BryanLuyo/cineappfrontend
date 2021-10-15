import React from "react";
import { Footer } from "../components/ui/footer";
import { Peliculas } from "../components/ui/peliculas";
import { SliderPortada } from "../components/ui/Slider.portada";

export const HomePage = () => {
  return (
    <>
      <SliderPortada />
      <Peliculas/>

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
      <Footer/>
      
    </>
  );
};
