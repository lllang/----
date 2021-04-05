var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var itemlist = Array(
    Array(1702224, 1),
    Array(1702442, 1)
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
            text = "#r合成时装（全150属性）需要以下物品~：\r\n";
            text += "#v4000238# * 300、#v4000240#*300、#v4000082#*50、#v4000068#*100、#v4170009#*30、#v4170002#*30#v4170005#*30、#v4000463#*50\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "#制作#v" + itemlist[i][0] + "##z" + itemlist[i][0] + "##l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - 当前兑换道具：#r#i" + itemlist[selects][0] + "\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection
            var itemid = itemlist[selects][0];
            if (cm.canHold(itemid, 1) == false) {
                cm.sendOk("您的背包空间不足，请整理后再兑换。");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000238, 300) == false) {
                cm.sendOk("所需道具不足，无法兑换");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000240, 300) == false) {
                cm.sendOk("所需道具不足，无法兑换");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000082, 50) == false) {
                cm.sendOk("所需道具不足，无法兑换");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000068, 100) == false) {
                cm.sendOk("所需道具不足，无法兑换");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4170009, 30) == false) {
                cm.sendOk("所需道具不足，无法兑换");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4170002, 30) == false) {
                cm.sendOk("所需道具不足，无法兑换");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4170005, 30) == false) {
                cm.sendOk("所需道具不足，无法兑换");
                cm.dispose();
                return;
            }
            if (cm.haveItem(4000463, 50) == false) {
                cm.sendOk("所需道具不足，无法兑换");
                cm.dispose();
        } else {
            cm.gainItem(4000238, -300);
            cm.gainItem(4000240, -300);
            cm.gainItem(4000082, -50);
            cm.gainItem(4000068, -100);
            cm.gainItem(4170009, -30);
            cm.gainItem(4170002, -30);
            cm.gainItem(4170005, -30);
            cm.gainItem(4000463, -50);
            cm.gainItem(itemlist[selects][0], 150,150,150,150,50,50,150,150,50,50,50,50,10,10);
            cm.sendOk("兑换成功~");
            cm.dispose();
        }
    }//mode
} 
} 