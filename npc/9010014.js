var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 几率 = Math.floor(Math.random() * 99);
var C = Math.floor(Math.random() * 1+2);
var B = Math.floor(Math.random() * 2+3);
var A = Math.floor(Math.random() * 3+4);
var S = Math.floor(Math.random() * 4+5);
var SS = Math.floor(Math.random() * 5+6);
var SSS = Math.floor(Math.random() * 6+7);
var SSSS = Math.floor(Math.random() * 7+8);
var SSSSS = Math.floor(Math.random() * 8+9);
var SSSSSS = Math.floor(Math.random() * 9+10);
function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
		if (a == -1) {
			cm.dispose();
		} else if (a == 0) {
			text = "#b#e星级鉴定最高为10星#k\r\n";
			text += "消耗 #v4001126##z4001126#*200\r\n\r\n";
			text += "消耗 #v2049323##z2049323#*1\r\n\r\n";
			text += "消耗 游戏币1000W（单次）\r\n\r\n";
			text += "100%鉴定#b☆#k        [#r四维加1 双攻加1#k] \r\n";
			text += "90% 鉴定#b☆☆#k      [#r四维加1-2 双攻加1-2#k] \r\n";
			text += "80% 鉴定#b☆☆☆#k    [#r四维加2-3 双攻加2-3#k] \r\n";
			text += "70% 鉴定#b☆☆☆☆#k  [#r四维加3-4 双攻加3-4#k] \r\n";
			text += "60% 鉴定#b☆☆☆☆☆#k[#r四维加4-5 双攻加4-5#k] \r\n";
			text += "50% 鉴定#b★☆☆☆☆#k[#r四维加5-6 双攻加5-6#k] \r\n";
			text += "40% 鉴定#b★★☆☆☆#k[#r四维加6-7 双攻加6-7#k] \r\n";
			text += "30%  鉴定#b★★★☆☆#k[#r四维加7-8 双攻加7-8#k] \r\n";
			text += "20%  鉴定#b★★★★☆#k[#r四维加8-9 双攻加8-9#k] \r\n";
			text += "10%  鉴定#b★★★★★#k[#r四维加9-10 双攻加9-10#k] \r\n";
			text += "#L0##d进行星级鉴定(#r请将装备放到背包第一格，不支持点装#d)#l\r\n";
			//text += "#L1##n#r兑换#v2049323#需要#v4000464#x1 + #v4251202#x2 + 冒险币X2亿#l\r\n";

			cm.sendSimple(text);
		} else if (a == 1) {
			if (selection == 0) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将鉴定的装备放置第一格~");
					cm.dispose();
				} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
		            cm.sendOk("现金装备无法参与强化。");
		            cm.dispose();
	            }else if (cm.haveItem(2049323, 1) == false) {
					cm.sendOk("强化卷不足。");
					cm.dispose();
				}else if (cm.haveItem(4001126, 200) == false) {
					cm.sendOk("枫叶不足。");
					cm.dispose();
				}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "") {
					if (几率 < 100) {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 1);
					item.setInt(item.getInt() + 1);
					item.setLuk(item.getLuk() + 1);
					item.setDex(item.getDex() + 1);
					item.setWatk(item.getWatk() + 1);
					item.setMatk(item.getMatk() + 1);
					item.setOwner("☆");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("鉴定成功，当前装备星级为 “#r☆#k”。");
					cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】鉴定成功。当前装备星级为 ☆");
					cm.dispose();
					} else {
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("鉴定失败");
					cm.dispose();
				}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "☆") {
					if (几率 < 60) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + C);
					item.setInt(item.getInt() + C);
					item.setLuk(item.getLuk() + C);
					item.setDex(item.getDex() + C);
					item.setWatk(item.getWatk() + C);
					item.setMatk(item.getMatk() + C);
					item.setOwner("☆☆");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("鉴定成功，当前装备星级为 “#r☆☆#k”。");
					cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】鉴定成功。当前装备星级为 ☆☆");
					cm.dispose();
				} else {
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("鉴定失败");
					cm.dispose();
				}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "☆☆") {
					if (几率 < 50) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + B);
					item.setInt(item.getInt() + B);
					item.setLuk(item.getLuk() + B);
					item.setDex(item.getDex() + B);
					item.setWatk(item.getWatk() + B);
					item.setMatk(item.getMatk() + B);
					item.setOwner("☆☆☆");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("鉴定成功，当前装备星级为 “#r☆☆☆#k”。");
					cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】鉴定成功。当前装备星级为 ☆☆☆");
					cm.dispose();
				} else {
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("鉴定失败");
					cm.dispose();
				}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "☆☆☆") {
					if (几率 < 40) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + A);
					item.setInt(item.getInt() + A);
					item.setLuk(item.getLuk() + A);
					item.setDex(item.getDex() + A);
					item.setWatk(item.getWatk() + A);
					item.setMatk(item.getMatk() + A);
					item.setOwner("☆☆☆☆");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("鉴定成功，当前装备星级为 “#r☆☆☆☆#k”。");
					cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】鉴定成功。当前装备星级为 ☆☆☆☆");
					cm.dispose();
				} else {
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("鉴定失败");
					cm.dispose();
				}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "☆☆☆☆") {
					if (几率 < 30 ) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + S);
						item.setInt(item.getInt() + S);
						item.setLuk(item.getLuk() + S);
						item.setDex(item.getDex() + S);
						item.setWatk(item.getWatk() + S);
						item.setMatk(item.getMatk() + S);
						item.setOwner("☆☆☆☆☆");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定成功，当前装备星级为 “#r☆☆☆☆☆#k”。");
						cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】鉴定成功。当前装备星级为 ☆☆☆☆☆");
					    cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定失败");
						cm.dispose();
					}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "☆☆☆☆☆") {
					if (几率 < 20) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SS);
						item.setInt(item.getInt() + SS);
						item.setLuk(item.getLuk() + SS);
						item.setDex(item.getDex() + SS);
						item.setWatk(item.getWatk() + SS);
						item.setMatk(item.getMatk() + SS);
						item.setOwner("★☆☆☆☆");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定成功，当前装备星级为 “#r★☆☆☆☆#k”。");
						cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】鉴定成功。当前装备星级为 ★☆☆☆☆");
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定失败");
						cm.dispose();
					}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "★☆☆☆☆") {
					if (几率 < 10) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSS);
						item.setInt(item.getInt() + SSS);
						item.setLuk(item.getLuk() + SSS);
						item.setDex(item.getDex() + SSS);
						item.setWatk(item.getWatk() + SSS);
						item.setMatk(item.getMatk() + SSS);
						item.setOwner("★★☆☆☆");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定成功，当前装备星级为 “#r★★☆☆☆#k”。");
					cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用强化卷居然鉴定出了7 [ ★★☆☆☆ ] 级别的装备,鸿运当头.可喜可贺", 5121010);
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定失败");
						cm.dispose();
					}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "★★☆☆☆") {
					if (几率 < 8) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSSS);
						item.setInt(item.getInt() + SSSS);
						item.setLuk(item.getLuk() + SSSS);
						item.setDex(item.getDex() + SSSS);
						item.setWatk(item.getWatk() + SSSS);
						item.setMatk(item.getMatk() + SSSS);
						item.setOwner("★★★☆☆");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定成功，当前装备星级为 “#r★★★☆☆#k”。");
					cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用强化卷居然鉴定出了8 [ ★★★☆☆ ] 级别的装备,鸿运当头.可喜可贺", 5121007);
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定失败");
						cm.dispose();
					}
				}else if (cm.getInventory(1).getItem(1).getOwner() == "★★★☆☆") {
					if (几率 < 6) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSSSS);
						item.setInt(item.getInt() + SSSSS);
						item.setLuk(item.getLuk() + SSSSS);
						item.setDex(item.getDex() + SSSSS);
						item.setWatk(item.getWatk() + SSSSS);
						item.setMatk(item.getMatk() + SSSSS);
						item.setOwner("★★★★☆");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定成功，当前装备星级为 “#r★★★★☆#k”。");
					cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用强化卷居然鉴定出了9 [ ★★★★☆ ] 级别的装备,鸿运当头.可喜可贺", 5121002);
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定失败");
						cm.dispose();
					}
				}  else if (cm.getInventory(1).getItem(1).getOwner() == "★★★★☆") {
					if (几率 < 5) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSSSSS);
						item.setInt(item.getInt() + SSSSSS);
						item.setLuk(item.getLuk() + SSSSSS);
						item.setDex(item.getDex() + SSSSSS);
						item.setWatk(item.getWatk() + SSSSSS);
						item.setMatk(item.getMatk() + SSSSSS);
						item.setOwner("★★★★★");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定成功，当前装备星级为 “#r★★★★★#k”。");
					cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用强化卷居然鉴定出了10 [ ★★★★★ ] 级别的装备,鸿运当头.可喜可贺", 5121000);
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("鉴定失败");
						cm.dispose();
					}
				} else {
					cm.sendOk("当前装备无法参与强化。");
					cm.dispose();
				}
			} else if (selection == 1) {
				if (cm.haveItem(4000464, 1) == false) {
					cm.sendOk("道具不足。");
					cm.dispose();
				} else if (cm.haveItem(4251202, 1) == false) {
					cm.sendOk("道具不足。");
					cm.dispose();
				} else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.canHold(2049323, 2) == false) {
					cm.sendOk("背包空间不足。");
					cm.dispose();
				} else {
					cm.gainItem(4000464, -1);
					cm.gainItem(4251202, -2);
					cm.gainMeso(-200000000);
					cm.gainItem(2049323, 1);
					cm.sendOk("兑换成功");
					cm.dispose();
				}
			} else if (selection == 2) {
				if (cm.haveItem(2049323, 2) == false) {
					cm.sendOk("道具不足。");
					cm.dispose();
				} else if (cm.canHold(2460006, 1) == false) {
					cm.sendOk("背包空间不足。");
					cm.dispose();
				} else {
					cm.gainItem(2049323, -2);
					cm.gainItem(2460006, 1);
					cm.sendOk("兑换成功");
					cm.dispose();
				}
			}
		}
	}
}