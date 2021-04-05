var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 几率 = Math.floor(Math.random() * 99);

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
			text = "#e#b             终极鉴定系统#k\r\n\r\n";
			text += "#r#L0#强化说明（认真阅读）#k\r\n\r\n";
			text += "#L1#进行#b☆★★★★  #k11星鉴定[#r四维加、双攻加50#k  ]#l\r\n";
			text += "#L2#进行#b☆☆★★★  #k12星鉴定[#r四维加、双攻加60#k  ]#l\r\n";
			text += "#L3#进行#b☆☆☆★★  #k13星鉴定[#r四维加、双攻加80#k  ]#l\r\n";
			text += "#L4#进行#b☆☆☆☆★  #k14星鉴定[#r四维加、双攻加110#k ]#l\r\n";
			text += "#L5#进行#b★★☆☆★★#k15星鉴定[#r四维加、双攻加150#k ]#l\r\n";
			//text += "#L1##n#r兑换#v2460003#需要#v4000464#x1 + #v4251202#x2 + 冒险币X2亿#l\r\n";

			cm.sendSimple(text);
		} else if (a == 1) {
			if (selection == 0) {
				cm.openNpc(9330065,0);
			}else if (selection == 1) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将鉴定的装备放置第一格~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("现金装备无法参与鉴定。");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049345, 1)) {
					cm.sendOk("11星强化卷轴不足。");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("金币不足。");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "★★★★★") {
					if (几率 < 4) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 50);
						item.setInt(item.getInt() + 50);
						item.setLuk(item.getLuk() + 50);
						item.setDex(item.getDex() + 50);
						item.setWatk(item.getWatk() + 50);
						item.setMatk(item.getMatk() + 50);
						item.setOwner("☆★★★★");
						cm.gainItem(2049345, -1);
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("鉴定成功，当前装备星级为 “#r☆★★★★#k”。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用强化卷居然鉴定出了11 [ ☆★★★★ ] 级别的装备,鸿运当头.可喜可贺", 5120003);
					} else {
						if(cm.haveItem(2531000, 1)){//如果拥有防爆卷轴
							cm.gainItem(2531000, -1);//消耗防爆卷轴
							cm.gainItem(2049345, -1);
							cm.gainMeso(-0);
							cm.sendOk("鉴定失败,防爆卷轴为你保护了装备不被炸掉 !");
						}else{
							cm.gainItem(2049345, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("鉴定失败,你装备爆掉了");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("星级不对!");
					cm.dispose();
				}
			}else if (selection == 2) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将鉴定的装备放置第一格~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("现金装备无法参与鉴定。");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049346, 1)) {
					cm.sendOk("12星强化卷轴不足。");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("金币不足。");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "☆★★★★") {
					if (几率 < 3) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 60);
						item.setInt(item.getInt() + 60);
						item.setLuk(item.getLuk() + 60);
						item.setDex(item.getDex() + 60);
						item.setWatk(item.getWatk() + 60);
						item.setMatk(item.getMatk() + 60);
						item.setOwner("☆☆★★★");
						cm.gainItem(2049346, -1);
						cm.gainItem(2531000, -1);//消耗防爆卷轴
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("鉴定成功，当前装备星级为 “#r☆☆★★★#k”。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用强化卷居然鉴定出了12 [ ☆☆★★★ ] 级别的装备,鸿运当头.可喜可贺", 5120006);
					} else {
						if(cm.haveItem(2531000, 1)){//如果拥有防爆卷轴
							cm.gainItem(2531000, -1);//消耗防爆卷轴
							cm.gainItem(2049346, -1);
							cm.gainMeso(-0);
							cm.sendOk("鉴定失败,防爆卷轴为你保护了装备不被炸掉 !");
						}else{
							cm.gainItem(2049346, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("鉴定失败,你装备爆掉了");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("星级不对!");
					cm.dispose();
				}
			}else if (selection == 3) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将鉴定的装备放置第一格~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("现金装备无法参与鉴定。");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049347, 1)) {
					cm.sendOk("13星强化卷轴不足。");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("金币不足。");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "☆☆★★★") {
					if (几率 < 3) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 80);
						item.setInt(item.getInt() + 80);
						item.setLuk(item.getLuk() + 80);
						item.setDex(item.getDex() + 80);
						item.setWatk(item.getWatk() + 80);
						item.setMatk(item.getMatk() + 80);
						item.setOwner("☆☆☆★★");
						cm.gainItem(2049347, -1);
						cm.gainItem(2531000, -1);//消耗防爆卷轴
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("鉴定成功，当前装备星级为 “#r☆☆☆★★#k”。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用强化卷居然鉴定出了13 [ ☆☆☆★★ ] 级别的装备,鸿运当头.可喜可贺", 5120008);
					} else {
						if(cm.haveItem(2531000, 1)){//如果拥有防爆卷轴
							cm.gainItem(2531000, -1);//消耗防爆卷轴
							cm.gainItem(2049347, -1);
							cm.gainMeso(-0);
							cm.sendOk("鉴定失败,防爆卷轴为你保护了装备不被炸掉 !");
						}else{
							cm.gainItem(2049347, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("鉴定失败,你装备爆掉了");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("星级不对!");
					cm.dispose();
				}
			}else if (selection == 4) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将鉴定的装备放置第一格~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("现金装备无法参与鉴定。");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049348, 1)) {
					cm.sendOk("14星强化卷轴不足。");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("金币不足。");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "☆☆☆★★") {
					if (几率 < 1) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 110);
						item.setInt(item.getInt() + 110);
						item.setLuk(item.getLuk() + 110);
						item.setDex(item.getDex() + 110);
						item.setWatk(item.getWatk() + 110);
						item.setMatk(item.getMatk() + 110);
						item.setOwner("☆☆☆☆★");
						cm.gainItem(2049348, -1);
						cm.gainItem(2531000, -1);//消耗防爆卷轴
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("鉴定成功，当前装备星级为 “#r☆☆☆☆★#k”。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用强化卷居然鉴定出了14 [ ☆☆☆☆★ ] 级别的装备,鸿运当头.可喜可贺", 5120009);
					} else {
						if(cm.haveItem(2531000, 1)){//如果拥有防爆卷轴
							cm.gainItem(2531000, -1);//消耗防爆卷轴
							cm.gainItem(2049348, -1);
							cm.gainMeso(-0);
							cm.sendOk("鉴定失败,防爆卷轴为你保护了装备不被炸掉 !");
						}else{
							cm.gainItem(2049348, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("鉴定失败,你装备爆掉了");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("星级不对!");
					cm.dispose();
				}
			}else if (selection == 5) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将鉴定的装备放置第一格~");
					cm.dispose();
					return;
				}
				if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
					cm.sendOk("现金装备无法参与鉴定。");
					cm.dispose();
					return;
				}
				if (!cm.haveItem(2049349, 1)) {
					cm.sendOk("15星强化卷轴不足。");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getMeso() < 0) {
					cm.sendOk("金币不足。");
					cm.dispose();
				}
				if (cm.getInventory(1).getItem(1).getOwner() == "☆☆☆☆★") {
					if (几率 < 1) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + 150);
						item.setInt(item.getInt() + 150);
						item.setLuk(item.getLuk() + 150);
						item.setDex(item.getDex() + 150);
						item.setWatk(item.getWatk() + 150);
						item.setMatk(item.getMatk() + 150);
						item.setOwner("★★☆☆★★");
						cm.gainItem(2049349, -1);
						cm.gainItem(2531000, -1);//消耗防爆卷轴
						cm.gainMeso(-0);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.sendOk("鉴定成功，当前装备星级为 “#r★★☆☆★★#k”。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用强化卷居然鉴定出了15 [ ★★☆☆★★ ] 级别的装备,鸿运当头.可喜可贺", 5120015);
					} else {
						if(cm.haveItem(2531000, 1)){//如果拥有防爆卷轴
							cm.gainItem(2531000, -1);//消耗防爆卷轴
							cm.gainItem(2049349, -1);
							cm.gainMeso(-0);
							cm.sendOk("鉴定失败,防爆卷轴为你保护了装备不被炸掉 !");
						}else{
							cm.gainItem(2049349, -1);
							cm.gainMeso(-0);
							cm.removeSlot(1, 1, 1); 
							cm.sendOk("鉴定失败,你装备爆掉了");
						}	
					}
					cm.dispose();
				}else{
					cm.sendOk("星级不对!");
					cm.dispose();
				}
			}
		}
	}
}
