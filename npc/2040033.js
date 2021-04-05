/*
	Neru - Ludibrium : Ludibrium Pet Walkway (220000006)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4031128)) {
	    cm.sendNext("�ţ������ҵܵܵ��ţ�Ҳ��������Ϊ�Ҳ������Ͷ���......�ף�����......������ҵĸ��������ѵ�����صĳ��վ����������ǰɣ�������Ȼ�����������������һ����������ܹ�ϵˮƽ�����ĳ���.");
	} else {
	    cm.sendOk("�Ҹ������ң��չ˳�����ϰ�����Ȼ������...��Ϊ��Զ�������Ҳ��������ֺ���......�Ǻǣ���Ϊ��û�п���������ǰ��������ɴ���ɼ�����.");
	    cm.dispose();
	}
    } else if (status == 1) {
	if (cm.getPlayer().getPet(0) == null) {
	    cm.sendNextPrev("��...������������������ĳ����Щ�ϰ��ĳ�������������Щû������������õ�ʧ��!");
	    cm.dispose();
	} else if (cm.getPlayer().getAccountLog("�������",0) > 1) {
		cm.sendOk("һ��ֻ�����һ�Σ����뿪��");
		cm.dispose();
		cm.warp(910000000,0);
	} else {
		cm.getPlayer().setAccountLog("�������",0);
		cm.gainItem(2022428,1);
		cm.gainItem(4001126,100);
	    cm.����(1, "[" + cm.getPlayer().getName() + "]ͨ����߳�����������ӷ�Ҷ*100����~");
	    cm.gainItem(4031128, -1);
	    cm.gainClosenessAll(4);
	    cm.sendNextPrev("������أ��ѵ��㲻��Ϊ���Ѿ��õ�����ĳ�����ӽ����������ʱ�䣬��ѵ����ĳ���������ϰ�......��Ȼ��Ȼ���ҵĸ������.");
	    cm.dispose();
	}
    }
}