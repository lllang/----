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
            if (cm.getPlayer().getBossLog("当日累计赞助", 0) < 500) {
				cm.sendOk("单笔赞助进不足~!请充值！");
                cm.dispose();
            } else if (cm.getBossLog("当日累计赞助_500礼包") > 0) {
				cm.sendOk("今日已领取。");
                cm.dispose();
            } else if (cm.canHold(1112793,1) == false) {
				cm.sendOk("背包空间不足。");
                cm.dispose();
            } else {
                cm.gainItem(1112793, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
                cm.setBossLog("当日累计赞助_500礼包");
                cm.sendOk("领取成功。");
                cm.dispose();

            }
        }
    }
}
