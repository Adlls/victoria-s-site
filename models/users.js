'use strict'

const crud = require('./crud');

class users extends crud {
  
    constructor() {
        super({
          name: String,
          role: String,
          lastTime: Date,
          tieReg: Date
         }, "Users");
    } 
}

module.exports = users;
