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
var Բ�� = "#fEffect/CharacterEff/1022223/4/0#";
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

				

text += "\r\n                   "+Сѩ��+"#e��ӭʹ��#b"+Сѩ��+"  #n\r\n\r\n\r\n"   
text += "   "+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+"\r\n"
text += "#L0#"+�ٷ�+"�������"+�ٷ�+"#l       #L1#"+�ٷ�+"��������"+�ٷ�+"#l\r\n\r\n"
text += "#L2#"+�ٷ�+"˫������"+�ٷ�+"#l       #L3#"+�ٷ�+"ɾ������"+�ٷ�+"#l\r\n\r\n"
text += "#L4#"+�ٷ�+"����ϵͳ"+�ٷ�+"#l       #L5#"+�ٷ�+"�򱦵�ͼ"+�ٷ�+"#l\r\n\r\n"
text += "#L6#"+�ٷ�+"�ʼ�����"+�ٷ�+"#l       #L7#"+�ٷ�+"��Ҷ����"+�ٷ�+"#l\r\n\r\n"
//text += "#L10#"+�ٷ�+"ʦͽϵͳ"+�ٷ�+"#l       #L11#"+�ٷ�+"�м�BOSS"+�ٷ�+"#l\r\n\r\n"
//text += "#L13#"+�ٷ�+"ǰȥ����"+�ٷ�+"#l\r\n\r\n"
text += "   "+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+�ٷ�+Բ��+"\r\n"	
			

			cm.sendSimple(text); 

		} else if (status == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.openNpc(9021127, 1)
				
		   } else if (selection == 1) {
				cm.dispose();
				cm.openNpc(9021127, 2)

			} else if (selection == 2) {
				cm.dispose();
				cm.openNpc(9900004, 7)
				
			} else if (selection == 3) {
				cm.dispose();
				cm.openNpc(9000021, 2)
				
		    } else if (selection == 4) {
				cm.dispose();
				cm.openNpc(9330045, 0)
				
			} else if (selection == 5) {
				cm.dispose();
				cm.openNpc(9010000, 0)
				
			} else if (selection == 6) {
				cm.dispose();
				cm.openNpc(9310085, 0)
				
			} else if (selection == 7) {
				cm.dispose();
				cm.openNpc(9000041, 0)
			}
		}
	}
}

