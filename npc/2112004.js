/* ==================
 �ű�����: ��Ӹ���    
 �ű����ߣ�Point
 ��ϵ��ʽ��1098393331
 =====================
 */

var status = 0;

var fbmc = "����ŷ������Ҷ��Ӹ���";//��������

var eventname = "Romeo";//���������ļ�

var maxjinbi = 50000;//�ж���������

var minLevel = 100;
var maxLevel = 255;//�ȼ�����

var minPartySize = 3;
var maxPartySize = 6;//��������


function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {	
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			if (cm.getMapId() == 926100000) { //inside orbis pq
		cm.sendOk("���ҳ����ص��ŷ⡣");
		cm.dispose();
		return;
	}
			if (cm.getMapId() == 926100001) { //inside orbis pq
		cm.sendOk("���������еĹ��");
		cm.dispose();
		return;
	}
	if (cm.getMapId() == 926100100) { //inside orbis pq
	
		cm.sendOk("�����Ա����ص���ֱ�ӹ���");
		cm.dispose();
		return;
	}
	if (cm.getMapId() == 926100200) { //inside orbis pq
    if (cm.haveItem(4001130,1)) {
		cm.sendOk("Ŷ���ҵ����ҵ��ˣ�лл��");
		cm.gainItem(4001130,-1);
		em.setProperty("stage", "1");
	    } else if (cm.haveItem(4001134,1)) {
		cm.gainItem(4001134,-1);
		cm.sendOk("лл�㣬���ڰ�����#t4001135#.");
		em.setProperty("stage4", "1");
	    } else if (cm.haveItem(4001135,1)) {
		cm.gainItem(4001135,-1);
		cm.sendOk("лл�㣬�Ѿ������ˡ�.");
		em.setProperty("stage4", "2");
		cm.getMap().getReactorByName("rnj3_out3").hitReactor(cm.getClient());
	    } else {
	    	cm.sendOk("�������Ǳ���ֹͣ��ͻ��������ҳ�#t4001134# �� #t4001135#��");
			cm.dispose();
			return;
	    }
		}
	if (cm.getMapId() == 926100300) { //inside orbis pq
		cm.sendOk("����һ��Ҫ��ʵ���ҵĶ�����");
		cm.dispose();
		return;
	}
	if (cm.getMapId() == 926100400) { //inside orbis pq
		cm.sendOk("����׼�����ˣ�����Ҫ��ȥ�Ⱦ��ҵİ���.");
		cm.dispose();
		return;
	}
	if (cm.getMapId() == 926100401) { //inside orbis pq
		cm.warpParty(926100500); //urete
		cm.dispose();
		return;
	}
            text += "#k\t\t\t��ӭ����#r" + fbmc + "#k\r\n";
            text += "��������Ҫ�����£�\r\n";
			text += "�ٵȼ����ƣ�#r" + minLevel + "#k - #r" + maxLevel + "#k��\t\t���������ƣ�#r" + minPartySize + " #k- #r" + maxPartySize + "��Ա#k\r\n";
			text += "#L1##r��ʼ " + fbmc + "#l\r\n\r\n";
            text += "\r\n\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getMapId() == 926100000) { //inside orbis pq
		    cm.sendOk("��Ӧ�ó��������������ء��������е��ļ���ֱ��������ҵ����ʵ����.");
		    cm.dispose();
		return;
	}
    
	    cm.removeAll(4001130);
	    cm.removeAll(4001131);
	    cm.removeAll(4001132);
	    cm.removeAll(4001133);
	    cm.removeAll(4001134);
	    cm.removeAll(4001135);
	}
	if (cm.getMapId() == 261000011) { //inside orbis pq
	if (cm.getParty() == null) { // No Party
	    cm.sendSimple("��ò��û�дﵽҪ��...:\r\n\r\n#r��ҳ�ԱҪ��: " + minPartySize + " , ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");
		cm.dispose();
	} else if (!cm.isLeader()) { // Not Party Leader
	    cm.sendSimple("���������������#b�ӳ�#k ����̸.");
		cm.dispose();
	} else {
	    // Check if all party members are within PQ levels
	    var party = cm.getParty().getMembers();
	    var mapId = cm.getMapId();
	    var next = true;
	    var levelValid = 0;
	    var inMap = 0;
	    var it = party.iterator();

	    while (it.hasNext()) {
		var cPlayer = it.next();
		if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
		    levelValid += 1;
		} else {
		    next = false;
		}
		if (cPlayer.getMapid() == mapId) {
		    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
		}
	    }
	    if (party.size() > maxPartySize || inMap < minPartySize) {
		next = false;
	    }
	    if (next) {
		var em = cm.getEventManager("Romeo");
		if (em == null) {
		    cm.sendSimple("�Ҳ����ű�������GM#b\r\n");
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�");
			cm.dispose();
		    }
		}
	    } else {
		cm.sendSimple("��Ķ���ò��û�дﵽҪ��...:\r\n\r\n#rҪ��: " + minPartySize + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");
	    }
		cm.dispose();
	}
        } else if (selection == 2) {
		if (cm.getMeso() >= maxjinbi){//�ж϶��ٽ��
        cm.gainMeso(- maxjinbi );//�۳����ٽ��
	    cm.laba(cm.getPlayer().getName() + " [������]" + " : " + "["+ fbmc +"]��Ҫ��ʿһ�����",11);
        cm.dispose();
        }else{
        cm.sendOk("���ð�ձҲ���" + maxjinbi + "���޷�����������");
        cm.dispose();
					}	
	}
    }
	}

