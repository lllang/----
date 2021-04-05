var 音符 = "#fEffect/CharacterEff/1022223/4/0#";
var 音符1 = "#fEffect/CharacterEff/1112949/0/0#";
var 音符2 = "#fEffect/CharacterEff/1112949/1/0#";
var 兔子1 = "#fEffect/CharacterEff/1082565/0/0#";
var 兔子2 = "#fEffect/CharacterEff/1082565/2/0#";
var 兔子3 = "#fEffect/CharacterEff/1082565/4/0#";
var 星星1 = "#fEffect/CharacterEff/1051294/0/0#";
var 星星2 = "#fEffect/CharacterEff/1051295/0/0#";
var 星星3 = "#fEffect/CharacterEff/1051296/0/0#";
var 小雪花 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 爱心1 = "#fEffect/CharacterEff/1032063/0/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 铅笔图标 = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var H字母 = "#fUI/CashShop/CSEffect/effect/1#";
var 金币图标 = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var selec;
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
			//text += "\t\t\t\t\t#d#e"+cm.ms()+"#n#k\r\n\r\n"
			//text += "#L2##v4001126##t4001126# 兑换 点卷  #r      比例 1:1#l\r\n";
			text += "#L1##v4001126##t4001126# 300兑换 #r血量#k    比例#r 300:100#k#l\r\n";
			text += "#L0##v4001126##t4001126# 300兑换 #b蓝量#k    比例#r 300:100#k#l\r\n";
			//text += "#L3#点卷 兑换 #v4000463##t4000463#  #r比例 2000:1#k#l\r\n";
			//text += "#L4##v4000463##t4000463# 兑换 点卷  #r比例 1:1900#k#l\r\n";
			//text += "#L5#金币 兑换 #v4310038##t4310038#  #r    比例 5000万:1#k#l\r\n";
			//text += "#L6##v4310038##t4310038# 兑换 金币  #r    比例 1:4900万#k#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendGetNumber("请输入你要兑换的数量:\r\n\r\n#v4001126##t4001126# #b输入1=扣除300枫叶获得100点蓝#k  比例 1:100",0,1,214755885);
				selec = 0;
			} else if (selection == 1) {
				cm.sendGetNumber("请输入你要兑换的数量:\r\n\r\n#v4001126##t4001126# #r输入1=扣除300枫叶获得100点血量#k  比例 1:100",0,1,214755885);
				selec = 1;
			} else if (selection == 2) {
				cm.sendGetNumber("请输入你要兑换的数量:\r\n\r\n#v4001126##t4001126# 兑换 点卷  比例 1:1",0,1,214755885);
				selec = 2;
			} else if (selection == 3) {
				cm.sendGetNumber("请输入你要兑换的数量:\r\n\r\n点卷 兑换 #v4000463##t4000463#  比例 2000:1",0,1,214755885);
				selec = 3;
			} else if (selection == 4) {
				cm.sendGetNumber("请输入你要兑换的数量:\r\n\r\n#v4000463##t4000463# 兑换 点卷  比例 1:1900",0,1,214755885);
				selec = 4;
			} else if (selection == 5) {
				cm.sendGetNumber("请输入你要兑换的数量:\r\n\r\n金币 兑换 #v4310038##t4310038#  比例 5000万:1",0,1,214755885);
				selec = 5;
			} else if (selection == 6) {
				cm.sendGetNumber("请输入你要兑换的数量:\r\n\r\n#v4310038##t4310038# 兑换 金币  比例 1:4900万",0,1,214755885);
				selec = 6;
			}
		} else if (status == 2){
			if(selec == 0){
				if(cm.haveItem(4001126,selection*300)){
					cm.gainItem(4001126,-selection*300);
					cm.getPlayer().getStat().setMaxMp((cm.getPlayer().getStat().getMaxMp() + selection*100));
					cm.刷新状态();
					cm.dispose();
                }else{
					cm.sendOk("材料不足");
					cm.dispose();
				}
			} else if(selec == 1){
				if(cm.haveItem(4001126,selection*300)){
					cm.gainItem(4001126,-selection*300);
					cm.getPlayer().getStat().setMaxHp((cm.getPlayer().getStat().getMaxHp() + selection*100));
					cm.刷新状态();
					cm.dispose();
                }else{
					cm.sendOk("材料不足");
					cm.dispose();
				}
			} else if(selec == 2){
				if(cm.haveItem(4001126,selection*1)){
					cm.gainItem(4001126,-selection*1);
					cm.gainNX(selection*1);
					cm.sendOk("兑换成功~!");
					cm.dispose();
				} else {
					cm.sendOk("输入错误,数量不足~!");
					cm.dispose();
				}
			} else if(selec == 3){
				if(cm.getPlayer().getCSPoints(1) >= 2000*selection){
					cm.gainNX(-selection*2000);
					cm.gainItem(4000463,selection);
					cm.sendOk("兑换成功~!");
					cm.dispose();
				} else {
					cm.sendOk("输入错误,数量不足~!");
					cm.dispose();
				}
			} else if(selec == 4){
				if(cm.haveItem(4000463,selection*1)){
					cm.gainItem(4000463,-selection*1);
					cm.gainNX(selection*1900);
					cm.sendOk("兑换成功~!");
					cm.dispose();
				} else {
					cm.sendOk("输入错误,数量不足~!");
					cm.dispose();
				}
			} else if(selec == 5){
				if(cm.getMeso() >= 50000000*selection){
					cm.gainMeso(-50000000*selection);
					cm.gainItem(4310038,selection*1);
					cm.sendOk("兑换成功~!");
					cm.dispose();
				} else {
					cm.sendOk("输入错误,数量不足~!");
					cm.dispose();
				}
			} else if(selec == 6){
				if(cm.haveItem(4310038,selection*1)){
					cm.gainItem(4310038,-selection*1);
					cm.gainMeso(50000000*selection);
					cm.sendOk("兑换成功~!");
					cm.dispose();
				} else {
					cm.sendOk("输入错误,数量不足~!");
					cm.dispose();
				}
			}
		}
	}
}
