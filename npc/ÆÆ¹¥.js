var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var head = "#fUI/UIWindow2.cmg/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.cmg/QuestAlarm/BtQ/normal/0#";
var chance = Math.floor(Math.random() * 9 + 1);
var startIcon = "#fUI/UIWindow2.cmg/Quest/quest_info/summary_icon/startcondition#\r\n";
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var 道具 = 4031179;
var 道具1 = 4031179;
var 道具2 = 4031179;
var 比例 = 100000;
var 比例1 = 500000;
var 比例2 = 1000000;
var I

function start() {
	if (cm.getPlayer().getLimitBreak() < 199999) {
		cm.getPlayer().setLimitBreak(199999);
		cm.dispose();
	} else {
		a = -1;
		action(1, 0, 0);
	}
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
			var text = "#e#r这里破功NPC！.\r\n\r\n";
			//text += "#d#L0#兑换中国心#v4000464##l\r\n\r\n"//3
			//text += " - 需要#v4001226#x1 + #v4001227#x1 + #v4001228#x1 + #v4001229#x1 + #v4001230#x1\r\n"//3
			//text += "#L1#兑换百万破功材料#v2614002##l\r\n\r\n"//3		
			//text += " - 需要#v4000464#x100 + #v4251202#x100 + #v3994731#x50\r\n"//3		
			text += "#L2#使用#v2614000#+2000点卷提高破功上限\r\n\r\n"//3
			text += "#L3#使用#v2614001#+20000点卷提高破功上限(10W)\r\n\r\n"//3
			//text += "#L4#使用#v2614002#+100W点卷提高破功上限(100W)\r\n\r\n"//3
			cm.sendSimple(text);

		} else if (a == 1) {
			if (selection == 0) {
				if (cm.haveItem(4001226, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.haveItem(4001227, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.haveItem(4001228, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.haveItem(4001229, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.haveItem(4001230, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.canHold(4000464, 1) == false) {
					cm.sendOk("背包空间不足");
					cm.dispose();
				} else {
					cm.gainItem(4001226, -1);
					cm.gainItem(4001227, -1);
					cm.gainItem(4001228, -1);
					cm.gainItem(4001229, -1);
					cm.gainItem(4001230, -1);
					cm.gainItem(4000464, 1);
					cm.sendOk("兑换成功。")
					cm.dispose();
				}

			} else if (selection == 1) {
				if (cm.haveItem(4000464, 30) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.haveItem(4251202, 40) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.haveItem(3994731, 40) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				/*} else if (cm.getPlayer().getMeso() < 200000000) {
					cm.sendOk("金币不足");
					cm.dispose();*/
				} else {
					cm.gainItem(4000464, -100);
					cm.gainItem(4251202, -100);
					cm.gainItem(3994731, -50);
					//cm.gainMeso(-200000000);
					cm.gainItem(2614002, 1);
					cm.sendOk("兑换成功。")
					cm.dispose();
				}

			} else if (selection == 2) {
				if (cm.haveItem(2614000, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.getPlayer().getCSPoints(1) < 2000) {
					cm.sendOk("点券不足 2000，无法进入。");
					cm.dispose();
				} else {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 10001);
					cm.gainItem(2614000, -1);
					cm.gainNX(-2000);
					cm.worldMessage(6, "【破功系统】：恭喜玩家 "+cm.getPlayer().getName()+" 破功至 "+cm.getPlayer().getLimitBreak()+"");
					cm.sendOk("增加破功上限成功。")
					cm.dispose();
				}
			} else if (selection == 3) {
				if (cm.haveItem(2614001, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.getPlayer().getCSPoints(1) < 20000) {
					cm.sendOk("点券不足 20000，无法进入。");
					cm.dispose();
				} else {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 100001);
					cm.gainItem(2614001, -1);
					cm.gainNX(-20000);
					cm.worldMessage(6, "【破功系统】：恭喜玩家 "+cm.getPlayer().getName()+" 破功至 "+cm.getPlayer().getLimitBreak()+"");
					cm.sendOk("增加破功上限成功。")
					cm.dispose();
				}
			} else if (selection == 4) {
				if (cm.haveItem(2614002, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.getPlayer().getCSPoints(1) < 1000000) {
					cm.sendOk("点券不足 200000，无法进入。");
					cm.dispose();
				} else {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 1000001);
					cm.gainItem(2614002, -1);
					cm.gainNX(-1000000);
					cm.worldMessage(6, "【破功系统】：恭喜玩家 "+cm.getPlayer().getName()+" 破功至 "+cm.getPlayer().getLimitBreak()+"");
					cm.sendOk("增加破功上限成功。")
					cm.dispose();
				}
			}
		}
	}
}