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

				

text += "\r\n                 "+����+"#eԪ���һ�#b"+����+"  #n\r\n\r\n\r\n"   
text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
text += "#L2#"+����+"Ԫ���һ�ҼԪ��#l\r\n\r\n"
text += "#L3#"+����+"Ԫ���һ�ʰԪ��#l\r\n\r\n"
text += "#L4#"+����+"Ԫ���һ���ʰԪ��#l\r\n\r\n"

text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"		 
cm.sendSimple(text);  
}  else if (selection == 1) { 
            if(cm.haveItem(4031217,1)){
			cm.gainItem(4031217,-1); 
		    cm.warpBack(921100300,910000000,180);
			cm.sendOk("����3���ӵ�ʱ�������Ρ�");
			cm.����(2, "�ʺ絺[" + cm.getPlayer().getName() + "]ʹ��Կ�״��˵�����ͼ������������3���ӣ�");
			cm.dispose();
			}else{
			cm.sendOk("��û��Կ�ף�������Ρ�");
			cm.dispose();
			cm.����(1, "�ʺ絺[" + cm.getPlayer().getName() + "]û��Կ�׻�����������ͼ���涪��/�һ��ɻ����Ʊ��");
			cm.dispose();
		}	
	}else if (selection == 2) { 
            if(cm.haveItem(2041213,1)){
			cm.gainItem(2041213,-1); 
		    cm.getPlayer().setAccountLog("�ۼ���������_����",1,1);
			cm.sendOk("�һ��ɹ���");
			cm.����(1, "����ţ[" + cm.getPlayer().getName() + "]ͨ��ɣ��˹�һ�1Ԫ����");
			cm.dispose();
			}else{
			cm.sendOk("��û��#v2041213#һ������ҼԪ����");
			cm.dispose();
		}
	}else if (selection == 3) { 
            if(cm.haveItem(2041213,10)){
			cm.gainItem(2041213,-10); 
		    cm.getPlayer().setAccountLog("�ۼ���������_����",1,10);
			cm.sendOk("�һ��ɹ���");
			cm.����(1, "����ţ[" + cm.getPlayer().getName() + "]ͨ��ɣ��˹�һ�10Ԫ����");
			cm.dispose();
			}else{
			cm.sendOk("��û��#v2041213#ʰ������ʰԪ����");
			cm.dispose();
		}
	}else if (selection == 4) { 
            if(cm.haveItem(2041213,50)){
			cm.gainItem(2041213,-50); 
		    cm.getPlayer().setAccountLog("�ۼ���������_����",1,50);
			cm.sendOk("�һ��ɹ���");
			cm.����(1, "����ţ[" + cm.getPlayer().getName() + "]ͨ��ɣ��˹�һ�50Ԫ����");
			cm.dispose();
			}else{
			cm.sendOk("��û��#v2041213#��ʰ��������ʰԪ����");
			cm.dispose();
		}	
	}
}
}