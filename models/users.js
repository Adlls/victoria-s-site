'use strict'

const crud = require('./crud');

class users extends crud {

  /*
   _objShema = {
    name: String,
    role: String,
    lastTime: Date,
    timeReg: Date
   }
 */  
    constructor() {
        super({
          name: String,
          role: String,
          lastTime: Date,
          timeReg: Date
         }, "Users");
    } 
}

module.exports = users;