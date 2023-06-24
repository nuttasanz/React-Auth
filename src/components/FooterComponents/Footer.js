import "./Footer.css";

import SocialMedia from "../../assets/images/SocialMedia.png";
import Logo from "../../assets/images/Logo.png";
import FooterMenu from "./FooterMenu";
import Image7 from "../../assets/images/image7.png";

const menu = [
  {
    title: "Product",
    footerMenu: [
      "Connections",
      "Protocols",
      "Personas",
      "Integrations",
      "Catalog",
      "Pricing",
      "Security",
      "GDPR",
    ],
  },
  {
    title: "For Developers",
    footerMenu: ["Docs", "API", "Open Source", "Engineering Team"],
  },
  {
    title: "Company",
    footerMenu: ["Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    footerMenu: [
      "Help Center",
      "Contact Us",
      "Security",
      "Bulletins",
      "Documentation",
      "Partner",
      "Portal",
    ],
  },
  {
    title: "Newsletter",
    footerMenu: [],
  },
];

const Footer = () => {
  return (
    <div className="footer-column">
      <div className="footer-wrapper">
        <div className="footer-detail">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="footer-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat ut wisi enim ad minim
          </div>
          <div className="social-media">
            <img src={SocialMedia} alt="logo" />
          </div>
        </div>
        <div className="footer-menu">
          {menu.map((item, i) => (
            <FooterMenu key={i} title={item.title} desc={item.footerMenu} />
          ))}
        </div>
      </div>
      <div className="footer-name">
        <div>Nuttasan Kotchawat</div>
        <div className="image7">
          <img src={Image7} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
