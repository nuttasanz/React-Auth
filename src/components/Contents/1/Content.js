import "./Content.css";
import Brigthness from "../../../../src/assets/images/edit-brightness.png";
import image1 from "../../../../src/assets/images/image1.png";
const Content = () => {
  return (
    <div className="content">
      <div className="content-wrapper">
        <div>
          <div className="content1">
            <img src={Brigthness} alt="logo" className="logo2" />
            <div>v3.1 released. <span style={{textDecoration: 'underline',cursor:'pointer'}}>Learn more</span></div>
          </div>
          <div className="header-text">Your data with real-time analytics</div>
          <div className="normal-text">
            Harness the potential of Big Data Analytics & Cloud Services and
            become a data-driven organization with Needle tail
          </div>
          <div className="button-wrapper">
          <button className="button1">Start free trial</button>
          <button className="button2">Learn more</button>
          </div>
        </div>
        <div className="image-wrapper">
            <img src={image1} alt="image1" className="image1"/>
        </div>
      </div>
    </div>
  );
};

export default Content;
