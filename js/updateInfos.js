const normalDesign = document.getElementById('normalDesign')
const heavyDesign = document.getElementById('heavyDesign')
const eventDesign = document.getElementById('eventDesign')
const clearCache = document.getElementById('clearCache')

// ------------------------------------------------------------ //

async function getLocalValues() {
	let tmp = []

	try {
		let result = await browser.storage.local.get("enabled");
		tmp.push(result.enabled);
	} catch (error) {
		tmp.push('Error')
		console.log('Erreur lors de la récupération des données : ' + error);
		return null;
	}

	try {
		let result = await browser.storage.local.get("heavyDesign");
		tmp.push(result.heavyDesign);
	} catch (error) {
		tmp.push('Error')
		console.log('Erreur lors de la récupération des données : ' + error);
		return null;
	}

	try {
		let result = await browser.storage.local.get("eventDesign");
		tmp.push(result.eventDesign);
	} catch (error) {
		tmp.push('Error')
		console.log('Erreur lors de la récupération des données : ' + error);
		return null;
	}

	return tmp
}

// ------------------------------------------------------------ //

async function checkChecked(){

	let tmp = await getLocalValues()
	let enabled = tmp[0]
	let heavy = tmp[1]
	let event = tmp[2]
	console.log('enabled, heavy, event : ', tmp)

	normalDesign.children[0].checked = false
	heavyDesign.children[0].checked = false
	eventDesign.children[0].checked = false


	normalDesign.classList.remove('active')
	heavyDesign.classList.remove('active')
	eventDesign.classList.remove('active')

	try{
		if (enabled == '1'){
			normalDesign.children[0].checked = true
			normalDesign.classList.add('active')
		}
	}
	catch{
		console.log('Error when activating normalDesign')
	}
	
	try{
		if (heavy == '1'){
			heavyDesign.children[0].checked = true
			heavyDesign.classList.add('active')
		}
	}
	catch{
		console.log('Error when activating heavyDesign')
	}

	try{
		if (event == '1'){
			eventDesign.children[0].checked = true
			eventDesign.classList.add('active')
		}
	}
	catch{
		console.log('Error when activating eventDesign')
	}
}

// ------------------------------------------------------------ //

async function main(){
	await checkChecked()
}


// --------------- Listen to events (ckecking ckeckboxs)------------------ //

// Listen for normalDesign (enabled) checkbox
normalDesign.addEventListener('click', async function() {
  normalDesign.classList.toggle('active')
//   console.log(this.children[0])

  if (this.children[0].checked) {
    // console.log('La case à cocher est cochée, décochage');
	await browser.storage.local.set({ "enabled": "0"})
    this.children[0].checked = false
    await checkChecked()
  } else {
    // console.log('La case à cocher est décochée, cochage');
	await browser.storage.local.set({ "enabled": "1"})
    this.children[0].checked = true
    await checkChecked()
  }
});

// Listen for heavyDesign checkbox
heavyDesign.addEventListener('click', async function() {
  heavyDesign.classList.toggle('active')
//   console.log(this.children[0])

  if (this.children[0].checked) {
    // console.log('La case à cocher est cochée, décochage');
	await browser.storage.local.set({ "heavyDesign": "0"})
	this.children[0].checked = true
	await checkChecked()
  } else {
    // console.log('La case à cocher est décochée, cochage');
	await browser.storage.local.set({ "heavyDesign": "1"})
	this.children[0].checked = false
	await checkChecked()
  }
});

// Listen for eventDesign checkbox
eventDesign.addEventListener('click', async function() {
	eventDesign.classList.toggle('active')
	// console.log(this.children[0])

  if (this.children[0].checked) {
    // console.log('La case à cocher est cochée, décochage');
	await browser.storage.local.set({ "eventDesign": "0"})
	this.children[0].checked = true
	await checkChecked()
  } else {
    // console.log('La case à cocher est décochée, cochage');
	await browser.storage.local.set({ "eventDesign": "1"})
	this.children[0].checked = false
	await checkChecked()
  }
});

// Listen for clear cache button
clearCache.addEventListener('click', async function() {
	await browser.storage.local.clear()

	await browser.storage.local.set({ "enabled": "0"})
	await browser.storage.local.set({ "heavyDesign": "0"})
	await browser.storage.local.set({ "eventDesign": "0"})
	console.log('Cache reinitialized')
	await checkChecked()
});


// --------------------------- // main part
main()