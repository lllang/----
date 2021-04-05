
status = -1;
var itemList = Array(
Array(4310080, 1, 1, 1),
Array(4001126, 500, 1, 1),
Array(4001126, 500, 2, 1),
Array(4001126, 500, 3, 1),
Array(4001126, 500, 4, 1),
Array(4001126, 500, 5, 1),
Array(4001126, 500, 6, 1),
Array(4001126, 500, 7, 1),
Array(4001126, 500, 8, 1),
Array(4001126, 500, 9, 1),
Array(4001126, 500, 10, 1)
	

);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			im.sendOk("再见得把油。");
			im.dispose();
		}
		status--;
	}
	if (status == 0) {
		if (im.haveItem(2550002, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("消耗1个#v2550002#抽取以下物品!\r\n#k当前拥有:#c2550002# 个。 以下是全部物品:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("消耗1个#v2550002#抽取以下物品!\r\n#k当前拥有:#c2550002# 个。 以下是全部物品:" + str1);
			im.dispose();
		}
	} else if (status == 1) {
		var chance = Math.floor(Math.random() * 500);
		var finalitem = Array();
		for (var i = 0; i < itemList.length; i++) {
			if (itemList[i][1] >= chance) {
				finalitem.push(itemList[i]);
			}
		}
		if (finalitem.length != 0) {
			var item;
			var random = new java.util.Random();
			var finalchance = random.nextInt(finalitem.length);
			var itemId = finalitem[finalchance][0];
			var quantity = finalitem[finalchance][2];
			var notice = finalitem[finalchance][3];
			item = im.gainGachaponItem(itemId, quantity, "GM宝箱", "打开了GM遗落的宝箱获得大量枫叶！");
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2550002, -1);//获得物品
				im.gainMeso(-0);
				im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
			} else {
				im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
			}
			im.safeDispose();
		} else {
			im.sendOk("怎么没接住球啊，算了还你宝石吧。");
			// im.setmoneyb(-5);
			//im.gainItem(2550002, 5);//获得物品
			//im.gainNX(1000);	//加减点券
			im.safeDispose();
		}
	}
}















