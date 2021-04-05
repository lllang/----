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


			var textz = "\r\n您好，尊敬的 #b#h ##k,欢迎来到勇者冒险岛#r礼包中心#k，\r\n王者冒险岛火热公测，豪华充值礼包大放送！#l\r\n#b注：以下八种充值礼包，只要充值对应金额即可领取，可兼领礼包不消耗积分，每个角色每个礼包只能领取一次！\r\n祝大家游戏愉快！ \r\n\r\n";

			textz += "当前积分：" + cm.getPlayer().getAccountLog("累计赞助积分", 1) + "\r\n"

			textz += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"

			textz += "#d#L0##r领取300充值积分礼包#k#v4000424#\r\n";

			textz += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"

			textz += "#d#L1#领取1000充值积分礼包#k#v4000423#\r\n";

			textz += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"

			textz += "#d#L2#领取2000充值积分礼包#k#v4031353#\r\n";

			textz += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"

			textz += "#d#L3#领取3000充值积分礼包#k#v4031777#\r\n";

			textz += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"

			textz += "#d#L4#领取4000充值积分礼包#k#v4031983#\r\n";

			textz += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"

			textz += "#d#L5#领取5000充值积分礼包#k#v4031427#\r\n";

			textz += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"

			textz += "#d#L6#领取10000充值积分礼包#k#v5680053#\r\n";

			textz += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"

			textz += "#d#L7#领取15000充值积分礼包#k#v5680053#\r\n";

			textz += "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"

			cm.sendSimple(textz);


		} else if (status == 1) {

			if (selection == 0) {

				if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 300) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("300礼包", 1) == 0) {
					cm.gainItem(1142005, 20, 20, 20, 20, 0, 0, 20, 20, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1102039, 20, 20, 20, 20, 0, 0, 20, 20, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("300礼包", 1, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.喇叭(3, "【积分礼包】[" + cm.getName() + "]300元充值礼包领取成功！");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();





			} else if (selection == 1) {
				if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 1000) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("1000礼包", 1) == 0) {
					cm.gainItem(1142716, 40, 40, 40, 40, 0, 0, 40, 40, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1032024, 20, 20, 20, 20, 0, 0, 20, 20, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("1000礼包", 1, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.喇叭(3, "【积分礼包】[" + cm.getName() + "]1000元充值礼包领取成功！");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();


			} else if (selection == 2) {
				if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 2000) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("2000礼包", 1) == 0) {
					cm.gainItem(1142211, 60, 60, 60, 60, 0, 0, 60, 60, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1022079, 30, 30, 30, 30, 0, 0, 30, 30, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("2000礼包", 1, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.喇叭(3, "【积分礼包】[" + cm.getName() + "]2000元充值礼包领取成功！");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();

			} else if (selection == 3) {
				if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 3000) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("3000礼包", 1) == 0) {
					cm.gainItem(1142298, 80, 80, 80, 80, 0, 0, 80, 80, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1082102, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("3000礼包", 1, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.喇叭(3, "【积分礼包】[" + cm.getName() + "]3000元充值礼包领取成功！");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();


			} else if (selection == 4) {
				if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 4000) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("4000礼包", 1) == 0) {
					cm.gainItem(1142594, 100, 100, 100, 100, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1072153, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("4000礼包", 1, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.喇叭(3, "【积分礼包】[" + cm.getName() + "]4000元充值礼包领取成功！");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();


			} else if (selection == 5) {
				if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 5000) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("5000礼包", 1) == 0) {
					cm.gainItem(1142742, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1002186, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1102039, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1032024, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1022079, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1082102, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.gainItem(1072153, 200, 200, 200, 200, 0, 0, 200, 200, 0, 0, 0, 0, 0, 0);
					cm.getPlayer().setAccountLog("5000礼包", 1, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.喇叭(3, "【积分礼包】[" + cm.getName() + "]5000元充值礼包领取成功！");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();

			} else if (selection == 6) {
				if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 10000) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("10000礼包", 1) == 0) {
					cm.gainItem(1142796, 500, 500, 500, 500, 100, 100, 500, 500, 50,50, 50, 50, 0, 0);
					cm.gainItem(1902024, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 200, 200, 100, 50);
					cm.gainItem(1912017, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000, 200, 200, 100, 50);
					cm.gainItem(3015304, 1);
					cm.getPlayer().setAccountLog("10000礼包", 1, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.喇叭(3, "【积分礼包】[" + cm.getName() + "]10000元充值礼包领取成功！");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();
			} else if (selection == 7) {
				if (cm.getPlayer().getAccountLog("累计赞助积分", 1) < 15000) {//蓝色礼物盒
					cm.sendOk("抱歉，您尚未充值，或者充值积分不足~.");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("15000礼包", 1) == 0) {
					cm.gainItem(1142696, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 1200, 120, 120, 20, 10);
					cm.getPlayer().setAccountLog("15000礼包", 1, 1);
					cm.sendOk("恭喜你，你获得了充值大礼包! .");
					cm.喇叭(3, "【积分礼包】[" + cm.getName() + "]15000元充值礼包领取成功！");
					cm.dispose();
				} else
					cm.sendOk("抱歉，您尚未充值，或者已经领取了该档礼包~.");
				cm.dispose();
			}
		}
	}
}
