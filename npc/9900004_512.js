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
			var textz = "Ⱥ��Ծ��һÿ�ս�����\r\n";
			textz += "#v2340000#*5��#v4001017#*5��#v1122017#*1��#v2040807#*1\r\n\r\n";
			textz += "ð�ձ�1500W����ȯ10000������ȯ20000\r\n";
			textz += "#b��ȡÿ�ջ�Ծ������Ҫ#v4031341#���뱳���ڣ���ȷ�������������пո�\r\n\r\n";
			cm.sendYesNo(textz);

		} else if (status == 1) {
			if (cm.haveItem(4031341, 1) == false) {
				cm.sendOk("���߲���");
				cm.dispose();
			} else if (cm.getBossLog("VIPÿ�����") > 0) {
				cm.sendOk("ÿ�ս�����ȡһ��");
				cm.dispose();
			} else {
				cm.setBossLog("VIPÿ�����");
				cm.gainItem(4031341, -1);//��������ID������
				cm.gainItem(2340000, 5);
				cm.gainItem(4001017, 5);
				cm.gainItem(2040807, 1);
				cm.gainItem(1122017, 1, 1);
				cm.gainNX(10000);
				cm.gainDY(20000);
				cm.gainMeso(15000000);
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
				cm.����(2,"��ң�["+cm.getName()+"]��ý���Ⱥ��Ծ����");
			}

		}

	}
}

