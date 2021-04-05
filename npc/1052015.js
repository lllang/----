function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "   #e此处兑换 #b- 枫叶 - #r1比1兑换。#k\r\n";
            text += "   枫叶获得方式：#v4001126#,#v4000313#\r\n"
            text += "   打任何怪物有几率爆\r\n"
            text += " #b#L0#黄金枫叶兑换游戏币 → 比例 -（#r1 = 100000#b）#l\r\n\r\n"
            text += " #b#L1#枫叶兑换游戏币 → 比例 -（#r1 = 10000#b）#l\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                var txt = " 请输入所需兑换数值：\r\n\r\n"
                cm.sendGetNumber(txt, cm.cm.itemQuantity(4000313), 1, cm.itemQuantity(4000313));
            } else if (selection == 1) {
                beauty = 1;
                var txt = " 请输入所需兑换数值：\r\n\r\n"
                cm.sendGetNumber(txt, cm.itemQuantity(4001126), 1, cm.itemQuantity(4001126));
    
            }

        } else if (status == 2) {
            if (beauty == 0) {
                cm.gainItem(4000313, -selection);
                cm.gainMeso(selection * 100000);
                cm.sendOk("兑换成功。");
                cm.dispose();
            } else if (beauty == 1) {
                cm.gainItem(4001126, -selection);
                cm.gainMeso(selection * 10000);
                cm.sendOk("兑换成功。");
                cm.dispose();

            }
        }
    }
}
