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

            textz += "#L2##װ������������ʯ�һ�#l\r\n\r\n";

            cm.sendNext(textz);

        } else if (status == 1) {
            if (selection == 0) {
                cm.dispose();
                cm.openNpc(9310060, 1)

            } else if (selection == 1) {
                cm.dispose();
                cm.openNpc(9310060, 2)

            } else if (selection == 2) {
                if (cm.haveItem(4031794, 15) == false) {
                    var textz = "װ����������������ϣ�����Ϊ#v4442001##z4442001#x1\r\n\r\n";

            textz += "#r������˶���Ҫ��Ʒ��ע�ⱳ���Ƿ������²��Ჹ��#k\r\n\r\n";

            textz += "1.#v4031794##c4031794#/15 �����Ʒ����ɱ#r Գ��#k ���ʻ��\r\n\r\n";

            textz += "2.#v4001083##c4001083#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "4.���"+cm.getMeso()+"/30000000\r\n\r\n";

            cm.sendNext(textz);
                    cm.dispose();
                } else if (cm.haveItem(4001083, 1) == false) {
                    var textz = "װ����������������ϣ�����Ϊ#v4442001##z4442001#x1\r\n\r\n";

            textz += "#r������˶���Ҫ��Ʒ��ע�ⱳ���Ƿ������²��Ჹ��#k\r\n\r\n";

            textz += "1.#v4031794##c4031794#/15 �����Ʒ����ɱ#r Գ��#k ���ʻ��\r\n\r\n";

            textz += "2.#v4001083##c4001083#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "4.���"+cm.getMeso()+"/30000000\r\n\r\n";

            cm.sendNext(textz);
                } else if (cm.getPlayer().getMeso() < 30000000) {
                    

            cm.sendNext(textz);
                } else {
                    cm.gainItem(4031794, -15);
                    cm.gainItem(4001083, -1);
                    cm.gainMeso(-30000000);
                    cm.gainItem(4442001, 1);
                    cm.sendNext("�һ��ɹ�");
                    cm.dispose();
                }

            }
        }
    }
}
