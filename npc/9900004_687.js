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
        selStr += " ��Ʒ�һ�ϵͳ\r\n";
        selStr += "#e#L0##v1113037#_#b�� �� �� ָ �� ��#v1113089##k\r\n\r\n";
        selStr += "#e#L1##v1032219#_#b�� �� �� Ʒ �� ��#v1012174##k\r\n\r\n";
        //selStr += "#e#L2##v1142796#_#b�� �� �� �� �� ��#v1142796##k\r\n\r\n";
		selStr += "#e#L4##v1003112#_#b�� �� �� ͷ �� ��#v1003112##k\r\n\r\n";
		//selStr += "#e#L3##v1422156#_#b�� �� �� �� �� ��#v1422090##k\r\n\r\n";
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(1052017, 0);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9900004, 508);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9900004, 504);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(2100000, 0);
                break;
				
			case 4:
                cm.dispose();
                cm.openNpc(9310060, 0);
                break;

        }
    }
}
