var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
			cm.sendOk("��лʹ��~!");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getInventory(1).getItem(1) == null) {
            cm.sendOk("װ������һ���������Ʒ����Ŷ~!");
            cm.dispose();
            return;
        }
		if ((cm.getInventory(1).getItem(1).getLevel() + cm.getInventory(1).getItem(1).getUpgradeSlots()) >= 120) {
            cm.sendOk("ǿ����װ���ȼ����ܴ���#r120#k��Ŷ~!\r\n��ǰ#v"+Id+"##t"+Id+"# #b ��ǿ������:#r"+cm.getInventory(1).getItem(1).getLevel()+" ��ǿ������Ϊ:#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"");
            cm.dispose();
            return;
        }
		if (!cm.haveItem(4000464,2)) {
            cm.sendOk("����ǿ��ϵͳʹ����Ҫ���²���:\r\n#v4000464##t4000464# x 2");
            cm.dispose();
            return;
        }
		var Id = cm.getInventory(1).getItem(1).getItemId();
        var selStr = "���û�ӭ����#rǿ������#k\r\n\r\n#b";
            selStr += "��Ҫǿ������Ʒ�� #v"+Id+"##t"+Id+"# \r\n��ǰ��ǿ������:#r"+cm.getInventory(1).getItem(1).getLevel()+"#b ��ǿ������Ϊ:#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"#b\r\n����ǿ��ϵͳʹ����Ҫ���²���:\r\n\r\n#v4000464##t4000464# x 2\r\n �Ƿ�ǿ����";
        cm.sendYesNo(selStr);
    } else if (status == 1) {
		cm.gainItem(4000464,-2);
        cm.getInventory(1).getItem(1).setUpgradeSlots(cm.getInventory(1).getItem(1).getUpgradeSlots()+1);
		cm.ˢ��״̬();
		cm.����(2,"��ϲ[" + cm.getPlayer().getName() + "]��ǿ�����������Ĳ���������һ�ο�ǿ��������"); 
        cm.dispose();
    }
}