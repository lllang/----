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
                text += "����������Թ���˫������Ŷ��\r\n\r\n";
                text += "" + ��ɫ��ͷ + "#L1##b#e#v5360016# ��һ��Ȩ����Ҫ�����=10000��#l \r\n\r\n"//3			
                text += "" + ��ɫ��ͷ + "#L2##r#e#v5210003# ��һ��Ȩ����Ҫ�����=5000��#l\r\n\r\n"//3
				text += "" + ��ɫ��ͷ + "#L3##b#e#v5210005# ��һ��Ȩ����Ҫ�����=5000��#l \r\n\r\n"//3
				//text += "" + ��ɫ��ͷ + "#L4##r#e#v5211060# ��һ��Ȩ����Ҫ����Ҷ#v4001126#=8000��#l\r\n\r\n"//3
		   // text += "" + ��ɫ��ͷ + "#L13##r#e����#r��ɫλһ����Ҫ����ֵ��20��#l \r\n\r\n"//3
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
                if (cm.getPlayer().getNX() >= 10000) {
				cm.gainNX(-10000);
				cm.gainItem(5360016,1,1);
cm.����(2, "[" + cm.getPlayer().getName() + "]�����[˫�����ʿ���1��Ȩ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 2) {
                if (cm.getPlayer().getNX() >= 5000) {
				cm.gainNX(-5000);
				cm.gainItem(5210003,1,1);
cm.����(2, "[" + cm.getPlayer().getName() + "]�����[˫�����鿨��1��Ȩ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 3) {
                if (cm.getPlayer().getNX() >= 5000) {
				cm.gainNX(-5000);
				cm.gainItem(5210005,1,1);
cm.����(2, "[" + cm.getPlayer().getName() + "]��Ҷ�һ�[˫�����鿨��1��Ȩ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 4) {
                if (cm.haveItem(4001126,8000)) {
                cm.gainItem(4001126,-8000);
				cm.gainItem(5211060,1,1);
cm.����(2, "[" + cm.getPlayer().getName() + "]��Ҷ�һ�[�������鿨��1��Ȩ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
            cm.dispose();
			}
        } else if (selection == 5) {
                if (cm.getPlayer().getNX() >= 150) {
				cm.gainNX(-150);
				cm.gainItem(5360014,1,3);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�����[˫�����ʿ���3СʱȨ��]���������~");
            cm.dispose();
			}else{
            cm.sendOk("������޷�������");
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


