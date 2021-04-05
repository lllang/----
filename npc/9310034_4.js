var itemList = new Array(
//兑换后物品id 兑换后数量 需要物品ID 需要物品数量
	Array(4021009, 1, 1302275, 1),
	Array(4021009, 1, 1332225, 1),
	Array(4021009, 1, 1492179, 1),
	Array(4021009, 1, 1382208, 1),
	Array(4021009, 1, 1402196, 1),
	Array(4021009, 1, 1422140, 1),
    Array(4021009, 1, 1432167, 1),
	Array(4021009, 1, 1452205, 1),
    Array(4021009, 1, 1462193, 1),
	Array(4021009, 1, 1472214, 1),
    Array(4021009, 1, 1482168, 1),
	Array(4021009, 1, 1442223, 1)
	//Array(4021009, 1, 1332114, 1),
    //Array(4021009, 1, 1312056, 1),
    //Array(4021009, 1, 1302142, 1)
);
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "#fUI/Basic/CheckBox/1#星石兑换中心#fUI/Basic/CheckBox/1#:\r\n\r\n";
        msg += "#g------------------------------------------------------\r\n";
        for (var i = 0; i < itemList.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "使用#i" + itemList[i][2] + ":# × " + itemList[i][3] + " 兑换 #i" + itemList[i][0] + ":# × " + itemList[i][1] + "#l\r\n";
        }
        cm.sendSimple("" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(itemList[sels][0])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        if (!cm.haveItem(itemList[sels][2], itemList[sels][3])) {
			cm.sendNext("#b身上没有#r#i" + itemList[sels][2] + "##t" + itemList[sels][2] + "#x" + itemList[sels][3] + "");
            cm.dispose();
            return;
        }
        cm.sendYesNo("#b是否要兑换#r #i" + itemList[sels][0] + "# × " + itemList[sels][1] + "? \r\n");
    } else if (status == 2) {
        cm.gainItem(itemList[sels][2], -itemList[sels][3]);
        cm.gainItem(itemList[sels][0], itemList[sels][1]);
        cm.sendNext("#b已经兑换了 #i" + itemList[sels][0] + "# × "+itemList[sels][1]+"");
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}