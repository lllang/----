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
            var text = "  #e此处兑换 #b-盛大易宝#v4031250# - #r点券1000比1兑换。#k\r\n\r\n";
            text += " #b#L0#点券兑换#v4031250# → 比例 -（#r1000 = 1#b）#l\r\n\r\n"
            text += " #b#L1##v4031250#兑换点券 → 比例 -（#r1 = 800#b）#l\r\n\r\n";
           //text += " #b#L2##v2140008#兑换点券（活动） → 比例 -（#r1 = 10000#b）#l\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                var txt = " 请输入所需兑换数值：\r\n\r\n"
                cm.sendGetNumber(txt, cm.getPlayer().getCSPoints(1) / 1000, 1, cm.getPlayer().getCSPoints(1) / 1000);
            } else if (selection == 1) {
                beauty = 1;
                var txt = " 请输入所需兑换数值：\r\n\r\n"
                cm.sendGetNumber(txt, cm.itemQuantity(4031250), 1, cm.itemQuantity(4031250));
            } else if (selection == 2) {
                beauty = 2;
                var txt = " 请输入所需兑换数值：\r\n\r\n"
                cm.sendGetNumber(txt, cm.itemQuantity(2140008), 1, cm.itemQuantity(2140008));
            }

        } else if (status == 2) {
            if (beauty == 0) {
                cm.gainItem(4031250, selection);
                cm.gainNX(-selection * 1000);
                cm.sendOk("兑换成功。");
                cm.dispose();
            } else if (beauty == 1) {
                cm.gainItem(4031250, -selection);
                cm.gainNX(selection * 800);
                cm.sendOk("兑换成功。");
                cm.dispose();
            } else if (beauty == 2) {
                cm.gainItem(2140008, -selection);
                cm.gainNX(selection * 10000);
                cm.sendOk("兑换成功。");
                cm.dispose();
            }
        }
    }
}
