const publicRoute = {
  home: {
    path: '/',
    name: 'Home',
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

  itemView: {
    path: '/items',
    url: ({ id }: { id: string }) => `/items/${id}`,
  },

  profile: {
    path: '/profile',
    name: 'Profile',
  },
};

export default publicRoute;
