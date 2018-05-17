
function foto(x){
	if(x.matches){
		document.getElementById('profielfoto').src = "../Portfolio-Fleur-Assendelft/afbeeldingen/rond.png";
	}
	else{
		document.getElementById('profielfoto').src = "../Portfolio-Fleur-Assendelft/afbeeldingen/fleurtje.JPG";
	}
}

function greeting(){
        var d = new Date();
        var time = d.getHours();

        if (time > 0 && time < 12){
            document.getElementById('greeting').innerHTML = "Hi good morning, I'm Fleur!" ;
        }
        if(time >= 12 ){
            document.getElementById('greeting').innerHTML = "Hi good afternoon, I'm Fleur!";
        }
        if(time >= 18 ){
            document.getElementById('greeting').innerHTML = "Hi good evening, I'm Fleur!";
        }
    }

var x = window.matchMedia("(max-width: 725px)")
foto(x) // Call listener function at run time
x.addListener(foto) // Attach listener function on state changes

greeting()

