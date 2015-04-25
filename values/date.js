/*
 *  things/values/date.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  An number value
 */

"use strict";

var iotdb = require("iotdb");

exports.Model = iotdb.make_model('ValueDate')
    .io("value", iotdb.datetime.date)
    .make();

exports.binding = {
    model: exports.Model,
    bridge: require('../NullBridge').Bridge,
};
