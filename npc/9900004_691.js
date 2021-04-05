/*
  兜兜制作
     更新时间：2018/12/05
                 QQ：540328414
                              */
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 桃花 = "#fMap/MapHelper/weather/rose/4#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "\r\n";
        selStr += " 传送系统\r\n\r\n";
        selStr += "#e#L0##v2613008#_#b正 向 强 化 传 送#v2613008##k\r\n\r\n";
        selStr += "#e#L1##v2049323#_#r升 星 强 化 传 送#v2531006##k\r\n\r\n";
        selStr += "#e#L2##v1002140#_#b装 备 增 加 次 数#v1002140##k\r\n\r\n";
		//selStr += "#e#L3##v4310160#_#r删 除 道 具#v4310160##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b枫 叶 兑 换 中 介#v4032733##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.warp(910000016);
				cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】进入16洞开始正向强化变强大家一起祝福他/她。");
                break;

            case 1:
                cm.dispose();
                cm.warp(910000017);
				cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】进入17洞开始升星强化变强大家一起祝福他/她。");
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9310035, 0);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9000021, 2);
                break;

        }
    }
}
