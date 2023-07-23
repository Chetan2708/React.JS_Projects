import { projects } from "../assets/Data1";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Projects = () => {
  return (
    <div id="work">
      <h2 className="section-title">
        My <span> Work </span>
      </h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2500}
            infiniteLoop={true}
            autoPlay={true}
          >
            {projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} className="project-Img" />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    Live Preview
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Projects;
