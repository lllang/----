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
			textz += "#v2614001#*4��#v4002001#*4��#v1122017#*1�죬#v2049600#*8 #v2041332#*12 #v2613008#*8 #v2531000#*4";
			textz += "#v4170000#*40��#v2041213#*20����ȯ200000������ȯ100000\r\n";
			textz += "#b��ȡשʯVIP����ʱ�뽫#v3700090#���뱳���ڣ�#r��ȷ�������������пո�#k��\r\n\r\n";
			cm.sendYesNo(textz);

		} else if (status == 1) {
			if (cm.haveItem(3700090, 1) == false) {
				cm.sendOk("���߲���");
				cm.dispose();
			} else if (cm.getPlayer().getAccountLog("VIPÿ�����",0) > 0) {
				cm.sendOk("ÿ�ս�����ȡһ��");
				cm.dispose();
			} else {
				cm.getPlayer().setAccountLog("VIPÿ�����",0);
				cm.gainItem(2614001, 4);
				cm.gainItem(2041213, 20);
				cm.gainItem(4002001, 4);
				cm.gainItem(2613008, 8);
				cm.gainItem(2049600, 8);
				cm.gainItem(2531000, 4);
				cm.gainItem(2041332, 12);
				cm.gainItem(4170000, 40);
				cm.gainItem(1122017, 1, 1);
				cm.gainNX(200000);
				cm.gainDY(100000);
				//cm.gainMeso(100000000);
				cm.sendOk("��ȡ�ɹ�");
				cm.����(1,"["+cm.getName()+"]��ҳɹ���ȡ��ʯVIP������ǿ�潱������ô���������");
				cm.dispose();
			}

		}

	}
}

