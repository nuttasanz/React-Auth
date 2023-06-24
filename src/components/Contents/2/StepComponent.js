const StepComponent = (props) => {
  return (
    <div>
      <div className="step-content">
        <div>
          <img src={props.icon} alt="elipse" />
        </div>
        <div className="step-header">{props.title}</div>
        <div className="content2-text">{props.desc}</div>
      </div>
    </div>
  );
};

export default StepComponent;
