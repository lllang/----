
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
            text += "#e#b��ӭ����#r��BOSS֮�ҡ�#b��������ÿ�չ�����ս10��BOSS��\r\n"
            text += "Ҫ��ս������-��ɮBOSS#r��Ҫ ��ֵ���� �ﵽ300Ŷ��\r\n";
            text += "��ǰ��ֵ��" + cm.getPlayer().getBossLog("�ۼƳ�ֵ����", 1) + "\r\n";
            text += "  #L0#����-��ɮ  #b>>>>>>>       ����300��ֵ����#l\r\n\r\n";
            text += "  #L1#�����뿪#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
               if (cm.haveItem(4000019, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("������ɮ", 0) >= 10) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(4000019, -1);
                    cm.spawnMonster(9600025, 1);
                    cm.getPlayer().setBossLog("������ɮ", 0);
                    cm.sendOk("�ٻ��ɹ���");
                    cm.dispose()
                }
            } else if (selection == 1) {
                    cm.warp(910000000, 1);
                    cm.dispose()
                }
            }
        }
    }
