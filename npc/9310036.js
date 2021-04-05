var a = 0;
var text;
var nice = false;
var selects; //记录玩家的选项
var buynum = 0;
var 几率 = Math.floor(Math.random() * 99);
var tz2 = "#fEffect/CharacterEff/1082565/2/0#"; //蓝兔子
var useItem = 2615032;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getInventory(1).getItem(1) == null) {
            cm.sendOk("请将需要强化的装备放置第一格~");
            cm.dispose();
        } else {
            var selStr = "#b" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "" + tz2 + "\r\n";    
			//selStr += "请选择卷轴#v2615032# #v2532001# #v2530000# #v2533000# #v2613008#\r\n"
			//selStr += "消耗一种卷轴#v2615032# #v2532001# #v2530000# #v2533000# #v2613008#全属性+5\r\n";
			//selStr += "每次强化消耗#v2140002#1000W游戏币\r\n";
			selStr += "当前强化装备：#b#v" + cm.getInventory(1).getItem(1).getItemId() + "##k\r\n";
            selStr += "#r#L0##b#e消耗#v"+useItem+"#x1 - 全属性+5 - 成功率：1%#l\r\n";
            selStr += "#r#L1##b#e消耗#v"+2532001+"#x1 - 全属性+5 - 成功率：10%#l\r\n";
            selStr += "#r#L2##b#e消耗#v"+2530000+"#x1 - 全属性+5 - 成功率：30%#l\r\n";
            selStr += "#r#L3##b#e消耗#v"+2533000+"#x1 - 全属性+5 - 成功率：70%#l\r\n";
            selStr += "#r#L4##b#e消耗#v"+2613008+"#x1 - 全属性+5 - 成功率：95%#l\r\n";
            cm.sendSimple(selStr);
        }
    } else if (status == 1) {
		var item = cm.getInventory(1).getItem(1).copy();
		if (item.getUpgradeSlots() == 0){
			cm.sendOk("道具没有升级次数，无法强化");
			cm.dispose();
			return;
		}
        if (selection == 0) {
            var itemIDxx = cm.getInventory(1).getItem(1).getItemId();
            if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置第一格~");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置在物品栏第一格。");
                cm.dispose();
            } else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 属于#r点装类#k，无法放入。");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 为#r限时#k装备，无法放入。");
                cm.dispose();
            } else if (cm.haveItem(useItem, 1) == false) {
                cm.sendOk("#v"+useItem+"#道具数量不足，请确认后再来。");
                cm.dispose();
			}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
            } else if (cm.getInventory(1).getItem(1) != null) {
                if (几率 < 1) {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 5);
                    item.setInt(item.getInt() + 5);
                    item.setLuk(item.getLuk() + 5);
                    item.setDex(item.getDex() + 5);
                    item.setWatk(item.getWatk() + 5);
                    item.setMatk(item.getMatk() + 5);
                    item.setLocked(1);
					item.setLevel(item.getLevel() + 1);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(useItem, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("强化成功，当前装备强化完毕。");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]使用黑铁强化卷，成功让装备全属性+5。恭喜他！");
                    cm.dispose();
                } else {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() - 0);
                    item.setInt(item.getInt() - 0);
                    item.setLuk(item.getLuk() - 0);
                    item.setDex(item.getDex() - 0);
                    item.setWatk(item.getWatk() - 0);
                    item.setMatk(item.getMatk() - 0);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(useItem, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("很可惜，装备强化失败.");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]使用黑铁强化卷，强化失败。不要气垒，下次也不一定能成功！");
                    cm.dispose();
                }
            }
        } else if (selection == 1) {
			var itemIDxx = cm.getInventory(1).getItem(1).getItemId();
            if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置第一格~");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置在物品栏第一格。");
                cm.dispose();
            } else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 属于#r点装类#k，无法放入。");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 为#r限时#k装备，无法放入。");
                cm.dispose();
            } else if (cm.haveItem(2532001, 1) == false) {
                cm.sendOk("#v"+2532001+"#道具数量不足，请确认后再来。");
                cm.dispose();
			}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
            } else if (cm.getInventory(1).getItem(1) != null) {
                if (几率 < 10) {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 5);
                    item.setInt(item.getInt() + 5);
                    item.setLuk(item.getLuk() + 5);
                    item.setDex(item.getDex() + 5);
                    item.setWatk(item.getWatk() + 5);
                    item.setMatk(item.getMatk() + 5);
                    item.setLocked(1);
					item.setLevel(item.getLevel() + 1);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(2532001, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("强化成功，当前装备强化完毕。");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]使用海蓝强化卷，成功使装备全属性+5。恭喜他！");
                    cm.dispose();
                } else {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() - 0);
                    item.setInt(item.getInt() - 0);
                    item.setLuk(item.getLuk() - 0);
                    item.setDex(item.getDex() - 0);
                    item.setWatk(item.getWatk() - 0);
                    item.setMatk(item.getMatk() - 0);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(2532001, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("很可惜，装备强化失败.");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]使用海蓝强化卷，强化失败。不要气垒，下次也不一定能成功！！");
                    cm.dispose();
                }
            }
		} else if (selection == 2) {
			var itemIDxx = cm.getInventory(1).getItem(1).getItemId();
            if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置第一格~");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置在物品栏第一格。");
                cm.dispose();
            } else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 属于#r点装类#k，无法放入。");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 为#r限时#k装备，无法放入。");
                cm.dispose();
            }else if (cm.haveItem(2530000, 1) == false) {
					cm.sendOk("附魔石不足。");
					cm.dispose();
			}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
            } else if (cm.getInventory(1).getItem(1) != null) {
                if (几率 < 30) {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 5);
                    item.setInt(item.getInt() + 5);
                    item.setLuk(item.getLuk() + 5);
                    item.setDex(item.getDex() + 5);
                    item.setWatk(item.getWatk() + 5);
                    item.setMatk(item.getMatk() + 5);
                    item.setLocked(1);
					item.setLevel(item.getLevel() + 1);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(2530000, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("强化成功，当前装备强化完毕。");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]使用萃取强化卷，成功让装备全属性+5。恭喜他！");
                    cm.dispose();
                } else {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() - 0);
                    item.setInt(item.getInt() - 0);
                    item.setLuk(item.getLuk() - 0);
                    item.setDex(item.getDex() - 0);
                    item.setWatk(item.getWatk() - 0);
                    item.setMatk(item.getMatk() - 0);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(2530000, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("很可惜，装备强化失败.");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]使用萃取强化卷，强化失败。不要气垒，下次也不一定能成功！！");
                    cm.dispose();
                }
            }
		} else if (selection == 3) {
			var itemIDxx = cm.getInventory(1).getItem(1).getItemId();
            if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置第一格~");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置在物品栏第一格。");
                cm.dispose();
            } else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 属于#r点装类#k，无法放入。");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 为#r限时#k装备，无法放入。");
                cm.dispose();
            }else if (cm.haveItem(2533000, 1) == false) {
					cm.sendOk("附魔石不足。");
					cm.dispose();
			}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
            } else if (cm.getInventory(1).getItem(1) != null) {
                if (几率 < 65) {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 5);
                    item.setInt(item.getInt() + 5);
                    item.setLuk(item.getLuk() + 5);
                    item.setDex(item.getDex() + 5);
                    item.setWatk(item.getWatk() + 5);
                    item.setMatk(item.getMatk() + 5);
                    item.setLocked(1);
					item.setLevel(item.getLevel() + 1);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(2533000, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("强化成功，当前装备强化完毕。");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]使用翡翠强化卷，成功让装备全属性+5。恭喜他！");
                    cm.dispose();
                } else {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() - 0);
                    item.setInt(item.getInt() - 0);
                    item.setLuk(item.getLuk() - 0);
                    item.setDex(item.getDex() - 0);
                    item.setWatk(item.getWatk() - 0);
                    item.setMatk(item.getMatk() - 0);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(2533000, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("很可惜，装备强化失败.");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]使用翡翠强化卷，强化失败。百分之70也能失败算个人才！");
                    cm.dispose();
                }
            }
		} else if (selection == 4) {
			var itemIDxx = cm.getInventory(1).getItem(1).getItemId();
            if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置第一格~");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置在物品栏第一格。");
                cm.dispose();
            } else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 属于#r点装类#k，无法放入。");
                cm.dispose();
            } else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
                cm.sendOk("当前装备 #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k 为#r限时#k装备，无法放入。");
                cm.dispose();
            }else if (cm.haveItem(2613008, 1) == false) {
					cm.sendOk("圣杯不足。");
					cm.dispose();
			}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");					
            } else if (cm.getInventory(1).getItem(1) != null) {
                if (几率 < 90) {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 5);
                    item.setInt(item.getInt() + 5);
                    item.setLuk(item.getLuk() + 5);
                    item.setDex(item.getDex() + 5);
                    item.setWatk(item.getWatk() + 5);
                    item.setMatk(item.getMatk() + 5);
                    item.setLocked(1);
					item.setLevel(item.getLevel() + 1);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(2613008, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("强化成功，当前装备强化完毕。");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]使用紫钻强化卷，成功让装备全属性+5。恭喜他！");
                    cm.dispose();
                } else {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() - 0);
                    item.setInt(item.getInt() - 0);
                    item.setLuk(item.getLuk() - 0);
                    item.setDex(item.getDex() - 0);
                    item.setWatk(item.getWatk() - 0);
                    item.setMatk(item.getMatk() - 0);
					item.setUpgradeSlots(item.getUpgradeSlots() - 1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainItem(2613008, -1);
					cm.gainMeso(-10000000);
                    cm.sendOk("很可惜，装备强化失败.");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]紫钻强化卷你都能强化失败，你也是个人才！");
                    cm.dispose();
                }
            }
		}
    }
}


