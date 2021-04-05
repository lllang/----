function enter(pi) {
	if (pi.haveItem(4032246,1) == false) {
		//pi.playerMessage(5, "This boss may only be attempted on channel 1 and 2");
		pi.playerMessage(5, "没有带来“梦幻主题公园魂魄”");
		//pi.playerMessage(5, "禁止殴打此BOSS。");
		return false;
	}
   /* if (!pi.haveItem(1)) {
	if (pi.getMap(551030200).getSpeedRunStart() == 0 || pi.getMonsterCount(551030200) == 0 ) {
		pi.playPortalSE();
		
		//pi.gainItem(4032246, -24000);//获得物品
		 var FantMap = pi.getMap(551030200);

	    FantMap.resetFully();

	    pi.playPortalSE();
	    pi.warp(551030200, "sp");
	    } else {
		pi.playerMessage(5, "战斗已经开始，所以你可能不会进入这个地方.");
	    }
    } else {*/
	if (pi.getPlayerCount(551030200) == 0 || pi.getMonsterCount(551030200) == 0) { // Fant. Map
	    var FantMap = pi.getMap(551030200);

	    FantMap.resetFully();

	    pi.playPortalSE();
	    pi.warp(551030200, "sp");
	} else {
	    pi.playerMessage(5, "战斗已经开始，无法进入。");
	}
    }