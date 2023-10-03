function ToggleEduArrow(){
  var arrow = document.getElementById("edu-arrow");
  arrow.classList.toggle("drawer-arrow-active");
  var drawer = document.getElementById("edu-drawer-content");
  drawer.classList.toggle("drawer-active");
};

function ToggleExpArrow(){
  var arrow = document.getElementById("exp-arrow");
  arrow.classList.toggle("drawer-arrow-active");
  var drawer = document.getElementById("exp-drawer-content");
  drawer.classList.toggle("drawer-active");
};

function ToggleWorkArrow(){
  var arrow = document.getElementById("work-arrow");
  arrow.classList.toggle("drawer-arrow-active");
  var drawer = document.getElementById("work-drawer-content");
  drawer.classList.toggle("drawer-active");
};

var openProj = 0;
var clickCount = 0; 

window.addEventListener('click', function(e){  
  if (clickCount != 0) {
    var project = document.getElementById("project-".concat(openProj.toString()));
    if (project.contains(e.target)){
      // Clicked in box
    } else {
      // Clicked outside the box
      project.classList.toggle("show-project");
      var popup = document.getElementById("proj-desc-popup");
      popup.classList.toggle("show-popup");
      openProj = 0;
      clickCount = 0;
    }
  } else if (openProj != 0) {
    clickCount = clickCount + 1;
  }
});

function ToggleProjectPopup(projNumber){
  var popup = document.getElementById("proj-desc-popup");
  popup.classList.toggle("show-popup");
  var project = document.getElementById("project-".concat(projNumber.toString()));
  project.classList.toggle("show-project");
  openProj = projNumber;
};



// function ToggleProjectPopup_OLD(){
//   var popup = document.getElementById("project-content-carosuel-container");
//   if ( $(popup).hasClass("project-content-carosuel-container") ) {
//     popup.classList.add("project-content-carosuel-container-active");
//   }
  
// };