function enter(pi) {
    if (pi.haveItem(1) && pi.getPlayer().getSkillLevel(5121010) <= 0) {
       pi.gainItem(4031179,0);
        pi.warp(922020300, 0);
        return true;
    }
/*    if (!pi.haveItem(4031172)) {
        return false;
    }*/
    if (pi.getPlayerCount(220080001) <= 0) { // Papu Map
        var papuMap = pi.getMap(220080001);

        papuMap.resetFully();

        pi.playPortalSE();
       pi.gainItem(4031179, 0);
        pi.warp(220080001, "st00");
        return true;
    } else {
        if (pi.getMap(220080001).getSpeedRunStart() == 0 && (pi.getMonsterCount(220080001) <= 0 || pi.getMap(220080001).isDisconnected(pi.getPlayer().getId()))) {
            pi.playPortalSE();
       pi.gainItem(4031179, 0);
            pi.warp(220080001, "st00");
            return true;
        } else {
            pi.playerMessage(5, "对抗闹钟BOSS的挑战已经开始了，你不能进入到里面。");
            return false;
        }
    }

    /*    
    var canEnter = false;

    if (pi.haveItem(4031172)) { // Ludibrium Medal
	var currenttime = new Date().getTime();
	var record = pi.getQuestRecord(7200);
	var diff = currenttime - record.getCompletionTime();
	
	// After 1 day
	if (diff >= 86400000) { // 24 hours
	    record.setCompletionTime(currenttime);
	    record.setCustomData("1");
	    canEnter = true;
	} else {
	    var recordData = record.getCustomData();
	    if (recordData == null || recordData.equals("")) {
		record.setCompletionTime(currenttime);
		record.setCustomData("1");
		canEnter = true;
	    } else if (recordData.equals("1")) {
		record.setCustomData("2");
		canEnter = true;
	    }
	}
    } else {
	return false;
    }
    if (!canEnter) {
	pi.playerMessage(5, "时塔的本源一天只能进入两次。");
	return false;
    }*/
}