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
			textz += "#v4031179#*10��#v4001017#*10��#v1122017#*1��#v4310196#*10 #v2460003#*20 #v2340000#*20\r\n\r\n";
			textz += "ð�ձ�3E����ȯ30000������ȯ60000\r\n";
			textz += "#b��ȡÿ�ո���ʱ�뽫VIPѫ��#v1142398#���뱳���ڣ���ȷ�������������пո�\r\n\r\n";
			cm.sendYesNo(textz);

		} else if (status == 1) {
			if (cm.haveItem(1142398, 1) == false) {
				cm.sendOk("���߲���");
				cm.dispose();
			} else if (cm.getBossLog("VIPÿ�����") > 0) {
				cm.sendOk("ÿ�ս�����ȡһ��");
				cm.dispose();
			} else {
				cm.setBossLog("VIPÿ�����");
				cm.gainItem(4031179, 10);
				cm.gainItem(4001017, 10);
				cm.gainItem(4310196, 10);
				cm.gainItem(2460003, 20);
				cm.gainItem(2340000, 20);
				cm.gainItem(1122017, 1, 1);
				cm.gainNX(30000);
				cm.gainDY(60000);
				cm.gainMeso(300000000);
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
			}

		}

	}
}

