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
            text += "                #bð �� �� �� �� ÿ �� �� ��#k\r\n\r\n"
            text += " #z4031179# x 2��#z4001017# x 1��#z1122017#(3Сʱ)��#z4310158#x1��ð�ձ�2000W����ȯx6000������ȯx6000\r\n\r\n"
            text += "  - ��ȡҪ���ۼ����� #r300R#k �����ʸ���ȡ��\r\n\r\n"
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (cm.getPlayer().getBossLog("�ۼ���������", 1) < 300) {//��ȡ���ǩ��״̬
                cm.sendOk("�ۼ����Ѳ��� 300R���޷���ȡ��");
                cm.dispose();
            } else if (cm.getBossLog("�������_ÿ��") == 0) {//��ȡ���ǩ��״̬
                cm.gainItem(4031179, 2);//D
                cm.gainItem(4001017, 1);//����
                cm.gainItem(1122017, 1, 3, true);//�����׹
                cm.gainItem(4310158, 1);//�سɱ�
                cm.gainMeso(20000000);
                cm.gainNX(6000);
                cm.gainDY(6000);
                cm.setBossLog("�������_ÿ��");
                cm.����(1, "[����ÿ�����]��" + cm.getPlayer().getName() + "�������ѳɹ���ȡ����÷����ߣ�");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�");
                cm.dispose();
            }
        }
    }
}
