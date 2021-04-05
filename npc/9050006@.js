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
        selStr += " 极品兑换系统\r\n\r\n";
        //selStr += "#e#L0##v4001126#_#b 翡 翠 强 化 卷#v2533000##k\r\n\r\n";
        selStr += "#e#L1##v5061001#_#b装 备 解 除 上 锁#v5061001##k\r\n\r\n";
        //selStr += "#e#L2##v4310070#_#b附魔石兑换#v2590005##k\r\n\r\n";
		//selStr += "#e#L3##v1702334#_#b属 性 点 装 兑 换#v4443000##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b枫 叶 兑 换 中 介#v4032733##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9050006, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9050006, 5);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9050006, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9310071, 10);
                break;

        }
    }
}
