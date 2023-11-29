function reworkHeader(){

	// Cube advertisement
	let leftAd = document.getElementsByClassName('mg_portal_partners_left')[0]
	let rightAd = document.getElementsByClassName('mg_portal_partners')[0]
	let images = document.querySelectorAll('.flexslider .slides img')
	let thing = document.getElementById('mg_portal_slideshow')
	let thing2 = document.getElementsByClassName('mg_slideshow_overlay')[0]
	let navImage = document.querySelector('.flex-control-nav')

	// "Delete" the cubes around the main part
	try{
		leftAd.style.display = 'none';
		rightAd.style.display = 'none';
	}
	catch{
		console.log('ERROR : Impossible to delete the advertisement')
	}

	//Resize the container of the images
	try{
		thing.style.width = WIDTHSIZE
		thing2.style.width = WIDTHSIZE
	}
	catch{
		console.log('ERROR : Impossible to resize the images containers')
	}

	// Resize the images wich change every 8/10 secondes
	try{
		for (var i = 0; i < images.length ; i++) {
			images[i].style.width = "100%";
			images[i].style.height = "auto";
			images[i].style.position = 'static';
		}	
	}
	catch{
		console.log('ERROR : Impossible to resize the images')
	}

	// Set the nav images upper
	try{
		navImage.style.top = '-34px'
	}
	catch{
		console.log('ERROR : Impossible to move the images nav upper, retrying...')
		try{
			setTimeout(function() {
				let navImage = document.querySelector('.flex-control-nav')
				navImage.style.top = '-34px'
				console.log('Success to move the nav')
			  // Votre code à exécuter après 10 secondes
			}, 1000);
		}
		catch{
			console.log('Failed to move the nav')
		}
		
	}

}

//----------------------------------------------------------//

function reworkMain(){

	const path = window.location.pathname;
	// Take the long grey line with "Home > pageYourCurrentlyAre"
	const j_idt159 = document.getElementById('j_idt159')
	j_idt159.style.width = "100%"

	// Resize the main part in all the pages (it's like the <main> balise)
	var main = document.getElementById('mg_portal_content');
	var divsForms = main.querySelectorAll('div, form');

	main.style.width = WIDTHSIZE
	main.style.display = "flex"
	main.style.flexWrap = "wrap"
	main.style.justifyContent = "center"


	// Apply some style into the Home page
	if (path.includes('home')){

		for (var i = 0; i < divsForms.length; i++) {

			try{
				if (divsForms[i].children[0].children[0].id.includes(':title')){
					divsForms[i].children[0].children[0].style.paddingLeft = '30px'
				}
			}
			catch{
			}

			divsForms[i].style.width = '100%';
			divsForms[i].style.margin = 'auto';
			divsForms[i].style.paddingLeft = 'inherit';
		}
	}

	wordToSearch = path.split('/').pop().split('-')

	// Search all the id based on the name of the path to zoom the good things
	if (!(path.includes('pcie')) && !(path.includes('resume')) ){
		for (let i = 0; i < wordToSearch.length; i++){

			// Shlag technics
			if(wordToSearch[i] == "events"){
				wordToSearch[i] = wordToSearch[i].split('s')[0]
			}

			// Select all the HTML things with the wordToSearch in their ID without case sensitive (little "i" at the end)
			const elementsWidth = document.querySelectorAll('[id*="'+wordToSearch[i]+'" i]');

			// Set the new style
			for (var j = 0; j < elementsWidth.length -1 ; j++) {
				elementsWidth[j].style.width = "100%"
				elementsWidth[j].style.marginLeft = "inherit"
				elementsWidth[j].style.paddingLeft = "inherit"
			}

		}
	}


	// -------------------- EXCEPTIONS --------------------
	if (path.includes('student-documents')){

		autoId('documentForm:annualDocWidget:yearDocumentsTable:')

		const annualDocWidget = document.getElementById('annualDocWidget')
		annualDocWidget.style.width = '100%'
	}
	else if (path.includes('documents')){
		let admissionDoc = document.getElementById('admissionDoc')
		admissionDoc.style.width = '100%'
	}


	if (path.includes('contacts')){
		let j_idt172 = document.getElementById('j_idt172')
		j_idt172.style.width = '100%'
		j_idt172.style.marginLeft = 'inherit'
		j_idt172.style.paddingLeft = 'inherit'
	}

	if (path.includes('invoice')){
		let stageDocumentsWidget = document.getElementById('stageDocumentsWidget')
		stageDocumentsWidget.style.width = '100%'
		stageDocumentsWidget.style.margin = 'inherit'

		let litigationInvoiceWidget = document.getElementById('litigationInvoiceWidget')
		litigationInvoiceWidget.style.width = '100%'
		litigationInvoiceWidget.style.margin = 'inherit'
	}

	if (path.includes('open-gestion')){
		autoId('studentOpenGestionForm:studentOpenGestionWidget:listOpenWaitingDatatable:')
	}

	if (path.includes('partners')){
		let j_idt175 = document.getElementById('j_idt175')
		j_idt175.style.width = '100%'
		j_idt175.style.marginLeft = 'inherit'
		j_idt175.style.paddingLeft = 'inherit'
	}

	if (path.includes('project-list') || path.includes('practical-list')){
		autoId('projectListForm:listProjectWidget:projectDatatable:')
	}

	if (path.includes('resume-manager')){
		let documentsForm = document.getElementById('documentsForm')
		documentsForm.style.width = "100%"
		documentsForm.style.margin = "inherit"

		let documentsWidget = document.getElementById('documentsWidget')
		documentsWidget.style.width = "100%"
		documentsWidget.style.margin = "inherit"
	}
	else if (path.includes('resume')){
		let resumeForm = document.getElementById('resumeForm')

		for (var i = 0; i < resumeForm.children.length; i++) {
			resumeForm.children[i].style.width = '100%'
			resumeForm.children[i].style.marginLeft = 'inherit'
		}
	}

	if (path.includes('stage-offers')){
		let j_idt176 = document.getElementById('j_idt176')
		j_idt176.style.width = "100%"
	}

	if (path.includes('syllabus-list')){
		autoId('coursesSyllabusForm:syllabusWidget:syllabusTable:')
	}
	
}

//----------------------------------------------------------//