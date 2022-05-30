const publicRoute = {
  home: {
    path: '/',
    name: 'Home',
  },
  profile: {
    path: '/profile',
    name: 'Profile',
  },

  marketplace: {
    path: '/marketplace',
    name: 'Marketplace',
  },
  metaverse: {
    path: '/metaverse',
    name: 'Metaverse',
  },
  metaverseEvent: {
    path: '/metaverse',
    url: ({ id }: { id: string }) => `/metaverse/${id}`,
  },
};

export default publicRoute;
