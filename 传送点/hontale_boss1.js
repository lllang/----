function enter(pi) {
   var em = pi.getEventManager("HorntailBattle");
   pi.warp(240060200)

    if (em != null) {
	var prop = em.getProperty("preheadCheck");
pi.warp(240060200)
	if (prop != null && prop.equals("0")) {
//	    pi.mapMessage(6, "The enromous creature is approaching from the deep cave.")
	    em.setProperty("preheadCheck", "1");
		pi.warp(240060200)
	}
    }
}