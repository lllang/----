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
            if (cm.getPlayer().getBossLog("�����ۼ�����", 0) < 500) {
				cm.sendOk("��������������~!���ֵ��");
                cm.dispose();
            } else if (cm.getBossLog("�����ۼ�����_500���") > 0) {
				cm.sendOk("��������ȡ��");
                cm.dispose();
            } else if (cm.canHold(1112793,1) == false) {
				cm.sendOk("�����ռ䲻�㡣");
                cm.dispose();
            } else {
                cm.gainItem(1112793, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
                cm.setBossLog("�����ۼ�����_500���");
                cm.sendOk("��ȡ�ɹ���");
                cm.dispose();

            }
        }
    }
}
