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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            //��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#L1##r������ȡ#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(2022336, 1)) {//�����ж��Ƿ�����������ӣ�����������ӣ�
                cm.gainItem(2022336, -1);
				cm.gainNX(0);//ɾ�������ڵ�����
                cm.gainDY(30000);//������þ�30000��
				cm.gainMeso(1000000);//���
				cm.gainItem(2000005, 50);//����ҩˮ50ƿ
				//cm.gainItem(4080000, 1);//������
				//cm.gainItem(4080100, 1);//�������
				cm.gainItem(1052550,1,72); //��������
				cm.gainItem(1003713,1,72); //��������
				cm.gainItem(1082493,1,72); //����ñ��
				cm.gainItem(1112404,15,15,15,15,0,0,0,0,0,0,0,0,0,0); //�����ָ
				cm.gainItem(1142358,5,5,5,5,0,0,0,0,0,0,0,0,10,10); //����ѫ������ɰ�
				//cm.gainItem(1002419,15,15,15,15,0,0,15,15,0,0,0,0,0,0,2);
                //cm.gainItem(5150001, 1);//����- ���ִ�������߼���Ա�� - �����ִ������������һ�εĻ�Ա��.���԰ѷ��ͱ任��Ը�������
                //cm.gainItem(5152001, 1);//����- ���ִ����������߼���Ա�� - �����ִ���������ҽԺ������һ�εĻ�Ա��.���԰����任����Ҫ������.
                cm.sendOk("��ȡ�ɹ���");		
                cm.����(3, "��ң�[" + cm.getName() + "]��ȡ������ð�յ����˴����һ�ݣ�");
                cm.dispose();
            } else {
                cm.sendOk("����أ���ȥ�ˣ���û�������������ô�򿪵ģ���");
                cm.dispose();
            }
        }
    }
}


