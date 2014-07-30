/// <reference path="../../node.d.ts" />

export = API;

import Util = require('./Util');
import Client = require('./Client');
import Product = require('./Product');
import Model_Icon = require('./model/Model_Icon');
import Model_Server = require('./model/Model_Server');
import Model_Disk = require('./model/Model_Disk');
import Model_Appliance = require('./model/Model_Appliance');
import Model_Archive = require('./model/Model_Archive');
import Model_IsoImage = require('./model/Model_IsoImage');
import Model_Iface = require('./model/Model_Iface');
import Model_Swytch = require('./model/Model_Swytch');
import Model_Router = require('./model/Model_Router');
import Model_Ipv6Net = require('./model/Model_Ipv6Net');

/**
 * さくらのクラウドAPIクライアントを利用する際、最初にアクセスすべきルートとなるクラス。
 * 
 * @see API.authorize
 * @class API
 * @constructor
 */
class API {
	
	/**
	 * @private
	 * @member saclient.cloud.API#_client
	 * @type Client
	 * @protected
	 */
	_client : Client;
	
	/**
	 * @method get_client
	 * @protected
	 * @return {Client}
	 */
	get_client() : Client {
		return this._client;
	}
	
	/**
	 * @property client
	 * @type Client
	 * @readOnly
	 * @public
	 */
	get client() : Client { return this.get_client(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_product
	 * @type Product
	 * @protected
	 */
	_product : Product;
	
	/**
	 * @method get_product
	 * @protected
	 * @return {Product}
	 */
	get_product() : Product {
		return this._product;
	}
	
	/**
	 * @property product
	 * @type Product
	 * @readOnly
	 * @public
	 */
	get product() : Product { return this.get_product(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_icon
	 * @type Model_Icon
	 * @protected
	 */
	_icon : Model_Icon;
	
	/**
	 * @method get_icon
	 * @protected
	 * @return {Model_Icon}
	 */
	get_icon() : Model_Icon {
		return this._icon;
	}
	
	/**
	 * @property icon
	 * @type Model_Icon
	 * @readOnly
	 * @public
	 */
	get icon() : Model_Icon { return this.get_icon(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_server
	 * @type Model_Server
	 * @protected
	 */
	_server : Model_Server;
	
	/**
	 * @method get_server
	 * @protected
	 * @return {Model_Server}
	 */
	get_server() : Model_Server {
		return this._server;
	}
	
	/**
	 * @property server
	 * @type Model_Server
	 * @readOnly
	 * @public
	 */
	get server() : Model_Server { return this.get_server(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_disk
	 * @type Model_Disk
	 * @protected
	 */
	_disk : Model_Disk;
	
	/**
	 * @method get_disk
	 * @protected
	 * @return {Model_Disk}
	 */
	get_disk() : Model_Disk {
		return this._disk;
	}
	
	/**
	 * @property disk
	 * @type Model_Disk
	 * @readOnly
	 * @public
	 */
	get disk() : Model_Disk { return this.get_disk(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_appliance
	 * @type Model_Appliance
	 * @protected
	 */
	_appliance : Model_Appliance;
	
	/**
	 * @method get_appliance
	 * @protected
	 * @return {Model_Appliance}
	 */
	get_appliance() : Model_Appliance {
		return this._appliance;
	}
	
	/**
	 * @property appliance
	 * @type Model_Appliance
	 * @readOnly
	 * @public
	 */
	get appliance() : Model_Appliance { return this.get_appliance(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_archive
	 * @type Model_Archive
	 * @protected
	 */
	_archive : Model_Archive;
	
	/**
	 * @method get_archive
	 * @protected
	 * @return {Model_Archive}
	 */
	get_archive() : Model_Archive {
		return this._archive;
	}
	
	/**
	 * @property archive
	 * @type Model_Archive
	 * @readOnly
	 * @public
	 */
	get archive() : Model_Archive { return this.get_archive(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_isoImage
	 * @type Model_IsoImage
	 * @protected
	 */
	_isoImage : Model_IsoImage;
	
	/**
	 * @method get_isoImage
	 * @protected
	 * @return {Model_IsoImage}
	 */
	get_isoImage() : Model_IsoImage {
		return this._isoImage;
	}
	
	/**
	 * @property isoImage
	 * @type Model_IsoImage
	 * @readOnly
	 * @public
	 */
	get isoImage() : Model_IsoImage { return this.get_isoImage(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_iface
	 * @type Model_Iface
	 * @protected
	 */
	_iface : Model_Iface;
	
	/**
	 * @method get_iface
	 * @protected
	 * @return {Model_Iface}
	 */
	get_iface() : Model_Iface {
		return this._iface;
	}
	
	/**
	 * @property iface
	 * @type Model_Iface
	 * @readOnly
	 * @public
	 */
	get iface() : Model_Iface { return this.get_iface(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_swytch
	 * @type Model_Swytch
	 * @protected
	 */
	_swytch : Model_Swytch;
	
	/**
	 * @method get_swytch
	 * @protected
	 * @return {Model_Swytch}
	 */
	get_swytch() : Model_Swytch {
		return this._swytch;
	}
	
	/**
	 * @property swytch
	 * @type Model_Swytch
	 * @readOnly
	 * @public
	 */
	get swytch() : Model_Swytch { return this.get_swytch(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_router
	 * @type Model_Router
	 * @protected
	 */
	_router : Model_Router;
	
	/**
	 * @method get_router
	 * @protected
	 * @return {Model_Router}
	 */
	get_router() : Model_Router {
		return this._router;
	}
	
	/**
	 * @property router
	 * @type Model_Router
	 * @readOnly
	 * @public
	 */
	get router() : Model_Router { return this.get_router(); }
	
	
	/**
	 * @private
	 * @member saclient.cloud.API#_ipv6Net
	 * @type Model_Ipv6Net
	 * @protected
	 */
	_ipv6Net : Model_Ipv6Net;
	
	/**
	 * @method get_ipv6Net
	 * @protected
	 * @return {Model_Ipv6Net}
	 */
	get_ipv6Net() : Model_Ipv6Net {
		return this._ipv6Net;
	}
	
	/**
	 * @property ipv6Net
	 * @type Model_Ipv6Net
	 * @readOnly
	 * @public
	 */
	get ipv6Net() : Model_Ipv6Net { return this.get_ipv6Net(); }
	
	
	/**
	 * @constructor
	 * @protected
	 * @param {Client} client
	 */
	constructor(client:Client) {
		this._client = client;
		this._product = new Product(client);
		this._icon = new Model_Icon(client);
		this._server = new Model_Server(client);
		this._disk = new Model_Disk(client);
		this._appliance = new Model_Appliance(client);
		this._archive = new Model_Archive(client);
		this._isoImage = new Model_IsoImage(client);
		this._iface = new Model_Iface(client);
		this._swytch = new Model_Swytch(client);
		this._router = new Model_Router(client);
		this._ipv6Net = new Model_Ipv6Net(client);
	}
	
	/**
	 * 指定した認証情報を用いてアクセスを行うAPIクライアントを作成します。
	 * 必要な認証情報は、コントロールパネル右上にあるアカウントのプルダウンから
	 * 「設定」を選択し、「APIキー」のページにて作成できます。
	 * 
	 * @static
	 * @method authorize
	 * @chainable
	 * @public
	 * @param {string} token ACCESS TOKEN
	 * @param {string} secret ACCESS TOKEN SECRET
	 * @return {API} APIクライアント
	 */
	static authorize(token:string, secret:string) : API {
		var c:Client = new Client(token, secret);
		return new API(c);
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
		var ret = new API(this._client.cloneInstance());
		ret._client.setApiRoot("https://secure.sakura.ad.jp/cloud/");
		ret._client.setApiRootSuffix("zone/" + name);
		return ret;
	}
	
	/**
	 * @method sleep
	 * @public
	 * @param {number} sec
	 * @return {void}
	 */
	sleep(sec:number) : void {
		Util.sleep(sec);
	}
	
}

