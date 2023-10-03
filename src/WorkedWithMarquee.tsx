import Marquee from "react-fast-marquee";
import "./styles/marquee.css"

const WorkedWithMarquee = () => {
  return(
    <Marquee
      speed={70}
      gradient={true}
      gradientColor={[211, 211, 211]}>
      <img className="marquee-img" src="src/images/logos/beckhoff-logo-bw.png" />
      <img className="marquee-img" src="src/images/logos/TwinCAT-logo.png" />
      <img className="marquee-img" src="src/images/logos/applied-motion-logo.png" />
      <img className="marquee-img" src="src/images/logos/Siemens-logo-bw.png" />
      <img className="marquee-img" src="src/images/logos/Arduino-logo.png" />
      <img className="marquee-img" src="src/images/logos/Panasonic-logo.png" />
      <img className="marquee-img" src="src/images/logos/ni-logo.png" />
      <img className="marquee-img" src="src/images/logos/keyence-logo.png" />
      <img className="marquee-img" src="src/images/logos/cognex-logo.png" />
      <img className="marquee-img" src="src/images/logos/Mitsubishi-logo.png" />
      <img className="marquee-img" src="src/images/logos/eaton-logo.png" />
      <img className="marquee-img" src="src/images/logos/QT-logo.png" /> 
      <img className="marquee-img" src="src/images/logos/beijer-logo.png" />
    </Marquee>
  )
}

export default WorkedWithMarquee;