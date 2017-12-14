function collapsenav() {
    let changenav = document.getElementById("mainnav");
    if (changenav.className === "mainnav") {
        changenav.className += " responsivenav";



    } else {
        changenav.className = "mainnav";

    }

}



/*when the navigation bar reaches the top of the browser it sticks*/
function stickyscroll() {
    let navbar = document.getElementById("mainnav");
    let currentpage = document.getElementById("navicon");
    const sticky = navbar.offsetTop;
    const slides = document.getElementsByClassName("banner");

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");

    } else {
        navbar.classList.remove("sticky");
    }


}

window.onload = function () {
    document.addEventListener("scroll", stickyscroll);
    document.getElementById("navicon").addEventListener("click", collapsenav);
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




