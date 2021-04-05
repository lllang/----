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
			var textz = "VIP每日可领取以下丰厚奖励：\r\n";
			textz += "#v4031179#*2，#v4001017#*1，#v1122017#*1，#v4310196#*3\r\n\r\n";
			textz += "冒险币5000W，点券5000，抵用券6000\r\n";
			textz += "#b领取每日福利时请将VIP勋章#v1142343#放入背包内，并确保背包其他栏有空格、\r\n\r\n";
			cm.sendYesNo(textz);

		} else if (status == 1) {
			if (cm.haveItem(1142343, 1) == false) {
				cm.sendOk("道具不足");
				cm.dispose();
			} else if (cm.getBossLog("VIP每日礼包") > 0) {
				cm.sendOk("每日仅能领取一次");
				cm.dispose();
			} else {
				cm.setBossLog("VIP每日礼包");
				cm.gainItem(4031179, 2);
				cm.gainItem(4001017, 1);
				cm.gainItem(4310196, 3);
				cm.gainItem(1122017, 1, 1);
				cm.gainNX(5000);
				cm.gainDY(6000);
				cm.gainMeso(50000000);
				cm.sendOk("领取成功");
				cm.dispose();
			}

		}

	}
}

