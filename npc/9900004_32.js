var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ��ֵ1 = 3000;
var ��� = 1000000;
var itemlist = Array(
    Array(1002357, 1, 666),
    Array(1002926, 1, 666),
    Array(1002927, 1, 666)
    //Array(4000000, 2000, 1000),
    //Array(4000016, 2000, 1000),
    //Array(4000004, 3000, 1500),
    //Array(4000001, 3000, 2000),
    //Array(4000012, 3000, 2500),
    //Array(4000177, 3000, 3000),
    //Array(4000025, 3000, 3000),
    //Array(4000069, 3000, 3000),
    //Array(4000268, 3000, 3000),
    //Array(4000274, 3000, 3000),
    //Array(4000432, 3000, 3000)

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
            text = "                ð �� �� - �� ש ϵ ͳ\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "#�ύ��#b#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "##k#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - ��ǰ�ύ���ߣ�#r#i" + itemlist[selects][0] + "##k\r\n\r\n"
            txt += " - �������������#d" + itemlist[selects][1] + "#k\r\n\r\n"
            txt += " - ���յ��߼۸�#r" + itemlist[selects][2] + "W#k \r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection
            var itemid = itemlist[selects][0];
            if (cm.haveItem(itemlist[selects][0], itemlist[selects][1])) {
                cm.gainMeso(itemlist[selects][2] * 10000);
                cm.gainItem(itemlist[selects][0], -itemlist[selects][1]);
                cm.sendOk("���ճɹ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻�ĵ��ߡ�");
                cm.dispose();
            }
        }
    }//mode
}//f