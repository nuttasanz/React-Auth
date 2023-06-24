import Tag from "../../utils/Tag";

const DetailComponent = (props) => {
  return (
    <div
      className="content3-wrapper"
      style={
        ({ flexDirection: props.isReverse ? "row-reverse" : "" })
      }
    >
      <div className="content3-image-wrapper">
        <img src={props.img} alt="img" />
      </div>
      <div className="desc-wrapper">
        <Tag icon={props.icon} title="For Product Teams" />
        <div className="content3-header">{props.title}</div>
        <div className="content3-text">{props.desc}</div>
      </div>
    </div>
  );
};

export default DetailComponent;
