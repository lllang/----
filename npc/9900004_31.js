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
            text += "                #b冒 险 岛 赞 助 每 日 礼 包#k\r\n\r\n"
            text += " #z4031179# x 2，#z4001017# x 1，#z1122017#(3小时)，#z4310158#x1，冒险币2000W，点券x6000，抵用券x6000\r\n\r\n"
            text += "  - 领取要求，累计赞助 #r300R#k 才有资格领取。\r\n\r\n"
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (cm.getPlayer().getBossLog("累计赞助积分", 1) < 300) {//获取玩家签到状态
                cm.sendOk("累计消费不足 300R，无法领取。");
                cm.dispose();
            } else if (cm.getBossLog("赞助礼包_每日") == 0) {//获取玩家签到状态
                cm.gainItem(4031179, 2);//D
                cm.gainItem(4001017, 1);//火眼
                cm.gainItem(1122017, 1, 3, true);//精灵吊坠
                cm.gainItem(4310158, 1);//必成币
                cm.gainMeso(20000000);
                cm.gainNX(6000);
                cm.gainDY(6000);
                cm.setBossLog("赞助礼包_每日");
                cm.喇叭(1, "[赞助每日礼包]：" + cm.getPlayer().getName() + "，今日已成功领取，获得丰厚道具！");
                cm.dispose();
            } else {
                cm.sendOk("您今日已签到过了！");
                cm.dispose();
            }
        }
    }
}
