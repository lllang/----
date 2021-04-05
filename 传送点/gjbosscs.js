function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
		if (pi.getPlayer().getMapId() == 970030106) {
	pi.warp(970030107,0); 
	    } else if (pi.getPlayer().getMapId() == 970030107) {
	pi.warp(970030108,0);
	    } else if (pi.getPlayer().getMapId() == 970030108) {
	pi.warp(970030109,0);
	    } else if (pi.getPlayer().getMapId() == 970030109) {
	pi.openNpc(9900001,9996);
    } else {
	pi.playerMessage(5, "请击杀当前地图BOSS。");
    }
}}