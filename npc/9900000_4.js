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

				

text += "\r\n                 "+����+"#e��ս����#b"+����+"  #n\r\n"   
//text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
text += "  #L1#��ս�ر���#k>>>>>>>     ��Ҫ#v 2041213#150��#l\r\n\r\n";
text += "    #b��սʱ��#b#r>>>>>> ��Ҫ200�� ʱ��60����\r\n\r\n";
text += "    #b������#b #v 2049323# #v 2533000# #v 2613008# #v 2049600# #v 2531000# #v 4002001# #v 2614001# #v 2614000# #v 2610003# #v 2610001#\r\n\r\n";
text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"		 
cm.sendSimple(text);  
}  else if (selection == 1) { 
            if(cm.haveItem(2041213,150) && cm.getPlayerCount(921100300) == 0){
			cm.getMap(921100300).resetFully();
			cm.gainItem(2041213,-150); 
		    cm.warpBack(921100300,910000015,63);
			//cm.spawnMobOnMap(2400020, 1, 25, 201, 970000004, 35000000);
			cm.sendOk("����5���ӵ�ʱ�䡣");
			cm.����(2, "�ʺ絺[" + cm.getPlayer().getName() + "]��ս�ر���60���ӣ�ף�����ض��飡");
			cm.dispose();
			}else{
			cm.sendOk("��������/#v 2041213#�����޷�����");
			cm.dispose();
			//cm.����(1, "�ʺ絺[" + cm.getPlayer().getName() + "]�𾴵Ļ국���㻹û��ʦ������ս����ǰ������̵깺��");
			cm.dispose();
		}	
	}
}
}