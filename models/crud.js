'use strict'

 class crud {

   _Scheme;
   _Model;
   _db = require('../db.js');
   
    constructor(shema, collection) {
        //this._userScheme = new this._db.MongoClient.Schema(this.objShema);
        //this._User = this._db.MongoClient.model("Users", this._userScheme);
        this._Scheme = new this._db.MongoClient.Schema(shema);
        this._Model = this._db.MongoClient.model(collection, this._Scheme);
    } 

  create(obj_user, cb) {
    //this._User(obj_user).save((err) => { cb(err) });
    this._Model.create(obj_user, (err) => {
      cb(err); 
    });
  }

  getById(id, cb) {
    this._Model.findById(id, (err, docs) => {
       cb(err, docs);
    });
 }

 get(obj_user, cb) {
    this._Model.find(obj_user, (err, docs) => {
       cb(err, docs);
    });
 }

  getAll(cb) {
     this._Model.find({}, (err, docs) => {
        cb(err, docs);
     });
  }

  remove(obj_user, cb) {
      this._Model.deleteMany(obj_user, (err) => {
          cb(err);
      });
  }

  update(obj_userf, obj_useri, cb) {
    this._Model.updateMany(obj_userf, obj_useri, (err, result) => {
        cb(err, result);
    });
  }

  updateOne(obj_userf, obj_useri, cb) {
    this._Model.updateOne(obj_userf, obj_useri, (err, result) => {
        cb(err, result);
    });
  }
}

module.exports = crud;