
var morph;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
	
    if (status == 0) {	
	cm.sendYesNo("�����������ʹ�� ��#b#v5220006##z5220006##k�� ����һ�� #r������ս����#k��");
	
	} else if (status == 1) {
	if (cm.getBossLog("��ս��������") == 0) {
		cm.sendOk("��ǰ����Ҫ���Ӵ�����");
		cm.dispose();
	} else if (cm.getBossLog("���Ӻ�������") > 0) {
		cm.sendOk("�����Ѿ�ʹ�ù��ˣ��޷��ٴ�������ս������");
		cm.dispose();
	} else if (cm.haveItem(5220006,1) == false) {
		cm.sendYesNo("��ı�����û�С�#b#v5220006##z5220006##k�����Ƿ���й��򣿣�#r5000#k���");
	}else{
		cm.gainItem(5220006,-1);
		cm.getPlayer().setBossLog("��ս��������",0,-1);
		cm.getPlayer().setBossLog("���Ӻ�������",0,1);
	    cm.sendOk("���Ӵ�����ɡ�");
		cm.dispose();
	}
	} else if (status == 2) {	
	       if (cm.getPlayer().getCSPoints(1) > 5000) { 
		       cm.gainItem(5220006,1);
			   cm.gainNX(-5000);
			   cm.sendOk("����ɹ�~");
			   cm.dispose();
			   status = -1;
		   }else{
			   cm.sendOk("����㣬�޷�����");
			   cm.dispose();
}
}
}