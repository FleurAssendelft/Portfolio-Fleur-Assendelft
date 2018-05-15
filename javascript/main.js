
function foto(x){
	if(x.matches){
		document.getElementById('profielfoto').src = "../Portfolio-Fleur-Assendelft/afbeeldingen/rond.png";
	}
	else{
		document.getElementById('profielfoto').src = "../Portfolio-Fleur-Assendelft/afbeeldingen/fleur.JPG";
	}
}

var x = window.matchMedia("(max-width: 725px)")
foto(x) // Call listener function at run time
x.addListener(foto) // Attach listener function on state changes