// Dom7
var $ = Dom7;

// Theme
var theme = 'md'; 
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  routes: routes,
  panel: {
    swipe: 'false',
    resizable: true,
    visibleBreakpoint: 0,
    closeByBackdropClick: false, 
  },
  view:{
    pushState: false,
  }
});

app.on('pageInit', function () {
  if (app.panel.left) {
    app.panel.left.open();
  }
});
