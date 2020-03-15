module.exports = {
    exportTrailingSlash: false,
    exportPathMap: function() {
      const routes = {
        '/': { page: '/' }
      };
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