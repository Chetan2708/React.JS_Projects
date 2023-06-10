import React from "react";
import vg from "../Asset/vg.png";
import { Link } from 'react-router-dom'
import {AiFillYoutube, AiFillInstagram, AiFillLinkedin, AiFillGithub} from "react-icons/ai"

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h3>Asmr Programmer</h3>
        </main>
      </div>

      <div className="home2" id="about">
        <img src={vg} alt="Graphic" />
        <p>
          {/* Description about the website */}
          It is a website that is built for people who are new to coding and want to learn more about it.
          I'll upload the projects as well as product links here.
          To know more, move down!!
        </p>
      </div>

      <div className="home3">
        <div>
          <h1>Who am I?</h1>
          <p>
            {/* Personal introduction */}
            Hi....I am Chetan Gupta and get ready because on this website you will get the source code files
            for the projects that I'll be doing on my Youtube channel for completely free, and also the product links
            that I'll review on my channel. My aim is to contribute to the open-source platform and also help beginners
            understand coding. Please like, share, and subscribe. You can also follow me on LinkedIn/Instagram...
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Follow me :-</h1>
          <article>
            <div style={{ animationDelay: "0.2s" }}>
              {/* YouTube icon */}
              <AiFillYoutube className="my-icon" />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              {/* Instagram icon */}
              <AiFillInstagram className="my-icon2" />
              <Link to="https://www.instagram.com/_chetan2708/">
                <p> Instagram </p>
              </Link>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              {/* LinkedIn icon */}
              <Link to="https://www.linkedin.com/in/chetan-gupta-7a7951200/">
                <AiFillLinkedin />
                <p>Linkedin</p>
              </Link>
            </div>
            <div style={{ animationDelay: "1.2s" }}>
              {/* GitHub icon */}
              <AiFillGithub />
              <Link to="https://github.com/Chetan2708">
                <p>Github</p>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;

