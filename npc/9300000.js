var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ���� = Math.floor(Math.random() * 99);

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1){
			a++;
		}else{
			a--;
		}
		if (a == -1) {
			cm.dispose();
		} else if (a == 0) {
			text = "#e#b             �ռ�����ϵͳ#k\r\n\r\n";
			text += "#r#L0#ǿ��˵���������Ķ���#k\r\n\r\n";
			text += "#L1#����#b������  #k11�Ǽ���[#r��ά�ӡ�˫����50#k  ]#l\r\n";
			text += "#L2#����#b������  #k12�Ǽ���[#r��ά�ӡ�˫����60#k  ]#l\r\n";
			text += "#L3#����#b������  #k13�Ǽ���[#r��ά�ӡ�˫����80#k  ]#l\r\n";
			text += "#L4#����#b������  #k14�Ǽ���[#r��ά�ӡ�˫����110#k ]#l\r\n";
			text += "#L5#����#b�������#k15�Ǽ���[#r��ά�ӡ�˫����150#k ]#l\r\n";
			//text += "#L1##n#r�һ�#v2460003#��Ҫ#v4000464#x1 + #v4251202#x2 + ð�ձ�X2��#l\r\n";

			cm.sendSimple(text);
		} else if (a == 1) {
			if (selection == 0) {
				cm.openNpc(9330065,0);
			}else if (selection == 1) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("�뽫������װ�����õ�һ��~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("�ֽ�װ���޷����������");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049345, 1)) {
					cm.sendOk("11��ǿ�����᲻�㡣");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 4) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 50);
						item.setInt(item.getInt() + 50);
						item.setLuk(item.getLuk() + 50);
						item.setDex(item.getDex() + 50);
						item.setWatk(item.getWatk() + 50);
						item.setMatk(item.getMatk() + 50);
						item.setOwner("������");
						cm.gainItem(2049345, -1);
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ǿ�����Ȼ��������11 [ ������ ] �����װ��,���˵�ͷ.��ϲ�ɺ�", 5120003);
					} else {
						if(cm.haveItem(2531000, 1)){//���ӵ�з�������
							cm.gainItem(2531000, -1);//���ķ�������
							cm.gainItem(2049345, -1);
							cm.gainMeso(-0);
							cm.sendOk("����ʧ��,��������Ϊ�㱣����װ������ը�� !");
						}else{
							cm.gainItem(2049345, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("����ʧ��,��װ��������");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("�Ǽ�����!");
					cm.dispose();
				}
			}else if (selection == 2) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("�뽫������װ�����õ�һ��~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("�ֽ�װ���޷����������");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049346, 1)) {
					cm.sendOk("12��ǿ�����᲻�㡣");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 3) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 60);
						item.setInt(item.getInt() + 60);
						item.setLuk(item.getLuk() + 60);
						item.setDex(item.getDex() + 60);
						item.setWatk(item.getWatk() + 60);
						item.setMatk(item.getMatk() + 60);
						item.setOwner("������");
						cm.gainItem(2049346, -1);
						cm.gainItem(2531000, -1);//���ķ�������
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ǿ�����Ȼ��������12 [ ������ ] �����װ��,���˵�ͷ.��ϲ�ɺ�", 5120006);
					} else {
						if(cm.haveItem(2531000, 1)){//���ӵ�з�������
							cm.gainItem(2531000, -1);//���ķ�������
							cm.gainItem(2049346, -1);
							cm.gainMeso(-0);
							cm.sendOk("����ʧ��,��������Ϊ�㱣����װ������ը�� !");
						}else{
							cm.gainItem(2049346, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("����ʧ��,��װ��������");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("�Ǽ�����!");
					cm.dispose();
				}
			}else if (selection == 3) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("�뽫������װ�����õ�һ��~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("�ֽ�װ���޷����������");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049347, 1)) {
					cm.sendOk("13��ǿ�����᲻�㡣");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 3) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 80);
						item.setInt(item.getInt() + 80);
						item.setLuk(item.getLuk() + 80);
						item.setDex(item.getDex() + 80);
						item.setWatk(item.getWatk() + 80);
						item.setMatk(item.getMatk() + 80);
						item.setOwner("������");
						cm.gainItem(2049347, -1);
						cm.gainItem(2531000, -1);//���ķ�������
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ǿ�����Ȼ��������13 [ ������ ] �����װ��,���˵�ͷ.��ϲ�ɺ�", 5120008);
					} else {
						if(cm.haveItem(2531000, 1)){//���ӵ�з�������
							cm.gainItem(2531000, -1);//���ķ�������
							cm.gainItem(2049347, -1);
							cm.gainMeso(-0);
							cm.sendOk("����ʧ��,��������Ϊ�㱣����װ������ը�� !");
						}else{
							cm.gainItem(2049347, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("����ʧ��,��װ��������");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("�Ǽ�����!");
					cm.dispose();
				}
			}else if (selection == 4) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("�뽫������װ�����õ�һ��~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("�ֽ�װ���޷����������");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049348, 1)) {
					cm.sendOk("14��ǿ�����᲻�㡣");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 1) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 110);
						item.setInt(item.getInt() + 110);
						item.setLuk(item.getLuk() + 110);
						item.setDex(item.getDex() + 110);
						item.setWatk(item.getWatk() + 110);
						item.setMatk(item.getMatk() + 110);
						item.setOwner("������");
						cm.gainItem(2049348, -1);
						cm.gainItem(2531000, -1);//���ķ�������
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r������#k����");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ǿ�����Ȼ��������14 [ ������ ] �����װ��,���˵�ͷ.��ϲ�ɺ�", 5120009);
					} else {
						if(cm.haveItem(2531000, 1)){//���ӵ�з�������
							cm.gainItem(2531000, -1);//���ķ�������
							cm.gainItem(2049348, -1);
							cm.gainMeso(-0);
							cm.sendOk("����ʧ��,��������Ϊ�㱣����װ������ը�� !");
						}else{
							cm.gainItem(2049348, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("����ʧ��,��װ��������");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("�Ǽ�����!");
					cm.dispose();
				}
			}else if (selection == 5) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("�뽫������װ�����õ�һ��~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("�ֽ�װ���޷����������");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049349, 1)) {
					cm.sendOk("15��ǿ�����᲻�㡣");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "������") {
					if (���� < 1) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 150);
						item.setInt(item.getInt() + 150);
						item.setLuk(item.getLuk() + 150);
						item.setDex(item.getDex() + 150);
						item.setWatk(item.getWatk() + 150);
						item.setMatk(item.getMatk() + 150);
						item.setOwner("�������");
						cm.gainItem(2049349, -1);
						cm.gainItem(2531000, -1);//���ķ�������
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("�����ɹ�����ǰװ���Ǽ�Ϊ ��#r�������#k����");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ǿ�����Ȼ��������15 [ ������� ] �����װ��,���˵�ͷ.��ϲ�ɺ�", 5120015);
					} else {
						if(cm.haveItem(2531000, 1)){//���ӵ�з�������
							cm.gainItem(2531000, -1);//���ķ�������
							cm.gainItem(2049349, -1);
							cm.gainMeso(-0);
							cm.sendOk("����ʧ��,��������Ϊ�㱣����װ������ը�� !");
						}else{
							cm.gainItem(2049349, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("����ʧ��,��װ��������");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("�Ǽ�����!");
					cm.dispose();
				}
			}
		}
	}
}
