/// <reference path="../../../node.d.ts" />

export = TQueryParams;

import Util = require('../Util');

interface TQueryParams {
	Begin? : number;
	Count? : number;
	Filter? : any;
}

