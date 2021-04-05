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
        selStr += " 回收系统系统\r\n\r\n";
        //selStr += "#e#L3##v1402069#_#b一 键 回 收 系 统#v1402069##k\r\n\r\n";
		selStr += "#e#L0##v1462138#_#b顶 级 武 器 回 收#v1472160##k\r\n\r\n";
        selStr += "#e#L1##v1002357#_#b肝 帝 搬 砖 换 钱#v1002926##k\r\n\r\n";
        selStr += "#e#L2##v4020001#_#b极 品 矿 石 回 收#v4020001##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b枫 叶 兑 换 中 介#v4032733##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9900004, 1803);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9900004, 32);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(2070000, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9900004, 1086);
                break;

        }
    }
}
