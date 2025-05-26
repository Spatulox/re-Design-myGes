function getDarkModeCss() {
  const darkModeStyles = `
    :root{
      color-scheme: light dark;
    }
    *{
      background-color: Canvas !important;
      color: CanvasText !important;
    }
    .blue.mg_widget_full .mg_title{
      background-color: AccentColor !important;
      color: AccentColorText !important;
    }
    .blue.mg_widget_full .mg_title *{
      background-color: unset !important;
      color: unset !important;
    }

    .mg_widget_light .mg_title{
      color: AccentColor !important;
    }
`
    return darkModeStyles
}
