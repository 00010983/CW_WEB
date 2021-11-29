const accardionToggle = (slideMenu) => (e) => {
  slideMenu.forEach((links) => {
      const hidePanel = links.nextElementSibling;
      if (links === e.currentTarget) {
          e.currentTarget.classList.toggle('active');
          hidePanel.classList.toggle('active-block');
      } else {
          links.classList.remove('active');
          hidePanel.classList.remove('active-block');
      }
  });
};


const slideMenu = document.querySelectorAll('.accardion-link');
  slideMenu.forEach((links) => {
    links.addEventListener('click', accardionToggle(slideMenu))
});

const about_link_btn = document.querySelector('#about_link_btn');
const about_link = document.querySelector('#about_link');
  about_link_btn.addEventListener("click", ()=>{
    about_link.classList.add('active-block');
});

const review1 = document.querySelector('#review1');
const review_more1 = document.querySelector('#review_more1');
  let l = 1;
  review_more1.addEventListener("click", ()=>{
    if(l == 1){
        review1.classList.add('review1');
        review_more1.innerText = "less";
        l++;
    }
    else{
        review1.classList.remove('review1');
        review_more1.innerText = "more";
        l--;
      }
    });

    const review2 = document.querySelector('#review2');
    const review_more2 = document.querySelector('#review_more2');
      let k = 1;
      review_more2.addEventListener("click", ()=>{
        if(k == 1){
          review2.classList.add('review2');
          review_more2.innerText = "less";
          k++;
      }
      else{
          review2.classList.remove('review2');
          review_more2.innerText = "more";
          k--;
        }
      });
    
    const review3 = document.querySelector('#review3');
    const review_more3 = document.querySelector('#review_more3');
      let j = 1;
      review_more3.addEventListener("click", ()=>{
      if(j == 1){
          review3.classList.add('review3');
          review_more3.innerText = "less";
          j++;
      }
      else{
          review3.classList.remove('review3');
          review_more3.innerText = "more";
          j--;
        }
      });

    

const cityOne = document.querySelector('#cityOne');
const cityTwo = document.querySelector('#cityTwo');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const replaceCities = document.querySelector('#replaceCities'); 

  replaceCities.addEventListener("click", ()=>{
    text1.innerText = cityOne.value;
    text2.innerText = cityTwo.value;
    cityOne.value = text2.innerText;
    cityTwo.value = text1.innerText;
  });


const openLoginButtons = document.querySelectorAll('[data-login-target]')
const overlay = document.getElementById('overlay')
  openLoginButtons.forEach(button => {
      button.addEventListener('click', () => {
        const login = document.querySelector(button.dataset.loginTarget)
        openLogin(login)
      })
    })
    
    overlay.addEventListener('click', () => {
      const logins = document.querySelectorAll('.login.active')
      logins.forEach(login => {
        closeLogin(login)
      })
    })
    
    function openLogin(login) {
      if (login == null) return
      login.classList.add('active')
      overlay.classList.add('active')
    }
    
    function closeLogin(login) {
      if (login == null) return
      login.classList.remove('active')
      overlay.classList.remove('active')
    };



const passenger_count = document.querySelector("#passenger_count");


const plusAdults = document.querySelector("#plusAdults"),
      minusAdults = document.querySelector("#minusAdults"),
      numAdults = document.querySelector("#numAdults");
    let a = 1;
    plusAdults.addEventListener("click", ()=>{
      if (a + b + c < 9 && a >= 1 && a < 9){
        a++;
        numAdults.innerText = a;
        passenger_count.innerText = (a + b + c) + " passengers";
      }
    });

    minusAdults.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        numAdults.innerText = a;
        passenger_count.innerText = (a + b + c) + " passengers";
      }
    });

const plusChildren = document.querySelector("#plusChildren"),
      minusChildren = document.querySelector("#minusChildren"),
      numChildren = document.querySelector("#numChildren");
    let b = 0;
    plusChildren.addEventListener("click", ()=>{
      if (a + b + c < 9 && b >= 0 && b < 9) {
        b++;
        numChildren.innerText = b;
        passenger_count.innerText = (a + b + c) + " passengers";
      }
    });

    minusChildren.addEventListener("click", ()=>{
      if(b >= 1){
        b--;
        numChildren.innerText = b;
        passenger_count.innerText = (a + b + c) + " passengers";
      }
    });

const plusInfants = document.querySelector("#plusInfants"),
      minusInfants = document.querySelector("#minusInfants"),
      numInfants = document.querySelector("#numInfants");
    let c = 0;
    plusInfants.addEventListener("click", ()=>{
      if (a + b + c < 9 && c >= 0 && c < 9 && a - 1 >= c) {
        c++;
        numInfants.innerText = c;
        passenger_count.innerText = (a + b + c) + " passengers";
      }
      else alert("Infants without seats cant be higher than Adults");
    });

    minusInfants.addEventListener("click", ()=>{
      if(c >= 1){
        c--;
        numInfants.innerText = c;
        passenger_count.innerText = (a + b + c) + " passengers";
      }
    });

    const class_selection = document.querySelector("#class_selection");
    var radios = document.forms["radio_ticket_class"].elements["class"];
    for (var i=0, iLen=radios.length; i<iLen; i++) {
    radios[i].onclick = function() {class_selection.innerText = this.value;
    } 
  };






 



  const receive_top = document.getElementById("receive_top");
  const receive_bottom = document.getElementById("receive_bottom");
    function changeDisplay() {
      receive_top.style.display = "none";
      receive_bottom.style.display = "block";
    };
  

const button = document.querySelector("#button");
const checkbox = document.querySelector("#check");
    if(checkbox.checked) {
      onclick.button = null;
    }
    else {
      function changeDisplay() {
        receive_top.style.display = "none";
        receive_bottom.style.display = "block";
      };
    }




    const carousel = document.querySelector('.carousel');
    const slider = document.querySelector('.slider');
    
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    let direction;
    
    next.addEventListener('click', function() {
      direction = -1;
      carousel.style.justifyContent = 'flex-start';
      slider.style.transform = 'translate(-50%)';  
    });
    
    prev.addEventListener('click', function() {
      if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
      }
      carousel.style.justifyContent = 'flex-end';    
      slider.style.transform = 'translate(50%)';  
      
    });
    
    slider.addEventListener('transitionend', function() {
      
      if (direction === 1) {
        slider.prepend(slider.lastElementChild);
      } else {
        slider.appendChild(slider.firstElementChild);
      }
      
      slider.style.transition = 'none';
      slider.style.transform = 'translate(0)';
      setTimeout(() => {
        slider.style.transition = '0.8s';
      })
    }, false);   












    