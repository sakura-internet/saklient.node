/// <reference path="Model.ts" />
/// <reference path="../resource/Server.ts" />
/// <reference path="../resource/ServerPlan.ts" />

/**
 * @module saclient.cloud.model
 */
module saclient.cloud.model {

	import Model = saclient.cloud.model.Model;
	import Server = saclient.cloud.resource.Server;
	import ServerPlan = saclient.cloud.resource.ServerPlan;
	
	/**
	 * サーバを検索するための機能を備えたクラス。
	 * 
	 * @class Model_Server
	 * @constructor
	 * @extends Model
	 */
	export class Model_Server extends saclient.cloud.model.Model {
		
		/**
		 * @private
		 * @method _apiPath
		 * @protected
		 * @return {string}
		 */
		_apiPath() : string {
			return "/server";
		}
		
		/**
		 * @private
		 * @method _rootKey
		 * @protected
		 * @return {string}
		 */
		_rootKey() : string {
			return "Server";
		}
		
		/**
		 * @private
		 * @method _rootKeyM
		 * @protected
		 * @return {string}
		 */
		_rootKeyM() : string {
			return "Servers";
		}
		
		/**
		 * 次に取得するリストの開始オフセットを指定します。
		 * 
		 * @method offset
		 * @chainable
		 * @public
		 * @param {number} offset オフセット
		 * @return {Model_Server} this
		 */
		offset(offset:number) : Model_Server {
			return (<Model_Server><any>(this._offset(offset)));
		}
		
		/**
		 * 次に取得するリストの上限レコード数を指定します。
		 * 
		 * @method limit
		 * @chainable
		 * @public
		 * @param {number} count 上限レコード数
		 * @return {Model_Server} this
		 */
		limit(count:number) : Model_Server {
			return (<Model_Server><any>(this._limit(count)));
		}
		
		/**
		 * 次のリクエストのために設定されているステートをすべて破棄します。
		 * 
		 * @method reset
		 * @chainable
		 * @public
		 * @return {Model_Server} this
		 */
		reset() : Model_Server {
			return (<Model_Server><any>(this._reset()));
		}
		
		/**
		 * 指定したIDを持つ唯一のリソースを取得します。
		 * 
		 * @method get
		 * @public
		 * @param {string} id
		 * @return {Server} リソースオブジェクト
		 */
		get(id:string) : Server {
			return (<Server><any>(this._get(id)));
		}
		
		/**
		 * リソースの検索リクエストを実行し、結果をリストで取得します。
		 * 
		 * @method find
		 * @public
		 * @return {Server[]} リソースオブジェクトの配列
		 */
		find() : Server[] {
			return Util.castArray(this._find(), (<Server><any>(null)));
		}
		
		/**
		 * 指定した文字列を名前に含むサーバに絞り込みます。
		 * 
		 * @method withNameLike
		 * @chainable
		 * @public
		 * @param {string} name
		 * @return {Model_Server}
		 */
		withNameLike(name:string) : Model_Server {
			this._filterBy("Name", name);
			return this;
		}
		
		/**
		 * 指定したタグを持つサーバに絞り込みます。
		 * 
		 * @method withTag
		 * @chainable
		 * @public
		 * @param {string} tag
		 * @return {Model_Server}
		 */
		withTag(tag:string) : Model_Server {
			this._filterBy("Tags.Name", tag, true);
			return this;
		}
		
		/**
		 * 指定したタグを持つサーバに絞り込みます。
		 * 
		 * @method withPlan
		 * @chainable
		 * @public
		 * @param {ServerPlan} plan
		 * @return {Model_Server}
		 */
		withPlan(plan:ServerPlan) : Model_Server {
			this._filterBy("ServerPlan.ID", plan._id(), true);
			return this;
		}
		
		/**
		 * インスタンスが指定した状態にあるサーバに絞り込みます。
		 * 
		 * @method withInstanceStatus
		 * @chainable
		 * @public
		 * @param {string} status
		 * @return {Model_Server}
		 */
		withInstanceStatus(status:string) : Model_Server {
			this._filterBy("Instance.Status", status, true);
			return this;
		}
		
	}
	
}
