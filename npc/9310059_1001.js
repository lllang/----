var ÷�� ="#fUI/GuildMark/Mark/Animal/00002008/14#";
var ���� ="#fUI/GuildMark/Mark/Animal/00002020/14#";
var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";//"+Բ��+"
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var �˳� = "#fUI/CN_Chat/ChattingRoom/BtExit/0/mouseOver/0#";
var ���� = "#fUI/UIWindow/Quest/reward#";
var ���� = "#fUI/UIWindow/SoftKeyboard/key/97/mouseOver/0#";
var ������ = "#fSkill/411/skill/4111006/iconMouseOver#";
var ���� = "#fUI/UIWindow/PersonalShop/BtBuy/mouseOver/0#";
var ��ʯ = "#fUI/GuildMark/Mark/Animal/00002006/16#";
var �ȵ� = "#fUI/CashShop/CSChar/BtCoordination/mouseOver/0#";
var �����鱨 = "#fUI/PredictHarmony/predictmaritalharmony/BtResult/mouseOver/0#";
var status = 0;
var itemList = 
Array(   
			Array(3990000,500,1,"���Ƴ�1����Ʒ����"), //��ɫ����
			
			Array(3990001,100,1,"���Ƴ�2����Ʒ����"), //��ɫ����
			
			Array(3990002,50,1,"���Ƴ�3����Ʒ����"), //��ɫ����
			
			Array(3990003,30,1,"���Ƴ�4����Ʒ����"), //��ɫ����
			
			Array(3990004,20,1,"���Ƴ�5����Ʒ����")  //��ɫ����
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("����������û��ǰ;�ģ�");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
	    if (!cm.haveItem(3010109,1)) {
	        cm.sendOk("��û�е�¯Ҫ��ô����");
			cm.safeDispose();
	    }
        if (cm.getPlayer().getAccountLog("ɱ�ֵ���",1) >= 20000 && cm.getPlayer().getMeso() >= 100000000) {
            cm.sendYesNo(""+�����鱨+"\r\n\r\n"+Բ��+" ����ɱ�ֵ���:[ #r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k / #b20000#k ]\r\n"+Բ��+" ����������:[ #r"+cm.getPlayer().getMeso()+"#k / #b100000000#k ]\r\n\r\n"+��̾��+" ����:#b#v 3990000# 40%#v 3990001# 4%#v 3990002# 3%#v 3990003# 2%#v 3990004# 1%#k\r\n"+��̾��+" ʧ�ܼ���:#b50% #kʧ�ܲ���#b[ɱ�ֵ���]#k,���ǻ�#b[ը¯]");
        } else {
		cm.sendOk(""+�����鱨+"\r\n\r\n"+��̾��+" ɱ�ֵ�������:[ #r"+cm.getPlayer().getAccountLog("ɱ�ֵ���",1)+"#k / #b20000#k ]\r\n"+��̾��+" ���Ͻ�Ҳ���:[ #r"+cm.getPlayer().getMeso()+"#k / #b100000000#k ]");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 1000);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "�����ɹ�", notice);
            if (item != -1) {
                cm.gainMeso(-100000000);
			    cm.getPlayer().getAccountLog("ɱ�ֵ���",1);
			    cm.getPlayer().setAccountLog("ɱ�ֵ���",1,-20000);
			    cm.getPlayer().setBossLog("�ɹ���������",1);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("����Ʒ����");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("����ʧ��,��¯ը�� ����¹���¯");
           cm.����(2,"����ʧ��" + " : ��" + cm.getPlayer().getName() +"�� ����ʧ��,��¯ֱ�ӱ�ը");
            cm.gainMeso(-100000000);
            cm.gainItem(3010109,-1);
			cm.getPlayer().setBossLog("ʧ����������",1);
            cm.safeDispose();
        }
    }
}