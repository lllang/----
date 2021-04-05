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
            var textz = "              #e欢迎来到冒险岛进阶技能#k\r\n\r\n";

            textz += "#L0##d#v2048600#成功率进阶主技能#v2047926##l\r\n\r\n";

            //textz += "#L1##d邮票兑换道具#l\r\n\r\n";

            textz += "#L1##d#v2047933#百分百进阶主技能#v2047933##l\r\n\r\n";

            cm.sendNext(textz);

        } else if (status == 1) {
            if (selection == 0) {
                cm.dispose();
                cm.openNpc(9250006, 1)

            } else if (selection == 1) {
                cm.dispose();
                cm.openNpc(9250006, 2)
				
			} else if (selection == 4) {
                cm.dispose();
                cm.openNpc(2070000, 3)

            } else if (selection == 2) {
                if (cm.haveItem(2070000, 3) == false) {
                    var textz = "新强BOSS门票召唤材料，奖励为#v5252001##z5252001#x1\r\n\r\n";

            textz += "请认真核对需要物品，注意背包是否满导致不会补偿\r\n\r\n";

            textz += "1.#v4001084##c4001084#/1 这个物品，击败#r 闹钟#k 几率获得\r\n\r\n";

            textz += "2.#v4001083##c4001083#/1 这个物品，击败#r 扎昆#k 几率获得\r\n\r\n";

            textz += "4.金币"+cm.getMeso()+"/66666666\r\n\r\n";

            cm.sendNext(textz);
                    cm.dispose();
                } else if (cm.haveItem(4001083, 1) == false) {
                    var textz = "新强BOSS门票召唤材料，奖励为#v5252001##z5252001#x1\r\n\r\n";

            textz += "请认真核对需要物品，注意背包是否满导致不会补偿\r\n\r\n";

            textz += "1.#v4001084##c4001084#/1 这个物品，击败#r 闹钟#k 几率获得\r\n\r\n";

            textz += "2.#v4001083##c4001083#/1 这个物品，击败#r 扎昆#k 几率获得\r\n\r\n";

            textz += "4.金币"+cm.getMeso()+"/66666666\r\n\r\n";

            cm.sendNext(textz);
                } else if (cm.getPlayer().getMeso() < 66666666) {
                    var textz = "新强BOSS门票召唤材料，奖励为#v5252001##z5252001#x1\r\n\r\n";

            textz += "请认真核对需要物品，注意背包是否满导致不会补偿\r\n\r\n";

            textz += "1.#v4001084##c4001084#/1 这个物品，击败#r 闹钟#k 几率获得\r\n\r\n";

            textz += "2.#v4001083##c4001083#/1 这个物品，击败#r 扎昆#k 几率获得\r\n\r\n";

            textz += "4.金币"+cm.getMeso()+"/66666666\r\n\r\n";

            cm.sendNext(textz);
                } else {
                    cm.gainItem(4001084, -1);
                    cm.gainItem(4001083, -1);
                    cm.gainMeso(-66666666);
                    cm.gainItem(5252001, 1);
                    cm.sendNext("兑换成功");
                    cm.dispose();
                }

            }
        }
    }
}
