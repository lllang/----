var ��ɫ˫��ͷ = "#fUI/UIWindow.img/Quest/icon9/0#";
var ��ɫ˫��ͷ = "#fUI/UIWindow.img/Quest/icon8/0#";
var ѡ�����ͼ�� = "#fUI/UIWindow.img/QuestIcon/3/0#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var Ǧ��ͼ�� = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var ������ = "#fUI/StatusBar/BtClaim/normal/0#";
var H��ĸ = "#fUI/CashShop/CSEffect/effect/1#";
var ���ͼ�� = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var �һ����� = "1000";
var ������� = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";
function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		return;
		}
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

	if (status == 0) {
   	    var text= "\t\t\t\t"+Ǧ��ͼ��+" [FFNװ���һ�] "+Ǧ��ͼ��+"\r\n\r\nȫ����+100 ˫��+288����\r\n";
		text += "#L1#���ģ�#v1142343#*1�� #v4310044#200���һ�ȫ����+88��#v1142338#��#l\r\n";
		
		text += "#L2#���ģ�#v1142343#*1�� #v4310044#700���һ�ȫ����+120��#v1142398#��#l\r\n";
		
		text += "#L3#���ģ�#v4310044#2000���һ�ȫ����+158��#v1142609#��#l\r\n";
		
		text += "#L4#���ģ�#v4310044#4000���һ�ȫ����+188��#v1142344#��#l\r\n";
		
		//text += "#L5#���ģ�#v4031311#666���һ�ȫ����+20��#v1051487#��#l\r\n";
		
		//text += "#L6#���ģ�#v4031311#666���һ�ȫ����+20��#v1050418#��#l\r\n";

		cm.sendSimple (text);    
	} else if (status == 1) {
		if (selection == 1) { 
			if(cm.haveItem(1142343,1) && cm.haveItem(4310044,200)){
				cm.gainItem(1142343,-1);
				cm.gainItem(4310044,-200);
				cm.gainItem(1142338,88,88,88,88,500,500,88,88,88,88,88,88,88,88);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 2) {
			if(cm.haveItem(1142343,1) && cm.haveItem(4310044,700)){
				cm.gainItem(1142343,-1);
				cm.gainItem(4310044,-700);
				cm.gainItem(1102163,120,120,120,120,500,500,120,120,120,120,120,120,120,120);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 3) {
			if(cm.haveItem(4310044,2000)){
				cm.gainItem(4310044,-2000);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(1142609,158,158,158,158,500,500,158,158,158,158,158,158,158,158);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 4) {
			if(cm.haveItem(4310044,4000)){
				cm.gainItem(4310044,-4000);
				//cm.gainItem(4310143,-99);
				//cm.gainItem(1402214,-1);
				cm.gainItem(1142344,188,188,188,188,500,500,188,188,188,188,188,188,188,188);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 5) { 
			if(cm.haveItem(4031311,666)){
				cm.gainItem(4031311,-666);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(1051487,20,20,20,20,500,500,20,20,0,0,0,0,0,0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 6) {
			if(cm.haveItem(4031311,666)){
				cm.gainItem(4031311,-666);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(1050418,20,20,20,20,500,500,20,20,0,0,0,0,0,0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 7) {
			if(cm.haveItem(1462208,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1462208,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1462193,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 8) {
			if(cm.haveItem(1472230,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1472230,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1472214,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 9) {
			if(cm.haveItem(1482183,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1482183,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1482168,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 10) {
			if(cm.haveItem(1492194,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1492194,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1492179,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();	
		} else if (selection == 11) {
			if(cm.haveItem(1422156,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1422156,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1422140,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 12) {
			if(cm.haveItem(1422156,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1422156,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1312153,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 13) {
			if(cm.haveItem(1422156,1) && cm.haveItem(4001322,888) && cm.haveItem(4310143,99)){
				cm.gainItem(1422156,-1);
				cm.gainItem(4001322,-888);
				cm.gainItem(4310143,-99);
				cm.gainItem(1412135,100,100,100,100,500,500,288,288,100,100,100,100,100,100);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		}
		
	}
}
}