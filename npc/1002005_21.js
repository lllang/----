var QuestName = "�� #rÿ �� �� �� �� ��#k ��";//����ID
var Meso = 100000;//�������
var Exp = 10000;//��������
var ItemID = 3991029;//��������ID
var QuestItemID = 4000008;//�����������ID
var QuestItemNum = 100;//���������������

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
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
            var textz = "              #e��ӭ����ð�յ�#k\r\n\r\n";

            //textz += "#L0##d��������#l\r\n\r\n";

            //textz += "#L1##dÿ�ո���#l\r\n\r\n";

            textz += "#L2##dBOSS��Ʊ#l\r\n\r\n";

            cm.sendNext(textz);

        } else if (status == 1) {
            if (selection == 0) {
                cm.dispose();
                cm.openNpc(9310060, 1)

            } else if (selection == 1) {
                cm.dispose();
                cm.openNpc(9310060, 2)

            } else if (selection == 2) {
                if (cm.haveItem(3992025, 1) == false) {
                    var textz = "��ͨBOSS��Ʊ�ٻ����ϣ�����Ϊ#v2041332##z2041332#x1\r\n\r\n";

            textz += "������˶���Ҫ��Ʒ��ע�ⱳ���Ƿ������²��Ჹ��\r\n\r\n";

            textz += "1.#v3992025##c3992025#/30 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "2.#v4251202##c4251202#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "4.���"+cm.getMeso()+"/1000000\r\n\r\n";

            cm.sendNext(textz);
                    cm.dispose();
                } else if (cm.haveItem(4251202, 1) == false) {
                    var textz = "��ͨBOSS��Ʊ�ٻ����ϣ�����Ϊ#v2041332##z2041332#x1\r\n\r\n";

            textz += "������˶���Ҫ��Ʒ��ע�ⱳ���Ƿ������²��Ჹ��\r\n\r\n";

            textz += "1.#v3992025##c3992025#/30 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "2.#v4251202##c4251202#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "4.���"+cm.getMeso()+"/1000000\r\n\r\n";

            cm.sendNext(textz);
                } else if (cm.getPlayer().getMeso() < 1000000) {
                    var textz = "��ͨBOSS��Ʊ�ٻ����ϣ�����Ϊ#v2041332##z2041332#x1\r\n\r\n";

            textz += "������˶���Ҫ��Ʒ��ע�ⱳ���Ƿ������²��Ჹ��\r\n\r\n";

            textz += "1.#v3992025##c3992025#/30 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "2.#v4251202##c4251202#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "4.���"+cm.getMeso()+"/1000000\r\n\r\n";

            cm.sendNext(textz);
                } else {
                    cm.gainItem(3992025, -30);
                    cm.gainItem(4251202, -1);
                    cm.gainMeso(-1000000);
                    cm.gainItem(2041332, 1);
                    cm.sendNext("�һ��ɹ�");
                    cm.dispose();
                }

            }
        }
    }
}
