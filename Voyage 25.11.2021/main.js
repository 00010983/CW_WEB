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









  let parent = document.getElementById('list');

  function moveRight(){
    let lastChild = document.querySelector('.slider ul li:last-child');
    parent.prepend(lastChild);
  }
  
  function moveLeft(){
    let firstChild = document.querySelector('.slider ul li:first-child');
    parent.append(firstChild);
  }
  
  document.onkeydown = (e)=>{
    switch(e.keyCode){
      case 37: // left
        moveLeft();
        break;
      case 39: // right
        moveRight()
        break;
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




    












    