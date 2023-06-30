const slides = [
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

// Déclaration des variables
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const slideImg = document.querySelector("#banner .banner-img");
const contentImg = document.querySelector("#banner p");
const dots = document.querySelector(".dots");
const numberSlides = slides.length;
let i = 0; 

// Au clic sur la flèche gauche
arrowLeft.addEventListener("click", function () {
	if (i == 0) {
		i = numberSlides - 1
	}else{
		i--
	}
	moveSlide();
});

// Au clic sur la flèche droite
arrowRight.addEventListener("click", function () {
	if (i == numberSlides - 1) {
		i = 0
	}else{
		i++
	}
	moveSlide();
});


// Fonction pour récupérer image et afficher texte correspondant 
function moveSlide () {
	slideImg.src = `assets/images/slideshow/${slides[i].image}`;
	contentImg.innerHTML = slides[i].tagLine;
	dotSelected();
}

// Fonction de création des dots
function createDots () {
	for (let i = 0; i < numberSlides; i++) {
		const dot = document.createElement("p");
		dot.classList.add("dot");
		dots.appendChild(dot);
	}
	dots.children[i].classList.add("dot_selected");
}
createDots();

// Fonction afin de déplacer la dot active
function dotSelected() {
	let currentDot = document.querySelector(".dot_selected");
	currentDot.classList.remove("dot_selected");
	dots.children[i].classList.add("dot_selected");
	console.log(dots);
}
dotSelected();