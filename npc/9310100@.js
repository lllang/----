var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var head = "#fUI/UIWindow2.cmg/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.cmg/QuestAlarm/BtQ/normal/0#";
var chance = Math.floor(Math.random() * 9 + 1);
var startIcon = "#fUI/UIWindow2.cmg/Quest/quest_info/summary_icon/startcondition#\r\n";
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var 道具 = 4031179;
var 道具1 = 4031179;
var 道具2 = 4031179;
var 比例 = 100000;
var 比例1 = 500000;
var 比例2 = 1000000;
var I

function start() {
	if (cm.getPlayer().getLimitBreak() < 199999) {
		cm.getPlayer().setLimitBreak(199999);
		cm.dispose();
	} else {
		a = -1;
		action(1, 0, 0);
	}
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
		if (a == -1) {
			cm.dispose();
		} else if (a == 0) {
			var text = "#e#r这里破功NPC！.\r\n\r\n";	
			text += "#L0#使用#v2614000#提高破功上限[1万-599万]#l\r\n\r\n";//3
			text += "#L1#使用#v2614000#提高破功上限[599万以上使用]#l\r\n\r\n";
			cm.sendSimple(text);

		} else if (a == 1) {
			if (selection == 0) {
				if (cm.haveItem(2614000, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.getPlayer().getLimitBreak() >= 5999999){
					cm.sendOk("此功能仅限599万以下可以使用");
					cm.dispose();
				} else {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 10000);
					cm.gainItem(2614000, -1);
					cm.worldMessage(6, "【破功系统】：恭喜玩家 "+cm.getPlayer().getName()+" 破功至 "+cm.getPlayer().getLimitBreak()+"");
					cm.sendOk("增加破功上限成功。")
					cm.dispose();
				}

			} else if (selection == 1) {
				if (cm.haveItem(2614001, 1) == false) {
					cm.sendOk("道具不足");
					cm.dispose();
				} else if (cm.getPlayer().getLimitBreak() < 5999999){
					cm.sendOk("此功能仅限599万以上可以使用");
					cm.dispose();
				} else {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 10000);
					cm.gainItem(2614000, -1);
					cm.worldMessage(6, "【破功系统】：恭喜玩家 "+cm.getPlayer().getName()+" 破功至 "+cm.getPlayer().getLimitBreak()+"");
					cm.sendOk("增加破功上限成功。")
					cm.dispose();
				}
			}
		}
	}
}