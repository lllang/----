var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {


    if (mode == -1) {
        cm.dispose();

    } else if (mode == 0) {
        cm.dispose();

    } else {    
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var text = "��Ҫת��������������Ҫ��\r\n\r\n";
			text += "				��ǰת����#r["+cm.getPlayer().getBossLog("ת��",1)+"]�η�ӡ100ת#k\r\n\r\n";
            text += "1.�ȼ��ﵽ #r250#k����\r\n";
            text += "2.��Ҫ׼��ת�����ϣ�#v4000463#x50 #v4002001#���1�� \r\n";
            text += "3.#bְҵ/����#k���䣬�ȼ������� #r150 #k����\r\n";
			text += "4.#b����#v2614000##k �ƹ�ʯ3�� ��\r\n";
			text += "5.#b����ֵ#kÿ�����ã�#r�̶�750#k��#r����80#k���ת������\r\n";
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (cm.getPlayer().getLevel() != 250) {
				cm.sendOk("#r�ܱ�Ǹ����������250������ת����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getBossLog("ת��",1) >= 100) {
				cm.sendOk("��ǰת���ﵽ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getRemainingAp() != 0 ) {
				cm.sendOk("��Ǹ����������ֵδ���䣬���ȼ������ת����");
				cm.dispose();
				return;
			} else if (cm.haveItem(4000463,50)) {
					cm.getChar().setLevel(151);
					cm.gainItem(4000463,-50);//�۳�����
					cm.gainItem(4002001,-1);//ת������
					cm.gainItem(2614000,3);//ת������
					cm.getPlayer().setBossLog("ת��",1);
					cm.gainAp(750+80*cm.getPlayer().getBossLog("ת��",1));
					cm.getPlayer().getStat().setStr(4);
					cm.getPlayer().getStat().setDex(4);
					cm.getPlayer().getStat().setInt(4);
					cm.getPlayer().getStat().setLuk(4);
					cm.getChar().fakeRelog();
					cm.sendNext("ת���ɹ�!��["+cm.getPlayer().getBossLog("ת��",1)+"]��ת��");
					cm.����(2, "��ң�[" + cm.getName() + "]��["+cm.getPlayer().getBossLog("ת��",1)+"]��ת���ɹ���");
					cm.dispose();
					return;
			} else {
					cm.sendOk("���߲����޷�ת��");
					cm.dispose();
            }
        }
    }
}
