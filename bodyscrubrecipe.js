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