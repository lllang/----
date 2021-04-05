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
    cm.getPlayer().setBossLog("消费点", 1, cm.getmoneyb());
    /*cm.getPlayer().setBossLog("累计赞助积分",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("当日累计赞助",0,cm.getmoneyb());*/
    cm.setmoneyb(-cm.getmoneyb());
    // cm.clearSkills();
    //cm.怪物攻城();
    //cm.获取礼包等级()
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
            text += "#e欢迎来到#r充值用户，当前积分：" + cm.getPlayer().getAccountLog("累计赞助积分", 1) + "\r\n"
            text += " #k挑战地图#n#b\r\n";

            text += "  #L0#【传说冒险家】武林-妖僧  >>       #r进入练功房#b#l\r\n";
            text += "  #L1#【人气玩家】熊与-狮子  >>         #r进入练功房#b#l\r\n";
            text += "  #L2#【形象大使】扎昆-闹钟  >>         #r进入练功房#b#l\r\n";
            text += "  #L3#【超级巨星】鱼王-黑龙  >>         #r进入练功房#b#l\r\n";
            text += "  #L4#【非凡大师】蝙蝠魔  >>            #r进入练功房#b#l\r\n";
            text += "  #L5#【最强王者】时间品克缤  >>        #r进入练功房#b#l\r\n";
            text += "  #L6#【认证男神】猎魔人-血焰将军  >>   #r进入练功房#b#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 300) {
                    cm.sendOk("需要 300 积分。");
                    cm.dispose();
                } else {
                    cm.warp(209000001, 0);
                    cm.dispose();
                }
            } else if (selection == 1) {
                if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 1000) {
                    cm.sendOk("需要 1000 积分。");
                    cm.dispose();
                } else {
                    cm.warp(209000003, 0);
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 2000) {
                    cm.sendOk("需要 2000 积分。");
                    cm.dispose();
                } else {
                    cm.warp(209000004, 0);
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 3000) {
                    cm.sendOk("需要 3000 积分。");
                    cm.dispose();
                } else {
                    cm.warp(209000005, 0);
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 4000) {
                    cm.sendOk("需要 4000 积分。");
                    cm.dispose();
                } else {
                    cm.warp(209000006, 0);
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 5000) {
                    cm.sendOk("需要 5000 积分。");
                    cm.dispose();
                } else {
                    cm.warp(209000007, 0);
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 10000) {
                    cm.sendOk("需要 10000 积分。");
                    cm.dispose();
                } else {
                    cm.warp(209000008, 0);
                    cm.dispose();
                }
            }
        }
    }
}
