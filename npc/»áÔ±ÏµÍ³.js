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
function 
start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "#eԪ���һ���ȯ����#r1��10��#k���˺��ۼ��������֣�#r" + cm.getPlayer().getAccountLog("�ۼ���������", 1) + "#k\r\n\r\n";
            text += "#e                 "+����+"#r��Ա����#k"+����+"  #n\r\n"   
		
            text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
		    text += " #e#L7##r��Ա��ͨ��ÿ�ո���#l       \r\n\r\n\r\n"
			//text += " #e#L1##b��ȡ�ۼ��������#l \r\n\r\n\r\n"
			 text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
            text += "#e#L4#��5000Ԫ���һ���ȯ�����Զһ� #r50000#k��ȯ��\r\n\r\n";
            text += "#e#L5#��10000Ԫ���һ���ȯ�����Զһ� #r100000#k��ȯ��\r\n\r\n";
            //text += "#e#L3#��#bȫ��Ԫ��#k�һ���ȯ���ܹ����Զһ� #r" + cm.getPlayer().getAccountLog("�ۼ���������_����",1) * 1000 + "#k��ȯ��\r\n";
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
		    //text += "#L4##v4031250#�һ���ֵ1��1\r\n"
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 4) {
                if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= 5000){
					cm.getPlayer().setAccountLog("�ۼ���������_����",1,-5000);
					cm.gainNX(+50000);
					cm.sendOk("�һ��ɹ�~!");
					cm.dispose();
				} else {
					cm.sendOk("��Ԫ������50~!");
					cm.dispose();
				}

            } else if (selection == 5) {
                if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= 10000){
					cm.getPlayer().setAccountLog("�ۼ���������_����",1,-10000);
					cm.gainNX(+100000);
					cm.sendOk("�һ��ɹ�~!");
					cm.dispose();
				} else {
					cm.sendOk("��Ԫ������100~!");
					cm.dispose();
				}
            }else if (selection == 6) {
            cm.openNpc(9000069,3);
            }else if (selection == 7) {
            cm.openNpc(9300001,16);
            }else if (selection == 1) {
                cm.openNpc(9310037, 2);
            } else if (selection == 2) {
                cm.openNpc(9310037, 3);
            } else if (selection == 3) {
                cm.gainNX(cm.getPlayer().getAccountLog("�ۼ���������_����", 1) * 1000);
                cm.getPlayer().setAccountLog("�ۼ���������_����", 1, -cm.getPlayer().getAccountLog("�ۼ���������_����", 1));
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            }
        }
    }
}
