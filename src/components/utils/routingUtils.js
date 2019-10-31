function parsePath(routesToParse, flat) {
  let routes = [];

  if (!routesToParse) return [];

  routesToParse.forEach(route => {
    if (route && typeof route === "object") {
      if (!route.children) {
        routes.push({ ...route });
      } else {
        let subRoutes = parsePath([...route.children], flat).map(r => {
          const newRoute = { ...r[Object.keys(r)[0]] };

          newRoute.path = route.path + newRoute.path;

          return newRoute;
        });
        if (flat) {
          routes = routes.concat(subRoutes);
        } else {
          route.children = subRoutes;
          routes.push({ ...route });
        }
      }
    }
  });

  return routes;
}

module.exports = { parsePath };
