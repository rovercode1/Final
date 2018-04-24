function loadingFunc(){
  headerLoad()
  var loading = document.querySelector("section");
  var body = document.querySelector("body");
  body.classList.add("loading")
  loading.classList.remove("page-load")
  loading.classList.add("loaded")
  body.classList.remove("loading")
}
var section = document.getElementById("first");

function headerLoad(){
  section.classList.add("show");
}