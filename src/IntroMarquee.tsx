import Marquee from "react-fast-marquee";

const IntroMarquee = () => {
  return(
    <Marquee
      speed={70}
      gradient={true}
      gradientColor={[211, 211, 211]}>
      Machine Design • PLC Programming • Electrical Cabinet Layout • HMI Design • Custom Machines •&nbsp; 
    </Marquee>
  )
}

export default IntroMarquee;