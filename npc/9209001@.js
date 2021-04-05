/*
 *
 *  此脚本由乐章网络制作完成
 * 购买商业脚本请加群:1049548
 *
 */


//importPackage(net.sf.cherry.client);

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
//Array(100000005,0," 花蘑菇王 "), 
                                        //Array(106020300,0,"蓝蘑菇王-0.5h"), 
                                        Array(101030105,0," 枫叶系列装备（爆率极高）过度装备 "), 
                                        Array(240020000,0," #r诺顿系列装备（爆率低）白嫖系列#k "), 
                                        Array(270030500,0," FFN系列武器 （爆率极低）属于毕业武器 "), 
										Array(270010500,0," #r红色武器系列（爆率超级低）高属性装备#k ")
                                       
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

