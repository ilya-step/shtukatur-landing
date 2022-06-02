// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	// проверка прокрутки
	if (prevScrollpos < 50) {
		document.getElementById("header").classList.remove('_active');
	} else {
		document.getElementById("header").classList.add('_active');
	}
	prevScrollpos = currentScrollPos;
}


// анимация при загрузке страницы
$(document).ready(function () {
	$('.img-animate').addClass('_action');
	$('body').addClass('_action');
	// Анимация при скролле
	function onEntry(entry) {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('_action');
			}
		});
	}
	let options = {
		threshold: [0.1]
	};
	let observer = new IntersectionObserver(onEntry, options);
	let elements = document.querySelectorAll('.animated');
	for (let elm of elements) {
		observer.observe(elm);
	}
});


// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelector('.menu-item');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});

	// закрыть меню при переходе на элемент меню
	var menuItems = document.getElementsByClassName("menu-item");
	var j;
	for (j = 0; j < menuItems.length; j++) {
		menuItems[j].addEventListener("click", function () {
			document.body.classList.toggle('_lock')
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}
}


// плавная прокрутка по якорям
$('a[href*=#]:not([href=#])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		headerHeight = $('#header').height();
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - headerHeight
			}, 500, function () {
				target.focus();
			});
			return false;
		}
	}
});


//табы
$(".price__tab").click(function () {
	var tabVal = $(this).attr("data-tab");
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
	$(".price__box_" + tabVal).addClass("active");
	$(".price__box_" + tabVal).siblings(".price__box").removeClass("active");
});



// Попап
p = $('.popup__overlay')
$('.popup__toggle').click(function () {
	p.addClass('_active')
})
p.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p.removeClass('_active')
})


// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
if (selector.length > 0) {
	let im = new Inputmask('+7 (999) 999-99-99');
	im.mask(selector);
	let selector2 = document.querySelector('input[type="tel"]');
	selector2.addEventListener('input', function () {
		const re = /^\d*(\.\d+)?$/
	});
}



// квиз
var quizCounter = 1;
var qiuzButtons = document.getElementsByClassName("quiz-btn");
var l;
var answers1 = document.querySelector(".answers1");
var answers2 = document.querySelector(".answers2");
var answers3 = document.querySelector(".answers3");
var answers4 = document.querySelector(".answers4");
var answers5 = document.querySelector(".answers5");
var answers6 = document.querySelector(".answers6");
var answers7 = document.querySelector(".answers7");
var answers8 = document.querySelector(".answers8");
var question = document.querySelector(".question");
var questCounter = document.querySelector(".quest-counter");
var progressLine = document.querySelector(".progress-line");
var quizButtons = document.querySelector(".quiz-buttons");
for (l = 0; l < qiuzButtons.length; l++) {
	qiuzButtons[l].addEventListener("click", function () {
		if (this.classList.contains("_prev")) {
			// кнопка назад
			if (quizCounter == 2) {
				quizCounter--;
				answers2.classList.remove("show");
				answers1.classList.add("show");
				questCounter.innerHTML = "Вопрос 1 из 8";
				question.innerHTML = "Что вы хотите оштукатурить?:";
				progressLine.style.width = "25%";
				document.querySelector("#quiz-btn-prev").style.display = "none";
				return;
			};
			if (quizCounter == 3) {
				quizCounter--;
				answers3.classList.remove("show");
				answers2.classList.add("show");
				questCounter.innerHTML = "Вопрос 2 из 8";
				question.innerHTML = "Из чего стены?";
				progressLine.style.width = "35%";
				return;
			};
			if (quizCounter == 4) {
				quizCounter--;
				answers4.classList.remove("show");
				answers3.classList.add("show");
				questCounter.innerHTML = "Вопрос 3 из 8";
				question.innerHTML = "Какая у вас площадь по полу?";
				progressLine.style.width = "45%";
				return;
			};
			if (quizCounter == 5) {
				quizCounter--;
				answers5.classList.remove("show");
				answers4.classList.add("show");
				questCounter.innerHTML = "Вопрос 4 из 8";
				question.innerHTML = "У вас уже проведена электрика?";
				progressLine.style.width = "55%";
				return;
			};
			if (quizCounter == 6) {
				quizCounter--;
				answers6.classList.remove("show");
				answers5.classList.add("show");
				questCounter.innerHTML = "Вопрос 5 из 8";
				question.innerHTML = "Где находится объект?";
				progressLine.style.width = "65%";
				return;
			};
			if (quizCounter == 7) {
				quizCounter--;
				answers7.classList.remove("show");
				answers6.classList.add("show");
				questCounter.innerHTML = "Вопрос 6 из 8";
				question.innerHTML = "Как хотите штукатурить?";
				progressLine.style.width = "75%";
				document.querySelector("#quiz-btn-next").style.display = "block";
				document.querySelector(".submitForm").style.display = "none";
				return;
			};
		} else {
			// кнопка вперёд
			if (quizCounter == 1) {
				quizCounter++;
				answers1.classList.remove("show");
				answers2.classList.add("show");
				questCounter.innerHTML = "Вопрос 2 из 8";
				question.innerHTML = "Из чего стены?";
				progressLine.style.width = "35%";
				document.querySelector("#quiz-btn-prev").style.display = "flex";
				return;
			};
			if (quizCounter == 2) {
				quizCounter++;
				answers2.classList.remove("show");
				answers3.classList.add("show");
				questCounter.innerHTML = "Вопрос 3 из 8";
				question.innerHTML = "Какая у вас площадь по полу?";
				progressLine.style.width = "45%";
				return;
			};
			if (quizCounter == 3) {
				quizCounter++;
				answers3.classList.remove("show");
				answers4.classList.add("show");
				questCounter.innerHTML = "Вопрос 4 из 8";
				question.innerHTML = "У вас уже проведена электрика?";
				progressLine.style.width = "55%";
				return;
			};
			if (quizCounter == 4) {
				quizCounter++;
				answers4.classList.remove("show");
				answers5.classList.add("show");
				questCounter.innerHTML = "Вопрос 5 из 8";
				question.innerHTML = "Где находится объект?";
				progressLine.style.width = "65%";
				return;
			};
			if (quizCounter == 5) {
				quizCounter++;
				answers5.classList.remove("show");
				answers6.classList.add("show");
				questCounter.innerHTML = "Вопрос 6 из 8";
				question.innerHTML = "Как хотите штукатурить?";
				progressLine.style.width = "75%";
				return;
			};
			if (quizCounter == 6) {
				quizCounter++;
				answers6.classList.remove("show");
				answers7.classList.add("show");
				questCounter.innerHTML = "Вопрос 7 из 8";
				question.innerHTML = "У вас свой материал?";
				progressLine.style.width = "90%";
				return;
			};
			if (quizCounter == 7) {
				quizCounter++;
				answers7.classList.remove("show");
				answers8.classList.add("show");
				questCounter.style.display = "none";
				question.style.display = "none";
				document.querySelector(".quiz__title").style.display = "none";
				document.querySelector(".quiz__subtitle").style.display = "none";
				document.querySelector(".progress").style.display = "none";
				document.querySelector("#quiz-btn-prev").style.display = "none";
				document.querySelector("#quiz-btn-next").style.display = "none";
				document.querySelector(".submitForm").style.display = "block";
				document.querySelector(".quiz__body").classList.add("end");
				return;
			};
		}
	});
}