import Send from "../../assets/images/Send.png";

const FooterMenu = (props) => {
  return (
    <div>
      <div className="footer-menu-title">{props.title}</div>

      {props.desc.length === 0 ? (
        <div className="mailto">
          <input type="email" placeholder="Email" />
          <div className="send-icon">
            <img src={Send} alt="icon" />
          </div>
        </div>
      ) : (
        <div className="footer-text">
          {props.desc.map((item,i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FooterMenu;
