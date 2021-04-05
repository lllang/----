var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var nx;
var 道具ID = 3700036;
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
            text = "#e#d领取#v1142574#请女神玩家找群主：\r\n";
            text += "勋章属性:（全属性+50）★点券3W★金币2E★\r\n";
            cm.sendYesNo(text);
        } else if (a == 1) {
            if (cm.haveItem(道具ID, 1) == false) {
                cm.sendOk("道具不足，无法领取");
                cm.dispose();
            } else {
                cm.gainItem(道具ID, -1);
                cm.gainItem(1142574, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
                cm.gainMeso(200000000);
                cm.gainNX(30000);
                cm.sendOk("领取成功。");
                cm.dispose();
            }
        }
    }
}
