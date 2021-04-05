var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;
var itemlist = Array(
    Array(2450000, 1000, "半小时特效双倍"),//强化升级次数道具
	Array(2640011, 2200, "中级门票"),//强化升级次数道具
	Array(2531006, 2000,"保护高星装备不爆掉。"),
	Array(2613001, 4400, "高级门票"),//强化升级次数道具
	Array(2041332, 300, "普通BOSS门票"),//强化升级次数道具
	//Array(2047954, 500, "鱼王BOSS门票"),//强化升级次数道具
	//Array(2041226, 500, "绯红BOSS门票"),//强化升级次数道具
	//Array(2610001, 30000, "装备重生卷轴"),//强化升级次数道具
	Array(2049323, 500, "1-10星高级强化卷"),//强化升级次数道具
	Array(2340000, 500, "祝福卷"),//强化升级次数道具
	Array(2049345, 500,"强化11星装备的卷轴。"),//强化升级次数道具
	Array(2049346, 500,"强化12星装备的卷轴。"),
	Array(2049347, 500,"强化13星装备的卷轴。"),
	Array(2049348, 500,"强化14星装备的卷轴。"),
	Array(2049349, 500,"强化15星装备的卷轴。")
	
);

function start() {
    a = -1;
    action(1, 0, 0);
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
			text = "\r\n";
			text += "  - 您当前剩余的元宝为：#r#e "+ cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) +" #n #k点\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "#L" + i + "#购买#v"+itemlist[i][0]+"# [#b道具说明：#d"+itemlist[i][2]+"#k]#l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
        } else if (a == 1) {
			selects = selection;
			var txt = " - 当前兑换道具：#r#i" + itemlist[selects][0] + "\r\n\r\n"
			   txt += "\r\n #k- 当前道具说明：#d" + itemlist[selects][2] + "#k\r\n\r\n"
			   txt += " - 当前道具单价：#r" + itemlist[selects][1] + "#k 元宝。\r\n\r\n"
			   txt += " - 请输入所需兑换数值：\r\n\r\n"
			   cm.sendGetNumber(txt,1,1,100);
        } else if (a == 2) {
			jg = selection
			var itemid = itemlist[selects][0];
			if (cm.getInventory(2).isFull(0)||cm.getInventory(5).isFull(1)) {
				cm.sendOk("您的背包空间不足，请整理后再兑换。");
				cm.dispose();
				return; 
			}
			if (cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) <= itemlist[selects][1] * jg) {
				cm.sendOk("请保证你有足够的元宝。");
				cm.dispose();
				return; 
			}
            if (cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= itemlist[selects][1] * jg) {
                cm.getPlayer().setAccountLog("累计赞助积分_暂用",1, -itemlist[selects][1] * jg);
                cm.gainItem(itemlist[selects][0], jg);
                cm.sendOk("恭喜你花费了#r "+itemlist[selects][1] * jg+" #k元宝购买了#v"+itemlist[selects][0]+"# * #r"+jg+"#k个。");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的元宝。");
                cm.dispose();
            }
        }
    }//mode
}//f