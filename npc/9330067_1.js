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
            var text = "��ʿ���Ѿ�����200ת�����𣿣��Ƿ�Ҫͻ�Ƽ��ޣ�\r\n\r\n";
			text += "				��ǰת����#r["+cm.getPlayer().getBossLog("ת��",1)+"]��#k\r\n\r\n";
            text += "1.�ȼ��ﵽ #r250#k����������Ҫӵ��#v3700039��\r\n\r\n";
            text += "2.��Ҫͻ�Ʋ��ϣ�#v4000463#x300 #v4310038#x300 #v4000313#x500 #v3992025#x1 #v4031311#x19999 \r\n";
            text += "3.#bְҵ/����#k���䣬�ȼ������� #r150 #k����\r\n";
			text += "4.������#v4442100# #b#z4442100##k1��.#v4442000# #b#z4442000##k1��\r\n\r\n";
			text += "5.#b����ֵ#kÿ�����ã�#r�̶�750#k��#r����100#k���ת������\r\n";
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (cm.getPlayer().getLevel() != 250) {
				cm.sendOk("#r�ܱ�Ǹ����������250������ת����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getBossLog("ת��",1) >= 210) {
				cm.sendOk("��ǰת���ﵽ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getBossLog("ת��",1) < 200) {
				cm.sendOk("��ʿ����ת����������200�Σ���������");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getRemainingAp() != 0 ) {
				cm.sendOk("��Ǹ����������ֵδ���䣬���ȼ������ת����");
				cm.dispose();
				return;
			} else if (cm.haveItem(4000463, 300) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
			} else if (cm.haveItem(4310038, 300) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
			} else if (cm.haveItem(3992025, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
			} else if (cm.haveItem(4000313, 500) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
			} else if (cm.haveItem(4031311, 19999) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
			} else if (cm.haveItem(3700039, 1) == false) {
                    cm.sendOk("����δ��ô�����ƺš�");
                    cm.dispose();
		
					
				} else {
					cm.getChar().setLevel(151);
					cm.gainItem(4000463,-300);//�۳�����
					cm.gainItem(4310038,-300);//�۳�����
					cm.gainItem(3992025,-1);//�۳�����
					cm.gainItem(4000313,-500);//�۳�����
					cm.gainItem(4031311,-19999);//�۳�����
					cm.gainItem(4442100,1);//ת������
					cm.gainItem(4442000,1);//ת������
					cm.getPlayer().setBossLog("ת��",1);
					cm.gainAp(750+90*cm.getPlayer().getBossLog("ת��",1));
					cm.getPlayer().getStat().setStr(4);
					cm.getPlayer().getStat().setDex(4);
					cm.getPlayer().getStat().setInt(4);
					cm.getPlayer().getStat().setLuk(4);
					cm.getChar().fakeRelog();
					cm.sendNext("ת���ɹ�!��["+cm.getPlayer().getBossLog("ת��",1)+"]��ת��");
					cm.����(2, "��ң�[" + cm.getName() + "]�ɹ�ͻ���˵�["+cm.getPlayer().getBossLog("ת��",1)+"]��ת��ͻ����������켫�ޣ�");
					cm.dispose();
					
			
            }
        }
    }
}
