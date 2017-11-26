/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function collapsenav() {
    let changenav = document.getElementById("mainnav");
    if (changenav.className === "mainnav") {
        changenav.className += " responsivenav";



    } else {
        changenav.className = "mainnav";

    }

}


function stickyscroll() {
    let navbar = document.getElementById("mainnav");
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");

    } else {
        navbar.classList.remove("sticky");
    }

    
}

 