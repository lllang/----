

var status;
var fbmc = "��������-(��������)";//��������
var minLevel = 50;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var eventname = "ZakumBattle";//���������ļ�

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
            text += " 		 �� #rð �� �� - �� �� �� �� �� ��#k ��\r\n\r\n"//3
			text += "- ��������Ҫ�� \r\n\r\n"//3
			text += "- �����������ƣ� [#r " + minPartySize + " #k] - [#r " + maxPartySize + " #k]\r\n\r\n"//3
			text += "- �����ȼ����ƣ� [#b " + minLevel + " #k] - [#b " + maxLevel + " #k]\r\n\r\n"//3
            text += "			#L0##r��ʼ��Ӹ���#l 			#l\r\n"//3
            cm.sendSimple(text);
	} else if (selection == 0) {
        if (cm.getParty() == null) { 
            cm.sendOk("��û�ж����޷����룡");
            cm.dispose();
        } else if (!cm.isLeader()) { 
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
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("��ȷ����Ķ�����Ա��С�ȼ��� "+minLevel+" �� "+maxLevel+"֮��.�������ж�Ա��������״̬,���˳����ߵĶ�Ա");
                cm.dispose();
            } else {
                var em = cm.getEventManager(eventname);
                if (em == null) {
                    cm.sendOk("��̨�����ǵ�ǰ������.");
                } else {
        if (cm.getPlayerCount(280030000) <= 0) {
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
				cm.givePartyBossLog("��ս����Զ����");
				cm.getMap(280030000).resetFully();
		} else {
                            cm.sendOk("���Ե�...�������ڽ�����.");
                        }
                }
                cm.dispose();
            }
        } } } 
		
