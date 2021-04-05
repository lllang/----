function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple("#b#L1##d我到终点了，我要领奖出去！ \n\#l");//#L2##r货币      兑换   卷轴\n\#l\r\n
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 1) {	
		cm.gainItem(2022428,1);
		cm.gainItem(4001126,100);
	    cm.喇叭(1, "[" + cm.getPlayer().getName() + "]通过向高地跳跳获得箱子枫叶*100奖励~");
		cm.warp(910000000);
		cm.getPlayer().setAccountLog("高地跳跳",0);
		//cm.worldMessage(6,"【活动】["+cm.getName()+"]通过了跳跳地图！");
		cm.dispose();;//卷轴换币
	}
	else if (selection == 2) {
	cm.openNpc(9330042, 2);//币换卷轴
	}
	else if (selection == 3) {
	cm.openNpc(9330042, 3);//枫叶换装备
	}
	else if (selection == 4) {
	cm.openNpc(9330042, 4);//超级枫叶系列
	}
	else if (selection == 5) {
	cm.openNpc(9330042, 5);//副本币系列
	}
	else if (selection == 6) {
	cm.openNpc(9330042, 6);//副本币系列
	}
	else if (selection == 7) {
	cm.openNpc(9330042, 7);//抽御守
	}
}
