var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }		
			text +="              #e#d《 冒 险 岛 在 线 奖 励 》#d#k#n             \r\n "
			text +=" #d- 当前在线时间：#r"+cm.getGamePoints()+"#d 分钟\r\n "
			//text +="#L1##r领取永久雇佣商人！#v5030001# x1 市场摆摊#l\r\n\r\n"
            if(cm.getGamePoints() >= 60 && cm.getAccountLog("在线奖励_1") == 0){
				text += "#L2##r在线时间已达成，可领取奖励。#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 60 && cm.getAccountLog("在线奖励_1") > 0){
					text += ""
			} else {
				text += "  #b在线时间不足 #r60#b 分钟，无法领取奖励。\r\n\r\n"
			}		
		    if(cm.getGamePoints() >= 120 && cm.getAccountLog("在线奖励_2") == 0){
				text += "#L3##r在线时间已达成，可领取奖励。#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 120 && cm.getAccountLog("在线奖励_2") > 0){
					text += ""
				} else {
					text += "  #b在线时间不足 #r120#b 分钟，无法领取奖励。\r\n\r\n"
			}
			if(cm.getGamePoints() >= 180 && cm.getAccountLog("在线奖励_3") == 0){
				text += "#L4##r在线时间已达成，可领取奖励。#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 180 && cm.getAccountLog("在线奖励_3") > 0){
					text += ""
				} else {
					text += "  #b在线时间不足 #r180#b 分钟，无法领取奖励。\r\n\r\n"
			}
			if(cm.getGamePoints() >= 240 && cm.getAccountLog("在线奖励_4") == 0){
				text += "#L5##r在线时间已达成，可领取奖励。#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 240 && cm.getAccountLog("在线奖励_4") > 0){
					text += ""
				} else {
					text += "  #b在线时间不足 #r240#b 分钟，无法领取奖励。\r\n\r\n"
			}
			if(cm.getGamePoints() >= 360 && cm.getAccountLog("在线奖励_5") == 0){
				text += "#L6##r在线时间已达成，可领取奖励。#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 360 && cm.getAccountLog("在线奖励_5") > 0){
					text += ""
				} else {
					text += "  #b在线时间不足 #r360#b 分钟，无法领取奖励。\r\n\r\n"
			}
			if(cm.getGamePoints() >= 420 && cm.getAccountLog("在线奖励_6") == 0){
				text += "#L7##r在线时间已达成，可领取奖励。#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 420 && cm.getAccountLog("在线奖励_6") > 0){
					text += ""
				} else {
					text += "  #b在线时间不足 #r420#b 分钟，无法领取奖励。\r\n\r\n"
			}
			if(cm.getGamePoints() >= 666 && cm.getAccountLog("在线奖励_7") == 0){
				text += "#L8##r在线时间已达成，可领取奖励。#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 666 && cm.getAccountLog("在线奖励_7") > 0){
					text += ""
				} else {
					text += "  #b在线时间不足 #r666#b 分钟，无法领取奖励。\r\n\r\n"
			}
			if(cm.getGamePoints() >= 999 && cm.getAccountLog("在线奖励_8") == 0){
				text += "#L9##r在线时间已达成，可领取奖励。#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 999 && cm.getAccountLog("在线奖励_8") > 0){
					text += ""
				} else {
					text += "  #b在线时间不足 #r999#b 分钟，无法领取奖励。\r\n\r\n"
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("你已经领取过了。无法重新领取！");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.setAccountLog("")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取永久雇佣商人！");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.gainMeso(+1000000);
			cm.gainNX(+1000);
			cm.setAccountLog("在线奖励_1")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了60分钟在线奖励！");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainNX(+2000);
			cm.gainMeso(+15000000);
			//cm.gainItem(4001126, 50)
			cm.setAccountLog("在线奖励_2")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了120分钟在线奖励！");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainNX(+3000);
			cm.gainMeso(+20000000);
			//cm.gainItem(4001126, 100)
			cm.setAccountLog("在线奖励_3")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了180分钟在线奖励！");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainNX(+4000);
			cm.gainMeso(+25000000);
			cm.setAccountLog("在线奖励_4")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了240分钟在线奖励！");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainNX(+5000);
			cm.gainMeso(+30000000);
			cm.gainItem(2041332, 1);//鱼丸卷
			cm.setAccountLog("在线奖励_5")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了360分钟在线奖励！");
            cm.dispose();

		
		} else if (selection == 7) {
			cm.gainItem(2047954, 1);//鱼丸卷
			cm.gainItem(2533000, 1);//鱼丸卷
			cm.gainNX(+6000);
			cm.setAccountLog("在线奖励_6")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了420分钟在线奖励！");
			cm.dispose();
		} else if (selection == 8) {
			cm.gainItem(2614000, 1);//坡功卷
			cm.gainItem(2613008, 1);//混沌卷
			cm.gainNX(+10000);
			cm.setAccountLog("在线奖励_7")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了666分钟在线奖励！");
			cm.dispose();
		} else if (selection == 9) {
			cm.gainNX(+50000);
			cm.gainMeso(+100000000);
			cm.gainItem(2533000, 3);//祝福卷
			cm.gainItem(2613008, 1);//混沌卷
			cm.gainItem(2041226, 3);//绯红卷
			cm.gainItem(2047954, 3);//鱼丸卷
			cm.gainItem(2531000, 5);//防爆卷
			cm.gainItem(2614000, 3);//坡功卷
			cm.setAccountLog("在线奖励_8")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了999分钟在线奖励！");
			cm.dispose();
		} else if (selection == 10) {
			cm.gainItem(2022428, 1);//混沌卷
			cm.gainItem(4031217, 1);//黄金钥匙			
			cm.setAccountLog("在线奖励_9")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了666分钟在线奖励！");
			cm.dispose();
		} else if (selection == 11) {
			cm.gainItem(4000487, 5);//暗影币
			cm.gainItem(4031794, 20);//混沌卷
			cm.gainItem(2531006, 1);//防爆卷
			cm.gainItem(2450000, 1);//半小时双倍
			cm.gainItem(2047954, 1);//鱼王门票
			cm.setAccountLog("在线奖励_10")
            cm.sendOk("领取奖励成功！");
			cm.喇叭(2,"玩家：["+cm.getName()+"]领取了1000分钟在线奖励！");
            cm.dispose();
		}
    }
}


