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
            var text = "\r\n";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#L0#�һ����Ҷ100#v4001126# ��Ҫ#v4001266#*1\r\n";

            text += "#L1#�һ����Ҷ1000#v4001126# ��Ҫ#v4001266#*10\r\n";

            //text += "#L2#�һ�#v2460005#*1 ��Ҫ#v4001266#*7\r\n";

            //text += "#L3#�һ�#v2614000#*1 ��Ҫ#v4001266#*7\r\n";

            //text += "#L4#�һ�#v4310196#*1 ��Ҫ#v4001266#*2\r\n";

            //text += "#L5#�һ�#v4440000#*1��ɫ��������GM�һ��� ��Ҫ#v4001266#*15\r\n";

            //text += "#L6#�һ�#v4442000#*1������������GM�һ��� ��Ҫ#v4001266#*31\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.haveItem(4001266, 1) == false) {
                    cm.sendOk("���߲��㣬�޷��һ���");
                    cm.dispose();
                } else {
                    cm.gainItem(4001126,100);
                    cm.gainItem(4001266, -1);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (cm.haveItem(4001266, 10) == false) {
                    cm.sendOk("���߲��㣬�޷��һ���");
                    cm.dispose();
                } else {
                    cm.gainItem(4001126,1000);
                    cm.gainItem(4001266, -10);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.haveItem(4001266, 7) == false) {
                    cm.sendOk("���߲��㣬�޷��һ���");
                    cm.dispose();
                } else {
                    cm.gainItem(2460005, 1);
                    cm.gainItem(4001266, -7);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(4001266, 7) == false) {
                    cm.sendOk("���߲��㣬�޷��һ���");
                    cm.dispose();
                } else {
                    cm.gainItem(2614000, 1);
                    cm.gainItem(4001266, -7);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(4001266, 2) == false) {
                    cm.sendOk("���߲��㣬�޷��һ���");
                    cm.dispose();
                } else {
                    cm.gainItem(4310196, 1);
                    cm.gainItem(4001266, -2);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.haveItem(4001266, 31) == false) {
                    cm.sendOk("���߲��㣬�޷��һ���");
                    cm.dispose();
                } else {
                    cm.gainItem(4440000,1);
                    cm.gainItem(4001266, -15);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.haveItem(4001266, 31) == false) {
                    cm.sendOk("���߲��㣬�޷��һ���");
                    cm.dispose();
                } else {
                    cm.gainItem(4442000, 1);
                    cm.gainItem(4001266, -31);
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }
            }
        }
    }
}

