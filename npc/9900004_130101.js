var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var add = "#fEffect/CharacterEff/1022223/4/0#";
var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var add = "#fEffect/CharacterEff/1112905/0/1#";//������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����
//var add = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var �ٷ� = "#fEffect/CharacterEff/1003252/0/0#";
var ���� = "#fEffect/CharacterEff/1032063/0/0#";
var �� = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var s = "#fUI/StatusBar/BtClaim/normal/0#";
var h = "#fUI/CashShop/CSEffect/effect/1#";
var Сѩ�� = "#fEffect/CharacterEff/1003393/0/0#";
var ��� = "#fUI/CashShop/Base/Tab/Enable/2#";//���
var ����4 = "#fEffect/CharacterEff/1042176/1/1#"; // ʵ����찮�ġ�С�͡�
var ����2 = "#fEffect/CharacterEff/1022223/3/0#"; // ������ɫ�ۺ찮��
var ����1 = "#fEffect/CharacterEff/1003271/0/0#"; // ʵ��ۺ찮��
var �����Ц ="#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";//�����Ц/1��/0΢Ц 

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#v1003861#   #e#r��ӭ����" + cm.ms() + "�ڲ�����  #v1003861##k#n\r\n"
			text += "#r#e----------------------------------------------#k#n\r\n";
			text += "��ǰ���ӵ�У�#r[" + cm.getPlayer().getMeso() + "]#k    Ŀǰ��ȯӵ�У�#r["+cm.getPlayer().getCSPoints(1)+"]#k#n\r\n"
			text += "#r#e----------------------------------------------#k#n\r\n";
            //text += " - ������ߣ�[ #v 4000031##r#c 4000031##k/1 ] \r\n"
			text += " - �ڲ⽱����#v2041213# x 3000 #v2614001# x 100  #v4002001# x 100  ���100��\r\n\r\n";
			text += "#L1##k" + aaa + "#d�������\r\n\r\n"

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 1) {//�����
                if (cm.getPlayer().getBossLog("������",1) >= 1 ) {
					cm.sendOk("���Ѿ���ɹ�һ���ˣ��޷��ٴ����");
					cm.dispose();
				
				} else {
					cm.getPlayer().setBossLog("������",1);
					//cm.gainItem(4000031, -1);
					//cm.gainItem(2041213, 3000);
					//cm.gainItem(2614001, 100);
					//cm.gainItem(4002001, 100);
					//cm.gainNX(1000000);
					cm.����(2, "�ʺ絺[" + cm.getPlayer().getName() + "]��������ȡ���ڲ�������");
					cm.sendOk("�ɹ���ɣ�");
					cm.dispose();
				}
            }
        }
    }
}
