var 红色双箭头 = "#fUI/UIWindow.img/Quest/icon9/0#";
var 蓝色双箭头 = "#fUI/UIWindow.img/Quest/icon8/0#";
var 选择道具图标 = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 铅笔图标 = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var H字母 = "#fUI/CashShop/CSEffect/effect/1#";
var 金币图标 = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var 兑换倍率 = "1000";
var 表情高兴 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";
function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b好的,下次再见.");
		cm.dispose();
		return;
		}
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

	if (status == 0) {
   	    var text= "\t\t\t\t"+铅笔图标+" [FFN装备兑换] "+铅笔图标+"\r\n\r\n全属性+100 双攻+288武器\r\n";
		text += "#L1#消耗：#v1142343#*1个 #v4310044#200个兑换全属性+88【#v1142338#】#l\r\n";
		
		text += "#L2#消耗：#v1142343#*1个 #v4310044#700个兑换全属性+120【#v1142398#】#l\r\n";
		
		text += "#L3#消耗：#v4310044#2000个兑换全属性+158【#v1142609#】#l\r\n";
		
		text += "#L4#消耗：#v4310044#4000个兑换全属性+188【#v1142344#】#l\r\n";
		
		//text += "#L5#消耗：#v4031311#666个兑换全属性+20【#v1051487#】#l\r\n";
		
		//text += "#L6#消耗：#v4031311#666个兑换全属性+20【#v1050418#】#l\r\n";

		cm.sendSimple (text);    
	} else if (status == 1) {
		if (selection == 1) { 
			if(cm.haveItem(1142343,1) && cm.haveItem(4310044,200)){
				cm.gainItem(1142343,-1);
				cm.gainItem(4310044,-200);
				cm.gainItem(1142338,88,88,88,88,500,500,88,88,88,88,88,88,88,88);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 2) {
			if(cm.haveItem(1142343,1) && cm.haveItem(4310044,700)){
				cm.gainItem(1142343,-1);
				cm.gainItem(4310044,-700);
				cm.gainItem(1102163,120,120,120,120,500,500,120,120,120,120,120,120,120,120);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 3) {
			if(cm.haveItem(4310044,2000)){
				cm.gainItem(4310044,-2000);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(1142609,158,158,158,158,500,500,158,158,158,158,158,158,158,158);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 4) {
			if(cm.haveItem(4310044,4000)){
				cm.gainItem(4310044,-4000);
				//cm.gainItem(4310143,-99);
				//cm.gainItem(1402214,-1);
				cm.gainItem(1142344,188,188,188,188,500,500,188,188,188,188,188,188,188,188);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 5) { 
			if(cm.haveItem(4031311,666)){
				cm.gainItem(4031311,-666);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(1051487,20,20,20,20,500,500,20,20,0,0,0,0,0,0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 6) {
			if(cm.haveItem(4031311,666)){
				cm.gainItem(4031311,-666);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(1050418,20,20,20,20,500,500,20,20,0,0,0,0,0,0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 7) {
			if(cm.haveItem(1462208,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1462208,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1462193,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 8) {
			if(cm.haveItem(1472230,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1472230,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1472214,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 9) {
			if(cm.haveItem(1482183,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1482183,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1482168,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 10) {
			if(cm.haveItem(1492194,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1492194,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1492179,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();	
		} else if (selection == 11) {
			if(cm.haveItem(1422156,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1422156,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1422140,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 12) {
			if(cm.haveItem(1422156,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1422156,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1312153,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 13) {
			if(cm.haveItem(1422156,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1422156,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1412135,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		}
		
	}
}
}