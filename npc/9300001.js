

var sj;

var ����װ���������� = 4000464;//���
var ����װ�������������� = 10;
var ����װ��������������1 = 100;
//���ߴ��룺
var ǿ������ = 4032002;//���
var ǿ���������� = 1;

var ȫ���� = 3;
var ˫�� = 2;

var װ������������� = 125;

var ǿ������ = 5;//ǿ������*10%
var ���ֵ = Math.floor(Math.random() * 10);
var status = 0;

function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("�뽫װ��������װ���� ��#b��һ��#k�� ��");
		cm.dispose();
	} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
		cm.sendOk("�ֽ�װ���޷�����ǿ����");
		cm.dispose();
	}else{
		status = -1;
		action(1, 0, 0);
	}
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;


		if (status == 0) {
			var textz = "#r�����������װ������125��ǿ��50��װ������ʹ�ã�#k\r\n";

			//textz += "#L0#���� #b20000��ȯ#k Ϊװ������װ������������\r\n\r\n";

			textz += "#L3#���� #b#v4310034##k*1 Ϊװ������װ������1������\r\n\r\n";

			//textz += "#L4#���� #b#v4442001##k*1 �һ� #v4310034# X 500\r\n\r\n";

			//textz += "#L5#�һ� #b#v4251201##k*10 ��Ҫ #v4251200# X 100\r\n\r\n";

			cm.sendSimple(textz);


		} else if (status == 1) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			var ���������� = cm.getInventory(1).getItem(1).getUpgradeSlots();
			var ���������� = cm.getInventory(1).getItem(1).getLevel();
			if (selection == 0) {
				var selStr = "��ǰǿ��װ������#b#v" + ItemID + "##z" + ItemID + "##k��\r\n\r\n";
				selStr += "���� 2W ��ȯ\r\n\r\n";
				selStr += "������������" + (װ������������� - ���������� - ����������) + "\r\n\r\n";
				selStr += " 								#d#e�Ƿ�ȷ��ǿ����#k";
				cm.sendYesNo(selStr);
				sj = 1;

			} else if (selection == 1) {
				var selStr = "��ǰ����װ������#b#v" + ItemID + "##z" + ItemID + "##k��\r\n\r\n";
				selStr += "����#z2049124# x " + ǿ���������� + "\r\n\r\n";
				selStr += "����ȫ���ԣ� 1 ~ 15���\r\n\r\n";
				selStr += "�ɹ��ʣ�" + ǿ������ * 10 + " %\r\n\r\n";
				selStr += " 								#d#e�Ƿ�ȷ��ǿ����#k";
				cm.sendYesNo(selStr);
				sj = 2;

			} else if (selection == 2) {
				var selStr = "��ǰǿ��װ������#b#v" + ItemID + "##z" + ItemID + "##k��\r\n\r\n";
				selStr += "����#z4031549#\r\n\r\n";
				selStr += "������������" + (װ������������� - ���������� - ����������) + "\r\n\r\n";
				selStr += " 								#d#e�Ƿ�ȷ��ǿ����#k";
				cm.sendYesNo(selStr);
				sj = 3;

			} else if (selection == 3) {
				var selStr = "��ǰǿ��װ������#b#v" + ItemID + "##z" + ItemID + "##k��\r\n\r\n";
				selStr += "����#z4310034##v4310034##k1��\r\n\r\n";
				selStr += "������������" + (װ������������� - ���������� - ����������) + "\r\n\r\n";
				selStr += " 								#d#e�Ƿ�ȷ��ǿ����#k";
				cm.sendYesNo(selStr);
				sj = 4;

			} else if (selection == 6) {
				var selStr = "��ǰǿ��װ������#b#v" + ItemID + "##z" + ItemID + "##k��\r\n\r\n";
				selStr += "����#z4001028#\r\n\r\n";
				selStr += " 								#d#e�Ƿ�ȷ��ǿ����#k";
				cm.sendYesNo(selStr);
				sj = 5;

			} else if (selection == 7) {
				var selStr = "��ǰǿ��װ������#b#v" + ItemID + "##z" + ItemID + "##k��\r\n\r\n";
				selStr += "����#z4001028#\r\n\r\n";
				selStr += " 								#d#e�Ƿ�ȷ��ǿ����#k";
				cm.sendYesNo(selStr);
				sj = 6;

			} else if (selection == 4) {
				if (cm.haveItem(4442001,1) == false){
					cm.sendOk("������߲��㣬�޷��һ���");
					cm.dispose();
				} else {
					cm.gainItem(4442001,-1);
					cm.gainItem(4310034,500);
					cm.sendOk("�һ��ɹ���");
					cm.dispose();
				}

				}else if (selection == 5) {
					if (cm.haveItem(4251200,100) == false){
						cm.sendOk("������߲��㣬�޷��һ���");
						cm.dispose();
					} else {
						cm.gainItem(4251200,-100);
						cm.gainItem(4251201,10);
						cm.sendOk("�һ��ɹ���");
						cm.dispose();
					}


			}
		} else if (status == 2) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			var ���������� = cm.getInventory(1).getItem(1).getUpgradeSlots();
			var ���������� = cm.getInventory(1).getItem(1).getLevel();
			if (sj == 1) {
				if (cm.getPlayer().getCSPoints(1) < 20000) {
					cm.sendOk("��ȯ����");
					cm.dispose();
				} else if ((װ������������� - ���������� - ����������) < 1) {
					cm.sendOk("��ǰװ���޷�������");
					cm.dispose();
				} else {
					var statup = new java.util.ArrayList();
					var item = cm.getInventory(1).getItem(1).copy();
					item.setUpgradeSlots(item.getUpgradeSlots() + 1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainNX(-20000);
					var selStr = "ǿ���ɹ�";
					cm.sendOk(selStr);
					cm.dispose();
				}

			} else if (sj == 2) {
				if (cm.haveItem(2049124, ǿ����������) == false) {
					cm.sendOk("���߲��㡣");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getUpgradeSlots() == 0) {
					cm.sendOk("�����������㣬�޷����л��硣");
					cm.dispose();
				} else {
					if (���ֵ < ǿ������) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + Math.floor(Math.random() * 14 + 1));
						item.setInt(item.getInt() + Math.floor(Math.random() * 14 + 1));
						item.setLuk(item.getLuk() + Math.floor(Math.random() * 14 + 1));
						item.setDex(item.getDex() + Math.floor(Math.random() * 14 + 1));
						item.setWatk(item.getWatk() + Math.floor(Math.random() * 14 + 1));
						item.setMatk(item.getMatk() + Math.floor(Math.random() * 14 + 1));
						item.setUpgradeSlots(item.getUpgradeSlots() - 1);
						item.setLevel(item.getLevel() + 1);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2049124, -ǿ����������);
						var selStr = "ǿ���ɹ�";
						cm.sendOk(selStr);
						cm.dispose();
					} else {
						cm.gainItem(2049124, -ǿ����������);
						var selStr = "ǿ��ʧ��";
						cm.sendOk(selStr);
						cm.dispose();
					}
				}
				} else if (sj == 3) {
						if (cm.haveItem(4310034, 1) == false) {
							cm.sendOk("���߲��㡣");
							cm.dispose();
						} else if ((װ������������� - ���������� - ����������) < 1) {
							cm.sendOk("��ǰװ���޷�������");
							cm.dispose();
						} else {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setUpgradeSlots(item.getUpgradeSlots() + 10);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4310034, -1);
							var selStr = "ǿ���ɹ�";
							cm.sendOk(selStr);
							cm.dispose();
						}

					} else if (sj == 4) {
						if (cm.haveItem(4310034, 1) == false) {
							cm.sendOk("���߲��㡣");
							cm.dispose();
						} else if ((װ������������� - ���������� - ����������) < 1) {
							cm.sendOk("��ǰװ���޷�������");
							cm.dispose();
						} else {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setUpgradeSlots(item.getUpgradeSlots() + 1);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4310034, -1);
							var selStr = "ǿ���ɹ�";
							cm.sendOk(selStr);
							cm.dispose();
						}

					} else if (sj == 5) {
						if (cm.haveItem(4001028, 1) == false) {
							cm.sendOk("���߲��㡣");
							cm.dispose();
						} else {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setHp(item.getHp() + 200);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4001028, -1);
							var selStr = "ǿ���ɹ�";
							cm.sendOk(selStr);
							cm.dispose();
						}

					} else if (sj == 6) {
						if (cm.haveItem(4001028, 1) == false) {
							cm.sendOk("���߲��㡣");
							cm.dispose();
						} else {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setWdef(item.getWdef() + 20);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4001028, -1);
							var selStr = "ǿ���ɹ�";
							cm.sendOk(selStr);
							cm.dispose();
						}



				}
			}
		}
	}




