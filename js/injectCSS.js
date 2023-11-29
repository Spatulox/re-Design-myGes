async function injectCSS(){
  console.log('InjectCSS')
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
  let tmp = await getLocalValues()
  let enabled = (tmp[0] != 'Error' ? tmp[0] : 0)
  let heavyDesign = (tmp[1] != 'Error' ? tmp[1] : 0)
  let eventDesign = (tmp[2] != 'Error' ? tmp[2] : 0)

  // Enable some customs design

  if(enabled == 0){
    console.log('The extension is not enable, no redesign')
    return
  }

  if(enabled == 1 && heavyDesign == 0){
    console.log('Normal design')
    // Header / Images
    reworkHeader();

    // Rework the main part
    reworkMain()

    // Add some extra :

    style.textContent = `
    #mg_portal_body {
      background-color: rgb(219, 19, 19);
    }

    #mg_portal_center{
      background-color: rgb(145, 9, 9);
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