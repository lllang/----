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
        selStr += " ��������ϵͳ\r\n\r\n";
        selStr += "#e#L0##v1002418#_#bLV������װ��������ͷ��#k\r\n\r\n";
        selStr += "#e#L1##v1042003#_#bLV������װ���������£�#k\r\n\r\n";
        selStr += "#e#L2##v1062007#_#bLV������װ���������㣩#k\r\n\r\n";
		selStr += "#e#L3##v1072004#_#bLV������װ��������Ь��#k\r\n\r\n";
		selStr += "#e#L4##v1102003#_#bLV������װ������������#k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(2001001, 5);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(2001001, 1);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(2001001, 2);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(2001001, 3);
                break;
				
			case 4:
                cm.dispose();
                cm.openNpc(2001001, 4);
                break;

        }
    }
}
