(function () {
    document.getElementById("contact").addEventListener("submit", PerformGreeting);
    document.getElementById("rating").addEventListener("click", ratingcheck);


}());

function PerformGreeting(ev) {

    let name = document.getElementById("username");
    /*hold value of inputted name*/
    let subname = name.value; 
    document.getElementById("message2").innerHTML = "Thank you for your message" + " " + subname; /*concatenate the input value with the message*/
    document.getElementById("contact").style.display = "none";
    document.getElementById("instructions").style.display = "none";



}


function ratingcheck() {

    let span = document.getElementById("rating");
    let inputs = span.getElementsByTagName("input");
    /* for loop to check if radio buttons in array have been checked*/
    for (let i = 0; i < inputs.length; ++i) {
        if (inputs[i].checked) {
            /*response message if radio button has been checked*/
            document.getElementById("message").innerHTML = "Thank you for your response";

        }
    }

}



function initMap() {
    "use strict";
    //setting latitude and longitude 
    
    let burbank = {
        lat: 34.180839,
        lng: -118.308966
    };
    let hq = {
        lat: 34.148655,
        lng: -118.338719
    };

    let mapDemo = document.getElementById("map");

    // location when window is loaded 
    let map = new google.maps.Map(mapDemo, {
        zoom: 10,
        center: burbank
    });

    // markers pin pointing location
    let markerDMU = new google.maps.Marker({
        position: hq,
        map: map,
        title: 'Headquarters DC Comics'
    });

}

