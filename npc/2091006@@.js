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

//function action(mode, type, selection) {
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
        selStr += " 武器制作系统\r\n\r\n";
        selStr += "#e#L0##v1332289#_#b创世神器制作#k\r\n\r\n";
        selStr += "#e#L1##v1382273#_#b创世神器制作#k\r\n\r\n";
        selStr += "#e#L2##v1302354#_#b创世神器制作#k\r\n\r\n";
		selStr += "#e#L3##v1402267#_#b创世神器制作#k\r\n\r\n";
		selStr += "#e#L4##v1422196#_#b创世神器制作#k\r\n\r\n";
		selStr += "#e#L5##v1432226#_#b创世神器制作#k\r\n\r\n";
		selStr += "#e#L6##v1442284#_#b创世神器制作#k\r\n\r\n";
		selStr += "#e#L7##v1452265#_#b创世神器制作#k\r\n\r\n";
		selStr += "#e#L8##v1462251#_#b创世神器制作#k\r\n\r\n";
		selStr += "#e#L9##v1472275#_#b创世神器制作#k\r\n\r\n";
		selStr += "#e#L10##v1482232#_#b创世神器制作#k\r\n\r\n";
		selStr += "#e#L11##v1492245#_#b创世神器制作#k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9000018, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9000018, 2);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9000018, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9000018, 4);
                break;
				
			case 4:
                cm.dispose();
                cm.openNpc(9000018, 5);
                break;
				
			case 5:
                cm.dispose();
                cm.openNpc(9000018, 6);
                break;

            case 6:
                cm.dispose();
                cm.openNpc(9000018, 7);
                break;
				
			case 7:
                cm.dispose();
                cm.openNpc(9000018, 8);
                break;
				
			case 8:
                cm.dispose();
                cm.openNpc(9000018, 9);
                break;
				
			case 9:
                cm.dispose();
                cm.openNpc(9000018, 10);
                break;
				
			case 10:
                cm.dispose();
                cm.openNpc(9000018, 11);
                break;
				
			case 11:
                cm.dispose();
                cm.openNpc(9000018, 12);
                break;







        }
    }
}
