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
		
		
        cm.sendSimple("��ӭ�������ð�յ�������ؽ���Ҫǿ����װ���ŵ���һ��Ŷ��\r\n#L4#����װ����������������ǿ�����㡿����#v2610001##l*1");
    } else if (status == 1) {
        if (selection == 0) {
			//װ���������Գ�ʼ��
			s1 = Math.floor(Math.random() * (3 - 0) + 0);
			s2 =  Math.floor(Math.random() * (3 - 0) +0);
			s3 =  Math.floor(Math.random() * (3 - 0) + 0);
			s4 =  Math.floor(Math.random() * (3 - 0) + 0);
			s5 =  Math.floor(Math.random() * (3 - 0) + 0);
			s6 =  Math.floor(Math.random() * (3 - 0) + 0);
			if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("װ������һ���������Ʒ����Ŷ~!");
				cm.dispose();
				return;
			}
			item = cm.getInventory(1).getItem(1);
			itemid = item.getItemId();
			itemFlag = item.getFlag();
			���� = item.getStr();
			���� = item.getDex();
			���� = item.getLuk();
			���� = item.getInt();
			����ֵ = item.getHp();
			����ֵ = item.getMp();
			�������� = item.getWatk();
			ħ�������� = item.getMatk();
			��������� = item.getWdef();
			ħ�������� = item.getMdef();
			�ر��� = item.getAvoid();
			������ = item.getAcc();
			��Ծ�� = item.getJump();
			�ƶ��ٶ� = item.getSpeed();
			װ���ȼ� = item.getLevel();
			itemgetOwner = item.getOwner();
			itemsj = item.getUpgradeSlots();
            if (cm.haveItem(4000313,200000)) {
                cm.gainItem(4000313, -200000);
                cm.removeSlot(1, 1, 1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var item = ii.getEquipById(itemid);
				item.setStr(����+s1);
				item.setDex(����+s2);
				item.setLuk(����+s3);
				item.setInt(����+s4);
				item.setHp(����ֵ);
				item.setMp(����ֵ);
				item.setWatk(��������+s5);
				item.setMatk(ħ��������+s6);
				item.setWdef(���������);
				item.setMdef(ħ��������);
				item.setAvoid(�ر���);
				item.setAcc(������);
				item.setJump(��Ծ��);
				item.setSpeed(�ƶ��ٶ�);
				item.setOwner(itemgetOwner);
				item.setLevel(װ���ȼ�);
				item.setLocked(1);
				item.setUpgradeSlots(itemsj);
				Packages.server.MapleInventoryManipulator.addbyItem(cm.getC(), item.copy());
				cm.����(2,"��� " + cm.getChar().getName() + " ʹ�� �ƽ��Ҷ �����װ��������0-3������ֵ")
				cm.sendOk("ǿ���ɹ�-.-");
            } else {
                cm.sendOk("������ڵ��Ҵ�����-.-");
            }
            cm.dispose();
        } else if (selection == 1) {
            cm.openNpc(9310101,1);
        } else if (selection == 2) {
            cm.openNpc(9310101,2);
        } else if (selection == 3) {
            //װ���������Գ�ʼ��
			s1 = Math.floor(Math.random() * (3 - 0) + 0);
			s2 =  Math.floor(Math.random() * (3 - 0) +0);
			s3 =  Math.floor(Math.random() * (3 - 0) + 0);
			s4 =  Math.floor(Math.random() * (3 - 0) + 0);
			s5 =  Math.floor(Math.random() * (3 - 0) + 0);
			s6 =  Math.floor(Math.random() * (3 - 0) + 0);
			if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("װ������һ���������Ʒ����Ŷ~!");
				cm.dispose();
				return;
			}
			item = cm.getInventory(1).getItem(1);
			itemid = item.getItemId();
			itemFlag = item.getFlag();
			���� = item.getStr();
			���� = item.getDex();
			���� = item.getLuk();
			���� = item.getInt();
			����ֵ = item.getHp();
			����ֵ = item.getMp();
			�������� = item.getWatk();
			ħ�������� = item.getMatk();
			��������� = item.getWdef();
			ħ�������� = item.getMdef();
			�ر��� = item.getAvoid();
			������ = item.getAcc();
			��Ծ�� = item.getJump();
			�ƶ��ٶ� = item.getSpeed();
			װ���ȼ� = item.getLevel();
			itemgetOwner = item.getOwner();
			itemsj = item.getUpgradeSlots();
            if (cm.getPlayer().getCSPoints(1) >= 5000000000) {
                cm.gainNX(-5000000000);
                cm.removeSlot(1, 1, 1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var item = ii.getEquipById(itemid);
				item.setStr(����+s1);
				item.setDex(����+s2);
				item.setLuk(����+s3);
				item.setInt(����+s4);
				item.setHp(����ֵ);
				item.setMp(����ֵ);
				item.setWatk(��������+s5);
				item.setMatk(ħ��������+s6);
				item.setWdef(���������);
				item.setMdef(ħ��������);
				item.setAvoid(�ر���);
				item.setAcc(������);
				item.setJump(��Ծ��);
				item.setSpeed(�ƶ��ٶ�);
				item.setOwner(itemgetOwner);
				item.setLevel(װ���ȼ�);
				item.setLocked(1);
				item.setUpgradeSlots(itemsj);
				Packages.server.MapleInventoryManipulator.addbyItem(cm.getC(), item.copy());
				cm.����(2,"��� " + cm.getChar().getName() + " ʹ�� ��� �����װ��������0-3������ֵ")
				cm.sendOk("ǿ���ɹ�-.-");
            } else {
                cm.sendOk("������ڵ��Ҵ�����-.-");
            }
            cm.dispose();
		} else if (selection == 4) {
            //װ���������Գ�ʼ��
			if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("װ������һ���������Ʒ����Ŷ~!");
				cm.dispose();
				return;
			}
			item = cm.getInventory(1).getItem(1);
			itemid = item.getItemId();
			itemFlag = item.getFlag();
			���� = item.getStr();
			���� = item.getDex();
			���� = item.getLuk();
			���� = item.getInt();
			����ֵ = item.getHp();
			����ֵ = item.getMp();
			�������� = item.getWatk();
			ħ�������� = item.getMatk();
			��������� = item.getWdef();
			ħ�������� = item.getMdef();
			�ر��� = item.getAvoid();
			������ = item.getAcc();
			��Ծ�� = item.getJump();
			�ƶ��ٶ� = item.getSpeed();
			װ���ȼ� = item.getLevel();
			itemgetOwner = item.getOwner();
			itemsj = item.getUpgradeSlots();
            if (cm.haveItem(2610001,1)) {
                cm.gainItem(2610001, -1);
                cm.removeSlot(1, 1, 1);
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var item = ii.getEquipById(itemid);
				item.setStr(����);
				item.setDex(����);
				item.setLuk(����);
				item.setInt(����);
				item.setHp(����ֵ);
				item.setMp(����ֵ);
				item.setWatk(��������);
				item.setMatk(ħ��������);
				item.setWdef(���������);
				item.setMdef(ħ��������);
				item.setAvoid(�ر���);
				item.setAcc(������);
				item.setJump(��Ծ��);
				item.setSpeed(�ƶ��ٶ�);
				item.setLocked(1);
				item.setUpgradeSlots(itemsj);
				Packages.server.MapleInventoryManipulator.addbyItem(cm.getC(), item.copy());
				cm.����(2,"��� " + cm.getChar().getName() + " ʹ�� ��ӡ������� �Ѿ���װ������~!")
				cm.sendOk("�����ɹ�-.-");
            } else {
                cm.sendOk("��û��#v2610001#-.-");
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