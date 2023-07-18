
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify('5fa3b9'),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: '1+1',
      'process.env.REACT_APP_ORDERS': JSON.stringify(process.env.REACT_APP_ORDERS),
      'process.env.REACT_APP_STRIPE_TEST_KEY': JSON.stringify(process.env.REACT_APP_STRIPE_TEST_KEY),
      'process.env.REACT_APP_ITEMS': JSON.stringify(process.env.REACT_APP_ITEMS),
      'process.env.REACT_APP_SERVER_LINK': JSON.stringify(process.env.REACT_APP_SERVER_LINK),
      'process.env.REACT_APP_API': JSON.stringify(process.env.REACT_APP_API),
    }),
  ],
}
