
var v = "#fUI/GuildMark/Mark/Letter/00005021/4#";
var �� = "#fUI/GuildMark/Mark/Letter/00005008/4#";
var p = "#fUI/GuildMark/Mark/Letter/00005015/4#";
var �ʹڰ� ="#fUI/GuildMark/Mark/Etc/00009004/15#";
var ���˲� ="#fUI/GuildMark/Mark/Plant/00003006/15#";
var ��ˮ ="#fUI/GuildMark/Mark/Pattern/00004008/15#";
var ������ ="#fUI/Basic/HScr7/disabled/base#";
var ������ ="#fUI/ChatBalloon/tutorial/w#";

var ����è ="#fUI/ChatBalloon/119/n#";
var è�� =  "#fUI/ChatBalloon/119/ne#";
var è�� =  "#fUI/ChatBalloon/119/nw#";
var �� =    "#fUI/ChatBalloon/119/e#";
var �� =    "#fUI/ChatBalloon/119/w#";
  
var ����è ="#fUI/ChatBalloon/119/s#";
var è���� ="#fUI/ChatBalloon/119/se#";
var è���� ="#fUI/ChatBalloon/119/sw#";

var �ʺ�1 ="#fUI/ChatBalloon/122/n#";
var �ʺ���1 =  "#fUI/ChatBalloon/122/ne#";
var �ʺ���2 =  "#fUI/ChatBalloon/122/nw#";
var ��1 =    "#fUI/ChatBalloon/122/e#";
var ��2 =    "#fUI/ChatBalloon/122/w#";
  
