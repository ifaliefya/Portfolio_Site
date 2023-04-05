function openNav(evt) {
  // document.getElementById(header).toggleClass("open-header");
  
  var element = document.getElementById("header");
  element.classList.toggle("open-header");
  evt.currentTarget.classList.toggle("clicked");
  // console.log("opening tab")
}