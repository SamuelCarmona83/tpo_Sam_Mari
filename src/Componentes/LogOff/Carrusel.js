import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import foto1 from './../../imagenes/carrusel_foto1.png'

function Carrucel (){

    return (
    <article className='carrucel'>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={foto1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://content.nationalgeographic.com.es/medio/2022/12/12/perro-1_514aad3b_221212161023_1280x720.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://content.nationalgeographic.com.es/medio/2022/12/12/perro-1_514aad3b_221212161023_1280x720.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
    </article>
    );
}

export default Carrucel;