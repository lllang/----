/* global cm */

var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ����1 = 4031335
var ����2 = 4031334
var ����3 = 4031333
var ����4 = 4031332
var ����5 = 4031331
function start() {
    if (cm.getPlayer().getBossLog("�ȼ�����_5", 1) > 0) {
        cm.sendOk("ȫ����������ȡ��ϡ�");
        cm.dispose();
    } else {
        status = -1;
        action(1, 0, 0);
    }
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "              #e#d�� ð �� �� �� �� �� �� ��#d#k#n             \r\n\r\n"

            if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getBossLog("�ȼ�����_1", 1) == false) {
                text += "#r#L1#��ȡ�����Ѵ�ɣ�����ȡ������#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getBossLog("�ȼ�����_1", 1) == true) {
                text += ""
            } else {
                text += "  #b�ȼ�δ�ﵽ #r30#b �����޷���ȡ������\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getBossLog("�ȼ�����_2", 1) == false) {
                text += "#r#L2#��ȡ�����Ѵ�ɣ�����ȡ������#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getBossLog("�ȼ�����_2", 1) == true) {
                text += ""
            } else {
                text += "  #b�ȼ�δ�ﵽ #r70#b �����޷���ȡ������\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getBossLog("�ȼ�����_3", 1) == false) {
                text += "#r#L3#��ȡ�����Ѵ�ɣ�����ȡ������#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getBossLog("�ȼ�����_3", 1) == true) {
                text += ""
            } else {
                text += "  #b�ȼ�δ�ﵽ #r120#b �����޷���ȡ������\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getBossLog("�ȼ�����_4", 1) == false) {
                text += "#r#L4#��ȡ�����Ѵ�ɣ�����ȡ������#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getBossLog("�ȼ�����_4", 1) == true) {
                text += ""
            } else {
                text += "  #b�ȼ�δ�ﵽ #r200#b �����޷���ȡ������\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 250 && cm.getPlayer().getBossLog("�ȼ�����_5", 1) == false) {
                text += "#r#L5#��ȡ�����Ѵ�ɣ�����ȡ������#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 250 && cm.getPlayer().getBossLog("�ȼ�����_5", 1) == true) {
                text += ""
            } else {
                text += "  #b�ȼ�δ�ﵽ #r250#b �����޷���ȡ������\r\n\r\n"
            }
            cm.sendSimple(text);


        } else if (selection == 1) {
            cm.gainItem(2000004, 100);//100������ҩˮ
            cm.gainNX(50000)//��ȯ5��
            cm.getPlayer().setBossLog("�ȼ�����_1", 1, 1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ30������ȡ��100������ҩˮ����ȯ5���");
            cm.dispose();
        } else if (selection == 2) {
            cm.gainItem(2000005, 200);//200������ҩˮ
            cm.gainItem(2022070, 1);//�����ߵ�ף��1��
            cm.gainDY(80000)//����80000��
            cm.getPlayer().setBossLog("�ȼ�����_2", 1, 1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ70������ȡ��200������ҩˮ��ף������1��������80000��");
            cm.dispose();
        } else if (selection == 3) {
            cm.gainItem(1122017, 1);//�����׹
            cm.gainItem(4001126, 2000);//2000����Ҷ
            cm.gainMeso(+5000000);//��� 1000��
            cm.getPlayer().setBossLog("�ȼ�����_3", 1, 1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ120���������׹1����500����Ҷ�����500��");
            cm.dispose();
        } else if (selection == 4) {
            cm.gainItem(4002001, 20);//����ţ��Ʊ20��
            cm.gainItem(4002000, 20);//��ţ��Ʊ20��
            cm.gainItem(4031456, 150);//��Ҷ��150��
            cm.gainNX(100000)//��ȯ10��
            cm.getPlayer().setBossLog("�ȼ�����_4", 1, 1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ200������ȡ������ţ��Ʊ1�ţ��ʼ���1�ţ����ִ�߼�����1��");
            cm.dispose();
        } else if (selection == 5) {
            var selStr = "��ѡ��������ĵ��߽�����k\r\n";
            selStr += "  #L90#ѡ��#v" + ����1 + "##z" + ����1 + "##l\r\n";
            selStr += "  #L91#ѡ��#v" + ����2 + "##z" + ����2 + "##l\r\n";
            selStr += "  #L92#ѡ��#v" + ����3 + "##z" + ����3 + "##l\r\n";
            selStr += "  #L93#ѡ��#v" + ����4 + "##z" + ����4 + "##l\r\n";
            selStr += "  #L94#ѡ��#v" + ����5 + "##z" + ����5 + "##l\r\n";
            cm.sendSimple(selStr);

        } else if (selection == 90) {
            cm.gainItem(����1, 1);
            cm.gainItem(4002002, 1);//ľ����Ʊ1��
            cm.gainItem(4000313, 100);//�ƽ��Ҷ100��
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//���
            cm.getPlayer().setBossLog("�ȼ�����_5", 1, 1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ250������ȡ��ľ����Ʊ1�ţ��ƽ��Ҷ100��");
            cm.dispose();

        } else if (selection == 91) {
            cm.gainItem(����2, 1);
            cm.gainItem(4002002, 1);//ľ����Ʊ1��
            cm.gainItem(4000313, 100);//�ƽ��Ҷ100��
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//���
            cm.getPlayer().setBossLog("�ȼ�����_5", 1, 1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ250������ȡ��ľ����Ʊ1�ţ��ƽ��Ҷ100��");
            cm.dispose();
        } else if (selection == 92) {
            cm.gainItem(����3, 1);
            cm.gainItem(4002002, 1);//ľ����Ʊ1��
            cm.gainItem(4000313, 100);//�ƽ��Ҷ100��
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//���
            cm.getPlayer().setBossLog("�ȼ�����_5", 1, 1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ250������ȡ��ľ����Ʊ1�ţ��ƽ��Ҷ100��");
            cm.dispose();
        } else if (selection == 93) {
            cm.gainItem(����4, 1);
            cm.gainItem(4002002, 1);//ľ����Ʊ1��
            cm.gainItem(4000313, 100);//�ƽ��Ҷ100��
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//���
            cm.getPlayer().setBossLog("�ȼ�����_5", 1, 1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ250������ȡ��ľ����Ʊ1�ţ��ƽ��Ҷ100��");
            cm.dispose();
        } else if (selection == 94) {
            cm.gainItem(����5, 1);
            cm.gainItem(4002002, 1);//ľ����Ʊ1��
            cm.gainItem(4000313, 100);//�ƽ��Ҷ100��
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//���
            cm.getPlayer().setBossLog("�ȼ�����_5", 1, 1);
            cm.��ʱ�浵();
            cm.sendOk("��ȡ�����ɹ���");
            cm.����(1, "��ң�" + cm.getPlayer().getName() + "���ȼ��ﵽ250������ȡ��ľ����Ʊ1�ţ��ƽ��Ҷ100��");
            cm.dispose();

        }
    }
}


