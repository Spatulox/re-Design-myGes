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

    style.textContent = `


    /*Header*/

    #mg_portal_header_top_container{
      width: 90vw;
      display: flex;
      flex-wrap: nowrap;
      height: 60px;
      justify-content: space-evenly
    }

    #mg_portal_header_bottom_container{
      width: 70vw;
      display: flex;
    }

    #mg_portal_title_espace_etudiant{
      margin: auto;
      margin-left: 60px;
      margin-right: 0px;
    }

    .mg_social_network{
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }

    #mg_user_message a img{
      transform: translateY(20px);
    }

    #mg_portal_nav {
      list-style: none;
      display: inline-block;
      height: 46px;
      width: auto;
      z-index: 1001;
      margin: auto;
      overflow: auto;
    }


    /*Images*/

    .mg_portal_partners_left, .mg_portal_partners{
      display: none;
    }

    #mg_portal_slideshow, .mg_slideshow_overlay{
      width: 60vw;
      height: auto;
    }

    #mg_portal_slideshow .mg_slideshow_overlay{
      width: auto;
      height: auto;
    }

    .flexslider .slides img{
      width: 100%;
      height: auto;
      position: static;
    }

    #mg_portal_slideshow .flex-control-nav{
      top: inherit;
      position: absolute;
      height: 25px;
      transform: translateY(-35px);
      width: 60vw;
      padding: 6px 0px;
    }

    /*Main part*/

    #mg_portal_content{
    width: 60vw;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    #j_idt159, .mg_home_welcome{
      width: 100%;
    }

    #mg_portal_content > :nth-child(n+5){
    /* div, #mg_portal_content form{*/
      display: inline-block;
      width: 45%;
      margin: 0px;
      margin-bottom: 50px;
      padding: 5px 5px;
    }

    .mg_title span{
      padding-left: 30px;
    }

    @media (max-width: 1080px) {

      #mg_portal_slideshow, .mg_slideshow_overlay{  
        width: 80vw;
      }

      #mg_portal_title_espace_etudiant{
        display: none;
      }
      
      #mg_portal_content{ 
        width: 80vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
       }
       
       #mg_portal_content > :nth-child(n+5){  
        display: inline-block;
        width: 100%;
        margin: 0px;
        margin-bottom: 50px;
        padding: 5px 5px;
       }

       #mg_portal_slideshow .flex-control-nav{
        width: 80vw;
      }

    }
      `;
  }

  // Heavy design enable
  else if (heavyDesign == 1){
    console.log('Heavy design')
    style.textContent += `
    #mg_portal_body {
      background-color: rgb(0, 0, 0);
    }
    `
  }

  // Event design enable (compatible soft redesign && heavyDesign)
  if (eventDesign == 1){
    console.log('Event design')
    let dateEventDesign = false
    let dateEvent = false

    // Check the date
    let today = new Date();
    let jour = today.getDate();


    // Check valentines
    let date = getValentine(new Date().getFullYear());
    let startDate = new Date(date.getTime() - 5 * 24 * 60 * 60 * 1000);
    let endDate = new Date(date.getTime() + 0 * 24 * 60 * 60 * 1000);
    //console.log(startDate, endDate);

    if(today >= startDate && today <= endDate){
      eventDesign = true
      dateEvent = "valentine"
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
    //dateEvent = "spooky"



    if(!dateEvent){
      console.log("No events right now")
      return
    }

    // If it's the right date

    //retrieve images links
    //let dateEvent = "easter"
    var manifest = browser.runtime.getManifest();
    let imageUrl = manifest.action.default_icon.split('images')[0]+`images/${dateEvent}/`

    let nbRandom1 = Math.floor(Math.random() * 2) + 1;
    let nbRandom2 = Math.floor(Math.random() * 2) + 1;

    // For 5
    // let nombreAleatoire = Math.floor(Math.random() * 5) + 1;




    if(!document.getElementById("eventDiv")){
       // Create the div for two images
      var newDiv = document.createElement("div");
      newDiv.id = "eventDiv";

      // Insérer la nouvelle div après l'élément body
      //document.body.insertAdjacentElement('afterend', newDiv);
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

    console.log(imageUrl)
   

    // let element = document.getElementById("mg_portal_center");
    // element.style.backgroundImage = "url('" + imageUrl + "')";
    //var manifestUrl = browser.runtime.getURL(manifest);

    style.textContent += `
    #mg_portal_body{
      background-image: url('${topImage}');
    }

    #mg_portal_center{
      background-image: url('${bottomImage}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center bottom;
    }

    #mg_portal_content{
      background-image: transparent;
      background-color: transparent;
    }

    #eventImageRight{
      position: fixed;
      bottom: 60px;
      right: 20px;
      width: 25vh;
      height: 25vh;
      background-image: url('${rightImage}');
      background-size: contain;
      background-repeat: no-repeat;
    }

    #eventImageLeft{
      position: fixed;
      bottom: 60px;
      left: 10px;
      width: 25vh;
      height: 25vh;
      background-image: url('${leftImage}');
      background-size: contain;
      background-repeat: no-repeat;
    }
    `
  }

}