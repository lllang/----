var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
    Array(4000016, 999, 1142490, 5, 0,0),
    Array(4000232, 999, 1142491, 10, 0, 1142490,0),
    Array(4000151, 300, 1142493, 15, 0, 1142491,0),
    Array(4000402, 300, 1142492, 20, 0, 1142493,0),
    Array(4000406, 300, 1142494, 25, 0, 1142492,0),
    Array(4000040, 100, 1142541, 30, 0, 1142494,0),
    Array(4021010, 100, 1142008, 40, 0, 1142541,0),
    Array(4021010, 0, 1142003, 40, 3000, 1142008,1000)

);

function start() {
	if (cm.getInventory(1).getItem(1) == null)  {
		            cm.sendOk("请将你的称号放置在装备栏的第一格。");
				    cm.dispose();
	}else{
    a = -1;
    action(1, 0, 0);
}}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            var ItemID = cm.getInventory(1).getItem(1).getItemId();
            text = "                  冒险岛 - 勋章系统\r\n";
            if (cm.getPlayer().getBossLog("冒险岛 - 勋章系统", 1) == 0) {
                text += " - 所需收集道具：#b#z" + itemlist[0][0] + "##k x #r" + itemlist[0][1] + "#k  当前拥有：#g#c" + itemlist[0][0] + "##k 个\r\n\r\n";
                text += " - 奖励勋章属性：#d全属性 + " + itemlist[0][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[0][0]) < itemlist[0][1] ? " #b 所需道具不足，请再接再厉！" : "#r#L0#任务道具收集完毕，是否要领取奖励？#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("冒险岛 - 勋章系统", 1) == 1) {
                text += " - 升级所需勋章：#b#z" + itemlist[1][5] + "##k \r\n#r       Tip：请放置在#d装备栏 - 第一格#k\r\n\r\n";
                text += " - 所需收集道具：#b#z" + itemlist[1][0] + "##k x #r" + itemlist[1][1] + "#k  当前拥有：#g#c" + itemlist[1][0] + "##k 个\r\n\r\n";
                text += " - 奖励勋章属性：#d全属性 + " + itemlist[1][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[1][0]) < itemlist[1][1] ? " #b 所需道具不足，请再接再厉！" : "#r#L1#任务道具收集完毕，是否要领取奖励？#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("冒险岛 - 勋章系统", 1) == 2) {
                text += " - 升级所需勋章：#b#z" + itemlist[2][5] + "##k \r\n#r       Tip：请放置在#d装备栏 - 第一格#k\r\n\r\n";
                text += " - 所需收集道具：#b#z" + itemlist[2][0] + "##k x #r" + itemlist[2][1] + "#k  当前拥有：#g#c" + itemlist[2][0] + "##k 个\r\n\r\n";
                text += " - 奖励勋章属性：#d全属性 + " + itemlist[2][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[2][0]) < itemlist[2][1] ? " #b 所需道具不足，请再接再厉！" : "#r#L2#任务道具收集完毕，是否要领取奖励？#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("冒险岛 - 勋章系统", 1) == 3) {
                text += " - 升级所需勋章：#b#z" + itemlist[3][5] + "##k \r\n#r       Tip：请放置在#d装备栏 - 第一格#k\r\n\r\n";
                text += " - 所需收集道具：#b#z" + itemlist[3][0] + "##k x #r" + itemlist[3][1] + "#k  当前拥有：#g#c" + itemlist[3][0] + "##k 个\r\n\r\n";
                text += " - 奖励勋章属性：#d全属性 + " + itemlist[3][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[3][0]) < itemlist[3][1] ? " #b 所需道具不足，请再接再厉！" : "#r#L3#任务道具收集完毕，是否要领取奖励？#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("冒险岛 - 勋章系统", 1) == 4) {
                text += " - 升级所需勋章：#b#z" + itemlist[4][5] + "##k \r\n#r       Tip：请放置在#d装备栏 - 第一格#k\r\n\r\n";
                text += " - 所需收集道具：#b#z" + itemlist[4][0] + "##k x #r" + itemlist[4][1] + "#k  当前拥有：#g#c" + itemlist[4][0] + "##k 个\r\n\r\n";
                text += " - 奖励勋章属性：#d全属性 + " + itemlist[4][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[4][0]) < itemlist[4][1] ? " #b 所需道具不足，请再接再厉！" : "#r#L4#任务道具收集完毕，是否要领取奖励？#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("冒险岛 - 勋章系统", 1) == 5) {
                text += " - 升级所需勋章：#b#z" + itemlist[5][5] + "##k \r\n#r       Tip：请放置在#d装备栏 - 第一格#k\r\n\r\n";
                text += " - 所需收集道具：#b#z" + itemlist[5][0] + "##k x #r" + itemlist[5][1] + "#k  当前拥有：#g#c" + itemlist[5][0] + "##k 个\r\n\r\n";
                text += " - 奖励勋章属性：#d全属性 + " + itemlist[5][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[5][0]) < itemlist[5][1] ? " #b 所需道具不足，请再接再厉！" : "#r#L5#任务道具收集完毕，是否要领取奖励？#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("冒险岛 - 勋章系统", 1) == 6) {
                text += " - 升级所需勋章：#b#z" + itemlist[6][5] + "##k \r\n#r       Tip：请放置在#d装备栏 - 第一格#k\r\n\r\n";
                text += " - 所需收集道具：#b#z" + itemlist[6][0] + "##k x #r" + itemlist[6][1] + "#k  当前拥有：#g#c" + itemlist[6][0] + "##k 个\r\n\r\n";
                text += " - 奖励勋章属性：#d全属性 + " + itemlist[6][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[6][0]) < itemlist[6][1] ? " #b 所需道具不足，请再接再厉！" : "#r#L6#任务道具收集完毕，是否要领取奖励？#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("冒险岛 - 勋章系统", 1) == 7) {
                text += " - 升级所需勋章：#b#z" + itemlist[7][5] + "##k \r\n#r       Tip：请放置在#d装备栏 - 第一格#k\r\n\r\n";
                text += " - 升级所需人气：#b" + itemlist[7][6] + "#k 点 人气\r\n\r\n";
                text += " - 奖励勋章属性：#d全属性 + " + itemlist[7][3] + " || #dHP/MP + " + itemlist[7][4] + "\r\n\r\n";
                text += "       " + (cm.getPlayer().getFame() < itemlist[7][6] ? " #b 所需人气不足，请再接再厉！" : "#r#L7#任务道具收集完毕，是否要领取奖励？#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else {
                cm.sendOk("你的称号已经达到最顶级，无法继续强化。")
            }
        } else if (a == 1) {
            var ItemID = cm.getInventory(1).getItem(1).getItemId();
            if (cm.canHold(itemlist[selection][0]) == false) {
                cm.sendOk("您的背包空间不足，请整理后再兑换。");
                cm.dispose();
                return;
            }
            if (ItemID != itemlist[selection][5]) {
                cm.sendOk("请检查第一格装备是否正确");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getFame() < itemlist[selection][6]) {
                cm.sendOk("升级所需人气度不足。");
                cm.dispose();
                return;
            }
            if (cm.haveItem(itemlist[selection][0], itemlist[selection][1])) {
                cm.gainItem(itemlist[selection][0], -itemlist[selection][1]);
                cm.gainItem(itemlist[selection][5],-1);
                cm.gainItem(itemlist[selection][2], itemlist[selection][3], itemlist[selection][3], itemlist[selection][3], itemlist[selection][3], itemlist[selection][4], itemlist[selection][4], itemlist[selection][3], itemlist[selection][3],0,0,0,0,0,0,0);
                cm.getPlayer().setBossLog("冒险岛 - 勋章系统", 1);
                cm.sendOk("兑换成功。");
                cm.dispose();
            } else {
                cm.sendOk("对不起，所需道具不足，请确认。");
                cm.dispose();
            }
        }
    }
}