window.onscroll = function() {
  alterColor()
};

var page1 = 1;
var page2 = 0;
var page3 = 0;
var page4 = 0;

function alterColor() {
  if (document.body.scrollTop > 728 && document.body.scrollTop < 1500 || document.documentElement.scrollTop > 728 && document.documentElement.scrollTop < 1500){
    document.getElementById("navbar").classList = "";
    document.getElementById("navbar").classList.add("page2");
    document.getElementById("aboutPage").style.color = "rgb(73, 83, 94)";
    document.getElementById("homePage").style.color = "white";
    document.getElementById("experiencePage").style.color = "white";
    page2 = 1;
    page1 = 0;
    page3 = 0;
    page4 = 0;
  }
  else {
    if (document.body.scrollTop > 1500 && document.body.scrollTop < 2270 || document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop < 2270){ 
      document.getElementById("navbar").classList = "";
      document.getElementById("navbar").classList.add("page3");
      document.getElementById("aboutPage").style.color = "white";
      document.getElementById("experiencePage").style.color = "rgb(73, 83, 94)";
      document.getElementById("projectsPage").style.color = "white";
      page3 = 1;
      page1 = 0;
      page2 = 0;
      page4 = 0;
    }
    else {
      if (document.body.scrollTop > 2270 || document.documentElement.scrollTop > 2270) {
        document.getElementById("navbar").classList = ""; 
        document.getElementById("navbar").classList.add("page4");
        document.getElementById("projectsPage").style.color = "rgb(73, 83, 94)";
        document.getElementById("experiencePage").style.color = "white";
        document.getElementById("homePage").style.color = "white";
        page4 = 1;
        page1 = 0;
        page3 = 0;
        page2 = 0;
      }
      else{
        document.getElementById("navbar").classList = "";
        document.getElementById("aboutPage").style.color = "white";
        document.getElementById("homePage").style.color = "rgb(73, 83, 94)";
        document.getElementById("projectsPage").style.color = "white";
        page1 = 1;
        page2 = 0;
        page3 = 0;
        page4 = 0;
      }
    }
  }
}

function hover(s){
    document.getElementById(s).style.color = "rgb(73, 83, 94)";
}

function unhover(s){
  if (s == 'homePage' && page1 == 1 || s == 'aboutPage' && page2 == 1 || s == "experiencePage" && page3 == 1 || s == "projectsPage" && page4 == 1)
    document.getElementById(s).style.color = "rgb(73, 83, 94)";
  else
    document.getElementById(s).style.color = "white";
}



var slideIndex = 1;
showSlides(slideIndex);


function advanceSlide(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
      dots[i].className = dots[i].className.replace(" dot1", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}