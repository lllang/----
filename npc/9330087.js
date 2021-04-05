var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
    
    Array(1032219, 50000),//二十万点券

    Array(1132215, 50000)//三十万点券

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
            text = "使用#稀有装备#k都可以兑换点券哦！不知道你想用哪种兑换点券呢？#r（兑换前请确保背包是不是有此稀有装备，更换后自行存档，不然回档自己负责！）#d\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "##d回收#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "# 兑换点券 #r" + itemlist[i][1] + "#d 点#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - 当前回收道具：#r#i" + itemlist[selects][0] + "\r\n\r\n"
            txt += " - 回收装备点券：#r" + itemlist[selects][1] + "#k。\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection;
            var itemid = itemlist[selects][0];
            if (cm.haveItem(itemid, 1) == false) {
                cm.sendOk("确保背包内是否有该装备");
                cm.dispose();
            } else {
                cm.gainNX(itemlist[selects][1]);
                cm.gainItem(itemlist[selects][0], -1);
                cm.sendOk("兑换成功。");
                cm.dispose();
            }
        }
    }
}