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
        selStr += " ����ϵͳ\r\n\r\n";
        selStr += "#e#L0##v2613008#_#b�� �� ǿ �� �� ��#v2613008##k\r\n\r\n";
        selStr += "#e#L1##v2049323#_#r�� �� ǿ �� �� ��#v2531006##k\r\n\r\n";
        selStr += "#e#L2##v1002140#_#bװ �� �� �� �� ��#v1002140##k\r\n\r\n";
		//selStr += "#e#L3##v4310160#_#rɾ �� �� ��#v4310160##k\r\n\r\n";
		//selStr += "#e#L4##v4032733#_#b�� Ҷ �� �� �� ��#v4032733##k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.warp(910000016);
				cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "������16����ʼ����ǿ����ǿ���һ��ף����/����");
                break;

            case 1:
                cm.dispose();
                cm.warp(910000017);
				cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "������17����ʼ����ǿ����ǿ���һ��ף����/����");
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9310035, 0);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9000021, 2);
                break;

        }
    }
}
