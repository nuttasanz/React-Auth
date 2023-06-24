import Accenture from '../../../assets/images/accenture-4.png'
import ReactLogo from '../../../assets/images/react.png'
import Airbnb from '../../../assets/images/airbnb.png'
import Sky from '../../../assets/images/sky-4.png'

const TrustedCompany = () => {
  return (
    <div>
      <div className="trust-title">
        See why the world’s best companies use Qubly to become truly
        data-driven.
      </div>
      <div className="trust-wrapper">
        <div className="h-line"></div>
        <div className="trust-text">Trusted by</div>
        <div className="h-line"></div>
      </div>
      <div className="trust-icon-wrapper">
        <div className="accenture"><img src={Accenture} alt='logo'/></div>
        <div className="react"><img src={ReactLogo} alt='logo'/></div>
      </div>
      <div className="trust-icon-wrapper">
        <div className="airbnb"><img src={Airbnb} alt='logo'/></div>
        <div className="sky"><img src={Sky} alt='logo'/></div>
      </div>
    </div>
  );
};

export default TrustedCompany;
