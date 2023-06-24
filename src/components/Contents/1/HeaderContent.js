import "./HeaderContent.css";
import NavBar from "../../NavBar/NavBar";
import Content from "./Content";
const HeaderContent = () => {
  return (
    <div className="bgImage">
      <div className="header-wrapper">
        <NavBar />
        <Content />
      </div>
    </div>
  );
};

export default HeaderContent;
