
status = -1;
var itemList = Array(
	Array(2043003, 1, 1, 1),
	Array(2043103, 1, 1, 1),
	Array(2043203, 1, 1, 1),
	Array(2043303, 1, 1, 1),
	Array(2043703, 1, 1, 1),
	Array(2043803, 1, 1, 1),
	Array(2044503, 1, 1, 1),
	Array(2044003, 1, 1, 1),
	Array(2044103, 1, 1, 1),
	Array(2044203, 1, 1, 1),
	Array(2044303, 1, 1, 1),
	Array(2044815, 1, 1, 1),
	Array(2044908, 1, 1, 1),
	Array(4001126, 10, 5, 1),
	Array(4001126, 8, 10, 1),
	Array(4001126, 6, 20, 1),
	Array(4001126, 4, 30, 1)
);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			im.sendOk("�ټ��ð��͡�");
			im.dispose();
		}
		status--;
	}
	if (status == 0) {
		if (im.haveItem(2022336, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("����1��#v2022336#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022336# ���� ������ȫ����Ʒ:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("����1��#v2022336#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022336# ���� ������ȫ����Ʒ:" + str1);
			im.dispose();
		}
	} else if (status == 1) {
		var chance = Math.floor(Math.random() * 10);
		var finalitem = Array();
		for (var i = 0; i < itemList.length; i++) {
			if (itemList[i][1] >= chance) {
				finalitem.push(itemList[i]);
			}
		}
		if (finalitem.length != 0) {
			var item;
			var random = new java.util.Random();
			var finalchance = random.nextInt(finalitem.length);
			var itemId = finalitem[finalchance][0];
			var quantity = finalitem[finalchance][2];
			var notice = finalitem[finalchance][3];
			item = im.gainGachaponItem(itemId, quantity, "�������", "���Ǿ��Ӿ��Ƿ�Ҷ5/10/20/30����");
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2022336, -1);//�����Ʒ
				im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
			} else {
				im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
			}
			im.safeDispose();
		} else {
			im.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
			// im.setmoneyb(-5);
			//im.gainItem(2022336, 5);//�����Ʒ
			//im.gainNX(1000);	//�Ӽ���ȯ
			im.safeDispose();
		}
	}
}















