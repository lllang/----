var status = -1;
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var 道具 = 3991027;
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
		var text = "#r1、点券装备属性转移#k\r\n";
		text += "该功能可以让在土豪商店里购买了属性点装的玩家将点装转移到其他多样性的点装上，既有属性加成也让个性丰富化。";
		text += "如果未找到心仪的点装，可以联系群主帮忙，花费#r30W#k点券。\r\n\r\n";
		text += " 		#b#e#L0#点券装备属性转移#l#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		var text = "你目前选择的是#r商城装备属性置换#k\r\n";
		text += "这项功能目前需要手续费用#r30W#d点券#k\r\n";
		text += "什么是装备属性置换呢？\r\n";
		text += "就是把#r#e装备栏的第一格的放你不想要的属性装备，第二个放你需要带的装备，切勿低属性转高属性，出问题自己负责！\r\n";
		text += "#k#e第一格的装备就会消失！属性会转移到第二格子装备上。\r\n";
		cm.sendSimple(text);
	} else if (status == 2) {
		var ItemID = cm.getInventory(1).getItem(1).getItemId();
		var ItemID1 = cm.getInventory(1).getItem(2).getItemId();
		var 力量 = cm.getInventory(1).getItem(1).getStr();
		var 敏捷 = cm.getInventory(1).getItem(1).getDex();
		var 智力 = cm.getInventory(1).getItem(1).getInt();
		var 运气 = cm.getInventory(1).getItem(1).getLuk();
		var 物攻 = cm.getInventory(1).getItem(1).getWatk();
		var 魔攻 = cm.getInventory(1).getItem(1).getMatk();
		if (cm.getPlayer().getCSPoints(1) < 300000) {
			cm.sendOk("点券不足 3W，无法转移~");
			cm.dispose();
		} else if (cm.canHold(ItemID, 1) == false) {
			cm.sendOk("背包空间不足，请确认。");
			cm.dispose();
		} else if (cm.getInventory(1).getItem(1) == null || cm.getInventory(1).getItem(2) == null) {
				cm.sendOk("请将你所要转移的装备放置在装备栏的第一、二格。");
				cm.dispose();
			} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == false && cm.isCash(cm.getInventory(1).getItem(2).getItemId()) == false) {
				cm.sendOk("请保证装备栏第一、二格的装备为点装。");
				cm.dispose();
			} else if (parseInt(cm.getInventory(1).getItem(1).getItemId() / 10000) != parseInt(cm.getInventory(1).getItem(2).getItemId() / 10000)) {
				cm.sendOk("请保证第一、二格装备为同一类型装备。");
				cm.dispose();
		} else {
			var equip = ii.randomizeStats(ii.getEquipById(ItemID1)).copy();
			var type = ii.getEquipById(ItemID1);
			equip.setPosition(1);
			equip.setStr(力量);
			equip.setDex(敏捷);
			equip.setInt(智力);
			equip.setLuk(运气);
			equip.setWatk(魔攻);
			equip.setMatk(物攻);
			Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), equip, false, false);
			cm.gainItem(ItemID1, -1);
			cm.gainItem(ItemID, -1);
			cm.gainNX(-300000);
			cm.sendOk("属性转移成功~");
			cm.dispose();
		}

	}

}




