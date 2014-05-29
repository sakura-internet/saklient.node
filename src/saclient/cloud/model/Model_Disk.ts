/// <reference path="Model.ts" />
/// <reference path="../resource/Disk.ts" />

/**
 * @module saclient.cloud.model
 */
module saclient.cloud.model {

	import Model = saclient.cloud.model.Model;
	import Disk = saclient.cloud.resource.Disk;
	
	/**
	 * ディスクを検索するための機能を備えたクラス。
	 * 
	 * @class Model_Disk
	 * @constructor
	 * @extends Model
	 */
	export class Model_Disk extends saclient.cloud.model.Model {
		
		/**
		 * @private
		 * @method _apiPath
		 * @protected
		 * @return {string}
		 */
		_apiPath() : string {
			return "/disk";
		}
		
		/**
		 * @private
		 * @method _rootKey
		 * @protected
		 * @return {string}
		 */
		_rootKey() : string {
			return "Disk";
		}
		
		/**
		 * @private
		 * @method _rootKeyM
		 * @protected
		 * @return {string}
		 */
		_rootKeyM() : string {
			return "Disks";
		}
		
		/**
		 * 次に取得するリストの開始オフセットを指定します。
		 * 
		 * @method offset
		 * @chainable
		 * @public
		 * @param {number} offset オフセット
		 * @return {Model_Disk} this
		 */
		offset(offset:number) : Model_Disk {
			return (<Model_Disk><any>(this._offset(offset)));
		}
		
		/**
		 * 次に取得するリストの上限レコード数を指定します。
		 * 
		 * @method limit
		 * @chainable
		 * @public
		 * @param {number} count 上限レコード数
		 * @return {Model_Disk} this
		 */
		limit(count:number) : Model_Disk {
			return (<Model_Disk><any>(this._limit(count)));
		}
		
		/**
		 * 次のリクエストのために設定されているステートをすべて破棄します。
		 * 
		 * @method reset
		 * @chainable
		 * @public
		 * @return {Model_Disk} this
		 */
		reset() : Model_Disk {
			return (<Model_Disk><any>(this._reset()));
		}
		
		/**
		 * 指定したIDを持つ唯一のリソースを取得します。
		 * 
		 * @method get
		 * @public
		 * @param {string} id
		 * @return {Disk} リソースオブジェクト
		 */
		get(id:string) : Disk {
			return (<Disk><any>(this._get(id)));
		}
		
		/**
		 * リソースの検索リクエストを実行し、結果をリストで取得します。
		 * 
		 * @method find
		 * @public
		 * @return {Disk[]} リソースオブジェクトの配列
		 */
		find() : Disk[] {
			return Util.castArray(this._find(), (<Disk><any>(null)));
		}
		
		/**
		 * 指定した文字列を名前に含むディスクに絞り込みます。
		 * 
		 * @method withNameLike
		 * @chainable
		 * @public
		 * @param {string} name
		 * @return {Model_Disk}
		 */
		withNameLike(name:string) : Model_Disk {
			this._filterBy("Name", name);
			return this;
		}
		
		/**
		 * 指定したタグを持つディスクに絞り込みます。
		 * 
		 * @method withTag
		 * @chainable
		 * @public
		 * @param {string} tag
		 * @return {Model_Disk}
		 */
		withTag(tag:string) : Model_Disk {
			this._filterBy("Tags.Name", tag, true);
			return this;
		}
		
		/**
		 * 指定したサーバへ接続されているディスクに絞り込みます。
		 * 
		 * @method withServerId
		 * @chainable
		 * @public
		 * @param {string} id
		 * @return {Model_Disk}
		 */
		withServerId(id:string) : Model_Disk {
			this._filterBy("Server.ID", id);
			return this;
		}
		
	}
	
}
