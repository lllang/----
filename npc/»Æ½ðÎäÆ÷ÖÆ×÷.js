var weapon = new Array(
//合成物品ID,前一个装备ID
    Array(1302107,1302106),
	Array(1332237,1332242),
	Array(1382144,1382226),
	Array(1402130,1402214),
	Array(1422090,1422156),
	Array(1432118,1432182),
	Array(1452148,1452220),
	Array(1462138,1462208),
	Array(1472160,1472230),
	Array(1482121,1482183),
	Array(1492121,1492194)
);
//公共材料设置
var req = [
    [4001126, 10000]
    //[4031217, 1],
    //[4000487, 10],
    //[4310088, 10],
	//[4250802, 5],
	//[4251202, 5],
	//[4251002, 5],
	//[4310088, 20]
];
var rem = 128888888;
var gailv = 5;//输入百分之几不要输入百分号只要数字在里面就行了!!
var 失败道具 = 4310080;
var sels;
var status = -1;
/* 
测试概率代码 
		var aa = "";
		for (var i = 0; i < 1000; i++) {
			s1 = Math.floor(Math.random() * (100 - 1) + 1);
			if(s1 <= gailv){
				aa +="#g"+s1+"#k ";
			} else {
				aa +="#r"+s1+"#k ";
			}
		}
		cm.sendOk(aa);
*/
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "\r\n#d介绍:#b ";
        msg += "失败可获得枫叶8888袋子#v4310080#可直接兑换顶级武器\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + ":##z" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 2 == 0 && ii !=0) {
                msg += "\r\n";
            }
        }
		msg += "\t\t";
		msg += rem+"金币";
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i][1] + ":##z" + weapon[i][1] + "# #b升级#r #i" + weapon[i][0] + ":##z" + weapon[i][0] + "##l\r\n";
        }
        cm.sendSimple("#d想要兑换装备吗? \t\t目前合成概率为: #r#e"+gailv+"%#d#n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels][0])) {
            cm.sendNext("#r背包空间不足");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b身上没有#r#i" + req[i][0] + ":##z" + req[i][0] + "#x" + req[i][1] + "");
                cm.dispose();
                return;
            }
        }
		if (!cm.haveItem(weapon[sels][1],1)) {
            cm.sendNext("#b身上没有#r#i" + weapon[sels][1] + ":##z" + weapon[sels][1] + "#");
            cm.dispose();
            return;
        }
		if(cm.getMeso() < rem){
			cm.sendNext("#b身上没有#r"+rem+"金币");
            cm.dispose();
            return;
		}
        cm.sendYesNo("#b是否要兑换装备#r #i" + weapon[sels] + ":#? \r\n");
    } else if (status == 2) {
		s1 = Math.floor(Math.random() * (100 - 1) + 1);
		if(s1 <= gailv){
			for (var i = 0; i < req.length; i++) {
				cm.gainItem(req[i][0], -req[i][1]);
			}
			cm.gainMeso(-rem);
			cm.gainItem(weapon[sels][1],-1);
			cm.gainItem(weapon[sels][0], 1);
			cm.sendNext("#b已经兑换了武器 #i" + weapon[sels] + "#");
			cm.喇叭(2, "玩家：[" + cm.getName() + "] 祖坟冒烟了，成功使用红色武器升级为黄金武器");
			cm.dispose();
		} else {
			for (var i = 0; i < req.length; i++) {
				cm.gainItem(req[i][0], -req[i][1]);
			}
			cm.gainMeso(-rem);
			cm.gainItem(失败道具,1);
			cm.sendNext("#b合成失败,你投入的材料消失了~!");
			cm.喇叭(2, "玩家：[" + cm.getName() + "] 很遗憾，合成失败获得枫叶8888袋子一个！！！");
			cm.dispose();
		}
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}