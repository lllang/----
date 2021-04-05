var a = 0;
var text;
var nice = false;
var selects; //记录玩家的选项
var buynum = 0;
var 几率 = Math.floor(Math.random() * 99);
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子

var 游戏币 = 30000000;
var 枫叶 = 2000;
var 保护卷代码 = 2048904;
var 属性 = Math.floor(Math.random() * 28)+10;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
			if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将需要强化的装备放置第一格~");
					cm.dispose();
			} else {
		var selStr = "#b"+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+""+tz2+"\r\n";
		
		selStr += "#r   我们可以通过装备强化获得属性提升#k\r\n\r\n";
		
		selStr += "#r	强化需要材料：#v4001126##b["+枫叶+"]#r个，游戏币["+游戏币+"]！#k\r\n";
		
		selStr += "#r	强化如果失败：#v"+保护卷代码+"##b[1]#r个，可保住属性否则扣30全属！#k\r\n";
		
		selStr += "#r	当前强化装备：#b#v" + cm.getInventory(1).getItem(1).getItemId() + "##k\r\n";
		
		selStr += "#r#L0##b#e开始强化【成功率：85%】每次成功全属性加10 ~ 38点#l\r\n\r\n\r\n";
		cm.sendSimple(selStr);
			}
	} else if (status == 1) {
		if (selection == 0) {
			var itemIDxx = cm.getInventory(1).getItem(1).getItemId();
			if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("请将需要强化的装备放置第一格~");
					cm.dispose();
			} else if (cm.getInventory(1).getItem(1) == null) {
                cm.sendOk("请将需要强化的装备放置在物品栏第一格。");
                cm.dispose();
			} else if (cm.haveItem(4001126,枫叶) == false) {
                cm.sendOk("#v4001126#道具数量不足，请确认后再来。");
				cm.dispose();
			} else if (cm.haveItem(2048904,1) == false) {
                cm.sendOk("#v2048904#道具数量不足，请确认后再来。");
				cm.dispose();
			} else if (cm.getPlayer().getMeso() < 游戏币) {
                cm.sendOk("游戏币数量不足，请确认后再来。");
				cm.dispose();
			} else if (cm.getInventory(1).getItem(1) != null) {
					if (几率 < 70) {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 属性);
					item.setInt(item.getInt() + 属性);
					item.setLuk(item.getLuk() + 属性);
					item.setDex(item.getDex() + 属性);
					item.setWatk(item.getWatk() + 属性);
					item.setMatk(item.getMatk() + 属性);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(4001126, -枫叶);
					cm.gainMeso(-游戏币);
					cm.gainItem(保护卷代码,-1);
					cm.sendOk("强化成功，当前装备强化完毕。");
					cm.喇叭(1,"玩家：["+cm.getName()+"]在19洞门口成功强化，开心的飞起来咯属性+10-38点！");
					cm.dispose();
					} else {
						if(cm.haveItem(保护卷代码,1)){
						cm.gainItem(4001126, -枫叶);
						cm.gainMeso(-游戏币);
						cm.gainItem(保护卷代码,-1);
						cm.sendOk("很可惜，装备强化失败.\r\n您消耗了1张保护了装备的属性!\r\n但是材料已经无法挽救了！");
						cm.喇叭(1,"玩家：["+cm.getName()+"]强化失败了，整个人都开始懵了！！！");
						cm.dispose();
					} else {
							cm.gainItem(4001126, -枫叶);
							cm.gainMeso(-游戏币);
							item.setStr(item.getStr() - 30);
							item.setInt(item.getInt() - 30);
							item.setLuk(item.getLuk() - 30);
							item.setDex(item.getDex() - 30);
							item.setWatk(item.getWatk() - 30);
							item.setMatk(item.getMatk() - 30);
							item.setLocked(1);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
							cm.sendOk("#r#e很可惜，装备强化失败\r\n由于您没有保护卷，装备的属性-30!#k\r\n并且材料也没了。");
							cm.喇叭(1,"玩家：["+cm.getName()+"]强化失败了，整个人都开始懵了！！！！");
							cm.dispose();
						}
					}
			}
		}
	}
}

