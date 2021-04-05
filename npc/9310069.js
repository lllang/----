/*
  ¶µ¶µÖÆ×÷
     ¸üÐÂÊ±¼ä£º2018/12/05
                 QQ£º540328414
                              */
var Ð¡Ë®µÎ = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var ÌÒ»¨ = "#fMap/MapHelper/weather/rose/4#";

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
        selStr += " ÔÞÖú¶Ò»»ÏµÍ³\r\n\r\n";
        //selStr += "#e#L0##v1472230#_#bÔÞ Öú ºì Îä ¶Ò »»#v1472230##k\r\n\r\n";
        //selStr += "#e#L1##v1452148#_#bÔÞ Öú »Æ ½ð ¶Ò »»#v1452148##k\r\n\r\n";
		//selStr += "#e#L4##v1902338#_#b×ª Éí ×ø Æï ¶Ò »»#v1902338##k\r\n\r\n";
        selStr += "#e#L2##v1332289#_#b´´ ÊÀ ºÚ Îä ¶Ò »»#v1332289##k\r\n\r\n";
		selStr += "#e#L3##v2049345#_#r11-15ÐÇ ¶Ò»» ·Ö½â#v2041214##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b·ã Ò¶ ¶Ò »» ÖÐ ½é#v4032733##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9310069, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9310069, 2);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9310069, 4);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9310069, 5);
                break;
			
			case 4:
                cm.dispose();
                cm.openNpc(9310069, 6);
                break;

        }
    }
}
