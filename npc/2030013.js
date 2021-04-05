

var status;
var fbmc = "废弃都市-(废弃副本)";//副本名称
var minLevel = 50;
var maxLevel = 255;
var minPartySize = 1;
var maxPartySize = 6;
var eventname = "ZakumBattle";//副本配置文件

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
            text += " 		 “ #r冒 险 岛 - 扎 昆 组 队 副 本#k ”\r\n\r\n"//3
			text += "- 副本进入要求： \r\n\r\n"//3
			text += "- 副本人数限制： [#r " + minPartySize + " #k] - [#r " + maxPartySize + " #k]\r\n\r\n"//3
			text += "- 副本等级限制： [#b " + minLevel + " #k] - [#b " + maxLevel + " #k]\r\n\r\n"//3
            text += "			#L0##r开始组队副本#l 			#l\r\n"//3
            cm.sendSimple(text);
	} else if (selection == 0) {
        if (cm.getParty() == null) { 
            cm.sendOk("你没有队伍无法进入！");
            cm.dispose();
        } else if (!cm.isLeader()) { 
            cm.sendOk("请让你的队长和我说话~");
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
                cm.sendOk("你的队伍人数不足"+minPartySize+"人.请把你的队伍人员召集到废弃都市在进入副本.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("请确保你的队伍人员最小等级在 "+minLevel+" 和 "+maxLevel+"之间.或者你有队员处于离线状态,请退出下线的队员");
                cm.dispose();
            } else {
                var em = cm.getEventManager(eventname);
                if (em == null) {
                    cm.sendOk("这台电脑是当前不可用.");
                } else {
        if (cm.getPlayerCount(280030000) <= 0) {
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
				cm.givePartyBossLog("挑战扎昆远征队");
				cm.getMap(280030000).resetFully();
		} else {
                            cm.sendOk("请稍等...任务正在进行中.");
                        }
                }
                cm.dispose();
            }
        } } } 
		
