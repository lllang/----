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
        selStr += "#e#L0##v4031862#_#b师 徒 系 统#v4031862##k\r\n\r\n";
        //selStr += "#e#L1##v4031431#_#b修 仙 系 统#v4031432##k\r\n\r\n";
        selStr += "#e#L2##v1112001#_#b结 婚 系 统#v1112001##k\r\n\r\n";
		//selStr += "#e#L3##v4310160#_#r删 除 道 具#v4310160##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b枫 叶 兑 换 中 介#v4032733##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9900004, 1248);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9900004, 759);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9310084, 0);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9000021, 2);
                break;

        }
    }
}
