
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

	createStyleTag()

	// Do we need to give a classList for the tag ? (balise)

	// if (enabled == 1 && heavy == 0){
	// 	createStyleBalise('enabled')
		
	// }
	// else if(enabled == 1 && heavy == 1){
	// 	console.log('Heavy design')
	// 	// Link une page CSS
	// 	createStyleBalise('heavyDesign')
	// }
	// else{
	// 	console.log('Pas de redesign')
	// }

	// if (event == 1){
	// 	createStyleBalise('event')
	// 	console.log('Event design')
	// 	// Link une page CSS qui change les couleurs ??
	// }

	injectCSS()
}

//----------------------------------------------------------//

browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action === 'updateCSS') {
    injectCSS()
  }
});

//----------------------------------------------------------//

// Wait 0.5 secondes before executing the program
setTimeout(function() {

	// browser.storage.local.clear()

	// Search if datas exist then set it if don't exist
	browser.storage.local.get().then((result) => {
		if (!result.enabled) {
			browser.storage.local.set({ "enabled": 0}).then(setItem, onError)
			console.log('enabled data set')
		}

		if (!result.heavyDesign) {
			browser.storage.local.set({ "heavyDesign": 0}).then(setItem, onError)
			console.log('heavyDesign data set')
		}

		if (!result.eventDesign) {
			browser.storage.local.set({ "eventDesign": 0}).then(setItem, onError)
			console.log('eventDesign data set')
		}
	})
	.catch((error) => {
		console.error('Erreur lors de la récupération des données : ' + error);
	});

	main()
}, 500);
