/* ==================
 脚本类型: 组队副本    
 脚本作者：Point
 联系方式：1098393331
 =====================
 */

var status;
var fbmc = "废弃都市-(废弃副本)";//副本名称
var minLevel = 15;
var maxLevel = 255;
var minPartySize = 3;
var maxPartySize = 6;
var maxjinbi = 100;//判断征集令金币
var eventname = "KerningPQ";//副本配置文件

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
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += "#k\t\t\t\t欢迎来到#r" + fbmc + "#k\r\n副本进入要求如下：\r\n①人数限制:#r " + minPartySize + " #b- #r" + maxPartySize + "#k队员\t②等级限制：#r " + minLevel + " #b- #r" + maxLevel + "级 #k\r\n"//3
            text += "#L1##r开始组队副本#l"
            cm.sendSimple(text);
	} else if (selection == 1) {
        if (cm.getParty() == null) { // No Party
            cm.sendOk("你没有队伍无法进入！");
            cm.dispose();
        } else if (!cm.isLeader()) { // Not Party Leader
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
                //cm.sendOk("Your party is not a party of "+minPartySize+". Please make sure all your members are present and qualified to participate in this quest. I see #b" + inMap + "#k of your party members are in Kerning. If this seems wrong, #blog out and log back in,#k or reform the party.");
                cm.dispose();
            } else if (levelValid != inMap) {
                cm.sendOk("请确保你的队伍人员最小等级在 "+minLevel+" 和 "+maxLevel+"之间.或者你有队员处于离线状态,请退出下线的队员");
                cm.dispose();
            } else {
                var em = cm.getEventManager("KerningPQ");
                if (em == null) {
                    cm.sendOk("这台电脑是当前不可用.");
                //} else if (em.getProperty("KPQOpen").equals("true")) {
                } else {
        if (cm.getPlayerCount(103000800) <= 0 && cm.getPlayerCount(103000801) <= 0 && cm.getPlayerCount(103000802) <= 0 && cm.getPlayerCount(103000803) <= 0 && cm.getPlayerCount(103000804) <= 0) {
		cm.removeAll(4001007);
	    cm.removeAll(4001008);
                em.startInstance(cm.getParty(), cm.getPlayer().getMap());
		} else {
                            cm.sendOk("请稍等...任务正在进行中.");
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
            if (cm.getMeso() >= maxjinbi){//判断多少金币
                cm.gainMeso(- maxjinbi );//扣除多少金币
				cm.laba(cm.getPlayer().getName() + " [征集令]" + " : " + "[" + fbmc + "]需要勇士一起完成",11);
                cm.dispose();
                }else{
                    cm.sendOk("你的冒险币不足" + maxjinbi + "。无法发送征集令");
                    cm.dispose();
				}
	} else if (selection == 3) {
		cm.openNpc(9310019,0);
	}
	
		
}