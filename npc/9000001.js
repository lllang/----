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
        selStr += " ����װ������\r\n\r\n";
        selStr += "#L0#����_#b#v1002393##k��ɫ����ͷ�����֣�#v1002393##k\r\n\r\n";
        selStr += "#L1#����_#b#v1042003##kά������װ���£����֣�#v1042003##k\r\n\r\n";
        selStr += "#L2#����_#b#v1062007##kά������װ���ӣ����֣�#v1062007##k\r\n\r\n";
		selStr += "#L3#����_#b#v1072004##k��ɫ��Ь�����֣�#v1072004##k\r\n\r\n";
		selStr += "#L4#����_#b#v1102003##k��ɫð�����磨���֣�#v1102003##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9000001, 1);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9000001, 2);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9000001, 3);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9000001, 4);
                break;
				
		    case 4:
                cm.dispose();
                cm.openNpc(9000001, 5);
                break;

        }
    }
}
