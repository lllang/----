var QuestName = "ÿ������ -- BOSS��Ʊ";//����ID
var Meso = 100000;//�������
var Exp = 5000;//��������
var ItemID = 2590000;//��������ID
var QuestItemID = 2590000;//�����������ID
var QuestItemNum = 10;//���������������

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
			var textz = "            " + QuestName + "\r\n";

			textz += " - ����������ߣ�#v4310143#BOSS��\r\n\r\n";

			textz += " - ����������������Ҫ66��\r\n\r\n";

			textz += " - #r��ע�ⱳ���Ƿ��п�λ#k\r\n\r\n";

			textz += " - ���������ߣ�#v2590000#����#v2640011#�м�#v2613001#�߼���Ʊ��1��\r\n\r\n";

			textz += " - ���������" + Exp + "\r\n\r\n";

			cm.sendYesNo(textz);


		} else if (status == 1) {
			if (cm.haveItem(4310143, 66) == false) {
				cm.sendOk("���߲���");
				cm.dispose();
			} else if (cm.getBossLog("ÿ������") > 0) {
				cm.sendOk("���������");
				cm.dispose();
			} else {
				cm.gainItem(2590000,1);
				cm.gainItem(2640011,1);
				cm.gainItem(2613001,1);
				
				cm.gainItem(4310143, -66);//��������ID������
				cm.gainNX(5000);
				//cm.gainMeso(200000000);
				cm.setBossLog("ÿ������")
				cm.sendOk("��ȡ�ɹ�");
				cm.dispose();
			}

		}

	}
}

