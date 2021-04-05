var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;

//自定义内容： Array(兑换的道具,兑换的道具数量,兑换需要的道具,需要的道具数量),
var itemlist = Array(
    Array(4002001, 1, 4001325, 2),
	Array(4002001, 10, 4001325, 20),
    Array(2049323, 1, 4001325, 1)
  

);

function start() {
    a = -1;
    action(1, 0, 0);
}

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
            text = "                "+cm.ms()+" - 试炼兑换\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "#兑换：#b#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#" + itemlist[i][1] + "个 - 需要：#v" + itemlist[i][2] + "#" + itemlist[i][3] + "个#k#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - 当前兑换道具：#r#i" + itemlist[selects][0] + "#" + itemlist[selects][1] + "#k\r\n\r\n"
            txt += " - 兑换需要道具：#d" + itemlist[selects][2] + "#k\r\n\r\n"
            txt += " - 兑换需要数量：#r" + itemlist[selects][3] + "W#k \r\n\r\n"
			txt += " - 确定要兑换吗？\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection
            var itemid = itemlist[selects][0];
            if (cm.haveItem(itemlist[selects][2], itemlist[selects][3])) {
                cm.gainItem(itemlist[selects][2], -itemlist[selects][3]);
                cm.gainItem(itemlist[selects][0], itemlist[selects][1]);
                cm.sendOk("兑换成功");
				cm.喇叭(1,"["+ cm.getPlayer().getName() + "] 使用法老宝石成功兑换了道具!");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的道具。");
                cm.dispose();
            }
        }
    }//mode
}//f