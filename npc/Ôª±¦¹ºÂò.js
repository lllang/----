var a = 0;
var text;
var 星星 = "#fEffect/CharacterEff/1051294/1/5#";
var selects; //记录玩家的选项
var buynum = 0;
var 每日限购 = Array(


/*装备购买说明:
自定义修改内容如下:
Array(装备或道具ID,购买的道具需要的数量,元宝数量),
要添加请自行按照格式添加。

     脚本编写 RCMS-点点 Q号：1098393331
承接脚本编写 - WZ定制修改 - 抖音推广 - 创意玩法
*/


Array(2047954,1, 500,"限购礼包专用LOG"),//法弗纳左轮枪
Array(2041226,1, 500,"限购礼包专用LOG1"),//法弗纳巨狼之爪
Array(2590000,1, 500,"限购礼包专用LOG1"),//法弗纳巨狼之爪
Array(2640011,1, 800,"限购礼包专用LOG1"),//法弗纳巨狼之爪
Array(2613001,1, 1000,"限购礼包专用LOG1"),//法弗纳巨狼之爪
Array(2340000,10, 3000,"限购礼包专用LOG2"),//法弗纳危险之手
Array(2049323,10, 3000,"限购礼包专用LOG3"),//法弗纳大马士革剑
Array(2041200,1, 500,"限购礼包专用LOG4")//法弗纳风翼弩
//Array(1452205,1, 3000,"限购礼包专用LOG5"),//法弗纳追风者
//Array(1442223,1, 3000,"限购礼包专用LOG6"),//法弗纳半月宽刃斧
//Array(1432167,1, 3000,"限购礼包专用LOG7"),//法弗纳贯雷枪
//Array(1422140,1, 3000,"限购礼包专用LOG8"),//法弗纳闪电锤
//Array(1402196,1, 3000,"限购礼包专用LOG9"),//法弗纳忏悔之剑
//Array(1382208,1, 3000,"限购礼包专用LOG10"),//法弗纳魔冠之杖
//Array(1372177,1, 3000,"限购礼包专用LOG11"),//法弗纳魔力夺取者
//Array(1302275,1, 3000,"限购礼包专用LOG12")//法弗纳单手剑
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
            text = ""+ 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 +"\r\n\r\n				#r#e彩虹冒险岛限购道具#k#n\r\n\r\n"+ 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 + 星星 +"\r\n";
            for (var i = 0; i < 每日限购.length; i++) {
                text += "	 	#L" + i + "##r购买：#k#b#v" + 每日限购[i][0] + "##z" + 每日限购[i][0] + "##k#l\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - 当前购买道具：#b#i" + 每日限购[selects][0] + "##k\r\n\r\n"
			txt += " - 可获得：#r" + 每日限购[selects][1] + "#k\r\n\r\n"
			txt += " - 需要元宝：#r" + 每日限购[selects][2] + "#k\r\n\r\n"
			txt += " 							#r是否确认购买?#k"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = selection
            var itemid = 每日限购[selects][0];
            if (cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= 每日限购[selects][2] && cm.getPlayer().getAccountLog(""+每日限购[selects][3]+"",0) < 1) {
                cm.gainItem(每日限购[selects][0], 每日限购[selects][1]);
				cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-每日限购[selects][2]);
				cm.getPlayer().setAccountLog(""+每日限购[selects][3]+"",0);
                cm.sendOk("购买成功");
                cm.dispose();
            } else {
                cm.sendOk("对不起，今日您已经购买过了，或#r[元宝]#k不足~");
                cm.dispose();
            }
        }
    }
}