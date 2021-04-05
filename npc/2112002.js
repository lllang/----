var status = -1;
function action(mode, type, selection) {
    if (cm.getMapId() == 926100600) {
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	var em = cm.getEventManager("Romeo");
    if (em != null) {
	var itemid = 4001160;
	if (!cm.canHold(itemid, 1)) {
	    cm.sendOk("背包空间不足.");
	    cm.dispose();
	    return;
	}
	cm.gainItem(itemid, 1);
	if (em.getProperty("stage").equals("2")) {
//    		cm.gainNX(5000);
	if (cm.isLeader()) {//队长
	    //cm.gainItem(4310014,4);
		cm.worldMessage(6,"玩家：["+cm.getName()+"]带领他的队伍失败完成了狗男女副本！朱丽叶死掉了！");
	}
    		cm.gainExpR(140000);
			cm.getPlayer().setBossLog("男女组队",0);
			cm.warp(926100700,0);
	} else {
//		cm.gainNX(3500);
        cm.gainItem(4170017,1);
		//cm.gainAp(3);
		cm.gainExpR(999999);
	if (cm.isLeader()) {//队长
	   // cm.gainItem(4310014,5);
		cm.worldMessage(6,"玩家：["+cm.getName()+"]带领他的队伍成功完成了狗男女副本！他们在一起了！");
	}

		cm.warp(926100700,0);
		cm.dispose();
	}
    }
    cm.getPlayer().endPartyQuest(1205);
    cm.dispose();
    return;
    }
    if (mode > 0) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	cm.sendSimple("#b#L0#让我离开这里#l\r\n");//#L2#给我智慧的岩石#l#k//\r\n#L1#兑换何露丝之眼.#l
    } else {
	if (selection == 0) {
    	    cm.warp(926100600,0);
	} else if (selection == 1) {
	    if (cm.canHold(1122010,1) && cm.haveItem(4001160,25) && cm.haveItem(4001159,25)) {
		cm.gainItem(1122010,1);
		cm.gainItem(4001160,-25);
		cm.gainItem(4001159,-25);
	    } else {
		cm.sendOk("你将需要25个卡帕莱特珠子和25个蒙特鸠珠子得到何露斯的眼睛，以及背包空间.");
	    }
	} else {
	    if (cm.canHold(2041212,1) && (cm.haveItem(4001160,10) || cm.haveItem(4001159,10))) {
		cm.gainItem(2041212,1);
		if (cm.haveItem(4001160,10)) {
			cm.gainItem(4001160,-10);
		} else {
			cm.gainItem(4001159,-10);
		}
	    } else {
		cm.sendOk("You will need 10 of either marble to get Rock of Wisdom, as well as have USE space.");
	    }
	}
    	cm.dispose();
    }
}