var �ʺ��� ="#fUI/ChatBalloon/122/s#";
var �ʺ���1 ="#fUI/ChatBalloon/122/se#";
var �ʺ���2 ="#fUI/ChatBalloon/122/sw#";
var �ʺ��� ="#fUI/ChatBalloon/122/head#";
//
var ÷�� ="#fUI/GuildMark/Mark/Animal/00002008/14#";
var ���� ="#fUI/GuildMark/Mark/Animal/00002020/14#";
var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";//"+Բ��+"
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var �˳� = "#fUI/CN_Chat/ChattingRoom/BtExit/0/mouseOver/0#";
var ���� = "#fUI/UIWindow/Quest/reward#";
var ���� = "#fUI/UIWindow/SoftKeyboard/key/97/mouseOver/0#";
var ������ = "#fSkill/411/skill/4111006/iconMouseOver#";
var ���� = "#fUI/UIWindow/PersonalShop/BtBuy/mouseOver/0#";
var ��ʯ = "#fUI/GuildMark/Mark/Animal/00002006/16#";
var �ȵ� = "#fUI/CashShop/CSChar/BtCoordination/mouseOver/0#";
var �ȼ� = "#fEffect/PetEff/Basic/LevelUp/14#";
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
            cm.sendOk("��л��Ĺ��٣�");
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
		if(cm.getPlayer().getBossLog("����ʦ����",1) == 0){
        var text  = "                  #d"+�ʹڰ�+" - #r#e��������#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			text += "         "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
			text += "                  #n#b����ʦ����:[#r�����ϲ�#b]#l\r\n"
			text += "         "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
			text += "       #n#L1##b[#r��ʼ����#b]#l#L8##b[#r��������#b]#l#L7##b[#r����¯#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("����ʦ����",1) == 1){
        var text  = "                  #d"+�ʹڰ�+" - #r#e��������#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			text += "         "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
			text += "                  #n#b����ʦ����:[#r����ѧͽ#b]#l\r\n"
			text += "         "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
			text += "       #n#L2##b[#r��ʼ����#b]#l#L9##b[#r��������#b]#l#L7##b[#r����¯#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("����ʦ����",1) == 2){
        var text  = "                  #d"+�ʹڰ�+" - #r#e��������#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			text += "         "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
			text += "                 #n#b����ʦ����:[#r�ͼ�����ʦ#b]#l\r\n"
			text += "         "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
			text += "       #n#L3##b[#r��ʼ����#b]#l#L10##b[#r��������#b]#l#L7##b[#r����¯#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("����ʦ����",1) == 3){
        var text  = "                  #d"+�ʹڰ�+" - #r#e��������#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			text += "         "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
			text += "                 #n#b����ʦ����:[#r�м�����ʦ#b]#l\r\n"
			text += "         "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
			text += "       #n#L4##b[#r��ʼ����#b]#l#L11##b[#r��������#b]#l#L7##b[#r����¯#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("����ʦ����",1) == 4){
        var text  = "                  #d"+�ʹڰ�+" - #r#e��������#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			text += "         "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
			text += "                 #n#b����ʦ����:[#r�߼�����ʦ#b]#l\r\n"
			text += "         "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
			text += "       #n#L5##b[#r��ʼ����#b]#l#L12##b[#r��������#b]#l#L7##b[#r����¯#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("����ʦ����",1) == 5){
        var text  = "                  #d"+�ʹڰ�+" - #r#e��������#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			text += "         "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
			text += "                  #n#b����ʦ����:[#r������ʦ#b]#l\r\n"
			text += "         "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
			text += "       #n#L6##b[#r��ʼ����#b]#l#L13##b[#r�����һ�#b]#l#L14##b[#r�����ϳ�#b]#l"
			cm.sendSimple(text);
		}
        }else if(status == 1){
			if (selection == 1) {
				cm.dispose();
				cm.openNpc(9310059,1001)
			}else if(selection == 2) {
				cm.dispose();
				cm.openNpc(9310059,1002)
			}else if(selection == 3) {
				cm.dispose();
				cm.openNpc(9310059,1003)
			}else if(selection == 4) {
				cm.dispose();
				cm.openNpc(9310059,1004)
			}else if(selection == 5) {
				cm.dispose();
				cm.openNpc(9310059,1005)
			}else if(selection == 6) {
				cm.dispose();
				cm.openNpc(9310059,1006)
			}else if(selection == 13) {
				cm.dispose();
				cm.openNpc(9310059,1007)
			}else if(selection == 14) {
				cm.dispose();
				cm.openNpc(9310059,1008)
//--------------------------------------------------------------------------------
			}else if(selection == 7){
				warp = 7;
				cm.sendYesNo(""+����+"\r\n\r\n"+Բ��+" ����[#r#v3010109#��¯#k]��Ҫ����:\r\n\r\n"+��̾��+" ɱ�ֵ���#k[#r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b5000#k]#k");
			}else if(selection == 8){
			    warp = 8;
			    cm.sendYesNo(""+�ȼ�+"\r\n\r\n"+Բ��+" ��Ҫ[#d#v 3990000# #z 3990000##k] #r#c3990000##k/#b2#k\r\n"+Բ��+" �ɹ���������:[#r"+cm.getPlayer().getBossLog("�ɹ���������",1)+"#k/#b10#k]��\r\n"+Բ��+" ����ɱ�ֵ���:#k[#r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b100000#k]#k\r\n"+Բ��+" ���ı������:[#r"+cm.getPlayer().getMeso()+"#k/#b100000000#k]\r\n"+Բ��+" ����������������������:\r\n\r\n"+��̾��+" :#b#v3990000# +0%#v3990001# +4%#v3990002# +3%#v3990003# +2%#v3990004# +1%#k\r\n"+��̾��+" ʧ���ʼ���#r -10%#k");
			}else if(selection == 9){
			    warp = 9;
			    cm.sendYesNo(""+�ȼ�+"\r\n\r\n"+Բ��+" ��Ҫ[#d#v 3990001# #z 3990001##k] #r#c3990001##k/#b2#k\r\n"+Բ��+" �ɹ���������:[#r"+cm.getPlayer().getBossLog("�ɹ���������",1)+"#k/#b30#k]��\r\n"+Բ��+" ����ɱ�ֵ���:#k[#r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b150000#k]#k\r\n"+Բ��+" ���ı������:[#r"+cm.getPlayer().getMeso()+"#k/#b200000000#k]\r\n"+Բ��+" ����������������������:\r\n\r\n"+��̾��+" :#b#v3990000# +0%#v3990001# +4%#v3990002# +3%#v3990003# +2%#v3990004# +1%#k\r\n"+��̾��+" ʧ���ʼ���#r -10%#k");
			}else if(selection == 10){
			    warp = 10;
			    cm.sendYesNo(""+�ȼ�+"\r\n\r\n"+Բ��+" ��Ҫ[#d#v 3990002# #z 3990002##k] #r#c3990002##k/#b2#k\r\n"+Բ��+" �ɹ���������:[#r"+cm.getPlayer().getBossLog("�ɹ���������",1)+"#k/#b60#k]��\r\n"+Բ��+" ����ɱ�ֵ���:#k[#r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b200000#k]#k\r\n"+Բ��+" ���ı������:[#r"+cm.getPlayer().getMeso()+"#k/#b300000000#k]\r\n"+Բ��+" ����������������������:\r\n\r\n"+��̾��+" :#b#v3990000# +0%#v3990001# +4%#v3990002# +3%#v3990003# +2%#v3990004# +1%#k\r\n"+��̾��+" ʧ���ʼ���#r -10%#k");
			}else if(selection == 11){
			    warp = 11;
			    cm.sendYesNo(""+�ȼ�+"\r\n\r\n"+Բ��+" ��Ҫ[#d#v 3990003# #z 3990003##k] #r#c3990003##k/#b2#k\r\n"+Բ��+" �ɹ���������:[#r"+cm.getPlayer().getBossLog("�ɹ���������",1)+"#k/#b100#k]��\r\n"+Բ��+" ����ɱ�ֵ���:#k[#r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b300000#k]#k\r\n"+Բ��+" ���ı������:[#r"+cm.getPlayer().getMeso()+"#k/#b500000000#k]\r\n"+Բ��+" ����������������������:\r\n\r\n"+��̾��+" :#b#v3990000# +0%#v3990001# +4%#v3990002# +3%#v3990003# +2%#v3990004# +1%#k\r\n"+��̾��+" ʧ���ʼ���#r -10%#k");
			}else if(selection == 12){
			    warp = 12;
			    cm.sendYesNo(""+�ȼ�+"\r\n\r\n"+Բ��+" ��Ҫ[#d#v 3990004# #z 3990004##k] #r#c3990004##k/#b2#k\r\n"+Բ��+" �ɹ���������:[#r"+cm.getPlayer().getBossLog("�ɹ���������",1)+"#k/#b150#k]��\r\n"+Բ��+" ����ɱ�ֵ���:#k[#r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b500000#k]#k\r\n"+Բ��+" ���ı������:[#r"+cm.getPlayer().getMeso()+"#k/#b1000000000#k]\r\n"+Բ��+" ����������������������:\r\n\r\n"+��̾��+" :#b#v3990000# -10%#v3990001# +5%#v3990002# +5%#v3990003# +5%#v3990004# +5%#k\r\n"+��̾��+" ʧ���ʼ���#r -10%#k");
			
			}
			
		}else if(status == 2) {
			if(warp == 7){
				if(cm.getInventory(3).isFull(0)){
					cm.sendOk("���������಻��1���ո�");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 5000){ //��Ʒ����
			       cm.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       cm.getPlayer().setAccountLog("ɱ�ֵ���",1,-5000);
                   cm.gainItem(3010109,1);
				   cm.sendOk("����ɹ�");
				   cm.����(2,"����¯" + " : " + cm.getPlayer().getName() +"������ʦ���ճ�,�޷Ǿ�����һ���µĵ�¯");
				   cm.dispose();
				}else{
				   cm.sendOk("ɱ�ֵ�������5000");
				   cm.dispose();
   		
                }
		    }else if(warp == 8){//
				if(cm.getPlayer().getBossLog("�ɹ���������",1) < 10){
					cm.sendOk("��ɹ�������������10��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("����ʦ����",1) == 1){
					cm.sendOk("���Ѿ���������,����������ϵGM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 100000000){
					cm.sendOk("���Ҳ���1��");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990000,2)){
					cm.sendOk("��ȱ��1����Ʒ����2��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 100000){ //��Ʒ����
			       cm.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       cm.getPlayer().setAccountLog("ɱ�ֵ���",1,-100000);
                   cm.getPlayer().setBossLog("����ʦ����",1)
                   cm.gainItem(3990000,-2);
				   cm.sendOk("�����ɹ�");
				   cm.����(2,"����ѧͽ" + " : " + cm.getPlayer().getName() +"����ϲ�ɹ�����Ϊ����ѧͽ");
				   cm.dispose();
				}else{
				   cm.sendOk("ɱ�ֵ�������10��");
				   cm.dispose();
   		
                }
		    }else if(warp == 9){//
				if(cm.getPlayer().getBossLog("�ɹ���������",1) < 30){
					cm.sendOk("��ɹ�������������30��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("����ʦ����",1) == 2){
					cm.sendOk("���Ѿ���������,����������ϵGM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 200000000){
					cm.sendOk("���Ҳ���2��");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990001,2)){
					cm.sendOk("��ȱ��2����Ʒ����2��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 150000){ //��Ʒ����
			       cm.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       cm.getPlayer().setAccountLog("ɱ�ֵ���",1,-150000);
                   cm.getPlayer().setBossLog("����ʦ����",1)
                   cm.gainItem(3990001,-2);
				   cm.sendOk("�����ɹ�");
				   cm.����(2,"�ͼ�����ʦ" + " : " + cm.getPlayer().getName() +"����ϲ�ɹ�����Ϊ�ͼ�����ʦ");
				   cm.dispose();
				}else{
				   cm.sendOk("ɱ�ֵ�������15��");
				   cm.dispose();
   		
                }
		    }else if(warp == 10){//
				if(cm.getPlayer().getBossLog("�ɹ���������",1) < 60){
					cm.sendOk("��ɹ�������������60��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("����ʦ����",1) == 3){
					cm.sendOk("���Ѿ���������,����������ϵGM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 300000000){
					cm.sendOk("���Ҳ���3��");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990002,2)){
					cm.sendOk("��ȱ��3����Ʒ����2��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 200000){ //��Ʒ����
			       cm.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       cm.getPlayer().setAccountLog("ɱ�ֵ���",1,-200000);
                   cm.getPlayer().setBossLog("����ʦ����",1)
                   cm.gainItem(3990002,-2);
				   cm.sendOk("�����ɹ�");
				   cm.����(2,"�м�����ʦ" + " : " + cm.getPlayer().getName() +"����ϲ�ɹ�����Ϊ�м�����ʦ");
				   cm.dispose();
				}else{
				   cm.sendOk("ɱ�ֵ�������20��");
				   cm.dispose();
   		
                }
		    }else if(warp == 11){//
				if(cm.getPlayer().getBossLog("�ɹ���������",1) < 100){
					cm.sendOk("��ɹ�������������100��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("����ʦ����",1) == 4){
					cm.sendOk("���Ѿ���������,����������ϵGM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 500000000){
					cm.sendOk("���Ҳ���5��");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990003,2)){
					cm.sendOk("��ȱ��4����Ʒ����2��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 300000){ //��Ʒ����
			       cm.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       cm.getPlayer().setAccountLog("ɱ�ֵ���",1,-300000);
                   cm.getPlayer().setBossLog("����ʦ����",1)
                   cm.gainItem(3990003,-2);
				   cm.sendOk("�����ɹ�");
				   cm.����(2,"�߼�����ʦ" + " : " + cm.getPlayer().getName() +"����ϲ�ɹ�����Ϊ�߼�����ʦ");
				   cm.dispose();
				}else{
				   cm.sendOk("ɱ�ֵ�������30��");
				   cm.dispose();
   		
                }
		    }else if(warp == 12){//
				if(cm.getPlayer().getBossLog("�ɹ���������",1) < 150){
					cm.sendOk("��ɹ�������������150��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("����ʦ����",1) == 5){
					cm.sendOk("���Ѿ���������,����������ϵGM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 1000000000){
					cm.sendOk("���Ҳ���10��");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990004,2)){
					cm.sendOk("��ȱ��5����Ʒ����2��");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 500000){ //��Ʒ����
			       cm.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       cm.getPlayer().setAccountLog("ɱ�ֵ���",1,-500000);
                   cm.getPlayer().setBossLog("����ʦ����",1)
                   cm.gainItem(3990004,-2);
				   cm.sendOk("�����ɹ�");
				   cm.����(2,"������ʦ" + " : " + cm.getPlayer().getName() +"����ϲ�ɹ�����Ϊ������ʦ");
				   cm.dispose();
				}else{
				   cm.sendOk("ɱ�ֵ�������50��");
				   cm.dispose();
   		
                }
		    }
		}   
    }
}


function packageHave(type,number){
	var object = -1;
	var count = 0;
	var flag = true;
//	for(var i = 0;i<32;i++){
//		object = cm.getInventory(type).getItem(i);
//		if(null == object){
//			count++;
//			if(count>=number){
//				flag = false;
//				break;
//			}
//		}
//	}
	return flag;
}