import React from 'react'
import SemImage from '../Assets/sem-image.png';
import "../components/Projects.css";

const Projects = () => {
  return (
    <div className='cards'>
      <div className='col'>
        <section className='card'>
          <div className="icon">
          <img src={SemImage} alt="" />
          </div>     
          <h3>Em Breve</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <button>Saiba Mais</button>
        </section>
        <section className='card'>
          <div className="icon">
            <img src={SemImage} alt="" />
          </div> 
          <h3>Em Breve</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <button>Saiba Mais</button>
        </section>
        <section className='card'>
          <div className="icon">
            <img src={SemImage} alt="" />
          </div> 
          <h3>Em Breve</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <button>Saiba Mais</button>
        </section>
      </div>
      <div className='col'>
        <section className='card'>
          <div className="icon">
          <img src={SemImage} alt="" />
          </div>     
          <h3>Em Breve</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <button>Saiba Mais</button>
        </section>
        <section className='card'>
          <div className="icon">
            <img src={SemImage} alt="" />
          </div> 
          <h3>Em Breve</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <button>Saiba Mais</button>
        </section>
        <section className='card'>
          <div className="icon">
            <img src={SemImage} alt="" />
          </div> 
          <h3>Em Breve</h3>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <button>Saiba Mais</button>
        </section>
      </div>
    </div>
  )
}

export default Projects