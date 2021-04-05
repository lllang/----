var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
    Array(1402214, 10),
    Array(1432182, 10),
    Array(1422156, 10),
    Array(1472230, 10),
    Array(1332242, 10),
    Array(1452220, 10),
    Array(1462208, 10),
    Array(1382226, 10),
    Array(1482183, 10),
    Array(1492194, 10)
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
            text = "使用红色武器都可以兑换冒险币哦！不知道你想用那种兑换冒险币呢？#r(兑换前请确保背包内是不是金币超过15E.因金币满导致兑换失败的，自己负责！)\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#d#L" + i + "##v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#1个 兑换#v4310088# x " + itemlist[i][1] + "#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " 确认回收装备为：#r#i" + itemlist[selects][0] + "\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = 1
            var itemid = itemlist[selects][0];
            if (cm.canHold(4310088,10) == false) {
                cm.sendOk("您的背包空间不足，请整理后再兑换。");
                cm.dispose();
                return;
            }
            if (cm.haveItem(itemid,1) == false) {
                cm.sendOk("请保证你背包内是否有该道具。");
                cm.dispose();
            } else {
                cm.gainItem(4310088, 10);
                cm.gainItem(itemid, -jg);
                cm.sendOk("回收成功");
                cm.dispose();
            }
        }
    }//mode
}//f