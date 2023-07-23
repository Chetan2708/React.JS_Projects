import parse from "html-react-parser";
const Timeline = ({ icon, year, title, desc }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">{icon}</div>
      <span className="timeline-date">{year}</span>
      <h3 className="timeline-title">{parse(title)}</h3>
      <p className="timeline-desc">{desc}</p>
    </div>
  );
};

export default Timeline;
