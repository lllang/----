//importPackage(net.sf.odinms.client);
var status = 0;
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var �����Ʒ = "#v1302000#";
var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";


function start() {
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
        if (mode == 1)
            status++;
        else
            status--;


        if (status == 0) {


            var textz = "����Ҫ��Щʲô��\r\n\r\n";

            textz += "#d#L0##r�뿪����\r\n";

            textz += "#d#L1#���ص��߶���\r\n";

            //textz += "#d#L2#�ٻ�������������Ҫ�����ǣ�\r\n";

            //textz += "#d#L3#�ٻ�����������3000���ң�\r\n";

            cm.sendSimple(textz);


        } else if (status == 1) {

            if (selection == 0) {
                cm.warp(910000000, 0);
                cm.dispose();

            } else if (selection == 1) {
                cm.warpParty(cm.getPlayer().getMapId(), 0)
                cm.dispose();


            } else if (selection == 2) {
                if (cm.haveItem(4000186, 1) == false) {
                    cm.sendOk("���߲��㣬�޷��ٻ�.");
                    cm.dispose();
                } else {
                    cm.gainItem(4000186, -1);
                    cm.spawnMonster(8810026, 693, 94);
                    cm.dispose();
                }

            } else if (selection == 3) {
                if (cm.getMeso() < 30000000) {
                    cm.sendOk("��Ҳ��㣬�޷��ٻ�.");
                    cm.dispose();
                } else {
                    cm.gainMeso(-30000000);
                    cm.spawnMonster(8810026, 693, 94);
                    cm.dispose();
                }
            }
        }
    }
}
