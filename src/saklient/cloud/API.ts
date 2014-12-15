/// <reference path="../../node.d.ts" />

export = API;

import Util = require('../Util');
import Client = require('./Client');
import Product = require('./Product');
import Facility = require('./Facility');
import Model_Icon = require('./models/Model_Icon');
import Model_Server = require('./models/Model_Server');
import Model_Disk = require('./models/Model_Disk');
import Model_Appliance = require('./models/Model_Appliance');
import Model_Archive = require('./models/Model_Archive');
import Model_IsoImage = require('./models/Model_IsoImage');
import Model_Iface = require('./models/Model_Iface');
import Model_Swytch = require('./models/Model_Swytch');
import Model_Router = require('./models/Model_Router');
import Model_Bridge = require('./models/Model_Bridge');
import Model_Ipv6Net = require('./models/Model_Ipv6Net');
import Model_Script = require('./models/Model_Script');
import Model_License = require('./models/Model_License');

'use strict';

/**
 * さくらのクラウドAPIクライアントを利用する際、最初にアクセスすべきルートとなるクラス。
 * 
 * @see API.authorize
 * @module saklient.cloud.API
 * @class API
 * @constructor
 */
class API {
	
	/**
	 * @private
	 * @member saklient.cloud.API#_client
	 * @type Client
	 * @protected
	 */
	_client : Client;
	
	/**
	 * @method get_client
	 * @protected
	 * @private
	 * @return {Client}
	 */
	get_client() : Client {
		return this._client;
	}
	
