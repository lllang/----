/*
  兜兜制作
     更新时间：2018/12/05
                 QQ：540328414
                              */
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 桃花 = "#fMap/MapHelper/weather/rose/4#";

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		var selStr = "\r\n";
		selStr += "#b这里可以合成极品装备#k\r\n";

		selStr += "#L0#锻造#v1003976#（#r全属性+188#k）需要：#v1003267#*1  #v1003413#*1  #v1003863#*1  #v1003864#*1 #v1003621#*1 #v4000464#*8\r\n\r\n";

		selStr += "#L1#锻造#v1022211#（#r全属性+188#k）需要：#v1022186#*1  #v1022097#*1  #v1022149#*1  #v1022261#*1 #v4000464#*8\r\n\r\n";

		selStr += "#L2#锻造#v1003413#（#r全属性+66#k）需要：#v4170002#*88 #v4310174#*188\r\n\r\n";

		selStr += "#L3#锻造#v1003863#（#r全属性+66#k）需要：#v4170004#*88 #v4031456#*38\r\n\r\n";

		selStr += "#L4#锻造#v1003864#（#r全属性+66#k）需要：#v4020009#*88 #v4031039#*88\r\n\r\n";

		selStr += "#L5#锻造#v1022186#（#r全属性+66#k）需要：#v4032398#*88 #v4001024#*8 #v1022232#*1\r\n\r\n";

		selStr += "#L6#锻造#v1022149#（#r全属性+66#k）需要：#v4021010#*88 #v4310174#*188 #v1022232#*1\r\n\r\n";
		cm.sendSimple(selStr);
	} else if (status == 1) {
		if (selection == 0) {
			if (cm.haveItem(1003267, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(1003413, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(1003863, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(1003864, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(1003621, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(4000464, 8) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else {
				cm.gainItem(1003267, -1);
				cm.gainItem(1003413, -1);
				cm.gainItem(1003863, -1);
				cm.gainItem(1003864, -1);
				cm.gainItem(1003621, -1);
				cm.gainItem(4000464, -8);
				cm.gainItem(1003976, 188, 188, 188, 188, 0, 0, 188, 188, 0, 0, 0, 0, 0, 0);
				cm.sendOk("兑换成功。");
				cm.dispose();
			}
		} else if (selection == 1) {
			if (cm.haveItem(1022186, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(1022097, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(1022149, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(1022261, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(4000464, 8) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else {
				cm.gainItem(1022186, -1);
				cm.gainItem(1022097, -1);
				cm.gainItem(1022149, -1);
				cm.gainItem(1022261, -1);
				cm.gainItem(4000464, -8);
				cm.gainItem(1022211, 188, 188, 188, 188, 0, 0, 188, 188, 0, 0, 0, 0, 0, 0);
				cm.sendOk("兑换成功。");
				cm.dispose();
			}
		} else if (selection == 2) {
			if (cm.haveItem(4170002, 88) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(4310174, 188) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else {
				cm.gainItem(4170002, -88);
				cm.gainItem(4310174, -188);
				cm.gainItem(1003413, 66, 66, 66, 66, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0);
				cm.sendOk("兑换成功。");
				cm.dispose();
			}
		} else if (selection == 3) {
			if (cm.haveItem(4170004, 88) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(4031456, 38) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else {
				cm.gainItem(4170004, -88);
				cm.gainItem(4031456, -38);
				cm.gainItem(1003863, 66, 66, 66, 66, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0);
				cm.sendOk("兑换成功。");
				cm.dispose();
			}
		} else if (selection == 4) {
			if (cm.haveItem(4020009, 88) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(4031039, 88) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else {
				cm.gainItem(4020009, -88);
				cm.gainItem(4031039, -88);
				cm.gainItem(1003864, 66, 66, 66, 66, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0);
				cm.sendOk("兑换成功。");
				cm.dispose();
			}
		} else if (selection == 5) {
			if (cm.haveItem(4032398, 88) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(4001024, 8) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(1022232, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else {
				cm.gainItem(4032398, -88);
				cm.gainItem(4001024, -8);
				cm.gainItem(1022232, -1);
				cm.gainItem(1022186, 66, 66, 66, 66, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0);
				cm.sendOk("兑换成功。");
				cm.dispose();
			}
		} else if (selection == 6) {
			if (cm.haveItem(4021010, 88) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(4310174, 188) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else if (cm.haveItem(1022232, 1) == false) {
				cm.sendOk("所需道具不足");
				cm.dispose();
			} else {
				cm.gainItem(4021010, -88);
				cm.gainItem(4310174, -188);
				cm.gainItem(1022232, -1);
				cm.gainItem(1022149, 66, 66, 66, 66, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0);
				cm.sendOk("兑换成功。");
				cm.dispose();
			}
		}
	}
}
