/// <reference path="src/node.d.ts" />

var saclient = require('./saclient.js');

var api = saclient.cloud.API.authorize(process.argv[2], process.argv[3]);

// // 停止中のサーバに接続されているディスクを一覧
// servers = api.server.with_instance_status("down").find
// for server in servers
//   next if server.tags.empty?
//   puts ""
//   printf "server [%s] %s at %s\n", server.id, server.instance.status, server.instance.status_changed_at.to_s
//   printf "    tags: %s\n", server.tags.join(', ')
//   //puts JSON.pretty_unparse(server.dump())
//   for iface in server.ifaces
//     printf "    iface [%s] %s %s\n", iface.id, iface.mac_address, iface.ip_address || iface.user_ip_address
//   end
//   disks = server.find_disks // same as: disks = api.disk.with_server_id(server.id).find
//   for disk in disks
//     printf "    disk [%s] %s\n", disk.id, disk.name
//   end
// end


// // 特定のタグを持つサーバの説明に現在時刻を追記
// servers = api.server.with_tag("abc").find
// for server in servers
//   printf "server [%s] %s\n", server.id, server.name
//   server.description += "\n" + Time.now.strftime("%Y/%m/%d %H:%M:%S")
//   server.save
//   printf "%s\n\n", server.description
// end


//icons = api.icon.with_name_like("cent").limit(1).find
//abort "icon not found" if icons.empty?
//icon = icons[0]
//printf "icon [%s] %s\n\n", icon.id, icon.name
//
//servers = api.server.with_name_like("cent").find
//for server in servers
//    printf "server [%s] %s\n", server.id, server.name
//    server.icon = nil
//    server.save
//    printf "  changed icon to nothing: %s\n", (server.icon.nil? ? "OK" : "NG")
//    server.icon = icon
//    server.save
//    printf "  changed icon to: [%s] %s\n\n", server.icon.id, server.icon.name
//end


var planFrom = api.product.server.getBySpec(2, 4);
console.log("plan from: [" + planFrom.id + "] " + planFrom.cpu + "core " + planFrom.memoryGib + "GB");
var planTo   = api.product.server.getBySpec(4, 8);
console.log("plan to:   [" +   planTo.id + "] " +   planTo.cpu + "core " +   planTo.memoryGib + "GB");
console.log("");

var servers = api.server.withPlan(planFrom).find();
servers.forEach((server)=>{
	console.log("server [" + server.id +"] " + server.plan.cpu + "core " + server.plan.memoryGib + "GB '" + server.name + "'");
	server.changePlan(planTo);
	console.log("    -> [" + server.id + "] " + server.plan.cpu + "core " + server.plan.memoryGib + "GB");
});

