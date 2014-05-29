/// <reference path="Model.ts" />
/// <reference path="../resource/IPv6Net.ts" />

/**
 * @module saclient.cloud.model
 */
module saclient.cloud.model {

	import Model = saclient.cloud.model.Model;
	import IPv6Net = saclient.cloud.resource.IPv6Net;
	
	/**
	 * IPv6ネットワークを検索するための機能を備えたクラス。
	 * 
	 * @class Model_IPv6Net
	 * @constructor
	 * @extends Model
	 */
	export class Model_IPv6Net extends saclient.cloud.model.Model {
		
		/**
		 * @private
		 * @method _apiPath
		 * @protected
		 * @return {string}
		 */
		_apiPath() : string {
			return "/ipv6net";
		}
		
		/**
		 * @private
		 * @method _rootKey
		 * @protected
		 * @return {string}
		 */
		_rootKey() : string {
			return "IPv6Net";
		}
		
		/**
		 * @private
		 * @method _rootKeyM
		 * @protected
		 * @return {string}
		 */
		_rootKeyM() : string {
			return "IPv6Nets";
		}
		
		/**
		 * 次に取得するリストの開始オフセットを指定します。
		 * 
		 * @method offset
		 * @chainable
		 * @public
		 * @param {number} offset オフセット
		 * @return {Model_IPv6Net} this
		 */
		offset(offset:number) : Model_IPv6Net {
			return (<Model_IPv6Net><any>(this._offset(offset)));
		}
		
		/**
		 * 次に取得するリストの上限レコード数を指定します。
		 * 
		 * @method limit
		 * @chainable
		 * @public
		 * @param {number} count 上限レコード数
		 * @return {Model_IPv6Net} this
		 */
		limit(count:number) : Model_IPv6Net {
			return (<Model_IPv6Net><any>(this._limit(count)));
		}
		
		/**
		 * 次のリクエストのために設定されているステートをすべて破棄します。
		 * 
		 * @method reset
		 * @chainable
		 * @public
		 * @return {Model_IPv6Net} this
		 */
		reset() : Model_IPv6Net {
			return (<Model_IPv6Net><any>(this._reset()));
		}
		
		/**
		 * 指定したIDを持つ唯一のリソースを取得します。
		 * 
		 * @method get
		 * @public
		 * @param {string} id
		 * @return {IPv6Net} リソースオブジェクト
		 */
		get(id:string) : IPv6Net {
			return (<IPv6Net><any>(this._get(id)));
		}
		
		/**
		 * リソースの検索リクエストを実行し、結果をリストで取得します。
		 * 
		 * @method find
		 * @public
		 * @return {IPv6Net[]} リソースオブジェクトの配列
		 */
		find() : IPv6Net[] {
			return Util.castArray(this._find(), (<IPv6Net><any>(null)));
		}
		
	}
	
}
