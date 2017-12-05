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
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");

    } else {
        navbar.classList.remove("sticky");
    }


}
    var current = 0;
    bannerslide();


    function bannerslide(){
        slides = document.getElementsByClassName("banner");

    setInterval(function () {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0;
        }
        current = current != slides.length - 1 ? current + 1 : 0;
        slides[current].style.opacity = 1;
    }, 3000);
    }

