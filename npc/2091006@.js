var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ��ֵ1 = 3000;
var ��� = 1000000;
var itemlist = Array(
    Array(1302275, 1),
    Array(1312153, 1),
    Array(1322203, 1),
    Array(1332225, 1),
    Array(1492179, 1),
    Array(1372177, 1),
    Array(1382208, 1),
    Array(1402196, 1),
    Array(1412135, 1),
    Array(1422140, 1),
	Array(1432167, 1),
	Array(1442223, 1),
	Array(1452205, 1),
	Array(1462193, 1),
	Array(1472214, 1),
	Array(1482168, 1)
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
            text = "���²��Ͽɶһ����䣺\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#d#L" + i + "#�һ�#v" + itemlist[i][0] + "# ��Ҫ#v4170002#30�� + #v4000463#30��#l\r\n\r\n";
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
            jg = 1;
            var itemid = itemlist[selects][0];
            if (cm.canHold(itemid) == false) {
                cm.sendOk("���ı����ռ䲻�㣬��������ٶһ���");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4170002,30) == false) {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000463,30)) {
                cm.gainItem(4170002,-30);
                cm.gainItem(4000463,-30);
                cm.gainItem(itemlist[selects][0], 1);
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("������߲��㣬�޷��һ�");
                cm.dispose();
            }
        }
    }//mode
}//f