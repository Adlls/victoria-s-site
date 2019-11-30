'use strict'

const crud = require('./crud');

class services extends crud {

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
          service_name: String,
          price: Number
         }, "Services");
    } 
}

module.exports = services;