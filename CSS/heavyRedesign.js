function getHeavyRedesignCss(){
  let style = `

    #mg_portal_top{
      position: fixed;
      height: 100vh;
      width: 20vw;
    }

    #mg_portal_header{
      height: 100%;
    }

    #mg_portal_header_top{
      width: 20vw;
      overflow: hidden;
    }

    #mg_portal_header_bottom{
      height: 100%;
    }

    #mg_portal_header_bottom_container{
      width: 100%;
    }

    #mg_portal_nav{
      height: auto;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    #mg_portal_nav a{
      text-align: center;
      width: 88%;
      margin-left: 41px;
      padding: 0px;
    }

    #mg_portal_nav > li, #mg_portal_nav > li > a{
      width: 100%;
      padding: inherit;
      margin: auto;
      text-align: center;
      
    }

    #mg_portal_nav > li:not(:first-child) > a{
      margin-top: 20px;
      height: auto;
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.5);
      width: 90%;
      transition: all ease-in-out, 0.3s;
    }

    #mg_portal_nav > li:not(:first-child) > a:hover{
      background-color: rgba(0, 0, 0, 0.5);
    }


    #mg_userinfo_panel li{
      
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
    }

    #mg_userinfo_panel li > div:not(:first-child){
      
      width: 100%;
    }

    #mg_userinfo_panel a{
      margin: 0;
    }

    #mg_userinfo_panel li > img{
      margin-left: calc((20vw / 2) - 48px);
    }

    #mg_portal_nav .mg_userinfo a, #mg_portal_nav .mg_userinfo div, #mg_portal_nav li .mg_hiddable .mg_user_menu_row div{
      background-color: #595959;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      cursor: pointer;
    }

    #mg_portal_title_espace_etudiant{
      margin-left: 5px;
    }
    #mg_portal_nav li .mg_hiddable .mg_user_menu_row div{
      line-height: 24px
    }

    #mg_portal_nav .mg_userinfo a div{
      margin-left: 10px;
    }

    .mg_nav_group{
       display: inherit;
       padding: 5px; 
    }

    #mg_portal_slideshow .flex-control-nav{
      top: 224px;
    }

    #mg_portal_nav > .mg_nav_item, #mg_portal_nav > .mg_nav_group{
      display: inherit;
      height: auto;
    }

    .mg_nav_group ul{
      height: calc(100vh - 110px);
      position: absolute;
      top: 106px;
      z-index: 200000;
      width: 20vw;
    }

    .mg_hiddable{
      overflow: auto;
      width: 90%;
    }


    .mg_userinfo > a{
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }


    #mg_portal_content > form:first-child, #j_idt159, #j_idt144, #j_idt160{
      width: 100%;
    }

    #mg_portal_content{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 0px;
    }

    .mg_home_welcome{
      width: 90%;
    }

    #publicNewsWidget, #privateNewsWidget{
      width: 45%;
      padding-top: 0px;
      margin-top: 10px;
      border-top: inherit;
    }
    
    .mg_home_welcome ~ div:not(.spacer) {
      width: 45%;
      padding-top: 10px;
      margin-top: 30px;
      border-top: solid black;
    }
    
    .mg_home_welcome ~ div > div:first-child {
      color: white;
      background-color: #217bb1; 
    }


    /*Particular widget*/

    #admissionDoc, #scolarityDoc, #candidateDocListWidget, #stageDocumentsWidget, #litigationInvoiceWidget, #coursesWidget, #coursesSyllabusForm, #studentOpenGestionForm, #projectListForm, #offersForm, #listStudentStageOfferWidget, #openActionListWidget > .mg_content, #openActionListWidget > .mg_title , #marksWidget > div, #missingsWidget > div, #eventListWidget > div, #eventPassedListWidget > div, #expWidget >  div, #skillsWidget > div, #trainingsWidget > div, #contactsForm > div, #j_idt175 > div, #eventDetailForm > div, #eventDetailForm > button{
      width: 90%;
      margin: auto;
    }

    #stageDocumentsWidget, #litigationInvoiceWidget, #coursesWidget, #contactsForm > div, #eventDetailForm > div{
      float: inherit;
    }

    #calendar, #annualDocWidget, #admissionDocListWidget, #scolarityDocListWidget, #coursesFilesForm, #syllabusWidget, #studentOpenGestionWidget, #listProjectWidget, #j_idt176, #offersWidget, #openActionListWidget, #marksWidget, #missingsWidget, #eventListWidget, #eventPassedListWidget, #expWidget, #skillsWidget, #trainingsWidget, #contactsForm, #j_idt175, #eventDetailForm, #j_idt146, #j_idt153{
      width: 100%;
      margin: inherit;
    }

    #eventDetailForm > button{
      display: block;
      margin-top: 10px;
    }

    /* Avoiding overflow */
    #postulateForm{
      width: 0px;
      height: 0px;
      position: absolute;
    }

    .ui-overlay-hidden{
      position: absolute;
      top: 0px;
      /*left: 20vw*/
    }

    #actionPositionDialog_modal, actionPropositionDialog_modal{
      display: none;
      pointer-events: none;
    }


    /* BODY */

    #mg_portal_body{
      /*width: 80vw;/*See end of file*/
      width: 79vw;
      transform: translateX(20vw);
      overflow: hidden;
    }

    #mg_portal_center{
      padding-bottom: 20px;
      min-height: calc(100vh - 260px - 112.28px);
      overflow-y: auto;
      overflow-x: hidden;
    }

    #mg_portal_slideshow{
      margin: inherit;
    }

    #mg_portal_content{
      width: 100%;
    }

    .mg_partner{
      margin-top: 5px;
      width: auto;
      border: inherit;
    }

    .mg_partner a img{
      width: 80%;
    }

    .mg_portal_partners_left{
      width: calc(100vw - 20vw - 900px);
      height: 130px;
      
      display: flex;
      flex-wrap: nowrap;
      align-items: start;
      justify-content: space-evenly;
      
      position: absolute;
      z-index: 20000000;

      right: 0px;
      left: 900px;
      top: 0px;

      margin: inherit;
      margin-top: 13px;
      overflow: auto;
    }

    .mg_portal_partners{
      width: calc(100vw - 20vw - 900px);
      height: 130px;
      
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      justify-content: space-evenly;
      
      position: absolute;
      z-index: 20000000;

      /*right: 0px;*/
      left: 900px;
      top: 130px;

      margin: inherit;
      overflow: auto;
    }


    #mg_footer{
      width: 80vw; /*See end of file*/
      left: 20vw;
      position: relative;
      bottom: 0px;
    }


    /* EVENT */

    #eventImageLeft{
      left: 80px;
      opacity: 0.2;
    }
    
    /* Gecko */
    @-moz-document url-prefix() {
      #mg_footer {
        width: 80vw;
      }
      #mg_portal_body{
        width: 80vw;
      }
    }
    /* Chromium */
    @supports (-webkit-appearance:none) {
      #mg_footer {
        width: 79vw;
      }
      #mg_portal_body{
        width: 79vw;
      }
    }

    `
  return style
}
