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


			var textz = "\r\n���ã��𾴵� #b#h ##k,��ӭ��������ð�յ�#r�������#k\r\n\r\n";

			textz += "#e#r�����ۼ�������" + cm.getPlayer().getBossLog("�����ۼ�����", 1) + "#n#d\r\n";
			
			textz += "#L0#�����ۼƳ�ֵ28Ԫ��#v5211060#��1��Ȩ��#v4031138#x5000W\r\n";
			
			textz += "#L1#�����ۼƳ�ֵ68Ԫ��#v2049345#*1#v4031138#x1��\r\n";
			
			textz += "#L2#�����ۼƳ�ֵ128Ԫ: #v2460003#*2#v4031138#x2��#v2531006#*1\r\n";

			textz += "#L3#�����ۼƳ�ֵ8888Ԫ: #v2022550##r����ҵ������ѡ��\r\n";

			

			cm.sendSimple(textz);


		} else if (status == 1) {
                if (selection == 0) {
				if (cm.getPlayer().getBossLog("�����ۼ�����", 1) < 28) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				}else if(cm.getInventory(2).isFull(0)||cm.getMeso() > 2000000000){
					cm.sendOk("��������,����Ǯ����21E��");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("ÿ�����_1", 0) == 0) {
					cm.gainItem(5211060,1,1);
					cm.gainMeso(+50000000); //�Ӽ����
					cm.getPlayer().setBossLog("ÿ�����_1", 0, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();


			} else if (selection == 1) {
				if (cm.getPlayer().getBossLog("�����ۼ�����", 1) < 68) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				}else if(cm.getInventory(2).isFull(0)||cm.getMeso() > 2000000000){
					cm.sendOk("��������,����Ǯ����21E��");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("ÿ�����_2", 0) == 0) {
					cm.gainItem(2049345,1);
					cm.gainMeso(+100000000); //�Ӽ����
					cm.getPlayer().setBossLog("ÿ�����_2", 0, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();

			}else if (selection == 2) {
                if (cm.getPlayer().getBossLog("�����ۼ�����", 1) < 128) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				}else if(cm.getInventory(2).isFull(0)||cm.getMeso() > 1900000000){
					cm.sendOk("��������,����Ǯ����21E��");
					cm.dispose();
				}else if (cm.getPlayer().getBossLog("ÿ�����_3", 0) == 0) {
					cm.gainItem(2531006,1);
					cm.gainItem(2460003,2);
					cm.gainMeso(+200000000); //�Ӽ����
					cm.getPlayer().setBossLog("ÿ�����_3", 0, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();

			}  else if (selection == 3) {
				if (cm.getPlayer().getBossLog("�����ۼ�����", 1) < 8888) {//��ɫ�����
					cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ���ֲ���~.");
					cm.dispose();
				}else if(cm.getInventory(2).isFull(0)){
					cm.sendOk("�������㣡");
					cm.dispose();
				}else if (cm.getPlayer().getBossLog("ÿ�����_4", 0) == 0) {
					cm.gainMeso(+1500000000); //�Ӽ����
					cm.gainItem(2022550,1);
					cm.getPlayer().setBossLog("ÿ�����_4", 0, 1);
					cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
					cm.dispose();
				} else
					cm.sendOk("��Ǹ������δ��ֵ�������Ѿ���ȡ�˸õ����~.");
				cm.dispose();


			}   
		}
	}
}
