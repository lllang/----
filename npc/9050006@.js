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
        selStr += " ��Ʒ�һ�ϵͳ\r\n\r\n";
        //selStr += "#e#L0##v4001126#_#b �� �� ǿ �� ��#v2533000##k\r\n\r\n";
        selStr += "#e#L1##v5061001#_#bװ �� �� �� �� ��#v5061001##k\r\n\r\n";
        //selStr += "#e#L2##v4310070#_#b��ħʯ�һ�#v2590005##k\r\n\r\n";
		//selStr += "#e#L3##v1702334#_#b�� �� �� װ �� ��#v4443000##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b�� Ҷ �� �� �� ��#v4032733##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9050006, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9050006, 5);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9050006, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9310071, 10);
                break;

        }
    }
}
