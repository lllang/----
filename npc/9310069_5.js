var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 数值1 = 3000;
var 金币 = 1000000;

//自定义内容： Array(兑换的道具,兑换的道具数量,兑换需要的道具,需要的道具数量),
var itemlist = Array(
    Array(2049345, 10, 2041214, 12),
	Array(2049346, 10, 2041214, 12),
    Array(2049347, 10, 2041214, 12),
	Array(2049348, 10, 4442001, 12),
	Array(2049349, 10, 4442001, 12),
	Array(2041214, 10, 2049345, 12),
	Array(2041214, 10, 2049346, 12),
    Array(2041214, 10, 2049347, 12),
	Array(4442001, 10, 2049348, 12),
	Array(4442001, 10, 2049349, 12)
  

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
            text = "                "+cm.ms()+" - 星强兑换\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "#兑换：#b#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#" + itemlist[i][1] + "个 - 需要：#v" + itemlist[i][2] + "#" + itemlist[i][3] + "个#k#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - 兑换当前道具：#r#i" + itemlist[selects][0] + "#" + itemlist[selects][1] + "张#k\r\n\r\n"
            txt += " - 需要消耗道具：#r#i" + itemlist[selects][2] + "#"+ itemlist[selects][3] + "个#k\r\n\r\n"
            txt += " - 兑换需要手续费：#r" +" 500W金币  "+ "\r\n\r\n"
			txt += " - 确定要兑换吗？\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection
            var itemid = itemlist[selects][0];
            if (cm.haveItem(itemlist[selects][2], itemlist[selects][3])) {
                cm.gainItem(itemlist[selects][2], -itemlist[selects][3]);
                cm.gainItem(itemlist[selects][0], itemlist[selects][1]);
				cm.gainMeso(-5000000);
                cm.sendOk("兑换成功");
				cm.喇叭(1,"["+ cm.getPlayer().getName() + "] 使用了星级强化分解/合成机!");
                cm.dispose();
            } else {
                cm.sendOk("对不起，你没有足够的道具。");
                cm.dispose();
            }
        }
    }//mode
}//f