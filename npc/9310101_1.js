var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
			cm.sendOk("感谢使用~!");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getInventory(1).getItem(1) == null) {
            cm.sendOk("装备栏第一格必须有物品才行哦~!");
            cm.dispose();
            return;
        }
		if ((cm.getInventory(1).getItem(1).getLevel() + cm.getInventory(1).getItem(1).getUpgradeSlots()) >= 120) {
            cm.sendOk("强化的装备等级不能大于#r120#k级哦~!\r\n当前#v"+Id+"##t"+Id+"# #b 已强化次数:#r"+cm.getInventory(1).getItem(1).getLevel()+" 可强化次数为:#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"");
            cm.dispose();
            return;
        }
		if (!cm.haveItem(4000464,2)) {
            cm.sendOk("材料强化系统使用需要以下材料:\r\n#v4000464##t4000464# x 2");
            cm.dispose();
            return;
        }
		var Id = cm.getInventory(1).getItem(1).getItemId();
        var selStr = "您好欢迎来到#r强化中心#k\r\n\r\n#b";
            selStr += "您要强化的物品是 #v"+Id+"##t"+Id+"# \r\n当前已强化次数:#r"+cm.getInventory(1).getItem(1).getLevel()+"#b 可强化次数为:#r"+cm.getInventory(1).getItem(1).getUpgradeSlots()+"#b\r\n材料强化系统使用需要以下材料:\r\n\r\n#v4000464##t4000464# x 2\r\n 是否强化？";
        cm.sendYesNo(selStr);
    } else if (status == 1) {
		cm.gainItem(4000464,-2);
        cm.getInventory(1).getItem(1).setUpgradeSlots(cm.getInventory(1).getItem(1).getUpgradeSlots()+1);
		cm.刷新状态();
		cm.喇叭(2,"恭喜[" + cm.getPlayer().getName() + "]在强化中心中消耗材料升级了一次可强化次数！"); 
        cm.dispose();
    }
}