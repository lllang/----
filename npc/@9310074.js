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
   	    var text= "\t\t\t\t"+Ǧ��ͼ��+" [�����سɾ�һ�] "+Ǧ��ͼ��+"\r\n\r\n10���سɱҶһ�һ�����������سɾ�\r\n";
		text += "#L1#���ģ�#v4310196#*10���һ���#v2043003#��#l\r\n";
		
		text += "#L2#���ģ�#v4310196#*10���һ���#v2043103#��#l\r\n";
		
		text += "#L3#���ģ�#v4310196#*10���һ���#v2043203#��#l\r\n";
		
		text += "#L4#���ģ�#v4310196#*10���һ���#v2043303#��#l\r\n";
		
		text += "#L5#���ģ�#v4310196#*10���һ���#v2043703#��#l\r\n";
		
		text += "#L6#���ģ�#v4310196#*10���һ���#v2043803#��#l\r\n";
		
		text += "#L7#���ģ�#v4310196#*10���һ���#v2044003#��#l\r\n";
		
		text += "#L8#���ģ�#v4310196#*10���һ���#v2044103#��#l\r\n";
		
		text += "#L9#���ģ�#v4310196#*10���һ���#v2044203#��#l\r\n";
		
		text += "#L10#���ģ�#v4310196#*10���һ���#v2044303#��#l\r\n";
		
		text += "#L11#���ģ�#v4310196#*10���һ���#v2044403#��#l\r\n";
		
		text += "#L12#���ģ�#v4310196#*10���һ���#v2044503#��#l\r\n";
		
		text += "#L13#���ģ�#v4310196#*10���һ���#v2044603#��#l\r\n";
		
		text += "#L14#���ģ�#v4310196#*10���һ���#v2044703#��#l\r\n";
		
		text += "#L15#���ģ�#v4310196#*10���һ���#v2044815#��#l\r\n";
		
		text += "#L16#���ģ�#v4310196#*10���һ���#v2044908#��#l\r\n";

		cm.sendSimple (text);    
	} else if (status == 1) {
		if (selection == 1) { 
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4310044,-200);
				cm.gainItem(2043003,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 2) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4310044,-700);
				cm.gainItem(2043103,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 3) {
			if(cm.haveItem(4310196,10)){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(2043203,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 4) {
			if(cm.haveItem(4310196,10)){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4310143,-99);
				//cm.gainItem(2044003,-1);
				cm.gainItem(2043303,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 5) { 
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(2043703,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 6) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				//cm.gainItem(4001322,-888);
				//cm.gainItem(4310143,-99);
				cm.gainItem(2043803,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 7) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044003,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 8) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044103,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 9) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044203,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 10) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044303,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();	
		} else if (selection == 11) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044403,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 12) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044503,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 13) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044603,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 14) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044703,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 15) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044815,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();	
		} else if (selection == 16) {
			if(cm.haveItem(4310196,10) ){
				cm.gainItem(4310196,-10);
				cm.gainItem(2044908,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		}
		
	}
}
}