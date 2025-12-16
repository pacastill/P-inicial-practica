var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  //API
  {
    path: '/characters/',
    componentUrl: './pages/characters.html',
  },
  {
    path: '/locations/',
    componentUrl: './pages/locations.html',
  },
  {
    path: '/episodes/',
    componentUrl: './pages/episodes.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
