
status = -1;
var itemList = Array(
	Array(2340000, 10, 1, 1),
	Array(2450000, 10, 1, 1),
	Array(2531006, 10, 1, 1),
	Array(2049323, 10, 1, 1),
	Array(4310143, 10, 1, 1),
	//Array(4443000, 1, 1, 1),
	Array(4442001, 10, 1, 1),
	//Array(4442000, 1, 1, 1),
	//Array(3994731, 10, 1, 1),
	
	Array(4001226, 35, 1, 1),
	Array(4001227, 35, 1, 1),
	Array(4001228, 35, 1, 1),
	Array(4001229, 35, 1, 1),
	Array(4001230, 35, 1, 1),
	Array(4251202, 35, 1, 1),
	Array(2000005, 45, 100, 1),
	Array(4251202, 35, 1, 1),
	Array(4000464, 35, 1, 1),
	Array(4001126, 45, 5, 1),
	Array(4001126, 35, 10, 1),
	Array(4001126, 25, 50, 1),
	Array(4001126, 15, 100, 1)
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
		if (im.haveItem(2022468, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("����1��#v2022428#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022428# ���� ������ȫ����Ʒ:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("����1��#v2022428#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022428# ���� ������ȫ����Ʒ:" + str1);
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
			item = im.gainGachaponItem(itemId, quantity, "��Ա���", "����˼�Ʒ���ߴ��һ����Ľ���ɣ�");
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2022468, -1);//�����Ʒ
				im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
			} else {
				im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
			}
			im.safeDispose();
		} else {
			im.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
			// im.setmoneyb(-5);
			//im.gainItem(2022428, 5);//�����Ʒ
			//im.gainNX(1000);	//�Ӽ���ȯ
			im.safeDispose();
		}
	}
}














