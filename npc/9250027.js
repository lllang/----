var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ��ֵ1 = 3000;
var ��� = 1000000;

//�Զ������ݣ� Array(�һ��ĵ���,�һ��ĵ�������,�һ���Ҫ�ĵ���,��Ҫ�ĵ�������),
var itemlist = Array(
    Array(2041332, 1, 4310143, 10),
	Array(2340000, 1, 4310143, 30),
    Array(2049323, 1, 4310143, 30),
    Array(2041226, 1, 4310143, 50),
	Array(4310148, 1, 4310143, 50),
    Array(2047954, 1, 4310143, 100),
	Array(4442001, 1, 4310143, 150),
    Array(2531006, 1, 4310143, 350),
	Array(4001430, 1, 4310143, 350),
	Array(3994839, 1, 4310143, 350),
    Array(4442100, 1, 4310143, 400),
    Array(4443000, 1, 4310143, 12888)
	

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
            text = "                "+cm.ms()+" - BOSS�Ҷһ�\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "#�һ���#b#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#" + itemlist[i][1] + "�� - ��Ҫ��#v" + itemlist[i][2] + "#" + itemlist[i][3] + "��#k#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - ��ǰ�һ����ߣ�#r#i" + itemlist[selects][0] + "#" + itemlist[selects][1] + "#k\r\n\r\n"
            //txt += " - �һ���Ҫ���ߣ�#d" + itemlist[selects][2] + "#k\r\n\r\n"
            txt += " - �һ���Ҫ������#r" + itemlist[selects][3] + "��#k \r\n\r\n"
			txt += " - ȷ��Ҫ�һ���\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection
            var itemid = itemlist[selects][0];
            if (cm.haveItem(itemlist[selects][2], itemlist[selects][3])) {
                cm.gainItem(itemlist[selects][2], -itemlist[selects][3]);
                cm.gainItem(itemlist[selects][0], itemlist[selects][1]);
                cm.sendOk("�һ��ɹ�");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻�ĵ��ߡ�");
                cm.dispose();
            }
        }
    }//mode
}//f