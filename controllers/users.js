'use strict'

class users {

    _Users = require('../models/users');

    constructor() {
        this._Users = new this._Users();
    }

      view(req, res) {
        this._Users.getAll((err, docs) => {
            if (err) {
              console.log(err);
              return res.sendStatus(500);
            }
            res.render('index',{dataset:docs});
        });
    }
}

module.exports = users;
