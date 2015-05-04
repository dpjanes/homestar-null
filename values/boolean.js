/*
 *  things/values/boolean.js
 *
 *  David Janes
 *  IOTDB
 *  2014-04-21
 *
 *  A boolean value
 */

"use strict";

var iotdb = require("iotdb");

exports.Model = iotdb.make_model('ValueBoolean')
    .io("value", iotdb.boolean)
    .make();

exports.binding = {
    model: exports.Model,
    bridge: require('../NullBridge').Bridge,
    discover: false,
};
