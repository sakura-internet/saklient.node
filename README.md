# SAKURA Internet API Client Library for Node.js

This library gives you an easy interface to control your resources on
[SAKURA Cloud](https://secure.sakura.ad.jp/cloud/).


## Table of Contents

* [Installation](#installation)
* [How to use this library in your project](#how-to-use-this-library-in-your-project)
* [Copyright and license](#copyright-and-license)


## Installation

```bash
npm install git+ssh://git@github.com:sakura-internet/saklient.node.git
```


## How to use this library in your project

```javascript
var saklient = require('saklient');
var api = saklient.cloud.API.authorize(YOUR_API_TOKEN, YOUR_API_SECRET)

// To access resources in the specified zone
var api_is1b = api.inZone("is1b");

// ...
```


## Copyright and license

Copyright (C) 2014-2015 SAKURA Internet, Inc.

This library is freely redistributable under [MIT license](http://www.opensource.org/licenses/mit-license.php).

