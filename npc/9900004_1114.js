/* global cm */

var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 道具1 = 4031335
var 道具2 = 4031334
var 道具3 = 4031333
var 道具4 = 4031332
var 道具5 = 4031331
function start() {
    if (cm.getPlayer().getBossLog("等级奖励_5", 1) > 0) {
        cm.sendOk("全部奖励以领取完毕。");
        cm.dispose();
    } else {
        status = -1;
        action(1, 0, 0);
    }
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "              #e#d《 冒 险 岛 等 级 奖 励 》#d#k#n             \r\n\r\n"

            if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getBossLog("等级奖励_1", 1) == false) {
                text += "#r#L1#领取条件已达成，可领取奖励！#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getBossLog("等级奖励_1", 1) == true) {
                text += ""
            } else {
                text += "  #b等级未达到 #r30#b 级，无法领取奖励。\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getBossLog("等级奖励_2", 1) == false) {
                text += "#r#L2#领取条件已达成，可领取奖励！#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 70 && cm.getPlayer().getBossLog("等级奖励_2", 1) == true) {
                text += ""
            } else {
                text += "  #b等级未达到 #r70#b 级，无法领取奖励。\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getBossLog("等级奖励_3", 1) == false) {
                text += "#r#L3#领取条件已达成，可领取奖励！#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 120 && cm.getPlayer().getBossLog("等级奖励_3", 1) == true) {
                text += ""
            } else {
                text += "  #b等级未达到 #r120#b 级，无法领取奖励。\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getBossLog("等级奖励_4", 1) == false) {
                text += "#r#L4#领取条件已达成，可领取奖励！#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 200 && cm.getPlayer().getBossLog("等级奖励_4", 1) == true) {
                text += ""
            } else {
                text += "  #b等级未达到 #r200#b 级，无法领取奖励。\r\n\r\n"
            }

            if (cm.getPlayer().getLevel() >= 250 && cm.getPlayer().getBossLog("等级奖励_5", 1) == false) {
                text += "#r#L5#领取条件已达成，可领取奖励！#l\r\n\r\n"
            } else if (cm.getPlayer().getLevel() >= 250 && cm.getPlayer().getBossLog("等级奖励_5", 1) == true) {
                text += ""
            } else {
                text += "  #b等级未达到 #r250#b 级，无法领取奖励。\r\n\r\n"
            }
            cm.sendSimple(text);


        } else if (selection == 1) {
            cm.gainItem(2000004, 100);//100个特殊药水
            cm.gainNX(50000)//点券5万
            cm.getPlayer().setBossLog("等级奖励_1", 1, 1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到30级，领取了100个特殊药水，点券5万点");
            cm.dispose();
        } else if (selection == 2) {
            cm.gainItem(2000005, 200);//200个超级药水
            cm.gainItem(2022070, 1);//管理者的祝福1个
            cm.gainDY(80000)//抵用80000点
            cm.getPlayer().setBossLog("等级奖励_2", 1, 1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到70级，领取了200个超级药水，祝福增益1个，抵用80000点");
            cm.dispose();
        } else if (selection == 3) {
            cm.gainItem(1122017, 1);//精灵吊坠
            cm.gainItem(4001126, 2000);//2000个枫叶
            cm.gainMeso(+5000000);//金币 1000万
            cm.getPlayer().setBossLog("等级奖励_3", 1, 1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到120级，精灵吊坠1个，500个枫叶，金币500万");
            cm.dispose();
        } else if (selection == 4) {
            cm.gainItem(4002001, 20);//蓝蜗牛邮票20张
            cm.gainItem(4002000, 20);//蜗牛邮票20张
            cm.gainItem(4031456, 150);//枫叶珠150个
            cm.gainNX(100000)//点券10万
            cm.getPlayer().setBossLog("等级奖励_4", 1, 1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到200级，领取了蓝蜗牛邮票1张，皇家理发1张，射手村高级整容1张");
            cm.dispose();
        } else if (selection == 5) {
            var selStr = "请选择你所需的道具奖励：k\r\n";
            selStr += "  #L90#选择#v" + 道具1 + "##z" + 道具1 + "##l\r\n";
            selStr += "  #L91#选择#v" + 道具2 + "##z" + 道具2 + "##l\r\n";
            selStr += "  #L92#选择#v" + 道具3 + "##z" + 道具3 + "##l\r\n";
            selStr += "  #L93#选择#v" + 道具4 + "##z" + 道具4 + "##l\r\n";
            selStr += "  #L94#选择#v" + 道具5 + "##z" + 道具5 + "##l\r\n";
            cm.sendSimple(selStr);

        } else if (selection == 90) {
            cm.gainItem(道具1, 1);
            cm.gainItem(4002002, 1);//木妖邮票1张
            cm.gainItem(4000313, 100);//黄金枫叶100个
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//金币
            cm.getPlayer().setBossLog("等级奖励_5", 1, 1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到250级，领取了木妖邮票1张，黄金枫叶100个");
            cm.dispose();

        } else if (selection == 91) {
            cm.gainItem(道具2, 1);
            cm.gainItem(4002002, 1);//木妖邮票1张
            cm.gainItem(4000313, 100);//黄金枫叶100个
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//金币
            cm.getPlayer().setBossLog("等级奖励_5", 1, 1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到250级，领取了木妖邮票1张，黄金枫叶100个");
            cm.dispose();
        } else if (selection == 92) {
            cm.gainItem(道具3, 1);
            cm.gainItem(4002002, 1);//木妖邮票1张
            cm.gainItem(4000313, 100);//黄金枫叶100个
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//金币
            cm.getPlayer().setBossLog("等级奖励_5", 1, 1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到250级，领取了木妖邮票1张，黄金枫叶100个");
            cm.dispose();
        } else if (selection == 93) {
            cm.gainItem(道具4, 1);
            cm.gainItem(4002002, 1);//木妖邮票1张
            cm.gainItem(4000313, 100);//黄金枫叶100个
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//金币
            cm.getPlayer().setBossLog("等级奖励_5", 1, 1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到250级，领取了木妖邮票1张，黄金枫叶100个");
            cm.dispose();
        } else if (selection == 94) {
            cm.gainItem(道具5, 1);
            cm.gainItem(4002002, 1);//木妖邮票1张
            cm.gainItem(4000313, 100);//黄金枫叶100个
            cm.gainDY(+1000);
            cm.gainMeso(+1000000);//金币
            cm.getPlayer().setBossLog("等级奖励_5", 1, 1);
            cm.即时存档();
            cm.sendOk("领取奖励成功！");
            cm.喇叭(1, "玩家：" + cm.getPlayer().getName() + "，等级达到250级，领取了木妖邮票1张，黄金枫叶100个");
            cm.dispose();

        }
    }
}


