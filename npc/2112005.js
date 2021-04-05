function action(mode, type, selection) {
    var em = cm.getEventManager("Juliet");
    if (em == null) {
	cm.sendOk("请稍后再试.");
	cm.dispose();
	return;
    }
    switch(cm.getPlayer().getMapId()) {
	case 261000021:
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("党的领导人必须在这里.");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 70 || ccPlayer.getLevel() > 120) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && (cm.getPlayer().isGM() || size == 4)) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
		} else {
			cm.sendOk("贵党的全部4成员必须是在这里和上面的71级.");
		}
	    }
	    break;
	case 926110000:
	    cm.sendOk("你应该尝试在这里调查各地。看看在库中的文件，直到你可以找到入口实验室.");
	    break;
	case 926110001:
	    cm.sendOk("请，消除所有的怪物！我会来你后面的权利.");
	    break;
	case 926110100:
	    cm.sendOk("这些烧杯中都有泄漏。我们必须倒入液体可疑的烧杯“洋溢所以我们可以继续.");
	    break;
	case 926110200:
	    if (cm.haveItem(4001131,1)) {
		cm.sendOk("呵呵，信我写的！谢谢!");
		cm.gainItem(4001131,-1);
		em.setProperty("stage", "1");
	    } else if (cm.haveItem(4001134,1)) {
		cm.gainItem(4001134,-1);
		cm.sendOk("谢谢大家！现在，请找到文件Zenumist.");
		em.setProperty("stage4", "1");
	    } else if (cm.haveItem(4001135,1)) {
		cm.gainItem(4001135,-1);
		cm.sendOk("谢谢大家！现在，请 继续.");
		em.setProperty("stage4", "2");
		cm.getMap().getReactorByName("jnr3_out3").hitReactor(cm.getClient());
	    } else {
	    	cm.sendOk("我们必须停止Alcadno和Zenumist之间的冲突！第一个找到我Alcadno文件，然后Zenumist!");
	    }
	    break;
	case 926110300:
	    cm.sendOk("我们一定要到实验室的顶部，每个成员.");
	    break;
	case 926110400:
	    cm.sendOk("当你准备好了，我们要快去救救我的爱人.");
	    break;
	case 926110401:
	    cm.warpParty(926110500); //urete
	    break;
    }
    cm.dispose();
}