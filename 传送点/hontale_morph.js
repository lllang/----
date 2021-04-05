function enter(pi) {
   // pi.openNpc(2081005);
	
	if (pi.getParty() == true) {
		pi.playerMessage(5, "只能单人进入，无法组队。");
	return false;
	}
	if (pi.getPlayer().getLevel() < 160) {
		pi.playerMessage(5, "只有160级以上才可以来挑战。");
	return false;
	}
	if (pi.getBossLog("挑战黑龙次数") > 1) {
		pi.playerMessage(5, "今日挑战次数已达到上限，点击→_→NPC可以提高一次挑战次数。");
	return false;
	}
        pi.warp(240050400,0);
		
}