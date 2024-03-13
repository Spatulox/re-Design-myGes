
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
	injectCSS()
}

//----------------------------------------------------------//

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

	console.log(message)
  if (message.action === 'updateCSS') {
    injectCSS()
  }
});

//----------------------------------------------------------//

// Wait 0.5 secondes before executing the program
setTimeout(function() {

	// chrome.storage.local.clear()

	// Search if datas exist then set it if don't exist
	chrome.storage.local.get().then((result) => {
		if (!result.enabled) {
			chrome.storage.local.set({ "enabled": 0}).then(setItem, onError)
			console.log('enabled data set')
		}

		if (!result.heavyDesign) {
			chrome.storage.local.set({ "heavyDesign": 0}).then(setItem, onError)
			console.log('heavyDesign data set')
		}

		if (!result.eventDesign) {
			chrome.storage.local.set({ "eventDesign": 0}).then(setItem, onError)
			console.log('eventDesign data set')
		}
	})
	.catch((error) => {
		console.error('Erreur lors de la récupération des données : ' + error);
	});

	main()
}, 500);
