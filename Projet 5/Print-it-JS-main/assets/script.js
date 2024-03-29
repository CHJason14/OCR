const $slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const buttons = document.querySelectorAll(".arrow");
var slide = document.querySelector(".banner-img");
var src = slide.getAttribute("src");
var alt = slide.getAttribute("alt");
var slideActive = 0;


console.log($slides);
console.log(src);



buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		const calcNextSlide = e.target.id === "next" ? 1 : -1;
		slideActive = slideActive + calcNextSlide;
		if (slideActive < 0) {
			slideActive = 3;
		};
		if (slideActive > 3) {
			slideActive = 0;
		};
		var imageActive = $slides[slideActive].image;
		alt = $slides[slideActive].tagLine;
		src = "./assets/images/slideshow/" + imageActive;
		console.log(src);
		console.log(alt);
		slide.src = src;
		slide.alt = alt;
	});
});
