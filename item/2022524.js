var QuestName = "�� #r�� �� �� �� ��#k ��";//����ID
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

			textz += "#v2614002#*100 #v4002001#*500    \r\n\r\n";

			//textz += "  #v 2610003#*200 #v 2531000#*200  #v 2613008#*200 #v 2049600#*200 #v 2610001#*2 #v 2041213#*100 \r\n\r\n";


			im.sendNext(textz);

		} else if (status == 1) {
			im.gainItem(2614002, 100);
			im.gainItem(4002001, 500);
			
			//im.gainItem(4002001, 10);
			//im.gainItem(2047954, 10);
			//im.gainItem(2610003, 2);
			//im.gainMeso(2000000000);
			//im.gainNX(100000);
			//im.gainDY(0);
			im.gainItem(2022524, -1);
			im.sendOk("���������ϣ�����ա�");
			//Packages.handling.world.World.Broadcast.broadcastMessage
                    (Packages.tools.MaplePacketCreator.serverNotice(2,im.getC().getChannel(),
                    "[�������]" + " : " + "["+im.getName()+"] ��ȡ���ƹ������~~",true));
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,im.getC().getChannel(),"����������" + " : ��л����� ��" + im.getPlayer().getName() +"�� �������˻�ô����������",true).getBytes());
			im.dispose();
		}

	}

}











