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
        selStr += " 破功系统系统\r\n\r\n";
        selStr += "#e#L0##v2614000#_#b1W 破 功 石 使 用#k\r\n\r\n";
        selStr += "#e#L1##v2614001#_#b10W 破 功 石 使 用#k\r\n\r\n";
		selStr += "#e#L3##v2614002#_#b100W 破 功 石 使 用（非绑定）#k\r\n\r\n";
		selStr += "#e#L4##v2614002#_#b100W 破 功 石 使 用（绑定）#k\r\n\r\n";
        selStr += "#e#L2##v2614000#_#b 破 功 石 头 兑 换#k\r\n\r\n";
		//selStr += "#e#L3##v4011007#_#bLV：77  宝 石 兑 换#k\r\n\r\n";
		//selStr += "#e#L4##v4021009#_#bLV：120 宝 石 兑 换#k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9310100, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9310100, 2);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9310100, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9310100, 4);
                break;
				
			case 4:
                cm.dispose();
                cm.openNpc(9310100, 5);
                break;

        }
    }
}
