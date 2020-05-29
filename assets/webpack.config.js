const createConfig = require('bcd-react-webpack');

const env = process.env.NODE_ENV || 'development';

module.exports = createConfig({
  digest: false,
  distPath: '../priv/static',
  publicPath: env === 'development' ? '/' : 'https:lesscap.oss-cn-shanghai.aliyuncs.com/bighero/'
});
