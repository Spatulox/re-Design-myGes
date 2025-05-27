function getDarkModeCss() {
  const darkModeStyles = `
    :root{
      color-scheme: light dark;
    }
    
    #mg_portal_body, #mg_portal_content, #mg_portal_center, [class*="ui-"], [class*="ui-"] *, .mg_inherit_bg, .mg_container_group{
      background-color: Canvas !important;
      color: CanvasText !important;
    }

    .blue.mg_widget_full .mg_title, .mg_title, [role="row"]> th, .mg_home_title{
      background-color: AccentColor !important;
      color: AccentColorText !important;
    }

    .blue.mg_widget_full .mg_title *,
    .mg_widget_light .mg_title *,
    .ui-menuitem-text,
    .ui-icon,
    .ui-column-title,
    .ui-menuitem-link,
    [role="menuitem"]{
      background-color: unset !important;
      color: unset !important;
    }
`
    return darkModeStyles
}
