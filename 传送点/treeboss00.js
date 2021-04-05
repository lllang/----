function enter(pi) {
    
	 if (pi.isLeader()) {
	
	if (pi.getPlayerCount(541020800) <= 0) { // krex. Map
	var krexMap = pi.getMap(541020800);

	krexMap.resetFully();

	pi.playPortalSE();
	//pi.warp(541020800, "sp");
	pi.warpParty(541020800);
	return true;
    } else {
	if (pi.getMap(541020800).getSpeedRunStart() == 0 && (pi.getMonsterCount(541020800) <= 0 || pi.getMap(541020800).isDisconnected(pi.getPlayer().getId()))) {
	    pi.playPortalSE();
	    //pi.warp(541020800, "sp");
	pi.warpParty(541020800);
	    return true;
	} else {
pi.gainItem(4032323, 1);//获得物品
	    pi.playerMessage(5, "有人正在挑战，无法进入。");
	    return false;
	}
    } 
	} else {
		pi.playerMessage(5, "你不是队长，让队长带你们进入。");
	    }
}