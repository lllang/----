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
            var text = "勇士你已经到达200转生了吗？，是否要突破极限：\r\n\r\n";
			text += "				当前转生：#r["+cm.getPlayer().getBossLog("转生",1)+"]次#k\r\n\r\n";
            text += "1.等级达到 #r250#k级，并且需要拥有#v3700039。\r\n\r\n";
            text += "2.需要突破材料：#v4000463#x300 #v4310038#x300 #v4000313#x500 #v3992025#x1 #v4031311#x19999 \r\n";
            text += "3.#b职业/技能#k不变，等级降低至 #r150 #k级。\r\n";
			text += "4.奖励：#v4442100# #b#z4442100##k1个.#v4442000# #b#z4442000##k1个\r\n\r\n";
			text += "5.#b能力值#k每次重置，#r固定750#k加#r额外100#k点乘转生次数\r\n";
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (cm.getPlayer().getLevel() != 250) {
				cm.sendOk("#r很抱歉，您必须是250级才能转生。");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getBossLog("转生",1) >= 210) {
				cm.sendOk("当前转生达到上限");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getBossLog("转生",1) < 200) {
				cm.sendOk("勇士您的转生次数不够200次，继续加油");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getRemainingAp() != 0 ) {
				cm.sendOk("抱歉！还有能力值未分配，请先加完点再转生！");
				cm.dispose();
				return;
			} else if (cm.haveItem(4000463, 300) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
			} else if (cm.haveItem(4310038, 300) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
			} else if (cm.haveItem(3992025, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
			} else if (cm.haveItem(4000313, 500) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
			} else if (cm.haveItem(4031311, 19999) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
			} else if (cm.haveItem(3700039, 1) == false) {
                    cm.sendOk("您还未获得打架王称号。");
                    cm.dispose();
		
					
				} else {
					cm.getChar().setLevel(151);
					cm.gainItem(4000463,-300);//扣除道具
					cm.gainItem(4310038,-300);//扣除道具
					cm.gainItem(3992025,-1);//扣除道具
					cm.gainItem(4000313,-500);//扣除道具
					cm.gainItem(4031311,-19999);//扣除道具
					cm.gainItem(4442100,1);//转生奖励
					cm.gainItem(4442000,1);//转生奖励
					cm.getPlayer().setBossLog("转生",1);
					cm.gainAp(750+90*cm.getPlayer().getBossLog("转生",1));
					cm.getPlayer().getStat().setStr(4);
					cm.getPlayer().getStat().setDex(4);
					cm.getPlayer().getStat().setInt(4);
					cm.getPlayer().getStat().setLuk(4);
					cm.getChar().fakeRelog();
					cm.sendNext("转生成功!第["+cm.getPlayer().getBossLog("转生",1)+"]次转生");
					cm.喇叭(2, "玩家：[" + cm.getName() + "]成功突破了第["+cm.getPlayer().getBossLog("转生",1)+"]次转身，突破了自身缔造极限！");
					cm.dispose();
					
			
            }
        }
    }
}
