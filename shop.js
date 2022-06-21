window.addEventListener("scroll", function(){
    var nav =this.document.getElementById("navbar");
    nav.classList.toggle("sticky",window.scrollY > 0);
  
  });

  window.addEventListener("scroll", function(){
    var nav2 =this.document.getElementById("navbar2");
    nav2.classList.toggle("sticky",window.scrollY > 0);
  
  });



// =======Add active class to the current control button (highlight it)========
var btnContainer = document.getElementsByClassName("filtercontainer");
var btns = document.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//responsive nav burger bar
const navSlide = () =>{
    const burger =document.querySelector('#lft2');
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


     //=======Filtering (inspiration from w3schools: https://www.w3schools.com/howto/howto_js_filter_elements.asp)=========

function filterSelection(c){
  var x,i;
  
  x=document.getElementsByClassName("filterDiv");
  for(i=0;i<x.length;i++){
    RemoveClass(x[i], "show fade");
    
    if(x[i].className.indexOf(c)>-1){
      AddClass(x[i], "show fade"); 
    } 
  }
}
filterSelection("all");



//=======Showing filtered elements=======
function AddClass(element,name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

//=======Hiding elements that are not selected=======
function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}








