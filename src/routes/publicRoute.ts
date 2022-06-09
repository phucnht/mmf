const publicRoute = {
  home: {
    path: '/',
    name: 'Metaverse',
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

  itemView: {
    path: '/items',
    url: ({ id }: { id: string }) => `/items/${id}`,
  },
};

export default publicRoute;
