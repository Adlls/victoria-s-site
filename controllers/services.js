'use strict'

class services {

    _Services = require('../models/services');

    constructor() {
        this._Services = new this._Services();
    }

    view(req, res) {
        this._Services.getAll((err, docs) => {
            if (err) {
              console.log(err);
              return res.sendStatus(500);
            }
            res.send(docs);
        });
    }
}

module.exports = services;
