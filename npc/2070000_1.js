var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
    Array(2041332, 30000)
    //Array(4310028, 8888),
    //Array(4250002, 8888),
    //Array(4310174, 8888),
    //Array(4310196, 12000),
    //Array(4251202, 24000),
    //Array(4251202, 10000),
    //Array(4000464, 10000)
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
            text = "想要用豆豆兑换什么物品呢？\r\n";
            text += "  #e#d- 目前拥有豆豆数量：#r#e " + cm.getPlayer().getBeans() + " #n #k\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "##v" + itemlist[i][0] + "#(需要 #r" + itemlist[i][1] + "#k 个 豆豆！)#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - 当前兑换道具：#r#i" + itemlist[selects][0] + "\r\n\r\n"
            txt += " - 当前道具单价：#r" + itemlist[selects][1] + "#k 豆豆。\r\n\r\n"
            txt += " - 请输入所需兑换数值：\r\n\r\n"
            cm.sendGetNumber(txt, 1, 1, 100);
        } else if (a == 2) {
            jg = selection
            var itemid = itemlist[selects][0];
            if (cm.canHold(itemid,jg) == false) {
                cm.sendOk("您的背包空间不足，请整理后再兑换。");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getBeans() <= itemlist[selects][1] * jg) {
                cm.sendOk("请保证你背包内有足够的豆豆。");
                cm.dispose();
            } else {
                cm.getPlayer().setBeans(cm.getPlayer().getBeans()-itemlist[selects][1] * jg);
                cm.gainItem(itemlist[selects][0], jg);
                cm.getPlayer().fakeRelog();
                cm.sendOk("恭喜你花费了#r " + itemlist[selects][1] * jg + " #k豆豆购买了#v" + itemlist[selects][0] + "# * #r" + jg + "#k个。");
                cm.dispose();
        }
    }//mode
}
}