var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �����Ʒ = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
function start() {
    /*cm.getPlayer().setBossLog("���ѵ�",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("�ۼ���������",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("�����ۼ�����",0,cm.getmoneyb());
    cm.setmoneyb(-cm.getmoneyb());*/
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
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#b������Ժϳɼ�Ʒװ��#k\r\n"

            text += "#L0#" + ��ɫ�ǵ� + "�һ�#i1113037#(#rȫ����+66#k),��Ҫ#i1112951#,#i1112952##l\r\n";

            text += "#L1#" + ��ɫ�ǵ� + "�һ�#i1112793#(#rȫ����+50#k),��Ҫ#i1112444#,#i1112915##l\r\n";

            text += "#L2#" + ��ɫ�ǵ� + "�һ�#i1113089#(#rȫ����+88#k),��Ҫ#i1112776#,#i1112764#,#i1112768#,#i1112772##l\r\n";

            text += "#L3#" + ��ɫ�ǵ� + "�һ�#i1012174#(180��),��Ҫ��#i1012174#(150��),#i1012174#(130��),#i1012174#(100��),#i1012174#(90��)#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.haveItem(1112951, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else if (cm.haveItem(1112952, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(1112951, -1);
                    cm.gainItem(1112952, -1);
                    cm.gainItem(1113037, 66, 66, 66, 66, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (cm.haveItem(1112444, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else if (cm.haveItem(1112915, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(1112915, -1);
                    cm.gainItem(1112444, -1);
                    cm.gainItem(1112793, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }

            } else if (selection == 2) {
                if (cm.haveItem(1112776, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else if (cm.haveItem(1112764, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else if (cm.haveItem(1112768, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else if (cm.haveItem(1112772, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(1112776, -1);
                    cm.gainItem(1112764, -1);
                    cm.gainItem(1112768, -1);
                    cm.gainItem(1112772, -1);
                    cm.gainItem(1113089, 88, 88, 88, 88, 0, 0, 88, 88, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }

            } else if (selection == 3) {
                if (cm.haveItem(1012170, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else if (cm.haveItem(1012171, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else if (cm.haveItem(1012172, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else if (cm.haveItem(1012173, 1) == false) {
                    cm.sendOk("������߲��㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(1012170, -1);
                    cm.gainItem(1012171, -1);
                    cm.gainItem(1012172, -1);
                    cm.gainItem(1012173, -1);
                    cm.gainItem(1012174, 1);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }
            }
        }
    }
}
