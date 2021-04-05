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
        selStr += " 漩涡制作系统\r\n\r\n";
        selStr += "#e#L0##v1003976#_#bLV：160漩涡防具制作#k\r\n\r\n";
		//selStr += "#e#L2##v5120015#_#bLV：新春漩涡限时升级#k\r\n\r\n";
        selStr += "#e#L1##v4001190#_#bLV：160漩涡宝珠兑换#k\r\n\r\n";
        //selStr += "#e#L2##v1402046#_#bLV：120永恒武器制作#k\r\n\r\n";
		//selStr += "#e#L3##v4011007#_#bLV：77  宝 石 兑 换#k\r\n\r\n";
		//selStr += "#e#L4##v4021009#_#bLV：120 宝 石 兑 换#k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9310034, 5);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9310034, 6);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9310034, 7);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9310034, 3);
                break;
				
			case 4:
                cm.dispose();
                cm.openNpc(9310034, 4);
                break;

        }
    }
}
