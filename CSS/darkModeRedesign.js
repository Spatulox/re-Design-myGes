function getDarkModeCss() {
  let gecko = (typeof browser !== 'undefined')

  const darkModeStyles = `
      :root{
        color-scheme: light dark;
      }

      #mg_portal_body,
      #mg_portal_content,
      #mg_portal_center,
      [class*="ui-"]:not(.ui-widget-header):not(.ui-menuitem-link):not(.ui-menuitem-text):not(.ui-icon),
      [class*="ui-"]:not(.ui-widget-header):not(.ui-menuitem-link):not(.ui-menuitem-text):not(.ui-icon) *,
      .mg_inherit_bg,
      .mg_container_group{
        background-color: ${gecko ? "Canvas" : "#181a1b"} !important;
        color: ${gecko ? "CanvasText" : "#f5f6fa"} !important;
      }
      .blue.mg_widget_full .mg_title, .mg_title, [role="row"]> th, .mg_home_title{
        background-color: ${gecko ? "AccentColor" : "#2563eb"} !important;
        color:  ${gecko ? "AccentColorText" : "#ffffff"} !important;
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
