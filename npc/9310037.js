var status = -1;
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var ���� = 3991027;
function start() {
		a = -1;
		action(1, 0, 0);
	}



function action(mode, type, selection) {
	if (mode == 1)
		status++;
	else
		status--;
	if (status == 0) {
		var text = "#r1����ȯװ������ת��#k\r\n";
		text += "�ù��ܿ������������̵��ﹺ�������Ե�װ����ҽ���װת�Ƶ����������Եĵ�װ�ϣ��������Լӳ�Ҳ�ø��Էḻ����";
		text += "���δ�ҵ����ǵĵ�װ��������ϵȺ����æ������#r30W#k��ȯ��\r\n\r\n";
		text += " 		#b#e#L0#��ȯװ������ת��#l#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		var text = "��Ŀǰѡ�����#r�̳�װ�������û�#k\r\n";
		text += "�����Ŀǰ��Ҫ��������#r30W#d��ȯ#k\r\n";
		text += "ʲô��װ�������û��أ�\r\n";
		text += "���ǰ�#r#eװ�����ĵ�һ��ķ��㲻��Ҫ������װ�����ڶ���������Ҫ����װ�������������ת�����ԣ��������Լ�����\r\n";
		text += "#k#e��һ���װ���ͻ���ʧ�����Ի�ת�Ƶ��ڶ�����װ���ϡ�\r\n";
		cm.sendSimple(text);
	} else if (status == 2) {
		var ItemID = cm.getInventory(1).getItem(1).getItemId();
		var ItemID1 = cm.getInventory(1).getItem(2).getItemId();
		var ���� = cm.getInventory(1).getItem(1).getStr();
		var ���� = cm.getInventory(1).getItem(1).getDex();
		var ���� = cm.getInventory(1).getItem(1).getInt();
		var ���� = cm.getInventory(1).getItem(1).getLuk();
		var �﹥ = cm.getInventory(1).getItem(1).getWatk();
		var ħ�� = cm.getInventory(1).getItem(1).getMatk();
		if (cm.getPlayer().getCSPoints(1) < 300000) {
			cm.sendOk("��ȯ���� 3W���޷�ת��~");
			cm.dispose();
		} else if (cm.canHold(ItemID, 1) == false) {
			cm.sendOk("�����ռ䲻�㣬��ȷ�ϡ�");
			cm.dispose();
		} else if (cm.getInventory(1).getItem(1) == null || cm.getInventory(1).getItem(2) == null) {
				cm.sendOk("�뽫����Ҫת�Ƶ�װ��������װ�����ĵ�һ������");
				cm.dispose();
			} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == false && cm.isCash(cm.getInventory(1).getItem(2).getItemId()) == false) {
				cm.sendOk("�뱣֤װ������һ�������װ��Ϊ��װ��");
				cm.dispose();
			} else if (parseInt(cm.getInventory(1).getItem(1).getItemId() / 10000) != parseInt(cm.getInventory(1).getItem(2).getItemId() / 10000)) {
				cm.sendOk("�뱣֤��һ������װ��Ϊͬһ����װ����");
				cm.dispose();
		} else {
			var equip = ii.randomizeStats(ii.getEquipById(ItemID1)).copy();
			var type = ii.getEquipById(ItemID1);
			equip.setPosition(1);
			equip.setStr(����);
			equip.setDex(����);
			equip.setInt(����);
			equip.setLuk(����);
			equip.setWatk(ħ��);
			equip.setMatk(�﹥);
			Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), equip, false, false);
			cm.gainItem(ItemID1, -1);
			cm.gainItem(ItemID, -1);
			cm.gainNX(-300000);
			cm.sendOk("����ת�Ƴɹ�~");
			cm.dispose();
		}

	}

}




