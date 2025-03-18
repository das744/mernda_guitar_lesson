import webpack from 'webpack';

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
    };
    return config;
  },
};

export default nextConfig;
