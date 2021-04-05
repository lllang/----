var itemList = new Array(
//兑换后物品id 兑换后数量 需要物品ID 需要物品数量
	Array(4031250, 150, 1332289, 1),
	Array(4031250, 150, 1382273, 1),
	Array(4031250, 150, 1402267, 1),
	Array(4031250, 150, 1422196, 1),
	Array(4031250, 150, 1432226, 1),
	Array(4031250, 150, 1442284, 1),
    Array(4031250, 150, 1452265, 1),
	Array(4031250, 150, 1462251, 1),
    Array(4031250, 150, 1472275, 1),
	Array(4031250, 150, 1482232, 1),
    Array(4031250, 150, 1492245, 1)
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
        msg += "#fUI/Basic/CheckBox/1#顶级回收#fUI/Basic/CheckBox/1#:\r\n\r\n";
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
		cm.喇叭(1, "[" + cm.getPlayer().getName() + "]在顶级回收中获得了150个盛大易宝，感谢光临~");
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}