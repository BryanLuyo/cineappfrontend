import React, { useState, useEffect } from "react";
import { getPeliculaPortada } from "../../services/home/home.service";
import { Link } from "react-router-dom";

export const SliderPortada = () => {
  const [peliculaportada, setpeliculaportada] = useState([]);

  useEffect(() => {
    getPeliculaPortada().then((response) => {
      setpeliculaportada(response.data.response);
      console.log(response.data.response);
    });
  }, []);

  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {peliculaportada.map((val, key) => {
            return (
              <div className={`carousel-item ${key === 0 ? 'active' : ''}`} key={key} style={{ backgroundImage: "url(https://cdn.cineplanet.com.pe/contentAsset/raw-data/0c3ee52c-b326-4c87-90d8-32d481faa293)" }}>                
                <div className="carousel-caption d-none d-md-block">
                  { ( val.estreno == 1 ) ? <small>Estreno</small> : '' }
                  <h5>
                    <span>{ val.nombre }</span> <br />
                    { (val.nombre2) ? val.nombre2 : '' }
                  </h5>
                  <p>
                    { val.descripcion_portada }
                  </p>
                  <Link to="/auth/register" className="btn btn__rojo">
                     Comprar
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
