var status = -1;
var text;
var 购买返利所需元宝 = 500;
var 每日返利元宝 = 100;
var 购买可领取福利次数 = 7;//天数
var Log = "角色返利_500R";
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        text = "            ★ " + cm.ms() + "返利系统 ★\r\n\r\n";
        text += "1.(说明自己写)\r\n";
        text += "2.(说明自己写)\r\n";
        text += "3.(说明自己写)\r\n";
        if (cm.getPlayer().getBossLog(Log, 1) == 0) {
            text += "#L0#购买返利资格#l\r\n";
            cm.sendSimple(text);
        } else {
            if (cm.getBossLog("领取角色返利") == 0) {
                text += "#L1#领取每日返利#l\r\n";
                cm.sendSimple(text);
            } else {
                text += "#r今日已领取，请明日再来。\r\n";
                cm.sendOk(text);
                cm.dispose();
            }
        }
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) < 购买返利所需元宝) {
                cm.sendOk("购买所需元宝数量不足，请确认。");
                cm.dispose();
            } else {
                cm.getPlayer().setAccountLog("累计赞助积分_暂用", 1, -购买返利所需元宝);
                cm.getPlayer().setBossLog(Log, 1, 购买可领取福利次数);
                cm.sendOk("购买，当前剩余领取次数为#r " + cm.getPlayer().getBossLog(Log, 1) + "#k 次");
                cm.喇叭(1, "[返利系统]：恭喜玩家 “" + cm.getPlayer().getName() + "” 购买了 " + 购买可领取福利次数 + " 天的返利功能，大家恭喜TA~");
                cm.dispose();
            }

        } else if (selection == 1) {
            cm.getPlayer().setAccountLog("累计赞助积分_暂用", 1, 每日返利元宝);
            cm.getPlayer().setBossLog(Log, 1, -1);
            cm.setBossLog("领取角色返利");
            cm.喇叭(1, "[返利系统]：恭喜玩家 “" + cm.getPlayer().getName() + "” 领取了 " + 每日返利元宝 + " 元宝，大家恭喜TA~");
            cm.sendOk("领取成功，当前剩余领取次数为#r " + cm.getPlayer().getBossLog(Log, 1) + "#k 次");
            cm.dispose();
        }
    }
}