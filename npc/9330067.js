var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {


    if (mode == -1) {
        cm.dispose();

    } else if (mode == 0) {
        cm.dispose();

    } else {    
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var text = "如要转生，请满足以下要求：\r\n\r\n";
			text += "				当前转生：#r["+cm.getPlayer().getBossLog("转生",1)+"]次封印100转#k\r\n\r\n";
            text += "1.等级达到 #r250#k级。\r\n";
            text += "2.需要准备转生材料：#v4000463#x50 #v4002001#金币1亿 \r\n";
            text += "3.#b职业/技能#k不变，等级降低至 #r150 #k级。\r\n";
			text += "4.#b奖励#v2614000##k 破攻石3个 。\r\n";
			text += "5.#b能力值#k每次重置，#r固定750#k加#r额外80#k点乘转生次数\r\n";
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (cm.getPlayer().getLevel() != 250) {
				cm.sendOk("#r很抱歉，您必须是250级才能转生。");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getBossLog("转生",1) >= 100) {
				cm.sendOk("当前转生达到上限");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getRemainingAp() != 0 ) {
				cm.sendOk("抱歉！还有能力值未分配，请先加完点再转生！");
				cm.dispose();
				return;
			} else if (cm.haveItem(4000463,50)) {
					cm.getChar().setLevel(151);
					cm.gainItem(4000463,-50);//扣除道具
					cm.gainItem(4002001,-1);//转生奖励
					cm.gainItem(2614000,3);//转生奖励
					cm.getPlayer().setBossLog("转生",1);
					cm.gainAp(750+80*cm.getPlayer().getBossLog("转生",1));
					cm.getPlayer().getStat().setStr(4);
					cm.getPlayer().getStat().setDex(4);
					cm.getPlayer().getStat().setInt(4);
					cm.getPlayer().getStat().setLuk(4);
					cm.getChar().fakeRelog();
					cm.sendNext("转生成功!第["+cm.getPlayer().getBossLog("转生",1)+"]次转生");
					cm.喇叭(2, "玩家：[" + cm.getName() + "]第["+cm.getPlayer().getBossLog("转生",1)+"]次转生成功！");
					cm.dispose();
					return;
			} else {
					cm.sendOk("道具不足无法转生");
					cm.dispose();
            }
        }
    }
}
