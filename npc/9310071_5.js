var status = -1;
var text;
var ����������Ԫ�� = 10000;
var ÿ�շ���Ԫ�� = 1000;
var �������ȡ�������� = 30;//����
var ��Ҫ���� = 4441101;
var ��Ҫ���� = 1;
var Log = "��ɫ����_100R";
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        text = "            �� " + cm.ms() + "����ϵͳ ��\r\n\r\n";
        text += "1.(����#v"+��Ҫ����+"#  ["+��Ҫ����+"]�����������)\r\n";
        text += "2.(�����켴����ȡ)\r\n";
        text += "3.(ÿ�տ���ȡ1000Ԫ���ۼƿ���ȡ30000Ԫ��)\r\n";
        if (cm.getPlayer().getBossLog(Log, 1) == 0) {
            text += "#L0#�������ʸ�#l\r\n";
            cm.sendSimple(text);
        } else {
            if (cm.getBossLog("��ȡ��ɫ����_100R") == 0) {
                text += "#L1#��ȡÿ�շ���#l\r\n";
                cm.sendSimple(text);
            } else {
                text += "#r��������ȡ��������������\r\n";
                cm.sendOk(text);
                cm.dispose();
            }
        }
    } else if (status == 1) {
        if (selection == 0) {
            if (cm.haveItem(��Ҫ����,��Ҫ����) == false) {
                cm.sendOk("��������Ҫ�ĵ��߲��㡣\r\n\r\n�����#v"+��Ҫ����+"# * ["+��Ҫ����+"]��");
                cm.dispose();
            } else {
                cm.gainItem(��Ҫ����,-��Ҫ����);
                cm.getPlayer().setBossLog(Log, 1, �������ȡ��������);
                cm.sendOk("���򣬵�ǰʣ����ȡ����Ϊ#r " + cm.getPlayer().getBossLog(Log, 1) + "#k ��");
                cm.����(1, "[����ϵͳ]����ϲ��� ��" + cm.getPlayer().getName() + "�� ������ " + �������ȡ�������� + " ��ķ������ܣ���ҹ�ϲTA~");
                cm.dispose();
            }

        } else if (selection == 1) {
            cm.getPlayer().setAccountLog("�ۼ���������_����", 1, ÿ�շ���Ԫ��);
            cm.getPlayer().setBossLog(Log, 1, -1);
            cm.setBossLog("��ȡ��ɫ����_100R");
            cm.����(1, "[����ϵͳ]����ϲ��� ��" + cm.getPlayer().getName() + "�� ��ȡ�� " + ÿ�շ���Ԫ�� + " Ԫ������ҹ�ϲTA~");
            cm.sendOk("��ȡ�ɹ�����ǰʣ����ȡ����Ϊ#r " + cm.getPlayer().getBossLog(Log, 1) + "#k ��");
            cm.dispose();
        }
    }
}