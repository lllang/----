
status = -1;
var itemList = Array(
Array(4310080, 1, 1, 1),
Array(4001126, 500, 1, 1),
Array(4001126, 500, 2, 1),
Array(4001126, 500, 3, 1),
Array(4001126, 500, 4, 1),
Array(4001126, 500, 5, 1),
Array(4001126, 500, 6, 1),
Array(4001126, 500, 7, 1),
Array(4001126, 500, 8, 1),
Array(4001126, 500, 9, 1),
Array(4001126, 500, 10, 1)
	

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
		if (im.haveItem(2550002, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("����1��#v2550002#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2550002# ���� ������ȫ����Ʒ:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("����1��#v2550002#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2550002# ���� ������ȫ����Ʒ:" + str1);
			im.dispose();
		}
	} else if (status == 1) {
		var chance = Math.floor(Math.random() * 500);
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
			item = im.gainGachaponItem(itemId, quantity, "GM����", "����GM����ı����ô�����Ҷ��");
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2550002, -1);//�����Ʒ
				im.gainMeso(-0);
				im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
			} else {
				im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
			}
			im.safeDispose();
		} else {
			im.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
			// im.setmoneyb(-5);
			//im.gainItem(2550002, 5);//�����Ʒ
			//im.gainNX(1000);	//�Ӽ���ȯ
			im.safeDispose();
		}
	}
}















