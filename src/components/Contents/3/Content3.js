import "./Content3.css";
import Group21 from "../../../assets/images/Group21.png";
import Image6 from "../../../assets/images/image6.png";
import EC from "../../../assets/images/electronic-circuit.png";
import Compass from "../../../assets/images/compass.png";
import DetailComponent from "./DetailComponent";
const Content3 = () => {
  return (
    <div>
      <DetailComponent
        img={Group21}
        icon={EC}
        title="Launch with the best stack"
        desc="A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind"
      />
      <DetailComponent
        img={Image6}
        icon={Compass}
        isReverse={true}
        title="Data-driven pipelines in minutes"
        desc="Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform."
      />
    </div>
  );
};

export default Content3;
