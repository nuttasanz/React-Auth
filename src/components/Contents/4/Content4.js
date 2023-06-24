import "./Content4.css";
import Profile from "../../../assets/images/Profile.png";
import Tonkean from "../../../assets/images/Tonkean.png";
import BigSpring from "../../../assets/images/BigSpring.png";
import Clearbit from "../../../assets/images/Clearbit.png";
import Mine from "../../../assets/images/Mine.png";
import Shake from "../../../assets/images/Shake.png";

const Content4 = () => {
  return (
    <div className="bgImage2">
      <div className="content4-wrapper">
        <div className="content4-header">
          "What I love about Qubly is the easy way we can collaborate even if
          there is a lot of people involved in the process"
        </div>
        <div className="profile-image-wrapper">
          <img src={Profile} alt="profile" />
        </div>
        <div className="content4-text">
          Guillaume Cabane <br />
          CTO @ BigSpring
        </div>
        <div className="logo-wrapper">
          <div className="tonkean"><img src={Tonkean} alt="logo"/></div>
          <div className="bigspring"><img src={BigSpring} alt="logo"/></div>
          <div className="clearbit"><img src={Clearbit} alt="logo"/></div>
          <div className="mine"><img src={Mine} alt="logo"/></div>
          <div className="shake"><img src={Shake} alt="logo"/></div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
