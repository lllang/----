var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1051295/0/0#";
var �ٷ� = "#fEffect/CharacterEff/1003252/0/0#";
var Сѩ�� = "#fEffect/CharacterEff/1003393/0/0#";
var ���� = "#fEffect/CharacterEff/1032063/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon2/7#";
var ����ne = "#fUI/UIWindow/Quest/icon6/7#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";

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

var ǿ������1 = 80;//ǿ������*10%
var ǿ������2 = 70;//ǿ������*10%
var ���ֵ = Math.floor(Math.random() * 100);
var status = 0;

function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("�뽫װ��������װ���� ��#b��һ��#k�� ��");
		cm.dispose();
	}else if (cm.getInventory(1).getItem(1).getItemId() == 1122017) {
		cm.sendOk("�����׹�޷�ǿ��#k�� ��");
		cm.dispose();
	}else if (cm.getInventory(1).getItem(1).getItemId() == 1112907) {
		cm.sendOk("��ʲô�أ����ֽ�ָ���ܱ�����ס��������װ���ɣ�#k�� ");
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
		var textz = "\r\n";
			textz += "#e                 "+����+"#r��������#k"+����+"  #n\r\n"   
		
            textz += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
			textz += "#L0#����#b10000��ȯ#r���ɹ���80%��#kΪ��һ��װ����һ�δ�����\r\n\r\n\r\n";
			textz += "#L1#����#b#z4251202##r���ɹ���70%��#kΪ��һ��װ����һ�δ���\r\n\r\n\r\n";
            textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
		
			cm.sendSimple(textz);


		} else if (status == 1) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			var ���������� = cm.getInventory(1).getItem(1).getUpgradeSlots();
			var ���������� = cm.getInventory(1).getItem(1).getLevel();
			if (selection == 0) {
				var selStr = "��ǰǿ��װ������#b#v" + ItemID + "##z" + ItemID + "##k��\r\n\r\n";
				selStr += "���� 1�� ��ȯ\r\n\r\n";
				selStr += "������������" + (װ������������� - ���������� - ����������) + "\r\n\r\n";
				selStr += " 			#d#e�ɹ�װ�������������Ƿ�ȷ��ǿ����#k";
				cm.sendYesNo(selStr);
				sj = 1;

			} else if (selection == 1) {
				var selStr = "��ǰǿ��װ������#b#v" + ItemID + "##z" + ItemID + "##k��\r\n\r\n";
				selStr += "����#z4251202#\r\n\r\n";
				selStr += "������������" + (װ������������� - ���������� - ����������) + "\r\n\r\n";
				selStr += " 			#d#e�ɹ�װ�������������Ƿ�ȷ��ǿ����#k";
				cm.sendYesNo(selStr);
				sj = 2;

			}  
		} else if (status == 2) {
			var ItemID = cm.getInventory(1).getItem(1).getItemId();
			var ���������� = cm.getInventory(1).getItem(1).getUpgradeSlots();
			var ���������� = cm.getInventory(1).getItem(1).getLevel();
			if (sj == 1) {
				if (cm.getPlayer().getCSPoints(1) < 10000) {
					cm.sendOk("��ȯ����");
					cm.dispose();
				} else if ((װ������������� - ���������� - ����������) < 1) {
					cm.sendOk("��ǰװ���޷�������");
					cm.dispose();
				} else {
					if (���ֵ < ǿ������1) {
					var statup = new java.util.ArrayList();
					var item = cm.getInventory(1).getItem(1).copy();
					item.setUpgradeSlots(item.getUpgradeSlots() + 1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainNX(-10000);
					item.setLocked(1)
					var selStr = "ǿ���ɹ�";
					item.setLocked(1)
					cm.ˢ��״̬();
					cm.sendOk(selStr);
					cm.dispose();
				} else {
						cm.gainNX(-10000);
						var selStr = "ǿ��ʧ�ܣ��۳�1���ȯ��ǿ����������";
						cm.sendOk(selStr);
						cm.dispose();
					}
            }
			}   else if (sj == 2) {
						if (cm.haveItem(4251202, 1) == false) {
							cm.sendOk("���߲��㡣");
							cm.dispose();
						} else if ((װ������������� - ���������� - ����������) < 1) {
							cm.sendOk("��ǰװ���޷�������");
							cm.dispose();
						} else {
							if (���ֵ < ǿ������2) {
							var statup = new java.util.ArrayList();
							var item = cm.getInventory(1).getItem(1).copy();
							item.setUpgradeSlots(item.getUpgradeSlots() + 1);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.gainItem(4251202, -1);
							var selStr = "ǿ���ɹ�";
							item.setLocked(1)
							cm.ˢ��״̬();
							cm.sendOk(selStr);
							cm.dispose();
						}else {
						cm.gainItem(4251202, -1);
						var selStr = "ǿ��ʧ�ܣ��۳�1��#v4251202#��ǿ����������";
						cm.sendOk(selStr);
						cm.dispose();
					}
                }

				}  
			}
		}
	}




