var QuestName = "�� #rǿ �� �� ��#k ��";//����ID
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

			textz += "#v2613008#*5 #v2531000#*5 #v2533000#*5 #v2049323#*5 #v2610003#*5 #v2049600#*5 ���10�� \r\n\r\n";

			//textz += "��Ϸ��1500W ����ȯ��10W  #v2000005#*100 #v2370004#*10  #v2614000#*5 #v5590001#*1 #v1142477#*1��ȫ����+10�� \r\n\r\n";


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
			im.sendOk("���������ϣ�����ա�");
			Packages.handling.world.World.Broadcast.broadcastMessage
                    (Packages.tools.MaplePacketCreator.serverNotice(2,im.getC().getChannel(),
                    "[�������]" + " : " + "["+im.getName()+"] ��ȡ��ǿ�������~~",true));
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,im.getC().getChannel(),"����������" + " : ��л����� ��" + im.getPlayer().getName() +"�� �������˻�ô����������",true).getBytes());
			im.dispose();
		}

	}

}

