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
        selStr += "#e#L0##v5150015#_#b�� �� �� ��#v5150015##k\r\n\r\n";
        selStr += "#e#L1##v5200002#_#b�� �� �� ��#v5200002##k\r\n\r\n";
        selStr += "#e#L2##v2000000#_#bϴ Ѫ ϴ ��#v2000003##k\r\n\r\n";
		selStr += "#e#L3##v4310160#_#rɾ �� �� ��#v4310160##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b�� Ҷ �� �� �� ��#v4032733##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9310074, 6);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9900004, 881);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9900004, 502);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9000021, 2);
                break;

        }
    }
}
