var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
    Array(1041073, 1),
    Array(1042097, 1),
    Array(1042125, 1),
    Array(1042198, 1),
    Array(1042227, 1),
    Array(1042199, 1),
    Array(1042200, 1)
);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            text = "#r�ϳ�ʱװ��ȫ150���ԣ���Ҫ������Ʒ~��\r\n";
            text += "#v4000268# * 300��#v4000269#*300��#v4000270#*300��#v4001004#*100��#v4000054#*20��#v4170001#*30��#v4170002#*30��#v4170005#*30��#v4000463#*50\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "#����#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "##l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - ��ǰ�һ����ߣ�#r#i" + itemlist[selects][0] + "\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection
            var itemid = itemlist[selects][0];
            if (cm.canHold(itemid, 1) == false) {
                cm.sendOk("���ı����ռ䲻�㣬��������ٶһ���");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000268, 300) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000269, 300) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000270, 300) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4001004, 100) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000054, 20) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4170001, 30) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4170002, 30) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4170005, 30) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000463, 50) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
            } else {
                cm.gainItem(4000268, -300);
                cm.gainItem(4000269, -300);
                cm.gainItem(4000270, -300);
                cm.gainItem(4001004, -100);
                cm.gainItem(4000054, -20);
                cm.gainItem(4170001, -30);
                cm.gainItem(4170002, -30);
                cm.gainItem(4170005, -30);
                cm.gainItem(4000463, -50);
                cm.gainItem(itemlist[selects][0], 150, 150, 150, 150, 50, 50, 150, 150, 50, 50, 50, 50, 10, 10);
                cm.sendOk("�һ��ɹ�~");
                cm.dispose();
            }
        }//mode
    }
}