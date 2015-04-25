/*
 *  things/values/time.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An number value
 */

"use strict";

var iotdb = require("iotdb");

exports.Model = iotdb.make_model('ValueTime')
    .io("value", iotdb.datetime.time)
    .make();

exports.binding = {
    model: exports.Model,
    bridge: require('../NullBridge').Bridge,
};
