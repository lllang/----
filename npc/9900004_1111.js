var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }		
			text +="              #e#d�� ð �� �� �� �� �� �� ��#d#k#n             \r\n "
			text +=" #d- ��ǰ����ʱ�䣺#r"+cm.getGamePoints()+"#d ����\r\n "
			//text +="#L1##r��ȡ���ù�Ӷ���ˣ�#v5030001# x1 �г���̯#l\r\n\r\n"
            if(cm.getGamePoints() >= 60 && cm.getAccountLog("���߽���_1") == 0){
				text += "#L2##r����ʱ���Ѵ�ɣ�����ȡ������#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 60 && cm.getAccountLog("���߽���_1") > 0){
					text += ""
			} else {
				text += "  #b����ʱ�䲻�� #r60#b ���ӣ��޷���ȡ������\r\n\r\n"
			}		
		    if(cm.getGamePoints() >= 120 && cm.getAccountLog("���߽���_2") == 0){
				text += "#L3##r����ʱ���Ѵ�ɣ�����ȡ������#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 120 && cm.getAccountLog("���߽���_2") > 0){
					text += ""
				} else {
					text += "  #b����ʱ�䲻�� #r120#b ���ӣ��޷���ȡ������\r\n\r\n"
			}
			if(cm.getGamePoints() >= 180 && cm.getAccountLog("���߽���_3") == 0){
				text += "#L4##r����ʱ���Ѵ�ɣ�����ȡ������#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 180 && cm.getAccountLog("���߽���_3") > 0){
					text += ""
				} else {
					text += "  #b����ʱ�䲻�� #r180#b ���ӣ��޷���ȡ������\r\n\r\n"
			}
			if(cm.getGamePoints() >= 240 && cm.getAccountLog("���߽���_4") == 0){
				text += "#L5##r����ʱ���Ѵ�ɣ�����ȡ������#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 240 && cm.getAccountLog("���߽���_4") > 0){
					text += ""
				} else {
					text += "  #b����ʱ�䲻�� #r240#b ���ӣ��޷���ȡ������\r\n\r\n"
			}
			if(cm.getGamePoints() >= 360 && cm.getAccountLog("���߽���_5") == 0){
				text += "#L6##r����ʱ���Ѵ�ɣ�����ȡ������#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 360 && cm.getAccountLog("���߽���_5") > 0){
					text += ""
				} else {
					text += "  #b����ʱ�䲻�� #r360#b ���ӣ��޷���ȡ������\r\n\r\n"
			}
			if(cm.getGamePoints() >= 420 && cm.getAccountLog("���߽���_6") == 0){
				text += "#L7##r����ʱ���Ѵ�ɣ�����ȡ������#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 420 && cm.getAccountLog("���߽���_6") > 0){
					text += ""
				} else {
					text += "  #b����ʱ�䲻�� #r420#b ���ӣ��޷���ȡ������\r\n\r\n"
			}
			if(cm.getGamePoints() >= 666 && cm.getAccountLog("���߽���_7") == 0){
				text += "#L8##r����ʱ���Ѵ�ɣ�����ȡ������#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 666 && cm.getAccountLog("���߽���_7") > 0){
					text += ""
				} else {
					text += "  #b����ʱ�䲻�� #r666#b ���ӣ��޷���ȡ������\r\n\r\n"
			}
			if(cm.getGamePoints() >= 999 && cm.getAccountLog("���߽���_8") == 0){
				text += "#L9##r����ʱ���Ѵ�ɣ�����ȡ������#l\r\n\r\n"
			} else if(cm.getGamePoints() >= 999 && cm.getAccountLog("���߽���_8") > 0){
					text += ""
				} else {
					text += "  #b����ʱ�䲻�� #r999#b ���ӣ��޷���ȡ������\r\n\r\n"
			}
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.haveItem(5030001, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else if (cm.haveItem(5030000, 1)){
            cm.sendOk("���Ѿ���ȡ���ˡ��޷�������ȡ��");
            cm.dispose();
			}else{
			cm.gainItem(5030001, 1);//
			//cm.setAccountLog("")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ���ù�Ӷ���ˣ�");
            cm.dispose();
			}
        } else if (selection == 2) {
			cm.gainMeso(+1000000);
			cm.gainNX(+1000);
			cm.setAccountLog("���߽���_1")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��60�������߽�����");
            cm.dispose();
        } else if (selection == 3) {
			cm.gainNX(+2000);
			cm.gainMeso(+15000000);
			//cm.gainItem(4001126, 50)
			cm.setAccountLog("���߽���_2")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��120�������߽�����");
            cm.dispose();
        } else if (selection == 4) {
			cm.gainNX(+3000);
			cm.gainMeso(+20000000);
			//cm.gainItem(4001126, 100)
			cm.setAccountLog("���߽���_3")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��180�������߽�����");
            cm.dispose();
        } else if (selection == 5) {
			cm.gainNX(+4000);
			cm.gainMeso(+25000000);
			cm.setAccountLog("���߽���_4")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��240�������߽�����");
            cm.dispose();
        } else if (selection == 6) {
			cm.gainNX(+5000);
			cm.gainMeso(+30000000);
			cm.gainItem(2041332, 1);//�����
			cm.setAccountLog("���߽���_5")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��360�������߽�����");
            cm.dispose();

		
		} else if (selection == 7) {
			cm.gainItem(2047954, 1);//�����
			cm.gainItem(2533000, 1);//�����
			cm.gainNX(+6000);
			cm.setAccountLog("���߽���_6")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��420�������߽�����");
			cm.dispose();
		} else if (selection == 8) {
			cm.gainItem(2614000, 1);//�¹���
			cm.gainItem(2613008, 1);//�����
			cm.gainNX(+10000);
			cm.setAccountLog("���߽���_7")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��666�������߽�����");
			cm.dispose();
		} else if (selection == 9) {
			cm.gainNX(+50000);
			cm.gainMeso(+100000000);
			cm.gainItem(2533000, 3);//ף����
			cm.gainItem(2613008, 1);//�����
			cm.gainItem(2041226, 3);//糺��
			cm.gainItem(2047954, 3);//�����
			cm.gainItem(2531000, 5);//������
			cm.gainItem(2614000, 3);//�¹���
			cm.setAccountLog("���߽���_8")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��999�������߽�����");
			cm.dispose();
		} else if (selection == 10) {
			cm.gainItem(2022428, 1);//�����
			cm.gainItem(4031217, 1);//�ƽ�Կ��			
			cm.setAccountLog("���߽���_9")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��666�������߽�����");
			cm.dispose();
		} else if (selection == 11) {
			cm.gainItem(4000487, 5);//��Ӱ��
			cm.gainItem(4031794, 20);//�����
			cm.gainItem(2531006, 1);//������
			cm.gainItem(2450000, 1);//��Сʱ˫��
			cm.gainItem(2047954, 1);//������Ʊ
			cm.setAccountLog("���߽���_10")
            cm.sendOk("��ȡ�����ɹ���");
			cm.����(2,"��ң�["+cm.getName()+"]��ȡ��1000�������߽�����");
            cm.dispose();
		}
    }
}


