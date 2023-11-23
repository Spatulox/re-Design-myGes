
const WIDTHSIZE = "60vw"

function reworkBody(){

	let body = document.getElementsByTagName('body')
	body.style.margin = '0px'
	body.style.display = "grid"
	body.style.minHeight = '100vh'
	// body.style.gridTemplateRows = "auto 1fr auto"

// 	body{
// 	margin: 0px;
// 	min-height: 100vh;

// 	display: grid;
// 	grid-template-rows: auto 1fr auto;
// }
}

function reworkHeader(){

	// Cube advertisement
	let leftAd = document.getElementsByClassName('mg_portal_partners_left')[0]
	let rightAd = document.getElementsByClassName('mg_portal_partners')[0]
	let images = document.querySelectorAll('.flexslider .slides img')
	let thing = document.getElementById('mg_portal_slideshow')
	let thing2 = document.getElementsByClassName('mg_slideshow_overlay')[0]
	let navImage = document.querySelector('.flex-control-nav')


	try{
		// "Delete" the cubes around the main part
		leftAd.style.display = 'none';
		rightAd.style.display = 'none';
	}
	catch{
		console.log('ERROR : Impossible to delete the advertisement')
	}

	try{
		//Resize the container of the images
		thing.style.width = WIDTHSIZE
		thing2.style.width = WIDTHSIZE
	}
	catch{
		console.log('ERROR : Impossible to resize the images containers')
	}

	try{
		// Resize the images wich change every 8/10 secondes
		for (var i = 0; i <= images.length -1 ; i++) {
			images[i].style.width = "100%";
			images[i].style.height = "auto";
			images[i].style.position = 'static';
		}	
	}
	catch{
		console.log('ERROR : Impossible to resize the images')
	}

	try{
	// Set the nav images upper
	navImage.style.top = '-34px'
	}
	catch{
		console.log('ERROR : Impossible to move the images nav upper, retrying...')
		try{
			setTimeout(function() {
				let navImage = document.querySelector('.flex-control-nav')
				navImage.style.top = '-34px'
			  // Votre code à exécuter après 10 secondes
			}, 500);
		}
		catch{
			console.log('Failed')
		}
		
	}

}





function main(){
	const chemin = window.location.pathname;
	console.log(chemin);


	// reworkBody()


	// Start of the code
	reworkHeader();

	// Resize the main part
	// let main = document.getElementById('mg_portal_content')

	const j_idt159 = document.getElementById('j_idt159')
	j_idt159.style.width = "100%"

	var main = document.getElementById('mg_portal_content');
	var divsForms = main.querySelectorAll('div, form');
	// console.log(divsForms)

	console.log(main)
	main.style.width = WIDTHSIZE
	main.style.display = "flex"
	main.style.flexWrap = "wrap"
	main.style.justifyContent = "center"

	for (var i = 0; i < divsForms.length; i++) {
		// console.log(divsForms[i])
		// Ajouter des styles CSS personnalisés pour centrer les éléments
		divsForms[i].style.width = '100%';
		divsForms[i].style.margin = 'auto';
		divsForms[i].style.paddingLeft = 'inherit';
	}


	// console.log(main)
	// main.style.width = WIDTHSIZE
	// main.style.display = "flex"
	// main.style.flexWrap = "wrap"
	// main.style.justifyContent = "center"



	// if (chemin.includes('student-documents')){
	// 	let annualDocWidget = document.getElementById('annualDocWidget')
	// 	annualDocWidget.style.width = 'auto'
	// }
}









setTimeout(function() {
	main()
  // Votre code à exécuter après 10 secondes
}, 500);







// let header = document.createElement("h1");
// console.log(header)
// header.textContent = "test";
// document.body.appendChild(header);

