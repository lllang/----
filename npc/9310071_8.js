var ����1 = 3991026;
var ����2 = 3991027;
var ����3 = 3991028;
var ����4 = 3991029;

var ʱ��;
var ��¼ʱ��;
var ��ȡ��¼ʱ��;
var ���ʱ��;
var �ѹ�ʱ��;
var text;

var ��սLog = "��սϵͳ";
var Ԫ��Log = "����ϵͳ";
var ת��Log = "ת��";
var ����Ԫ�� = 300;
var �涨ʱ�� = 72;// 3��
var �涨ת������ = 1;
var ����Ԫ�� = 1000;
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var �Ƿ�Ϊ����, װ������, װ������1, װ������2, ����;
var ����, ����, itemFlag, ����, ����, ����ֵ, ����ֵ, ��������, ħ��������, ���������, ħ��������, �ر���, ������, ��Ծ��, �ƶ��ٶ�, itemsj;
var ���ֵ = Math.floor(Math.random() * 100);;
var status = 0;

function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("�뽫��#rװ���� - ��һ��#k������#b ����ϵ�� #kװ����");
		cm.dispose();
	} else {
		status = -1;
		action(1, 0, 0);
	}
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
			ʱ�� = parseInt(new Date().getTime() / 1000);//ȡ������
			�ѹ�ʱ�� = parseInt((ʱ�� - cm.getPlayer().getBossLog("��¼��սʱ��", 1)) / 3600); //ȡ����1Сʱ
			����ʱ = ʱ�� - cm.getPlayer().getBossLog("��¼��սʱ��", 1);//����
			text = "\r\n�� ��սϵͳ ��\r\n";
			text += "˵����\r\n";
			text += "˵����\r\n";
			text += "˵����\r\n";
			if (cm.getPlayer().getBossLog(��սLog, 1) == 0) {
				text += "#L0#������ս#l\r\n";
				cm.sendYesNo(text);
			} else if (�ѹ�ʱ�� < �涨ʱ��) {
				text += "��ǰʣ����սʱ�䣺" + (�涨ʱ�� - �ѹ�ʱ��) + " Сʱ\r\n";
				text += "��δ���ת��������" + (�涨ת������ - (cm.getPlayer().getBossLog(ת��Log, 1) - cm.getPlayer().getBossLog("��¼ת������", 1))) + " ��\r\n";
				text += "#L1#��ȡ����#l\r\n";
				cm.sendYesNo(text);
			} else {
				cm.getPlayer().setBossLog("��¼ת������", 1, -cm.getPlayer().getBossLog("��¼ת������", 1));//���ת������
				cm.getPlayer().setBossLog("��¼��սʱ��", 1, -cm.getPlayer().getBossLog("��¼��սʱ��", 1));//��ռ�¼ʱ��
				cm.getPlayer().setBossLog(��սLog, 1, -cm.getPlayer().getBossLog(��սLog, 1));//�����ս
				cm.sendOk("ʱ���Գ�����������սʧ��");
				cm.dispose();
			}
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.getPlayer().getBossLog(��սLog, 1) > 0) {
					cm.sendOk("��ս���ڽ����У��޷��ظ���ȡ");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog(Ԫ��Log, 1) < ����Ԫ��) {
					cm.sendOk("Ԫ���������㣬��ȷ��");
					cm.dispose();
				} else {
					cm.getPlayer().setAccountLog(Ԫ��Log, 1, -����Ԫ��);//��������Ԫ��
					cm.getPlayer().setBossLog(��սLog, 1, 1)
					cm.getPlayer().setBossLog("��¼��սʱ��", 1, ʱ��);
					cm.getPlayer().setBossLog("��¼ת������", 1, cm.getPlayer().getBossLog(ת��Log, 1));//��¼ת������
					cm.sendOk("��ս��ʼ�����ڹ涨ʱ���ڵ��NPC��ȡ��������ʱ����Ը�");
					cm.dispose();
				}

			} else if (selection == 1) {
				if (cm.getPlayer().getBossLog(��սLog, 1) == 0) {
					cm.sendOk("���ȿ�ʼ��ս��");
					cm.dispose();
				} else if ((cm.getPlayer().getBossLog(ת��Log, 1) - cm.getPlayer().getBossLog("��¼ת������", 1)) < �涨ת������) {
					cm.sendOk("δ���Ҫ���ٽ�����");
					cm.dispose();
				} else {
					cm.getPlayer().setBossLog("��¼ת������", 1, -cm.getPlayer().getBossLog("��¼ת������", 1));//���ת������
					cm.getPlayer().setBossLog("��¼��սʱ��", 1, -cm.getPlayer().getBossLog("��¼��սʱ��", 1));//��ռ�¼ʱ��
					cm.getPlayer().setBossLog(��սLog, 1, -cm.getPlayer().getBossLog(��սLog, 1));//�����ս
					cm.getPlayer().setAccountLog(Ԫ��Log, 1, ����Ԫ��);
					cm.sendOk("��ս���");
					cm.dispose();
				}
			}
		}

	}
}
