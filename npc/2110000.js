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
        selStr += " 藏宝阁挑战\r\n\r\n";
        selStr += "#e#L0##v2041213#_#b30元宝 挑战藏宝阁10秒#k\r\n\r\n";
        selStr += "#e#L1##v2041213#_#b50元宝 挑战藏宝阁20秒#k\r\n\r\n";
        selStr += "#e#L2##v2041213#_#b100元宝 挑战藏宝阁40秒#k\r\n\r\n";
		selStr += "#e#L3##v2041213#_#b150元宝 挑战藏宝阁60秒#k\r\n\r\n";
		//selStr += "#e#L4##v4021009#_#bLV：120 宝 石 兑 换#k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9900000, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9900000, 2);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9900000, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9900000, 4);
                break;
				
			case 4:
                cm.dispose();
                cm.openNpc(9310034, 4);
                break;

        }
    }
}
