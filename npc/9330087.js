var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ��ֵ1 = 3000;
var ��� = 1000000;
var itemlist = Array(
    
    Array(1032219, 50000),//��ʮ���ȯ

    Array(1132215, 50000)//��ʮ���ȯ

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
            text = "ʹ��#ϡ��װ��#k�����Զһ���ȯŶ����֪�����������ֶһ���ȯ�أ�#r���һ�ǰ��ȷ�������ǲ����д�ϡ��װ�������������д浵����Ȼ�ص��Լ����𣡣�#d\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "##d����#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "# �һ���ȯ #r" + itemlist[i][1] + "#d ��#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - ��ǰ���յ��ߣ�#r#i" + itemlist[selects][0] + "\r\n\r\n"
            txt += " - ����װ����ȯ��#r" + itemlist[selects][1] + "#k��\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection;
            var itemid = itemlist[selects][0];
            if (cm.haveItem(itemid, 1) == false) {
                cm.sendOk("ȷ���������Ƿ��и�װ��");
                cm.dispose();
            } else {
                cm.gainNX(itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], -1);
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            }
        }
    }
}