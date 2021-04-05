var status = -1;
var minLevel = 200; // 35
var maxLevel = 255; // 65

var minPartySize = 1;
var maxPartySize = 1;

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}

	if (status == 0) {
		if (cm.getMapId() == 912010000) {
			cm.warp(910000000);
		}
		if (cm.getMeso() < 150000000){//�ж϶��ٽ��
			cm.sendOk("#e#rû��1E5000�����޷�Ϊ�㿪�����ʹ��ţ�\r\n\r\n#e#rÿ��ÿ�տ��Խ���1��,��ǰ�������"+cm.getPlayer().getBossLog('wuxianhuoli')+"");
			cm.dispose();
			return;
		}
		if (cm.getPlayerCount(912010000) > 0){
			cm.sendOk("�Ѿ�������ս���޷����룡��������:1E5000����,299���ƹ�,ת���δﵽ25��");
			cm.dispose();
			return;
		}
		if(cm.getLevel() < 200){//�жϵȼ�
			cm.sendOk("��ﵽ250���ڽ��룡��������:1E5000����,299���ƹ�,ת���δﵽ25��");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getLimitBreak() < 2999999) {
					cm.sendOk("�ƹ�ֵ���� 299W �޷�ʹ�ô˹��ܽ�������:1E5000����,299���ƹ�,ת���δﵽ25��");
					cm.dispose();
							return;
		}
		if (cm.getPlayer().getBossLog("ת��",1) < 25){
			cm.sendOk("��ﵽ25��ת�����룡��������:1E5000����,299���ƹ�,ת���δﵽ25��");
			cm.dispose();
			return;
		}
		if (cm.getParty() == null) { // No Party
			cm.sendOk("��û�ж����޷����룡��������:1E5000����,299���ƹ�,ת���δﵽ25��");
			cm.dispose();
			return;
		}
		if (!cm.isLeader()) {
			cm.sendOk("������Ķӳ�����˵��~��������:1E5000����,299���ƹ�,ת���δﵽ25��");
			cm.dispose();
			return;
		}
		if(cm.getPlayer().getBossLog('wuxianhuoli') >= 1){
			cm.sendOk("#e#rÿ��ÿ�տ��Խ���1��,��ǰ����� ��"+cm.getPlayer().getBossLog('wuxianhuoli')+"");
			cm.dispose();
			return;
		}
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
		if (inMap > maxPartySize || inMap < minPartySize) {
			next = false;
		}
		if (next) {

			var em = cm.getEventManager("knsy");
			if (em == null) {
				cm.sendSimple("PQ������һ����������ϵGM�����ͼ.#b#l");
			} else {
				var prop = em.getProperty("state");
				if (prop == null || prop.equals("0")) {
					for (var i = 4001095; i < 4001099; i++) {
						cm.givePartyItems(i, 0, true);
					}
					for (var i = 4001100; i < 4001101; i++) {
						cm.givePartyItems(i, 0, true);
					}
                                        cm.getC().getChannelServer().getMapFactory().getMap(912010000).resetReactors();
					em.startInstance(cm.getParty(), cm.getMap());
					cm.gainMeso(- 150000000);//�۳����ٽ��
					cm.givePartyBossLog('wuxianhuoli');
					//   cm.spawnMobOnMap(9600009, 1,260,248, 912010000);
					cm.����(3,"[" + cm.getName() + "]�����˿־���Ԩ����,��ɱ�����ȡǿ�����Ͻ�����");
					cm.dispose();
					return;
				} else {
					cm.sendSimple("��һ���ѽ��� #r�־���Ԩ����#k ��ȴ����ǵ��������.#b#");
					cm.dispose();
				}
			}

		}else {
			cm.sendSimple("�������ʧ�ܡ����������¹涨:\r\n\r\n#rҪ��: " + minPartySize + " ��Ա, ���м��� " + minLevel + " ~ " + maxLevel + ".#b#l");
			cm.dispose();
		}
	}
}
