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
			var msg = " 欢迎蓝蜗牛玩家 [" + cm.getPlayer().getName() + "] 回到企鹅冒险岛继续一起冒险生涯~!";
			cm.喇叭(1, msg);
			cm.dispose();
		}

	}
}