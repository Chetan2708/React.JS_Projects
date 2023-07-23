const Themeitem = ({ color, img, changeColor }) => {
  return (
    <img
      src={img}
      alt=""
      className="theme-img"
      onClick={() => {
        changeColor(color);
      }}
    />
  );
};

export default Themeitem;
