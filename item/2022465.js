
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
        im.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {
            im.sendOk("��л��Ĺ��٣�");
            im.dispose();
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
		if(im.getPlayer().getBossLog("�������",1) == 0){
        var text  = "                  #d"+�ʹڰ�+" - #r#e�������#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			text += "         "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
			text += "                #L1##b#e�����ȡ�������#b#l\r\n\r\n"
			text += "        "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
            im.sendSimple(text);
		}
		
		if(im.getPlayer().getBossLog("�������",1) > 0){
                im.dispose();
				im.openNpc(9900004,0)
		
		}
		
        }else if(status == 1){
			if (selection == 1) {
				if (im.getPlayer().getBossLog("�������",1) > 0){
					im.sendOk("���Ѿ���ȡ��������פ�����");
					im.dispose();
				}else if(!packageHave(1,7)){
					im.sendOk("װ�������಻��7���ո�");
					im.dispose();
				}else if(!packageHave(2,2)){
					im.sendOk("���������಻��2���ո�");
					im.dispose();
				}else if(!packageHave(5,1)){
					im.sendOk("�ֽ������಻��1���ո�");
					im.dispose();
				}else{
				    //im.gainItem(5211060,1,1);//3������һ��
					if (im.getPlayer().getGender()==0){
						//im.gainItem(1142477,2,2,2,2,200,200,2,2,2,2,2,2,2,2);//����ѫ��
					}else{
						//im.gainItem(1142477,2,2,2,2,200,200,2,2,2,2,2,2,2,2);//����ѫ��
					}
					
					//im.used();//ɾ�������Ʒ
					im.getPlayer().setBossLog('�������',1,1);
					im.sendOk("��ȡ�ɹ���");
                    Packages.handling.world.World.Broadcast.broadcastMessage
                    (Packages.tools.MaplePacketCreator.serverNotice(2,im.getC().getChannel(),
                    "[�������]" + " : " + "["+im.getName()+"] ��ȡ�����ð�յ��������~~",true));
					im.dispose();
				}
			}else if(selection == 2){
				im.dispose();
				im.openNpc(9900004,1110006)
				
			}else if(selection == 3){
				im.dispose();
				im.openNpc(1063010,99)
				
			}else if(selection == 7){
				im.dispose();
				im.openNpc(9310059,0)
				
			}else if(selection == 8){
				im.dispose();
				im.openNpc(1063010,20)
				
			}else if(selection == 9){
				im.dispose();
				im.openNpc(9900004,1212121)
				
			}else if(selection == 15){
				im.dispose();
				im.openNpc(9310059,1000)
				
			}else if(selection == 10){
				im.dispose();
				im.openNpc(9310059,100)
				
			}else if(selection == 11){
				im.dispose();
				im.openNpc(9310059,300)
				
			}else if(selection == 12){
				im.dispose();
				im.openNpc(9310059,200)
				
			}else if(selection == 100){
				im.dispose();
				im.openNpc(1063010,4)
				
			}else if(selection == 4){
			warp = 4;
			im.sendYesNo(""+�ȵ�+":��#r����ʦ#k��\r\n\r\n"+Բ��+" #d����ʦ�������Ƴ�[#r5#d]�ּ���ĵ�ҩ,#b[��������]#d\r\n"+Բ��+" ��Ӧ����������#r [2,4,6,10,15] #d������\r\n"+Բ��+" #d����ʦ�����Ϊ�弶ÿ����������������ɹ���\r\n"+Բ��+" #dÿ��������Ҫ����#r20000#dɱ�ֵ��Լ�#r5000#d����\r\n\r\n"+��̾��+" ��ְҵ��ɫֻ��ѡһ��,ѡ��#r[����ʦ]#d�Ͳ���ѡ#r[����ʦ]\r\n"+��̾��+" #k�����������?����#k[#r"+im.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b50000#k]#k���ɱ�ֵ���תְ");
			
            }else if (selection == 999) {
		    warp = 999;
		    im.sendYesNo(""+����+":\r\n\r\n"+Բ��+" �𾴵� [#b ð�յ���� #k]\r\n"+Բ��+" ��ʣ��ɱ�ֵ㣺#r"+im.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k\r\n"+��̾��+" �����Ƿ񻨷� ( #r20000#k ɱ�ֵ� ) ����( #b����ȫ��#k )\r\n"+��̾��+" ���д����ﵽ #b5 #k��,���޷�������ȫ��\r\n"+��̾��+" ֻ�ܹ��� [ #r"+im.getPlayer().getOneTimeLog("������ȫ��")+"#k / #b1#k ]");
		    
			}else if(selection == 5){
			warp = 5;
			im.sendYesNo(""+�ȵ�+":��#r����ʦ#k��\r\n\r\n"+Բ��+" #d����ʦ�������Ƴ�[#r5#d]�ּ���ķ���,#b[��������]#d\r\n"+Բ��+" ��Ӧ��װ������#r [1.2.3.4.5] #d�㹥��\r\n"+Բ��+" #d����ʦ�����Ϊ�弶ÿ����������������ɹ���\r\n"+Բ��+" #dÿ��������Ҫ����#r20000#dɱ�ֵ��Լ�#r1#d�ڽ��\r\n\r\n"+��̾��+" ��ְҵ��ɫֻ��ѡһ��,ѡ��#r[����ʦ]#d�Ͳ���ѡ#r[����ʦ]\r\n"+��̾��+" #k�����������?����#k[#r"+im.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k/#b50000#k]#k��ɱ�ֵ���תְ");
		
			}
		
		}else if(status == 2) {
			if(warp == 4){
	            if (im.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 1) {
	                im.sendOk("���Ѿ�ѡ��������ʦ��!");
					im.dispose();
	            return false;
	            }
				if(im.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 50000){ //��Ʒ����
			       im.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       im.getPlayer().setAccountLog("ɱ�ֵ���",1,-50000);
				   im.getPlayer().setOneTimeLog("��ְҵ����ʦ");
				   Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice
				   (9,im.getC().getChannel(),"��ְҵ" + " : " + im.getPlayer().getName() +"���ɹ�ѡ��������ʦ",true));
				   im.dispose();
				}else{
				   im.sendOk("ɱ�ֵ�������5��");
				   im.dispose();
				}
		    }else if(warp == 5){
	            if (im.getPlayer().getOneTimeLog("��ְҵ����ʦ") == 1) {
	                im.sendOk("���Ѿ�ѡ��������ʦ��!");
					im.dispose();
	            return false;
	            }
				if(im.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 50000){ //��Ʒ����
			       im.getPlayer().getAccountLog("ɱ�ֵ���",1);
			       im.getPlayer().setAccountLog("ɱ�ֵ���",1,-50000);
				   im.getPlayer().setOneTimeLog("��ְҵ����ʦ");
				   Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice
				   (9,im.getC().getChannel(),"��ְҵ" + " : " + im.getPlayer().getName() +"���ɹ�ѡ��������ʦ",true));
				   im.dispose();
				}else{
				   im.sendOk("ɱ�ֵ�������5��");
				   im.dispose();
		
		        }
		    }else if(warp == 999){
			if(im.getPlayer().getOneTimeLog("������ȫ��") > 1 ){ 
			   im.sendOk("��ɫֻ�ܹ���һ��");
			   im.dispose();
	        return false;
			}
			if(im.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 20000){ 
			im.teachSkill(21000000,10,10); //ì����ǿ��
			im.teachSkill(21001001,15,15); //ս������
			im.teachSkill(21000002,20,20); //˫���ػ�
			im.teachSkill(21001003,20,20); //����ì
			im.teachSkill(21100000,20,20); //��׼ì
			im.teachSkill(21100001,20,20); //�����ػ�
			im.teachSkill(21100002,30,30); //ս��ͻ��
			im.teachSkill(21101003,20,20); //��ѹ
			im.teachSkill(21100004,20,20); //��������
			im.teachSkill(21100005,20,20); //������Ѫ
			im.teachSkill(21110000,20,20); //����ǿ��
			im.teachSkill(21111001,20,20); //���ɻ���
			im.teachSkill(21110002,20,20); //ȫ���ӻ�
			im.teachSkill(21110003,30,30); //�ռ�Ͷ��
			im.teachSkill(21110004,30,30); //��Ӱ����
			im.teachSkill(21111005,20,20); //��ѩì
			im.teachSkill(21110006,20,20); //����
			im.teachSkill(21110007,20,20); //ȫ���ӻ�
			im.teachSkill(21110008,20,20); //ȫ���ӻ�
			im.teachSkill(21121000,30,30); //�ع�ð�յ���ʿ
			im.teachSkill(21120001,30,30); //��������
			im.teachSkill(21120002,30,30); //ս��֮��
			im.teachSkill(21121003,30,30); //ս�����־
			im.teachSkill(21120004,30,30); //���ز���
			im.teachSkill(21120005,30,30); //��������
			im.teachSkill(21120006,30,30); //�����ǳ�
			im.teachSkill(21120007,30,30); //ս��֮��
			im.teachSkill(21121008,5,5); //��ʿ����־
			im.teachSkill(1121011,1,1);
			im.teachSkill(1221012,1,1);
			im.teachSkill(1321010,1,1);
			im.teachSkill(2121008,1,1);
			im.teachSkill(2221008,1,1);
			im.teachSkill(2321009,1,1);
			im.teachSkill(3121009,1,1);
			im.teachSkill(3221008,1,1);
			im.teachSkill(4121009,1,1);
			im.teachSkill(4221008,1,1); //End of max-level "1" skills
			im.teachSkill(1000002,8,8); //Start of max-level "8" skills
			im.teachSkill(3000002,8,8);
			im.teachSkill(4000001,8,8); //End of max-level "8" skills
			im.teachSkill(1000001,10,10); //Start of max-level "10" skills
			im.teachSkill(2000001,10,10); //End of max-level "10" skills
			im.teachSkill(1000000,16,16); //Start of max-level "16" skills
			im.teachSkill(2000000,16,16);
			im.teachSkill(3000000,16,16); //End of max-level "16" skills
			im.teachSkill(1001003,20,20); //Start of max-level "20" skills
			im.teachSkill(3200001,30,30);
			im.teachSkill(1001004,20,20);
			im.teachSkill(1001005,20,20);
			im.teachSkill(2001002,20,20);
			im.teachSkill(2001003,20,20);
			im.teachSkill(2001004,20,20);
			im.teachSkill(2001005,20,20);
			im.teachSkill(3000001,20,20);
			im.teachSkill(3001003,20,20);
			im.teachSkill(3001004,20,20);
			im.teachSkill(3001005,20,20);
			im.teachSkill(4000000,20,20);
			im.teachSkill(4001344,20,20);
			im.teachSkill(4001334,20,20);
			im.teachSkill(4001002,20,20);
			im.teachSkill(4001003,20,20);
			im.teachSkill(1101005,20,20);
			im.teachSkill(1100001,20,20); //Start of mastery's
			im.teachSkill(1100000,20,20);
			im.teachSkill(1200001,20,20);
			im.teachSkill(1200000,20,20);
			im.teachSkill(1300000,20,20);
			im.teachSkill(1300001,20,20);
			im.teachSkill(3100000,20,20);
			im.teachSkill(3200000,20,20);
			im.teachSkill(4100000,20,20);
			im.teachSkill(4200000,20,20); //End of mastery's
			im.teachSkill(4201002,20,20);
			im.teachSkill(4101003,20,20);
			im.teachSkill(3201002,20,20);
			im.teachSkill(3101002,20,20);
			im.teachSkill(1301004,20,20);
			im.teachSkill(1301005,20,20);
			im.teachSkill(1201004,20,20);
			im.teachSkill(1201005,20,20);
			im.teachSkill(1101004,20,20); //End of boosters
			im.teachSkill(1101006,20,20);
			im.teachSkill(1201006,20,20);
			im.teachSkill(1301006,20,20);
			im.teachSkill(2101001,20,20);
			im.teachSkill(2100000,20,20);
			im.teachSkill(2101003,20,20);
			im.teachSkill(2101002,20,20);
			im.teachSkill(2201001,20,20);
			im.teachSkill(2200000,20,20);
			im.teachSkill(2201003,20,20);
			im.teachSkill(2201002,20,20);
			im.teachSkill(2301004,20,20);
			im.teachSkill(2301003,20,20);
			im.teachSkill(2300000,20,20);
			im.teachSkill(2301001,20,20);
			im.teachSkill(3101003,20,20);
			im.teachSkill(3101004,20,20);
			im.teachSkill(3201003,20,20);
			im.teachSkill(3201004,20,20);
			im.teachSkill(4100002,20,20);
			im.teachSkill(4101004,20,20);
			im.teachSkill(4200001,20,20);
			im.teachSkill(4201003,20,20); //End of second-job skills and first-job
			im.teachSkill(4211005,20,20);
			im.teachSkill(4211003,20,20);
			im.teachSkill(4210000,20,20);
			im.teachSkill(4110000,20,20);
			im.teachSkill(4111001,20,20);
			im.teachSkill(4111003,20,20);
			im.teachSkill(3210000,20,20);
			im.teachSkill(3110000,20,20);
			im.teachSkill(3210001,20,20);
			im.teachSkill(3110001,20,20);
			im.teachSkill(3211002,20,20);
			im.teachSkill(3111002,20,20);
			im.teachSkill(2210000,20,20);
			im.teachSkill(2211004,20,20);
			im.teachSkill(2211005,20,20);
			im.teachSkill(2111005,20,20);
			im.teachSkill(2111004,20,20);
			im.teachSkill(2110000,20,20);
			im.teachSkill(2311001,20,20);
			im.teachSkill(2311005,30,30);
			im.teachSkill(2310000,20,20);
			im.teachSkill(1311007,20,20);
			im.teachSkill(1310000,20,20);
			im.teachSkill(1311008,20,20);
			im.teachSkill(1210001,20,20);
			im.teachSkill(1211009,20,20);
			im.teachSkill(1210000,20,20);
			im.teachSkill(1110001,20,20);
			im.teachSkill(1111007,20,20);
			im.teachSkill(1110000,20,20); //End of 3rd job skills
			im.teachSkill(1121000,20,20);
			im.teachSkill(1221000,20,20);
			im.teachSkill(1321000,20,20);
			im.teachSkill(2121000,20,20);
			im.teachSkill(2221000,20,20);
			im.teachSkill(2321000,20,20);
			im.teachSkill(3121000,20,20);
			im.teachSkill(3221000,20,20);
			im.teachSkill(4121000,20,20);
			im.teachSkill(4221000,20,20); //End of Maple Warrior // Also end of max-level "20" skills
			im.teachSkill(1321007,10,10);
			im.teachSkill(1320009,25,25);
			im.teachSkill(1320008,25,25);
			im.teachSkill(2321006,10,10);
			im.teachSkill(1220010,10,10);
			im.teachSkill(1221004,25,25);
			im.teachSkill(1221003,25,25);
			im.teachSkill(1100003,30,30);
			im.teachSkill(1100002,30,30);
			im.teachSkill(1101007,30,30);
			im.teachSkill(1200003,30,30);
			im.teachSkill(1200002,30,30);
			im.teachSkill(1201007,30,30);
			im.teachSkill(1300003,30,30);
			im.teachSkill(1300002,30,30);
			im.teachSkill(1301007,30,30);
			im.teachSkill(2101004,30,30);
			im.teachSkill(2101005,30,30);
			im.teachSkill(2201004,30,30);
			im.teachSkill(2201005,30,30);
			im.teachSkill(2301002,30,30);
			im.teachSkill(2301005,30,30);
			im.teachSkill(3101005,30,30);
			im.teachSkill(3201005,30,30);
			im.teachSkill(4100001,30,30);
			im.teachSkill(4101005,30,30);
			im.teachSkill(4201005,30,30);
			im.teachSkill(4201004,30,30);
			im.teachSkill(1111006,30,30);
			im.teachSkill(1111005,30,30);
			im.teachSkill(1111002,30,30);
			im.teachSkill(1111004,30,30);
			im.teachSkill(1111003,30,30);
			im.teachSkill(1111008,30,30);
			im.teachSkill(1211006,30,30);
			im.teachSkill(1211002,30,30);
			im.teachSkill(1211004,30,30);
			im.teachSkill(1211003,30,30);
			im.teachSkill(1211005,30,30);
			im.teachSkill(1211008,30,30);
			im.teachSkill(1211007,30,30);
			im.teachSkill(1311004,30,30);
			im.teachSkill(1311003,30,30);
			im.teachSkill(1311006,30,30);
			im.teachSkill(1311002,30,30);
			im.teachSkill(1311005,30,30);
			im.teachSkill(1311001,30,30);
			im.teachSkill(2110001,30,30);
			im.teachSkill(2111006,30,30);
			im.teachSkill(2111002,30,30);
			im.teachSkill(2111003,30,30);
			im.teachSkill(2210001,30,30);
			im.teachSkill(2211006,30,30);
			im.teachSkill(2211002,30,30);
			im.teachSkill(2211003,30,30);
			im.teachSkill(2311003,30,30);
			im.teachSkill(2311004,30,30);
			im.teachSkill(2311006,30,30);
			im.teachSkill(3111004,30,30);
			im.teachSkill(3111003,30,30);
			im.teachSkill(3111005,30,30);
			im.teachSkill(3111006,30,30);
			im.teachSkill(3211004,30,30);
			im.teachSkill(3211003,30,30);
			im.teachSkill(3211005,30,30);
			im.teachSkill(3211006,30,30);
			im.teachSkill(4111005,30,30);
			im.teachSkill(4111006,20,20);
			im.teachSkill(4111004,30,30);
			im.teachSkill(4111002,30,30);
			im.teachSkill(4211002,30,30);
			im.teachSkill(4211004,30,30);
			im.teachSkill(4211001,30,30);
			im.teachSkill(4211006,30,30);
			im.teachSkill(1120004,30,30);
			im.teachSkill(1120003,30,30);
			im.teachSkill(1120005,30,30);
			im.teachSkill(1121000,30,30);
			im.teachSkill(1121008,30,30);
			im.teachSkill(1121010,30,30);
            im.teachSkill(1121011,5,5);
			im.teachSkill(1121006,30,30);
			im.teachSkill(1121002,30,30);
			im.teachSkill(1220005,30,30);
			im.teachSkill(1221009,30,30);
			im.teachSkill(1220006,30,30);
			im.teachSkill(1221007,30,30);
            im.teachSkill(1221012,5,5);
			im.teachSkill(1221002,30,30);
			im.teachSkill(1221000,30,30);
			im.teachSkill(1320005,30,30);
			im.teachSkill(1320006,30,30);
			im.teachSkill(1321003,30,30);
			im.teachSkill(1321002,30,30);
			im.teachSkill(1321000,30,30);
            im.teachSkill(1321010,5,5);
			im.teachSkill(2121005,30,30);
			im.teachSkill(2121003,30,30);
			im.teachSkill(2121004,30,30);
			im.teachSkill(2121002,30,30);
			im.teachSkill(2121007,30,30);
			im.teachSkill(2121006,30,30);
            im.teachSkill(2121008,5,5);
			im.teachSkill(2121000,30,30);
			im.teachSkill(2221007,30,30);
			im.teachSkill(2221006,30,30);
			im.teachSkill(2221003,30,30);
			im.teachSkill(2221005,30,30);
			im.teachSkill(2221004,30,30);
			im.teachSkill(2221002,30,30);
            im.teachSkill(2221008,5,5);
			im.teachSkill(2221000,30,30);
			im.teachSkill(2321007,30,30);
			im.teachSkill(2321003,30,30);
			im.teachSkill(2321008,30,30);
            im.teachSkill(2321009,5,5);
			im.teachSkill(2321005,30,30);
			im.teachSkill(2321004,30,30);
			im.teachSkill(2321000,30,30);
			im.teachSkill(2321002,30,30);
			im.teachSkill(3120005,30,30);
			im.teachSkill(3121008,30,30);
			im.teachSkill(3121000,30,30);
            im.teachSkill(3121009,5,5);
			im.teachSkill(3121003,30,30);
			im.teachSkill(3121007,30,30);
			im.teachSkill(3121006,30,30);
            im.teachSkill(3121000,30,30);
			im.teachSkill(3121002,30,30);
			im.teachSkill(3121004,30,30);
			im.teachSkill(3221006,30,30);
			im.teachSkill(3221000,30,30);
			im.teachSkill(3220004,30,30);
            im.teachSkill(3221000,30,30);
			im.teachSkill(3221003,30,30);
			im.teachSkill(3221005,30,30);
			im.teachSkill(3221001,30,30);
			im.teachSkill(3221002,30,30);
			im.teachSkill(3221007,30,30);
            im.teachSkill(3221008,5,5);
			im.teachSkill(4121004,30,30);
			im.teachSkill(4121008,30,30);
			im.teachSkill(4121000,30,30);
			im.teachSkill(4121003,30,30);
			im.teachSkill(4121006,30,30);
			im.teachSkill(4121007,30,30);
            im.teachSkill(4121000,30,30);
            im.teachSkill(4121009,5,5);
			im.teachSkill(4221001,30,30);
			im.teachSkill(4221007,30,30);
			im.teachSkill(4221004,30,30);
            im.teachSkill(4221000,30,30);  
			im.teachSkill(4221000,30,30);
			im.teachSkill(4221003,30,30);
			im.teachSkill(4221006,30,30);
            im.teachSkill(4221008,5,5);
			im.teachSkill(1321001,30,30);
			im.teachSkill(4120002,30,30);
			im.teachSkill(2221001,30,30);
			im.teachSkill(3100001,30,30);
			im.teachSkill(1121001,30,30);
			im.teachSkill(1221001,30,30);
			im.teachSkill(2121001,30,30);
			im.teachSkill(2221001,30,30);
			im.teachSkill(2321001,30,30);
			im.teachSkill(4220002,30,30);
			im.teachSkill(5000000,20,20); //Bullet Time
			im.teachSkill(5001001,20,20); //Flash Fist
			im.teachSkill(5001002,20,20); //Sommersault Kick
			im.teachSkill(5001003,20,20); //Double Shot
			im.teachSkill(5001005,10,10); //Dash
			im.teachSkill(5100000,10,10); //Improve MaxHP
			im.teachSkill(5100001,20,20); //Knuckler Mastery
			im.teachSkill(5101002,20,20); //Backspin Blow
			im.teachSkill(5101003,20,20); //Double Uppercut
			im.teachSkill(5101004,20,20); //Corkscrew Blow
			im.teachSkill(5101005,10,10); //MP Recovery
			im.teachSkill(5101006,20,20); //Knuckler Booster
			im.teachSkill(5101007,10,10); //Oak Barrel
			im.teachSkill(5200000,20,20); //Gun Mastery
			im.teachSkill(5201001,20,20); //Invisible Shot
			im.teachSkill(5201002,20,20); //Grenade
			im.teachSkill(5201003,20,20); //Gun Booster
			im.teachSkill(5201004,20,20); //Blank Shot
			im.teachSkill(5201005,10,10); //Wings
			im.teachSkill(5201006,20,20); //Recoil Shot
			im.teachSkill(5110000,20,20); //Stun Mastery
			im.teachSkill(5110001,40,40); //Energy Charge
			im.teachSkill(5111002,30,30); //Energy Blast
			im.teachSkill(5111004,20,20);  //Energy Drain
			im.teachSkill(5111005,20,20); //Transformation
			im.teachSkill(5210000,20,20); //Burst Fire
			im.teachSkill(5211001,30,30); //Octopus
			im.teachSkill(5211002,30,30); //Gaviota
			im.teachSkill(5211004,30,30); //FlameThrower
			im.teachSkill(5211005,30,30); //Ice Splitter
			im.teachSkill(5211006,30,30); //Homing Beacon
			im.teachSkill(5121000,30,30); //Maple Warrior
			im.teachSkill(5121001,30,30); //Dragon Strike
			im.teachSkill(5121002,30,30); //Energy Orb
			im.teachSkill(5121003,20,20); //Super Transformation
			im.teachSkill(5121004,30,30); //Demolition
			im.teachSkill(5121005,30,30); //Snatch
            im.teachSkill(5111006,30,30); //Caonima
			im.teachSkill(5121007,30,30); //Barrage
			im.teachSkill(5121008,30,30);   //Pirate's Rage
			im.teachSkill(2311002,30,30);   //ʱ����
			im.teachSkill(5121009,20,20); //Speed Infusion
			im.teachSkill(5121010,30,30); //Time Leap
			im.teachSkill(5221000,30,30); //Maple Warrior
			im.teachSkill(5220001,30,30); //Elemental Boost
			im.teachSkill(5220002,20,20); //Wrath of the Octopi
			im.teachSkill(5221003,30,30); //Aerial Strike
			im.teachSkill(5221004,30,30); //Rapid Fire
			im.teachSkill(5221006,10,10); //BattleShip
			im.teachSkill(5221007,30,30); //BattleShip Cannon
			im.teachSkill(5221008,30,30); //BattleShop Torpedo
			im.teachSkill(5221009,20,20); //Hypnotize
			im.teachSkill(5221010,25,25); //Speed Infusion
			im.teachSkill(5220011,20,20); //BullsEye
 //����ʿ
			im.teachSkill(11000000,10,10); //������ǿ
			im.teachSkill(11001001,10,10); //ʥ����
			im.teachSkill(11001002,20,20); //ǿ������
			im.teachSkill(11001003,20,20); //Ⱥ�幥��
			im.teachSkill(11001004,20,20); //�꾫��
			im.teachSkill(11100000,20,20); //��׼��
			im.teachSkill(11101001,20,20); //���ٽ�
			im.teachSkill(11101002,30,30); //�ռ���
			im.teachSkill(11101003,20,20); //��ŭ֮��
			im.teachSkill(11101004,30,30); //���֮��
			im.teachSkill(11101005,10,10); //���Ѹ��
			im.teachSkill(11110000,20,20); //ħ���ָ�
			im.teachSkill(11111001,20,20); //��������
			im.teachSkill(11111002,20,20); //�ֻ�
			im.teachSkill(11111003,20,20); //����
			im.teachSkill(11111004,30,30); //�������
			im.teachSkill(11110005,20,20); //���׶���
			im.teachSkill(11111006,30,30); //���ͻ��
			im.teachSkill(11111007,20,20); //�������
 //����ʿ
			im.teachSkill(12000000,10,10); //ħ��ǿ��
			im.teachSkill(12001001,10,10); //ħ����
			im.teachSkill(12001002,10,10); //ħ������
			im.teachSkill(12001003,20,20); //ħ��˫��
			im.teachSkill(12001004,20,20); //�׾���
			im.teachSkill(12101000,20,20); //������
			im.teachSkill(12101001,20,20); //������
			im.teachSkill(12101002,20,20); //�����
			im.teachSkill(12101003,20,20); //�����ƶ�
			im.teachSkill(12101004,20,20); //ħ����
			im.teachSkill(12101005,20,20); //��Ȼ������
			im.teachSkill(12101006,20,20); //����
			im.teachSkill(12110000,20,20); //ħ������
			im.teachSkill(12110001,20,20); //ħ������
			im.teachSkill(12111002,20,20); //��ӡ��
			im.teachSkill(12111003,20,20); //�콵����
			im.teachSkill(12111004,10,10); //��ħ��
			im.teachSkill(12111005,30,30); //����������
			im.teachSkill(12111006,30,30); //��籩
			im.teachSkill(13000000,20,20); //ǿ����
			im.teachSkill(13000001,8,8); //Զ�̼�
			im.teachSkill(13001002,10,10); //������
			im.teachSkill(13001003,20,20); //������
			im.teachSkill(13001004,20,20); //�羫��
			im.teachSkill(13100000,20,20); //��׼��
			im.teachSkill(13101001,20,20); //���ټ�
			im.teachSkill(13101002,30,30); //�ռ���
			im.teachSkill(13101003,20,20); //���μ�
			im.teachSkill(13100004,20,20); //���粽
			im.teachSkill(13101005,20,20); //�������
			im.teachSkill(13101006,10,10); //��Ӱ����
			im.teachSkill(13111000,20,20); //����
			im.teachSkill(13111001,30,30); //��ɨ��
			im.teachSkill(13111002,20,20); //�������
			im.teachSkill(13110003,20,20); //�����
			im.teachSkill(13111004,20,20); //������
			im.teachSkill(13111005,10,10); //������
			im.teachSkill(13111006,20,20); //���鴩Խ
			im.teachSkill(13111007,20,20); //����ɨ��
			im.teachSkill(14000000,10,10); //������
			im.teachSkill(14000001,8,8); //Զ�̰���
			im.teachSkill(14001002,10,10); //������
			im.teachSkill(14001003,10,10); //������
			im.teachSkill(14001004,20,20); //˫��ն
			im.teachSkill(14001005,20,20); //ҹ����
			im.teachSkill(14100000,20,20); //��׼����
			im.teachSkill(14100001,30,30); //ǿ��Ͷ��
			im.teachSkill(14101002,20,20); //���ٰ���
			im.teachSkill(14101003,20,20); //�Ṧ
			im.teachSkill(14101004,20,20); //������
			im.teachSkill(14100005,10,10); //����
			im.teachSkill(14101006,20,20); //��Ѫ
			im.teachSkill(14111000,30,30); //Ӱ����
			im.teachSkill(14111001,20,20); //Ӱ����
			im.teachSkill(14111002,30,30); //���ط���
			im.teachSkill(14110003,20,20); //ҩ����ͨ
			im.teachSkill(14110004,20,20); //�����ö�Һ
			im.teachSkill(14111005,20,20); //�����������
			im.teachSkill(14111006,30,30); //��ը��
			im.teachSkill(15000000,10,10); //�춯��
			im.teachSkill(15001001,20,20); //����ȭ
			im.teachSkill(15001002,20,20); //������
			im.teachSkill(15001003,10,10); //����
			im.teachSkill(15001004,20,20); //�׾���
			im.teachSkill(15100000,10,10); //ǿ����
			im.teachSkill(15100001,20,20); //��׼ȭ
			im.teachSkill(15101002,20,20); //����ȭ
			im.teachSkill(15101003,20,20); //��ǻ�
			im.teachSkill(15100004,20,20); //�������
			im.teachSkill(15101005,20,20); //��������
			im.teachSkill(15101006,20,20); //����
			im.teachSkill(15110000,20,20); //��ɱȭ
			im.teachSkill(15111001,20,20); //������ת
			im.teachSkill(15111002,10,10); //���˱���
			im.teachSkill(15111003,20,20); //��ʯ�һ�
			im.teachSkill(15111004,20,20); //����ȭ
			im.teachSkill(15111005,20,20); //��������
			im.teachSkill(15111006,20,20); //�����
			im.teachSkill(15111007,30,30); //���㲨
			   im.ˢ��״̬();
			   im.getPlayer().getAccountLog("ɱ�ֵ���",1);
			   im.getPlayer().setAccountLog("ɱ�ֵ���",1,-20000);
			   im.getPlayer().setOneTimeLog("������ȫ��");
			   im.sendOk("����ɹ�");
			   im.ȫ��Ư������("��ϲ���["+im.getName()+"]������[ ����ȫ�� ] �����Ѿ�ȫ����������ˣ�", 5121006);
	           im.dispose();
			}else{
			   im.sendOk("��ĵ�������20000");
			   im.dispose();
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
//		object = im.getInventory(type).getItem(i);
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
		if (im.getInventory(4).isFull(29) ) {
		    im.sendOk("#b�������ռ䲻��30��.");	
	           im.dispose();
	       return false;
		}
		im.gainExp(50000);
		if(im.getPlayer().getLevel() <= 230){
		im.getChar().setLevel(250);
		im.gainAp(1250);
		}
		im.gainSp(500);
		im.gainNX(50000);
		im.gainMeso(888888888);
		im.gainItem(4310154,10000);
		im.gainItem(2049100,10);
		im.gainItem(2340000,10);
		im.gainItem(2049306,10);
		im.gainItem(2049415,10);
		if(im.getPlayer().getBossLog("lqcs1") < 2){
		im.gainItem(4000435,999);
		im.gainItem(4000460,999);
		im.gainItem(4000461,999);
		im.gainItem(4000462,999);
		im.gainItem(4000243,999);
		im.gainItem(4000235,999);
		im.gainItem(2210006,10);
		im.gainItem(4031475,999);
		im.gainItem(4000382,999);
		im.gainItem(4000379,999);
		im.gainItem(4000383,999);
		im.gainItem(4000431,999);
		im.gainItem(4000430,999);
		im.gainItem(4000020,999);
		im.gainItem(4000021,999);
		im.gainItem(4000040,999);
		im.gainItem(4000478,999);
		im.gainItem(4000037,999);
		im.gainItem(4000107,999);
		im.gainItem(4000106,999);
		im.gainItem(4000025,999);
		im.gainItem(4000177,999);
		im.gainItem(4003004,999);
		im.gainItem(4020008,999);
		im.gainItem(4000429,999);
		im.gainItem(4001111,999);
		im.gainItem(4000000,999);
		im.gainItem(4000016,999);
		im.gainItem(4000019,999);
		im.gainItem(4031026,999);
		im.gainItem(4000176,999);
		im.gainItem(4031227,999);
		im.gainItem(4000245,999);
		im.gainItem(4000244,999);
		}
		im.setBossLog("���븱��");
		im.setBossLog("��������");
		im.setBossLog("��߸���");
		im.setBossLog("���︱��");
		im.setBossLog("��������");
		im.setBossLog("���븱��");
		im.setBossLog("��������");
		im.setBossLog("��߸���");
		im.setBossLog("���︱��");
		im.setBossLog("��������");
		im.getPlayer().setAccountLog('����ʱ��');
		im.getPlayer().setAccountLog('����ʱ��');
		im.getPlayer().setAccountLog('����ʱ��');
		im.getPlayer().setBossLog("lqcs1")
		im.ˢ��״̬();
		
	    im.dispose();
			*/