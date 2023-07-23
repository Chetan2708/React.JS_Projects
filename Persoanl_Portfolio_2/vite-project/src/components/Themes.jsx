import { FaCogs } from "react-icons/fa";
import { themes } from "../assets/Data1";
import Themeitem from "./Themeitem";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";

const getStorage = () => {
  let color = "hsl(4, 93%, 54%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }
  return color;
};
const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Themes = () => {
  const [showswitch, setShowswitch] = useState(false);
  const [color, setColor] = useState(getStorage());
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--c1", color);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <div>
      <div
        className={`${
          showswitch ? "style-switch show-switch" : "style-switch"
        }`}
      >
        <div
          className="style-toggle"
          onClick={() => setShowswitch(!showswitch)}
        >
          <FaCogs />
        </div>
        <div className="theme-toggle" onClick={toggleTheme}>
          {theme === "light-theme" ? <BsMoon /> : <BsSun />}
        </div>
        <h3 className="style-title">Switch Color</h3>
        <div className="style-items">
          {themes.map((theme, index) => {
            return (
              <Themeitem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>
        <div className="style-close" onClick={() => setShowswitch(!showswitch)}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Themes;
