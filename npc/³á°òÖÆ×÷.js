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
   	    var text= "\t\t\t\t"+表情高兴+" [翅膀制作系统] "+表情高兴+"\r\n\r\n升级越高属性越高\r\n";
		text += "#L1#消耗：#v4310079#20个+#v4000464#20个兑换#v1102779#黄金之光+5#l\r\n";
		
		text += "#L2#消耗：#v4310079#80个+#v4000464#80个兑换#v1102630#浪漫天使+10#l\r\n";
		
		text += "#L3#消耗：#v4310079#180个+#v4000464#180个兑换#v1102798#海蓝之翼+15#l\r\n";

        text += "#L4#消耗：#v4310079#300个+#v4000464#300个兑换#v1102723#光明天使+25#l\r\n";
		
		

		cm.sendSimple (text);    
	} else if (status == 1) {
		if (selection == 1) { 
			if(cm.haveItem(4310079,20) && cm.haveItem(4000464,20) ){
				cm.gainItem(4310079,-20);
				cm.gainItem(4000464,-20);
				cm.gainItem(1102779, 5, 5, 5, 5, 200, 200, 5, 5, 5, 5, 5, 5, 0, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 2) {
			if(cm.haveItem(4310079,80) && cm.haveItem(4000464,80) ){
				cm.gainItem(4310079,-80);
				cm.gainItem(4000464,-80);
				cm.gainItem(1102630, 10, 10, 10, 10, 200, 200, 10, 10, 10, 10, 10, 10, 0, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 3) {
			if(cm.haveItem(4310079,180) && cm.haveItem(4000464,180) ){
				cm.gainItem(4310079,-180);
				cm.gainItem(4000464,-180);
				cm.gainItem(1102798, 15, 15, 15, 15, 200, 200, 15, 15, 15, 15, 15, 15, 0, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 4) {
			if(cm.haveItem(4310079,300) && cm.haveItem(4000464,300) ){
				cm.gainItem(4310079,-300);
				cm.gainItem(4000464,-300);
				cm.gainItem(1102723, 25, 25, 25, 25, 200, 200, 25, 25, 25, 25, 25, 25, 0, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 5) { 
			if(cm.haveItem(1112450,1) && cm.haveItem(4000001,200) ){
				cm.gainItem(1112450,-1);
				cm.gainItem(4000001,-200);
				cm.gainItem(1112451, 5, 5, 5, 5, 500, 500, 5, 5, 4, 4, 4, 4, 4, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 6) {
			if(cm.haveItem(1112451,1) && cm.haveItem(4000012,200) ){
				cm.gainItem(1112451,-1);
				cm.gainItem(4000012,-200);
				cm.gainItem(1112452, 6, 6, 6, 6, 600, 600, 6, 6, 5, 5, 5, 5, 5, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 7) {
			if(cm.haveItem(1112452,1) && cm.haveItem(4000204,200) ){
				cm.gainItem(1112452,-1);
				cm.gainItem(4000204,-200);
				cm.gainItem(1112453, 7, 7, 7, 7, 700, 700, 7, 7, 6, 6, 6, 6, 6, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 8) {
			if(cm.haveItem(1112453,1) && cm.haveItem(4000029,200) && cm.haveItem(4031227,1) ){
				cm.gainItem(1112453,-1);
				cm.gainItem(4000029,-200);
				cm.gainItem(4031227,-1);
				cm.gainItem(1112454, 8, 8, 8, 8, 800, 800, 8, 8, 7, 7, 7, 7, 7, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 9) {
			if(cm.haveItem(1112454,1) && cm.haveItem(4000026,200) && cm.haveItem(4000136,20) ){
				cm.gainItem(1112454,-1);
				cm.gainItem(4000026,-200);
				cm.gainItem(4000136,-20);
				cm.gainItem(1112455, 10, 10, 10, 10, 800, 800, 10, 10, 10, 10, 10, 10, 10, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 10) {
			if(cm.haveItem(1112455,1) && cm.haveItem(4000014,200) && cm.haveItem(4000045,30) ){
				cm.gainItem(1112455,-1);
				cm.gainItem(4000014,-200);
				cm.gainItem(4000045,-30);
				cm.gainItem(1112456, 12, 12, 12, 12, 800, 800, 12, 12, 12, 12, 12, 12, 12, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();	
		} else if (selection == 11) {
			if(cm.haveItem(1112456,1) && cm.haveItem(4000002,200) && cm.haveItem(4000017,50) ){
				cm.gainItem(1112456,-1);
				cm.gainItem(4000002,-200);
				cm.gainItem(4000017,-50);
				cm.gainItem(1112457, 14, 14, 14, 14, 800, 800, 14, 14, 14, 14, 14, 14, 14, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 12) {
			if(cm.haveItem(1112457,1) && cm.haveItem(4000286,200) && cm.haveItem(4002003,10) ){
				cm.gainItem(1112457,-1);
				cm.gainItem(4000286,-200);
				cm.gainItem(4002003,-10);
				cm.gainItem(1112458, 16, 16, 16, 16, 800, 800, 16, 16, 16, 16, 16, 16, 16, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 13) {
			if(cm.haveItem(1112458,1) && cm.haveItem(4000021,400) && cm.haveItem(4001084,1) ){
				cm.gainItem(1112458,-1);
				cm.gainItem(4000021,-400);
				cm.gainItem(4001084,-1);
				cm.gainItem(1112459, 18, 18, 18, 18, 800, 800, 18, 18, 18, 18, 18, 18, 18, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 14) {
			if(cm.haveItem(1112459,1) && cm.haveItem(4031794,100) && cm.haveItem(4001085,1) ){
				cm.gainItem(1112459,-1);
				cm.gainItem(4031794,-100);
				cm.gainItem(4001085,-1);
				cm.gainItem(1112460, 20, 20, 20, 20, 1000, 1000, 20, 20, 20, 20, 20, 20, 20, 0);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		} else if (selection == 15) {
			if(cm.haveItem(3603300,1) ){
				cm.gainItem(3603300,-1);
				cm.gainItem(1472214,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();	
		} else if (selection == 16) {
			if(cm.haveItem(3603300,1) ){
				cm.gainItem(3603300,-1);
				cm.gainItem(1482168,1);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足~!");
			}
			cm.dispose();
		}
		
	}
}
}