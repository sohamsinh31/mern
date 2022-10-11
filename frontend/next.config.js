/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    future: {
        webpack5: true
    },
    webpack: function (config, options) {
        //console.log(options.webpack.version); // 5.18.0
        config.experiments = {
          layers:true,
          topLevelAwait: true
        }
        // config.resolve = {
        //   ...config.resolve,
        //   fallback: {
        //     "fs": false,
        //     "path": false,
        //     "os": false,
        //     "net":false,
        //     "async_hooks":false
        //   }
        // }
        return config;
    }
};

module.exports = nextConfig
