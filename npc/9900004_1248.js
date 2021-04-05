 ////importPackage(Packages.client);
////importPackage(Packages.client.inventory);
////importPackage(Packages.server);
////importPackage(Packages.tools);

var status = -1;



function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
		    var text = "\t\t\t#e欢迎来到#b冒险岛#r师徒系统#k#n\r\n";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "你需要建立师门吗？#r(收徒后不可驱逐出门，请谨慎收徒)#k\r\n"
			text += "#L1#我要建立师门#l			#L6##b师徒系统说明#k\r\n"
			text += "#L2#带徒入门(PS：徒弟做队长，师傅点击我)#l	\r\n"
            text += "#L3#带徒出师(PS：师傅一定不能是队长,且师徒需组队)#l\r\n\r\n"
            text += "#L7#★徒弟拜师后点我#r(加入后不可退出，请谨慎拜师)#l\r\n\r\n"
            cm.sendSimple(text);
    } else if (status == 1){
		if (selection == 1){
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() < 180){ 
				cm.sendOk("你的等级不够159级");
				cm.dispose();
				return;
			}else if(cm.getOneTimeLog("师傅") < 1){
				cm.setOneTimeLog("师傅");
				//cm.师门出师();
				cm.sendOk("你成功建立了师门，赶紧去收徒吧！");
				cm.worldMessage(6,"【师徒系统】[" + cm.getChar().getName() + "]成功建立了师门，要找师傅的赶紧了！");
				cm.dispose();
			} else {
				cm.sendOk("你已经建立过师门了！去收徒吧！");
				cm.dispose();
			}
			
        } else if (selection == 2){
			if (cm.getParty() == null) {
                cm.sendNext("请组队后在来找我！");
                cm.dispose();
                return;
            } else if (cm.allMembersHere() == false){
				cm.sendOk("徒弟或者师傅不在这个地图啊？");
				cm.dispose();
				return;
			} else if (cm.getOneTimeLog("师傅") < 1) {
                cm.sendNext("请让师傅找我对话(PS：师傅一定要是队员)");
                cm.dispose();
                return;
			} else if (cm.isLeader()) {
                cm.sendNext("请让师傅找我对话(PS：师傅一定要是队员)");
                cm.dispose();
                return;
			}
else if (cm.getPlayer().getPrizeLog('shoutu') > 100) {
                cm.sendNext("每个帐号每天只能收100名徒弟，明天再来哦！");
                cm.dispose();
                return;
			}
else if (cm.getOneTimeLog("daitu") > 100) {
                cm.sendNext("你收过的徒弟总数超过100位,是时候把机会让给年轻人了");
                cm.dispose();
                return;
			}
var next = true;
var mapId = cm.getPlayer().getMapId();
var party = cm.getPlayer().getParty().getMembers();
var it = party.iterator();
var cPlayer = it.next();
var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
var TDid = victim.getId();
var a1_1 = cm.getOneTimeLog(TDid);//自己的收徒记录ID
var shoutu = victim.getOneTimeLog(TDid);
var chushi = victim.getOneTimeLog("出师");
var id = cm.getPlayer().getId();
var tcsm = victim.getOneTimeLog("退出师门");
var jrsm = victim.getOneTimeLog(TDid);
			if (victim.getLevel() > 100){
				cm.sendOk("徒弟等级是否已经大于100级了？！");
				cm.dispose();
				return;
			} else if (a1_1 - jrsm - tcsm > 0){
				cm.sendOk("你已经收过这个徒弟了");
				cm.dispose();
				return;
			} else if (shoutu - tcsm != 0 ){
				cm.sendOk("你徒弟已经有师门了");
				cm.dispose();
			} else if (cm.getOneTimeLog("师傅") < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("每次只能带一个徒弟入门（请2人组队）");
				cm.dispose();
				return;
			} else if (cm.getOneTimeLog("收徒") - cm.getOneTimeLog("出师") - tcsm >= 100){
				cm.sendOk("你的师门已经收过100个徒弟了");
				cm.dispose();
				return;
			} else {
					cm.setOneTimeLog("收徒");
                    cm.setOneTimeLog("daitu");
                    cm.getPlayer().setPrizeLog('shoutu');
					cm.givePartyBossLog("收徒");
					cm.setOneTimeLog(TDid);
					cm.sendOk("你成功收了"+victim.getName()+"为徒弟，请提醒徒弟点我确认关系，之后才能生效！");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"师徒系统" + " : ["+ cm.getPlayer().getName() +"]收了["+victim.getName()+"]为徒弟，请徒弟进行确认！",true).getBytes());
					cm.dispose();
					return;
					}
			
		} else if (selection == 3){
			if (cm.getParty() == null) {
                		cm.sendNext("组队后在来找我");
                		cm.dispose();
                		return;
            }else if (cm.getOneTimeLog("师傅") < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
		}
			var next = true;
			var gender = cm.getPlayer().getGender();
			var mapId = cm.getPlayer().getMapId();
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			var cPlayer = it.next();
			var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			var TDid = victim.getId();
			if (cm.isLeader()) {
                		cm.sendNext("请让师傅找我对话(PS：师傅一定要是队员)");
                		cm.dispose();
                		return;
			} else if (victim.getLevel() < 199){
				cm.sendOk("你的徒弟等级不够200级，不能出师！");
				cm.dispose();
			} else if (cm.getOneTimeLog("师傅") < 1){
				cm.sendOk("你还没建立师门呢");
				cm.dispose();
				return;
           	} else if (cm.getOneTimeLog(TDid) == 0){
				cm.sendOk("你确定这是你徒弟吗？？？");
				cm.dispose();
				return;
			} else if (cm.getOneTimeLog(-TDid) == 1){
				cm.sendOk("这个徒弟已经出师了！");
				cm.dispose();
				return;
			} else {
				cm.setOneTimeLog("出师");
				cm.setOneTimeLog(-TDid);			
				
				
				cm.gainNX(+200000);//混沌
				cm.gainItem(4170000,10);
				cm.gainItem(2614000,10);
				cm.gainItem(2531000,2);
				cm.gainItem(2533000,1);
				victim.modifyCSPoints(1,50000);//队友获得
				cm.sendOk("你带徒"+victim.getName()+"出师成功!\r\n获得：徒弟获得5万点券");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"师徒系统" + " : ["+ cm.getPlayer().getName() +"]玩家成功带徒出师["+victim.getName()+"]获得重磅礼包！",true).getBytes());
				cm.dispose();
			}
		} else if (selection == 4){
			cm.sendOk("暂不支持此功能");
			cm.dispose();
			//cm.openNpc(9900004,153);
		} else if (selection == 5){
			var id = cm.getPlayer().getId();
			var tcsm = cm.getOneTimeLog("退出师门");
			var jrsm = cm.getOneTimeLog(id);
			if (jrsm == 0){;
				cm.sendOk("退出师门失败！\r\n你没并没有加入过师门!（注：师傅不可以取消师门）");
				cm.dispose();
			} else if (jrsm - tcsm == 0){
				cm.sendOk("你已经没有师门可以退出了 ，不必再次退出！");
				cm.dispose();
			} else {
				cm.setOneTimeLog("退出师门");
				cm.sendOk("退出师门成功!");
				cm.dispose();
			}
		} else if (selection == 6){
			cm.sendOk("师门系统介绍：\r\n徒弟等级：必须小于100级\r\n师父等于：必须大于180级\r\n\r\n徒弟达到200级即可出师\r\n师父出师获得：#r200000点券、#v4170000#x10、#v2531000#x2、#v2533000#x1、#v2614000#x10。\r\n徒弟获得50000点券\r\n\r\n\r\n");
			cm.dispose();
		} else if (selection == 7){
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() > 179){
				cm.sendOk("师傅不需要确认！");
				cm.dispose();
				return;
			} else if (cm.getBossLog("收徒") >= 1 && cm.getOneTimeLog(id) == 0){
				cm.setOneTimeLog(id);
				cm.sendOk("师徒关系确认成功！");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"师徒系统" + " : ["+ cm.getPlayer().getName() +"]师徒关系确认成功。",true).getBytes());
				cm.dispose();
			} else {
				cm.sendOk("你已经确认过了。或者\r\n");
				cm.dispose();
			}
		}
		
    }
	
}