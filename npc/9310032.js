var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
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
                text += "�������Ƿ�Ҷ�н飡\r\n\r\n";
                text += "" + ��ɫ��ͷ + "#L1##b#eʹ��#v4032733# ��һ�����һ�����Ҷ#v4001126#=100��#l \r\n\r\n"//3
				text += "" + ��ɫ��ͷ + "#L5##b#eʹ��#v4032733# ��һ�٣��һ�����Ҷ#v4001126#=10000��#l \r\n\r\n"//3
				text += "" + ��ɫ��ͷ + "#L2##b#eʹ��#v4310080# ��һ�����һ�����Ҷ#v4001126#=8888��#l \r\n\r\n"//3
				text += "" + ��ɫ��ͷ + "#L4##b#eʹ��#v4001126# ��9000�����һ�����Ҷ#v4310080#=1��#l \r\n\r\n"//3
				text += "" + ��ɫ��ͷ + "#L3##b#eʹ��#v4310080# ���������һ�����Ҷ#v4001126#=23500��#l \r\n\r\n"//3
			cm.sendSimple(text);
            }
			
			
			} else if (selection == 13) {
                if(cm.getmoneyb() >= 20){
				 cm.setmoneyb(-20);	
				 cm.getPlayer().setBossLog("���ѻ���",1,20);
				//cm.increaseCharacterSlots(0);//����۳���ȯ
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[��ɫλ1��]");
            cm.dispose();
			}else{
            cm.sendOk("��ֵ�Ҳ����޷�������");
            cm.dispose();
               }
			   
			   
        } else if (selection == 1) {
                if (cm.haveItem(4032733,1)) {
                cm.gainItem(4032733,-1);
				cm.gainItem(4001126,100);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ڷ�Ҷ�н�һ�[��ɫ��Ҷ100��]����л����~");
            cm.dispose();
			}else{
            cm.sendOk("��Ҷ�����޷�������");
            cm.dispose();
			}
		} else if (selection == 5) {
                if (cm.haveItem(4032733,100)) {
                cm.gainItem(4032733,-100);
				cm.gainItem(4001126,10000);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ڷ�Ҷ�н�һ�[��ɫ��Ҷ10000��]����л����~");
            cm.dispose();
			}else{
            cm.sendOk("��Ҷ�����޷�������");
            cm.dispose();
			}	
        } else if (selection == 2) {
                if (cm.haveItem(4310080,1)) {
                cm.gainItem(4310080,-1);
				cm.gainItem(4001126,8888);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ڷ�Ҷ�н�һ�[��ɫ��Ҷ8888��]����л����~~");
            cm.dispose();
			}else{
            cm.sendOk("��Ҷ�����޷�������");
            cm.dispose();
			}
        } else if (selection == 3) {
                if (cm.haveItem(4310080,3)) {
                cm.gainItem(4310080,-3);
				cm.gainItem(4001126,23500);
cm.����(1, "[" + cm.getPlayer().getName() + "]�ڷ�Ҷ�н�һ�[��ɫ��Ҷ16000��]����л����~~");
            cm.dispose();
			}else{
            cm.sendOk("��Ҷ�����޷�������");
            cm.dispose();
			}
        } else if (selection == 4) {
                if (cm.haveItem(4001126,9000)) {
                cm.gainItem(4001126,-9000);
				cm.gainItem(4310080,1);
cm.����(1, "[" + cm.getPlayer().getName() + "]ʹ��9000����Ҷ���ɹ��һ�8888��Ҷ���ӣ���л����~");
            cm.dispose();
			}else{
            cm.sendOk("��Ҷ�����޷�������");
            cm.dispose();
			}
        } else if (selection == 5) {
                if (cm.haveItem(4001126,1000)) {
                cm.gainItem(4001126,-1000);
				cm.gainItem(5510000,10);
cm.����(1, "[" + cm.getPlayer().getName() + "]��Ҷ�һ�[ԭ�ظ���10��]����л����~");
            cm.dispose();
			}else{
            cm.sendOk("��Ҷ�����޷�������");
            cm.dispose();
			}
			
			} else if (selection == 14) {
                if(cm.getPlayer().getNX() >= 10000){
                    cm.gainNX(-10000);
				 //cm.getPlayer().setBossLog("���ѻ���",1,30);
				cm.gainItem(5211060,1,168);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[�������鿨��168СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 6) {
                if (cm.getPlayer().getNX() >= 300) {
				cm.gainNX(-300);
				cm.gainItem(5360014,1,10);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���10СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 7) {
                if (cm.getPlayer().getNX() >= 600) {
				cm.gainNX(-600);
				cm.gainItem(5360014,1,24);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���24СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 8) {
                if (cm.getPlayer().getNX() >= 2000) {
				cm.gainNX(-2000);
				cm.gainItem(5360014,1,168);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���7��Ȩ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 9) {
                if (cm.getPlayer().getNX() >= 1666) {
				cm.gainNX(-1666);
				cm.gainItem(5360014,1,24);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���24СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("���þ����޷�������");
            cm.dispose();
			}
        } else if (selection == 10) {
                if (cm.getPlayer().getDY() >= 600) {
				cm.gainDY(-600);
				cm.gainItem(5360014,1,3);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���3СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("���þ����޷�������");
            cm.dispose();
			}
		}
    }
}


