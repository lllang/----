var QuestName = "�� #r�� �� �� ��#k ��";//����ID
var Meso = 100000;//�������
var Exp = 10000;//��������
var ItemID = 3991029;//��������ID
var QuestItemID = 4000008;//�����������ID
var QuestItemNum = 100;//���������������

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

			//textz += "  #b����ר��Ϊ�������������ִ����~��#k\r\n\r\n";

			//textz += " - װ�����߽�����\r\n\r\n";

			//textz += "# #v1003946#*1��ȫ����+15��#v1102612#*1��ȫ����+15��#v1132242#*1(ȫ����+15)\r\n\r\n";

			//textz += "��Ϸ��1500W ����ȯ��10W  #v2000005#*100 #v2370004#*10  #v2614000#*5 #v5590001#*1 #v1142477#*1��ȫ����+10�� \r\n\r\n";


			im.sendNext(textz);

		} else if (status == 1) {
			im.gainItem(4001126, 10000);
			im.gainItem(2531000, 2);
			im.gainItem(4170000, 10);
			im.gainItem(2450000, 1);
			//im.gainItem(2531000, 1);
			//im.gainItem(1102091,15,15,15,15,0,0,15,15,0,0,0,0,0,0);
			im.gainMeso(50000000);
			im.gainNX(88888);
			//im.gainDY(0);
			im.gainItem(2022467, -1);
			im.sendOk("���������ϣ�����ա�");
			Packages.handling.world.World.Broadcast.broadcastMessage
                    (Packages.tools.MaplePacketCreator.serverNotice(2,im.getC().getChannel(),
                    "[�������]" + " : " + "["+im.getName()+"] ��ȡ�˹�������~~",true));
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,im.getC().getChannel(),"����������" + " : ��л����� ��" + im.getPlayer().getName() +"�� �������˻�ô����������",true).getBytes());
			im.dispose();
		}

	}

}

