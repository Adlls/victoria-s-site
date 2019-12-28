const path = require('path'); 

module.exports = {    
  watch: true,
  entry: path.join(__dirname, '/public/javascripts', 'index.jsx'),    
  output: {        
    path: path.join(__dirname, '/public/javascripts'),        
    filename: 'index.js'    },    module: {        
      rules: [
        {            
          test: /\.jsx$/,            
          loader: 'babel-loader',           
          exclude: '/node_modules/',
          options: {
            presets:["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
        } 

        },

        { test: /\.css$/, loader: "style-loader!css-loader" }
      ],

      },
    }; 