
status = -1;
var itemList = Array(

Array(1132211,1, 1, 1),//海盗
Array(1132212,1, 1, 1),//海盗
Array(1132213,3, 1, 1),//海盗
Array(1132214,1, 1, 1),//海盗
Array(1132215,1, 1, 1),//海盗


Array(1073162,30, 1, 1),//神秘
Array(1073161,30, 1, 1),//神秘
Array(1073160,30, 1, 1),//神秘
Array(1073159,30, 1, 1),//神秘
Array(1073158,30, 1, 1),//神秘
Array(1053067,30, 1, 1),//神秘
Array(1053066,30, 1, 1),//神秘
Array(1053065,30, 1, 1),//神秘
Array(1053064,30, 1, 1),//神秘
Array(1053063,30, 1, 1),//神秘
Array(1004812,30, 1, 1),//神秘
Array(1004811,30, 1, 1),//神秘
Array(1004808,30, 1, 1),//神秘
Array(1004810,30, 1, 1),//神秘
Array(1004809,30, 1, 1),//神秘
Array(1082547,30, 1, 1),//海盗
Array(1082546,30, 1, 1),//飞侠
Array(1082545,30, 1, 1),//弓箭
Array(1082544,30, 1, 1),//魔法
Array(1082543,30, 1, 1),//战士
Array(1132178,30, 1, 1),//战士
Array(1132177,30, 1, 1),//战士
Array(1132176,30, 1, 1),//战士
Array(1132175,30, 1, 1),//战士
Array(1132174,30, 1, 1),//战士
Array(1102485,30, 1, 1),//战士
Array(1102484,30, 1, 1),//战士
Array(1102483,30, 1, 1),//战士
Array(1102482,30, 1, 1),//战士
Array(1102481,30, 1, 1),//战士
Array(1072743,30, 1, 1),//战士
Array(1072744,30, 1, 1),//战士
Array(1072745,30, 1, 1),//战士
Array(1072746,30, 1, 1),//战士
Array(1072747,30, 1, 1),//战士





	
	
	Array(4001126, 50, 300, 1)
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
		if (im.haveItem(2022670, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("消耗1个#v2022670#抽取以下物品!\r\n#k当前拥有:#c2022670# 个。 以下是全部物品:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("消耗1个#v2022670#抽取以下物品!\r\n#k当前拥有:#c2022670# 个。 以下是全部物品:" + str1);
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
			item = im.gainGachaponItem(itemId, quantity, "防具宝箱", "卧槽，这年轻人运气不一般啊！");
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2022670, -1);//获得物品
				im.gainItem(4001126, -100);//获得物品
				im.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
			} else {
				im.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
			}
			im.safeDispose();
		} else {
			im.sendOk("怎么没接住球啊，算了还你宝石吧。");
			// im.setmoneyb(-5);
			//im.gainItem(2022670, 5);//获得物品
			//im.gainNX(1000);	//加减点券
			im.safeDispose();
		}
	}
}















