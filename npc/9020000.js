/* ==================
 �ű�����: ��Ӹ���    
 �ű����ߣ�Point
 ��ϵ��ʽ��1098393331
 =====================
 */

var status;
var fbmc = "��������-(��������)";//��������
var minLevel = 15;
var maxLevel = 255;
var minPartySize = 3;
var maxPartySize = 6;
var maxjinbi = 100;//�ж���������
var eventname = "KerningPQ";//���������ļ�

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else {
        cm.dispose();
        return;
    }
    if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#k\t\t\t\t��ӭ����#r" + fbmc + "#k\r\n��������Ҫ�����£�\r\n����������:#r " + minPartySize + " #b- #r" + maxPartySize + "#k��Ա\t�ڵȼ����ƣ�#r " + minLevel + " #b- #r" + maxLevel + "�� #k\r\n"//3
            text += "#L1##r��ʼ��Ӹ���#l"
            cm.sendSimple(text);
	} else if (selection == 1) {
        if (cm.getParty() == null) { // No Party
            cm.sendOk("��û�ж����޷����룡");
            cm.dispose();
        } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("������Ķӳ�����˵��~");
            cm.dispose();
        } else {
            var party = cm.getParty().getMembers();
            var inMap = cm.partyMembersInMap();
            var levelValid = 0;
            for (var i = 0; i < party.size(); i++) {
                if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
                    levelValid++;
            }
            if (inMap < minPartySize || inMap > maxPartySize) {
                cm.sendOk("��Ķ�����������"+minPartySize+"��.�����Ķ�����Ա�ټ������������ڽ��븱��.");
                //cm.sendOk("Your party is not a party of "+minPartySize+". Please make sure all your members are present and qualified to participate in this quest. I see #b" + inMap + "#k of your party members are in Kerning. If this seems wrong, #blog out and log back in,#k or reform the party.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("��ȷ����Ķ�����Ա��С�ȼ��� "+minLevel+" �� "+maxLevel+"֮��.�������ж�Ա��������״̬,���˳����ߵĶ�Ա");
                cm.dispose();
            } else {
                var em = cm.getEventManager("KerningPQ");
                if (em == null) {
                    cm.sendOk("��̨�����ǵ�ǰ������.");
                //} else if (em.getProperty("KPQOpen").equals("true")) {
                } else {
        if (cm.getPlayerCount(103000800) <= 0 && cm.getPlayerCount(103000801) <= 0 && cm.getPlayerCount(103000802) <= 0 && cm.getPlayerCount(103000803) <= 0 && cm.getPlayerCount(103000804) <= 0) {
		cm.removeAll(4001007);
	    cm.removeAll(4001008);
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
		} else {
                            cm.sendOk("���Ե�...�������ڽ�����.");
                        }
						// Capt. Lac Map
				//em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
                    // Begin the PQ.
                //    em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                    // Remove Passes and Coupons GMS DOESNT DO THIS!!!
                    //party = cm.getPlayer().getEventInstance().getPlayers();
                    //cm.removeFromParty(4001008, party);
                    //cm.removeFromParty(4001007, party);
                  //  em.setProperty("KPQOpen" , "false");
                //} else {
                 //   cm.sendNext("There is already another party inside. Please wait !");
                }
                cm.dispose();
            }
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
		cm.openNpc(9310019,0);
	}
	
		
}