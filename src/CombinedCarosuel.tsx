import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/project-carosuel.css";

// icons
import money_icon from './images/icons/money-white.png'
import calander_icon from './images/icons/calendar-white.png'
import growth_icon from './images/icons/growth-white.png'
import up_arrow_icon from './images/icons/up-arrow.png'

// project example images (in order 1-4)
import TC_ProjImg from './images/tipping-conveyor.png'
import SB_ProjImg from './images/project-images/salt-bath/SB_ProjectImg.png'
// import proj_img_3 from './images/icons/right-arrow.png'

// project images
import TC_MainScreenImg from './images/project-images/tipping-conveyor/TC_MainScreen.png'
import TC_ManualScreenImg from './images/project-images/tipping-conveyor/TC_ManualScreen.png'
import TC_ErrorScreenImg from './images/project-images/tipping-conveyor/TC_SyringeErrorScreen.png'
import TC_StateDiagram from './images/project-images/tipping-conveyor/TC_StateDiagram.png'
import TC_IoLayout from './images/project-images/tipping-conveyor/TC_IOLayout.png'
import TC_DocOutline from './images/project-images/tipping-conveyor/TC_DocOutline.png'
import SB_MainScreenImg from './images/project-images/salt-bath/SB_MainScreen.png'
import SB_RecipeScreenImg from './images/project-images/salt-bath/SB_RecipePage.png'



const callJavascript = () => {
  window?.ToggleProjectPopup?.()
}

const SliderSlick = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const slider1 = useRef();
    const slider2 = useRef();

    return (
      <>
        <div className='project-ex-carosuel-container'>
          <Slider 
            asNavFor={nav2} 
            ref={slider1 => setNav1(slider1)}
            slidesToShow={4}
            swipeToSlide={true}
            focusOnSelect={true}
            dots = {true}
            infinite = {true}
            arrows = {true}
            speed = {500}
            slidesToScroll = {1}
          >
            <div className="project-example" onClick={() => callJavascript()}>
              <div className='example-container'>
                <script src="general.js"></script>
                <img className="example-photo" src={TC_ProjImg} />  
                <div className="example-title-container">
                  <p className='example-title'>Automated Tipping Conveyor</p>
                </div>
              </div> 
            </div>
            <div className="project-example" onClick={() => callJavascript()}>
              <div className='example-container'>
                <img className="example-photo" src={SB_ProjImg} />  
                <div className="example-title-container">
                  <p className='example-title'>Salt Bath</p>
                </div>
              </div>  
            </div>
            <div className="project-example" onClick={() => callJavascript()}> 
              <div className='example-container'>
                <div className="example-title-container">
                  <p className='example-title'>Project 3</p>
                </div>
              </div>
            </div>
            <div className="project-example" onClick={() => callJavascript()}>
              <div className='example-container'>
                <div className="example-title-container">
                  <p className='example-title'>Project 4</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div id='project-content-carosuel-container' className='project-content-carosuel-container'>
          <Slider
            asNavFor={nav1}
            ref={slider2 => setNav2(slider2)}
            slidesToShow={1}
            swipeToSlide={false}
            focusOnSelect={false}
            dots = {false}
            infinite = {true}
            arrows = {false}
            speed = {500}
            slidesToScroll = {1}
          >
            <div className="project-content">
              <div className='project-nav-bar'>
                <div className='project-link-container'>
                  <a className="link" href='#proj-section-1'>HMI Design</a>
                  <a className="link" href='#proj-section-2'>Machine Logic</a>
                  <a className="link" href='#proj-section-3'>Documentation</a>
                </div>
                <div className='project-tag-container'>
                  <p className="tag">TwinCAT 3</p>
                  <p className="tag">Beckhoff</p>
                  <p className="tag">Inari Medical</p>
                  <p className="tag">Applied Motion</p>
                </div>
              </div>
              <div className='proj-description-container'>
                <div className='description-header'>
                  <p className='description-title'>Description</p>
                  <div className='description-icon-header'>
                    <div className='description-icon-container'>
                      <img className='calander-icon' src={calander_icon} alt="" />
                      <p className='icon-text'>2022</p>
                    </div>
                    <div className='description-icon-container'>
                      <img className='money-icon' src={money_icon} alt="" />
                      <p className='icon-text'>50k</p>
                    </div>
                    <div className='description-icon-container'>
                      <img className='growth-icon' src={growth_icon} alt="" />
                      <p className='icon-text'>140k/yr</p>
                    </div>
                  </div>
                </div>
                <p className='description-content'>
                  This machine was built to built to automate the process of bonding two components. The 
                  machine requires the use of one operator to load the components into their respective 
                  hoppers and the machine takes care of the rest. For this project I was responsible for 
                  all machine logic, HMI design and implementation, as well as associated documentation 
                  for qualification purposes.
                </p>
                <p className='sidenote'>
                  Note: Due to confidentiality concerns, no images, videos or true documentation of the machine are shown
                </p>
              </div>
              <div id='proj-section-1' className='proj-section-1'>
                <p className='photo-caption'>HMI - Main Screen</p> 
                <div className='proj-section-img-container'>
                  <img className="proj-photo" src={TC_MainScreenImg} />
                </div>
                <p className='photo-caption'>HMI - Manual Operation Screen</p> 
                <div className='proj-section-img-container'>
                  <img className="proj-photo" src={TC_ManualScreenImg} />
                </div>
                <p className='photo-caption'>HMI - Error Screen</p> 
                <div className='proj-section-img-container'>
                  <img className="proj-photo" src={TC_ErrorScreenImg} />
                </div>
              </div>
              <div id='proj-section-2' className='proj-section-2'>
                <p className='photo-caption'>Machine Logic - State Diagram</p> 
                <div className='proj-section-img-container'>
                  <img className="proj-photo" src={TC_StateDiagram} />
                </div>
                <p className='photo-caption'>Machine Logic - I/O Outline</p> 
                <div className='proj-section-img-container'>
                  <img className="proj-photo" src={TC_IoLayout} />
                </div>
              </div>
              <div id='proj-section-3' className='proj-section-3'>
                <p className='photo-caption'>Documentation - Outline</p> 
                <div className='proj-section-img-container'>
                  <img className="proj-photo" src={TC_DocOutline} />
                </div>
              </div>
              <div className='return-to-top-container'>
                <a className='return-to-top-anchor' href="#projects">
                  <img className='return-to-top-arrow' src={up_arrow_icon} />
                </a>
              </div>
            </div>
            <div className="project-description">
              <div className='tag-container'>
                <p className="tag">tags 2</p>
              </div>
            </div>
            <div className="project-description"> 
              <div className='tag-container'>
                <p className="tag">tags 3</p>
              </div>
            </div>
            <div className="project-description">
              <div className='tag-container'>
                <p className="tag">tags 4</p>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
};

export default SliderSlick;