
status = -1;
var itemList = Array(
//Array(2000005, 500, 100, 1),
Array(4001017, 100000, 1, 1),
Array(4031179, 100000, 1, 1),
Array(2615032, 80000, 1, 1),
Array(2532001, 40000, 1, 1),
Array(2530000, 10000, 1, 1),
Array(2533000, 2000, 1, 1),
Array(2613008, 500, 1, 1),
Array(2041332, 6000, 1, 1),
Array(2047954, 3000, 1, 1),
Array(2041226, 6000, 1, 1),
Array(2590000, 6000, 1, 1),
Array(2640011, 6000, 1, 1),
Array(2613001, 6000, 1, 1),
Array(2614000, 8000, 1, 1),
Array(2614001, 2000, 1, 1),
//Array(4440300, 1, 1, 1),
Array(2610001, 10, 1, 1),
Array(2610000, 300, 1, 1)
//Array(2510002, 100, 1, 1),
//Array(2510003, 100, 1, 1),
//Array(2510004, 100, 1, 1),
//Array(2510005, 100, 1, 1),
//Array(2510006, 100, 1, 1),
//Array(2510007, 100, 1, 1),
//Array(2510008, 100, 1, 1),
//Array(2510009, 100, 1, 1),
//Array(2510010, 100, 1, 1),
//Array(2510011, 100, 1, 1),
//Array(2510012, 100, 1, 1)
	

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
		if (im.haveItem(2022614, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("����1��#v2022614#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022614# ���� ������ȫ����Ʒ:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("����1��#v2022614#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022614# ���� ������ȫ����Ʒ:" + str1);
			im.dispose();
		}
	} else if (status == 1) {
		var chance = Math.floor(Math.random() * 100000);
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
			item = im.gainGachaponItem(itemId, quantity, "����ä��", "��ϲ�ϰ廨һǧ��ϲ�ᷨ����һ̨��");
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2022614, -1);//�����Ʒ
				//im.gainMeso(-6666666);
				im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
			} else {
				im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
			}
			im.safeDispose();
		} else {
			im.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
			// im.setmoneyb(-5);
			//im.gainItem(2022614, 5);//�����Ʒ
			//im.gainNX(1000);	//�Ӽ���ȯ
			im.safeDispose();
		}
	}
}
















