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
			cm.sendOk("ֻ�� #r150��#k �ſ��Կ��θø�����");
			cm.dispose();
			 }
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n��ʿ��#d#h ##k���˸���ÿ��/30�Σ��ٻ���Ҫ����֮�ǡ�\r\n\r\n";

		textz += "#b#L0#�⿪��ӡ���ٻ�����--ÿ��30�Ρ�#l\r\n\r\n";
		
		//textz += "#b#L1#�⿪��ӡ���ٻ���ʦ--����BOSS��#l\r\n\r\n";
		
		//textz += "#b#L2#�⿪��ӡ���ٻ�����--����BOSS��#l\r\n\r\n";
		
		//textz += "#r#L3#�⿪��ӡ���ٻ�����--�ĺ�BOSS��#l\r\n\r\n";
		
		//textz += "#r#L5#�⿪��ӡ���ٻ�����--���BOSS��#l\r\n\r\n";
		
		textz += "#r#L4#��Ҫ�뿪#l\r\n\r\n";

		

		cm.sendSimple (textz);  

			
	}else if (status == 1) {
    
	if (selection == 0){
		var party = cm.getPlayer().getParty();	
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("��Ҫ150�������ٻ�.");
                cm.dispose();
	   }else if (cm.getBossLog('PlayQuest50') >= 30) {
			cm.sendOk("�������ս��������30��!");
			cm.dispose();	
	}	if (cm.haveItem(4000186, 1) == false) {
            cm.sendOk("����#i4000186#���߲��㡣");
            cm.dispose();
			}else{ 
                   // cm.sendOk("��ǰ������û�������꣬�޷������ٻ���");
                  //  cm.dispose();
		//}else if(party.getMembers().size() < 0) {
	           // cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
                   // cm.dispose();	
		//}else if (cm.getMeso() >= 5000000) {	//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                        cm.gainItem(4000186,-1);
						cm.setBossLog('PlayQuest50');
                        cm.spawnMonster(8810026,1);
                        cm.dispose();
						cm.����(2,"[��������]�����" + cm.getPlayer().getName() + "�ں�����Ѩ������ˮ��ʹ�ú���֮���ٻ��˺�������ҿ�ǰ����ɱ~");
                       
}

	}else if (selection == 1){
		var party = cm.getPlayer().getParty();
if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("��Ҫ150�������ٻ�.");
                cm.dispose();		
	}else	if (cm.getBossLog('PlayQuest51') >= 1) {
			cm.sendOk("�������ս��������1��!");
			cm.dispose();	
	}	else if (cm.getMeso() < 30000000) {
			cm.sendOk("�����ϲ���3000����!");
			cm.dispose();
			}else{ 
	//	}else if(party.getMembers().size() < 0) {
	 //           cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
     //               cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                        cm.gainMeso(-30000000);
						cm.setBossLog('PlayQuest51');
                        cm.spawnMonster(9400420,1);
                        cm.dispose();
						cm.����(2,"[糺츱��]�����" + cm.getPlayer().getName() + "��ʼ��ս����BOSS����������ȫ������~");
                        
			cm.dispose();			
}
    }else if (selection == 2){
		var party = cm.getPlayer().getParty();
if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("��Ҫ150�������ٻ�.");
                cm.dispose();			
	}else	if (cm.getBossLog('PlayQuest52') >= 1) {
			cm.sendOk("�������ս��������1��!");
			cm.dispose();	
	}	else if (cm.getMeso() < 30000000) {
			cm.sendOk("�����ϲ���3000����!");
			cm.dispose();
			}else{ 
	//	}else if(party.getMembers().size() < 0) {
	//            cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
    //                cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                       cm.gainMeso(-30000000);
					   cm.setBossLog('PlayQuest52');
                        cm.spawnMonster(9400422,1);
                        cm.dispose();
						cm.����(2,"[糺츱��]�����" + cm.getPlayer().getName() + "��ʼ��ս����BOSS����ʼ���ΰ�������!!!");
                       
			cm.dispose();	
}
     }else if (selection == 3){
		var party = cm.getPlayer().getParty();
if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("��Ҫ150�������ٻ�.");
                cm.dispose();			
		}else if (cm.getBossLog('PlayQuest53') >= 1) {
			cm.sendOk("�������ս��������1��!");
			cm.dispose();	
	}	else if (cm.getMeso() < 30000000) {
			cm.sendOk("�����ϲ���3000����!");
			cm.dispose();
			}else{ 
		//}else if(party.getMembers().size() < 0) {
	     //       cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
        //            cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                       cm.gainMeso(-30000000);
					   cm.setBossLog('PlayQuest53');
                        cm.spawnMonster(9400423,1);
                        cm.dispose();
						cm.����(2,"[糺츱��]�����" + cm.getPlayer().getName() + "��ʼ��ս�ĺ�BOSS!!!ϣ�����ܻ��ų���");
                       
			cm.dispose();	
			}
			}else if (selection == 5){
		var party = cm.getPlayer().getParty();
if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                cm.dispose();
				}else if(cm.getLevel() < 150){
	            cm.sendOk("��Ҫ70�������ٻ�.");
                cm.dispose();			
	}else	if (cm.getBossLog('PlayQuest54') >= 1) {
			cm.sendOk("�������ս��������2��!");
			cm.dispose();	
	}	else if (cm.getMeso() < 30000000) {
			cm.sendOk("�����ϲ���3000����!");
			cm.dispose();
			}else{ 
		//}else if(party.getMembers().size() < 0) {
	     //       cm.sendOk("��Ҫ 6 �����ϵ���Ӳſ����ͷ�ǿ���ħ����!");
        //            cm.dispose();	
		//&&cm.haveItem(4001257,1)&&cm.haveItem(4001258,1)&&cm.haveItem(4001259,1)&&cm.haveItem(4001260,1)// #i04001257# #i04001258# #i04001259# #i04001260#
                         cm.gainMeso(-30000000);
						 cm.setBossLog('PlayQuest54');
                        cm.spawnMonster(9400419,1);
                        cm.dispose();
						cm.����(2,"[糺츱��]�����" + cm.getPlayer().getName() + "��ʼ��ս���BOSS,׼�����ܱ�Ű��");
                       
			cm.dispose();	
			}
	     }else if (selection == 4){
			cm.warp(910000000);
			cm.dispose();	
			}
			
}										
}
}

