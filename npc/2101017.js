/*
  ��������
     ����ʱ�䣺2018/12/05
                 QQ��540328414
                              */
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var �һ� = "#fMap/MapHelper/weather/rose/4#";

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
        selStr += " �컷������ս����ѧԺ\r\n\r\n";
        selStr += "#e#L0##v 4031569##b#b��ս�� ����½ؼ����#k#v 4031569##b\r\n\r\n";
        selStr += "#e#L1##v 1112916##b#r�һ��� ����½ؼ�껷#k#v 1112916##b\r\n\r\n";
		selStr += "#e#L2##v 1112421##b#r�һ��� ǧ����컷�ϳ�#k#v 1112421##b\r\n\r\n";
		selStr += "#e#L3##v 1115111##b#r�һ��� С���׼��껷#k#v 1115111##b\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.warp(108010501, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(2101017, 1);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(2101017, 2);
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

        }
    }
}
