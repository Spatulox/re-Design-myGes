//----------------------------------------------------------//

function setItem() {
	console.log("Datas set...");
}

function onError(error) {
    console.log(error);
}

//----------------------------------------------------------//

function autoId(id){
	const array = document.querySelectorAll('[id*="'+id+'" i]');
	for (var i = 0; i < array.length ; i++) {
		array[i].style.width = 'auto'
	}
}

//----------------------------------------------------------//

async function createStyleTag(customReworked = ''){
	var newStyle = document.createElement('style');
	newStyle.id = 'customReworkedCSS';
	newStyle.classList = customReworked;
	document.body.appendChild(newStyle);
}

//----------------------------------------------------------//

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