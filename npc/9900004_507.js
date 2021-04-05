var QuestName = "『 #r每 日 副 本 奖 励#k 』";//任务ID
var Meso = 100000;//奖励金币
var Exp = 10000;//奖励经验
var ItemID = 3991029;//奖励道具ID
var QuestItemID = 4000008;//任务所需道具ID
var QuestItemNum = 100;//任务所需道具数量

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
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
			var textz = "              #e欢迎来到冒险岛#k\r\n\r\n";

			textz += "#L0#兑换#v1022097#（#r全属性+30#k）需要#v4170005#*50\r\n";

			textz += "#L1#兑换#v1032227#（#r全属性+30#k）需要#v4170004#*50\r\n";

			textz += "#L2#兑换#v1003267#（#r全属性+50#k）需要#v4310028#*60\r\n";

			//textz += "#L3#兑换#v4031039#*1 需要#v4170002#*5 #v4170005#*5\r\n";

			//textz += "#L4#兑换#v4031456#*1 需要#v4170002#*10 #v4170005#*10\r\n";

			//textz += "#L5#兑换#v4032485#*1 需要#v4170002#*50 #v4170005#*50\r\n";

			//textz += "#L6#兑换#v4310028#*1 需要#v4170002#*2 #v4170005#*2 #v4170004#*1\r\n";

			cm.sendNext(textz);

		} else if (status == 1) {
			if (selection == 0) {
				if (cm.haveItem(4170005, 50) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else {
					cm.gainItem(4170005, -50);
					cm.gainItem(1022097, 30, 30, 30, 30, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0);
					cm.sendNext("兑换成功。");
					cm.dispose();
				}

			} else if (selection == 1) {
				if (cm.haveItem(4170004, 50) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else {
					cm.gainItem(4170004, -50);
					cm.gainItem(1032227, 30, 30, 30, 30, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0);
					cm.sendNext("兑换成功。");
					cm.dispose();
				}

			} else if (selection == 2) {
				if (cm.haveItem(4310028, 60) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else {
					cm.gainItem(4310028, -60);
					cm.gainItem(1003267, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
					cm.sendNext("兑换成功。");
					cm.dispose();
				}
			} else if (selection == 3) {
				if (cm.haveItem(4170002, 5) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else if (cm.haveItem(4170005, 5) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else {
					cm.gainItem(4170002, -5);
					cm.gainItem(4170005, -5);
					cm.gainItem(4031039, 1);
					cm.sendNext("兑换成功。");
					cm.dispose();
				}
			} else if (selection == 4) {
				if (cm.haveItem(4170002, 10) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else if (cm.haveItem(4170005, 10) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else {
					cm.gainItem(4170002, -10);
					cm.gainItem(4170005, -10);
					cm.gainItem(4031456, 1);
					cm.sendNext("兑换成功。");
					cm.dispose();
				}
			} else if (selection == 4) {
				if (cm.haveItem(4170002, 50) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else if (cm.haveItem(4170005, 50) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else {
					cm.gainItem(4170002, -50);
					cm.gainItem(4170005, -50);
					cm.gainItem(4032485, 1);
					cm.sendNext("兑换成功。");
					cm.dispose();
				}
			} else if (selection == 5) {
				if (cm.haveItem(4170002, 2) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else if (cm.haveItem(4170005, 2) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else if (cm.haveItem(4170004, 1) == false) {
					cm.sendOk("所需道具不足");
					cm.dispose();
				} else {
					cm.gainItem(4170002, -2);
					cm.gainItem(4170005, -2);
					cm.gainItem(4170004, -1);
					cm.gainItem(4310028, 1);
					cm.sendNext("兑换成功。");
					cm.dispose();
				}
			}
		}
	}
}
