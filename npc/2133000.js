/* ==================
 �ű�����: ��Ӹ���    
 �ű����ߣ�Point
 ��ϵ��ʽ��1098393331
 =====================
 */
var status = -1;
var fbmc = "����ɭ��-(������)";//��������
var minLevel = 50;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var maxjinbi = 50000;//�ж���������
var eventname = "Ellin";//���������ļ�

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#k\t\t\t\t��ӭ����#r" + fbmc + "#k\r\n��������Ҫ�����£�\r\n����������:#r " + minPartySize + " #b- #r" + maxPartySize + "#k��Ա\t�ڵȼ����ƣ�#r " + minLevel + " #b- #r" + maxLevel + "�� #k\r\n"//3
            text += "#L0##r��ʼ��Ӹ���#l     \r\n"//3
            cm.sendSimple(text);
    } else if (status == 1) {
	if (selection == 0) {
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("�����Ķӳ�������̸����");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < minLevel || ccPlayer.getLevel() > maxLevel) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? minPartySize : 1);
		}	
		if (next && size >= minPartySize) {
			var em = cm.getEventManager("Ellin");
			if (em == null) {
				cm.sendOk("��ǰ���������⣬���������Ա....");
			} else {
				var prop = em.getProperty("state");
                if (prop.equals("0") || prop == null) {
					em.startInstance(cm.getParty(), cm.getMap());
					cm.dispose();
					return;
				} else {
					cm.sendOk("�����Ѿ�������,�����Ժ��ڽ��뿴��,�����ǻ�Ƶ");
				}
			}
		} else {
			cm.sendOk("��Ķ���" +minPartySize+ "��(��)����" +minLevel+ "~" +maxLevel+ "�Ķ�Ա���ܽ���");
		}

	cm.dispose();
    }

	} else if (selection == 1){
            if (cm.getMeso() >= maxjinbi){//�ж϶��ٽ��
                cm.gainMeso(- maxjinbi );//�۳����ٽ��
				cm.laba(cm.getPlayer().getName() + " [������]" + " : " + "[" + fbmc + "]��Ҫ��ʿһ�����",11);
                cm.dispose();
                }else{
                    cm.sendOk("���ð�ձҲ���" + maxjinbi + "���޷�����������");
                    cm.dispose();
	    }
		}
			    }
	    }