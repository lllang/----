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
        selStr += " �����һ�ϵͳ\r\n\r\n";
        //selStr += "#e#L0##v1472230#_#b�� �� �� �� �� ��#v1472230##k\r\n\r\n";
        //selStr += "#e#L1##v1452148#_#b�� �� �� �� �� ��#v1452148##k\r\n\r\n";
		//selStr += "#e#L4##v1902338#_#bת �� �� �� �� ��#v1902338##k\r\n\r\n";
        selStr += "#e#L2##v1332289#_#b�� �� �� �� �� ��#v1332289##k\r\n\r\n";
		selStr += "#e#L3##v2049345#_#r11-15�� �һ� �ֽ�#v2041214##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b�� Ҷ �� �� �� ��#v4032733##k\r\n\r\n";
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
