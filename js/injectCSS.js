async function injectCSS(){
  let style = null
  let count = 0

  // Wait for the style tag
  while (style == null && count < 100){

    style = document.getElementById('customReworkedCSS')
    // Wait one second before retyring to retrieve the style tag
    if (style == null){
      await new Promise(resolve => setTimeout(resolve, 1000));  
    }
    count ++
  }

  // Retrieve value from storage.local
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
  }

  style.textContent = ""
  // Enable some customs design

  if(enabled == 0){
    style.textContent = ""
    console.log('The extension is not enable, no redesign')
    return
  }

  console.log('Injecting CSS')

  // Different type of redesign :
  // normal (enabled)
  // normal (enabled) + event
  // heavy
  // heavy + event

  // Impossible :
  // normal + heavy

  if(enabled == 1 && heavyDesign == 0){
    console.log('Normal design')
    // // Header / Images
    // reworkHeader();

    // // Rework the main part
    // reworkMain()

    // Add some extra :
    // Get the fonction inside the CSS/normalRedesign.js
    style.textContent = getNormalRedesignCss()

  }
  // Heavy design enable
  else if (heavyDesign == 1){
    console.log('Heavy design')

    // Clean some problematic style
    const element = document.querySelector('#mg_portal_nav .mg_userinfo a');
    const personalLi = document.querySelectorAll('#mg_userinfo_panel li');
    const mg_partner = document.getElementsByClassName("mg_partner")
    const imgDeconnectionParametre = document.querySelectorAll("#mg_userinfo_panel li > img")[0]

    // Sélectionner les div à déplacer
    const div1 = document.getElementsByClassName('mg_hideOnPrint mg_portal_partners')[0];
    const div2 = document.getElementsByClassName('mg_hideOnPrint mg_portal_partners_left')[0];

    // Sélectionner les parents cibles
    const parent3 = document.getElementById('mg_portal_body');
    //const parent2 = document.getElementById('id_parent2');

    // Déplacer les div vers les nouveaux parents
    parent3.appendChild(div1);
    parent3.appendChild(div2);

    const brElement = element.querySelector('br');
    // Remove the br next to our name
    if (brElement) {
      element.removeChild(brElement);
    }

    for (var i = 0; i < personalLi.length; i++) {
      personalLi[i].style.width = "100%";
    }

    for (var i = 0; i < mg_partner.length; i++) {
      mg_partner[i].style = "";
    }

    element.style = ""
    imgDeconnectionParametre.style = "width: 5px; height: 9px;"
    

    // To "overwrite" some event design with the heavy design which need to be compatible
    if (eventDesign != 1){
      style.textContent += getHeavyRedesignCss()
    }


    // Create an exit button for menu déroulant next to the name
    // Create an exit button for menu déroulant next to the name
    let exitButton = document.getElementsByClassName("exitButton")
    if(!exitButton || exitButton.length < 1){
      const mainLi = document.getElementById("mg_userinfo_panel")
      // const htmlContent = '<li class="exitButton" style="list-style: none; height: auto; width: 100%; margin: auto; margin-top: 10px; text-align: center;"><div class="mg_user_menu_row" style="margin: auto; width:40px;"><div style="font-size: 11px; font-weight: normal; letter-spacing: 0.4px;">Exit</div></div></li>';
      
      // const tempElement = document.createElement('div');
      // tempElement.innerHTML = htmlContent;
      // const newLi = tempElement.firstChild;

      /*                          */

      const liElement = document.createElement('li');
      liElement.classList.add('exitButton');
      liElement.style.listStyle = 'none';
      liElement.style.height = 'auto';
      liElement.style.width = '100%';
      liElement.style.margin = 'auto';
      liElement.style.marginTop = '10px';
      liElement.style.textAlign = 'center';

      const div1 = document.createElement('div');
      div1.classList.add('mg_user_menu_row');
      div1.style.margin = 'auto';
      div1.style.width = '40px';

      const div2 = document.createElement('div');
      div2.style.fontSize = '11px';
      div2.style.fontWeight = 'normal';
      div2.style.letterSpacing = '0.4px';
      div2.textContent = 'Exit';

      div1.appendChild(div2);
      liElement.appendChild(div1);

      mainLi.appendChild(liElement);

      // Create an exit button nest to "scolarité"" and "mes services"
      const mainLi1 = document.getElementById("hiddable_1")
      const mainLi2 = document.getElementById("hiddable_2")
      const newLiClone1 = liElement.cloneNode(true);
      const newLiClone2 = liElement.cloneNode(true);

      mainLi1.appendChild(newLiClone1);
      mainLi2.appendChild(newLiClone2);
    } 
  }

  // Add "exit" button to close menus

  //<li style="list-style: none; height: 27px; width: 100%;margin: auto;text-align: center;"><div class="mg_user_menu_row" style="margin: auto;"><div href="" style="font-size: 11px; font-weight: normal;letter-spacing:0.4px;padding: 0px 5px;">Exit</div></div></li>





  // Event design enable (compatible soft redesign && heavyDesign)
  if (eventDesign == 1){
    console.log('Event design')
    let dateEventDesign = false
    let dateEvent = false

    // Check the date
    let today = new Date();
    let jour = today.getDate();


    // Check Chandleur
    let date = getChandleur(new Date().getFullYear());
    let startDate = new Date(date.getTime() - 2 * 24 * 60 * 60 * 1000);
    let endDate = new Date(date.getTime() + 0 * 24 * 60 * 60 * 1000);
    //console.log(startDate, endDate);

    if(today >= startDate && today <= endDate){
        eventDesign = true
        dateEvent = "chandleur"
        console.log(dateEvent + " event")
    }

   // Check new Chinese year
    date = getNewChineseYears(new Date().getFullYear());
    startDate = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
    endDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    //console.log(startDate, endDate);
    if(today >= startDate && today <= endDate){
      eventDesign = true
      dateEvent = "chinese"
      console.log(dateEvent + " event")
    }

    // Check easter
    date = getEaster(new Date().getFullYear());
    startDate = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
    endDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    //console.log(startDate, endDate);

    if(today >= startDate && today <= endDate){
      eventDesign = true
      dateEvent = "easter"
      console.log(dateEvent + " event")
    }

    // Check summer
    date = getSummer()
    startDate = date;
    endDate = new Date(date.getTime() + 60 * 24 * 60 * 60 * 1000);
    //console.log(startDate, endDate);

    if(today >= startDate && today <= endDate){
      eventDesign = true
      dateEvent = "summer"
      console.log(dateEvent + " event")
    }

    // Check Halloween
    date = getHalloween();
    startDate = new Date(date.getTime() - 7 * 24 * 60 * 60 * 1000);
    endDate = new Date(date.getTime() + 1 * 24 * 60 * 60 * 1000);
    //console.log(startDate, endDate);

    if(today >= startDate && today <= endDate){
      eventDesign = true
      dateEvent = "spooky"
      console.log(dateEvent + " event")
    }

    // Check xmas
    date = getXmas();
    startDate = new Date(date.getTime() - 14 * 24 * 60 * 60 * 1000);
    endDate = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
    //console.log(startDate, endDate);

    if(today >= startDate && today <= endDate){
      eventDesign = true
      dateEvent = "xmas"
      console.log(dateEvent + " event")
    }


    // For Debug
    //dateEvent = "easter"



    if(!dateEvent){
      console.log("No events right now")
      return
    }

    // If it's the right date

    //retrieve images links
    var manifest = chrome.runtime.getManifest();
    let imageUrl = manifest.action.default_icon.split('images')[0]+`images/${dateEvent}/`

    let nbRandom1 = Math.floor(Math.random() * 2) + 1;
    let nbRandom2 = Math.floor(Math.random() * 2) + 1;

    // For 5 image (2 image per event rignt now)
    // let nombreAleatoire = Math.floor(Math.random() * 5) + 1;




    if(!document.getElementById("eventDiv")){
       // Create the div for two images
      var newDiv = document.createElement("div");
      newDiv.id = "eventDiv";

      // Insérer la nouvelle div à la fin de l'élément body
      document.body.appendChild(newDiv);

      // Créer les balises img
      var img1 = document.createElement("div");
      img1.id = "eventImageRight"

      var img2 = document.createElement("div");
      img2.id = "eventImageLeft"

      // Ajouter les balises img à la nouvelle div
      newDiv.appendChild(img1);
      newDiv.appendChild(img2);
    }

    topImage = `${imageUrl}top.gif`
    rightImage = `${imageUrl}right${nbRandom1}.png`
    leftImage = `${imageUrl}left${nbRandom2}.png`
    bottomImage = `${imageUrl}bottom.png`

    //console.log(imageUrl)
   
    style.textContent += getEventRedesignCss(topImage, bottomImage, rightImage, leftImage)
    style.textContent += getHeavyRedesignCss()

  }

}