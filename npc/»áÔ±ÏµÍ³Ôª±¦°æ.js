���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1051295/0/0#";
var �ٷ� = "#fEffect/CharacterEff/1003252/0/0#";
var Сѩ�� = "#fEffect/CharacterEff/1003393/0/0#";
var ���� = "#fEffect/CharacterEff/1032063/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon2/7#";
var ����ne = "#fUI/UIWindow/Quest/icon6/7#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var status = -1;
var typ;
var chajia;
var viplist = [
[1,10000],
[2,50000],
[3,100000],
[4,300000],
[5,500000],
[6,1250000]
//[7,500000],
//[8,1000000]
];
var jllist = [
//[1,2450000,1],
[1,4002001,1],
[1,2049600,1],
[1,2533000,1],
[1,2614000,1],
[1,4170000,1],
[1,2041332,1],
[1,2041226,1],
[1,2531000,1],

[2,4002001,2],
[2,2049600,2],
[2,2533000,2],
[2,2614000,2],
[2,4170000,2],
[2,2041332,2],
[2,2041226,2],
[2,2531000,2],


[3,4002001,3],
[3,2049600,3],
[3,2533000,3],
[3,2614000,3],
[3,4170000,3],
[3,2041332,3],
[3,2041226,3],
[3,2531000,3],

[4,4002001,4],
[4,2049600,4],
[4,2533000,4],
[4,2614000,4],
[4,4170000,4],
[4,2041332,4],
[4,2041226,4],
[4,2531000,4],


[5,4002001,5],
[5,2049600,5],
[5,2533000,5],
[5,2614000,5],
[5,4170000,5],
[5,2041332,5],
[5,2041226,5],
[5,2531000,5],


[6,4002001,6],
[6,2049600,6],
[6,2533000,6],
[6,2614001,2],
[6,4170000,6],
[6,2041332,6],
[6,2041226,6],
[6,2531000,6],

[7,2450000,12],
[7,4310174,14],
[7,2590005,14],
[7,2614000,14],
[7,4170000,70],
[7,4310054,1200],
[7,2041332,14],
[7,2041226,14],
[7,2531006,10],
[7,2022468,50],
[7,4001017,20],//����
[7,4031179,20],//DƬ


[8,2450000,20],
[8,4310174,20],
[8,2590005,20],
[8,2614000,20],
[8,4170000,100],
[8,4310054,2400],
[8,2041332,20],
[8,2590000,16],
[8,2047954,16],
[8,2041226,16],
[8,2022468,80],
[8,4001017,40],//����
[8,4031179,40],//DƬ
[8,2049345,10],//12��ǿ����
[8,2049346,10],//12��ǿ����
[8,2049347,10],//13��ǿ����
[8,2049348,10],//12��ǿ����
[8,2049349,10],//12��ǿ����
[8,2531006,8]//������
];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
		var text = "\r\n";
		text += "#e                 "+����+"#r��Ա����#k"+����+"  #n\r\n"   
		
        text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
		text += "#e  ��Ŀǰ�Ļ�Ա�ȼ�Ϊ:#rVIP"+cm.getVip()+"#l#k\r\n";
		if(cm.getVip() < 1){
		text += "#L0#��ͨ��ԱVIP1�ȼ�#l\r\n\r\n";
		
		}
		text += "#L2#������Ա�ȼ�#l\r\n\r\n";
		text += "#L1#��ȡ��Աÿ�ո���#l\r\n\r\n";
		text += "#L3#�鿴��Ա���#l\r\n\r\n\r\n";
		text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
        cm.sendSimple(text);
    } else if (status == 1) {
        if(selection == 0){
			var text = "";
			text += "�Ƿ�ȷ����ͨVIP1?\r\n";
			// for (var i = 0; i < viplist.length; i++){
				// text += "#L"+i+"##r#eVIP"+viplist[i][0]+" �۸�:"+viplist[i][1]+"Ԫ��#k#l\r\n\r\n\r\n#bÿ����ȡ:#k\r\n\r\n";
				// for (var j = 0; j < jllist.length; j++){
					// if(jllist[j][0] == viplist[i][0]){
						// text += "#i"+jllist[j][1]+":##z"+jllist[j][1]+"# �� "+jllist[j][2]+"\r\n";
					// }
				// }
				// text += "\r\n";
			// }
			cm.sendYesNo(text);
			typ = 0;
		} else if(selection == 1){
			if(cm.getVip() > 0){
				if(cm.getInventory(2).isFull(2)||cm.getInventory(4).isFull(2)){
					cm.sendOk("��ѱ��������ĺ�����������3��λ���������ң�");
					cm.dispose();
				}else if(cm.getBossLog("ÿ�ջ�Ա����") == 0){
					var text = "��ϲ���ɹ���ȡ��:\r\n";
					for (var j = 0; j < jllist.length; j++){
						if(jllist[j][0] == cm.getVip()){
							cm.gainItem(jllist[j][1], jllist[j][2]);
							text += "#i"+jllist[j][1]+":##z"+jllist[j][1]+"# �� "+jllist[j][2]+"\r\n";
						}
					}
					cm.setBossLog("ÿ�ջ�Ա����");
					cm.����(2, "��ϲ����ţVIP[" + cm.getVip() + "]��ң�[" + cm.getName() + "] ��ȡ�˽��ջ�Ա������");
					cm.sendOk(text);
				} else {
					cm.sendOk("������Ѿ���ȡ���˽���.");
				}
			} else {
				cm.sendOk("��Ǹ��û�п�ͨ��Ա����.");
			}
			cm.dispose();
		} else if(selection == 2){
			if(cm.getVip() >= 8){
				cm.sendOk("���Ѿ���߼���~!");
				cm.dispose();
				return;
			}
			var text ="";
			for (var j = 0; j < jllist.length; j++){
				if(jllist[j][0] == cm.getVip()+1){
					text += "#i"+jllist[j][1]+":##z"+jllist[j][1]+"# �� "+jllist[j][2]+"\r\n";
				}
			}
			if(cm.getVip() > 0){
				chajia = viplist[cm.getVip()][1] - viplist[cm.getVip()-1][1];
				cm.sendYesNo("\r\n#e��Ŀǰ�Ļ�Ա�ȼ�Ϊ:#rVIP"+cm.getVip()+"#b ������ #rVIP "+(cm.getVip()+1)+"#k\r\n��Ҫ��#rԪ��:"+chajia+" #k������ÿ�ո�����Ϊ#k#n\r\n"+text);
				typ = 1;
			} else {
				cm.sendOk("��Ǹ��û�п�ͨ��Ա����.");
				cm.dispose();
			}
		}if(selection == 3){
			var text = "";
			for (var i = 0; i < viplist.length; i++){
				text += "#r#eVIP"+viplist[i][0]+" �۸�:"+viplist[i][1]+"Ԫ��#k#l\r\n\r\n\r\n#bÿ����ȡ:#k\r\n\r\n";
				for (var j = 0; j < jllist.length; j++){
					if(jllist[j][0] == viplist[i][0]){
						text += "#i"+jllist[j][1]+":##z"+jllist[j][1]+"# �� "+jllist[j][2]+"\r\n";
					}
				}
				
			}
			cm.sendSimple(text);
			
		}
    } else if (status == 2) {
		if (typ == 0){
			if(cm.getVip() == 0){
				if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= 10000){
					cm.setVip(1);
					cm.getPlayer().setAccountLog("�ۼ���������_����",1,-10000);
					cm.sendOk("#e��ϲ�㿪ͨ #rVIP1#k �ɹ�����ȡ��ÿ�ս�����~!");
					cm.dispose();
				} else {
					cm.sendOk("Ԫ���������ֵ.");
					cm.dispose();
				}
			} else {
				cm.sendOk("��Ŀǰ�Ѿ���ͨ��VIP��������VIP�ȼ�Ŷ.");
				cm.dispose();
			}
		} else if (typ == 1){
			if(cm.getVip() == 1){
				if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= chajia){
						cm.gainVip(1);
						cm.getPlayer().setAccountLog("�ۼ���������_����",1,-chajia);
						cm.sendOk("��ϲ����Ա�ȼ������ɹ�~!Ŀǰ��Ա�ȼ�Ϊ�� #e#rVIP"+cm.getVip());
						cm.dispose();
				} else {
					cm.sendOk("Ԫ���������ֵ.");
					cm.dispose();
				}
			} else if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= chajia){
				cm.gainVip(1);
				cm.getPlayer().setAccountLog("�ۼ���������_����",1,-chajia);
				cm.sendOk("��ϲ����Ա�ȼ������ɹ�~!Ŀǰ��Ա�ȼ�Ϊ�� #r#eVIP"+cm.getVip());
				cm.dispose();
			} else {
				cm.sendOk("Ԫ���������ֵ.");
				cm.dispose();
			}
		} else {
			cm.sendNext("#r��������: mode : " + mode + " status : " + status);
			cm.dispose();
		}
    } else {
        cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}