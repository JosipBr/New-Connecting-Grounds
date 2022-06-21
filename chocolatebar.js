const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);


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


    //shopping cart
      const shopSlide = () =>{
      const basket1 =document.querySelector('.basketbutton1');
      const basket2 =document.querySelector('.basketbutton2');
      const checkout =document.querySelector('.checkout');
      const checkout2 =document.querySelector('.checkout2');
      
     
      basket1.addEventListener('click', () => {
        checkout.classList.toggle('checkout-active');
             
        });
      
       
      basket2.addEventListener('click', () => {
        checkout2.classList.toggle('checkout-active');
        });
      
       
      };
      
      shopSlide();

//imageslider

const productContainers = [...document.querySelectorAll('.productcontainer')];
const nxtBtn = [...document.querySelectorAll('.rgt')];
const preBtn = [...document.querySelectorAll('.lft')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// (+/-) function/////////////////////////////



const plus=document.querySelector(".plus");
const minus=document.querySelector(".minus");

const plus2=document.querySelector(".plus2");
const minus2=document.querySelector(".minus2");



const totalCount = document.getElementById("total-count");
const totalCount2 = document.getElementById("total-count2");

var count = 1;

totalCount.innerHTML = count;
totalCount2.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
  totalCount2.innerHTML = count;
  
 
  price.innerHTML="Price: "+ URLDATA.get('price')*count + " DKK";
  price2.innerHTML="Price: "+ URLDATA.get('price')*count + " DKK";
  
 
};


// Function to decrement count
const handleDecrement = () => {
  if(count == 1){
    count=1;
    totalCount.innerHTML = count;
    totalCount2.innerHTML = count;
    
    
    price.innerHTML="Price: "+ URLDATA.get('price')*count + " DKK";
    price2.innerHTML="Price: "+ URLDATA.get('price')*count + " DKK";
    
  }
  
  else{
    count--;
    totalCount.innerHTML = count;
    totalCount2.innerHTML = count;
    
    price.innerHTML="Price: "+ URLDATA.get('price')*count + " DKK";
    price2.innerHTML="Price: "+ URLDATA.get('price')*count + " DKK";
  
    
  }
  
  
};


// Add click event to buttons
plus.addEventListener("click", handleIncrement);
minus.addEventListener("click", handleDecrement);



plus2.addEventListener("click", handleIncrement);
minus2.addEventListener("click", handleDecrement);




const price=document.querySelector(".price");
price.innerHTML="Price: "+ URLDATA.get('price')*count + " DKK";

const price2=document.querySelector(".price2");
price2.innerHTML="Price: "+ URLDATA.get('price')*count + " DKK";





//add to cart ---> adding the price of the product to the session storage
const addtocart = document.querySelector(".add");
const output =document.querySelector(".yesproducts");
const output2 =document.querySelector(".yesproducts2");
const noproducts=document.querySelectorAll(".noproducts");
const basket=document.querySelector(".spin");


let template="";
addtocart.addEventListener("click", () =>{

  basket.classList.add("wobble-hor-bottom");

  noproducts.forEach(item =>{
    item.classList.add("empty");
  });
  sessionStorage.setItem("price", URLDATA.get('price')*count);
  sessionStorage.setItem("title", URLDATA.get('name'));

  output.innerHTML=`
  <section class="checkouttop">
  <section class="productimg">
  <img src="images/chunkiejunkie.png" alt="chocolatebar">
  </section>
  <section class="titleandamount">

  <section class="productname">
    <p>Chunkie Junkie</p>
  </section>

  <section class="number3">
    <class id="total-count"><p>- ${count} +</p></class>
  </section>

</section>
<section class="price3"><p>${URLDATA.get('price')*count} </p>DKK</section>
</section>
<hr>

<section class="checkoutbottom">
  <section class="checkoutp">
  <p class="subtotal">Subtotal</p>
  <p class="totalamount">15 DKK</p>
  </section>
  <button type="button">Checkout</button>
</section>
  `;

  output2.innerHTML=`
  <section class="checkouttop">
  <section class="productimg">
  <img src="images/chunkiejunkie.png" alt="chocolatebar">
  </section>
  <section class="titleandamount">

  <section class="productname">
    <p>Chunkie Junkie</p>
  </section>

  <section class="number3">
    <class id="total-count"><p>- ${count} +</p></class>
  </section>

</section>
<section class="price3"><p>${URLDATA.get('price')*count} DKK</p></section>
</section>
<hr>

<section class="checkoutbottom">
  <section class="checkoutp">
  <p class="subtotal">Subtotal</p>
  <p class="totalamount">15 DKK</p>
  </section>
  <button type="button">Checkout</button>
</section>
  `;



  
});


document.querySelectorAll(".crosscontainer").forEach(item =>{
  item.addEventListener('click', event =>{
    event.preventDefault();
    const checkout =document.querySelector('.checkout');
    const checkout2 =document.querySelector('.checkout2');
    checkout.classList.toggle('checkout-active');
    checkout2.classList.toggle('checkout-active');
  })
})


