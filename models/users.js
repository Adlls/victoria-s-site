'use strict'

 class users {

   _userScheme;
   _User;
   _db = require('../db.js');
   objShema = {
    name: String,
    role: String,
    lastTime: Date,
    timeReg: Date
   }
   
    constructor() {
        this._userScheme = new this._db.MongoClient.Schema(this.objShema);
        this._User = this._db.MongoClient.model("Users", this._userScheme);
    } 

  create(obj_user, cb) {
    //this._User(obj_user).save((err) => { cb(err) });
    this._User.create(obj_user, (err) => {
      cb(err); 
    });
  }

  getById(id, cb) {
    this._User.findById(id, (err, docs) => {
       cb(err, docs);
    });
 }

 get(obj_user, cb) {
    this._User.find(obj_user, (err, docs) => {
       cb(err, docs);
    });
 }

  getAll(cb) {
     this._User.find({}, (err, docs) => {
        cb(err, docs);
     });
  }

  remove(obj_user, cb) {
      this._User.deleteMany(obj_user, (err) => {
          cb(err);
      });
  }

  update(obj_userf, obj_useri, cb) {
    this._User.updateMany(obj_userf, obj_useri, (err, result) => {
        cb(err, result);
    });
  }

  updateOne(obj_userf, obj_useri, cb) {
    this._User.updateOne(obj_userf, obj_useri, (err, result) => {
        cb(err, result);
    });
  }
}

module.exports = users;