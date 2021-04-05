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
			textz += "#v2614001#*8，#v4002001#*8，#v1122017#*1天，#v2049600#*10 #v2041332#*15 #v2613008#*10 #v2531000#*10";
			textz += "#v4170000#*60，#v2041213#*30，#v2041200#*1，点券300000，抵用券100000\r\n";
			textz += "#b领取砖石VIP福利时请将#v3700010#放入背包内，#r并确保背包其他栏有空格#k、\r\n\r\n";
			cm.sendYesNo(textz);

		} else if (status == 1) {
			if (cm.haveItem(3700010, 1) == false) {
				cm.sendOk("道具不足");
				cm.dispose();
			} else if (cm.getPlayer().getAccountLog("VIP每日礼包",0) > 0) {
				cm.sendOk("每日仅能领取一次");
				cm.dispose();
			} else {
				cm.getPlayer().setAccountLog("VIP每日礼包",0);
				cm.gainItem(2041200, 1);
				cm.gainItem(2614001, 8);
				cm.gainItem(2041213, 30);
				cm.gainItem(4002001, 8);
				cm.gainItem(2613008, 10);
				cm.gainItem(2049600, 10);
				cm.gainItem(2531000, 6);
				cm.gainItem(2041332, 15);
				cm.gainItem(4170000, 60);
				cm.gainItem(1122017, 1, 1);
				cm.gainNX(300000);
				cm.gainDY(100000);
				//cm.gainMeso(100000000);
				cm.sendOk("领取成功");
				cm.喇叭(1,"["+cm.getName()+"]玩家成功领取超凡VIP升级加强版奖励，获得大量奖励！");
				cm.dispose();
			}

		}

	}
}

