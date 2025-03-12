module.exports = {
    webpack: (config) => {
      config.resolve.fallback = {
        fs: false,
        tls: false,
        net: false,
      };
      return config;
    },
  };
  