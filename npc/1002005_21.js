var QuestName = "『 #r每 日 副 本 奖 励#k 』";//任务ID
var Meso = 100000;//奖励金币
var Exp = 10000;//奖励经验
var ItemID = 3991029;//奖励道具ID
var QuestItemID = 4000008;//任务所需道具ID
var QuestItemNum = 100;//任务所需道具数量

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var textz = "              #e欢迎来到冒险岛#k\r\n\r\n";

            //textz += "#L0##d单人任务#l\r\n\r\n";

            //textz += "#L1##d每日副本#l\r\n\r\n";

            textz += "#L2##dBOSS门票#l\r\n\r\n";

            cm.sendNext(textz);

        } else if (status == 1) {
            if (selection == 0) {
                cm.dispose();
                cm.openNpc(9310060, 1)

            } else if (selection == 1) {
                cm.dispose();
                cm.openNpc(9310060, 2)

            } else if (selection == 2) {
                if (cm.haveItem(3992025, 1) == false) {
                    var textz = "普通BOSS门票召唤材料，奖励为#v2041332##z2041332#x1\r\n\r\n";

            textz += "请认真核对需要物品，注意背包是否满导致不会补偿\r\n\r\n";

            textz += "1.#v3992025##c3992025#/30 这个物品，击败#r 闹钟#k 几率获得\r\n\r\n";

            textz += "2.#v4251202##c4251202#/1 这个物品，击败#r 扎昆#k 几率获得\r\n\r\n";

            textz += "4.金币"+cm.getMeso()+"/1000000\r\n\r\n";

            cm.sendNext(textz);
                    cm.dispose();
                } else if (cm.haveItem(4251202, 1) == false) {
                    var textz = "普通BOSS门票召唤材料，奖励为#v2041332##z2041332#x1\r\n\r\n";

            textz += "请认真核对需要物品，注意背包是否满导致不会补偿\r\n\r\n";

            textz += "1.#v3992025##c3992025#/30 这个物品，击败#r 闹钟#k 几率获得\r\n\r\n";

            textz += "2.#v4251202##c4251202#/1 这个物品，击败#r 扎昆#k 几率获得\r\n\r\n";

            textz += "4.金币"+cm.getMeso()+"/1000000\r\n\r\n";

            cm.sendNext(textz);
                } else if (cm.getPlayer().getMeso() < 1000000) {
                    var textz = "普通BOSS门票召唤材料，奖励为#v2041332##z2041332#x1\r\n\r\n";

            textz += "请认真核对需要物品，注意背包是否满导致不会补偿\r\n\r\n";

            textz += "1.#v3992025##c3992025#/30 这个物品，击败#r 闹钟#k 几率获得\r\n\r\n";

            textz += "2.#v4251202##c4251202#/1 这个物品，击败#r 扎昆#k 几率获得\r\n\r\n";

            textz += "4.金币"+cm.getMeso()+"/1000000\r\n\r\n";

            cm.sendNext(textz);
                } else {
                    cm.gainItem(3992025, -30);
                    cm.gainItem(4251202, -1);
                    cm.gainMeso(-1000000);
                    cm.gainItem(2041332, 1);
                    cm.sendNext("兑换成功");
                    cm.dispose();
                }

            }
        }
    }
}
