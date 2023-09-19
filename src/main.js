// =====================scroll-top-button START======================

const goTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", trackScroll);

goTopBtn.addEventListener("click", goTop);

function trackScroll() {
	const scrolled = window.pageYOffset;

	const coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		goTopBtn.classList.add("scroll-top--show");
	} else {
		goTopBtn.classList.remove("scroll-top--show");
	}
}

function goTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -25); //другий аргумент - це швидкість скролу
		setTimeout(goTop, 0);
	}
}

// =====================scroll-top-button END======================
