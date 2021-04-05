/*
 *
 *  此脚本由乐章网络制作完成
 * 购买商业脚本请加群:1049548
 *
 */


////importPackage(net.sf.cherry.client);

var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

//------------------------------------------------------------------------

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;
var feixing = 0;

//------------------------------------------------------------------------

var bossmaps = Array(
    Array(100000200, 0, "月妙副本"),
    Array(103000000, 0, "废弃副本"),
    Array(221024500, 0, "玩具副本"),
    Array(200080101, 0, "天空副本"),
    //Array(300030100, 0, "毒物副本"),
    Array(251010404,0,"海盗副本")
    //Array(261000011,0,"狗男女副本")
);


function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("#b好的,下次再见.");
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("#b好的,下次再见.");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        //------------------------------------------------------------------------

        if (status == 0) {

            var selStr = "#d　　　　　　　　　选择你的目的地吧.#k#b";
            for (var i = 0; i < bossmaps.length; i++) {
                selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
            }
            cm.sendSimple(selStr);


        } else if (status == 1) {
            cm.sendYesNo("你确定要去 " + bossmaps[selection][2] + "?");
            chosenMap = selection;

        } else if (status == 2) {
            if (cm.getMeso() >= bossmaps[chosenMap][1]) {
                cm.warp(bossmaps[chosenMap][0], 0);
                cm.gainMeso(-bossmaps[chosenMap][1]);
            } else {
                cm.sendOk("你没有足够的金币哦!");
            }
            cm.dispose();


            //------------------------------------------------------------------------

        }
    }
}

