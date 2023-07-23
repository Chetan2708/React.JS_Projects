import { useState, useEffect } from "react";
import { skills } from "../assets/Data1";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const [progress, setProgress] = useState([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        let isAllDone = true;
        const newProgress = prevProgress.map((skill) => {
          const { percentage, targetPercentage, step } = skill;
          if (percentage < targetPercentage) {
            isAllDone = false;
            return { ...skill, percentage: percentage + step };
          } else {
            return skill;
          }
        });
        setIsDone(isAllDone);
        return newProgress;
      });
    }, 60);
    if (isDone) clearInterval(interval);
    return () => clearInterval(interval);
  }, [isDone]);

  useEffect(() => {
    setProgress(
      skills.map((skill) => ({
        ...skill,
        percentage: 0,
        targetPercentage: parseInt(skill.percentage),
        step: parseInt(skill.percentage) / 20, // adjust animation speed here
      }))
    );
  }, []);

  return (
    <>
      {progress.map(({ title, percentage }, index) => (
        <div className="skillitem" key={index}>
          <div className="progress-circle">
            <CircularProgressbar
              strokeWidth={4.5}
              text={`${Math.floor(percentage)}%`}
              value={percentage}
            />
          </div>
          <h3 className="skill-title">{title}</h3>
        </div>
      ))}
    </>
  );
};

export default Skills;
