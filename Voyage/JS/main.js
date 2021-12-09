//Accardion pretty simple
const accardionToggle = (slideMenu) => (e) => {
	slideMenu.forEach((links) => {
		const hidePanel = links.nextElementSibling;
		if(links === e.currentTarget) {
			e.currentTarget.classList.toggle('active');
			hidePanel.classList.toggle('active-block');
		} else {
			links.classList.remove('active');
			hidePanel.classList.remove('active-block');
		}
	});
};
//"About" and "Who we are" opens "What is Voyage?"
const slideMenu = document.querySelectorAll('.accardion-link');
slideMenu.forEach((links) => {
	links.addEventListener('click', accardionToggle(slideMenu))
});

//Replacer for Inputed Country names
//Yeap I can use third variable for example("C") but it was my first take and i let it stay
const cityOne = document.querySelector('#cityOne');
const cityTwo = document.querySelector('#cityTwo');
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const replaceCities = document.querySelector('#replaceCities');
replaceCities.addEventListener("click", () => {
	text1.innerText = cityOne.value;
	text2.innerText = cityTwo.value;
	cityOne.value = text2.innerText;
	cityTwo.value = text1.innerText;
});

//Login Modal which give active when it is clecked and almost disables all the functions outside of modal 
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

//overlay gives the opportunity to close the modal with adding the "X/Close" button by just giving active class or removing it where needed
function openLogin(login) {
	if(login == null) return
	login.classList.add('active')
	overlay.classList.add('active')
}
function closeLogin(login) {
	if(login == null) return
	login.classList.remove('active')
	overlay.classList.remove('active')
};

//simple counter of the passener of diffrent age groups which later changes innerText of p's to the sum of "a + b + c"
//in addition to infants without sits i added the limitation that C cant be greater than A
const passenger_count = document.querySelector("#passenger_count");
const plusAdults = document.querySelector("#plusAdults"),
	minusAdults = document.querySelector("#minusAdults"),
	numAdults = document.querySelector("#numAdults");
let a = 1;
plusAdults.addEventListener("click", () => {
	if(a + b + c < 9 && a >= 1 && a < 9) {
		a++;
		numAdults.innerText = a;
		passenger_count.innerText = (a + b + c) + " passengers";
	}
});
minusAdults.addEventListener("click", () => {
	if(a > 1) {
		a--;
		numAdults.innerText = a;
		passenger_count.innerText = (a + b + c) + " passengers";
	}
});
const plusChildren = document.querySelector("#plusChildren"),
	minusChildren = document.querySelector("#minusChildren"),
	numChildren = document.querySelector("#numChildren");
let b = 0;
plusChildren.addEventListener("click", () => {
	if(a + b + c < 9 && b >= 0 && b < 9) {
		b++;
		numChildren.innerText = b;
		passenger_count.innerText = (a + b + c) + " passengers";
	}
});
minusChildren.addEventListener("click", () => {
	if(b >= 1) {
		b--;
		numChildren.innerText = b;
		passenger_count.innerText = (a + b + c) + " passengers";
	}
});
const plusInfants = document.querySelector("#plusInfants"),
	minusInfants = document.querySelector("#minusInfants"),
	numInfants = document.querySelector("#numInfants");
let c = 0;
plusInfants.addEventListener("click", () => {
	if(a + b + c < 9 && c >= 0 && c < 9 && a - 1 >= c) {
		c++;
		numInfants.innerText = c;
		passenger_count.innerText = (a + b + c) + " passengers";
	} else alert("Infants without seats cant be higher than Adults");
});
minusInfants.addEventListener("click", () => {
	if(c >= 1) {
		c--;
		numInfants.innerText = c;
		passenger_count.innerText = (a + b + c) + " passengers";
	}
});

//it take the value of Radio buttons: Eco, Com and so on
// and gives this value to p in passener counter div
const class_selection = document.querySelector("#class_selection");
var radios = document.forms["radio_ticket_class"].elements["class"];
for(var i = 0, iLen = radios.length; i < iLen; i++) {
	radios[i].onclick = function() {
		class_selection.innerText = this.value;
	}
};

// passenger count if clicked display block the dropdown 
//then if "X" clicked with media help then it will close down
//just gives styling "None" "Block"
//or adds class then removes it
const toggle_count = document.querySelector("#toggle_count");
const dropdown_content = document.querySelector("#dropdown_content");
const toggle_passenger_class = document.querySelector("#toggle_passenger_class");
toggle_count.addEventListener("click", () => {
	if(dropdown_content.style.display === "none") {
		dropdown_content.style.display = "block";
		toggle_passenger_class.classList.add('toggle_passenger_class_active');
	} else {
		dropdown_content.style.display = "none";
		toggle_passenger_class.classList.remove('toggle_passenger_class_active');
	}
});
const toggle_count_x = document.querySelector("#toggle_count_x");
toggle_count_x.addEventListener("click", () => {
	if(dropdown_content.style.display === "none") {
		dropdown_content.style.display = "block";
		toggle_passenger_class.classList.add('toggle_passenger_class_active');
	} else {
		dropdown_content.style.display = "none";
		toggle_passenger_class.classList.remove('toggle_passenger_class_active');
	}
});

