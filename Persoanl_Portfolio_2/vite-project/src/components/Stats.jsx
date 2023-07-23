import { useState } from "react";
import { mystats } from "../assets/Data1";
import parse from "html-react-parser";
import { useEffect } from "react";
const Stats = () => {
  const [num, setno] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (num < 70) {
        setno(num + 1);
      }
    }, 30);
  }, [num]);
  return (
    <>
      {mystats.map(({ no, title }, index) => (
        <div className="stats-item" key={index}>
          <h3 className="stats-no">{parse(no)}</h3>
          <p className="stats-title">{parse(title)}</p>
        </div>
      ))}
      <div className="stats-item">
        <h3 className="stats-no">{num}+</h3>
        <p className="stats-title">
          Completed <br /> Projects
        </p>
      </div>
      <div className="stats-item">
        <h3 className="stats-no">
          <span style={{ fontSize: "20px" }}>
            Web <br /> Development
          </span>
        </h3>
      </div>
      <div className="stats-item">
        <h3 className="stats-no">
          <span style={{ fontSize: "20px" }}>
            App
            <br /> Development
          </span>
        </h3>
      </div>
    </>
  );
};

export default Stats;
