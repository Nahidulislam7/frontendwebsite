
function collapsenav() {                                    /*this function allows for the icon to collapse the nav for smaller devices*/
    
    var changenav = document.getElementById("mainnav");
    if (changenav.className === "mainnav") {
        changenav.className += " responsivenav";



    } else {
        changenav.className = "mainnav";

    }

}




function stickyscroll() {
    var navbar = document.getElementById("mainnav");                        /*this function allows for the navigation bar to stick to the top of the window*/
    var currentpage = document.getElementById("navicon");
    var sticky = navbar.offsetTop;                              
    const slides = document.getElementsByClassName("banner");

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");                                     /*if statment with a condition that checks if the user has scrolled*/

    } else {
        navbar.classList.remove("sticky");
    }


}

window.onload = function () {
    document.addEventListener("scroll", stickyscroll);
    document.getElementById("navicon").addEventListener("click", collapsenav); /*when the icon is clicked the navigation collapses*/
    responsiveSlider()
}

function responsiveSlider() {

  var slider = document.getElementById("homeimageslider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slidecontent");
  var count = 1;
  var items = slideList.querySelectorAll("li").length;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");

  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });

  var prevSlide = function() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count = 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth  + "px";
      count++;
    }
  };

  var nextSlide = function() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth  + "px";
      count++;
    }
    else if(count = items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };
  
  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });
  
  setInterval(function() {
    nextSlide()
  }, 8000);

};




