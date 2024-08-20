let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    // searchBtn.classList.remove('fa-times');
    // searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
//  book now form start
function message(){
  var Name = document.getElementById('name');
  var nam = document.getElementById('nam');
  var arrival = document.getElementById('arrival');
  var leaving = document.getElementById('leaving');
  const success = document.getElementById('success');
  const danger = document.getElementById('danger');
 
  if(Name.value ==='' || nam.value ==='' || arrival.value ==='' || leaving.value ==='' ){
    danger.style.display='block';

  }

  else{
    setTimeout(() =>{
      Name.value ='';
      nam.value ='';
      arrival.value ='';
      leaving.value ='';
    },2000);

    success.style.display='block';
  }

  
    setTimeout(() =>{

      danger.style.display='none';
      success.style.display='none';

    },4000);
}
//  book now form end

//  contact form start
function messag(){
  var fname = document.getElementById('fname');
  var email= document.getElementById('email');
  var number = document.getElementById('number');
  var subject = document.getElementById('subject');
  const succes = document.getElementById('succes');
  const dan = document.getElementById('dan');
 
  if(fname.value ==='' || email.value ==='' || number.value ==='' || subject.value ==='' ){
    dan.style.display='block';

  }

  else{
    setTimeout(() =>{
      fname.value ='';
      email.value ='';
      number.value ='';
      subject.value ='';
    },2000);

    succes.style.display='block';
  }

  
    setTimeout(() =>{

      dan.style.display='none';
      succes.style.display='none';

    },4000);
}
// contact form end


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});