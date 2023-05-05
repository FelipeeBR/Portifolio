import React from 'react';
import BannerImage from "../Assets/home-banner-image.png";
import Typed from 'typed.js';
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Home = () => {
  
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Node.js', 'React.js', 'Python', 'WordPress'],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='home-container'>
        <div className='home-banner-container'>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Eu sou Felipe Mendes. Tenho conhecimento sobre <span ref={el}/>
            </h1>
            <p className='primary-text'>
              Sou um Desenvolvedor Web. Minha especialidade é criar sites com back-end, front-end e muito mais...
            </p>
            <div>
              <div className='flexx-button'>
                <a href="https://www.linkedin.com/in/felipe-mendes-neves-07211a247/" target='_blank' rel="noreferrer">
                  <button className='secondary-button'>
                    <AiOutlineLinkedin/>
                  </button>
                </a>
              </div>
              <a href="https://github.com/FelipeeBR" target='_blank' rel="noreferrer">
                <div className='flexx-button'>
                  <button className='secondary-button'>
                    <AiOutlineGithub/>
                  </button>
              </div>
              </a>
            </div>
          </div>
          <div className='home-image-section'>
            <img src={BannerImage} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home;