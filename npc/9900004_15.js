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
    cm.getPlayer().setBossLog("���ѵ�",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("�ۼ���������",1,cm.getmoneyb());
    cm.setmoneyb(-cm.getmoneyb());
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
            // text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"
            text += "              #e#d�� ð �� �� ת ְ �� �� ��#d#k#n             \r\n"
            text += " #L2#ְҵתְ#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.getPlayer().maxSkills();
            cm.sendOk("���ܼ�����ϡ�");
            cm.dispose();

        } else if (selection == 2) {
            cm.openNpc(9900004, 151);

        } else if (selection == 1234567) {
            cm.dispose();
            cm.openWeb("http://www.baidu.com");

        } else if (selection == 910000000) {
            cm.warp(910000000);
            cm.dispose();

        } else if (selection == 9310034) {
            var text = "               �� �� �� �� Ϣ �� ѯ �� \r\n\r\n";
            text += "#d - ��ǰ #b����ʱ��#d �ۼƣ�#r" + cm.getGamePoints() + "#d ����\r\n\r\n";
            text += "#d - ��ǰ #b��  ȯ#d ��#r" + cm.getPlayer().getCSPoints(1) + "#d ��\r\n\r\n";
            text += "#d - ��ǰ #b����ȯ#d ��#r" + cm.getPlayer().getCSPoints(2) + "#d ��\r\n\r\n";
            cm.sendOk(text)
            cm.dispose();


        } else if (selection == 3) {
            cm.openNpc(9900004, 9000036);

        } else if (selection == 4) {
            cm.openNpc(9900004, 4);

        } else if (selection == 5) {
            cm.openNpc(9900004, 5);

        } else if (selection == 6) {
            cm.openNpc(9310071, 0);

        } else if (selection == 7) {
            cm.openNpc(9900004, 7);

        } else if (selection == 8) {
            cm.openNpc(9310019, 10);

        } else if (selection == 9) {
            cm.openNpc(9900004, 9);

        } else if (selection == 10) {
            cm.openNpc(9900004, 9000041);

        } else if (selection == 11) {
            cm.openNpc(9900004, 11);

        } else if (selection == 12) {
            cm.openNpc(9900004, 12);

        } else if (selection == 13) {//���ʲ�ѯ
            cm.openNpc(9900004, 13);

        } else if (selection == 14) {//��ݴ���
            cm.openNpc(9900004, 14);

        } else if (selection == 15) {
            cm.openNpc(9900004, 15);

        } else if (selection == 16) {
            cm.openNpc(9900004, 16);

        } else if (selection == 17) {//�ӻ��̵�
            cm.openShop(30);
            cm.dispose();
        } else if (selection == 18) {//�ͼ�װ���̵�
            cm.openShop(39);
            cm.dispose();

        } else if (selection == 19) {
            cm.openNpc(9040004, 0);

        } else if (selection == 788) {
            cm.openNpc(9040004, 1);

        } else if (selection == 789) {
            cm.openNpc(9900004, 1246);

        } else if (selection == 20) {
            cm.openNpc(9900004, 20);

        } else if (selection == 21) {
            cm.openNpc(9900004, 21);

        } else if (selection == 22) {
            cm.openNpc(9900004, 22);

        } else if (selection == 23) {
            cm.openNpc(9900004, 7001);

        } else if (selection == 223) {
            cm.openNpc(9900004, 23);

        } else if (selection == 24) {
            cm.openNpc(9900004, 24);

        } else if (selection == 25) {
            cm.openNpc(9900004, 25);

        } else if (selection == 26) {
            cm.openNpc(9900004, 26);

        } else if (selection == 27) {
            cm.openNpc(9900004, 27);

        } else if (selection == 28) {
            cm.openNpc(9900004, 28);

        } else if (selection == 29) {
            cm.openNpc(9900004, 29);

        } else if (selection == 30) {
            cm.openNpc(9900004);

        } else if (selection == 31) {
            cm.openNpc(9900004, 31);

        } else if (selection == 32) {
            cm.openNpc(9900004, 32);

        } else if (selection == 33) {
            cm.openNpc(9900004, 33);

        } else if (selection == 34) {
            cm.openNpc(9900004, 34);

        } else if (selection == 35) {
            cm.openNpc(9900004, 35);

        } else if (selection == 36) {
            cm.openNpc(9900004, 36);

        } else if (selection == 37) {
            cm.openNpc(9900004, 37);

        } else if (selection == 38) {
            cm.openNpc(9900004, 38);

        } else if (selection == 39) {
            cm.openNpc(9900004, 39);

        } else if (selection == 40) {
            cm.openNpc(9900004, 40);

        } else if (selection == 41) {
            cm.openNpc(9900004, 31);

        } else if (selection == 1000) {//
            cm.openNpc(9310037, 0);

        } else if (selection == 1001) {//
            cm.openNpc(9900004, 1001);

        } else if (selection == 1002) {//
            cm.ˢ�µ�ͼ();
            cm.dispose();
        } else if (selection == 1003) {//
            cm.ˢ��״̬();
            cm.dispose();
        } else if (selection == 1004) {//
            cm.gainItem(5211047, 1, 1);//���ʵ�����
            cm.dispose();
        } else if (selection == 1005) {//
            cm.openNpc(9900004, 901);
        } else if (selection == 1006) {//
            cm.���ر���();
            cm.dispose();
        } else if (selection == 1007) {//
            cm.���ط�Ӧ��();
            cm.dispose();
        } else if (selection == 1008) {//
            cm.���ش��͵�();
            cm.dispose();
        } else if (selection == 1009) {//
            cm.openNpc(9330045, 0);

        } else if (selection == 1010) {//
            cm.�����̵�();
            cm.dispose();
        } else if (selection == 1011) {//
            cm.�����̳�2();
            cm.dispose();

        } else if (selection == 7003) {
            cm.openNpc(9900004, 7003);

        } else if (selection == 7004) {
            cm.openNpc(9310085, 0);
        }
    }
}
