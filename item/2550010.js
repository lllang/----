
status = -1;
var itemList = Array(
	Array(2041332, 30, 1, 1),
	Array(2047954, 3, 1, 1),
	Array(2041226, 3, 1, 1),
	Array(2590000, 3, 1, 1),
	Array(2640011, 3, 1, 1),
	Array(2613001, 3, 1, 1),
	Array(2022423, 50, 1, 1),
	Array(2022424, 50, 1, 1),
	
	
	
	
	
	Array(4310080, 1, 1, 1),
	Array(4032733, 5, 1, 1),
	Array(2049323, 30, 1, 1),
	Array(2040874, 25, 1, 1),
	Array(2040875, 25, 1, 1),
	// Array(3994731, 25, 1, 1),
	//Array(3994578, 50, 1, 1),
	//Array(3994578, 20, 5, 1),
	Array(2614000, 2, 1, 1),
	Array(2614001, 1, 1, 1)
	//Array(2022670, 10, 1, 1),
	//Array(2022678, 10, 1, 1),
	//Array(4001126, 50, 5, 1),
	//Array(4001126, 30, 10, 1),
	//Array(4001126, 20, 50, 1),
	//Array(4001126, 10, 100, 1)
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
		if (im.haveItem(2550010, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("消耗1个#v2550010#抽取以下物品!\r\n#k当前拥有:#c2550010# 个。 以下是全部物品:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("消耗1个#v2550010#抽取以下物品!\r\n#k当前拥有:#c2550010# 个。 以下是全部物品:" + str1);
			im.dispose();
		}
	} else if (status == 1) {
		var chance = Math.floor(Math.random() * 50);
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
			item = im.gainGachaponItem(itemId, quantity, " BOSS宝箱", "开启了击杀BOSS掉落的宝箱获得了丰厚的额外奖励");
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2550010, -1);//获得物品
				//im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
			} else {
				im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
			}
			im.safeDispose();
		} else {
			im.sendOk("怎么没接住球啊，算了还你宝石吧。");
			// im.setmoneyb(-5);
			//im.gainItem(2550010, 5);//获得物品
			//im.gainNX(1000);	//加减点券
			//im.safeDispose();
		}
	}
}















