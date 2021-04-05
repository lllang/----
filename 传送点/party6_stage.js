function enter(pi) {
	switch(pi.getMapId()) {
		case 930000000:
			pi.warp(930000100,0);
			break;
		case 930000100:
		
		
		if (pi.isLeader()) {
			if (pi.getMap().getAllMonstersThreadsafe().size() < 20) {
				//pi.warp(930000200,0);
				pi.warpParty(930000200);
			} else {
				//pi.playerMessage(5, "請消滅所有怪物。");
				pi.playerMessage(5, "请同时消灭更多的怪物，当前怪物剩余："+pi.getMap().getAllMonstersThreadsafe().size());
			}
			
			}else{
		pi.playerMessage(5, "请同时消灭更多的怪物，然后队长带你们进入下一关。当前怪物剩余："+pi.getMap().getAllMonstersThreadsafe().size());
				}
			
			
			break;
		case 930000200:
			if (pi.getMap().getReactorByName("spine") != null && pi.getMap().getReactorByName("spine").getState() < 4) {
				//pi.playerMessage(5, "請消推塊。");
				pi.playerMessage(5, "请净化那颗植物。");
			} else {
				pi.warp(930000300,0); //assuming they cant get past reactor without it being gone
			}
			break;
	}
}