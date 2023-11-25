// Set the first things

const normalDesign = document.getElementById('normalDesign')
const heavyDesign = document.getElementById('heavyDesign')
const eventDesign = document.getElementById('eventDesign')
const clearCache = document.getElementById('clearCache')

function checkChecked(){
	normalDesign.checked = false
	heavyDesign.checked = false
	eventDesign.checked = false

	if (localStorage.getItem('enabled') === '1'){
		normalDesign.checked = true
	}

	if (localStorage.getItem('heavyDesign') === '1'){
		heavyDesign.checked = true
	}

	if (localStorage.getItem('eventDesign') === '1'){
		eventDesign.checked = true
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
  if (this.checked) {
    // Action à effectuer lorsque la case à cocher est cochée
    console.log('La case à cocher est cochée');
    localStorage.setItem('enabled', "1")
    checkChecked()
  } else {
    // Action à effectuer lorsque la case à cocher est décochée
    console.log('La case à cocher est décochée');
    localStorage.setItem('enabled', "0")
    checkChecked()
  }
});

heavyDesign.addEventListener('click', function() {
  if (this.checked) {
    // Action à effectuer lorsque la case à cocher est cochée
    console.log('La case à cocher est cochée');
	localStorage.setItem('heavyDesign', "1")
	checkChecked()
  } else {
    // Action à effectuer lorsque la case à cocher est décochée
    console.log('La case à cocher est décochée');
	localStorage.setItem('heavyDesign', "0")
	checkChecked()
  }
});

eventDesign.addEventListener('click', function() {
  if (this.checked) {
    // Action à effectuer lorsque la case à cocher est cochée
    console.log('La case à cocher est cochée');
	localStorage.setItem('eventDesign', "1")
	checkChecked()
  } else {
    // Action à effectuer lorsque la case à cocher est décochée
    console.log('La case à cocher est décochée');
	localStorage.setItem('eventDesign', "0")
	checkChecked()
  }
});


clearCache.addEventListener('click', function() {
	localStorage.clear()
	localStorage.setItem('enabled', "0")
	localStorage.setItem('heavyDesign', "0")
	localStorage.setItem('eventDesign', "0")
	console.log('Cache reinitialized')
	checkChecked()
});