
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
            text += "#e#b��ӭ����#r��BOSS������#b\r\n"
            text += "\r\n";
            //text += "��ǰ��ֵ��" + cm.getPlayer().getBossLog("�ۼƳ�ֵ����", 1) + "\r\n";
            //text += "  #L0#�ٻ�����  #b>>>>>   #v 4001017##b#z 4001017#*1#k#l\r\n\r\n";
            text += "  #r#L1#�ٻ�����    #b>>>>>   #v 3700010##b#z 3700010#*1#k#l\r\n\r\n";
			text += "  #r#L2#�ٻ�����    #b>>>>>   #v 3700010##b#z 3700010#*1#k#l\r\n\r\n";
			text += "  #r#L3#�ٻ�����    #b>>>>>   #v 3700000##b#z 3700000#*1#k#l\r\n\r\n";
			text += "  #r#L4#�ٻ�����    #b>>>>>   #v 3700000##b#z 3700000#*1#k#l\r\n\r\n";
            //text += "  #L2#�����뿪#l\r\n";

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
                    cm.getMap().spawnZakum(673, 94)
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
                    cm.dispose()
                }
            } else if (selection == 1) {
                if (cm.haveItem(3700010, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
				} else if (!cm.haveItem(2041213, 30)) {
                        cm.sendOk("�뽫#v 2041213##b#z 2041213##k���뱳����");
                        cm.dispose();
                } else if (cm.getPlayer().getBossLog("����", 0) >= 1) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(2041213, -30);
                    cm.spawnMonster(9600066, 1);
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
					cm.����(1,"["+cm.getName()+"]�ٻ��˸�������ҿ�ȥ����");
                    cm.dispose()
                }
		    } else if (selection == 2) {
                if (cm.haveItem(3700010, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
				} else if (!cm.haveItem(2041213, 30)) {
                        cm.sendOk("�뽫#v 2041213##b#z 2041213##k���뱳����");
                        cm.dispose();
                } else if (cm.getPlayer().getBossLog("����", 0) >= 1) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(2041213, -30);
                    cm.spawnMonster(9600063, 1);
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
					cm.����(1,"["+cm.getName()+"]�ٻ������ޣ���ҿ�ȥ����");
                    cm.dispose()
                }
			
			} else if (selection == 3) {
                if (cm.haveItem(3700000, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
				} else if (!cm.haveItem(2041213, 30)) {
                        cm.sendOk("�뽫#v 2041213##b#z 2041213##k���뱳����");
                        cm.dispose();
                } else if (cm.getPlayer().getBossLog("����", 0) >= 2) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(2041213, -30);
                    cm.spawnMonster(9600066, 1);
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
					cm.����(1,"["+cm.getName()+"]�ٻ������ޣ���ҿ�ȥ����");
                    cm.dispose()
                }
				
			} else if (selection == 4) {
                if (cm.haveItem(3700000, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
				} else if (!cm.haveItem(2041213, 30)) {
                        cm.sendOk("�뽫#v 2041213##b#z 2041213##k���뱳����");
                        cm.dispose();
                } else if (cm.getPlayer().getBossLog("����", 0) >= 2) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(2041213, -30);
                    cm.spawnMonster(9600063, 1);
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
					cm.����(1,"["+cm.getName()+"]�ٻ������ޣ���ҿ�ȥ����");
                    cm.dispose()
                }
            } else if (selection == 2) {
                cm.warp(910000000, 1);
                cm.dispose()
            }
        }
    }
}
