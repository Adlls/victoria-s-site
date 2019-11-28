'use strict'

class db {

  static MongoClient = require('mongodb').MongoClient;
  static protocol = "mongodb";
  _port;
  _name;
  _host;
   
  constructor(host, port, name) {  
       this._host = host;  
       this._port = port;
       this._name = name;   
       console.log(this.getUrl());  
       this.connectDB();
  }

connectDB() {
  let mongodb =  new db.MongoClient(this.getUrl(), {useNewUrlParser: true});
  mongodb.connect((err, client) => {
      if (err) {
          console.log(err);
      }      
      client.close();
  })
}  
getUrl() {
  return db.protocol + "://" + this._host + ":" + this._port + "/" + this._name;
}

get port() {
  return this._port;
}
get name() {
  return this._name;
}
get host() {
  return this._host;
}
set port(port) {
  this._port = port;
}
set name(name) {
  this._name = name;
}
set host(host) {
  this._host = host;
}

}

/*
db.prototype.getPort = () => {
  return this._port;
}
db.prototype.getName = () => {
  return this._name;
}

db.prototype.getUrl = () => {
  return this._name;
}

db.prototype.getUrl = () => {
  //return 
}
*/

module.exports = db;