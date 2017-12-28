const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'ts-loader',
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../stories')],
      },
    ],
  },
};
