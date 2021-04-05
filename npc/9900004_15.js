var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 礼包物品 = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
function start() {
    cm.getPlayer().setBossLog("消费点",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("累计赞助积分",1,cm.getmoneyb());
    cm.setmoneyb(-cm.getmoneyb());
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
            // text += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"
            text += "              #e#d《 冒 险 岛 转 职 服 务 》#d#k#n             \r\n"
            text += " #L2#职业转职#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.getPlayer().maxSkills();
            cm.sendOk("技能激活完毕。");
            cm.dispose();

        } else if (selection == 2) {
            cm.openNpc(9900004, 151);

        } else if (selection == 1234567) {
            cm.dispose();
            cm.openWeb("http://www.baidu.com");

        } else if (selection == 910000000) {
            cm.warp(910000000);
            cm.dispose();

        } else if (selection == 9310034) {
            var text = "               ≮ 个 人 信 息 查 询 ≯ \r\n\r\n";
            text += "#d - 当前 #b在线时间#d 累计：#r" + cm.getGamePoints() + "#d 分钟\r\n\r\n";
            text += "#d - 当前 #b点  券#d 余额：#r" + cm.getPlayer().getCSPoints(1) + "#d 点\r\n\r\n";
            text += "#d - 当前 #b抵用券#d 余额：#r" + cm.getPlayer().getCSPoints(2) + "#d 点\r\n\r\n";
            cm.sendOk(text)
            cm.dispose();


        } else if (selection == 3) {
            cm.openNpc(9900004, 9000036);

        } else if (selection == 4) {
            cm.openNpc(9900004, 4);

        } else if (selection == 5) {
            cm.openNpc(9900004, 5);

        } else if (selection == 6) {
            cm.openNpc(9310071, 0);

        } else if (selection == 7) {
            cm.openNpc(9900004, 7);

        } else if (selection == 8) {
            cm.openNpc(9310019, 10);

        } else if (selection == 9) {
            cm.openNpc(9900004, 9);

        } else if (selection == 10) {
            cm.openNpc(9900004, 9000041);

        } else if (selection == 11) {
            cm.openNpc(9900004, 11);

        } else if (selection == 12) {
            cm.openNpc(9900004, 12);

        } else if (selection == 13) {//爆率查询
            cm.openNpc(9900004, 13);

        } else if (selection == 14) {//快捷传送
            cm.openNpc(9900004, 14);

        } else if (selection == 15) {
            cm.openNpc(9900004, 15);

        } else if (selection == 16) {
            cm.openNpc(9900004, 16);

        } else if (selection == 17) {//杂货商店
            cm.openShop(30);
            cm.dispose();
        } else if (selection == 18) {//低级装备商店
            cm.openShop(39);
            cm.dispose();

        } else if (selection == 19) {
            cm.openNpc(9040004, 0);

        } else if (selection == 788) {
            cm.openNpc(9040004, 1);

        } else if (selection == 789) {
            cm.openNpc(9900004, 1246);

        } else if (selection == 20) {
            cm.openNpc(9900004, 20);

        } else if (selection == 21) {
            cm.openNpc(9900004, 21);

        } else if (selection == 22) {
            cm.openNpc(9900004, 22);

        } else if (selection == 23) {
            cm.openNpc(9900004, 7001);

        } else if (selection == 223) {
            cm.openNpc(9900004, 23);

        } else if (selection == 24) {
            cm.openNpc(9900004, 24);

        } else if (selection == 25) {
            cm.openNpc(9900004, 25);

        } else if (selection == 26) {
            cm.openNpc(9900004, 26);

        } else if (selection == 27) {
            cm.openNpc(9900004, 27);

        } else if (selection == 28) {
            cm.openNpc(9900004, 28);

        } else if (selection == 29) {
            cm.openNpc(9900004, 29);

        } else if (selection == 30) {
            cm.openNpc(9900004);

        } else if (selection == 31) {
            cm.openNpc(9900004, 31);

        } else if (selection == 32) {
            cm.openNpc(9900004, 32);

        } else if (selection == 33) {
            cm.openNpc(9900004, 33);

        } else if (selection == 34) {
            cm.openNpc(9900004, 34);

        } else if (selection == 35) {
            cm.openNpc(9900004, 35);

        } else if (selection == 36) {
            cm.openNpc(9900004, 36);

        } else if (selection == 37) {
            cm.openNpc(9900004, 37);

        } else if (selection == 38) {
            cm.openNpc(9900004, 38);

        } else if (selection == 39) {
            cm.openNpc(9900004, 39);

        } else if (selection == 40) {
            cm.openNpc(9900004, 40);

        } else if (selection == 41) {
            cm.openNpc(9900004, 31);

        } else if (selection == 1000) {//
            cm.openNpc(9310037, 0);

        } else if (selection == 1001) {//
            cm.openNpc(9900004, 1001);

        } else if (selection == 1002) {//
            cm.刷新地图();
            cm.dispose();
        } else if (selection == 1003) {//
            cm.刷新状态();
            cm.dispose();
        } else if (selection == 1004) {//
            cm.gainItem(5211047, 1, 1);//高质地喇叭
            cm.dispose();
        } else if (selection == 1005) {//
            cm.openNpc(9900004, 901);
        } else if (selection == 1006) {//
            cm.重载爆率();
            cm.dispose();
        } else if (selection == 1007) {//
            cm.重载反应堆();
            cm.dispose();
        } else if (selection == 1008) {//
            cm.重载传送点();
            cm.dispose();
        } else if (selection == 1009) {//
            cm.openNpc(9330045, 0);

        } else if (selection == 1010) {//
            cm.重载商店();
            cm.dispose();
        } else if (selection == 1011) {//
            cm.进入商城2();
            cm.dispose();

        } else if (selection == 7003) {
            cm.openNpc(9900004, 7003);

        } else if (selection == 7004) {
            cm.openNpc(9310085, 0);
        }
    }
}
