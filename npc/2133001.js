var status = -1;
 
 
 
function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    switch(cm.getPlayer().getMapId()) {
	case 930000000:
	    cm.sendNext("��ӭ������롣");
	    break;
	case 930000100:
	    cm.sendNext("���Ǳ�������������Щ�������Ⱦ��");
	    break;
	case 930000200:
	    cm.sendNext("��ѹ��������м��#r���ϴ���#k,���ϡ�͵Ķ���,һ��Ҫ#r4ƿ#kŶ��Ȼ�����ұߵ�����һƿƿ���ӳ���ͨ������!");
	    break;
	case 930000300:
	    cm.warpParty(930000400);
	    break;
	case 930000400:
	    if (cm.haveItem(4001169,0)) {
        cm.warpParty(930000500, 0);
		cm.gainItem(4001169,-10);
	    } else if (!cm.haveItem(2270004)) {
		cm.gainItem(2270004,10);
		cm.sendOk("�������Ķ�Ա����10��#v4001169#,�뾻����Щ����ĺ�����!");
	    } else {
		cm.sendOk("����Ҫ������Щ����Ⱦ�Ĺ�����Ҵ����ǹ������ʯ!");
	    }
	    break;
	case 930000600:
	    cm.sendNext("����#v4001163#�����������ħ����̳��");
	    break;
	case 930000700:
            if (cm.canHold(4001198,1)) {
				cm.getPlayer().setBossLog("�������",0);
                cm.gainExpR(1400000);
				cm.gainItem(4170001,1);
				//cm.gainItem(4002002, 1);//muyao��Ʊ
	            //cm.gainItem(4031456, 2);//��Ҷ��
				//cm.gainAp(2);
				//cm.gainItem(4310014, 1);
	        cm.getPlayer().endPartyQuest(1206);
	        cm.removeAll(4001161);
	        cm.removeAll(4001162);
	        cm.removeAll(4001163);
	        cm.removeAll(4001164);
	        cm.removeAll(4001169);
	        cm.removeAll(2270004);
	if (cm.isLeader()) {//�ӳ�
	   // cm.gainItem(4310014,2);
		cm.worldMessage(6,"��ң�["+cm.getName()+"]�������Ķ���ɹ�����˶�������");
	}
	        cm.warp(930000800,0);
	} else {
		cm.getPlayer().dropMessage(5, "��ȷ�������������û����");
	}
	    break;
    }
    cm.dispose();
}
