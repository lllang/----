 //importPackage(net.sf.cherry.client);
var status = 0;

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		 if (cm.getLevel() < 150 ) {
			cm.sendOk("只有 #r150级#k 才可以开肝该副本。");
			cm.dispose();
			 }
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n勇士；#d#h ##k，此副本每日/30次，召唤需要黑龙之角。\r\n\r\n";

		textz += "#b#L0#解开封印【召唤黑龙--每日30次】#l\r\n\r\n";
		
		//textz += "#b#L1#解开封印【召唤法师--二号BOSS】#l\r\n\r\n";
		
		//textz += "#b#L2#解开封印【召唤弓手--三号BOSS】#l\r\n\r\n";
		
		//textz += "#r#L3#解开封印【召唤飞侠--四号BOSS】#l\r\n\r\n";
		
		//textz += "#r#L5#解开封印【召唤海盗--五号BOSS】#l\r\n\r\n";
		
		textz += "#r#L4#我要离开#l\r\n\r\n";

		

		cm.sendSimple (textz);  

			
	}else if (status == 1) {
    
	if (selection == 0){
		var party = cm.getPlayer().getParty();	
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("你不是队长。请你们队长来说话吧！");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("需要150级才能召唤.");
                cm.dispose();
	   }else if (cm.getBossLog('PlayQuest50') >= 30) {
			cm.sendOk("你今天挑战次数超过30次!");
			cm.dispose();	
	}	if (cm.haveItem(4000186, 1) == false) {
            cm.sendOk("所需#i4000186#道具不足。");
            cm.dispose();
			}else{ 
                   // cm.sendOk("当前船长并没有清理完，无法继续召唤！");
                  //  cm.dispose();
		//}else if(party.getMembers().size() < 0) {
	           // cm.sendOk("需要 6 人以上的组队才可以释放强大的魔法！!");
                   // cm.dispose();	
		//}else if (cm.getMeso() >= 5000000) {	//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                        cm.gainItem(4000186,-1);
						cm.setBossLog('PlayQuest50');
                        cm.spawnMonster(8810026,1);
                        cm.dispose();
						cm.喇叭(2,"[暗黑龙王]：玩家" + cm.getPlayer().getName() + "在黑龙巢穴，树根水晶使用黑龙之角召唤了黑龙王大家快前往击杀~");
                       
}

	}else if (selection == 1){
		var party = cm.getPlayer().getParty();
if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("你不是队长。请你们队长来说话吧！");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("需要150级才能召唤.");
                cm.dispose();		
	}else	if (cm.getBossLog('PlayQuest51') >= 1) {
			cm.sendOk("你今天挑战次数超过1次!");
			cm.dispose();	
	}	else if (cm.getMeso() < 30000000) {
			cm.sendOk("你身上不足3000万金币!");
			cm.dispose();
			}else{ 
	//	}else if(party.getMembers().size() < 0) {
	 //           cm.sendOk("需要 6 人以上的组队才可以释放强大的魔法！!");
     //               cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                        cm.gainMeso(-30000000);
						cm.setBossLog('PlayQuest51');
                        cm.spawnMonster(9400420,1);
                        cm.dispose();
						cm.喇叭(2,"[绯红副本]：玩家" + cm.getPlayer().getName() + "开始挑战二号BOSS，治疗阳痿全靠他了~");
                        
			cm.dispose();			
}
    }else if (selection == 2){
		var party = cm.getPlayer().getParty();
if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("你不是队长。请你们队长来说话吧！");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("需要150级才能召唤.");
                cm.dispose();			
	}else	if (cm.getBossLog('PlayQuest52') >= 1) {
			cm.sendOk("你今天挑战次数超过1次!");
			cm.dispose();	
	}	else if (cm.getMeso() < 30000000) {
			cm.sendOk("你身上不足3000万金币!");
			cm.dispose();
			}else{ 
	//	}else if(party.getMembers().size() < 0) {
	//            cm.sendOk("需要 6 人以上的组队才可以释放强大的魔法！!");
    //                cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                       cm.gainMeso(-30000000);
					   cm.setBossLog('PlayQuest52');
                        cm.spawnMonster(9400422,1);
                        cm.dispose();
						cm.喇叭(2,"[绯红副本]：玩家" + cm.getPlayer().getName() + "开始挑战三号BOSS，开始爆肝啊啊啊啊!!!");
                       
			cm.dispose();	
}
     }else if (selection == 3){
		var party = cm.getPlayer().getParty();
if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("你不是队长。请你们队长来说话吧！");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("需要150级才能召唤.");
                cm.dispose();			
		}else if (cm.getBossLog('PlayQuest53') >= 1) {
			cm.sendOk("你今天挑战次数超过1次!");
			cm.dispose();	
	}	else if (cm.getMeso() < 30000000) {
			cm.sendOk("你身上不足3000万金币!");
			cm.dispose();
			}else{ 
		//}else if(party.getMembers().size() < 0) {
	     //       cm.sendOk("需要 6 人以上的组队才可以释放强大的魔法！!");
        //            cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                       cm.gainMeso(-30000000);
					   cm.setBossLog('PlayQuest53');
                        cm.spawnMonster(9400423,1);
                        cm.dispose();
						cm.喇叭(2,"[绯红副本]：玩家" + cm.getPlayer().getName() + "开始挑战四号BOSS!!!希望他能活着出来");
                       
			cm.dispose();	
			}
			}else if (selection == 5){
		var party = cm.getPlayer().getParty();
if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("你不是队长。请你们队长来说话吧！");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("需要70级才能召唤.");
                cm.dispose();			
	}else	if (cm.getBossLog('PlayQuest54') >= 1) {
			cm.sendOk("你今天挑战次数超过2次!");
			cm.dispose();	
	}	else if (cm.getMeso() < 30000000) {
			cm.sendOk("你身上不足3000万金币!");
			cm.dispose();
			}else{ 
		//}else if(party.getMembers().size() < 0) {
	     //       cm.sendOk("需要 6 人以上的组队才可以释放强大的魔法！!");
        //            cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                         cm.gainMeso(-30000000);
						 cm.setBossLog('PlayQuest54');
                        cm.spawnMonster(9400419,1);
                        cm.dispose();
						cm.喇叭(2,"[绯红副本]：玩家" + cm.getPlayer().getName() + "开始挑战五号BOSS,准备接受暴虐吧");
                       
			cm.dispose();	
			}
	     }else if (selection == 4){
			cm.warp(910000000);
			cm.dispose();	
			}
			
}										
}
}

