/*
  ��������
     ����ʱ�䣺2018/12/05
                 QQ��540328414
                              */
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var �һ� = "#fMap/MapHelper/weather/rose/4#";
//---------VIP�۸�����;
var VIP1 = 200;
var VIP2 = 600;
var VIP3 = 1000;

//---------VIP�������;
var cj1 = VIP2 - VIP1;//vip1 ~ vip2;
var cj2 = VIP3 - VIP2;//vip2 ~ vip3;
var cj3 = VIP3 - VIP1;//vip1 ~ vip3;

function start() {
	status = -1;
	action(1, 0, 0);
}
function start() {
	status = -1;

	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}
	else {
		if (status >= 0 && mode == 0) {

			cm.sendOk("��л��Ĺ��٣�");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {

			var selStr = "\r\n";
			selStr += "ÿ���״γ�ֵ100Ԫ���ϣ�����ȡÿ���׳������\r\n\r\n";
			selStr += "#v2614001#�ƹ�ʯx1			#v2460005#�Ŵ�x2\r\n\r\n";
			selStr += "#v5440000#ð�ձ�x3E		    #v4310158#�سɱ�x4\r\n\r\n";
			selStr += " - �����ۼ�������"+cm.getPlayer().getBossLog("�����ۼ�����",0)+" R\r\n";
			cm.sendSimple(selStr);

		} else if (status == 1) {
			if (cm.getPlayer().getBossLog("�����ۼ�����", 0) < 100) {
				cm.sendOk("�����ۼ����ѵ㲻��~!���ֵ��");
				cm.dispose();
			} else if (cm.getBossLog("�����ۼ�����_100���") == 0) {
				cm.gainItem(2614001, 1);//
				cm.gainItem(2460005, 2);//
				cm.gainItem(4310158, 4);//
				cm.gainMeso(300000000);
				cm.setBossLog("�����ۼ�����_100���");
				cm.sendOk("��ȡ�ɹ���");
				cm.dispose();
			} else {
				cm.sendOk("�����������ȡ��");
				cm.dispose();
			}
		}
	}
}	
