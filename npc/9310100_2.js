var 随机率 = Math.floor(Math.random() * 99);//成功率，这个不可修改！
var itemId = 2614001;//消耗的道具
var num = 1;//消耗的道具num
var useitem = 2041213;//保护卷ID
var 破攻数 = 100000;


var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
function start() {
			status = -1;
			action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var selStr = "#r	破攻需要道具：#v" + itemId + "##b[" + num + "]#r个，请带来找我！#k\r\n";
			//selStr += "#r	破功可选择使用：#v" + useitem + "##b增加成功率#r，至100%！#k\r\n";
			selStr += "#r	基础成功率：#b百分100%#k\r\n";
			selStr += "#r	当前破功值：#b"+cm.getPlayer().getLimitBreak()+"#k\r\n";
			selStr += "#r	拥有破攻石：#b#c2614001#个#k\r\n";
			selStr += "#r	破功费用:#b1亿 #v" + itemId + "##b#k\r\n";
			selStr += "#r#L0##b#e开始破功#l   \r\n\r\n\r\n";
            cm.sendSimple(selStr);
    } else if (status == 1) {
		var sl = selection;
		if (sl == 0){
			if (cm.haveItem(itemId, num) == false) {
                cm.sendOk("#v" + itemId + "#道具数量不足，请确认后再来。");
                cm.dispose();
			}else if (cm.getPlayer().getMeso() < 100000000) {
					cm.sendOk("金币不足。");
			} else {
                if (随机率 < 100) {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 破攻数);
                    cm.gainItem(itemId, -num);
                    cm.gainItem(useitem, -sl);
					cm.gainMeso(-100000000);
                    cm.sendOk("升级成功");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]成功破攻增加"+破攻数+"伤害。");
                    cm.dispose();
                } else {
                    cm.gainItem(itemId, -num);
                    cm.sendOk("#r#e很可惜，失败\r\n");
					cm.gainMeso(-100000000);
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]破攻失败！");
                    cm.dispose();
                }
			}
		} else if (sl == 1){
			var text = "每一个#v" + useitem + "#可增加90点成功率。\r\n\r\n请输入你想消耗的#v" + useitem + "#数量\r\n\r\n";
			cm.sendGetNumber(text, 1, 1, parseInt(cm.itemQuantity(useitem)));
		}
    } else if (status == 2) {
		var sl = selection;
		if (sl < 1) {
            cm.sendOk("抱歉，输入数量属于无效输入！");
            cm.dispose();
            return;
		}
        if (sl > 1) {
            cm.sendOk("抱歉，输入数量相加超过100%成功率，属于无效输入！");
            cm.dispose();
            return;
        } else {
            if (cm.haveItem(itemId, num) == false) {
                cm.sendOk("#v" + itemId + "#道具数量不足，请确认后再来。");
                cm.dispose();
            } else {
                if (随机率 < 100) {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 破攻数);
                    cm.gainItem(itemId, -num);
                    cm.gainItem(useitem, -sl);
                    cm.sendOk("升级成功");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]成功破攻增加"+破攻数+"伤害。");
                    cm.dispose();
                } else if (随机率 + sl > 90) {
					cm.getPlayer().setLimitBreak(cm.getPlayer().getLimitBreak() + 破攻数);
                    cm.gainItem(itemId, -num);
                    cm.gainItem(useitem, -sl);
                    cm.sendOk("升级成功");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]成功破攻增加"+破攻数+"伤害。");
                    cm.dispose();
                } else {
                    cm.gainItem(itemId, -num);
                    cm.sendOk("#r#e很可惜，失败\r\n");
                    cm.喇叭(1, "玩家：[" + cm.getName() + "]破攻失败！");
                    cm.dispose();
                }
            }
        }
    }
}
