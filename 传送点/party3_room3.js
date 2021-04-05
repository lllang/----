function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.isLeader()) {
		//pi.warpParty(920010400);
		pi.warp(920010400);
		pi.playPortalSE();
	} else {
		//pi.playerMessage(5,"請隊長進入洞口。");
		pi.warp(920010400);
		pi.playPortalSE();
	}
}