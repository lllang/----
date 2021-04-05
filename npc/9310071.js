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
        selStr += "#e#L0##v5150015#_#b美 容 美 发#v5150015##k\r\n\r\n";
        selStr += "#e#L1##v5200002#_#b金 币 兑 换#v5200002##k\r\n\r\n";
        selStr += "#e#L2##v2000000#_#b洗 血 洗 蓝#v2000003##k\r\n\r\n";
		selStr += "#e#L3##v4310160#_#r删 除 道 具#v4310160##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b枫 叶 兑 换 中 介#v4032733##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9310074, 6);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9900004, 881);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9900004, 502);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9000021, 2);
                break;

        }
    }
}
