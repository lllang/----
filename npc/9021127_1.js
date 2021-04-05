var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 大心 = "#fEffect/CharacterEff/1051295/0/0#";
var 琴符 = "#fEffect/CharacterEff/1003252/0/0#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon2/7#";
var 美化ne = "#fUI/UIWindow/Quest/icon6/7#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";

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

var 强化几率1 = 80;//强化几率*10%
var 强化几率2 = 70;//强化几率*10%
var 随机值 = Math.floor(Math.random() * 100);
var status = 0;

function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("请将装备放置在装备栏 “#b第一格#k” 。");
		cm.dispose();
	}else if (cm.getInventory(1).getItem(1).getItemId() == 1122017) {
		cm.sendOk("精灵吊坠无法强化#k” 。");
		cm.dispose();
	}else if (cm.getInventory(1).getItem(1).getItemId() == 1112907) {
		cm.sendOk("想什么呢，新手戒指可能被你锁住嘛？换个别的装备吧！#k” ");
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
		var textz = "\r\n";
			textz += "#e                 "+爱心+"#r次数升级#k"+爱心+"  #n\r\n"   
		
            textz += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
			textz += "#L0#消耗#b10000点券#r（成功率80%）#k为第一格装备升一次次数。\r\n\r\n\r\n";
			textz += "#L1#消耗#b#z4251202##r（成功率70%）#k为第一格装备升一次次数\r\n\r\n\r\n";
            textz += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		
			cm.sendSimple(textz);


		} else if (status == 1) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			var 可升级次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();
			var 已升级次数 = cm.getInventory(1).getItem(1).getLevel();
			if (selection == 0) {
				var selStr = "当前强化装备：“#b#v" + ItemID + "##z" + ItemID + "##k”\r\n\r\n";
				selStr += "消耗 1万 点券\r\n\r\n";
				selStr += "可升级次数：" + (装备最大升级次数 - 可升级次数 - 已升级次数) + "\r\n\r\n";
				selStr += " 			#d#e成功装备将会上锁，是否确认强化？#k";
				cm.sendYesNo(selStr);
				sj = 1;

			} else if (selection == 1) {
				var selStr = "当前强化装备：“#b#v" + ItemID + "##z" + ItemID + "##k”\r\n\r\n";
				selStr += "消耗#z4251202#\r\n\r\n";
				selStr += "可升级次数：" + (装备最大升级次数 - 可升级次数 - 已升级次数) + "\r\n\r\n";
				selStr += " 			#d#e成功装备将会上锁，是否确认强化？#k";
				cm.sendYesNo(selStr);
				sj = 2;

			}  
		} else if (status == 2) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			var 可升级次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();
			var 已升级次数 = cm.getInventory(1).getItem(1).getLevel();
			if (sj == 1) {
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					cm.sendOk("点券不足");
					cm.dispose();
				} else if ((装备最大升级次数 - 可升级次数 - 已升级次数) < 1) {
					cm.sendOk("当前装备无法升级。");
					cm.dispose();
				} else {
					if (随机值 < 强化几率1) {
					var statup = new java.util.ArrayList();
					var item = cm.getInventory(1).getItem(1).copy();
					item.setUpgradeSlots(item.getUpgradeSlots() + 1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainNX(-10000);
					item.setLocked(1)
					var selStr = "强化成功";
					item.setLocked(1)
					cm.刷新状态();
					cm.sendOk(selStr);
					cm.dispose();
				} else {
						cm.gainNX(-10000);
						var selStr = "强化失败，扣除1万点券，强化次数不变";
						cm.sendOk(selStr);
						cm.dispose();
					}
            }
			}   else if (sj == 2) {
						if (cm.haveItem(4251202, 1) == false) {
							cm.sendOk("道具不足。");
							cm.dispose();
						} else if ((装备最大升级次数 - 可升级次数 - 已升级次数) < 1) {
							cm.sendOk("当前装备无法升级。");
							cm.dispose();
						} else {
							if (随机值 < 强化几率2) {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setUpgradeSlots(item.getUpgradeSlots() + 1);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4251202, -1);
							var selStr = "强化成功";
							item.setLocked(1)
							cm.刷新状态();
							cm.sendOk(selStr);
							cm.dispose();
						}else {
						cm.gainItem(4251202, -1);
						var selStr = "强化失败，扣除1个#v4251202#，强化次数不变";
						cm.sendOk(selStr);
						cm.dispose();
					}
                }

				}  
			}
		}
	}




