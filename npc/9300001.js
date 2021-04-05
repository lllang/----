

var sj;

var 增加装备次数道具 = 4000464;//五彩
var 增加装备次数道具数量 = 10;
var 增加装备次数道具数量1 = 100;
//道具代码：
var 强化道具 = 4032002;//五彩
var 强化道具数量 = 1;

var 全属性 = 3;
var 双攻 = 2;

var 装备最大升级次数 = 125;

var 强化几率 = 5;//强化几率*10%
var 随机值 = Math.floor(Math.random() * 10);
var status = 0;

function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("请将装备放置在装备栏 “#b第一格#k” 。");
		cm.dispose();
	} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
		cm.sendOk("现金装备无法参与强化。");
		cm.dispose();
	}else{
		status = -1;
		action(1, 0, 0);
	}
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;


		if (status == 0) {
			var textz = "#r这里可以升级装备次数125次强化50次装备可以使用：#k\r\n";

			//textz += "#L0#消耗 #b20000点券#k 为装备提升装备升级次数。\r\n\r\n";

			textz += "#L3#消耗 #b#v4310034##k*1 为装备提升装备升级1次数。\r\n\r\n";

			//textz += "#L4#消耗 #b#v4442001##k*1 兑换 #v4310034# X 500\r\n\r\n";

			//textz += "#L5#兑换 #b#v4251201##k*10 需要 #v4251200# X 100\r\n\r\n";

			cm.sendSimple(textz);


		} else if (status == 1) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			var 可升级次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();
			var 已升级次数 = cm.getInventory(1).getItem(1).getLevel();
			if (selection == 0) {
				var selStr = "当前强化装备：“#b#v" + ItemID + "##z" + ItemID + "##k”\r\n\r\n";
				selStr += "消耗 2W 点券\r\n\r\n";
				selStr += "可升级次数：" + (装备最大升级次数 - 可升级次数 - 已升级次数) + "\r\n\r\n";
				selStr += " 								#d#e是否确认强化？#k";
				cm.sendYesNo(selStr);
				sj = 1;

			} else if (selection == 1) {
				var selStr = "当前混沌装备：“#b#v" + ItemID + "##z" + ItemID + "##k”\r\n\r\n";
				selStr += "消耗#z2049124# x " + 强化道具数量 + "\r\n\r\n";
				selStr += "增加全属性： 1 ~ 15随机\r\n\r\n";
				selStr += "成功率：" + 强化几率 * 10 + " %\r\n\r\n";
				selStr += " 								#d#e是否确认强化？#k";
				cm.sendYesNo(selStr);
				sj = 2;

			} else if (selection == 2) {
				var selStr = "当前强化装备：“#b#v" + ItemID + "##z" + ItemID + "##k”\r\n\r\n";
				selStr += "消耗#z4031549#\r\n\r\n";
				selStr += "可升级次数：" + (装备最大升级次数 - 可升级次数 - 已升级次数) + "\r\n\r\n";
				selStr += " 								#d#e是否确认强化？#k";
				cm.sendYesNo(selStr);
				sj = 3;

			} else if (selection == 3) {
				var selStr = "当前强化装备：“#b#v" + ItemID + "##z" + ItemID + "##k”\r\n\r\n";
				selStr += "消耗#z4310034##v4310034##k1个\r\n\r\n";
				selStr += "可升级次数：" + (装备最大升级次数 - 可升级次数 - 已升级次数) + "\r\n\r\n";
				selStr += " 								#d#e是否确认强化？#k";
				cm.sendYesNo(selStr);
				sj = 4;

			} else if (selection == 6) {
				var selStr = "当前强化装备：“#b#v" + ItemID + "##z" + ItemID + "##k”\r\n\r\n";
				selStr += "消耗#z4001028#\r\n\r\n";
				selStr += " 								#d#e是否确认强化？#k";
				cm.sendYesNo(selStr);
				sj = 5;

			} else if (selection == 7) {
				var selStr = "当前强化装备：“#b#v" + ItemID + "##z" + ItemID + "##k”\r\n\r\n";
				selStr += "消耗#z4001028#\r\n\r\n";
				selStr += " 								#d#e是否确认强化？#k";
				cm.sendYesNo(selStr);
				sj = 6;

			} else if (selection == 4) {
				if (cm.haveItem(4442001,1) == false){
					cm.sendOk("所需道具不足，无法兑换。");
					cm.dispose();
				} else {
					cm.gainItem(4442001,-1);
					cm.gainItem(4310034,500);
					cm.sendOk("兑换成功。");
					cm.dispose();
				}

				}else if (selection == 5) {
					if (cm.haveItem(4251200,100) == false){
						cm.sendOk("所需道具不足，无法兑换。");
						cm.dispose();
					} else {
						cm.gainItem(4251200,-100);
						cm.gainItem(4251201,10);
						cm.sendOk("兑换成功。");
						cm.dispose();
					}


			}
		} else if (status == 2) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			var 可升级次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();
			var 已升级次数 = cm.getInventory(1).getItem(1).getLevel();
			if (sj == 1) {
				if (cm.getPlayer().getCSPoints(1) < 20000) {
					cm.sendOk("点券不足");
					cm.dispose();
				} else if ((装备最大升级次数 - 可升级次数 - 已升级次数) < 1) {
					cm.sendOk("当前装备无法升级。");
					cm.dispose();
				} else {
					var statup = new java.util.ArrayList();
					var item = cm.getInventory(1).getItem(1).copy();
					item.setUpgradeSlots(item.getUpgradeSlots() + 1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainNX(-20000);
					var selStr = "强化成功";
					cm.sendOk(selStr);
					cm.dispose();
				}

			} else if (sj == 2) {
				if (cm.haveItem(2049124, 强化道具数量) == false) {
					cm.sendOk("道具不足。");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getUpgradeSlots() == 0) {
					cm.sendOk("升级次数不足，无法进行混沌。");
					cm.dispose();
				} else {
					if (随机值 < 强化几率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + Math.floor(Math.random() * 14 + 1));
						item.setInt(item.getInt() + Math.floor(Math.random() * 14 + 1));
						item.setLuk(item.getLuk() + Math.floor(Math.random() * 14 + 1));
						item.setDex(item.getDex() + Math.floor(Math.random() * 14 + 1));
						item.setWatk(item.getWatk() + Math.floor(Math.random() * 14 + 1));
						item.setMatk(item.getMatk() + Math.floor(Math.random() * 14 + 1));
						item.setUpgradeSlots(item.getUpgradeSlots() - 1);
						item.setLevel(item.getLevel() + 1);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049124, -强化道具数量);
						var selStr = "强化成功";
						cm.sendOk(selStr);
						cm.dispose();
					} else {
						cm.gainItem(2049124, -强化道具数量);
						var selStr = "强化失败";
						cm.sendOk(selStr);
						cm.dispose();
					}
				}
				} else if (sj == 3) {
						if (cm.haveItem(4310034, 1) == false) {
							cm.sendOk("道具不足。");
							cm.dispose();
						} else if ((装备最大升级次数 - 可升级次数 - 已升级次数) < 1) {
							cm.sendOk("当前装备无法升级。");
							cm.dispose();
						} else {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setUpgradeSlots(item.getUpgradeSlots() + 10);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4310034, -1);
							var selStr = "强化成功";
							cm.sendOk(selStr);
							cm.dispose();
						}

					} else if (sj == 4) {
						if (cm.haveItem(4310034, 1) == false) {
							cm.sendOk("道具不足。");
							cm.dispose();
						} else if ((装备最大升级次数 - 可升级次数 - 已升级次数) < 1) {
							cm.sendOk("当前装备无法升级。");
							cm.dispose();
						} else {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setUpgradeSlots(item.getUpgradeSlots() + 1);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4310034, -1);
							var selStr = "强化成功";
							cm.sendOk(selStr);
							cm.dispose();
						}

					} else if (sj == 5) {
						if (cm.haveItem(4001028, 1) == false) {
							cm.sendOk("道具不足。");
							cm.dispose();
						} else {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setHp(item.getHp() + 200);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4001028, -1);
							var selStr = "强化成功";
							cm.sendOk(selStr);
							cm.dispose();
						}

					} else if (sj == 6) {
						if (cm.haveItem(4001028, 1) == false) {
							cm.sendOk("道具不足。");
							cm.dispose();
						} else {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setWdef(item.getWdef() + 20);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4001028, -1);
							var selStr = "强化成功";
							cm.sendOk(selStr);
							cm.dispose();
						}



				}
			}
		}
	}




