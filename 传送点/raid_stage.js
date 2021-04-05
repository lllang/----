function enter(pi) {
	if (pi.getMapId() == 970032700) {
		pi.openNpc(9000037,1)
	} else if (!pi.dojoAgent_NextMap(false, false)) {
	pi.playerMessage("请击杀地图上的怪物。");
    }
}