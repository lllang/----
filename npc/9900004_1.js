function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "              #e#d�� �� �� ǩ �� ϵ ͳ ��#d#k#n             \r\n"

            text += " #L2#ÿ�չ���#l\r\n\r\n"
            //text += " #L1#���߽���#l\r\n\r\n"
            //text += " #L3#ǩ�������һ�#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 1111);

        } else if (selection == 2) {
            if (cm.getBossLog("qiandao") == 0) {//��ȡ���ǩ��״̬
                cm.setBossLog('qiandao');//����ǩ������
                cm.sendOk("��ϲǩ���ɹ���");
				cm.����(1, "[" + cm.getPlayer().getName() + "]��ȡ��ÿ�չ���3000���+ǩ��֤��~");
                cm.gainItem(4001266, 1);
				cm.gainNX(+0);
                cm.dispose();
            } else {
                cm.sendOk("������ǩ����");
                cm.dispose()
            }

    } else if (selection == 3) {
        cm.openNpc(9010009, 0);

    } else if (selection == 4) {
        cm.openNpc(9900004, 1114);

    } else if (selection == 5) {
        cm.openNpc(9900004, 1112);

    } else if (selection == 6) {
        cm.openNpc(9900004, 1113);
    }
}
}
