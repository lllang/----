var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
    Array(2614000, 1, 1),

	Array(2041200, 1, 2),

	Array(3994731, 5, 1),

	Array(2460005, 1, 1),

	Array(4001024, 1, 1),

	Array(4031456, 1, 1),

	Array(4031039, 3, 1)
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
			text = "  �𾴵�#r#h0##k,���ã����������ʹ�á�#b #v4000487# #k���һ�����Ҫ����Ʒ��\r\n";
			text += "#k  - ����ǰʣ���#z4000487#Ϊ��#r#e #c4000487# #n #k\r\n";
			for (var i = 0; i < itemlist.length; i++) {
				text += "#L" + i + "#���� - #b#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "# x " + itemlist[i][1] + "#k#l\r\n\r\n";
				if (i != 0 && (i + 1) % 99 == 0) {
					text += "\r\n";
				}
			}
			cm.sendSimple(text);
		} else if (a == 1) {
			selects = selection;
			var txt = " - ��ǰ������ߣ�#r#i" + itemlist[selects][0] + "# x " + itemlist[selects][1] + "#k\r\n\r\n"
			txt += " - ��ǰ���ߵ��ۣ�#r" + itemlist[selects][2] + "#k #k�� #t4000487#��\r\n\r\n"
			cm.sendYesNo(txt);
		} else if (a == 2) {
			jg = selection
			var itemid = itemlist[selects][0];
			if (cm.canHold(itemid) == false) {
				cm.sendOk("���ı����ռ䲻�㣬��������ٶһ���");
				cm.dispose();
				return;
			}
			if (cm.haveItem(4000487, itemlist[selects][2]) == false) {
				cm.sendOk("���߲��㣬�޷��һ���");
				cm.dispose();
				return;
			} else {
				cm.gainItem(itemid, itemlist[selects][1]);
				cm.gainItem(4000487, -itemlist[selects][2]);
				cm.sendOk("����ɹ���");
				cm.dispose();

			}
		}
	}//mode
}//f