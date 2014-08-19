/// <reference path="../../../node.d.ts" />

export = TQueryParams;

import Util = require('../../Util');

'use strict';

interface TQueryParams {
	Begin? : number;
	Count? : number;
	Filter? : any;
}

