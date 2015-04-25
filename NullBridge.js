/*
 *  NullBridge.js
 *
 *  David Janes
 *  IOTDB.org
 *  2015-03-06
 *
 *  Copyright [2013-2015] [David P. Janes]
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

"use strict";

var iotdb = require('iotdb');
var _ = iotdb._;
var bunyan = iotdb.bunyan;

var unirest = require('unirest');
var stream = require('stream');
var NullParser = require('feedparser');

var logger = bunyan.createLogger({
    name: 'homestar-feed',
    module: 'NullBridge',
});

/**
 *  See {iotdb.bridge.Bridge#Bridge} for documentation.
 *  <p>
 *  @param {object|undefined} native
 *  only used for instances, should be 
 */
var NullBridge = function (initd, native) {
    var self = this;

    self.initd = _.defaults(initd,
        iotdb.keystore().get("bridges/NullBridge/initd"), {}
    );

    self.native = native;
};

NullBridge.prototype = new iotdb.Bridge();

NullBridge.prototype.name = function () {
    return "NullBridge";
};

/* --- lifecycle --- */

/**
 *  See {iotdb.bridge.Bridge#XXX} for documentation.
 */
NullBridge.prototype.discover = function () {
    var self = this;

    self.discovered(new NullBridge(self.initd, {}));
};

/**
 *  See {iotdb.bridge.Bridge#XXX} for documentation.
 */
NullBridge.prototype.connect = function (connectd) {
    var self = this;
    if (!self.native) {
        return;
    }

    self._validate_connect(connectd);
};

NullBridge.prototype._forget = function () {
    var self = this;
    if (!self.native) {
        return;
    }

    logger.info({
        method: "_forget"
    }, "called");

    self.native = null;
    self.pulled();
};

/**
 *  See {iotdb.bridge.Bridge#XXX} for documentation.
 */
NullBridge.prototype.disconnect = function () {
    var self = this;
    if (!self.native || !self.native) {
        return;
    }

    self._forget();
};

/* --- data --- */

/**
 *  See {iotdb.bridge.Bridge#XXX} for documentation.
 */
NullBridge.prototype.push = function (pushd) {
    var self = this;
    if (!self.native) {
        return;
    }

    self._validate_push(pushd);

    logger.info({
        method: "push",
        unique_id: self.unique_id,
        pushd: pushd,
    }, "pushed");
};

/**
 *  See {iotdb.bridge.Bridge#XXX} for documentation.
 */
NullBridge.prototype.pull = function () {
    var self = this;
    if (!self.native) {
        return;
    }

    logger.info({
        method: "pull",
        unique_id: self.unique_id,
    }, "pulled");
};

/* --- state --- */

/**
 *  See {iotdb.bridge.Bridge#XXX} for documentation.
 */
NullBridge.prototype.meta = function () {
    var self = this;
    if (!self.native) {
        return;
    }

    return {
        "iot:thing": _.id.thing_urn.unique_hash("Null"),
        "schema:name": self.initd.name || "Null",
    };
};

/**
 *  See {iotdb.bridge.Bridge#XXX} for documentation.
 */
NullBridge.prototype.reachable = function () {
    return this.native !== null;
};

/**
 *  See {iotdb.bridge.Bridge#XXX} for documentation.
 */
NullBridge.prototype.configure = function (app) {};

/* --- Internals --- */
/*
 *  API
 */
exports.Bridge = NullBridge;
