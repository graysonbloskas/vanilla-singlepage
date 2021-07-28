const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('viewing dashboard') },
    { path: '/posts', view: () => console.log('viewing posts') },
    { path: '/settings', view: () => console.log('viewing settings') },
  ];

  //Test each route for potential match
  const potentialMatchs = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatchs.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  console.log(match.route.view());
};

document.addEventListener('DOMContentLoaded', () => {
  router();
});