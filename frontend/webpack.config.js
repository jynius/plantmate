module.exports = {
    module: {
      rules: [
        {
          test: /\/api\/file\/\d+$/,
          use: [{
            loader: 'file-loader'
          }]
        },
      ],
    },
  };