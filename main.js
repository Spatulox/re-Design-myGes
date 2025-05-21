const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
const WIDTHSIZE = "60vw"

//----------------------------------------------------------//

async function main(){

	let enabled
  let heavyDesign
  let eventDesign
  let tmp = await getLocalValues()
  if (tmp != null){
	  enabled = (tmp[0] != 'Error' ? tmp[0] : 0)
	  heavyDesign = (tmp[1] != 'Error' ? tmp[1] : 0)
	  eventDesign = (tmp[2] != 'Error' ? tmp[2] : 0)
  }
  else{
    enabled = 0
    heavyDesign = 0
    eventDesign = 0
    style.textContent = ""
  }
	// console.log('localStorage', localStorage)
	await createStyleTag()
	injectCSS()
}

//----------------------------------------------------------//

browserAPI.runtime.onMessage.addListener(function(message, sender, sendResponse) {

  if (message.action === 'updateCSS') {
    injectCSS()
  }
});

//----------------------------------------------------------//


async function getLocalValues() {
	let tmp = []

	try {
		let result = await browserAPI.storage.local.get("enabled");
		tmp.push(result.enabled);
	} catch (error) {
		tmp.push('Error')
		console.log('Erreur lors de la récupération des données : ' + error);
		return null;
	}

	try {
		let result = await browserAPI.storage.local.get("heavyDesign");
		tmp.push(result.heavyDesign);
	} catch (error) {
		tmp.push('Error')
		console.log('Erreur lors de la récupération des données : ' + error);
		return null;
	}

	try {
		let result = await browserAPI.storage.local.get("eventDesign");
		tmp.push(result.eventDesign);
	} catch (error) {
		tmp.push('Error')
		console.log('Erreur lors de la récupération des données : ' + error);
		return null;
	}

	return tmp
}

//----------------------------------------------------------//

// Search if datas exist then set it if don't exist
browserAPI.storage.local.get().then((result) => {
	if (!result.enabled) {
		browserAPI.storage.local.set({ "enabled": 0}).then(setItem, onError)
		console.log('enabled data set')
	}

	if (!result.heavyDesign) {
		browserAPI.storage.local.set({ "heavyDesign": 0}).then(setItem, onError)
		console.log('heavyDesign data set')
	}

	if (!result.eventDesign) {
		browserAPI.storage.local.set({ "eventDesign": 0}).then(setItem, onError)
		console.log('eventDesign data set')
	}
})
.catch((error) => {
	console.error('Erreur lors de la récupération des données : ' + error);
});

main()
