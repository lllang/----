var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ���� = Math.floor(Math.random() * 99);
var C = Math.floor(Math.random() * 1+2);
var B = Math.floor(Math.random() * 2+3);
var A = Math.floor(Math.random() * 3+4);
var S = Math.floor(Math.random() * 4+5);
var SS = Math.floor(Math.random() * 5+6);
var SSS = Math.floor(Math.random() * 6+7);
var SSSS = Math.floor(Math.random() * 7+8);
var SSSSS = Math.floor(Math.random() * 8+9);
var SSSSSS = Math.floor(Math.random() * 9+10);
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
			text = "#b#e�Ǽ��������Ϊ10��#k\r\n";
			text += "���� #v4001126##z4001126#*200\r\n\r\n";
			text += "���� #v2049323##z2049323#*1\r\n\r\n";
			text += "���� ��Ϸ��1000W�����Σ�\r\n\r\n";
			text += "100%����#b��#k        [#r��ά��1 ˫����1#k] \r\n";
			text += "90% ����#b���#k      [#r��ά��1-2 ˫����1-2#k] \r\n";
			text += "80% ����#b����#k    [#r��ά��2-3 ˫����2-3#k] \r\n";
			text += "70% ����#b�����#k  [#r��ά��3-4 ˫����3-4#k] \r\n";
			text += "60% ����#b������#k[#r��ά��4-5 ˫����4-5#k] \r\n";
			text += "50% ����#b������#k[#r��ά��5-6 ˫����5-6#k] \r\n";
			text += "40% ����#b������#k[#r��ά��6-7 ˫����6-7#k] \r\n";
			text += "30%  ����#b������#k[#r��ά��7-8 ˫����7-8#k] \r\n";
			text += "20%  ����#b������#k[#r��ά��8-9 ˫����8-9#k] \r\n";
			text += "10%  ����#b������#k[#r��ά��9-10 ˫����9-10#k] \r\n";
			text += "#L0##d�����Ǽ�����(#r�뽫װ���ŵ�������һ�񣬲�֧�ֵ�װ#d)#l\r\n";
			//text += "#L1##n#r�һ�#v2049323#��Ҫ#v4000464#x1 + #v4251202#x2 + ð�ձ�X2��#l\r\n";

			cm.sendSimple(text);
		} else if (a == 1) {
			if (selection == 0) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("�뽫������װ�����õ�һ��~");
					cm.dispose();
				} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
		            cm.sendOk("�ֽ�װ���޷�����ǿ����");
		            cm.dispose();
	            }else if (cm.haveItem(2049323, 1) == false) {
					cm.sendOk("ǿ�����㡣");
					cm.dispose();
				}else if (cm.haveItem(4001126, 200) == false) {
					cm.sendOk("��Ҷ���㡣");
					cm.dispose();
				}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "") {
					if (���� < 100) {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 1);
					item.setInt(item.getInt() + 1);
					item.setLuk(item.getLuk() + 1);
					item.setDex(item.getDex() + 1);
					item.setWatk(item.getWatk() + 1);
					item.setMatk(item.getMatk() + 1);
					item.setOwner("��");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r��#k����");
					cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "�������ɹ�����ǰװ���Ǽ�Ϊ ��");
					cm.dispose();
					} else {
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("����ʧ��");
					cm.dispose();
				}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "��") {
					if (���� < 60) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + C);
					item.setInt(item.getInt() + C);
					item.setLuk(item.getLuk() + C);
					item.setDex(item.getDex() + C);
					item.setWatk(item.getWatk() + C);
					item.setMatk(item.getMatk() + C);
					item.setOwner("���");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r���#k����");
					cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "�������ɹ�����ǰװ���Ǽ�Ϊ ���");
					cm.dispose();
				} else {
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("����ʧ��");
					cm.dispose();
				}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "���") {
					if (���� < 50) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + B);
					item.setInt(item.getInt() + B);
					item.setLuk(item.getLuk() + B);
					item.setDex(item.getDex() + B);
					item.setWatk(item.getWatk() + B);
					item.setMatk(item.getMatk() + B);
					item.setOwner("����");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r����#k����");
					cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "�������ɹ�����ǰװ���Ǽ�Ϊ ����");
					cm.dispose();
				} else {
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("����ʧ��");
					cm.dispose();
				}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "����") {
					if (���� < 40) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + A);
					item.setInt(item.getInt() + A);
					item.setLuk(item.getLuk() + A);
					item.setDex(item.getDex() + A);
					item.setWatk(item.getWatk() + A);
					item.setMatk(item.getMatk() + A);
					item.setOwner("�����");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r�����#k����");
					cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "�������ɹ�����ǰװ���Ǽ�Ϊ �����");
					cm.dispose();
				} else {
					cm.gainItem(2049323, -1);
					cm.gainItem(4001126, -200);
					cm.gainMeso(-10000000);
					cm.sendOk("����ʧ��");
					cm.dispose();
				}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "�����") {
					if (���� < 30 ) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + S);
						item.setInt(item.getInt() + S);
						item.setLuk(item.getLuk() + S);
						item.setDex(item.getDex() + S);
						item.setWatk(item.getWatk() + S);
						item.setMatk(item.getMatk() + S);
						item.setOwner("������");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
						cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "�������ɹ�����ǰװ���Ǽ�Ϊ ������");
					    cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("����ʧ��");
						cm.dispose();
					}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 20) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SS);
						item.setInt(item.getInt() + SS);
						item.setLuk(item.getLuk() + SS);
						item.setDex(item.getDex() + SS);
						item.setWatk(item.getWatk() + SS);
						item.setMatk(item.getMatk() + SS);
						item.setOwner("������");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
						cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "�������ɹ�����ǰװ���Ǽ�Ϊ ������");
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("����ʧ��");
						cm.dispose();
					}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 10) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSS);
						item.setInt(item.getInt() + SSS);
						item.setLuk(item.getLuk() + SSS);
						item.setDex(item.getDex() + SSS);
						item.setWatk(item.getWatk() + SSS);
						item.setMatk(item.getMatk() + SSS);
						item.setOwner("������");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
					cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ǿ�����Ȼ��������7 [ ������ ] �����װ��,���˵�ͷ.��ϲ�ɺ�", 5121010);
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("����ʧ��");
						cm.dispose();
					}
				} else if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 8) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSSS);
						item.setInt(item.getInt() + SSSS);
						item.setLuk(item.getLuk() + SSSS);
						item.setDex(item.getDex() + SSSS);
						item.setWatk(item.getWatk() + SSSS);
						item.setMatk(item.getMatk() + SSSS);
						item.setOwner("������");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
					cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ǿ�����Ȼ��������8 [ ������ ] �����װ��,���˵�ͷ.��ϲ�ɺ�", 5121007);
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("����ʧ��");
						cm.dispose();
					}
				}else if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 6) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSSSS);
						item.setInt(item.getInt() + SSSSS);
						item.setLuk(item.getLuk() + SSSSS);
						item.setDex(item.getDex() + SSSSS);
						item.setWatk(item.getWatk() + SSSSS);
						item.setMatk(item.getMatk() + SSSSS);
						item.setOwner("������");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
					cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ǿ�����Ȼ��������9 [ ������ ] �����װ��,���˵�ͷ.��ϲ�ɺ�", 5121002);
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("����ʧ��");
						cm.dispose();
					}
				}  else if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 5) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSSSSS);
						item.setInt(item.getInt() + SSSSSS);
						item.setLuk(item.getLuk() + SSSSSS);
						item.setDex(item.getDex() + SSSSSS);
						item.setWatk(item.getWatk() + SSSSSS);
						item.setMatk(item.getMatk() + SSSSSS);
						item.setOwner("������");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049323, -1);
						cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
					cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ǿ�����Ȼ��������10 [ ������ ] �����װ��,���˵�ͷ.��ϲ�ɺ�", 5121000);
						cm.dispose();
					} else {
						cm.gainItem(2049323, -1);
					    cm.gainItem(4001126, -200);
						cm.gainMeso(-10000000);
						cm.sendOk("����ʧ��");
						cm.dispose();
					}
				} else {
					cm.sendOk("��ǰװ���޷�����ǿ����");
					cm.dispose();
				}
			} else if (selection == 1) {
				if (cm.haveItem(4000464, 1) == false) {
					cm.sendOk("���߲��㡣");
					cm.dispose();
				} else if (cm.haveItem(4251202, 1) == false) {
					cm.sendOk("���߲��㡣");
					cm.dispose();
				} else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.canHold(2049323, 2) == false) {
					cm.sendOk("�����ռ䲻�㡣");
					cm.dispose();
				} else {
					cm.gainItem(4000464, -1);
					cm.gainItem(4251202, -2);
					cm.gainMeso(-200000000);
					cm.gainItem(2049323, 1);
					cm.sendOk("�һ��ɹ�");
					cm.dispose();
				}
			} else if (selection == 2) {
				if (cm.haveItem(2049323, 2) == false) {
					cm.sendOk("���߲��㡣");
					cm.dispose();
				} else if (cm.canHold(2460006, 1) == false) {
					cm.sendOk("�����ռ䲻�㡣");
					cm.dispose();
				} else {
					cm.gainItem(2049323, -2);
					cm.gainItem(2460006, 1);
					cm.sendOk("�һ��ɹ�");
					cm.dispose();
				}
			}
		}
	}
}