let li = document.querySelectorAll(".faq_text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("arrow")){
          clickedLi = e.target.parentElement;
        }
        else{
          clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle("showAnswer");
      });
    };    
  
const cityOne = document.querySelector('#cityOne');
const cityTwo = document.querySelector('#cityTwo');
const replaceCities = document.querySelector('#replaceCities');  
  replaceCities.addEventListener("click", ()=>{
    cityOne.value = cityTwo.value;
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
        passenger_count.innerText = (a + b + c) + " Passengers";
      }
    });

    minusAdults.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        numAdults.innerText = a;
        passenger_count.innerText = (a + b + c) + " Passengers";
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
        passenger_count.innerText = (a + b + c) + " Passengers";
      }
    });

    minusChildren.addEventListener("click", ()=>{
      if(b >= 1){
        b--;
        numChildren.innerText = b;
        passenger_count.innerText = (a + b + c) + " Passengers";
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
        passenger_count.innerText = (a + b + c) + " Passengers";
      }
      else alert("Infants without seats cant be higher than Adults");
    });

    minusInfants.addEventListener("click", ()=>{
      if(c >= 1){
        c--;
        numInfants.innerText = c;
        passenger_count.innerText = (a + b + c) + " Passengers";
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









    












    