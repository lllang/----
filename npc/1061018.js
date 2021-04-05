function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0) { //貌似爪子打完以后还会算成两个怪，这里有bug
		//cm.warpPlayer(105100300, 105100301); //进奖励地图
		//cm.warpPlayer(105100300, 105100100); //不进奖励地图
		cm.warp(105100100,0);//传动到地图中间
		cm.dispose();
	} else {
		cm.sendYesNo("你确定要离开这个地图嘛？？");
	}
}

function action(mode, type, selection) {
    if (mode == 1) {
		//cm.warpPlayer(105100300, 105100100);
		cm.warp(105100100,0);//传动到地图中间
    }
    cm.dispose();
}