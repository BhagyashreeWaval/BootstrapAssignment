
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    var elem = document.getElementById("MenuDropdown");
elem.style.display="block";
}


window.onclick = function(event) {
  if (!event.target.matches('#menu')) {

       var elem = document.getElementById("MenuDropdown");
       elem.style.display="none";
  }
}

