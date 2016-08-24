# homestar-null
[IOTDB](https://github.com/dpjanes/node-iotdb) Bridge - does nothing, but provides useful Models

<img src="https://raw.githubusercontent.com/dpjanes/iotdb-homestar/master/docs/HomeStar.png" align="right" />

# About

This Home☆Star module contains a number of Models that can be reused
in other projects. In and of itself, this "Null" Bridge 
does nothing.

* [Read about Bridges](https://github.com/dpjanes/node-iotdb/blob/master/docs/bridges.md)

# Installation

* [Read this first](https://github.com/dpjanes/node-iotdb/blob/master/docs/install.md)

Then:

    $ npm install homestar-null

## Models
### Values

All of these models have a single
attribute called <code>value</code>
with varying types. 

These are useful when you're reading
or writing a value from/to a pin
but it has no real semantic meaning.

* ValueBoolean
* ValueColor
* ValueDate
* ValueDatetime
* ValueInteger
* ValueNumber
* ValuePercent
* ValueString
* ValueTime
* ValueUnit
