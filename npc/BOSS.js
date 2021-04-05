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
Array(100000005,0," 花蘑菇王 "), 
                                        //Array(106020300,0,"蓝蘑菇王-0.5h"), 
                                        Array(800010100,0," 蓝蘑菇王 "), 
                                        Array(105070002,0," 僵尸菇王 "), 
                                        Array(701010320,0," 大蜈蚣王 "), 
										Array(105090900,0," 小蝙蝠魔 "), 
                                        //Array(921100300,0," 蝙蝠之家 "), 
                                        //Array(910000013,0," 绯红大厅 "), 
										Array(551030100,0," 暴力熊狮 "),
										Array(541020700,0," 千年树精 "),
										Array(702070400,0," 少林妖僧 "), 
										Array(240020400,0," 火焰老龙 "),
										Array(240020100,0," 神木天鹰 "),
										Array(240040401,0," 大海神兽 "),
										Array(270030500,0," 忘却雷卡 "),
										Array(270020500,0," 玄冰独角 "),
										//Array(270010500,0," 追忆多多 "),
										Array(230040410,0," 海底鱼王 "),
										Array(220080000,0," 时间闹钟 "), 
                                        //Array(801030000,0,"黑道boss -     老板-2h"),
                                        //Array(800020130,0," 大佛天狗 "), 
                                        //Array(801010000,0,"街道boss   -  最强保镖 -4h"), 
                                        //Array(800020300,0,"墓地boss   -  大姐大   -4h"),  
										Array(211042400,0," 超级扎昆 "), 
										//Array(211042400,0,"扎昆入口   -  扎昆"), 
										//Array(280030000,0,"扎昆重返 - 掉线以后再进，不然召唤不了扎昆"), 
										Array(240040700,0," 暗黑龙王 "),
										Array(270050000,0," 黄昏品克 ")
	
	//Array(910000018, 0, "半半，希纳斯，魔女 终极 BOSS挑战")
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

