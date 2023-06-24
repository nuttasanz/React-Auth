import Tag from "../../utils/Tag";
import ChartBar from "../../../assets/images/ChartBar.png";
import NewletterDev from "../../../assets/images/NewletterDev.png";
import Timeline from "../../../assets/images/Timeline.png";
import awesomeEye from "../../../assets/images/awesomeEye.png";

import "./Content2.css";
import StepComponent from "./StepComponent";

const Content2 = () => {
  return (
    <div className="content2-wrapper">
      <Tag title="Why Qubly" icon={awesomeEye} />
      <div className="content2-header">
        Get actionable insights from Big Data in 3 steps
      </div>
      <div className="content2-text">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </div>
      <div className="step-wrapper">
        <StepComponent
          icon={ChartBar}
          title="Valuable business insights"
          desc="Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights."
        />
        <StepComponent
          icon={NewletterDev}
          title="Powerful Algorithms"
          desc="With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data."
        />
        <StepComponent
          icon={Timeline}
          title="Data in real-time"
          desc="Collect data in real-time from multiple channels and move it into a data lake, in its original format."
        />
      </div>
    </div>
  );
};

export default Content2;
