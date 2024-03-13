function getEventRedesignCss(topImage, bottomImage, rightImage, leftImage){
  let style = `
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

  return style
}