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
        selStr += "#L0#ѡ��_#b�ƽ�����(������#k\r\n\r\n";
        //selStr += "#L1#ѡ��_#b��Ʒ����(�һ���#k\r\n\r\n";
        //selStr += "#L2#ѡ��_#b��Ʒ��Ʒ(�һ���#k\r\n\r\n";
		selStr += "#L3#ѡ��_#b��Ʒ��װ(�һ���#k\r\n\r\n";
		//selStr += "#L3#��ս_#b��ʱת����ս#k\r\n\r\n";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
                cm.dispose();
                cm.openNpc(9900004, 501);
                break;

            case 1:
                cm.dispose();
                cm.openNpc(9900004, 502);
                break;

            case 2:
                cm.dispose();
                cm.openNpc(9900004, 503);
                break;
				
			case 3:
                cm.dispose();
                cm.openNpc(9310071, 10);
                break;

        }
    }
}
