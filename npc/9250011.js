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
		if (cm.getMeso() < 150000000){//判断多少金币
			cm.sendOk("#e#r没有1E5000万金币无法为你开启传送大门！\r\n\r\n#e#r每人每日可以进入1次,当前进入次数"+cm.getPlayer().getBossLog('wuxianhuoli')+"");
			cm.dispose();
			return;
		}
		if (cm.getPlayerCount(912010000) > 0){
			cm.sendOk("已经有人挑战你无法进入！进入需求:1E5000万金币,299万破功,转生次达到25次");
			cm.dispose();
			return;
		}
		if(cm.getLevel() < 200){//判断等级
			cm.sendOk("请达到250级在进入！进入需求:1E5000万金币,299万破功,转生次达到25次");
			cm.dispose();
			return;
		}
		if (cm.getPlayer().getLimitBreak() < 2999999) {
					cm.sendOk("破功值低于 299W 无法使用此功能进入需求:1E5000万金币,299万破功,转生次达到25次");
					cm.dispose();
							return;
		}
		if (cm.getPlayer().getBossLog("转生",1) < 25){
			cm.sendOk("请达到25次转生进入！进入需求:1E5000万金币,299万破功,转生次达到25次");
			cm.dispose();
			return;
		}
		if (cm.getParty() == null) { // No Party
			cm.sendOk("你没有队伍无法进入！进入需求:1E5000万金币,299万破功,转生次达到25次");
			cm.dispose();
			return;
		}
		if (!cm.isLeader()) {
			cm.sendOk("请让你的队长和我说话~进入需求:1E5000万金币,299万破功,转生次达到25次");
			cm.dispose();
			return;
		}
		if(cm.getPlayer().getBossLog('wuxianhuoli') >= 1){
			cm.sendOk("#e#r每人每日可以进入1次,当前进入次 数"+cm.getPlayer().getBossLog('wuxianhuoli')+"");
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
				cm.sendSimple("PQ遇到了一个错误。请联系GM，与截图.#b#l");
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
					cm.gainMeso(- 150000000);//扣除多少金币
					cm.givePartyBossLog('wuxianhuoli');
					//   cm.spawnMobOnMap(9600009, 1,260,248, 912010000);
					cm.喇叭(3,"[" + cm.getName() + "]进入了恐惧深渊副本,击杀怪物获取强化材料奖励！");
					cm.dispose();
					return;
				} else {
					cm.sendSimple("另一方已进入 #r恐惧深渊副本#k 请等待他们的任务完成.#b#");
					cm.dispose();
				}
			}

		}else {
			cm.sendSimple("申请进入失败。请遵守以下规定:\r\n\r\n#r要求: " + minPartySize + " 队员, 所有级别 " + minLevel + " ~ " + maxLevel + ".#b#l");
			cm.dispose();
		}
	}
}
