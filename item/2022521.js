var QuestName = "『 #r升 级 月 卡#k 』";//任务ID
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
		im.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			im.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;

		if (status == 0) {
			var textz = "              #e" + QuestName + "#n#k\r\n\r\n";

			//textz += "  #b以下专门为萌新制作的新手大礼包~：#k\r\n\r\n";

			textz += " - 装备道具奖励：\r\n\r\n";

			textz += "  #v3700010#*1（30天） \r\n\r\n";
			
			

			//textz += "游戏币2000W  抵用卷6W8  #v2000005#*100    \r\n\r\n";


			im.sendNext(textz);

		} else if (status == 1) {
			//im.gainItem(2000005,100);
			//im.gainItem(2370004,10);
			// im.gainItem(1072791,1);
			//im.gainItem(5000012,1);
			//im.gainItem(5190001,1);
			//im.gainItem(5190002,1);
			//im.gainItem(5190003,1);
			//im.gainItem(5190006,1);
			// im.gainItem(1012501,1);
			// im.gainItem(5590001,1);
			// im.gainItem(1003802,1);
			// im.gainItem(1052865,1);
			// im.gainItem(2330000,5000);
			im.gainItem(3700010,1,30);
			//im.gainItem(5360016,1,1);
			// im.gainItem(1082511,1);
			
			//im.gainItem(3603300,1);
			//im.gainItem(1112446,1);
			//im.gainItem(1142796, 10, 10, 10, 10, 200, 200, 10, 10, 5, 5, 5, 5, 5, 0);
			//im.gainItem(1112907, 30, 30, 30, 30, 10000, 10000, 30, 30, 20, 20, 20, 20, 20, 0,100);
			//im.gainMeso(20000000);
			//im.gainDY(68888);
			//im.gainNX(0);
			im.gainItem(2022521, -1);
			im.sendOk("礼包发放完毕，请查收。");
			//gm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】领取了彩虹新手礼包。");
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,im.getC().getChannel(),"【萌新驾到】" + " : 欢迎萌新 “" + im.getPlayer().getName() +"” 来到彩虹冒险岛，大家欢迎~~！！",true).getBytes());
			im.dispose();
		}

	}

}


