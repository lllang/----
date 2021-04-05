//importPackage(net.sf.odinms.client);
var status = 0;
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 红色箭头 = "#fEffect/CharacterEff/1112908/0/1#";  //彩光3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 礼包物品 = "#v1302000#";
var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";


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


            var textz = "你想要做些什么？\r\n\r\n";

            textz += "#d#L0##r离开这里\r\n";

            textz += "#d#L1#拉回掉线队友\r\n";

            //textz += "#d#L2#召唤暗黑龙王（需要黑龙角）\r\n";

            //textz += "#d#L3#召唤暗黑龙王（3000万金币）\r\n";

            cm.sendSimple(textz);


        } else if (status == 1) {

            if (selection == 0) {
                cm.warp(910000000, 0);
                cm.dispose();

            } else if (selection == 1) {
                cm.warpParty(cm.getPlayer().getMapId(), 0)
                cm.dispose();


            } else if (selection == 2) {
                if (cm.haveItem(4000186, 1) == false) {
                    cm.sendOk("道具不足，无法召唤.");
                    cm.dispose();
                } else {
                    cm.gainItem(4000186, -1);
                    cm.spawnMonster(8810026, 693, 94);
                    cm.dispose();
                }

            } else if (selection == 3) {
                if (cm.getMeso() < 30000000) {
                    cm.sendOk("金币不足，无法召唤.");
                    cm.dispose();
                } else {
                    cm.gainMeso(-30000000);
                    cm.spawnMonster(8810026, 693, 94);
                    cm.dispose();
                }
            }
        }
    }
}
