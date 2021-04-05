

var sj;

var 增加装备次数道具 = 4000464;//五彩
var 增加装备次数道具数量 = 10;
var 增加装备次数道具数量1 = 100;
//道具代码：
var 强化道具 = 4032002;//五彩
var 强化道具数量 = 1;

var 全属性 = 3;
var 双攻 = 2;

var 装备最大升级次数 = 125;

var 强化几率 = 5;//强化几率*10%
var 随机值 = Math.floor(Math.random() * 10);
var status = 0;

function start() {
    if (cm.getInventory(1).getItem(1) == null) {
        cm.sendOk("请将装备放置在装备栏 “#b第一格#k” 。");
        cm.dispose();
    } else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
        cm.sendOk("现金装备无法参与强化。");
        cm.dispose();
    } else {
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
            var textz = "#b欢迎光临本岛。想让自己更加强大嘛，没错，本服推出特色强化系统那么仔细看完介绍：\r\n";

            textz += "#r1.这里只提升装备可升级次数，不改变属性\r\n";
            textz += "2.强化时请将装备放到背包第1格，提升次数百分百成功！\r\n";
            textz += "3.每件装备最多可强化125次（包括装备自带的可升级次数，超过125次有一定几率回档，后果自负！）#k\r\n\r\n";
            textz += "#k#L0#★使用10000点券★『装备可升级次数+1』\r\n\r\n";
            textz += "#L1#★使用100000点券★『装备可升级次数+10』\r\n\r\n";
            cm.sendSimple(textz);


        } else if (status == 1) {

            var ItemID = cm.getInventory(1).getItem(1).getItemId();
            var 可升级次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();
            var 已升级次数 = cm.getInventory(1).getItem(1).getLevel();
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(1) < 10000) {
                    cm.sendOk("点券不足");
                    cm.dispose();
                } else if ((装备最大升级次数 - 可升级次数 - 已升级次数) < 1) {
                    cm.sendOk("当前装备无法升级。");
                    cm.dispose();
                } else {
                    var statup = new java.util.ArrayList();
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() + 1);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainNX(-10000);
                    var selStr = "强化成功";
                    cm.sendOk(selStr);
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100000) {
                    cm.sendOk("点券不足");
                    cm.dispose();
                } else if ((装备最大升级次数 - 可升级次数 - 已升级次数) < 10) {
                    cm.sendOk("当前装备无法升级。");
                    cm.dispose();
                } else {
                    var statup = new java.util.ArrayList();
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() + 10);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainNX(-100000);
                    var selStr = "强化成功";
                    cm.sendOk(selStr);
                    cm.dispose();
                }
            }
        }
    }
}
	




