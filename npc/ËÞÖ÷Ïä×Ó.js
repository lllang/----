
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
		if(cm.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 0  && cm.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 0 ){
        var text  = "                  #d"+�ʹڰ�+" - #r#e��������#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			text += "         "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
			text += "          #n#L4##b��ְҵ[#r����ʦ#b]#l#L5##b��ְҵ[#r����ʦ#b]#l\r\n\r\n"
			text += "         "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
			text += "                  #n#L100##b�һ�[#rɱ�ֵ���#b]#l\r\n"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 1 || cm.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 1){
        var text  = "                  #d"+�ʹڰ�+" - #r#e��������#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			text += "         "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
		
		if(cm.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 1 ){
			text += "       #n#L7##b[#r��������#b]#l#n       #L10##b��ҩ[#r��������#b]]#l\r\n\r\n"
		}
		if(cm.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 1){
			text += "       #n#L15##b[#r��������#b]#l#n      #L109##b����[#rǿ��װ��#b]#l\r\n\r\n"
		}
		
			//text += "       #n#L10##b[#rǿ������#b]#l#L11##b[#rװ������#b]#l#L12##b[#r�����̵�#b]#l\r\n\r\n"
			text += "         "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
			text += "                  #n#L100##b�һ�[#rɱ�ֵ���#b]#l\r\n"
			cm.sendSimple(text);
		}
        }else if(status == 1){
			 if(selection == 2){
				cm.dispose();
				cm.openNpc(9900004,1110006)
				
			}else if(selection == 3){
				cm.dispose();
				cm.openNpc(1063010,99)
				
			}else if(selection == 109){
				cm.dispose();
				cm.openNpc(9310059,1100)
				
			}else if(selection == 7){
				cm.dispose();
				cm.openNpc(9310059,0)
				
			}else if(selection == 8){
				cm.dispose();
				cm.openNpc(1063010,20)
				
			}else if(selection == 9){
				cm.dispose();
				cm.openNpc(9900004,1212121)
				
			}else if(selection == 15){
				cm.dispose();
				cm.openNpc(9310059,1000)
				
			}else if(selection == 10){
				cm.dispose();
				cm.openNpc(9310059,101)
				
			}else if(selection == 11){
				cm.dispose();
				cm.openNpc(9310059,300)
				
			}else if(selection == 12){
				cm.dispose();
				cm.openNpc(9310059,200)
				
			}else if(selection == 100){
				cm.dispose();
				cm.openNpc(1063010,4)
				
			}else if(selection == 4){
			warp = 4;
			cm.sendYesNo(""+�ȵ�+":��#r����ʦ#k��\r\n\r\n"+Բ��+" #d����ʦ�������Ƴ�[#r5#d]�ּ���ĵ�ҩ,#b[��������]#d\r\n"+Բ��+" ��Ӧ����������#r [2,4,6,10,15] #d������\r\n"+Բ��+" #d����ʦ�����Ϊ�弶ÿ����������������ɹ���\r\n"+Բ��+" #dÿ��������Ҫ����#r20000#dɱ�ֵ��Լ�#r5000#d����\r\n\r\n"+��̾��+" ��ְҵ��ɫֻ��ѡһ��,ѡ��#r[����ʦ]#d�Ͳ���ѡ#r[����ʦ]\r\n"+��̾��+" #k�����������?����#k[#r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b50000#k]#k���ɱ�ֵ���תְ");
			
            }else if(selection == 5){
			warp = 5;
			cm.sendYesNo(""+�ȵ�+":��#r����ʦ#k��\r\n\r\n"+Բ��+" #d����ʦ�������Ƴ�[#r5#d]�ּ���ķ���,#b[��������]#d\r\n"+Բ��+" ��Ӧ��װ������#r [1.2.3.4.5] #d�㹥��\r\n"+Բ��+" #d����ʦ�����Ϊ�弶ÿ����������������ɹ���\r\n"+Բ��+" #dÿ��������Ҫ����#r20000#dɱ�ֵ��Լ�#r1#d�ڽ��\r\n\r\n"+��̾��+" ��ְҵ��ɫֻ��ѡһ��,ѡ��#r[����ʦ]#d�Ͳ���ѡ#r[����ʦ]\r\n"+��̾��+" #k�����������?����#k[#r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b50000#k]#k��ɱ�ֵ���תְ");
		
			}
		
		}else if(status == 2) {
			if(warp == 4){
	            if (cm.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 1) {
	                cm.sendOk("���Ѿ�ѡ��������ʦ��!");
					cm.dispose();
	            return false;
	            }
				if(cm.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 50000){ //��Ʒ����
			       cm.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       cm.getPlayer().setAccountLog("ɱ�ֵ���",1,-50000);
				   cm.getPlayer().setOneTimeLog("��ְҵ����ʦ");
				  cm.����(2,"��ְҵ" + " : " + cm.getPlayer().getName() +"���ɹ�ѡ��������ʦ");
				   cm.dispose();
				}else{
				   cm.sendOk("ɱ�ֵ�������5��");
				   cm.dispose();
				}
		    }else if(warp == 5){
	            if (cm.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 1) {
	                cm.sendOk("���Ѿ�ѡ��������ʦ��!");
					cm.dispose();
	            return false;
	            }
				if(cm.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 50000){ //��Ʒ����
			       cm.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       cm.getPlayer().setAccountLog("ɱ�ֵ���",1,-50000);
				   cm.getPlayer().setOneTimeLog("��ְҵ����ʦ");
				   cm.����(2,"��ְҵ" + " : " + cm.getPlayer().getName() +"���ɹ�ѡ��������ʦ");
				   cm.dispose();
				}else{
				   cm.sendOk("ɱ�ֵ�������5��");
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

/*
	}else if(selection == 10000){
		if (cm.getInventory(4).isFull(29) ) {
		    cm.sendOk("#b�������ռ䲻��30��.");	
	           cm.dispose();
	       return false;
		}
		cm.gainExp(50000);
		if(cm.getPlayer().getLevel() <= 230){
		cm.getChar().setLevel(250);
		cm.gainAp(1250);
		}
		cm.gainSp(500);
		cm.gainNX(50000);
		cm.gainMeso(888888888);
		cm.gainItem(4310154,10000);
		cm.gainItem(2049100,10);
		cm.gainItem(2340000,10);
		cm.gainItem(2049306,10);
		cm.gainItem(2049415,10);
		if(cm.getPlayer().getBossLog("lqcs1") < 2){
		cm.gainItem(4000435,999);
		cm.gainItem(4000460,999);
		cm.gainItem(4000461,999);
		cm.gainItem(4000462,999);
		cm.gainItem(4000243,999);
		cm.gainItem(4000235,999);
		cm.gainItem(2210006,10);
		cm.gainItem(4031475,999);
		cm.gainItem(4000382,999);
		cm.gainItem(4000379,999);
		cm.gainItem(4000383,999);
		cm.gainItem(4000431,999);
		cm.gainItem(4000430,999);
		cm.gainItem(4000020,999);
		cm.gainItem(4000021,999);
		cm.gainItem(4000040,999);
		cm.gainItem(4000478,999);
		cm.gainItem(4000037,999);
		cm.gainItem(4000107,999);
		cm.gainItem(4000106,999);
		cm.gainItem(4000025,999);
		cm.gainItem(4000177,999);
		cm.gainItem(4003004,999);
		cm.gainItem(4020008,999);
		cm.gainItem(4000429,999);
		cm.gainItem(4001111,999);
		cm.gainItem(4000000,999);
		cm.gainItem(4000016,999);
		cm.gainItem(4000019,999);
		cm.gainItem(4031026,999);
		cm.gainItem(4000176,999);
		cm.gainItem(4031227,999);
		cm.gainItem(4000245,999);
		cm.gainItem(4000244,999);
		}
		cm.setBossLog("���븱��");
		cm.setBossLog("��������");
		cm.setBossLog("��߸���");
		cm.setBossLog("���︱��");
		cm.setBossLog("��������");
		cm.setBossLog("���븱��");
		cm.setBossLog("��������");
		cm.setBossLog("��߸���");
		cm.setBossLog("���︱��");
		cm.setBossLog("��������");
		cm.getPlayer().setAccountLog('����ʱ��');
		cm.getPlayer().setAccountLog('����ʱ��');
		cm.getPlayer().setAccountLog('����ʱ��');
		cm.getPlayer().setBossLog("lqcs1")
		cm.ˢ��״̬();
		
	    cm.dispose();
			*/