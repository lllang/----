
var morph;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
	
    if (status == 0) {	
	cm.sendYesNo("�����������ʹ�� ��#r3000#k��� ����һ�� #r������ս����#k��");
	
	} else if (status == 1) {
	if (cm.getBossLog("��ս����Զ����") == 0) {
		cm.sendOk("��ǰ����Ҫ���Ӵ�����");
		cm.dispose();
	} else if (cm.getBossLog("������������") > 0) {
		cm.sendOk("�����Ѿ�ʹ�ù��ˣ��޷��ٴ�������ս������");
		cm.dispose();
	} else if (cm.getPlayer().getCSPoints(1) < 3000) {
		cm.sendOk("����㣬�޷�����");
		cm.dispose();
	}else{
		cm.gainNX(-3000);
		cm.getPlayer().setBossLog("��ս����Զ����",0,-1);
		cm.getPlayer().setBossLog("������������",0,1);
	    cm.sendOk("���Ӵ�����ɡ�");
		cm.dispose();
	}

}
}