var QuestName = "�������� -- ͨ����ʬĢ��";//����ID
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
			var textz = "VIPÿ�տ���ȡ���·������\r\n";
			textz += "#v2614001#*8��#v4002001#*8��#v1122017#*1�죬#v2049600#*10 #v2041332#*15 #v2613008#*10 #v2531000#*10";
			textz += "#v4170000#*60��#v2041213#*30��#v2041200#*1����ȯ300000������ȯ100000\r\n";
			textz += "#b��ȡשʯVIP����ʱ�뽫#v3700010#���뱳���ڣ�#r��ȷ�������������пո�#k��\r\n\r\n";
			cm.sendYesNo(textz);

		} else if (status == 1) {
			if (cm.haveItem(3700010, 1) == false) {
				cm.sendOk("���߲���");
				cm.dispose();
			} else if (cm.getPlayer().getAccountLog("VIPÿ�����",0) > 0) {
				cm.sendOk("ÿ�ս�����ȡһ��");
				cm.dispose();
			} else {
				cm.getPlayer().setAccountLog("VIPÿ�����",0);
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
				cm.sendOk("��ȡ�ɹ�");
				cm.����(1,"["+cm.getName()+"]��ҳɹ���ȡ����VIP������ǿ�潱������ô���������");
				cm.dispose();
			}

		}

	}
}

