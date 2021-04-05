var QuestName = "隐藏任务 -- 通缉僵尸蘑菇";//任务ID
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
			var textz = "群活跃第一每日奖励：\r\n";
			textz += "#v2340000#*5，#v4001017#*5，#v1122017#*1，#v2040807#*1\r\n\r\n";
			textz += "冒险币1500W，点券10000，抵用券20000\r\n";
			textz += "#b领取每日活跃福利需要#v4031341#放入背包内，并确保背包其他栏有空格、\r\n\r\n";
			cm.sendYesNo(textz);

		} else if (status == 1) {
			if (cm.haveItem(4031341, 1) == false) {
				cm.sendOk("道具不足");
				cm.dispose();
			} else if (cm.getBossLog("VIP每日礼包") > 0) {
				cm.sendOk("每日仅能领取一次");
				cm.dispose();
			} else {
				cm.setBossLog("VIP每日礼包");
				cm.gainItem(4031341, -1);//奖励道具ID，数量
				cm.gainItem(2340000, 5);
				cm.gainItem(4001017, 5);
				cm.gainItem(2040807, 1);
				cm.gainItem(1122017, 1, 1);
				cm.gainNX(10000);
				cm.gainDY(20000);
				cm.gainMeso(15000000);
				cm.sendOk("领取成功");
				cm.dispose();
				cm.喇叭(2,"玩家：["+cm.getName()+"]获得今日群活跃奖励");
			}

		}

	}
}

