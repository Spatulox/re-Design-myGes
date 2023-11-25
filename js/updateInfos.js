// Set the first things

const normalDesign = document.getElementById('normalDesign')
const heavyDesign = document.getElementById('heavyDesign')
const eventDesign = document.getElementById('eventDesign')
const clearCache = document.getElementById('clearCache')

// const toggle = document.querySelector(".toggle")

function checkChecked(){
	normalDesign.children[0].checked = false
	heavyDesign.children[0].checked = false
	eventDesign.children[0].checked = false
	console.log(localStorage)
	console.log('--------------')

	normalDesign.classList.remove('active')
	heavyDesign.classList.remove('active')
	eventDesign.classList.remove('active')

	try{
		if (localStorage.getItem('enabled') == '1'){
			normalDesign.children[0].checked = true
			normalDesign.classList.add('active')
		}
	}
	catch{
		console.log('Error 1')
	}
	
	try{
		if (localStorage.getItem('heavyDesign') == '1'){
			heavyDesign.children[0].checked = true
			heavyDesign.classList.add('active')
		}
	}
	catch{
		console.log('Error 2')
	}

	try{
		if (localStorage.getItem('eventDesign') == '1'){
			eventDesign.children[0].checked = true
			eventDesign.classList.add('active')
		}
	}
	catch{
		console.log('Error 3')
	}
}

// Set value if it's they don't exists
if (!(localStorage.getItem('enabled'))){
	localStorage.setItem('enabled', "1")
	localStorage.setItem('heavyDesign', "0")
	localStorage.setItem('eventDesign', "0")
}

checkChecked()


// Listen to events (ckecking ckeckboxs)

// Ajout d'un écouteur d'événements pour l'événement click
normalDesign.addEventListener('click', function() {
  normalDesign.classList.toggle('active')

  console.log(this.children[0])
  if (this.children[0].checked) {
    // Action à effectuer lorsque la case à cocher est cochée
    console.log('La case à cocher est cochée, décochage');
    localStorage.setItem('enabled', "0")
    this.children[0].checked = false
    checkChecked()
  } else {
    // Action à effectuer lorsque la case à cocher est décochée
    console.log('La case à cocher est décochée, cochage');
    localStorage.setItem('enabled', "1")
    this.children[0].checked = true
    checkChecked()
  }
});

heavyDesign.addEventListener('click', function() {
  heavyDesign.classList.toggle('active')
  console.log(this.children[0])

  if (this.children[0].checked) {
    // Action à effectuer lorsque la case à cocher est cochée
    console.log('La case à cocher est cochée, décochage');
	localStorage.setItem('heavyDesign', "0")
	this.children[0].checked = true
	checkChecked()
  } else {
    // Action à effectuer lorsque la case à cocher est décochée
    console.log('La case à cocher est décochée, cochage');
	localStorage.setItem('heavyDesign', "1")
	this.children[0].checked = false
	checkChecked()
  }
});

eventDesign.addEventListener('click', function() {
	eventDesign.classList.toggle('active')
	console.log(this.children[0])

  if (this.children[0].checked) {
    // Action à effectuer lorsque la case à cocher est cochée
    console.log('La case à cocher est cochée, décochage');
	localStorage.setItem('eventDesign', "0")
	this.children[0].checked = true
	checkChecked()
  } else {
    // Action à effectuer lorsque la case à cocher est décochée
    console.log('La case à cocher est décochée, cochage');
	localStorage.setItem('eventDesign', "1")
	this.children[0].checked = false
	checkChecked()
  }
});

clearCache.addEventListener('click', function() {
	localStorage.clear()
	// localStorage.setItem('enabled', "0")
	// localStorage.setItem('heavyDesign', "0")
	// localStorage.setItem('eventDesign', "0")
	console.log('Cache reinitialized')
	checkChecked()
});