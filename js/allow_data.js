/*Only for firefox ?*/
const browserAPI = typeof browser !== 'undefined' ? browser : chrome;
const button = document.querySelector('button')
const message = document.getElementById('message')

button.addEventListener('click', event => {
  browserAPI.permissions.request({
    origins: ['https://myges.fr/*']
  }).then((granted) => {
    if (granted) {
      console.log('Successfull when according right to extension');
      message.innerHTML = "Sucessfull !<br>You can now close the tab :)"
      message.classList.remove('red')
      message.classList.add('green')
      browserAPI.storage.local.set({ "enabled": 1})
      browserAPI.storage.local.set({ "heavyDesign": 1})
      browserAPI.storage.local.set({ "eventDesign": 1})
      browserAPI.storage.local.set({ "darkModeDesign": 1})
      alert("Please refresh myges tab\nS'il vous plait, recharger l'onglet myges")
    } else {
    	console.log("Error when according right to extension")
      message.classList.remove('green')
      message.classList.add('red')
      message.innerHTML = "Error, please try again<br>Remember, if you do not activate it, the extension are not gonna be able to redesign myges website T_T"
    }
  }).catch((error) => {
    console.error('Error when asking rights : ', error);
    alert('Error when asking rights :'+error)
  });
});