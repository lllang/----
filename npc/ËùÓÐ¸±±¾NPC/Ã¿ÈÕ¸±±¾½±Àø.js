/* ==================
 �ű�����: ��Ӹ�������
 �ű����ߣ�Point
 ��ϵ��ʽ��1098393331
 =====================
 */

var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
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
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			text += "\t\t\t������������£�#k#n\r\n"
			text += "#v4000487#[5]��  #v2616206#[5]��  #v4310090#[1]�� #v4002000#[5]��#k#n\r\n"
			text += "#v4330023#[2]��  #v4001256#[2]��  #v4002003#[5]�� #v2140002#2500��#k#n\r\n\r\n"
			text += "\t\t\t��ǰ����������£�#k#n\r\n"
			text += "#r�������"+cm.getPlayer().getBossLog("�������",0)+"/2  ������ӣ�"+cm.getPlayer().getBossLog("�������",0)+"/2  �����ӣ�"+cm.getPlayer().getBossLog("������",0)+"/2#k#n\r\n"
			text += "#r��ո�����"+cm.getPlayer().getBossLog("������",0)+"/1  ������ӣ�"+cm.getPlayer().getBossLog("�������",0)+"/2#k#n\r\n\r\n"
			text += "\t\t\t#b#L0#ȫ�������ȡ����#k#n\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

            cm.sendSimple(text);
        } else if (selection == 0) { 
			if (cm.getPlayer().getBossLog("�������",0) < 2){
				cm.sendOk("��Ǹ���������δ���2�Ρ�");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("�������",0) < 2){
				cm.sendOk("��Ǹ�����������δ���2�Ρ�");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("������",0) < 2){
				cm.sendOk("��Ǹ������߸���δ���2�Ρ�");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("������",0) < 1){
				cm.sendOk("��Ǹ������ո���δ���2�Ρ�");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("�������",0) < 2){
				cm.sendOk("��Ǹ���㺣������δ���2�Ρ�");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("ÿ�����һ������",0) >= 1){
				cm.sendOk("��Ǹ��������ȡ���ˡ�");
				cm.dispose();
			} else {
				cm.gainItem(4000487,5);
				cm.gainItem(2616206,5);
				cm.gainItem(4310090,1);
				cm.gainItem(4002000,5);
				cm.gainItem(4330023,2);
				cm.gainItem(4001256,2);
				cm.gainItem(4002003,5);
				cm.gainMeso(25000000);
				cm.getPlayer().setBossLog("ÿ�����һ������",0)
				cm.sendOk("��ȡ�ɹ�����ϲ������˽����������");
				cm.����(1,"["+cm.getName()+"]�������˽����ÿ��������񣬻�ô���������");
				cm.dispose();
			}
        }
    }
}