	/**
	 * @private
	 * @property client
	 * @type Client
	 * @readOnly
	 */
	get client() : Client { return this.get_client(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_product
	 * @type Product
	 * @protected
	 */
	_product : Product;
	
	/**
	 * @method get_product
	 * @protected
	 * @private
	 * @return {Product}
	 */
	get_product() : Product {
		return this._product;
	}
	
	/**
	 * 商品情報にアクセスするためのモデルを集めたオブジェクト。
	 * 
	 * @property product
	 * @type Product
	 * @readOnly
	 * @public
	 */
	get product() : Product { return this.get_product(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_facility
	 * @type Facility
	 * @protected
	 */
	_facility : Facility;
	
	/**
	 * @method get_facility
	 * @protected
	 * @private
	 * @return {Facility}
	 */
	get_facility() : Facility {
		return this._facility;
	}
	
	/**
	 * 設備情報にアクセスするためのモデルを集めたオブジェクト。
	 * 
	 * @property facility
	 * @type Facility
	 * @readOnly
	 * @public
	 */
	get facility() : Facility { return this.get_facility(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_icon
	 * @type Model_Icon
	 * @protected
	 */
	_icon : Model_Icon;
	
	/**
	 * @method get_icon
	 * @protected
	 * @private
	 * @return {Model_Icon}
	 */
	get_icon() : Model_Icon {
		return this._icon;
	}
	
	/**
	 * アイコンにアクセスするためのモデル。
	 * 
	 * @property icon
	 * @type Model_Icon
	 * @readOnly
	 * @public
	 */
	get icon() : Model_Icon { return this.get_icon(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_server
	 * @type Model_Server
	 * @protected
	 */
	_server : Model_Server;
	
	/**
	 * @method get_server
	 * @protected
	 * @private
	 * @return {Model_Server}
	 */
	get_server() : Model_Server {
		return this._server;
	}
	
	/**
	 * サーバにアクセスするためのモデル。
	 * 
	 * @property server
	 * @type Model_Server
	 * @readOnly
	 * @public
	 */
	get server() : Model_Server { return this.get_server(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_disk
	 * @type Model_Disk
	 * @protected
	 */
	_disk : Model_Disk;
	
	/**
	 * @method get_disk
	 * @protected
	 * @private
	 * @return {Model_Disk}
	 */
	get_disk() : Model_Disk {
		return this._disk;
	}
	
	/**
	 * ディスクにアクセスするためのモデル。
	 * 
	 * @property disk
	 * @type Model_Disk
	 * @readOnly
	 * @public
	 */
	get disk() : Model_Disk { return this.get_disk(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_appliance
	 * @type Model_Appliance
	 * @protected
	 */
	_appliance : Model_Appliance;
	
	/**
	 * @method get_appliance
	 * @protected
	 * @private
	 * @return {Model_Appliance}
	 */
	get_appliance() : Model_Appliance {
		return this._appliance;
	}
	
	/**
	 * アプライアンスにアクセスするためのモデル。
	 * 
	 * @property appliance
	 * @type Model_Appliance
	 * @readOnly
	 * @public
	 */
	get appliance() : Model_Appliance { return this.get_appliance(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_archive
	 * @type Model_Archive
	 * @protected
	 */
	_archive : Model_Archive;
	
	/**
	 * @method get_archive
	 * @protected
	 * @private
	 * @return {Model_Archive}
	 */
	get_archive() : Model_Archive {
		return this._archive;
	}
	
	/**
	 * アーカイブにアクセスするためのモデル。
	 * 
	 * @property archive
	 * @type Model_Archive
	 * @readOnly
	 * @public
	 */
	get archive() : Model_Archive { return this.get_archive(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_isoImage
	 * @type Model_IsoImage
	 * @protected
	 */
	_isoImage : Model_IsoImage;
	
	/**
	 * @method get_isoImage
	 * @protected
	 * @private
	 * @return {Model_IsoImage}
	 */
	get_isoImage() : Model_IsoImage {
		return this._isoImage;
	}
	
	/**
	 * ISOイメージにアクセスするためのモデル。
	 * 
	 * @property isoImage
	 * @type Model_IsoImage
	 * @readOnly
	 * @public
	 */
	get isoImage() : Model_IsoImage { return this.get_isoImage(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_iface
	 * @type Model_Iface
	 * @protected
	 */
	_iface : Model_Iface;
	
	/**
	 * @method get_iface
	 * @protected
	 * @private
	 * @return {Model_Iface}
	 */
	get_iface() : Model_Iface {
		return this._iface;
	}
	
	/**
	 * インタフェースにアクセスするためのモデル。
	 * 
	 * @property iface
	 * @type Model_Iface
	 * @readOnly
	 * @public
	 */
	get iface() : Model_Iface { return this.get_iface(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_swytch
	 * @type Model_Swytch
	 * @protected
	 */
	_swytch : Model_Swytch;
	
	/**
	 * @method get_swytch
	 * @protected
	 * @private
	 * @return {Model_Swytch}
	 */
	get_swytch() : Model_Swytch {
		return this._swytch;
	}
	
	/**
	 * スイッチにアクセスするためのモデル。
	 * 
	 * @property swytch
	 * @type Model_Swytch
	 * @readOnly
	 * @public
	 */
	get swytch() : Model_Swytch { return this.get_swytch(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_router
	 * @type Model_Router
	 * @protected
	 */
	_router : Model_Router;
	
	/**
	 * @method get_router
	 * @protected
	 * @private
	 * @return {Model_Router}
	 */
	get_router() : Model_Router {
		return this._router;
	}
	
	/**
	 * ルータにアクセスするためのモデル。
	 * 
	 * @property router
	 * @type Model_Router
	 * @readOnly
	 * @public
	 */
	get router() : Model_Router { return this.get_router(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_bridge
	 * @type Model_Bridge
	 * @protected
	 */
	_bridge : Model_Bridge;
	
	/**
	 * @method get_bridge
	 * @protected
	 * @private
	 * @return {Model_Bridge}
	 */
	get_bridge() : Model_Bridge {
		return this._bridge;
	}
	
	/**
	 * ブリッジにアクセスするためのモデル。
	 * 
	 * @property bridge
	 * @type Model_Bridge
	 * @readOnly
	 * @public
	 */
	get bridge() : Model_Bridge { return this.get_bridge(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_ipv6Net
	 * @type Model_Ipv6Net
	 * @protected
	 */
	_ipv6Net : Model_Ipv6Net;
	
	/**
	 * @method get_ipv6Net
	 * @protected
	 * @private
	 * @return {Model_Ipv6Net}
	 */
	get_ipv6Net() : Model_Ipv6Net {
		return this._ipv6Net;
	}
	
	/**
	 * IPv6ネットワークにアクセスするためのモデル。
	 * 
	 * @property ipv6Net
	 * @type Model_Ipv6Net
	 * @readOnly
	 * @public
	 */
	get ipv6Net() : Model_Ipv6Net { return this.get_ipv6Net(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_script
	 * @type Model_Script
	 * @protected
	 */
	_script : Model_Script;
	
	/**
	 * @method get_script
	 * @protected
	 * @private
	 * @return {Model_Script}
	 */
	get_script() : Model_Script {
		return this._script;
	}
	
	/**
	 * スクリプトにアクセスするためのモデル。
	 * 
	 * @property script
	 * @type Model_Script
	 * @readOnly
	 * @public
	 */
	get script() : Model_Script { return this.get_script(); }
	
	
	/**
	 * @private
	 * @member saklient.cloud.API#_license
	 * @type Model_License
	 * @protected
	 */
	_license : Model_License;
	
	/**
	 * @method get_license
	 * @protected
	 * @private
	 * @return {Model_License}
	 */
	get_license() : Model_License {
		return this._license;
	}
	
	/**
	 * ライセンスにアクセスするためのモデル。
	 * 
	 * @property license
	 * @type Model_License
	 * @readOnly
	 * @public
	 */
	get license() : Model_License { return this.get_license(); }
	
	
	/**
	 * @private
	 * @constructor
	 * @protected
	 * @param {Client} client
	 */
	constructor(client:Client) {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(client, "saklient.cloud.Client");
		this._client = client;
		this._product = new Product(client);
		this._facility = new Facility(client);
		this._icon = new Model_Icon(client);
		this._server = new Model_Server(client);
		this._disk = new Model_Disk(client);
		this._appliance = new Model_Appliance(client);
		this._archive = new Model_Archive(client);
		this._isoImage = new Model_IsoImage(client);
		this._iface = new Model_Iface(client);
		this._swytch = new Model_Swytch(client);
		this._router = new Model_Router(client);
		this._bridge = new Model_Bridge(client);
		this._ipv6Net = new Model_Ipv6Net(client);
		this._script = new Model_Script(client);
		this._license = new Model_License(client);
	}
	
	/**
	 * 指定した認証情報を用いてアクセスを行うAPIクライアントを作成します。
	 * 
	 * 必要な認証情報は、コントロールパネル右上にあるアカウントのプルダウンから
	 * 「設定」を選択し、「APIキー」のページにて作成できます。
	 * 
	 * @static
	 * @method authorize
	 * @chainable
	 * @public
	 * @param {string} token ACCESS TOKEN
	 * @param {string} secret ACCESS TOKEN SECRET
	 * @param {string} zone=null ゾーン名
	 * @return {API} APIクライアント
	 */
	static authorize(token:string, secret:string, zone:string=null) : API {
		Util.validateArgCount(arguments.length, 2);
		Util.validateType(token, "string");
		Util.validateType(secret, "string");
		Util.validateType(zone, "string");
		var c:Client = new Client(token, secret);
		var ret:API = new API(c);
		return zone != null ? ret.inZone(zone) : ret;
	}
	
	/**
	 * 認証情報を引き継ぎ、指定したゾーンへのアクセスを行うAPIクライアントを作成します。
	 * 
	 * @method inZone
	 * @chainable
	 * @public
	 * @param {string} name ゾーン名
	 * @return {API} APIクライアント
	 */
	inZone(name:string) : API {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(name, "string");
		var ret:API = new API(this._client.cloneInstance());
		var suffix:string = "";
		if (name == "is1x" || name == "is1y") {
			suffix = "-test";
		};
		ret._client.setApiRoot("https://secure.sakura.ad.jp/cloud" + suffix + "/");
		ret._client.setApiRootSuffix("zone/" + name);
		return ret;
	}
	
	/**
	 * 指定した秒数の間、スリープします。
	 * 
	 * Fiber内で使用可能です。
	 * 
	 * @method sleep
	 * @public
	 * @param {number} sec 秒数
	 * @return {void}
	 */
	sleep(sec:number) : void {
		Util.validateArgCount(arguments.length, 1);
		Util.validateType(sec, "number");
		Util.sleep(sec);
	}
	
}

