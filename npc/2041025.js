
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
            text += "#e#b��ӭ����#r��������̨��#bBOSS����\r\n"
            text += "\r\n";
            //text += "��ǰ��ֵ��" + cm.getPlayer().getBossLog("�ۼƳ�ֵ����", 1) + "\r\n";
            //text += "  #L0#�ٻ�����  #b>>>>>>>       #v 4001017##b#z 4001017#*1#k#l\r\n\r\n";
            text += "  #r#L1#�ٻ�����  #b>>>>>>>       #v 4031179##b#z 4031179#*1#k#l\r\n\r\n";
            text += "  #L2#�����뿪#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.haveItem(4001017, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("����", 0) >= 999) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(4001017, -1);
                    cm.getMap().spawnZakum(-25, -230)
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
                    cm.dispose()
                }
            } else if (selection == 1) {
                if (cm.haveItem(4031179, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("����", 0) >= 999) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(4031179, -1);
                    cm.spawnMonster(8500000, 1);
                    cm.getPlayer().setBossLog("����", 0);
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
