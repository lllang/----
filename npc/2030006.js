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
    cm.getPlayer().setBossLog("���ѵ�", 1, cm.getmoneyb());
    /*cm.getPlayer().setBossLog("�ۼ���������",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("�����ۼ�����",0,cm.getmoneyb());*/
    cm.setmoneyb(-cm.getmoneyb());
    // cm.clearSkills();
    //cm.���﹥��();
    //cm.��ȡ����ȼ�()
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
            text += "#e��ӭ����#r��ֵ�û�����ǰ���֣�" + cm.getPlayer().getAccountLog("�ۼ���������", 1) + "\r\n"
            text += " #k��ս��ͼ#n#b\r\n";

            text += "  #L0#����˵ð�ռҡ�����-��ɮ  >>       #r����������#b#l\r\n";
            text += "  #L1#��������ҡ�����-ʨ��  >>         #r����������#b#l\r\n";
            text += "  #L2#�������ʹ������-����  >>         #r����������#b#l\r\n";
            text += "  #L3#���������ǡ�����-����  >>         #r����������#b#l\r\n";
            text += "  #L4#���Ƿ���ʦ������ħ  >>            #r����������#b#l\r\n";
            text += "  #L5#����ǿ���ߡ�ʱ��Ʒ����  >>        #r����������#b#l\r\n";
            text += "  #L6#����֤������ħ��-Ѫ�潫��  >>   #r����������#b#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 300) {
                    cm.sendOk("��Ҫ 300 ���֡�");
                    cm.dispose();
                } else {
                    cm.warp(209000001, 0);
                    cm.dispose();
                }
            } else if (selection == 1) {
                if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 1000) {
                    cm.sendOk("��Ҫ 1000 ���֡�");
                    cm.dispose();
                } else {
                    cm.warp(209000003, 0);
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 2000) {
                    cm.sendOk("��Ҫ 2000 ���֡�");
                    cm.dispose();
                } else {
                    cm.warp(209000004, 0);
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 3000) {
                    cm.sendOk("��Ҫ 3000 ���֡�");
                    cm.dispose();
                } else {
                    cm.warp(209000005, 0);
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 4000) {
                    cm.sendOk("��Ҫ 4000 ���֡�");
                    cm.dispose();
                } else {
                    cm.warp(209000006, 0);
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 5000) {
                    cm.sendOk("��Ҫ 5000 ���֡�");
                    cm.dispose();
                } else {
                    cm.warp(209000007, 0);
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.getPlayer().getAccountLog("�ۼ���������", 1) < 10000) {
                    cm.sendOk("��Ҫ 10000 ���֡�");
                    cm.dispose();
                } else {
                    cm.warp(209000008, 0);
                    cm.dispose();
                }
            }
        }
    }
}
