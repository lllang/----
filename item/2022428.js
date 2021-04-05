
status = -1;
var itemList = Array(
	Array(2614000, 3, 1, 1),//1W破
	Array(2614001, 1, 1, 1),//10W破
	Array(2613008, 1, 1, 1),//紫钻
	Array(2533000, 3, 1, 1),//70%卷
	Array(2531000, 4, 1, 1),//防爆
	Array(2047954, 6, 1, 1),//鱼王
	Array(2047926, 5, 1, 1),//技能
	Array(2048600, 4, 1, 1),//技能
	Array(2041226, 6, 1, 1),//绯红
	Array(2041332, 10, 1, 1),//普通
	Array(2049600, 4, 1, 1)//点状
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
		if (im.haveItem(2022428, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("消耗1个#v2022428#抽取以下物品!\r\n#k当前拥有:#c2022428# 个。 以下是全部物品:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("消耗1个#v2022428#抽取以下物品!\r\n#k当前拥有:#c2022428# 个。 以下是全部物品:" + str1);
			im.dispose();
		}
	} else if (status == 1) {
		var chance = Math.floor(Math.random() * 10);
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
			item = im.gainGachaponItem(itemId, quantity, "跳跳宝箱", notice);
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2022428, -1);//获得物品
				im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "张，恭喜哦。");
			} else {
				im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
			}
			im.safeDispose();
		} else {
			im.sendOk("怎么没接住球啊，算了还你宝石吧。");
			// im.setmoneyb(-5);
			//im.gainItem(2022428, 5);//获得物品
			//im.gainNX(1000);	//加减点券
			im.safeDispose();
		}
	}
}















