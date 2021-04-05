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
            var text = "\r\n            #e欢迎来到#b必成卷轴兑换商店（请确保其他栏和消耗栏未满）#k\r\n\r\n";
            text += " #e#L0#打开必成卷兑换商城#l    #L3#必成卷轴回收#l\r\n\r\n"
            //text += "#e#L1##v4310196#兑换#v4310174#（1：1）#l   #L2#点券兑换#v4310196#(50000:1)#l\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                cm.openNpc(9120009, 1);


            } else if (selection == 1) {
                beauty = 0;
                var txt = " 请输入所需兑换数值：\r\n\r\n"
                cm.sendGetNumber(txt, cm.itemQuantity(4310196), 1, cm.itemQuantity(4310196));
            } else if (selection == 2) {
                beauty = 1;
                var txt = " 请输入所需兑换数值：\r\n\r\n"
                cm.sendGetNumber(txt, cm.getPlayer().getCSPoints(1) / 50000, 1, cm.getPlayer().getCSPoints(1) / 50000);
            } else if (selection == 3) {
                cm.openNpc(9120009, 2);
            }

        } else if (status == 2) {
            if (beauty == 0) {
                cm.gainItem(4310174, selection);
                cm.gainItem(4310196, -selection);
                cm.sendOk("兑换成功。");
                cm.dispose();
            } else if (beauty == 1) {
                cm.gainItem(4310196, selection);
                cm.gainNX(-selection * 50000);
                cm.sendOk("兑换成功。");
                cm.dispose();
            }
        }
    }
}
