import Stats from "./Stats";
import Info from "./Info";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Chetan_Gupta_resume.pdf";
import Skills from "./Skills";
import { timeline } from "../assets/Data1";
import Timeline from "./Timeline";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title me ">
          About <span>Me</span>
        </h2>
        <div className="about-container grid">
          <div className="about-info">
            <h3 className="subtitle">Personal Infos</h3>
            <ul className="info-list grid">
              <Info />
            </ul>
            <a href={resume} download="Chetan_resume" className="button">
              Resume
              <span className="button-icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>
      <div className="seperator"></div>
      <section className="skills">
        <h3 className="subtitle subtitle-center">My Skills</h3>
        <div className="skill-container grid">
          <Skills />
        </div>
      </section>
      <div className="seperator"></div>
      <section className="timeline">
        <h3 className="subtitle subtitle-center">Experience & Education</h3>
        <div className="timeline-container grid">
          <div className="timeline-data">
            {timeline.map((value) => {
              if (value.category === "experience") {
                return <Timeline key={value.id} {...value} />;
              }
              return null;
            })}
          </div>
          <div className="timeline-data">
            {timeline.map((value) => {
              if (value.category === "education") {
                return <Timeline key={value.id} {...value} />;
              }
              return null;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
