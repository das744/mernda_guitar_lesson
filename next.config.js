
module.exports = {
  webpack: (config, { isServer }) => {
    // Avoid bundling node core modules like dns on the client-side
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        dns: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

  // module.exports = {
//     webpack: (config) => {
//       config.resolve.fallback = {
//         fs: false,
//         tls: false,
//         net: false,
//       };
//       return config;
//     },
//   };