
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
            text += "#e#b��ӭ����#r�ﳬ�����ǡ�#b��������ÿ�չ�����ս10��BOSS��\r\n"
            text += "Ҫ��ս��BOSS#r��Ҫ ��ֵ���� �ﵽ3000Ŷ��\r\n";
            text += "��ǰ��ֵ��" + cm.getPlayer().getBossLog("�ۼƳ�ֵ����", 1) + "\r\n";
            text += "  #L0#��������  #b>>>>>>>       ����3000��ֵ����#l\r\n\r\n";
            text += "  #r#L1#Ƥ��Ŭ˹  #b>>>>>>>       ����3000��ֵ����#l\r\n\r\n";
            text += "  #L2#�����뿪#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getPlayer().getBossLog("�ۼƳ�ֵ����", 1) < 3000) {
                    cm.sendOk("�����ֵ���ֲ��㣬�޷��ٻ���");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("��������", 0) >= 10) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
                    cm.spawnMonster(8810026, 1);
                    cm.getPlayer().setBossLog("��������", 0);
                    cm.sendOk("�ٻ��ɹ���");
                    cm.dispose()
                }
            } else if (selection == 1) {
                if (cm.getPlayer().getBossLog("�ۼ���������", 1) < 3000) {
                    cm.sendOk("�����ֵ���ֲ��㣬�޷��ٻ���");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("Ƥ��Ŭ˹", 0) >= 10) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
                    cm.spawnMonster(8520000, 1);
                    cm.getPlayer().setBossLog("Ƥ��Ŭ˹", 0);
                    cm.sendOk("�ٻ��ɹ���");
                    cm.dispose()
                }
            } else if (selection == 2) {
                cm.warp(910000000, 1);
                cm.dispose()
            }
        }
    }
}