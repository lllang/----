var status = -1;
var text;
var ����������Ԫ�� = 500;
var ÿ�շ���Ԫ�� = 100;
var �������ȡ�������� = 7;//����
var Log = "��ɫ����_500R";
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
        text += "1.(˵���Լ�д)\r\n";
        text += "2.(˵���Լ�д)\r\n";
        text += "3.(˵���Լ�д)\r\n";
        if (cm.getPlayer().getBossLog(Log, 1) == 0) {
            text += "#L0#�������ʸ�#l\r\n";
            cm.sendSimple(text);
        } else {
            if (cm.getBossLog("��ȡ��ɫ����") == 0) {
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
            if (cm.getPlayer().getAccountLog("�ۼ���������_����",1) < ����������Ԫ��) {
                cm.sendOk("��������Ԫ���������㣬��ȷ�ϡ�");
                cm.dispose();
            } else {
                cm.getPlayer().setAccountLog("�ۼ���������_����", 1, -����������Ԫ��);
                cm.getPlayer().setBossLog(Log, 1, �������ȡ��������);
                cm.sendOk("���򣬵�ǰʣ����ȡ����Ϊ#r " + cm.getPlayer().getBossLog(Log, 1) + "#k ��");
                cm.����(1, "[����ϵͳ]����ϲ��� ��" + cm.getPlayer().getName() + "�� ������ " + �������ȡ�������� + " ��ķ������ܣ���ҹ�ϲTA~");
                cm.dispose();
            }

        } else if (selection == 1) {
            cm.getPlayer().setAccountLog("�ۼ���������_����", 1, ÿ�շ���Ԫ��);
            cm.getPlayer().setBossLog(Log, 1, -1);
            cm.setBossLog("��ȡ��ɫ����");
            cm.����(1, "[����ϵͳ]����ϲ��� ��" + cm.getPlayer().getName() + "�� ��ȡ�� " + ÿ�շ���Ԫ�� + " Ԫ������ҹ�ϲTA~");
            cm.sendOk("��ȡ�ɹ�����ǰʣ����ȡ����Ϊ#r " + cm.getPlayer().getBossLog(Log, 1) + "#k ��");
            cm.dispose();
        }
    }
}