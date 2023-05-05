import { useState, useEffect } from "react";
import React from 'react';
import "../components/Skills.css";

const Skills = () => {
  const [upValue, setUpValue] = useState({
    html: "100%",
    css: "100%",
    javascript: "100%",
    php: "15%",
    django: "25%",
    nodejs: "90%",
    mysql: "90%"
  });
  useEffect(() => {
    const spans = document.querySelectorAll('.progress-bar span');
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
      span.innerHTML = span.dataset.width;
    })
  });

  return (
    <div className='container-skills'>
      <h1>Minhas Habilidades</h1><br />
      <div className="progress-container">
        <h4>HTML</h4>
        <div className="progress-bar">
          <span data-width={upValue.html}></span>
        </div>
      </div>
      <div className="progress-container">
        <h4>CSS</h4>
        <div className="progress-bar">
          <span data-width={upValue.css}></span>
        </div>
      </div>
      <div className="progress-container">
        <h4>JavaScript</h4>
        <div className="progress-bar">
          <span data-width={upValue.javascript}></span>
        </div>
      </div>
      <div className="progress-container">
        <h4>PHP</h4>
        <div className="progress-bar">
          <span data-width={upValue.php}></span>
        </div>
      </div>
      <div className="progress-container">
        <h4>Node.js</h4>
        <div className="progress-bar">
          <span data-width={upValue.nodejs}></span>
        </div>
      </div>
      <div className="progress-container">
        <h4>Django</h4>
        <div className="progress-bar">
          <span data-width={upValue.django}></span>
        </div>
      </div>
      <div className="progress-container">
        <h4>MySQL</h4>
        <div className="progress-bar">
          <span data-width={upValue.mysql}></span>
        </div>
      </div>
    </div>
  )
}

export default Skills