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
    .mg_portal_partners_left, .mg_portal_partners{
      display: none;
    }

    #mg_portal_slideshow, .mg_slideshow_overlay{
      width: 60vw;
      height: auto;
    }
    .flexslider .slides img{
      width: 100%;
      height: auto;
      position: static;
    }

    #mg_portal_slideshow .flex-control-nav{
      top: inherit;
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
    style.textContent += `
    #mg_portal_center{
      background-color: yellow;
    }
    `
  }

}