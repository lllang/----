var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (!cm.getPlayer().isGM()) {
		//cm.dispose();
		//return;
	}
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var msg = " ��ӭ����ţ��� [" + cm.getPlayer().getName() + "] �ص����ð�յ�����һ��ð������~!";
			cm.����(1, msg);
			cm.dispose();
		}

	}
}