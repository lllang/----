

var sj;

var ����װ���������� = 4000464;//���
var ����װ�������������� = 10;
var ����װ��������������1 = 100;
//���ߴ��룺
var ǿ������ = 4032002;//���
var ǿ���������� = 1;

var ȫ���� = 3;
var ˫�� = 2;

var װ������������� = 125;

var ǿ������ = 5;//ǿ������*10%
var ���ֵ = Math.floor(Math.random() * 10);
var status = 0;

function start() {
    if (cm.getInventory(1).getItem(1) == null) {
        cm.sendOk("�뽫װ��������װ���� ��#b��һ��#k�� ��");
        cm.dispose();
    } else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId())) {
        cm.sendOk("�ֽ�װ���޷�����ǿ����");
        cm.dispose();
    } else {
        status = -1;
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;


        if (status == 0) {
            var textz = "#b��ӭ���ٱ����������Լ�����ǿ���û�������Ƴ���ɫǿ��ϵͳ��ô��ϸ������ܣ�\r\n";

            textz += "#r1.����ֻ����װ�����������������ı�����\r\n";
            textz += "2.ǿ��ʱ�뽫װ���ŵ�������1�����������ٷְٳɹ���\r\n";
            textz += "3.ÿ��װ������ǿ��125�Σ�����װ���Դ��Ŀ���������������125����һ�����ʻص�������Ը�����#k\r\n\r\n";
            textz += "#k#L0#��ʹ��10000��ȯ�װ������������+1��\r\n\r\n";
            textz += "#L1#��ʹ��100000��ȯ�װ������������+10��\r\n\r\n";
            cm.sendSimple(textz);


        } else if (status == 1) {

            var ItemID = cm.getInventory(1).getItem(1).getItemId();
            var ���������� = cm.getInventory(1).getItem(1).getUpgradeSlots();
            var ���������� = cm.getInventory(1).getItem(1).getLevel();
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(1) < 10000) {
                    cm.sendOk("��ȯ����");
                    cm.dispose();
                } else if ((װ������������� - ���������� - ����������) < 1) {
                    cm.sendOk("��ǰװ���޷�������");
                    cm.dispose();
                } else {
                    var statup = new java.util.ArrayList();
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() + 1);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainNX(-10000);
                    var selStr = "ǿ���ɹ�";
                    cm.sendOk(selStr);
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (cm.getPlayer().getCSPoints(1) < 100000) {
                    cm.sendOk("��ȯ����");
                    cm.dispose();
                } else if ((װ������������� - ���������� - ����������) < 10) {
                    cm.sendOk("��ǰװ���޷�������");
                    cm.dispose();
                } else {
                    var statup = new java.util.ArrayList();
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() + 10);
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    cm.gainNX(-100000);
                    var selStr = "ǿ���ɹ�";
                    cm.sendOk(selStr);
                    cm.dispose();
                }
            }
        }
    }
}
	




