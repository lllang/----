
var nx;
var status = 0;

var 道具代码1 = 4001024;
var 道具代码2 = 4251202;
var 道具代码3 = 4250002;
var 道具代码4 = 4000464;
var 道具代码5 = 3994731;


function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("请将装备放置在装备栏 - 第一格~");
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
			var textz = "#b星空中出现一丝裂缝，勇敢地勇士啊！请披上神圣天使之翼与邪恶的魔王战斗到底吧！\r\n";
			textz += "#d#L0#锻造天使之翼：#v1102629#（全属性200双攻200）#l\r\n\r\n#v4001024#*18  #v4020009#*38  #v4032398#*88  #v4251202#*38  #v4000464#*8\r\n";

			textz += "#d#L1#升级天使之翼：#v1102630#（全属性300双攻300）#l\r\n\r\n#v4001024#*5   #v4251202#*18  #v4250002#*50  #v4000464#*8\r\n";

			textz += "#d#L2#升级大天使之翼：#v1102824#（全属性450双攻450）#l\r\n\r\n#v4001024#*5   #v4251202#*18  #v4250002#*50  #v4000464#*8\r\n";

			textz += "#d#L3#升级圣天使之翼：#v1102575#（全属性600双攻600）#l\r\n\r\n#v4001024#*5   #v4251202#*18  #v4250002#*50  #v4000464#*8\r\n";

			textz += "#d#L4#升级堕落天使之翼：#v1102576#（全属性600双攻600）#l\r\n\r\n#v4001024#*5   #v4251202#*18  #v4250002#*50  #v4000464#*8\r\n";

			textz += "#d#L5#升级光明天使之翼：#v1102723#（全属性3000双攻3000）#l\r\n\r\n#v4001024#*38   #v4251202#*99  #v4250002#*300  #v4000464#*32  #v3994731#*300\r\n";

			textz += "#d#L6#升级黑暗天使之翼：#v1102724#（全属性3000双攻3000）#l\r\n\r\n#v4001024#*38   #v4251202#*99  #v4250002#*300  #v4000464#*32  #v3994731#*300\r\n";

			cm.sendYesNo(textz);

		} else if (status == 1) {
			if (selection == 0) {
				if (cm.haveItem(4001024, 18) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4020009, 38) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4032398, 88) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4251202, 38) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4000464, 8) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
				} else {
					cm.gainItem(4001024, -18);
					cm.gainItem(4020009, -38);
					cm.gainItem(4032398, -88);
					cm.gainItem(4251202, -38);
					cm.gainItem(4000464, -8);
					cm.gainItem(1102629, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.sendOk("锻造成功。");
					cm.dispose();
				}
			} else if (selection == 1) {
				if (cm.haveItem(1102629, 1) == false) {
					cm.sendOk("请带来#v1102629#");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4001024, 5) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4251202, 50) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4250002, 50) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4000464, 8) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
				} else {
					cm.gainItem(1102629,-1);
					cm.gainItem(4001024, -5);
					cm.gainItem(4250002, -20);
					cm.gainItem(4251202, -50);
					cm.gainItem(4000464, -8);
					cm.gainItem(1102630, 300, 300, 300, 300, 0, 0, 300, 300, 0, 0, 0, 0, 0, 0);
					cm.sendOk("锻造成功。");
					cm.dispose();
				}
			} else if (selection == 2) {
				if (cm.haveItem(1102630, 1) == false) {
					cm.sendOk("请带来#v1102630#");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4001024, 5) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4251202, 50) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4250002, 50) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4000464, 8) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
				} else {
					cm.gainItem(1102630,-1);
					cm.gainItem(4001024, -5);
					cm.gainItem(4250002, -20);
					cm.gainItem(4251202, -50);
					cm.gainItem(4000464, -8);
					cm.gainItem(1102824, 450, 450, 450, 450, 0, 0, 450, 450, 0, 0, 0, 0, 0, 0);
					cm.sendOk("锻造成功。");
					cm.dispose();
				}
			} else if (selection == 3) {
				if (cm.haveItem(1102824, 1) == false) {
					cm.sendOk("请带来#v1102824#");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4001024, 5) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4251202, 50) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4250002, 50) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4000464, 8) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
				} else {
					cm.gainItem(1102824,-1);
					cm.gainItem(4001024, -5);
					cm.gainItem(4250002, -20);
					cm.gainItem(4251202, -50);
					cm.gainItem(4000464, -8);
					cm.gainItem(1102575, 600, 600, 600, 600, 0, 0, 600, 600, 0, 0, 0, 0, 0, 0);
					cm.sendOk("锻造成功。");
					cm.dispose();
				}
			} else if (selection == 3) {
				if (cm.haveItem(1102575, 1) == false) {
					cm.sendOk("请带来#v1102575#");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4001024, 5) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4251202, 50) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4250002, 50) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4000464, 8) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
				} else {
					cm.gainItem(1102575,-1);
					cm.gainItem(4001024, -5);
					cm.gainItem(4250002, -20);
					cm.gainItem(4251202, -50);
					cm.gainItem(4000464, -8);
					cm.gainItem(1102576, 600, 600, 600, 600, 0, 0, 600, 600, 0, 0, 0, 0, 0, 0);
					cm.sendOk("锻造成功。");
					cm.dispose();
				}
			} else if (selection == 4) {
				if (cm.haveItem(1102576, 1) == false) {
					cm.sendOk("请带来#v1102576#");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4001024, 5) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4251202, 99) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4250002, 300) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(3994731, 300) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4000464, 32) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
				} else {
					cm.gainItem(1102576,-1);
					cm.gainItem(4001024, -38);
					cm.gainItem(4250002, -300);
					cm.gainItem(4251202, -99);
					cm.gainItem(4000464, -32);
					cm.gainItem(3994731, -300);
					cm.gainItem(1102723, 1200, 1200, 1200, 1200, 0, 0, 1200, 1200, 0, 0, 0, 0, 0, 0);
					cm.sendOk("锻造成功。");
					cm.dispose();
				}
			} else if (selection == 5) {
				if (cm.haveItem(1102723, 1) == false) {
					cm.sendOk("请带来#v1102723#");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4001024, 5) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4251202, 99) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4250002, 300) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(3994731, 300) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4000464, 32) == false) {
					cm.sendOk("所需道具数量不足");
					cm.dispose();
				} else {
					cm.gainItem(1102723,-1);
					cm.gainItem(4001024, -38);
					cm.gainItem(4250002, -300);
					cm.gainItem(4251202, -99);
					cm.gainItem(4000464, -32);
					cm.gainItem(3994731, -300);
					cm.gainItem(1102724, 1200, 1200, 1200, 1200, 0, 0, 1200, 1200, 0, 0, 0, 0, 0, 0);
					cm.sendOk("锻造成功。");
					cm.dispose();
				}
			}
		}
	}
}

