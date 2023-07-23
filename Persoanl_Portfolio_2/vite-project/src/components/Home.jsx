import ava from "../assets/ava1.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const animations = {
  span: {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  },
};
const Home = () => {
  return (
    <section className="home section grid">
      <img src={ava} alt="" className="home-img" />

      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            <motion.span {...animations.span}>
              Hi, I am Chetan Gupta.
            </motion.span>
          </h1>
          <p>
            <Typewriter
              options={{
                strings: [
                  "A Front-end Developer",
                  "Web-Application Developer",
                  "Python Developer",
                  "App Developer",
                  "Website Designer",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "typewriter",
              }}
            />
          </p>

          <Link to="/about" className="button">
            About ME{" "}
            <span className="button-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="Dp-background"></div>
    </section>
  );
};

export default Home;
