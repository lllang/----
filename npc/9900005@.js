var Ǧ��ͼ�� = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var ������ = "#fUI/StatusBar/BtClaim/normal/0#";
var ����1 = "#fEffect/CharacterEff/1082565/0/0#";
var ����2 = "#fEffect/CharacterEff/1082565/2/0#";
var ����3 = "#fEffect/CharacterEff/1082565/4/0#";
var selectio;
var �̵���Ʒ = Array( 
			//Array(2041214,1,5000, ""),
			Array(4170000,1,3, ""),
			Array(4310148,1,5000, ""),
			Array(2041216,1,10000, ""),
			//Array(4310054,1,100, ""),
			Array(5510000,1,2000, ""),
			Array(5590001,1,20000, ""),
			Array(5520000,1,10000, ""),
			Array(5570000,1,5000, "")
			);
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
	cm.Lunpan();
           // cm.Guaguale();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			var str1 = "";	
			for (var i = 0; i < �̵���Ʒ.length; i++){
                   str1 += "#L"+i+"##v"+�̵���Ʒ[i][0]+"##z"+�̵���Ʒ[i][0]+"#�� #b"+�̵���Ʒ[i][1]+"#d  �۸�:#r"+�̵���Ʒ[i][2]+"#d "+�̵���Ʒ[i][3]+"#l\r\n";
            }
            cm.sendSimple("��ã������� - ����̳� - \r\n ��Ŀǰ�ĵ��:#r"+cm.getPlayer().getAccountLog("�ۼ���������_����",1)+"#n#d  \r\n\r\n�ʺ����̵꣬����ǿ�����ϵ���  ��������߹���100��\r\n"+str1);//#L2#"+����2+"#r�ƹ�ϵͳ���� - �����ֺ���ϸ˵��
		} else if (status == 1) {
			selectio = selection;
			cm.sendGetNumber("������д��Ҫ���������:",0,1,100);
				
        } else if (status == 2) {
			if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= �̵���Ʒ[selectio][2] * selection){
				//cm.gainNX(-�̵���Ʒ[selectio][2] * selection);
				cm.getPlayer().setAccountLog("�ۼ���������_����",1,-�̵���Ʒ[selectio][2]* selection);
				cm.gainItem(�̵���Ʒ[selectio][0],�̵���Ʒ[selectio][1] * selection); 
				cm.sendOk("����ɹ�~!\r\n��������:#r#e"+selection+"");
				cm.����(1,"["+ cm.getPlayer().getName() + "] �������г�����̵깺���˵���!");
                cm.dispose();
			} else {
				cm.sendOk("�����~!");
                cm.dispose();
			}
		}
	}
}