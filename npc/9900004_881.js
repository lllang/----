var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
    Array(3991026, 500, "升级“点状”升级次数。"),//强化升级次数道具
    Array(3991027, 500, "提高血量/蓝量上限。"),//强化升级次数道具
    Array(5150040, 1000, "随机皇家发型/脸型"),//强化升级次数道具
    Array(5150038, 33000, "选择皇家发型/脸型"),//强化升级次数道具
    Array(5570000, 3000, "增加装备强化次数")//强化升级次数道具
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
            text = "    #e为解决满钱后，金币无法存放的问题。\r\n\r\n";
            text += "   此处兑换 #b-金币中介币#v4002001##k - #r冒险币1亿：1兑换。#k\r\n\r\n";
            text += "   当前金币数量：#r" + cm.getMeso() + "#k\r\n";
            text += " #L0##b冒险币兑换#v4002001#：比例 - （#r1亿 = 1#b）#l\r\n";
            text += " #L1##b#v4002001#兑换冒险币：比例 - （#r1 = 1亿#b）#l\r\n";
            cm.sendSimple(text);
        } else if (a == 1) {
            if (selection == 0) {
                text = "使用#b金币中介币互换#k！不知道你想如何兑换呢？#r(兑换前请确保背包有足够空格，因背包满导致兑换失败的，自己负责！)#k\r\n";
                text += " #L0##d#v5200002#1亿 兑换#v4002001##z4002001#1个#l\r\n";
                text += " #L1##d#v5200002#10亿 兑换#v4002001##z4002001#10个#l\r\n";
                cm.sendSimple(text);
            } else {
                text = "使用#b金币中介币互换#k！不知道你想如何兑换呢？#r(兑换前请确定兑换后金币不会超过21亿！！！！！因超过上限导致兑换失败自己负责！)#k\r\n";
                text += " #L2##d#v4002001##z4002001#1个 兑换#v5200002#1亿#l\r\n";
                text += " #L3##d#v4002001##z4002001#10个 兑换#v5200002#10亿#l\r\n";
                cm.sendSimple(text);
            }
        } else if (a == 2) {
            if (selection == 0) {
                if (cm.getMeso() >= 100000000) {
                    cm.gainItem(4002001, 1);
                    cm.gainMeso(-100000000);
                    cm.sendOk("兑换成功。");
					cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】用1亿游戏币兑换了蜗牛邮票。");
                    cm.dispose();
                } else {
                    cm.sendOk("金币不足，无法兑换。");
                    cm.dispose();
                }
            } else if (selection == 1) {
                if (cm.getMeso() >= 1000000000) {
                    cm.gainItem(4002001, 10);
                    cm.gainMeso(-1000000000);
					cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】用10亿游戏币兑换了10张蜗牛邮票。");
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                } else {
                    cm.sendOk("金币不足，无法兑换。");
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.haveItem(4002001, 1)) {
                    cm.gainItem(4002001, -1);
                    cm.gainMeso(100000000);
					cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】使用了1张蜗牛邮票兑换了1个亿。");
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足，无法兑换。");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(4002001, 10)) {
                    cm.gainItem(4002001, -10);
                    cm.gainMeso(1000000000);
					cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】使用了10张蜗牛邮票兑换了10个亿。");
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足，无法兑换。");
                    cm.dispose();
                }
            }
        }
    }
}//mode