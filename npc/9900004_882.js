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
        selStr += "#L0#选换_#b黄金武器(顶级）#k\r\n\r\n";
        //selStr += "#L1#选换_#b极品防具(兑换）#k\r\n\r\n";
        //selStr += "#L2#选换_#b极品饰品(兑换）#k\r\n\r\n";
		selStr += "#L3#选换_#b极品点装(兑换）#k\r\n\r\n";
		//selStr += "#L3#挑战_#b限时转身挑战#k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9900004, 501);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9900004, 502);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9900004, 503);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9310071, 10);
                break;

        }
    }
}
