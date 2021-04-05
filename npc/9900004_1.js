function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "              #e#d《 彩 虹 签 到 系 统 》#d#k#n             \r\n"

            text += " #L2#每日工资#l\r\n\r\n"
            //text += " #L1#在线奖励#l\r\n\r\n"
            //text += " #L3#签到奖励兑换#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 1111);

        } else if (selection == 2) {
            if (cm.getBossLog("qiandao") == 0) {//获取玩家签到状态
                cm.setBossLog('qiandao');//设置签到次数
                cm.sendOk("恭喜签到成功！");
				cm.喇叭(1, "[" + cm.getPlayer().getName() + "]领取了每日工资3000点卷+签到证明~");
                cm.gainItem(4001266, 1);
				cm.gainNX(+0);
                cm.dispose();
            } else {
                cm.sendOk("今日以签到。");
                cm.dispose()
            }

    } else if (selection == 3) {
        cm.openNpc(9010009, 0);

    } else if (selection == 4) {
        cm.openNpc(9900004, 1114);

    } else if (selection == 5) {
        cm.openNpc(9900004, 1112);

    } else if (selection == 6) {
        cm.openNpc(9900004, 1113);
    }
}
}
