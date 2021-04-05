var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
	Array(1042003, 1042254, 1, 1042255, 1, 1042256, 1, 1042257, 1, 1042258, 1, 4170002, 30, 4000463, 66),//强化升级次数道具
	Array(1062007, 1062165, 1, 1062166, 1, 1062167, 1, 1062168, 1, 1062169, 1, 4170005, 30, 4000463, 66)
);

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
		if (a == -1) {
			cm.dispose();
		} else if (a == 0) {
			text = "这里是神装锻造\r\n";
			for (var i = 0; i < itemlist.length; i++) {
				text += "#L" + i + "#兑换#v" + itemlist[i][0] + "#(#r全属性+100#k)，需要#v" + itemlist[i][1] + "##v" + itemlist[i][3] + "##v" + itemlist[i][5] + "##v" + itemlist[i][7] + "##v" + itemlist[i][9] + "##v" + itemlist[i][11] + "#x" + itemlist[i][12] + "#v" + itemlist[i][13] + "#x" + itemlist[i][14] + "#l\r\n\r\n";
				if (i != 0 && (i + 1) % 99 == 0) {
					text += "\r\n";
				}
			}
			cm.sendSimple(text);
		} else if (a == 1) {
			selects = selection;
			var txt = " - 当前兑换道具：#r#i" + itemlist[selects][0] + "\r\n\r\n"
			cm.sendYesNo(txt);
		} else if (a == 2) {
			jg = selection
			var itemid = itemlist[selects][0];
			if (cm.canHold(itemid) == false) {
				cm.sendOk("您的背包空间不足，请整理后再兑换。");
				cm.dispose();
				return;
			}
			if (cm.haveItem(itemlist[selects][1], itemlist[selects][2])) {
				cm.sendOk("请保证你背包内有足够的道具。");
				cm.dispose();
				return;
			}
			if (cm.haveItem(itemlist[selects][3], itemlist[selects][4])) {
				cm.sendOk("请保证你背包内有足够的道具。");
				cm.dispose();
				return;
			}
			if (cm.haveItem(itemlist[selects][5], itemlist[selects][6])) {
				cm.sendOk("请保证你背包内有足够的道具。");
				cm.dispose();
				return;
			}
			if (cm.haveItem(itemlist[selects][7], itemlist[selects][8])) {
				cm.sendOk("请保证你背包内有足够的道具。");
				cm.dispose();
				return;
			}
			if (cm.haveItem(itemlist[selects][9], itemlist[selects][10])) {
				cm.sendOk("请保证你背包内有足够的道具。");
				cm.dispose();
				return;
			}
			if (cm.haveItem(itemlist[selects][11], itemlist[selects][12])) {
				cm.sendOk("请保证你背包内有足够的道具。");
				cm.dispose();
				return;
			}
			if (cm.haveItem(itemlist[selects][13], itemlist[selects][14])) {
				cm.sendOk("请保证你背包内有足够的道具。");
				cm.dispose();
			} else {
				cm.gainItem(itemlist[selects][0], 100, 100, 100, 100, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0);
				cm.gainItem(itemlist[selects][1], itemlist[selects][2]);
				cm.gainItem(itemlist[selects][3], itemlist[selects][4]);
				cm.gainItem(itemlist[selects][5], itemlist[selects][6]);
				cm.gainItem(itemlist[selects][7], itemlist[selects][8]);
				cm.gainItem(itemlist[selects][9], itemlist[selects][10]);
				cm.gainItem(itemlist[selects][11], itemlist[selects][12]);
				cm.gainItem(itemlist[selects][13], itemlist[selects][14]);
				cm.sendOk("兑换成功。");
				cm.dispose();
			}
		}//mode
	}//f
}