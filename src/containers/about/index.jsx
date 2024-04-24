import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";

import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
        <p>Welcome to my professional portfolio website. I love tech. All the systems and innovations in place in order to make a computer tick. I love learning about them
• Backend Dev. I find coding them to be so incredibly fullfilling.
• DevOps and Cloud is something I'm not very proficient in but am constantly
learning and improving.
I also love talking about tech, from hosting podcasts to speaking at an open source event and writing technical blogs. My projects and blogs are linked in the navbar above.</p>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">Software developer</h3>
            <p>
               Software developer with 2.5 years of experience designing
              and building responsive  mobile apps in the
              industry. Proficient with C/C++ and Java 
            </p>
          </Animate>
          
          
        </div>
      </div>
    </section>
  );
};

export default About;
