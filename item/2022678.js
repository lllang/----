
status = -1;
var itemList = Array(
	Array(1302107,1, 1, 1),//����ƽ�����
	Array(1332237,1, 1, 1),//����ƽ�����
	Array(1382144,1, 1, 1),//����ƽ�����
	Array(1402130,1, 1, 1),//����ƽ�����
	Array(1422090,1, 1, 1),//����ƽ�����
	Array(1432118,1, 1, 1),//����ƽ�����
	Array(1452148,1, 1, 1),//����ƽ�����
	Array(1462138,1, 1, 1),//����ƽ�����
	Array(1472160,1, 1, 1),//����ƽ�����
	Array(1482121,1, 1, 1),//����ƽ�����
	Array(1492121,1, 1, 1),//����ƽ�����
	
			
Array(1332289,5, 1, 1),//����
Array(1372237,5, 1, 1),//����
Array(1382273,5, 1, 1),//����
Array(1302354,5, 1, 1),//����
Array(1402267,5, 1, 1),//����
Array(1412189,5, 1, 1),//����
Array(1422196,5, 1, 1),//����
Array(1432226,5, 1, 1),//����
Array(1442284,5, 1, 1),//����
Array(1452265,5, 1, 1),//����
Array(1462251,5, 1, 1),//����
Array(1472275,5, 1, 1),//����
Array(1482232,5, 1, 1),//����
Array(1492245,5, 1, 1),//����



Array(1492235,20, 1, 1),//����
Array(1482221,20, 1, 1),//����
Array(1462243,20, 1, 1),//����
Array(1452257,20, 1, 1),//����
Array(1442274,20, 1, 1),//����
Array(1382265,20, 1, 1),//����
Array(1372228,20, 1, 1),//����
Array(1332279,20, 1, 1),//����
Array(1312203,20, 1, 1),//����
Array(1412181,20, 1, 1),//����
Array(1322255,20, 1, 1),//����
Array(1422189,20, 1, 1),//����
Array(1302343,20, 1, 1),//����
Array(1402259,20, 1, 1),//����
Array(1472265,20, 1, 1),//����



	
	
	Array(4001126, 50, 300, 1)
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
		if (im.haveItem(2022678, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("����1��#v2022678#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022678# ���� ������ȫ����Ʒ:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("����1��#v2022678#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022678# ���� ������ȫ����Ʒ:" + str1);
			im.dispose();
		}
	} else if (status == 1) {
		var chance = Math.floor(Math.random() * 50);
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
			item = im.gainGachaponItem(itemId, quantity, "��������", "�Բۣ���С�����������԰���");
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2022678, -1);//�����Ʒ
				im.gainItem(4001126, -100);//�����Ʒ
				im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
			} else {
				im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
			}
			im.safeDispose();
		} else {
			im.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
			// im.setmoneyb(-5);
			//im.gainItem(2022678, 5);//�����Ʒ
			//im.gainNX(1000);	//�Ӽ���ȯ
			im.safeDispose();
		}
	}
}















