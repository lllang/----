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
        selStr += " ��Աϵͳ\r\n\r\n";
        selStr += "#e#L0##v3700069#_#b99R �� Ա ÿ ��#k\r\n\r\n";
        selStr += "#e#L1##v3700080#_#b199R �� Ա ÿ ��#k\r\n\r\n";
        //selStr += "#e#L2##v3700090#_#b299R �� Ա ÿ ��#k\r\n\r\n";
		//selStr += "#e#L3##v3700010#_#b399R �� Ա ÿ ��#k\r\n\r\n";
		//selStr += "#e#L4##v3700000#_#b499R �� Ա ÿ ��#k\r\n\r\n";
		//selStr += "#e#L3##v4011007#_#bLV��77  �� ʯ �� ��#k\r\n\r\n";
		//selStr += "#e#L4##v4021009#_#bLV��120 �� ʯ �� ��#k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9209101, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9209101, 2);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9209101, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9209101, 4);
                break;
				
			case 4:
                cm.dispose();
                cm.openNpc(9209101, 5);
                break;

        }
    }
}
