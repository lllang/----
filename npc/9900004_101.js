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
    /*cm.getPlayer().setBossLog("消费点",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("累计赞助积分",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("当日累计赞助",0,cm.getmoneyb());
    cm.setmoneyb(-cm.getmoneyb());*/
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
            text += "#b这里可以合成极品装备#k\r\n"

            text += "#L0#" + 蓝色角点 + "兑换#i1113037#(#r全属性+66#k),需要#i1112951#,#i1112952##l\r\n";

            text += "#L1#" + 蓝色角点 + "兑换#i1112793#(#r全属性+50#k),需要#i1112444#,#i1112915##l\r\n";

            text += "#L2#" + 蓝色角点 + "兑换#i1113089#(#r全属性+88#k),需要#i1112776#,#i1112764#,#i1112768#,#i1112772##l\r\n";

            text += "#L3#" + 蓝色角点 + "兑换#i1012174#(180级),需要：#i1012174#(150级),#i1012174#(130级),#i1012174#(100级),#i1012174#(90级)#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.haveItem(1112951, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1112952, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1112951, -1);
                    cm.gainItem(1112952, -1);
                    cm.gainItem(1113037, 66, 66, 66, 66, 0, 0, 66, 66, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (cm.haveItem(1112444, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1112915, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1112915, -1);
                    cm.gainItem(1112444, -1);
                    cm.gainItem(1112793, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }

            } else if (selection == 2) {
                if (cm.haveItem(1112776, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1112764, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1112768, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1112772, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1112776, -1);
                    cm.gainItem(1112764, -1);
                    cm.gainItem(1112768, -1);
                    cm.gainItem(1112772, -1);
                    cm.gainItem(1113089, 88, 88, 88, 88, 0, 0, 88, 88, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }

            } else if (selection == 3) {
                if (cm.haveItem(1012170, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1012171, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1012172, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1012173, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1012170, -1);
                    cm.gainItem(1012171, -1);
                    cm.gainItem(1012172, -1);
                    cm.gainItem(1012173, -1);
                    cm.gainItem(1012174, 1);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
            }
        }
    }
}
