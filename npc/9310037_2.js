//importPackage(net.sf.odinms.client);
var status = 0;
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var �����Ʒ = "#v1302000#";
var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";


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


			var textz = "\r\n���ã��𾴵� #b#h ##k,��ӭ��������ð�յ�#r�������#k��\r\n����ð�յ����ȹ��⣬������ֵ�������ͣ�#l\r\n#bע�����°��ֳ�ֵ�����ֻҪ��ֵ��Ӧ������ȡ���ɼ�����������Ļ��֣�ÿ����ɫÿ�����ֻ����ȡһ�Σ�\r\nף�����Ϸ��죡 \r\n\r\n";

			textz += "��ǰ���֣�" + cm.getPlayer().getAccountLog("�ۼ���������", 1) + "\r\n"

			textz += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"

			textz += "#d#L0##r��ȡ300��ֵ�������#k#v4000424#\r\n";

			textz += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"

			textz += "#d#L1#��ȡ1000��ֵ�������#k#v4000423#\r\n";

			textz += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"

			textz += "#d#L2#��ȡ2000��ֵ�������#k#v4031353#\r\n";

			textz += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"

			textz += "#d#L3#��ȡ3000��ֵ�������#k#v4031777#\r\n";

			textz += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"

			textz += "#d#L4#��ȡ4000��ֵ�������#k#v4031983#\r\n";

			textz += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"

			textz += "#d#L5#��ȡ5000��ֵ�������#k#v4031427#\r\n";

			textz += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"

			textz += "#d#L6#��ȡ10000��ֵ�������#k#v5680053#\r\n";

			textz += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"

			textz += "#d#L7#��ȡ15000��ֵ�������#k#v5680053#\r\n";

			textz += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"

			cm.sendSimple(textz);


		} else if (status == 1) {

			if (selection == 0) {

				if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 300) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("300���", 1) == 0) {
					cm.gainItem(1142005, 20, 20, 20, 20, 0, 0, 20, 20, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1102039, 20, 20, 20, 20, 0, 0, 20, 20, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("300���", 1, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.����(3, "�����������[" + cm.getName() + "]300Ԫ��ֵ�����ȡ�ɹ���");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();





			} else if (selection == 1) {
				if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 1000) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("1000���", 1) == 0) {
					cm.gainItem(1142716, 40, 40, 40, 40, 0, 0, 40, 40, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1032024, 20, 20, 20, 20, 0, 0, 20, 20, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("1000���", 1, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.����(3, "�����������[" + cm.getName() + "]1000Ԫ��ֵ�����ȡ�ɹ���");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();


			} else if (selection == 2) {
				if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 2000) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("2000���", 1) == 0) {
					cm.gainItem(1142211, 60, 60, 60, 60, 0, 0, 60, 60, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1022079, 30, 30, 30, 30, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("2000���", 1, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.����(3, "�����������[" + cm.getName() + "]2000Ԫ��ֵ�����ȡ�ɹ���");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();

			} else if (selection == 3) {
				if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 3000) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("3000���", 1) == 0) {
					cm.gainItem(1142298, 80, 80, 80, 80, 0, 0, 80, 80, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1082102, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("3000���", 1, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.����(3, "�����������[" + cm.getName() + "]3000Ԫ��ֵ�����ȡ�ɹ���");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();


			} else if (selection == 4) {
				if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 4000) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("4000���", 1) == 0) {
					cm.gainItem(1142594, 100, 100, 100, 100, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1072153, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("4000���", 1, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.����(3, "�����������[" + cm.getName() + "]4000Ԫ��ֵ�����ȡ�ɹ���");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();


			} else if (selection == 5) {
				if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 5000) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("5000���", 1) == 0) {
					cm.gainItem(1142742, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1002186, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1102039, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1032024, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1022079, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1082102, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1072153, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("5000���", 1, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.����(3, "�����������[" + cm.getName() + "]5000Ԫ��ֵ�����ȡ�ɹ���");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();

			} else if (selection == 6) {
				if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 10000) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("10000���", 1) == 0) {
					cm.gainItem(1142796, 500, 500, 500, 500, 100, 100, 500, 500, 50,50, 50, 50, 0, 0);
					cm.gainItem(1902024, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 200, 200, 100, 50);
					cm.gainItem(1912017, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 200, 200, 100, 50);
					cm.gainItem(3015304, 1);
					cm.getPlayer().setAccountLog("10000���", 1, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.����(3, "�����������[" + cm.getName() + "]10000Ԫ��ֵ�����ȡ�ɹ���");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();
			} else if (selection == 7) {
				if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 15000) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("15000���", 1) == 0) {
					cm.gainItem(1142696, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 120, 120, 20, 10);
					cm.getPlayer().setAccountLog("15000���", 1, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.����(3, "�����������[" + cm.getName() + "]15000Ԫ��ֵ�����ȡ�ɹ���");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();
			}
		}
	}
}
