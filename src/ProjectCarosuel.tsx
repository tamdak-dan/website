import Slider from "react-slick";

// import proj_img_1 from './images/dan.jpg'
import proj_img_2 from './images/tipping-conveyor.png'
// import proj_img_3 from './images/icons/right-arrow.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/project-carosuel.css";

const callJavascript = () => {
  window?.ToggleProjectPopup?.()
}

export default function ProjectSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <Slider {...settings}>
      <div className="project-example" onClick={() => callJavascript()}>
        <script src="general.js"></script>
        <img className="example-photo" src={proj_img_2} />  
        <h3 className="example-title">Automated Tipping Conveyor</h3>
      </div>
      <div className="project-example" onClick={() => callJavascript()}>
        <h3 className="example-title">Project 2</h3>
      </div>
      <div className="project-example" onClick={() => callJavascript()}> 
        <h3 className="example-title">Project 3</h3>
      </div>
      <div className="project-example" onClick={() => callJavascript()}>
        <h3 className="example-title">Project 4</h3>
      </div>
      <div className="project-example" onClick={() => callJavascript()}>
        <h3 className="example-title">Project 5</h3>
      </div>
      <div className="project-example" onClick={() => callJavascript()}>
        <h3 className="example-title">Project 6</h3>
      </div>
    </Slider>
  );
}
