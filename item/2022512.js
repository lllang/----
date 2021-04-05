var QuestName = "『 #r强 化 礼 包#k 』";//任务ID
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
			var textz = "              #e" + QuestName +  "#n#k\r\n\r\n";

			//textz += "  #b以下专门为萌新制作的新手大礼包~：#k\r\n\r\n";

			//textz += " - 装备道具奖励：\r\n\r\n";

			textz += "#v2613008#*5 #v2531000#*5 #v2533000#*5 #v2049323#*5 #v2610003#*5 #v2049600#*5 点卷10万 \r\n\r\n";

			//textz += "游戏币1500W 抵用券：10W  #v2000005#*100 #v2370004#*10  #v2614000#*5 #v5590001#*1 #v1142477#*1（全属性+10） \r\n\r\n";


			im.sendNext(textz);

		} else if (status == 1) {
			//im.gainItem(4001126, 8888);
			//im.gainItem(2450000, 2);
			//im.gainItem(2049323, 2);
			//im.gainItem(4031868, 10);
			im.gainItem(2613008, 5);
			im.gainItem(2049323, 5);
			im.gainItem(2049600, 5);
			im.gainItem(2533000, 5);
			im.gainItem(2531000, 5);
			//im.gainItem(4002001, 10);
			//im.gainItem(2047954, 10);
			im.gainItem(2610003, 5);
			//im.gainMeso(2000000000);
			im.gainNX(100000);
			//im.gainDY(0);
			im.gainItem(2022512, -1);
			im.sendOk("礼包发放完毕，请查收。");
			Packages.handling.world.World.Broadcast.broadcastMessage
                    (Packages.tools.MaplePacketCreator.serverNotice(2,im.getC().getChannel(),
                    "[快捷拍卖]" + " : " + "["+im.getName()+"] 领取了强化大礼包~~",true));
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,im.getC().getChannel(),"【老油条】" + " : 感谢老玩家 “" + im.getPlayer().getName() +"” 带领新人获得带新礼包！！",true).getBytes());
			im.dispose();
		}

	}

}

