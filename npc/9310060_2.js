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
			text += "#v2049323#[5]��  #v2614000#[2]��  #v2041332#[2]�� #v2533000#[1]��#k#n\r\n"
			text += "#v2613008#[1]��  #v4031250#[10]��  #v2047926#[2]�� #v2140002#5000��#k#n\r\n\r\n"
			text += "\t\t\t��ǰ����������£�#k#n\r\n"
			text += "#r�������"+cm.getPlayer().getBossLog("�������",0)+"/2  ������ӣ�"+cm.getPlayer().getBossLog("�������",0)+"/2  �����ӣ�"+cm.getPlayer().getBossLog("������",0)+"/2#k#n\r\n"
			text += "#r��ո�����"+cm.getPlayer().getBossLog("������",0)+"/0  ������ӣ�"+cm.getPlayer().getBossLog("�������",0)+"/2#k#n\r\n\r\n"
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
			} else if (cm.getPlayer().getBossLog("������",0) < 0){
				cm.sendOk("��Ǹ������ո���δ���2�Ρ�");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("�������",0) < 2){
				cm.sendOk("��Ǹ���㺣������δ���2�Ρ�");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("ÿ�����һ������",0) >= 1){
				cm.sendOk("��Ǹ��������ȡ���ˡ�");
				cm.dispose();
			} else {
				cm.gainItem(2049323,5);
				cm.gainItem(2614000,2);
				cm.gainItem(2041332,2);
				cm.gainItem(2533000,1);
				cm.gainItem(2613008,1);
				cm.gainItem(4031250,10);
				cm.gainItem(2047926,2);
				cm.gainMeso(50000000);
				cm.getPlayer().setBossLog("ÿ�����һ������",0)
				cm.sendOk("��ȡ�ɹ�����ϲ������˽����������");
				cm.����(1,"["+cm.getName()+"]�������˽����ÿ��������񣬻�ô���������");
				cm.dispose();
			}
        }
    }
}


