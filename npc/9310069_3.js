var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var nx;
var ����ID = 3700036;
function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            text = "#e#d��ȡ#v1142574#��Ů�������Ⱥ����\r\n";
            text += "ѫ������:��ȫ����+50�����ȯ3W����2E��\r\n";
            cm.sendYesNo(text);
        } else if (a == 1) {
            if (cm.haveItem(����ID, 1) == false) {
                cm.sendOk("���߲��㣬�޷���ȡ");
                cm.dispose();
            } else {
                cm.gainItem(����ID, -1);
                cm.gainItem(1142574, 50, 50, 50, 50, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0);
                cm.gainMeso(200000000);
                cm.gainNX(30000);
                cm.sendOk("��ȡ�ɹ���");
                cm.dispose();
            }
        }
    }
}
