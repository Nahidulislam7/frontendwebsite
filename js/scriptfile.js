function collapsenav() { 
    let changenav = document.getElementById("mainnav");
    
    if (changenav.className === "mainnav") {
        changenav.className += " responsivenav";
    } 
    else {
        changenav.className = "mainnav";
    }
}



/*this function allows for the navigation bar to stick to the top of the window*/
function stickyscroll() {
    let navbar = document.getElementById("mainnav"); 
    let sticky = navbar.offsetTop;
    const slides = document.getElementsByClassName("banner");

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky"); /*if statment with a condition that checks if the user has scrolled*/

    } else {
        navbar.classList.remove("sticky");
    }
}





window.onload = function () {
    document.addEventListener("scroll", stickyscroll);
    document.getElementById("navicon").addEventListener("click", collapsenav); /*when the icon is clicked the navigation collapses*/
    document.getElementById("backtotopbtn").addEventListener("click", topFunction);
    responsiveSlider();

}

function responsiveSlider() {

    var slider = document.getElementById("homeimageslider");
    let sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slidecontent");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function () {
        sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function () {
        if (count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        } else if (count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function () {
        if (count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        } else if (count = items) {
            slideList.style.left = "0px";
            count = 1;
        }
    };

    next.addEventListener("click", function () {
        nextSlide();
    });

    prev.addEventListener("click", function () {
        prevSlide();
    });

    setInterval(function () {
        nextSlide()
    }, 4000);

};

window.onscroll = function () {
    scrollFunction()

};

window.onclick = function () {

    ratingcheck()

};

function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        document.getElementById("backtotopbtn").style.display = "block";

    } else {
        document.getElementById("backtotopbtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function ratingcheck() {

    let span = document.getElementById("rating");
    let inputs = span.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; ++i) {
        if (inputs[i].checked) {
            document.getElementById("message").innerHTML = "Thank you for your response";

        }
    }

}


function initMap() {
    "use strict";
    let leicester = {
        lat: 52.6333,
        lng: -1.1333
    };
    let dmu = {
        lat: 52.629311,
        lng: -1.137836
    };
    let uol = {
        lat: 52.620956,
        lng: -1.124049
    };
    let mapDemo = document.getElementById("map");

    // this sets the default location for when the map is first loaded
    let map = new google.maps.Map(mapDemo, {
        zoom: 13,
        center: leicester
    });

    // these set different markers you want to show on your map
    let markerDMU = new google.maps.Marker({
        position: dmu,
        map: map,
        title: 'The Good Guys'
    });
    let markerUoL = new google.maps.Marker({
        position: uol,
        map: map,
        title: 'The Bad Guys'
    });
}
