/* ==================
 �ű�����: ��Ӹ���    
 �ű����ߣ�Point
 ��ϵ��ʽ��1098393331
 =====================
 */


var status = 0;
//��������
var fbmc = "��߳�-(�����101����)";

var eventname = "LudiPQ";//���������ļ�

var maxjinbi = 100000;//�ж���������

var minLevel = 35;
var maxLevel = 255;//�ȼ�����

var minPartySize = 2;
var maxPartySize = 6;//��������

var open = true;//false true//��������

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
            text += "#k\t\t\t��ӭ����#b" + fbmc + "#k\r\n";
            text += "��������Ҫ�����£�\r\n";
			text += "�ٵȼ����ƣ�#r" + minLevel + "#k - #r" + maxLevel + "#k��\t\t���������ƣ�#r" + minPartySize + " #k- #r" + maxPartySize + "��Ա#k\r\n";
			text += "#L1##r��ʼ " + fbmc + "#l\r\n\r\n";
            //text += "#L2##r����������#k" + maxjinbi + "���/��#l\r\n\r\n";
			//text += "#L3##r��Ҫ�һ�ȫ����20����15 #v1022073##z1022073##l\r\n\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
	cm.removeAll(4001022);
	cm.removeAll(4001023);
        if (!cm.isLeader()) { // Not Party Leader
	   cm.sendSimple("��������������� #b�ӳ�#k ����̸."); 
	   cm.dispose();
	} else if (cm.getParty() == null) { // No Party
	   cm.sendSimple("��ò��û�дﵽҪ��...:\r\n\r\n#r��ҳ�ԱҪ��: " + minPartySize + " , ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");
	   cm.dispose();
	} else {
		cm.getMap(922010401).resetFully();
		cm.getMap(922010402).resetFully();
		cm.getMap(922010403).resetFully();
		cm.getMap(922010404).resetFully();
		cm.getMap(922010405).resetFully();
		cm.spawnMobOnMap(9300008,1,-65,-1578,922010401);
		cm.spawnMobOnMap(9300008,1,335,131,922010402);
		cm.spawnMobOnMap(9300014,1,-610,177,922010403);
		cm.spawnMobOnMap(9300014,1,-669,189,922010404);
		cm.spawnMobOnMap(9300014,1,-610,177,922010405);
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
		var em = cm.getEventManager("LudiPQ");
		if (em == null) {
		    cm.sendSimple("�Ҳ����ű�������GM#b\r\n");//#L0#��Ҫ�һ����Ѻ۵��۾�#l
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
			cm.removeAll(4001022);
			cm.removeAll(4001023);
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�");//#b\r\n#L0#��Ҫ�һ����Ѻ۵��۾�#l
		    cm.dispose();
			}
		}
	    } else {
		cm.sendSimple("��Ķ���ò��û�дﵽҪ��...:\r\n\r\n#rҪ��: " + minPartySize + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");//#b\r\n#L0#��Ҫ�һ����Ѻ۵��۾�#l
		cm.dispose();
	    }
	cm.dispose();
    }		
        } else if (selection == 2) {
		if (cm.getMeso() >= maxjinbi){//�ж϶��ٽ��
        cm.gainMeso(- maxjinbi );//�۳����ٽ��
	    cm.laba(cm.getPlayer().getName() + " [������]" + " : " + "[" + fbmc + "]��Ҫ��ʿһ�����",11);
        cm.dispose();
        }else{
        cm.sendOk("���ð�ձҲ���" + maxjinbi + "���޷�����������");
        cm.dispose();
					}	
        } else if (selection == 3) {
	var cmp = cm.getPlayer().getOneInfo(1202, "cmp");
	if (cm.haveItem(1022073,1)) {
	    cm.sendOk("�����ˡ�");
	} else if (!cm.canHold(1022073,1)) {
	    cm.sendOk("��ճ�һЩװ�����ռ䡣");
	} else if (cmp != null && parseInt(cmp) >= 60) {
	    if (cm.getPlayer().getOneInfo(1202, "have") == null || cm.getPlayer().getOneInfo(1202, "have").equals("0")) {
	    	cm.gainItem(1022073,4,20,20,20,500,500,15,15,0,0,0,0,5,5);//С�����ƶ�ñ��
	    } else {
		cm.sendOk("���Ѿ���#t1022073#��.");
	    }
	} else {
	    cm.sendOk("�㻹û����#r60��#k���� Ŀǰ����: #r" + (cmp == null ? "0" : cmp) + "#k��");
	}
	cm.dispose();
					}	
	}
    }




