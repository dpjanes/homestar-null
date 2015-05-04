/*
 *  things/values/number.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An number value
 */

"use strict";

var iotdb = require("iotdb");

exports.Model = iotdb.make_model('ValueNumber')
    .io("value", iotdb.number)
    .make();

exports.binding = {
    model: exports.Model,
    bridge: require('../NullBridge').Bridge,
    discover: false,
};
