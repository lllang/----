var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
	case 930000500:
	    if (!cm.haveItem(4001163)) {
	    	cm.sendNext("��#b#v4001163##k�������ҡ�");
	    } else {
                if (cm.isLeader()) {//�ӳ�
	            //cm.gainItem(4310014,2);
				cm.warpParty(930000600);
	}
	    }
	    break;
    }
    cm.dispose();
}