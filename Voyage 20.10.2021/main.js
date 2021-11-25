let li = document.querySelectorAll(".faq-text li");
    for (var i = 0; i < li.length; i++) {
      li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("arrow")){
          clickedLi = e.target.parentElement;
        }else{
          clickedLi = e.target.parentElement.parentElement;
        }
       clickedLi.classList.toggle("showAnswer");
      });
    }







    const openLoginButtons = document.querySelectorAll('[data-login-target]')
    const closeLoginButtons = document.querySelectorAll('[data-close-button]')
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
    
    closeLoginButtons.forEach(button => {
      button.addEventListener('click', () => {
        const login = button.closest('.login')
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