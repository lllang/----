var QuestName = "『 #r新 春 大 礼 包#k 』";//任务ID
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

			textz += "#v2590000#*30 #v2640011#*30  #v2613001#*30 #v2047954#*30 #v2041226#*30  #v2041332#*30  \r\n\r\n";

			textz += "  #v 2610003#*200 #v 2531000#*200  #v 2613008#*200 #v 2049600#*200 #v 2610001#*2 #v 2041213#*100 \r\n\r\n";


			im.sendNext(textz);

		} else if (status == 1) {
			im.gainItem(2613001, 30);
			im.gainItem(2047954, 30);
			im.gainItem(2041226, 30);
			im.gainItem(2041332, 30);
			im.gainItem(2590000, 30);
			im.gainItem(2640011, 30);
			//im.gainItem(2533000, 15);
			im.gainItem(2610003, 200);
			im.gainItem(2531000, 200);
			im.gainItem(2613008, 200);
			im.gainItem(2041213, 100);
			im.gainItem(2610001, 2);
            im.gainItem(2049600, 200);
			//im.gainItem(4002001, 10);
			//im.gainItem(2047954, 10);
			//im.gainItem(2610003, 2);
			//im.gainMeso(2000000000);
			//im.gainNX(100000);
			//im.gainDY(0);
			im.gainItem(2022523, -1);
			im.sendOk("礼包发放完毕，请查收。");
			//Packages.handling.world.World.Broadcast.broadcastMessage
                    (Packages.tools.MaplePacketCreator.serverNotice(2,im.getC().getChannel(),
                    "[快捷拍卖]" + " : " + "["+im.getName()+"] 领取了强化大礼包~~",true));
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,im.getC().getChannel(),"【老油条】" + " : 感谢老玩家 “" + im.getPlayer().getName() +"” 带领新人获得带新礼包！！",true).getBytes());
			im.dispose();
		}

	}

}











