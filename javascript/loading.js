var showcase = document.querySelector(".showcase");
var firstSection = document.querySelector("#first-section");
var secondSection = document.querySelector(".iphone-section");
var thirdSection = document.querySelector(".web-section");
var forthSection = document.querySelector(".laptop-section");
var fifthSection = document.querySelector(".final-section");
firstSection.classList.add("none");
secondSection.classList.add("none");
thirdSection.classList.add("none");
forthSection.classList.add("none");
fifthSection.classList.add("none");

function loadingFunc(){
  headerLoad();
  var loading = document.querySelector("section");
  var body = document.querySelector("body");
  body.classList.add("loading")
  loading.classList.remove("page-load")
  loading.classList.add("loaded")
  body.classList.remove("loading")
}

function headerLoad(){
  showcase.classList.add("show");
};

window.addEventListener("scroll",function() { 
  if(window.scrollY > 200) {
    firstSection.classList.remove("none");
    firstSection.classList.add("show");
  }
  if(window.scrollY > 600) {
    secondSection.classList.remove("none");
    secondSection.classList.add("show");
  }
  if(window.scrollY > 1000) {
    thirdSection.classList.remove("none");
    thirdSection.classList.add("show");
  }
  if(window.scrollY > 1800) {
    forthSection.classList.remove("none");
    forthSection.classList.add("show");
  }
  if(window.scrollY > 1200) {
    fifthSection.classList.remove("none");
    fifthSection.classList.add("show");
  }

});