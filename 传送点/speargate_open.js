/*
Stage 2: Exit Door - Guild Quest

@Author Lerk
*/

function enter(pi) {
    if (pi.getMap().getReactorByName("speargate").getState() == 4) {
        pi.warp(990000401);
        return true;
    } else {
	var map = pi.getPlayer().getEventInstance().getMapFactory().getMap(990000440);
	if (map.getReactorByName("spear1").getState() >= 1 && map.getReactorByName("spear2").getState() >= 1 &&
		map.getReactorByName("spear3").getState() >= 1 && map.getReactorByName("spear4").getState() >= 1) {
		//reactors activated ....
        pi.playerMessage("前往下一关，祝你们好运。");
        		pi.warp(990000401);
        		return true;
		//just in case, we aren't giving gp (:
	}
        pi.playerMessage("请把4个枪安置好本关正确的地方再让你们通过。");
        return false;
    }
}