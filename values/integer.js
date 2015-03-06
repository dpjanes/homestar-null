/*
 *  things/values/integer.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An integer value
 */

"use strict";

var iotdb = require("iotdb")

exports.Model = iotdb.make_model('ValueInteger')
    .io("value", iotdb.integer)
    .make()
    ;
    
exports.binding = {
    model: exports.Model,
    bridge: require('../NullBridge').Bridge,
};
