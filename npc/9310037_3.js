//importPackage(net.sf.odinms.client);
var status = 0;
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 礼包物品 = "#v1302000#";
var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";


function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;


		if (status == 0) {


			var textz = "\r\n您好，尊敬的 #b#h ##k,欢迎来到怀念冒险岛#r礼包中心#k\r\n\r\n";

			textz += "#e#r今日累计赞助：" + cm.getPlayer().getBossLog("当日累计赞助", 1) + "#n#d\r\n";
			
			textz += "#L0#今日累计充值28元：#v5211060#（1天权）#v4031138#x5000W\r\n";
			
			textz += "#L1#今日累计充值68元：#v2049345#*1#v4031138#x1亿\r\n";
			
			textz += "#L2#今日累计充值128元: #v2460003#*2#v4031138#x2亿#v2531006#*1\r\n";

			textz += "#L3#今日累计充值8888元: #v2022550##r（毕业武器自选）\r\n";

			

			cm.sendSimple(textz);


		} else if (status == 1) {
                if (selection == 0) {
				if (cm.getPlayer().getBossLog("当日累计赞助", 1) < 28) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				}else if(cm.getInventory(2).isFull(0)||cm.getMeso() > 2000000000){
					cm.sendOk("背包不足,或者钱已满21E！");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("每日礼包_1", 0) == 0) {
					cm.gainItem(5211060,1,1);
					cm.gainMeso(+50000000); //加减金币
					cm.getPlayer().setBossLog("每日礼包_1", 0, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();


			} else if (selection == 1) {
				if (cm.getPlayer().getBossLog("当日累计赞助", 1) < 68) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				}else if(cm.getInventory(2).isFull(0)||cm.getMeso() > 2000000000){
					cm.sendOk("背包不足,或者钱已满21E！");
					cm.dispose();
				} else if (cm.getPlayer().getBossLog("每日礼包_2", 0) == 0) {
					cm.gainItem(2049345,1);
					cm.gainMeso(+100000000); //加减金币
					cm.getPlayer().setBossLog("每日礼包_2", 0, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();

			}else if (selection == 2) {
                if (cm.getPlayer().getBossLog("当日累计赞助", 1) < 128) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				}else if(cm.getInventory(2).isFull(0)||cm.getMeso() > 1900000000){
					cm.sendOk("背包不足,或者钱已满21E！");
					cm.dispose();
				}else if (cm.getPlayer().getBossLog("每日礼包_3", 0) == 0) {
					cm.gainItem(2531006,1);
					cm.gainItem(2460003,2);
					cm.gainMeso(+200000000); //加减金币
					cm.getPlayer().setBossLog("每日礼包_3", 0, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();

			}  else if (selection == 3) {
				if (cm.getPlayer().getBossLog("当日累计赞助", 1) < 8888) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				}else if(cm.getInventory(2).isFull(0)){
					cm.sendOk("背包不足！");
					cm.dispose();
				}else if (cm.getPlayer().getBossLog("每日礼包_4", 0) == 0) {
					cm.gainMeso(+1500000000); //加减金币
					cm.gainItem(2022550,1);
					cm.getPlayer().setBossLog("每日礼包_4", 0, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();


			}   
		}
	}
}
