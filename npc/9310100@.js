var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var head = "#fUI/UIWindow2.cmg/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.cmg/QuestAlarm/BtQ/normal/0#";
var chance = Math.floor(Math.random() * 9 + 1);
var startIcon = "#fUI/UIWindow2.cmg/Quest/quest_info/summary_icon/startcondition#\r\n";
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var ���� = 4031179;
var ����1 = 4031179;
var ����2 = 4031179;
var ���� = 100000;
var ����1 = 500000;
var ����2 = 1000000;
var I

function start() {
	if (cm.getPlayer().getLimitBreak() < 199999) {
		cm.getPlayer().setLimitBreak(199999);
		cm.dispose();
	} else {
		a = -1;
		action(1, 0, 0);
	}
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
		if (a == -1) {
			cm.dispose();
		} else if (a == 0) {
			var text = "#e#r�����ƹ�NPC��.\r\n\r\n";	
			text += "#L0#ʹ��#v2614000#����ƹ�����[1��-599��]#l\r\n\r\n";//3
			text += "#L1#ʹ��#v2614000#����ƹ�����[599������ʹ��]#l\r\n\r\n";
			cm.sendSimple(text);

		} else if (a == 1) {
			if (selection == 0) {
				if (cm.haveItem(2614000, 1) == false) {
					cm.sendOk("���߲���");
					cm.dispose();
				} else if (cm.getPlayer().getLimitBreak() >= 5999999){
					cm.sendOk("�˹��ܽ���599�����¿���ʹ��");
					cm.dispose();
				} else {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 10000);
					cm.gainItem(2614000, -1);
					cm.worldMessage(6, "���ƹ�ϵͳ������ϲ��� "+cm.getPlayer().getName()+" �ƹ��� "+cm.getPlayer().getLimitBreak()+"");
					cm.sendOk("�����ƹ����޳ɹ���")
					cm.dispose();
				}

			} else if (selection == 1) {
				if (cm.haveItem(2614001, 1) == false) {
					cm.sendOk("���߲���");
					cm.dispose();
				} else if (cm.getPlayer().getLimitBreak() < 5999999){
					cm.sendOk("�˹��ܽ���599�����Ͽ���ʹ��");
					cm.dispose();
				} else {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 10000);
					cm.gainItem(2614000, -1);
					cm.worldMessage(6, "���ƹ�ϵͳ������ϲ��� "+cm.getPlayer().getName()+" �ƹ��� "+cm.getPlayer().getLimitBreak()+"");
					cm.sendOk("�����ƹ����޳ɹ���")
					cm.dispose();
				}
			}
		}
	}
}