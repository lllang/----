var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
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
var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon2/7#";
var ����ne = "#fUI/UIWindow/Quest/icon6/7#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var selec;
var sele;
var hsddd = 29;
var hsjns = Array(1432137,2290003,2290014,2290015,2290008,2290009,2290000,2290001,2290006,2290007,2290004,2290005,2290010,2290011,2290016,2290017,2290022,2290023,2290012,2290013,2290026,2290027,2290024,2290025,2290028,2290029,2290036,2290037,2290038,2290039,2290040,2290041,2290030,2290031,2290044,2290045,2290032,2290033,2290042,2290043,2290046,2290047,2290050,2290051,2290034,2290035,2290206,2290207,2290048,2290049,2290056,2290057,2290052,2290053,2290054,2290055,2290060,2290061,2290058,2290059,2290062,2290063,2290064,2290065,2290066,2290067,2290070,2290071,2290068,2290069,2290074,2290075,2290072,2290073,2290076,2290077,2290078,2290079,2290080,2290081,2290082,2290083,2290084,2290085,2290088,2290089,2290086,2290087,2290092,2290093,2290094,2290095,2290090,2290091,2290112,2290113,2290124,2290114,2290117,2290118,2290123,2290121,2290122,2290115,2290116,2290119,2290120,2290097,2290098,2290099,2290100,2290101,2290102,2290103,2290104,2290105,2290108,2290110,2290111,2290021,2290106,2290107,2290096,2290125);//������
var hsks = Array(
//��ʯ ��ƷID ����
Array(4010000,1),//��ͭĸ��
Array(4011000,10),//��ͭ
Array(4010001,1),//����ĸ��
Array(4011001,10),//����
Array(4010002,1),//﮿�ʯĸ��
Array(4011002,10),//﮿�ʯ
Array(4010003,1),//���ʯĸ��
Array(4011003,10),//���ʯ
Array(4010004,1),//����ĸ��
Array(4011004,10),//����
Array(4010005,1),//�Ͽ�ʯĸ��
Array(4011005,10),//�Ͽ�ʯ
Array(4010006,1),//�ƽ�ĸ��
Array(4011006,10),//�ƽ�
Array(4020000,1),//ʯ��ʯĸ��
Array(4021000,10),//ʯ��ʯ
Array(4020001,1),//��ˮ��ĸ��
Array(4021001,10),//��ˮ��
Array(4020002,1),//����ʯĸ��
Array(4021002,10),//������ʯ
Array(4020003,1),//��ĸ��ĸ��
Array(4021003,10),//��ĸ��
Array(4020004,1),//����ʯĸ��
Array(4021004,10),//����ʯ
Array(4020005,1),//����ʯĸ��
Array(4021005,10),//����ʯ
Array(4020006,1),//�ƾ�ĸ��
Array(4021006,10),//�ƾ�
Array(4020007,1),//��ʯĸ��
Array(4021007,10),//��ʯ
Array(4020008,1),//��ˮ��ĸ��
Array(4021008,10)//��ˮ��
);
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
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }

				

text += "\r\n          "+����+"#e��ӭʹ��#b"+����+"#r�ʺ���չ���#k"+����+"  #n\r\n\r\n\r\n"   
text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
text += "#L1#"+����+"��������"+����+"#l      #L2#"+����+"�������"+����+"#l\r\n\r\n"
text += "#L6#"+����+"�߼�����"+����+"#l      #L4#"+����+"�����ֽ�"+����+"#l\r\n\r\n"
text += "#L5#"+����+"�ռ�����"+����+"#l      #L3#"+����+"��ʯ����"+����+"#l\r\n\r\n"	
text += "#L7#"+����+"��ʯ����2"+����+"#l     #L7#"+����+"��ʯ����2"+����+"#l\r\n\r\n"
text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"		 
cm.sendSimple(text);  
} else if(status == 1){
			if (selection == 5) {
				var text ="ϵͳ�Զ���⵽����Ի��յļ���������:\r\n\r\n";
				for(var i = 0; i < hsjns.length; i++){
					var hssl = cm.getPlayer().getItemQuantity(hsjns[i], false);
					if(hssl != 0){
						text += "#v"+hsjns[i]+"##t"+hsjns[i]+"# �� "+hssl+"\r\n";
						hsddd += hssl;
					}
				}
				text += "һ�����Ի��� #r#e"+hsddd+"#n#k �����";
				sele = 0;
				cm.senNXesNo(text);
				
		}else if (selection == 1) {
            cm.openNpc(9900004, 20040);

        }else if (selection == 2) {
            cm.openNpc(9900004, 20041);

        } else if (selection == 4) {
            cm.openNpc(9900004, 35);

        }else if (selection == 6) {
            cm.openNpc(9900004, 20042);
			
		}else if (selection == 7) {
            cm.openNpc(2070000, 3);
			
		}else if (selection == 8) {
            cm.openNpc(9900004, 520);

        } else if (selection == 3) {
				var text ="ϵͳ�Զ���⵽����Ի��յĿ�ʯ����:\r\n\r\n";
				for(var i = 0; i < hsks.length; i++){
					var hssl = cm.getPlayer().getItemQuantity(hsks[i][0], false);
					var hssl1 = hssl * hsks[i][1];
					if(hssl != 0){
						text += "#v"+hsks[i][0]+"##t"+hsks[i][0]+"# �� "+hssl+"  #r#e"+hssl1+"#n#k�����\r\n";
						hsddd += hssl1;
					}
				}
				text += "һ�����Ի��� #r#e"+hsddd+"#n#k �����";
				sele = 1;
				cm.senNXesNo(text);
				
			}
		} else if(status == 2){
			if(sele == 0){
				if(hsddd != 0){
					for(var i = 0; i < hsjns.length; i++){
						cm.removeAll(hsjns[i]);
					}
					cm.gainNX(hsddd);
					cm.sendOk("�һ��ɹ�~!����� "+hsddd+" �����");
					cm.����(1, "����ţ[" + cm.getPlayer().getName() + "]ͨ�����ܻ���վ��ȡ��"+hsddd+" �����");
					cm.dispose();
				} else {
					cm.sendOk("��û�п��Ի��յļ�����Ŷ~!");
					cm.dispose();
				}
			} else if(sele == 1){
				if(hsddd != 0){
					for(var i = 0; i < hsks.length; i++){
						cm.removeAll(hsks[i][0]);
					}
					cm.gainNX(hsddd);
					cm.sendOk("�һ��ɹ�~!����� "+hsddd+" �����");
					cm.����(1, "����ţ[" + cm.getPlayer().getName() + "]ͨ����ʯ����վ��ȡ��"+hsddd+" �����");
					cm.dispose();
				} else {
					cm.sendOk("��û�п��Ի��յĿ�ʯŶ~!");
					cm.dispose();
				}
			} else {
				cm.sendOk(sele);
			}
		}
    }
}
