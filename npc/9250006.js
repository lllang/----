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
            var textz = "              #e��ӭ����ð�յ����׼���#k\r\n\r\n";

            textz += "#L0##d#v2048600#�ɹ��ʽ���������#v2047926##l\r\n\r\n";

            //textz += "#L1##d��Ʊ�һ�����#l\r\n\r\n";

            textz += "#L1##d#v2047933#�ٷְٽ���������#v2047933##l\r\n\r\n";

            cm.sendNext(textz);

        } else if (status == 1) {
            if (selection == 0) {
                cm.dispose();
                cm.openNpc(9250006, 1)

            } else if (selection == 1) {
                cm.dispose();
                cm.openNpc(9250006, 2)
				
			} else if (selection == 4) {
                cm.dispose();
                cm.openNpc(2070000, 3)

            } else if (selection == 2) {
                if (cm.haveItem(2070000, 3) == false) {
                    var textz = "��ǿBOSS��Ʊ�ٻ����ϣ�����Ϊ#v5252001##z5252001#x1\r\n\r\n";

            textz += "������˶���Ҫ��Ʒ��ע�ⱳ���Ƿ������²��Ჹ��\r\n\r\n";

            textz += "1.#v4001084##c4001084#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "2.#v4001083##c4001083#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "4.���"+cm.getMeso()+"/66666666\r\n\r\n";

            cm.sendNext(textz);
                    cm.dispose();
                } else if (cm.haveItem(4001083, 1) == false) {
                    var textz = "��ǿBOSS��Ʊ�ٻ����ϣ�����Ϊ#v5252001##z5252001#x1\r\n\r\n";

            textz += "������˶���Ҫ��Ʒ��ע�ⱳ���Ƿ������²��Ჹ��\r\n\r\n";

            textz += "1.#v4001084##c4001084#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "2.#v4001083##c4001083#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "4.���"+cm.getMeso()+"/66666666\r\n\r\n";

            cm.sendNext(textz);
                } else if (cm.getPlayer().getMeso() < 66666666) {
                    var textz = "��ǿBOSS��Ʊ�ٻ����ϣ�����Ϊ#v5252001##z5252001#x1\r\n\r\n";

            textz += "������˶���Ҫ��Ʒ��ע�ⱳ���Ƿ������²��Ჹ��\r\n\r\n";

            textz += "1.#v4001084##c4001084#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "2.#v4001083##c4001083#/1 �����Ʒ������#r ����#k ���ʻ��\r\n\r\n";

            textz += "4.���"+cm.getMeso()+"/66666666\r\n\r\n";

            cm.sendNext(textz);
                } else {
                    cm.gainItem(4001084, -1);
                    cm.gainItem(4001083, -1);
                    cm.gainMeso(-66666666);
                    cm.gainItem(5252001, 1);
                    cm.sendNext("�һ��ɹ�");
                    cm.dispose();
                }

            }
        }
    }
}
