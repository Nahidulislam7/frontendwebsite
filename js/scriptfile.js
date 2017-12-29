(function () {

    document.getElementById("navicon").addEventListener("click", collapsenav); /*when the icon is clicked the navigation collapses*/
    window.addEventListener("scroll", scrollFunction);
    document.addEventListener("scroll", stickyscroll);
    document.getElementById("backtotopbtn").addEventListener("click", topFunction);


}());


function collapsenav() {
    let changenav = document.getElementById("mainnav");

    if (changenav.className === "mainnav") {
        changenav.className += " responsivenav"; //nav is collapsed by changing the class in the css
    } else {
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



function scrollFunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) { 
        //if the window is scrolled over 700 px the btn is displayed
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
