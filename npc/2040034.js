/* ==================
 脚本类型: 组队副本    
 脚本作者：Point
 联系方式：1098393331
 =====================
 */


var status = 0;
//副本名称
var fbmc = "玩具城-(玩具塔101副本)";

var eventname = "LudiPQ";//副本配置文件

var maxjinbi = 100000;//判断征集令金币

var minLevel = 35;
var maxLevel = 255;//等级设置

var minPartySize = 2;
var maxPartySize = 6;//人数设置

var open = true;//false true//其他设置

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

            cm.sendOk("感谢你的光临！");
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
            text += "#k\t\t\t欢迎来到#b" + fbmc + "#k\r\n";
            text += "副本进入要求如下：\r\n";
			text += "①等级限制：#r" + minLevel + "#k - #r" + maxLevel + "#k级\t\t②人数限制：#r" + minPartySize + " #k- #r" + maxPartySize + "队员#k\r\n";
			text += "#L1##r开始 " + fbmc + "#l\r\n\r\n";
            //text += "#L2##r副本征集令#k" + maxjinbi + "金币/次#l\r\n\r\n";
			//text += "#L3##r我要兑换全属性20攻击15 #v1022073##z1022073##l\r\n\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
	cm.removeAll(4001022);
	cm.removeAll(4001023);
        if (!cm.isLeader()) { // Not Party Leader
	   cm.sendSimple("如果你想做任务，请 #b队长#k 跟我谈."); 
	   cm.dispose();
	} else if (cm.getParty() == null) { // No Party
	   cm.sendSimple("你貌似没有达到要求...:\r\n\r\n#r玩家成员要求: " + minPartySize + " , 每个人的等级必须在 " + minLevel + " 到 等级 " + maxLevel + ".");
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
		    cm.sendSimple("找不到脚本请联络GM#b\r\n");//#L0#我要兑换有裂痕的眼镜#l
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
			cm.removeAll(4001022);
			cm.removeAll(4001023);
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("其他队伍已经在里面做 #r组队任务了#k 请尝试换频道或者等其他队伍完成。");//#b\r\n#L0#我要兑换有裂痕的眼镜#l
		    cm.dispose();
			}
		}
	    } else {
		cm.sendSimple("你的队伍貌似没有达到要求...:\r\n\r\n#r要求: " + minPartySize + " 玩家成员, 每个人的等级必须在 " + minLevel + " 到 等级 " + maxLevel + ".");//#b\r\n#L0#我要兑换有裂痕的眼镜#l
		cm.dispose();
	    }
	cm.dispose();
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
	var cmp = cm.getPlayer().getOneInfo(1202, "cmp");
	if (cm.haveItem(1022073,1)) {
	    cm.sendOk("做好了。");
	} else if (!cm.canHold(1022073,1)) {
	    cm.sendOk("请空出一些装备拦空间。");
	} else if (cmp != null && parseInt(cmp) >= 60) {
	    if (cm.getPlayer().getOneInfo(1202, "have") == null || cm.getPlayer().getOneInfo(1202, "have").equals("0")) {
	    	cm.gainItem(1022073,4,20,20,20,500,500,15,15,0,0,0,0,5,5);//小恐龙云豆帽子
	    } else {
		cm.sendOk("你已经有#t1022073#了.");
	    }
	} else {
	    cm.sendOk("你还没有做#r60次#k任务 目前做了: #r" + (cmp == null ? "0" : cmp) + "#k次");
	}
	cm.dispose();
					}	
	}
    }




