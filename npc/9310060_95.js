status = -1;
/*

自定义内容：Array(物品ID , 抽奖概率, 数量, 是否有喇叭)。 
喇叭那输入0是没有喇叭，输入1是有喇叭。
抽奖概率最大为100则代表容易出，最小为1，则几乎不出
如果没有100的道具，则有概率抽空！

     脚本编写 RCMS-点点 Q号：1098393331
承接脚本编写 - WZ定制修改 - 抖音推广 - 创意玩法

*/

var itemList = Array(

	Array(4442001, 50, 1, 1),
	Array(2340000, 100, 1, 1),
	//Array(2450000, 100, 1, 1),
	//Array(3994731, 30, 1, 1),
	Array(2531006, 20, 1, 1),
	Array(2610001, 1, 1, 1),
	Array(4442001, 1, 1, 1),
	Array(4310148, 60, 1, 1),
	Array(2000005, 70, 100, 1)//此处不可加逗号
	
);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("再见得把油。");
			cm.dispose();
		}
		status--;
	}
	if (status == 0) {
		if (cm.getPlayer().getBossLog("装备合成成功",1) >= 1) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			cm.sendYesNo("恭喜你合成成功！快来抽取你的合成奖励吧！\r\n抽取以下列表内的物品：" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			cm.sendOk("快来抽取你的合成奖励吧！\r\n抽取以下列表内的物品：" + str1);
			cm.dispose();
		}
	} else if (status == 1) {
		var chance = Math.floor(Math.random() * 100);
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
			item = cm.gainGachaponItem(itemId, quantity, "炼丹系统", notice);
			if (item != -1) {
				cm.getPlayer().setBossLog("装备合成成功",1,-1);
				cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
			} else {
				cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
			}
			cm.safeDispose();
		} else {
			cm.getPlayer().setBossLog("装备合成成功",1,-1);
			cm.safeDispose();
		}
	}
}

