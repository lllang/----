var QuestName = "每日任务 -- BOSS门票";//任务ID
var Meso = 100000;//奖励金币
var Exp = 5000;//奖励经验
var ItemID = 2590000;//奖励道具ID
var QuestItemID = 2590000;//任务所需道具ID
var QuestItemNum = 10;//任务所需道具数量

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
			var textz = "            " + QuestName + "\r\n";

			textz += " - 任务所需道具：#v4310143#BOSS币\r\n\r\n";

			textz += " - 道具所需数量：需要66个\r\n\r\n";

			textz += " - #r请注意背包是否有空位#k\r\n\r\n";

			textz += " - 任务奖励道具：#v2590000#初级#v2640011#中级#v2613001#高级门票各1张\r\n\r\n";

			textz += " - 任务奖励点卷：" + Exp + "\r\n\r\n";

			cm.sendYesNo(textz);


		} else if (status == 1) {
			if (cm.haveItem(4310143, 66) == false) {
				cm.sendOk("道具不足");
				cm.dispose();
			} else if (cm.getBossLog("每日任务") > 0) {
				cm.sendOk("今日以完成");
				cm.dispose();
			} else {
				cm.gainItem(2590000,1);
				cm.gainItem(2640011,1);
				cm.gainItem(2613001,1);
				
				cm.gainItem(4310143, -66);//奖励道具ID，数量
				cm.gainNX(5000);
				//cm.gainMeso(200000000);
				cm.setBossLog("每日任务")
				cm.sendOk("领取成功");
				cm.dispose();
			}

		}

	}
}

