const normalDesign = document.getElementById('normalDesign')
const heavyDesign = document.getElementById('heavyDesign')
const eventDesign = document.getElementById('eventDesign')
const clearCache = document.getElementById('clearCache')
const popupMsg = document.getElementById('popupMsg')

// ------------------------------------------------------------ //

async function checkChecked(){

	let enabled
  let heavy
  let event
  let tmp = await getLocalValues()
  if (tmp != null){
  enabled = (tmp[0] != 'Error' ? tmp[0] : 0)
  heavy = (tmp[1] != 'Error' ? tmp[1] : 0)
  event = (tmp[2] != 'Error' ? tmp[2] : 0)
  }
  else{
    enabled = 0
    heavy = 0
    event = 0
  }

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

async function messagePopup(msg){
	var textNode = document.createTextNode(msg);
  while (popupMsg.firstChild) {
      popupMsg.removeChild(popupMsg.firstChild);
  }
  
  popupMsg.appendChild(textNode);

  popupMsg.classList.add('display');
  setTimeout(function() {
      popupMsg.removeChild(textNode);
      popupMsg.classList.remove('display');
  }, 3000);
}

// ------------------------------------------------------------ //

async function updatePopupHtml(){
	await checkChecked()
}


// ------------------------------------------------------------ //

function sendMessageToUpdateCSS(){
	browser.tabs.query({url: '*://*/*'}, function(tabs) {
		var mygesTab = tabs.find(tab => tab.url.includes('myges'));
		if (mygesTab) {
		  browser.tabs.sendMessage(mygesTab.id, {action: 'updateCSS'}, function(response) {
		    console.log('CSS Updated !');
		    messagePopup('CSS Updated !')
		  });
		} else {
			messagePopup('MyGes tab doesn\'t exist...')
		  console.log('MyGes tab doesn\'t exist...');
		}
	});
}


// ------------------------------------------------------------ //

/*
###########################################################################
*/

// --------------- Listen to events (ckecking ckeckboxs)------------------ //

// Listen for normalDesign (enabled) checkbox
normalDesign.addEventListener('click', async function() {
  normalDesign.classList.toggle('active')
//   console.log(this.children[0])

  if (this.children[0].checked) {
    // console.log('La case à cocher est cochée, décochage');
	await browser.storage.local.set({ "enabled": "0"})
    this.children[0].checked = false
  } else {
    // console.log('La case à cocher est décochée, cochage');
	await browser.storage.local.set({ "enabled": "1"})
    this.children[0].checked = true
  }

  await checkChecked()

  sendMessageToUpdateCSS()
});

// Listen for heavyDesign checkbox
heavyDesign.addEventListener('click', async function() {
  heavyDesign.classList.toggle('active')
//   console.log(this.children[0])

  if (this.children[0].checked) {
    // console.log('La case à cocher est cochée, décochage');
	await browser.storage.local.set({ "heavyDesign": "0"})
	this.children[0].checked = true
  } else {
    // console.log('La case à cocher est décochée, cochage');
	await browser.storage.local.set({ "heavyDesign": "1"})
	this.children[0].checked = false
  }

  await checkChecked()

  let enabled
  let tmp = await getLocalValues()
  if (tmp != null){
  enabled = (tmp[0] != 'Error' ? tmp[0] : 0)
  }
  else{
    enabled = 0
  }

  if (enabled == 1){
  	sendMessageToUpdateCSS()
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
  } else {
    // console.log('La case à cocher est décochée, cochage');
	await browser.storage.local.set({ "eventDesign": "1"})
	this.children[0].checked = false
  }

  await checkChecked()

  let enabled
  let tmp = await getLocalValues()
  if (tmp != null){
  enabled = (tmp[0] != 'Error' ? tmp[0] : 0)
  }
  else{
    enabled = 0
  }

  if (enabled == 1){
  	sendMessageToUpdateCSS()
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
	messagePopup('Cache reinitialized')
});

// --------------------------- // main part
updatePopupHtml()