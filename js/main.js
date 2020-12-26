/* Special Controls */




    /* MIGHT NEED TO ADD NEW FUNCTION FOR PHONE SCREEN */






/* Navigation Bar */
/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/* Update Box */
/* Shift everything to the left and open the sidebar */
function openNav() {
  var scrn = window.matchMedia("(max-width: 600px)");
  if (scrn.matches) {
    document.getElementById("mySidenav").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "100vw";
    document.getElementById("headArticle").style.width = "0";
    document.getElementById("boxArticle").style.width = "0";
  }
  else {
    document.getElementById("mySidenav").style.width = "25vw";
    document.getElementById("main").style.marginLeft = "25vw";
    document.getElementById("headArticle").style.width = "72vw";
    document.getElementById("boxArticle").style.width = "72vw";
  }
}
/* Shift everything to the right and close the sidebar */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("headArticle").style.width = "98vw";
  document.getElementById("boxArticle").style.width = "98vw";
}
