var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ��ֵ1 = 3000;
var ��� = 1000000;
var itemlist = Array(
    Array(1402214, 10),
    Array(1432182, 10),
    Array(1422156, 10),
    Array(1472230, 10),
    Array(1332242, 10),
    Array(1452220, 10),
    Array(1462208, 10),
    Array(1382226, 10),
    Array(1482183, 10),
    Array(1492194, 10)
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
            text = "ʹ�ú�ɫ���������Զһ�ð�ձ�Ŷ����֪�����������ֶһ�ð�ձ��أ�#r(�һ�ǰ��ȷ���������ǲ��ǽ�ҳ���15E.���������¶һ�ʧ�ܵģ��Լ�����)\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#d#L" + i + "##v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#1�� �һ�#v4310088# x " + itemlist[i][1] + "#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " ȷ�ϻ���װ��Ϊ��#r#i" + itemlist[selects][0] + "\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = 1
            var itemid = itemlist[selects][0];
            if (cm.canHold(4310088,10) == false) {
                cm.sendOk("���ı����ռ䲻�㣬��������ٶһ���");
                cm.dispose();
                return;
            }
            if (cm.haveItem(itemid,1) == false) {
                cm.sendOk("�뱣֤�㱳�����Ƿ��иõ��ߡ�");
                cm.dispose();
            } else {
                cm.gainItem(4310088, 10);
                cm.gainItem(itemid, -jg);
                cm.sendOk("���ճɹ�");
                cm.dispose();
            }
        }
    }//mode
}//f