//Display none and block for Newsletter section 
//however i cant disable the button with "True or False" with the help of radio button checcked/change
//event listener
const receive_top = document.getElementById("receive_top");
const receive_bottom = document.getElementById("receive_bottom");

function changeDisplay() {
	receive_top.style.display = "none";
	receive_bottom.style.display = "block";
};
const about_link_btn = document.querySelector('#about_link_btn');
const about_link = document.querySelector('#about_link');
about_link_btn.addEventListener("click", () => {
	about_link.classList.add('active-block');
});

const about_link_btn_who = document.querySelector('#about_link_btn_who');
about_link_btn_who.addEventListener("click", () => {
	about_link.classList.add('active-block');
});

//Comment section
//code snipped gives more text of the client of the company review
//and changes the innerText to hide when it has review1, review2 or review3
//i cant use the height:auto; cause it removes the animation of height
//and makes it immediate
const review1 = document.querySelector('#review1');
const review_more1 = document.querySelector('#review_more1');
let l = 1;
review_more1.addEventListener("click", () => {
	if(l == 1) {
		review1.classList.add('review1');
		review_more1.innerText = "hide";
		l++;
	} else {
		review1.classList.remove('review1');
		review_more1.innerText = "more";
		l--;
	}
});
const review2 = document.querySelector('#review2');
const review_more2 = document.querySelector('#review_more2');
let k = 1;
review_more2.addEventListener("click", () => {
	if(k == 1) {
		review2.classList.add('review2');
		review_more2.innerText = "hide";
		k++;
	} else {
		review2.classList.remove('review2');
		review_more2.innerText = "more";
		k--;
	}
});
const review3 = document.querySelector('#review3');
const review_more3 = document.querySelector('#review_more3');
let j = 1;
review_more3.addEventListener("click", () => {
	if(j == 1) {
		review3.classList.add('review3');
		review_more3.innerText = "hide";
		j++;
	} else {
		review3.classList.remove('review3');
		review_more3.innerText = "more";
		j--;
	}
});
//word counter in textarea
const countTarget = document.querySelector("#word-count-input");
const wordCount = document.querySelector("#word-count");
const characterCount = document.querySelector("#character-count");
var count = function() {
	var characters = countTarget.value;
	var characterLength = characters.length;
	//length of the inputed characters
	var words = characters.split(/[\n\r\s]+/g).filter(function(word) {
		return word.length > 0;
	});
	wordCount.innerHTML = words.length;
	characterCount.innerHTML = characterLength;
};
count();
window.addEventListener("input", function(event) {
	if(event.target.matches("#word-count-input")) {
		count();
	}
}, false);

//Slider the CSS container overflow hidded and each click of the button moves the it the given direction
//by giving styling (justify content) : flex-start and flex-end to the slider itself
//one problem occurs when i give the transition it css for tours hovering the slider goes crazy as it finishes the 
//duration it clickes the button automatically :, that why i do not have hovering effect for tour divs
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
	if(direction === -1) {
		direction = 1;
		slider.appendChild(slider.firstElementChild);
	}
	carousel.style.justifyContent = 'flex-end';
	slider.style.transform = 'translate(50%)';
});
slider.addEventListener('transitionend', function() {
	if(direction === 1) {
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

//email validators for each email input areas
//checkes for the letter count at least 1-2, before the @ after it and after fullstop 

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const check_email_one = document.querySelector("#check_email_one");
const email_one = document.querySelector("#email_one")
	check_email_one.addEventListener("click", () => {
    if (email_one.value.match(pattern)){
        alert("Valid");
    }else{
        alert("Invalid");
    }
});

const check_email_two = document.querySelector("#check_email_two");
const email_two = document.querySelector("#email_two")
check_email_two.addEventListener("click", () => {
    if (email_two.value.match(pattern)){
        alert("Valid");
    }else{
        alert("Invalid");
    }
});

const check_email_three = document.querySelector("#check_email_three");
const email_three = document.querySelector("#email_three");
	check_email_three.addEventListener("click", () => {
    if (email_three.value.match(pattern)){
        alert("Valid");
    }else{
        alert("Invalid");
    }
});

/* -------------- Thanks for visiting ------------------*/