function enter(pi) {
	if(pi.getPlayer().getLevel() >= 50){
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
	pi.gainExp(0);pi.warp(925100100,0); //next
    } else {
	pi.playerMessage(5, "The portal is not opened yet.");
    }
	} else {
	pi.playerMessage(5, "哇塞~!你的等级不足50~!玩不了的亲爱的.");
	}
}