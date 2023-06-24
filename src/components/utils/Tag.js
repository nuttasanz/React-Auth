import "./Tag.css";

const Tag = (props) => {
  return (
    <div className="tag-wrapper">
      <div className="tag-icon">
        <img src={props.icon} alt="icon" />
      </div>

      <div>{props.title}</div>
    </div>
  );
};

export default Tag;
