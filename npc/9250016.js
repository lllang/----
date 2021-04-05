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
            text += "#b欢迎来到"+cm.ms()+"跳跳副本~#k\r\n"

            text += "#L0#" + 蓝色角点 + "向高地[共#b4#k关] - 奖励：#v2022428# #r<1>#k - 已跳次数：#r["+cm.getPlayer().getAccountLog("高地跳跳",0)+"]#k#l\r\n";//109040000

            text += "#L1#" + 蓝色角点 + "忍  苦[共#b3#k关] - 奖励：#v2022428# #r<1>#k - 已跳次数：#r["+cm.getPlayer().getAccountLog("忍苦跳跳",0)+"]#k#l\r\n";//101000100	
			
			text += "#L2#" + 蓝色角点 + "射手村[共#b1#k关] - 奖励：#v2022428# #r<1>#k - 已跳次数：#r["+cm.getPlayer().getAccountLog("射手跳跳",0)+"]#k#l\r\n";//100000202
			
			text += "#L3#" + 蓝色角点 + "玩具城[共#b1#k关] - 奖励：#v2022428# #r<1>#k - 已跳次数：#r["+cm.getPlayer().getAccountLog("玩具跳跳",0)+"]#k#l\r\n";//220000006
			
			text += "#L4#" + 蓝色角点 + "扎火山[共#b2#k关] - 奖励：#v2022428# #r<1>#k - 已跳次数：#r["+cm.getPlayer().getAccountLog("火山跳跳",0)+"]#k#l\r\n";//280020000	
			
			text += "\t#r#e#L5#" + 蓝色角点 + "每个完成一次可领取奖励：#v2614000# #r<10>#k #v2022428# #r<5>#k#l\r\n";//280020000	

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getPlayer().getAccountLog("高地跳跳",0) >= 2 ) {//9000002
                    cm.sendOk("今天已经参与过2次了。无法再前往了");
                    cm.dispose();
                } else {
					cm.warp(109040000);
                    cm.dispose();
                }

            } else if (selection == 1) {
				if (cm.getPlayer().getAccountLog("忍苦跳跳",0) >= 2 ) {//1043001
                    cm.sendOk("今天已经参与过2次了。无法再前往了");
                    cm.dispose();
                } else {
					cm.warp(101000102);
					cm.sendOk("加油");
					cm.dispose();
				}

            } else if (selection == 2) {
				if (cm.getPlayer().getAccountLog("射手跳跳",0) > 1){//1012007
					cm.sendOk("一天只能完成一次，你离开吧");
					cm.dispose();
				} else {
					cm.warp(100000202);
					cm.sendOk("加油");
					cm.dispose();
				}

            } else if (selection == 3) {//2040033
				if (cm.getPlayer().getAccountLog("玩具跳跳",0) > 5){//1012007
						cm.sendOk("一天只能完成一次，你离开吧");
						cm.dispose();
					} else {
					cm.warp(220000006);
					cm.sendOk("加油");
					cm.dispose();
					}
				
			} else if (selection == 4) {//2032003
				if (cm.getPlayer().getAccountLog("火山跳跳",0) > 1){//1012007
						cm.sendOk("一天只能完成一次，你离开吧");
						cm.dispose();
				}else{
				cm.warp(280020000);
				cm.sendOk("加油");
				cm.dispose();
				}
				
			} else if (selection == 5) {//2032003
				if (cm.getPlayer().getAccountLog("火山跳跳",0) < 1){//1012007
					cm.sendOk("火山跳跳未完成");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("忍苦跳跳",0) < 1){//1012007
					cm.sendOk("忍苦跳跳未完成");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("玩具跳跳",0) < 1){//1012007
					cm.sendOk("玩具跳跳未完成");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("射手跳跳",0) < 1){//1012007
					cm.sendOk("射手跳跳未完成");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("高地跳跳",0) < 1){//1012007
					cm.sendOk("高地跳跳未完成");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("每日跳跳奖励",0) != 0){//1012007
					cm.sendOk("今天领取过了。");
					cm.dispose();
				}else{					
				    cm.gainItem(2022428,5);
					cm.gainItem(2614000,10);
					cm.gainItem(4001126,2000);
					cm.getPlayer().setAccountLog("每日跳跳奖励",0);
					cm.喇叭(1,"玩家"+cm.getName()+"成功完成了所有跳跳副本领取了2000枫叶超值奖励！");
					cm.sendOk("领取完成");
					cm.dispose();
				}
            }
        }
    }
}

