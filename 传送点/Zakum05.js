/*
    Zakum Entrance
*/

function enter(pi) {
      if (!pi.haveItem(4001017)) {
	pi.playerMessage(5, "由于你没有火焰之眼，所以不能挑战扎昆。");
	  } else if (pi.getBossLog("进入扎昆") > 100) {
	pi.playerMessage(5, "每日只能进入 “2” 次，无法再次进入。");	
      } else if (pi.getChar().getLevel() < 10) {
	pi.playerMessage(5, "等级低于 “130级” 无法进入。");	
	  } else {   
    pi.playPortalSE();
	pi.setBossLog("进入扎昆")
    pi.warp(pi.getPlayer().getMapId() + 100, "west00");
    return true;
}}