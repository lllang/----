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
			textz += "#v4031179#*2��#v4001017#*1��#v1122017#*1��#v4310196#*3\r\n\r\n";
			textz += "ð�ձ�5000W����ȯ5000������ȯ6000\r\n";
			textz += "#b��ȡÿ�ո���ʱ�뽫VIPѫ��#v1142343#���뱳���ڣ���ȷ�������������пո�\r\n\r\n";
			cm.sendYesNo(textz);

		} else if (status == 1) {
			if (cm.haveItem(1142343, 1) == false) {
				cm.sendOk("���߲���");
				cm.dispose();
			} else if (cm.getBossLog("VIPÿ�����") > 0) {
				cm.sendOk("ÿ�ս�����ȡһ��");
				cm.dispose();
			} else {
				cm.setBossLog("VIPÿ�����");
				cm.gainItem(4031179, 2);
				cm.gainItem(4001017, 1);
				cm.gainItem(4310196, 3);
				cm.gainItem(1122017, 1, 1);
				cm.gainNX(5000);
				cm.gainDY(6000);
				cm.gainMeso(50000000);
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
			}

		}

	}
}

