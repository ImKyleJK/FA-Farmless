var isTabActive;
var favicon = document.querySelector("link[rel~='icon']");
var PageID = '0'
var PageName = {0:"Home",1:"About Us"}

window.onload = function () { 
  isTabActive = true;
  $("#loader").fadeOut(200)
}; 
window.onfocus = function () { 
  isTabActive = true; 
}; 
window.onblur = function () { 
  isTabActive = false; 
};

setInterval(function () { 
  if(isTabActive) {
    document.title = `${PageName[PageID] || "Loading"} - Farmless 🌾`;
    favicon.href = "/assets/img/favicon_colour_white.png"    
  } else {
    document.title = `Farmless 🌾`;
    favicon.href = "/assets/img/favicon_grayscale_white.png"
  }
}, 500);