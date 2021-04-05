function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		if (pi.getPlayer().getMapId() == 970030101) {
	pi.warp(970030102,0); 
	    } else if (pi.getPlayer().getMapId() == 970030102) {
	pi.warp(970030103,0);
	    } else if (pi.getPlayer().getMapId() == 970030103) {
	pi.warp(970030104,0);
	    } else if (pi.getPlayer().getMapId() == 970030104) {
	pi.warp(970030105,0);
	    } else if (pi.getPlayer().getMapId() == 970030105) {
	pi.openNpc(9900001,9999);
    } else {
	pi.playerMessage(5, "请击杀当前地图BOSS。");
    }
}}