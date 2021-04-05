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
            text += "#b这里可以兑换强化材料#k\r\n"

            text += "#L0#" + 蓝色角点 + "制作#i4170000#(#r蘑菇蛋2个#k),需要#i4170016#,#i4170002# #i4170005# #i4170004#  #i4170009#  #l\r\n";

            //text += "#L1#" + 蓝色角点 + "兑换#i1112793#(#r全属性+48#k),需要#i1112444#,#i1112915##l\r\n";

            //text += "#L2#" + 蓝色角点 + "兑换#i1113089#(#r全属性+48#k),需要#i1112776#,#i1112764#,#i1112768#,#i1112772##l\r\n";

			//text += "#L3#" + 蓝色角点 + "兑换#i1032219#,需要：#i1032206#,#i1032207#,#i1032208#,#i1032209##l\r\n";

			//text += "#L4#" + 蓝色角点 + "兑换#i1032205#（#r全属性+100#k）需要#i1032219#,#i1032227##l\r\n";

			//text += "#L5#" + 蓝色角点 + "兑换#i1132215#（#r全属性+100#k）需要#i1132211#,#i1132212#,#i1132213#,#i1132214##l\r\n";

			//text += "#L6#" + 蓝色角点 + "兑换#i1132246#（#r全属性+30#k）需要#i1132243#,#i1132244#,#i1132245#,#l\r\n";

			//text += "#L7#" + 蓝色角点 + "兑换#i1122267#（#r全属性+30#k）需要#i1122264#,#i1122265#,#i1122266##l\r\n";

			//text += "#L8#" + 蓝色角点 + "兑换#i1032223#（#r全属性+30#k）需要#i1032220#,#i1032221#,#i1032222##l\r\n";
			
			//text += "#L10#" + 蓝色角点 + "兑换#i1113075#（#r全属性+30#k）需要#i1113074#,#i1113073##i1113072##l\r\n";

			//text += "#L9#" + 蓝色角点 + "兑换#i1012174#（#r全属性+50#k）需要#i1012173#,#i1012172#,#i1012171##i1012170##l\r\n";
			
		

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.haveItem(4170016, 1) == false) {
                    cm.sendOk("所需#i4170016#道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(4170002, 1) == false) {
                    cm.sendOk("所需#i4170002#道具不足。");
                    cm.dispose();
				 } else if (cm.haveItem(4170005, 1) == false) {
                    cm.sendOk("所需#i4170005#道具不足。");
                    cm.dispose();
				 } else if (cm.haveItem(4170004, 1) == false) {
                    cm.sendOk("所需#i4170004#道具不足。");
                    cm.dispose();
				 } else if (cm.haveItem(4170009, 1) == false) {
                    cm.sendOk("所需#i4170009#道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4170016, -1);
                    cm.gainItem(4170002, -1);
					cm.gainItem(4170005, -1);
					cm.gainItem(4170004, -1);
					cm.gainItem(4170009, -1);
                    cm.gainItem(4170000, 2);
                    cm.sendOk("兑换成功。");
					cm.喇叭(2, "恭喜[" + cm.getPlayer().getName() + "]成功兑换了2个蘑菇蛋快去抽奖吧！！");
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
                    cm.gainItem(1112793, 48, 48, 48, 48, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0);
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
                    cm.gainItem(1113089, 48, 48, 48, 48, 0, 0, 48, 48, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }

            } else if (selection == 3) {
                if (cm.haveItem(1032206, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1032207, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1032208, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1032209, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1032206, -1);
                    cm.gainItem(1032207, -1);
                    cm.gainItem(1032208, -1);
                    cm.gainItem(1032209, -1);
                    cm.gainItem(1032219, 1);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(1032219, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1032227, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1032219, -1);
                    cm.gainItem(1032227, -1);
                    cm.gainItem(1032205, 100, 100, 100, 100, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
            } else if (selection == 5) {
                if (cm.haveItem(1132211, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1132212, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1132213, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1132214, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1132211, -1);
                    cm.gainItem(1132212, -1);
                    cm.gainItem(1132213, -1);
                    cm.gainItem(1132214, -1);
                    cm.gainItem(1132215, 100,100,100,100,0,0,100,100,0,0,0,0,0,0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
            } else if (selection == 6) {
                if (cm.haveItem(1132243, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1132244, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1132245, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1132243, -1);
                    cm.gainItem(1132244, -1);
                    cm.gainItem(1132245, -1);
                    cm.gainItem(1132246, 30,30,30,30,0,0,30,30,0,0,0,0,0,0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
            } else if (selection == 7) {
                if (cm.haveItem(1122264, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1122265, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1122266, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1122264, -1);
                    cm.gainItem(1122265, -1);
                    cm.gainItem(1122266, -1);
                    cm.gainItem(1122267, 30,30,30,30,0,0,30,30,0,0,0,0,0,0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
            } else if (selection == 8) {
                if (cm.haveItem(1032220, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1032221, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1032222, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1032220, -1);
                    cm.gainItem(1032221, -1);
                    cm.gainItem(1032222, -1);
                    cm.gainItem(1032223, 30,30,30,30,0,0,30,30,0,0,0,0,0,0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
            } else if (selection == 9) {
                if (cm.haveItem(1012173, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1012172, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1012171, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1012173, -1);
                    cm.gainItem(1012172, -1);
                    cm.gainItem(1012171, -1);
                    cm.gainItem(1012174, 50,50,50,50,0,0,50,50,0,0,0,0,0,0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
			} else if (selection == 10) {
                if (cm.haveItem(1113074, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1113073, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else if (cm.haveItem(1113072, 1) == false) {
                    cm.sendOk("所需道具不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(1113074, -1);
                    cm.gainItem(1113073, -1);
                    cm.gainItem(1113072, -1);
                    cm.gainItem(1113075, 30,30,30,30,0,0,30,30,0,0,0,0,0,0);
                    cm.sendOk("兑换成功。");
                    cm.dispose();
                }
            }
        }
    }
}
