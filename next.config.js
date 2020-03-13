module.exports = {
    exportTrailingSlash: false,
    exportPathMap: function() {
      const routes = {
        '/': { page: '/' }
      };

      const travelsConfig = require(`./src/data/my-travels.json`);

      travelsConfig.forEach((travel) => {
        const cityName = travel.city.toLowerCase();
        routes[`/travels/${cityName}`] = { page: '/travels/[...slug]', query: { slug: cityName } };
      });

      return routes;
    },
    webpack: function(config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    }
  };