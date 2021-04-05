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
        selStr += " 称号挑战系统\r\n\r\n";
        selStr += "#e#L0#挑战： 天天大陆丶魂士#k#v 1142499##b\r\n\r\n";
        selStr += "#e#L1##r挑战： 天天大陆丶魂师#k#v 1142345##b\r\n\r\n";
        selStr += "#e#L2##b挑战： 天天大陆丶魂尊#k#v 1142905##b\r\n\r\n";
		selStr += "#e#L3#挑战： 天天大陆丶魂王#k#v 1142662##b\r\n\r\n";
		selStr += "#e#L4##r挑战： 天天大陆丶魂帝#k#v 1142344##b\r\n\r\n";
		selStr += "#e#L5##b挑战： 天天大陆丶魂斗罗#k#v 1142803##b\r\n\r\n";
		selStr += "#e#L6#挑战： 天天大陆丶封号斗罗#k#v 1142802##b\r\n\r\n";
		selStr += "#e#L7##r挑战： 天天大陆丶半圣#k#v 1142893##b\r\n\r\n";
		selStr += "#e#L8##r挑战： 天天大陆丶仙帝#k#v 1142713##b\r\n\r\n";
		selStr += "#e#L9##r挑战： 天天大陆丶仙尊#k#v 1142158##b\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(2101015, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(2101015, 2);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(2101015, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(2101015, 4);
                break;
				
			case 4:
                cm.dispose();
                cm.openNpc(2101015, 5);
                break;
				
			case 5:
                cm.dispose();
                cm.openNpc(2101015, 6);
                break;
				
		    case 6:
                cm.dispose();
                cm.openNpc(2101015, 7);
                break;
				
			case 7:
                cm.dispose();
                cm.openNpc(2101015, 8);
                break;
				
			case 8:
                cm.dispose();
                cm.openNpc(2101015, 9);
                break;
				
			case 9:
                cm.dispose();
                cm.openNpc(2101015, 10);
                break;

        }
    }
}
