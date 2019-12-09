'use strict'

class db {

  //MongoClient = require('mongodb').MongoClient;
  static MongoClient = require('mongoose');
  static protocol = "mongodb";
  _port;
  _name;
  _host;
  _statedb;
   
  constructor(host, port, name) {  
       this._host = host;  
       this._port = port;
       this._name = name;   
       console.log(this.getUrl());


  }

connectDB() {
  db.MongoClient.connect(this.getUrl(), {useNewUrlParser: true, useUnifiedTopology: true});
}  

getUrl() {
  return db.protocol + "://" + this._host + ":" + this._port + "/" + this._name;
}

getSchema() {
  return db.MongoClient.Schema;
}

getConnect() {
  return db.MongoClient;
}

get statedb() {
  return this._statedb;
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

module.exports = db;