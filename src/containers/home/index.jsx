import React from "react";
import { Animate } from "react-simple-animate";
import { FaLinkedin } from "react-icons/fa";
import "./styles.scss";

const Home = () => {
  function handleNavigateLinkedin() {
    window.open(
      "https://www.linkedin.com/in/ibhanan-saini-853503263/",
      "_blank"
    );
  }

  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Ibhanan
          <br />
          Software Developer.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          
          <div className="contact-me__socials-wrapper">
            <FaLinkedin onClick={handleNavigateLinkedin} size={32} />
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
