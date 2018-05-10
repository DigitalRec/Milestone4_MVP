/* Some of the html, css and JS thanks to
https://www.adam-bray.com ,www.w3schools.com and
https://css-tricks.com/three-line-menu-navicon*/




window.onscroll = function(){ sticknav() };
var navbar= document.getElementById("d_nav");
var sticky = navbar.offsetTop;

function sticknav() {
  if(window.pageYOffset >= sticky){
    navbar.classList.add("stick");
  } else {
    navbar.classList.remove("stick");
  }
}



function mobilenav_open(){
  document.getElementById("sidemenu").style.width="100%";
}
function mobilenav_close(){
  document.getElementById("sidemenu").style.width = "0";
}


var dropdown = document.getElementsByClassName("side_dropdown_btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
