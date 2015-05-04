/*
 *  things/values/unit.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An number value between 0 and 1
 */

"use strict";

var iotdb = require("iotdb");

exports.Model = iotdb.make_model('ValueUnit')
    .io("value", iotdb.number.unit)
    .make();

exports.binding = {
    model: exports.Model,
    bridge: require('../NullBridge').Bridge,
    discover: false,
};
