//this will allow the activation of the fade in efect because of the observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("appear");
      } 
    });
  }, {threshold: 0, 
      rootMargin:"0px 0px -120px 0px"});

// The html elements under observation
const boxes1 = document.getElementsByClassName("fade-in");


for (const box of boxes1) {
    observer.observe(box); // A kind of event listener 
}



//this is the part that will allow us to SMOOTHLY transition from the landing page to the next part by pressing on the arrow

const anchor=document.getElementById("anchor");
anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior:"smooth"
    });
});

const anchor2=document.getElementById("anchor2");
anchor2.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    });
});

//transition of the new nav bar when we scroll down
//window.onscroll = function() {myFunction()};
//var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
//function myFunction() {
  //if (window.pageYOffset >= sticky) {
   // navbar.classList.add("sticky")
  //} else {
    //navbar.classList.remove("sticky");
  //}
//}

//navbar adding sticky class on scroll
window.addEventListener("scroll", function(){
  var nav =this.document.getElementById("navbar");
  nav.classList.toggle("sticky",window.scrollY > 0);

});

window.addEventListener("scroll", function(){
  var nav2 =this.document.getElementById("navbar2");
  nav2.classList.toggle("sticky",window.scrollY > 0);

});


//responsive nav burger bar
const navSlide = () =>{
const burger =document.querySelector('#lft2')
const navb =document.querySelector('.nav-links');
const navLinks=document.querySelectorAll('.nav-links li');

//toggle nav
burger.addEventListener('click', () => {
  navb.classList.toggle('nav-active');
  
  //burger animation
  burger.classList.toggle('toggle');
  
  //animate links
  navLinks.forEach((link,index) =>{
    if(link.style.animation)
    {
      link.style.animation="";
    }
    else{
      link.style.animation= `navLinkFade 0.5s ease forwards ${index/7+ 0.3}s`;
    }
  })
    
  });

 
};

navSlide();