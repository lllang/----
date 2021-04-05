var itemList = [5150016, 3010045, 3010049, 3010021, 2002099, 2022465, 2022466, 2022468, 2022246, 2022245];
var chance = [70, 70, 70, 70, 500, 500, 500, 500, 500, 500];
var sum = [];

for(var i = 1 ; i < itemList.length; i++)
    chance[i] = chance[i-1] + chance[i];

var randNum = Math.floor(Math.random()* chance[chance.length-1]);

var randItem = chance[chance.length-1]

for(var i = 0 ; i < chance.length; i++) {
    if ( randNum <= chance[i] ) {
        randItem = itemList[i];
        break;
    }
}


var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == 0) {
		
		
        cm.sendSimple("欢迎来到企鹅冒险岛。请务必将需要强化的装备放到第一格哦。\r\n#L4#重生装备【保留所有属性强化清零】消费#v2610001##l*1");
    } else if (status == 1) {
        if (selection == 0) {
			//装备各种属性初始化
			s1 = Math.floor(Math.random() * (3 - 0) + 0);
			s2 =  Math.floor(Math.random() * (3 - 0) +0);
			s3 =  Math.floor(Math.random() * (3 - 0) + 0);
			s4 =  Math.floor(Math.random() * (3 - 0) + 0);
			s5 =  Math.floor(Math.random() * (3 - 0) + 0);
			s6 =  Math.floor(Math.random() * (3 - 0) + 0);
			if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("装备栏第一格必须有物品才行哦~!");
				cm.dispose();
				return;
			}
			item = cm.getInventory(1).getItem(1);
			itemid = item.getItemId();
			itemFlag = item.getFlag();
			力量 = item.getStr();
			敏捷 = item.getDex();
			运气 = item.getLuk();
			智力 = item.getInt();
			生命值 = item.getHp();
			法力值 = item.getMp();
			物理攻击力 = item.getWatk();
			魔法攻击力 = item.getMatk();
			物理防御力 = item.getWdef();
			魔法防御力 = item.getMdef();
			回避率 = item.getAvoid();
			命中率 = item.getAcc();
			跳跃力 = item.getJump();
			移动速度 = item.getSpeed();
			装备等级 = item.getLevel();
			itemgetOwner = item.getOwner();
			itemsj = item.getUpgradeSlots();
            if (cm.haveItem(4000313,200000)) {
                cm.gainItem(4000313, -200000);
                cm.removeSlot(1, 1, 1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var item = ii.getEquipById(itemid);
				item.setStr(力量+s1);
				item.setDex(敏捷+s2);
				item.setLuk(运气+s3);
				item.setInt(智力+s4);
				item.setHp(生命值);
				item.setMp(法力值);
				item.setWatk(物理攻击力+s5);
				item.setMatk(魔法攻击力+s6);
				item.setWdef(物理防御力);
				item.setMdef(魔法防御力);
				item.setAvoid(回避率);
				item.setAcc(命中率);
				item.setJump(跳跃力);
				item.setSpeed(移动速度);
				item.setOwner(itemgetOwner);
				item.setLevel(装备等级);
				item.setLocked(1);
				item.setUpgradeSlots(itemsj);
				Packages.server.MapleInventoryManipulator.addbyItem(cm.getC(), item.copy());
				cm.喇叭(2,"玩家 " + cm.getChar().getName() + " 使用 黄金枫叶 随机给装备增加了0-3的属性值")
				cm.sendOk("强化成功-.-");
            } else {
                cm.sendOk("快滚，在点我打死你-.-");
            }
            cm.dispose();
        } else if (selection == 1) {
            cm.openNpc(9310101,1);
        } else if (selection == 2) {
            cm.openNpc(9310101,2);
        } else if (selection == 3) {
            //装备各种属性初始化
			s1 = Math.floor(Math.random() * (3 - 0) + 0);
			s2 =  Math.floor(Math.random() * (3 - 0) +0);
			s3 =  Math.floor(Math.random() * (3 - 0) + 0);
			s4 =  Math.floor(Math.random() * (3 - 0) + 0);
			s5 =  Math.floor(Math.random() * (3 - 0) + 0);
			s6 =  Math.floor(Math.random() * (3 - 0) + 0);
			if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("装备栏第一格必须有物品才行哦~!");
				cm.dispose();
				return;
			}
			item = cm.getInventory(1).getItem(1);
			itemid = item.getItemId();
			itemFlag = item.getFlag();
			力量 = item.getStr();
			敏捷 = item.getDex();
			运气 = item.getLuk();
			智力 = item.getInt();
			生命值 = item.getHp();
			法力值 = item.getMp();
			物理攻击力 = item.getWatk();
			魔法攻击力 = item.getMatk();
			物理防御力 = item.getWdef();
			魔法防御力 = item.getMdef();
			回避率 = item.getAvoid();
			命中率 = item.getAcc();
			跳跃力 = item.getJump();
			移动速度 = item.getSpeed();
			装备等级 = item.getLevel();
			itemgetOwner = item.getOwner();
			itemsj = item.getUpgradeSlots();
            if (cm.getPlayer().getCSPoints(1) >= 5000000000) {
                cm.gainNX(-5000000000);
                cm.removeSlot(1, 1, 1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var item = ii.getEquipById(itemid);
				item.setStr(力量+s1);
				item.setDex(敏捷+s2);
				item.setLuk(运气+s3);
				item.setInt(智力+s4);
				item.setHp(生命值);
				item.setMp(法力值);
				item.setWatk(物理攻击力+s5);
				item.setMatk(魔法攻击力+s6);
				item.setWdef(物理防御力);
				item.setMdef(魔法防御力);
				item.setAvoid(回避率);
				item.setAcc(命中率);
				item.setJump(跳跃力);
				item.setSpeed(移动速度);
				item.setOwner(itemgetOwner);
				item.setLevel(装备等级);
				item.setLocked(1);
				item.setUpgradeSlots(itemsj);
				Packages.server.MapleInventoryManipulator.addbyItem(cm.getC(), item.copy());
				cm.喇叭(2,"玩家 " + cm.getChar().getName() + " 使用 点卷 随机给装备增加了0-3的属性值")
				cm.sendOk("强化成功-.-");
            } else {
                cm.sendOk("快滚，在点我打死你-.-");
            }
            cm.dispose();
		} else if (selection == 4) {
            //装备各种属性初始化
			if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("装备栏第一格必须有物品才行哦~!");
				cm.dispose();
				return;
			}
			item = cm.getInventory(1).getItem(1);
			itemid = item.getItemId();
			itemFlag = item.getFlag();
			力量 = item.getStr();
			敏捷 = item.getDex();
			运气 = item.getLuk();
			智力 = item.getInt();
			生命值 = item.getHp();
			法力值 = item.getMp();
			物理攻击力 = item.getWatk();
			魔法攻击力 = item.getMatk();
			物理防御力 = item.getWdef();
			魔法防御力 = item.getMdef();
			回避率 = item.getAvoid();
			命中率 = item.getAcc();
			跳跃力 = item.getJump();
			移动速度 = item.getSpeed();
			装备等级 = item.getLevel();
			itemgetOwner = item.getOwner();
			itemsj = item.getUpgradeSlots();
            if (cm.haveItem(2610001,1)) {
                cm.gainItem(2610001, -1);
                cm.removeSlot(1, 1, 1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var item = ii.getEquipById(itemid);
				item.setStr(力量);
				item.setDex(敏捷);
				item.setLuk(运气);
				item.setInt(智力);
				item.setHp(生命值);
				item.setMp(法力值);
				item.setWatk(物理攻击力);
				item.setMatk(魔法攻击力);
				item.setWdef(物理防御力);
				item.setMdef(魔法防御力);
				item.setAvoid(回避率);
				item.setAcc(命中率);
				item.setJump(跳跃力);
				item.setSpeed(移动速度);
				item.setLocked(1);
				item.setUpgradeSlots(itemsj);
				Packages.server.MapleInventoryManipulator.addbyItem(cm.getC(), item.copy());
				cm.喇叭(2,"玩家 " + cm.getChar().getName() + " 使用 封印解除卷轴 已经将装备重生~!")
				cm.sendOk("重生成功-.-");
            } else {
                cm.sendOk("你没有#v2610001#-.-");
            }
            cm.dispose();
        } else if (selection == 5) {
            cm.gainItem(1472063, 1);
            cm.dispose();
        } else if (selection == 6) {
            cm.gainItem(2060006, 800);
            cm.dispose();
        } else if (selection == 7) {
            cm.sendGetNumber("Did you bring the powder keg with you? Then, please give me the #bPowder Keg#k you have.  I will make a nice firecracker.  How many are you willing to give me? \n\r #b< Number of Powder Keg in inventory : 0 >#k", 0, 0, 1000);
        }
    } else if (status == 2) {
        var num = selection;
        if (num == 7) {
            cm.sendOk("T.T I will need the powder keg to start the fireworks....\r\n Please think again and talk to me.");
        } else if (cm.haveItem(4031875, num)) {
            cm.gainItem(4031875, -num);
            cm.giveKegs(num);
            cm.sendOk("Don't forget to give me the powder keg when you obtain them."); cm.safeDispose();
        } else if (selection == 8) {
            cm.sendNext("Status of Powder Keg Collection \n\r #B"+cm.getKegs()+"# \n\r If we collect them all, we can start the firework...");
        }
        cm.safeDispose();
    }
}