var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ����1 = "#fEffect/CharacterEff/1112949/0/0#";
var ����2 = "#fEffect/CharacterEff/1112949/1/0#";
var ����1 = "#fEffect/CharacterEff/1082565/0/0#";
var ����2 = "#fEffect/CharacterEff/1082565/2/0#";
var ����3 = "#fEffect/CharacterEff/1082565/4/0#";
var ����1 = "#fEffect/CharacterEff/1051294/0/0#";
var ����2 = "#fEffect/CharacterEff/1051295/0/0#";
var ����3 = "#fEffect/CharacterEff/1051296/0/0#";
var Сѩ�� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ����1 = "#fEffect/CharacterEff/1032063/0/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var Ǧ��ͼ�� = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var ������ = "#fUI/StatusBar/BtClaim/normal/0#";
var H��ĸ = "#fUI/CashShop/CSEffect/effect/1#";
var ���ͼ�� = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var selec;
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
			//text += "\t\t\t\t\t#d#e"+cm.ms()+"#n#k\r\n\r\n"
			//text += "#L2##v4001126##t4001126# �һ� ���  #r      ���� 1:1#l\r\n";
			text += "#L1##v4001126##t4001126# 300�һ� #rѪ��#k    ����#r 300:100#k#l\r\n";
			text += "#L0##v4001126##t4001126# 300�һ� #b����#k    ����#r 300:100#k#l\r\n";
			//text += "#L3#��� �һ� #v4000463##t4000463#  #r���� 2000:1#k#l\r\n";
			//text += "#L4##v4000463##t4000463# �һ� ���  #r���� 1:1900#k#l\r\n";
			//text += "#L5#��� �һ� #v4310038##t4310038#  #r    ���� 5000��:1#k#l\r\n";
			//text += "#L6##v4310038##t4310038# �һ� ���  #r    ���� 1:4900��#k#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1) {
			if (selection == 0) {
				cm.sendGetNumber("��������Ҫ�һ�������:\r\n\r\n#v4001126##t4001126# #b����1=�۳�300��Ҷ���100����#k  ���� 1:100",0,1,214755885);
				selec = 0;
			} else if (selection == 1) {
				cm.sendGetNumber("��������Ҫ�һ�������:\r\n\r\n#v4001126##t4001126# #r����1=�۳�300��Ҷ���100��Ѫ��#k  ���� 1:100",0,1,214755885);
				selec = 1;
			} else if (selection == 2) {
				cm.sendGetNumber("��������Ҫ�һ�������:\r\n\r\n#v4001126##t4001126# �һ� ���  ���� 1:1",0,1,214755885);
				selec = 2;
			} else if (selection == 3) {
				cm.sendGetNumber("��������Ҫ�һ�������:\r\n\r\n��� �һ� #v4000463##t4000463#  ���� 2000:1",0,1,214755885);
				selec = 3;
			} else if (selection == 4) {
				cm.sendGetNumber("��������Ҫ�һ�������:\r\n\r\n#v4000463##t4000463# �һ� ���  ���� 1:1900",0,1,214755885);
				selec = 4;
			} else if (selection == 5) {
				cm.sendGetNumber("��������Ҫ�һ�������:\r\n\r\n��� �һ� #v4310038##t4310038#  ���� 5000��:1",0,1,214755885);
				selec = 5;
			} else if (selection == 6) {
				cm.sendGetNumber("��������Ҫ�һ�������:\r\n\r\n#v4310038##t4310038# �һ� ���  ���� 1:4900��",0,1,214755885);
				selec = 6;
			}
		} else if (status == 2){
			if(selec == 0){
				if(cm.haveItem(4001126,selection*300)){
					cm.gainItem(4001126,-selection*300);
					cm.getPlayer().getStat().setMaxMp((cm.getPlayer().getStat().getMaxMp() + selection*100));
					cm.ˢ��״̬();
					cm.dispose();
                }else{
					cm.sendOk("���ϲ���");
					cm.dispose();
				}
			} else if(selec == 1){
				if(cm.haveItem(4001126,selection*300)){
					cm.gainItem(4001126,-selection*300);
					cm.getPlayer().getStat().setMaxHp((cm.getPlayer().getStat().getMaxHp() + selection*100));
					cm.ˢ��״̬();
					cm.dispose();
                }else{
					cm.sendOk("���ϲ���");
					cm.dispose();
				}
			} else if(selec == 2){
				if(cm.haveItem(4001126,selection*1)){
					cm.gainItem(4001126,-selection*1);
					cm.gainNX(selection*1);
					cm.sendOk("�һ��ɹ�~!");
					cm.dispose();
				} else {
					cm.sendOk("�������,��������~!");
					cm.dispose();
				}
			} else if(selec == 3){
				if(cm.getPlayer().getCSPoints(1) >= 2000*selection){
					cm.gainNX(-selection*2000);
					cm.gainItem(4000463,selection);
					cm.sendOk("�һ��ɹ�~!");
					cm.dispose();
				} else {
					cm.sendOk("�������,��������~!");
					cm.dispose();
				}
			} else if(selec == 4){
				if(cm.haveItem(4000463,selection*1)){
					cm.gainItem(4000463,-selection*1);
					cm.gainNX(selection*1900);
					cm.sendOk("�һ��ɹ�~!");
					cm.dispose();
				} else {
					cm.sendOk("�������,��������~!");
					cm.dispose();
				}
			} else if(selec == 5){
				if(cm.getMeso() >= 50000000*selection){
					cm.gainMeso(-50000000*selection);
					cm.gainItem(4310038,selection*1);
					cm.sendOk("�һ��ɹ�~!");
					cm.dispose();
				} else {
					cm.sendOk("�������,��������~!");
					cm.dispose();
				}
			} else if(selec == 6){
				if(cm.haveItem(4310038,selection*1)){
					cm.gainItem(4310038,-selection*1);
					cm.gainMeso(50000000*selection);
					cm.sendOk("�һ��ɹ�~!");
					cm.dispose();
				} else {
					cm.sendOk("�������,��������~!");
					cm.dispose();
				}
			}
		}
	}
}
