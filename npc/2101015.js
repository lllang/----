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
        selStr += " �ƺ���սϵͳ\r\n\r\n";
        selStr += "#e#L0#��ս�� �����½ؼ��ʿ#k#v 1142499##b\r\n\r\n";
        selStr += "#e#L1##r��ս�� �����½ؼ��ʦ#k#v 1142345##b\r\n\r\n";
        selStr += "#e#L2##b��ս�� �����½ؼ����#k#v 1142905##b\r\n\r\n";
		selStr += "#e#L3#��ս�� �����½ؼ����#k#v 1142662##b\r\n\r\n";
		selStr += "#e#L4##r��ս�� �����½ؼ���#k#v 1142344##b\r\n\r\n";
		selStr += "#e#L5##b��ս�� �����½ؼ�궷��#k#v 1142803##b\r\n\r\n";
		selStr += "#e#L6#��ս�� �����½ؼ��Ŷ���#k#v 1142802##b\r\n\r\n";
		selStr += "#e#L7##r��ս�� �����½ؼ��ʥ#k#v 1142893##b\r\n\r\n";
		selStr += "#e#L8##r��ս�� �����½ؼ�ɵ�#k#v 1142713##b\r\n\r\n";
		selStr += "#e#L9##r��ս�� �����½ؼ����#k#v 1142158##b\r\n\r\n";
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
