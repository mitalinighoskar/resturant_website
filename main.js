let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>
{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>
    {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach(Links =>
            {
                Links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        }
    });
};

document.querySelector('#search-icon').onclick = () =>
{
    document.querySelector('#search-form').classList.toggle('active');
};

document.querySelector('#close').onclick = () =>
{
    document.querySelector('#search-form').classList.remove('active');
};

var homeSwiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var reviewSwiper = new Swiper(".review-slidebar",{
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:
    {
      0: 
      {
        slidePerView: 1,
      },
      640: 
      {
        slidePerView: 2,
      },
      768: 
      {
        slidePerView: 2,
      },
      1024: 
      {
        slidePerView: 3,
      },
    },
});

function loader()
{
  document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut()
{
  setInterval(loader, 3000);
}
window.onload = fadeOut;



 const addToCartButtons = document.querySelectorAll(".btn");
 addToCartButtons.forEach((button) => {
     button.addEventListener("click", addToCart);
 });

 function addToCart(event) {
     event.preventDefault();
     localStorage.removeItem("cart");

     const item = {
         id: this.getAttribute("data-id"),
         name: this.getAttribute("data-name"),
         price: this.getAttribute("data-price")
     };
     let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
     cartItems.push(item);
     localStorage.setItem("cart", JSON.stringify(cartItems));

     alert("Item added to cart!");
     const cartIcon = document.querySelector(".fas.fa-shopping-cart");
     cartIcon.innerHTML = `<span class="cart-items">${cartItems.length}</span>`;
     const cartItemCount = document.querySelector(".cart-items");
         if (cartItemCount) 
         {
            cartItemCount.textContent = Number(cartItemCount.textContent) + 1;
         } else 
         {
             const countElement = document.createElement("span");
             countElement.classList.add("cart-items");
             countElement.textContent = 1;
             cartIcon.appendChild(countElement);
         }
 }



