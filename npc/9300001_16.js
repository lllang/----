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
[1,10000000],
[2,50000000],
[3,100000000]
//[4,100000],
//[5,200000],
//[6,350000],
//[7,500000],
//[8,1000000]
];
var jllist = [
[1,2041200,1],
[1,2049323,5],
[1,2340000,5],
[1,2590000,1],
[1,3994578,50],


[2,2041200,2],
[2,2049323,10],
[2,2340000,10],
[2,2590000,3],
[2,2047954,1],
[2,2041332,2],
[2,2041226,4],
[2,3994578,150],

[3,2041200,4],
[3,2049323,20],
[3,2340000,20],
[3,2590000,6],
[3,2047954,2],
[3,2041332,4],
[3,2041226,6],
[3,2531006,1],
[3,3994578,300],

[4,2041226,4],
[4,4001017,5],//����
[4,4031179,5],//DƬ
[4,4031217,3],//�ƽ�Կ��
[4,2049345,2],//11��ǿ����
[4,2049323,5],//�߼�ǿ����
[4,2340000,5],//ף����
[4,4000464,2],//�й���
[4,4251202,2],//�ߵ����ˮ��
[4,2047954,1],
[4,2041332,2],
[4,2041226,4],
[4,4001017,8],//����
[4,4031179,8],//DƬ
[4,4031217,4],//�ƽ�Կ��
[4,2049345,3],//11��ǿ����
[4,2049323,10],//�߼�ǿ����
[4,2340000,10],//ף����
[4,4000464,3],//�й���
[4,4251202,3],//�ߵ����ˮ��
[5,2047954,2],
[5,2041332,4],
[5,2041226,6],
[5,4001017,10],//����
[5,4031179,10],//DƬ
[5,4031217,5],//�ƽ�Կ��
[5,2049345,4],//11��ǿ����
[5,2049323,15],//�߼�ǿ����
[5,2340000,15],//ף����
[5,4000464,4],//�й���
[5,4251202,4],//�ߵ����ˮ��
[5,2049346,4],//12��ǿ����
[5,2614000,2],//�ƹ�ʯ1W
[5,4000487,9],//��Ӱ��
[6,2047954,3],
[6,2041332,5],
[6,2041226,8],
[6,4001017,15],//����
[6,4031179,15],//DƬ
[6,4031217,6],//�ƽ�Կ��
[6,2049345,5],//11��ǿ����
[6,2049323,20],//�߼�ǿ����
[6,2340000,20],//ף����
[6,4000464,5],//�й���
[6,4251202,5],//�ߵ����ˮ��
[6,2049346,6],//12��ǿ����
[6,2049347,6],//13��ǿ����
[6,2614000,4],//�ƹ�ʯ1W
[6,4000487,18],//��Ӱ��
[6,2531006,2],//������
[7,2047954,3],
[7,2041332,5],
[7,2041226,8],
[7,4001017,20],//����
[7,4031179,20],//DƬ
[7,4031217,7],//�ƽ�Կ��
[7,2049345,7],//11��ǿ����
[7,2049323,25],//�߼�ǿ����
[7,2340000,25],//ף����
[7,4000464,6],//�й���
[7,4251202,6],//�ߵ����ˮ��
[7,2049346,7],//12��ǿ����
[7,2049347,7],//13��ǿ����
[7,2049348,7],//14��ǿ����
[7,2614000,6],//�ƹ�ʯ1W
[7,4000487,50],//��Ӱ��
[7,2531006,4],//������
[8,2047954,5],
[8,2041332,8],
[8,2041226,10],
[8,4001017,30],//����
[8,4031179,30],//DƬ
[8,4031217,8],//�ƽ�Կ��
[8,2049345,10],//11��ǿ����
[8,2049323,30],//�߼�ǿ����
[8,2340000,30],//ף����
[8,4000464,10],//�й���
[8,4251202,10],//�ߵ����ˮ��
[8,2049346,10],//12��ǿ����
[8,2049347,10],//13��ǿ����
[8,2049348,10],//14��ǿ����
[8,2049349,10],//15��ǿ����
[8,2614000,10],//�ƹ�ʯ1W
[8,4000487,70],//��Ӱ��
[8,2531006,10]//������
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