
status = -1;
var itemList = Array(

Array(1132211,1, 1, 1),//����
Array(1132212,1, 1, 1),//����
Array(1132213,3, 1, 1),//����
Array(1132214,1, 1, 1),//����
Array(1132215,1, 1, 1),//����


Array(1073162,30, 1, 1),//����
Array(1073161,30, 1, 1),//����
Array(1073160,30, 1, 1),//����
Array(1073159,30, 1, 1),//����
Array(1073158,30, 1, 1),//����
Array(1053067,30, 1, 1),//����
Array(1053066,30, 1, 1),//����
Array(1053065,30, 1, 1),//����
Array(1053064,30, 1, 1),//����
Array(1053063,30, 1, 1),//����
Array(1004812,30, 1, 1),//����
Array(1004811,30, 1, 1),//����
Array(1004808,30, 1, 1),//����
Array(1004810,30, 1, 1),//����
Array(1004809,30, 1, 1),//����
Array(1082547,30, 1, 1),//����
Array(1082546,30, 1, 1),//����
Array(1082545,30, 1, 1),//����
Array(1082544,30, 1, 1),//ħ��
Array(1082543,30, 1, 1),//սʿ
Array(1132178,30, 1, 1),//սʿ
Array(1132177,30, 1, 1),//սʿ
Array(1132176,30, 1, 1),//սʿ
Array(1132175,30, 1, 1),//սʿ
Array(1132174,30, 1, 1),//սʿ
Array(1102485,30, 1, 1),//սʿ
Array(1102484,30, 1, 1),//սʿ
Array(1102483,30, 1, 1),//սʿ
Array(1102482,30, 1, 1),//սʿ
Array(1102481,30, 1, 1),//սʿ
Array(1072743,30, 1, 1),//սʿ
Array(1072744,30, 1, 1),//սʿ
Array(1072745,30, 1, 1),//սʿ
Array(1072746,30, 1, 1),//սʿ
Array(1072747,30, 1, 1),//սʿ





	
	
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
		if (im.haveItem(2022670, 1)) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendYesNo("����1��#v2022670#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022670# ���� ������ȫ����Ʒ:" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			im.sendOk("����1��#v2022670#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c2022670# ���� ������ȫ����Ʒ:" + str1);
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
			item = im.gainGachaponItem(itemId, quantity, "���߱���", "�Բۣ���������������һ�㰡��");
			if (item != -1) {
				//im.setmoneyb(-5);
				im.gainItem(2022670, -1);//�����Ʒ
				im.gainItem(4001126, -100);//�����Ʒ
				im.sendOk("������ #b#t" + item + "##k " + quantity + "����");
			} else {
				im.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
			}
			im.safeDispose();
		} else {
			im.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
			// im.setmoneyb(-5);
			//im.gainItem(2022670, 5);//�����Ʒ
			//im.gainNX(1000);	//�Ӽ���ȯ
			im.safeDispose();
		}
	}
}















