/*
  兜兜制作
     更新时间：2018/12/05
                 QQ：540328414
                              */
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 桃花 = "#fMap/MapHelper/weather/rose/4#";
//---------VIP价格设置;
var VIP1 = 200;
var VIP2 = 600;
var VIP3 = 1000;

//---------VIP差价设置;
var cj1 = VIP2 - VIP1;//vip1 ~ vip2;
var cj2 = VIP3 - VIP2;//vip2 ~ vip3;
var cj3 = VIP3 - VIP1;//vip1 ~ vip3;

function start() {
	status = -1;
	action(1, 0, 0);
}
function start() {
	status = -1;

	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}
	else {
		if (status >= 0 && mode == 0) {

			cm.sendOk("感谢你的光临！");
			cm.dispose();
			return;
		}
		if (mode == 1) {
			status++;
		}
		else {
			status--;
		}
		if (status == 0) {

			var selStr = "\r\n";
			selStr += "每日首次充值100元以上，可领取每日首冲礼包：\r\n\r\n";
			selStr += "#v2614001#破功石x1			#v2460005#放大镜x2\r\n\r\n";
			selStr += "#v5440000#冒险币x3E		    #v4310158#必成币x4\r\n\r\n";
			selStr += " - 今日累计赞助："+cm.getPlayer().getBossLog("当日累计赞助",0)+" R\r\n";
			cm.sendSimple(selStr);

		} else if (status == 1) {
			if (cm.getPlayer().getBossLog("当日累计赞助", 0) < 100) {
				cm.sendOk("您的累计消费点不足~!请充值！");
				cm.dispose();
			} else if (cm.getBossLog("当日累计赞助_100礼包") == 0) {
				cm.gainItem(2614001, 1);//
				cm.gainItem(2460005, 2);//
				cm.gainItem(4310158, 4);//
				cm.gainMeso(300000000);
				cm.setBossLog("当日累计赞助_100礼包");
				cm.sendOk("领取成功！");
				cm.dispose();
			} else {
				cm.sendOk("今日礼包已领取。");
				cm.dispose();
			}
		}
	}
}	
