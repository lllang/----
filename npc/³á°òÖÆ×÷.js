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
   	    var text= "\t\t\t\t"+�������+" [�������ϵͳ] "+�������+"\r\n\r\n����Խ������Խ��\r\n";
		text += "#L1#���ģ�#v4310079#20��+#v4000464#20���һ�#v1102779#�ƽ�֮��+5#l\r\n";
		
		text += "#L2#���ģ�#v4310079#80��+#v4000464#80���һ�#v1102630#������ʹ+10#l\r\n";
		
		text += "#L3#���ģ�#v4310079#180��+#v4000464#180���һ�#v1102798#����֮��+15#l\r\n";

        text += "#L4#���ģ�#v4310079#300��+#v4000464#300���һ�#v1102723#������ʹ+25#l\r\n";
		
		

		cm.sendSimple (text);    
	} else if (status == 1) {
		if (selection == 1) { 
			if(cm.haveItem(4310079,20) && cm.haveItem(4000464,20) ){
				cm.gainItem(4310079,-20);
				cm.gainItem(4000464,-20);
				cm.gainItem(1102779, 5, 5, 5, 5, 200, 200, 5, 5, 5, 5, 5, 5, 0, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 2) {
			if(cm.haveItem(4310079,80) && cm.haveItem(4000464,80) ){
				cm.gainItem(4310079,-80);
				cm.gainItem(4000464,-80);
				cm.gainItem(1102630, 10, 10, 10, 10, 200, 200, 10, 10, 10, 10, 10, 10, 0, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 3) {
			if(cm.haveItem(4310079,180) && cm.haveItem(4000464,180) ){
				cm.gainItem(4310079,-180);
				cm.gainItem(4000464,-180);
				cm.gainItem(1102798, 15, 15, 15, 15, 200, 200, 15, 15, 15, 15, 15, 15, 0, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 4) {
			if(cm.haveItem(4310079,300) && cm.haveItem(4000464,300) ){
				cm.gainItem(4310079,-300);
				cm.gainItem(4000464,-300);
				cm.gainItem(1102723, 25, 25, 25, 25, 200, 200, 25, 25, 25, 25, 25, 25, 0, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 5) { 
			if(cm.haveItem(1112450,1) && cm.haveItem(4000001,200) ){
				cm.gainItem(1112450,-1);
				cm.gainItem(4000001,-200);
				cm.gainItem(1112451, 5, 5, 5, 5, 500, 500, 5, 5, 4, 4, 4, 4, 4, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 6) {
			if(cm.haveItem(1112451,1) && cm.haveItem(4000012,200) ){
				cm.gainItem(1112451,-1);
				cm.gainItem(4000012,-200);
				cm.gainItem(1112452, 6, 6, 6, 6, 600, 600, 6, 6, 5, 5, 5, 5, 5, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 7) {
			if(cm.haveItem(1112452,1) && cm.haveItem(4000204,200) ){
				cm.gainItem(1112452,-1);
				cm.gainItem(4000204,-200);
				cm.gainItem(1112453, 7, 7, 7, 7, 700, 700, 7, 7, 6, 6, 6, 6, 6, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 8) {
			if(cm.haveItem(1112453,1) && cm.haveItem(4000029,200) && cm.haveItem(4031227,1) ){
				cm.gainItem(1112453,-1);
				cm.gainItem(4000029,-200);
				cm.gainItem(4031227,-1);
				cm.gainItem(1112454, 8, 8, 8, 8, 800, 800, 8, 8, 7, 7, 7, 7, 7, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 9) {
			if(cm.haveItem(1112454,1) && cm.haveItem(4000026,200) && cm.haveItem(4000136,20) ){
				cm.gainItem(1112454,-1);
				cm.gainItem(4000026,-200);
				cm.gainItem(4000136,-20);
				cm.gainItem(1112455, 10, 10, 10, 10, 800, 800, 10, 10, 10, 10, 10, 10, 10, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 10) {
			if(cm.haveItem(1112455,1) && cm.haveItem(4000014,200) && cm.haveItem(4000045,30) ){
				cm.gainItem(1112455,-1);
				cm.gainItem(4000014,-200);
				cm.gainItem(4000045,-30);
				cm.gainItem(1112456, 12, 12, 12, 12, 800, 800, 12, 12, 12, 12, 12, 12, 12, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();	
		} else if (selection == 11) {
			if(cm.haveItem(1112456,1) && cm.haveItem(4000002,200) && cm.haveItem(4000017,50) ){
				cm.gainItem(1112456,-1);
				cm.gainItem(4000002,-200);
				cm.gainItem(4000017,-50);
				cm.gainItem(1112457, 14, 14, 14, 14, 800, 800, 14, 14, 14, 14, 14, 14, 14, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 12) {
			if(cm.haveItem(1112457,1) && cm.haveItem(4000286,200) && cm.haveItem(4002003,10) ){
				cm.gainItem(1112457,-1);
				cm.gainItem(4000286,-200);
				cm.gainItem(4002003,-10);
				cm.gainItem(1112458, 16, 16, 16, 16, 800, 800, 16, 16, 16, 16, 16, 16, 16, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 13) {
			if(cm.haveItem(1112458,1) && cm.haveItem(4000021,400) && cm.haveItem(4001084,1) ){
				cm.gainItem(1112458,-1);
				cm.gainItem(4000021,-400);
				cm.gainItem(4001084,-1);
				cm.gainItem(1112459, 18, 18, 18, 18, 800, 800, 18, 18, 18, 18, 18, 18, 18, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 14) {
			if(cm.haveItem(1112459,1) && cm.haveItem(4031794,100) && cm.haveItem(4001085,1) ){
				cm.gainItem(1112459,-1);
				cm.gainItem(4031794,-100);
				cm.gainItem(4001085,-1);
				cm.gainItem(1112460, 20, 20, 20, 20, 1000, 1000, 20, 20, 20, 20, 20, 20, 20, 0);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		} else if (selection == 15) {
			if(cm.haveItem(3603300,1) ){
				cm.gainItem(3603300,-1);
				cm.gainItem(1472214,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();	
		} else if (selection == 16) {
			if(cm.haveItem(3603300,1) ){
				cm.gainItem(3603300,-1);
				cm.gainItem(1482168,1);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���~!");
			}
			cm.dispose();
		}
		
	}
}
}