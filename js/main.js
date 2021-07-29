// $(window).on('beforeunload', function() {
//     $(window).scrollTop(0);
// });
// window.beforeunload(function(){
//   window.scrollTo(0,0);
// });

//Waiting for page to load so we can enable animations
window.onload = (event) => {
    var logo = document.getElementsByClassName("logo")[0];
    var navbar = document.getElementsByClassName("nav")[0];
    var intro = document.getElementsByClassName("intro-caption")[0];
    var introImg = document.getElementsByClassName("intro__img")[0];

    logo.classList.add("slideDown-loaded");
    navbar.classList.add("slideDown-loaded");
    intro.classList.add("slideUp-loaded");
    introImg.classList.add("slideUp-loaded");
};

//Keep in mind this doesn't work on the HTMLCollection, but directly on element. Applies if choosing a class, not an ID
var services = document.getElementById("services");
var servicesPositionY = services.getBoundingClientRect().top; //Y position aka Top of services div


//Services Animation
function servicesAnim() {
    //Choose greater than against === since servicesPositionY is an exact decimal
    if( window.scrollY > servicesPositionY - 600 ) {
        services.style.opacity = 1;
        services.classList.add("fadeIn");
        services.classList.add("slideUp-loaded");
    }
}

window.addEventListener('scroll', servicesAnim);


//Gathering all elements for slide animations
var featuredWork = document.getElementsByClassName("section__title--about")[0];
var featuredWorkY = featuredWork.getBoundingClientRect().top; //Y position aka Top of services div

var line = document.getElementsByClassName("line")[0];
var lineY = featuredWork.getBoundingClientRect().top; //Y position aka Top of services div

var featuredImg = document.getElementsByClassName("about-me-1")[0];
var featuredImgY = featuredImg.getBoundingClientRect().top; //Y position aka Top of services div

var featuredDes = document.getElementsByClassName("about-me__body")[0];
var featuredDesButton = document.getElementsByClassName("featuredDesButton")[0] ; //Button
var featuredDesY = featuredDes.getBoundingClientRect().top; //Y position aka Top of services div

var skillList = document.getElementsByClassName("about-me-skill"); //Gets skill HTMLCollection
var listIndex = 0;

//Services Animation
function featuredWorkAnim() {
    //Choose greater than against === since servicesPositionY is an exact decimal

    if( window.scrollY > featuredWorkY - 500 ) {
        featuredWork.classList.add("fadeIn");
        featuredWork.classList.add("slideRight-loaded");
        line.classList.add("fadeIn");
        line.classList.add("slideRight-loaded");
        featuredImg.classList.add("fadeIn");
        featuredImg.classList.add("slideRight-loaded");
        featuredDes.classList.add("fadeIn");
        featuredDes.classList.add("slideLeft-loaded");

        setTimeout(function(){
          skillList[0].classList.add("fadeIn");
        } ,300);
        setTimeout(function(){
          skillList[1].classList.add("fadeIn");
      } ,700);
        setTimeout(function(){
          skillList[2].classList.add("fadeIn");
      } ,1200);
        setTimeout(function(){
          featuredDesButton.classList.add("fadeInSlow");
      } ,1700);


    }
}

window.addEventListener('scroll', featuredWorkAnim);
