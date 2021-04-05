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

//道具修改在这。
var vip1 = 1000;
var vip2 = 2000;
var vip3 = 3000;
var vip4 = 4000;
var svip = 40000463;

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
            text += "#b欢迎来到"+cm.ms()+"等级奖励#k\r\n\r\n"

            text += "#L1#" + 蓝色角点 + "领取10级奖励#l\r\n";

            text += "#L2#" + 蓝色角点 + "领取30级奖励#l\r\n";
			
			text += "#L3#" + 蓝色角点 + "领取50级奖励#l\r\n";
			
			text += "#L4#" + 蓝色角点 + "领取70级奖励#l\r\n";
			
			text += "#L5#" + 蓝色角点 + "领取100级奖励#l\r\n";
			
			text += "#L6#" + 蓝色角点 + "领取120级奖励#l\r\n";
			
			text += "#L7#" + 蓝色角点 + "领取150级奖励#l\r\n";
			
			text += "#L8#" + 蓝色角点 + "领取180级奖励#l\r\n";
			
			text += "#L9#" + 蓝色角点 + "领取200级奖励#l\r\n";
			
			text += "#L10#" + 蓝色角点 + "领取230级奖励#l\r\n";
			
			text += "#L11#" + 蓝色角点 + "领取250级奖励#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 1) {
				if (cm.getPlayer().getLevel() < 10 ){//此处修改等级
					cm.sendOk("等级暂未达到10级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 1 ) {//修改<后的数字，1为#L1#
                    //cm.gainItem(5570000,1);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(100000);//1改为任意数值这是给金币
					cm.gainNX(1000);//1改为任意数值这是给点券
					cm.gainDY(5000);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级10级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }

            } else if (selection == 2) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 30 ){//此处修改等级
					cm.sendOk("等级暂未达到30级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 2 ) {//修改<后的数字，2为#L2#
                    cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(300000);//1改为任意数值这是给金币
					cm.gainNX(1000);//1改为任意数值这是给点券
					cm.gainDY(0);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级30级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
				
			} else if (selection == 3) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 50 ){//此处修改等级
					cm.sendOk("等级暂未达到50级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 3 ) {//修改<后的数字，2为#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(500000);//1改为任意数值这是给金币
					cm.gainNX(1500);//1改为任意数值这是给点券
					cm.gainDY(0);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级50级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
				
			} else if (selection == 4) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 70 ){//此处修改等级
					cm.sendOk("等级暂未达到70级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 4 ) {//修改<后的数字，2为#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(1000000);//1改为任意数值这是给金币
					cm.gainNX(2000);//1改为任意数值这是给点券
					cm.gainDY(0);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级70级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
				
			} else if (selection == 5) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 100 ){//此处修改等级
					cm.sendOk("等级暂未达到100级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 5 ) {//修改<后的数字，2为#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(2000000);//1改为任意数值这是给金币
					cm.gainNX(2500);//1改为任意数值这是给点券
					cm.gainDY(0);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级100级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
				
			} else if (selection == 6) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 120 ){//此处修改等级
					cm.sendOk("等级暂未达到120级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 6 ) {//修改<后的数字，2为#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(3000000);//1改为任意数值这是给金币
					cm.gainNX(0);//1改为任意数值这是给点券
					cm.gainDY(10000);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级120级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
				
			} else if (selection == 7) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 150 ){//此处修改等级
					cm.sendOk("等级暂未达到150级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 7 ) {//修改<后的数字，2为#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(5000000);//1改为任意数值这是给金币
					cm.gainNX(3000);//1改为任意数值这是给点券
					cm.gainDY(0);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级150级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
				
			} else if (selection == 8) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 180 ){//此处修改等级
					cm.sendOk("等级暂未达到180级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 8 ) {//修改<后的数字，2为#L2#
                    cm.gainItem(4000464,20);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(0);//1改为任意数值这是给金币
					cm.gainNX(4000);//1改为任意数值这是给点券
					cm.gainDY(0);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级180级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
				
			} else if (selection == 9) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 200 ){//此处修改等级
					cm.sendOk("等级暂未达到200级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 9 ) {//修改<后的数字，2为#L2#
                    cm.gainItem(4000464,30);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(0);//1改为任意数值这是给金币
					cm.gainNX(5000);//1改为任意数值这是给点券
					cm.gainDY(0);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级200级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
				
			} else if (selection == 10) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 230 ){//此处修改等级
					cm.sendOk("等级暂未达到230级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 10 ) {//修改<后的数字，2为#L2#
                    cm.gainItem(4000464,50);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(0);//1改为任意数值这是给金币
					cm.gainNX(8000);//1改为任意数值这是给点券
					cm.gainDY(0);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级230级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
				
			} else if (selection == 11) {//SVIP月卡在道具发放在这。
				if (cm.getPlayer().getLevel() < 250 ){//此处修改等级
					cm.sendOk("等级暂未达到250级。");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("等级奖励",1) < 11 ) {//修改<后的数字，2为#L2#
                    cm.gainItem(4000464,80);
					cm.getPlayer().setBossLog("等级奖励",1);
					cm.gainMeso(0);//1改为任意数值这是给金币
					cm.gainNX(10000);//1改为任意数值这是给点券
					cm.gainDY(0);//1改为任意数值这是给抵用券
					cm.sendOk("成功领取等级250级奖励礼包");
                    cm.dispose();
                } else {
                    cm.sendOk("抱歉，你领取过了。");
                    cm.dispose();
                }
            }
        }
    }
}
