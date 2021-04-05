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
   	    var text= "\t\t\t\t"+铅笔图标+" [武器必成卷兑换] "+铅笔图标+"\r\n\r\n10个必成币兑换一张武器攻击必成卷\r\n";
		text += "#L1#消耗：#v4310196#*10个兑换【#v2043003#】#l\r\n";
		
		text += "#L2#消耗：#v4310196#*10个兑换【#v2043103#】#l\r\n";
		
		text += "#L3#消耗：#v4310196#*10个兑换【#v2043203#】#l\r\n";
		
		text += "#L4#消耗：#v4310196#*10个兑换【#v2043303#】#l\r\n";
		
		text += "#L5#消耗：#v4310196#*10个兑换【#v2043703#】#l\r\n";
		
		text += "#L6#消耗：#v4310196#*10个兑换【#v2043803#】#l\r\n";
		
		text += "#L7#消耗：#v4310196#*10个兑换【#v2044003#】#l\r\n";
		
		text += "#L8#消耗：#v4310196#*10个兑换【#v2044103#】#l\r\n";
		
		text += "#L9#消耗：#v4310196#*10个兑换【#v2044203#】#l\r\n";
		
		text += "#L10#消耗：#v4310196#*10个兑换【#v2044303#】#l\r\n";
		
		text += "#L11#消耗：#v4310196#*10个兑换【#v2044403#】#l\r\n";
		
		text += "#L12#消耗：#v4310196#*10个兑换【#v2044503#】#l\r\n";
		
		text += "#L13#消耗：#v4310196#*10个兑换【#v2044603#】#l\r\n";
		
		text += "#L14#消耗：#v4310196#*10个兑换【#v2044703#】#l\r\n";
		
		text += "#L15#消耗：#v4310196#*10个兑换【#v2044815#】#l\r\n";
		
		text += "#L16#消耗：#v4310196#*10个兑换【#v2044908#】#l\r\n";

		cm.sendSimple (text);    
	} else if (status == 1) {
		if (selection == 1) { 
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4310044,-200);
				cm.gainItem(2043003,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 2) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4310044,-700);
				cm.gainItem(2043103,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 3) {
			if(cm.haveItem(4310196,10)){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(2043203,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 4) {
			if(cm.haveItem(4310196,10)){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4310143,-99);
				//cm.gainItem(2044003,-1);
				cm.gainItem(2043303,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 5) { 
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(2043703,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 6) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(2043803,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 7) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044003,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 8) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044103,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 9) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044203,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 10) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044303,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();	
		} else if (selection == 11) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044403,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 12) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044503,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 13) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044603,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 14) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044703,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 15) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044815,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();	
		} else if (selection == 16) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044908,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		}
		
	}
}
}