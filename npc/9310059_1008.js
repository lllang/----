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
			Array(3992027,500,1,"���Ƴ�6������") //��ɫ����
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
		if(cm.getInventory(3).isFull(0)){
			cm.sendOk("���������಻��1���ո�");
			cm.safeDispose();
		}
        if (cm.haveItem(3990000,1) && cm.haveItem(3990001,1) && cm.haveItem(3990002,1) && cm.haveItem(3990003,1) && cm.haveItem(3990004,1) ) {
		cm.sendYesNo(""+�����鱨+"\r\n\r\n"+Բ��+" ����:#v3990000# [#r#c3990000##k/#b1#k] #v3990001# [#r#c3990001##k/#b1#k] #v3990002# [#r#c3990002##k/#b1#k]\r\n"+Բ��+" ����:#v3990003# [#r#c3990003##k/#b1#k] #v3990004# [#r#c3990004##k/#b1#k]\r\n\r\n"+��̾��+" �� #r50%#k �ļ��ʺϳɳ���˵����");
        } else {
		cm.sendOk(""+�����鱨+"\r\n\r\n"+Բ��+" ����:#v3990000# [#r#c3990000##k/#b1#k] #v3990001# [#r#c3990001##k/#b1#k] #v3990002# [#r#c3990002##k/#b1#k]\r\n"+Բ��+" ����:#v3990003# [#r#c3990003##k/#b1#k] #v3990004# [#r#c3990004##k/#b1#k]\r\n\r\n"+��̾��+" ��ȷ�������Ʒ�㹻��");
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
            item = cm.gainGachaponItem(itemId, quantity, "�ϳ�����", notice);
            if (item != -1) {
                cm.gainItem(3990000,-1);
                cm.gainItem(3990001,-1);
                cm.gainItem(3990002,-1);
                cm.gainItem(3990003,-1);
                cm.gainItem(3990004,-1);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            cm.����(2,"�ϳ������ɹ�" + " : ��" + cm.getPlayer().getName() +"�� �Բ��ⶼ��,��Ȼ�ϳɳ���6������!");
            } else {
                cm.sendOk("����Ʒ����");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�ϳ�ʧ��");
            cm.����(2,"�ϳ�����ʧ��" + " : ��" + cm.getPlayer().getName() +"�� ��Ҳ����,�Ͼ�ֻ�� 50% �ĳɹ���!");
                cm.gainItem(3990000,-1);
                cm.gainItem(3990001,-1);
                cm.gainItem(3990002,-1);
                cm.gainItem(3990003,-1);
                cm.gainItem(3990004,-1);
            cm.safeDispose();
        }
    }
}