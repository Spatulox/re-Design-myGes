function getNormalRedesignCss(){
  let style = `

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

      #mg_portal_content > form:first-child, #mg_portal_content form{
        width: 100%;
      }

      .mg_home_welcome{
        width: 100%;
      }

      #mg_portal_content > :nth-child(n+5){
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

  `

  return style
}