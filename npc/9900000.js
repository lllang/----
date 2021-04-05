
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
            text += "#e#b��ӭ����#r����޴�����#b\r\n"
            text += "\r\n";
            //text += "��ǰ��ֵ��" + cm.getPlayer().getBossLog("�ۼƳ�ֵ����", 1) + "\r\n";
            text += "  #r#L0#ǧ�����#b>>>>>   ����#v 4000040##b����Ҫ��#v 1112422#1��#k#l\r\n\r\n";
            text += "  #r#L1#�������#b>>>>>   ����#v 4000176##b����Ҫ��#v 1112426#1��#k#l\r\n\r\n";
			text += "  #r#L2#ʮ�������#b>>>>> ����#v 4002001##b����Ҫ��#v 1112586#1��#k#l\r\n\r\n";
			text += "  #r#L3#���������#b>>>>> ����#v 4000175##b����Ҫ��#v 1112932#1��#k#l\r\n\r\n";
            text += "  #L4#�����뿪#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
			if (cm.getMonsterCount(108010501)>=20) {
				cm.sendOk("������10ֻ���������Ժ������ٻ�");
				cm.dispose();
				return;
			}
            if (selection == 0) {
                if (!cm.haveItem(4000040, 1)) {
                    cm.sendOk("�뽫#v 4000040##b#z 4000040##k���뱳����");
                    cm.dispose();
				} else if (!cm.haveItem(1112422, 1)) {
                    cm.sendOk("�뽫#v 1112422##b#z 1112422##k���뱳����");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("����", 0) >= 999) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(4000040, -1);
                    cm.spawnMobOnMap(8300007, 1, 400, 47, 108010501, 45000000000);
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
                    cm.dispose()
                }
            } else if (selection == 1) {
                if (!cm.haveItem(4000176, 1)) {
                    cm.sendOk("�뽫#v 4000176##b#z 4000176##k���뱳����");
                    cm.dispose();
				} else if (!cm.haveItem(1112426, 1)) {
                    cm.sendOk("�뽫#v 1112426##b#z 1112426##k���뱳����");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("����", 0) >= 999) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(4000176, -1);
                    cm.spawnMobOnMap(8860000, 1, 400, 47, 108010501, 125000000000);
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
                    cm.dispose()
                }
			} else if (selection == 2) {
                if (!cm.haveItem(4002001, 1)) {
                    cm.sendOk("�뽫#v 4002001##b#z 4002001##k���뱳����");
                    cm.dispose();
				} else if (!cm.haveItem(1112586, 1)) {
                    cm.sendOk("�뽫#v 1112586##b#z 1112586##k���뱳����");
                    cm.dispose();
                } else {
					cm.gainItem(4002001, -1);
                    cm.spawnMobOnMap(8910100, 1, 400, 47, 108010501, 350000000000);//���
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
                    cm.dispose()
                }
			} else if (selection == 3) {
                 if (!cm.haveItem(4000175, 1)) {
                    cm.sendOk("�뽫#v 4000175##b#z 4000175##k���뱳����");
                    cm.dispose();
				} else if (!cm.haveItem(1112932, 1)) {
                    cm.sendOk("�뽫#v 1112932##b#z 1112932##k���뱳����");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("����", 0) >= 999) {
                    cm.sendOk("�����ٻ��Ѵﵽ���ޣ��޷��ٻ���");
                    cm.dispose();
                } else {
					cm.gainItem(4000175, -1);
                    cm.spawnMobOnMap(8870000, 1, 400, 47, 108010501, 800000000000);//ϣ��
                    cm.getPlayer().setBossLog("����", 0);
                    cm.sendOk("�ٻ��ɹ���");
                    cm.dispose()
                }
            } else if (selection == 4) {
                cm.warp(910000000, 1);
                cm.dispose()
            }
        }
    }
}
