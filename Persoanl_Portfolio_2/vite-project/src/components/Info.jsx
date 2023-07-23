import { myinfo } from "../assets/Data1";
const Info = () => {
  return (
    <>
      {myinfo.map(({ title, description }, index) => (
        <div className="info-item" key={index}>
          <span className="info-title"> {title}</span>
          <span className="info-description"> {description}</span>
        </div>
      ))}
    </>
  );
};

export default Info;
