var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ��ֵ1 = 3000;
var ��� = 1000000;

//�Զ������ݣ� Array(�һ��ĵ���,�һ��ĵ�������,�һ���Ҫ�ĵ���,��Ҫ�ĵ�������),
var itemlist = Array(
    Array(2049345, 10, 2041214, 12),
	Array(2049346, 10, 2041214, 12),
    Array(2049347, 10, 2041214, 12),
	Array(2049348, 10, 4442001, 12),
	Array(2049349, 10, 4442001, 12),
	Array(2041214, 10, 2049345, 12),
	Array(2041214, 10, 2049346, 12),
    Array(2041214, 10, 2049347, 12),
	Array(4442001, 10, 2049348, 12),
	Array(4442001, 10, 2049349, 12)
  

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
            text = "                "+cm.ms()+" - ��ǿ�һ�\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "#�һ���#b#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#" + itemlist[i][1] + "�� - ��Ҫ��#v" + itemlist[i][2] + "#" + itemlist[i][3] + "��#k#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - �һ���ǰ���ߣ�#r#i" + itemlist[selects][0] + "#" + itemlist[selects][1] + "��#k\r\n\r\n"
            txt += " - ��Ҫ���ĵ��ߣ�#r#i" + itemlist[selects][2] + "#"+ itemlist[selects][3] + "��#k\r\n\r\n"
            txt += " - �һ���Ҫ�����ѣ�#r" +" 500W���  "+ "\r\n\r\n"
			txt += " - ȷ��Ҫ�һ���\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection
            var itemid = itemlist[selects][0];
            if (cm.haveItem(itemlist[selects][2], itemlist[selects][3])) {
                cm.gainItem(itemlist[selects][2], -itemlist[selects][3]);
                cm.gainItem(itemlist[selects][0], itemlist[selects][1]);
				cm.gainMeso(-5000000);
                cm.sendOk("�һ��ɹ�");
				cm.����(1,"["+ cm.getPlayer().getName() + "] ʹ�����Ǽ�ǿ���ֽ�/�ϳɻ�!");
                cm.dispose();
            } else {
                cm.sendOk("�Բ�����û���㹻�ĵ��ߡ�");
                cm.dispose();
            }
        }
    }//mode
}//f