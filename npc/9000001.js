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
        selStr += " 新手装备制作\r\n\r\n";
        selStr += "#L0#制作_#b#v1002393##k粉色海盗头巾（新手）#v1002393##k\r\n\r\n";
        selStr += "#L1#制作_#b#v1042003##k维泽特西装上衣（新手）#v1042003##k\r\n\r\n";
        selStr += "#L2#制作_#b#v1062007##k维泽特西装裤子（新手）#v1062007##k\r\n\r\n";
		selStr += "#L3#制作_#b#v1072004##k白色橡胶鞋（新手）#v1072004##k\r\n\r\n";
		selStr += "#L4#制作_#b#v1102003##k白色冒险披风（新手）#v1102003##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9000001, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9000001, 2);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9000001, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9000001, 4);
                break;
				
		    case 4:
                cm.dispose();
                cm.openNpc(9000001, 5);
                break;

        }
    }
}
