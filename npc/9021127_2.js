var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
			cm.sendOk("��лʹ��~!");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
if(cm.getInventory(1).getItem(1) == null || cm.getInventory(1).getItem(2) == null){
	cm.sendOk("���Ҫǿ���������Ʒ���ڱ�����һ��͵ڶ���!");
	cm.dispose();
	return;
}
if (cm.getLevel() < 210){
            cm.sendOk("210�����ϲſ���ת�ƣ�");
			return;//����
			}
if(cm.getJob() >= 200 && cm.getJob() <= 299){
	cm.sendOk("��ʦ̫ǿ���ֹת��");
	cm.dispose();	
	return;
}
if(cm.getInventory(1).getItem(2).getStr()>=20000||cm.getInventory(1).getItem(2).getDex()>=20000||cm.getInventory(1).getItem(2).getLuk()>=20000||cm.getInventory(1).getItem(2).getInt()>=20000||cm.getInventory(1).getItem(2).getWatk()>=20000||cm.getInventory(1).getItem(2).getMatk()>=20000) {
    cm.sendOk("�ڶ���װ�����Բ��ܳ���20000���뻻��װ��");
	cm.dispose();
	return;
}

if(cm.getInventory(1).getItem(1).getItemId() == 1003274 || cm.getInventory(1).getItem(2).getItemId() == 1003274){
	cm.sendOk("#v1003274##t1003274#���ܷ��ڵ�һ����ߵڶ���ǿ��!");
	cm.dispose();
	return;
}if(cm.getInventory(1).getItem(1).getItemId() == 1112907 || cm.getInventory(1).getItem(2).getItemId() == 1112907){
	cm.sendOk("#v1112907##t1112907#�����ܱ�����ס�ģ�����װ����!");
	cm.dispose();
	return;
}
		if (cm.getBossLog("ת������") == 1) {
            cm.sendOk("��...һ��ֻ��ת��һ������Ŷ~!");
            cm.dispose();
            return;
        }
		
		
		����2 = cm.getInventory(1).getItem(2).getStr();
		����2 = cm.getInventory(1).getItem(2).getDex();
		����2 = cm.getInventory(1).getItem(2).getLuk();
		����2 = cm.getInventory(1).getItem(2).getInt();
		����2 = cm.getInventory(1).getItem(2).getWatk();
		ħ��2 = cm.getInventory(1).getItem(2).getMatk();
		����1 = (cm.getInventory(1).getItem(1).getStr())/2;
		����1 = (cm.getInventory(1).getItem(1).getDex())/2;
		����1 = (cm.getInventory(1).getItem(1).getLuk())/2;
		����1 = (cm.getInventory(1).getItem(1).getInt())/2;
		����1 = (cm.getInventory(1).getItem(1).getWatk())/2;
		ħ��1 = (cm.getInventory(1).getItem(1).getMatk())/2;
		var Id1 = cm.getInventory(1).getItem(1).getItemId();
		var Id2 = cm.getInventory(1).getItem(2).getItemId();
        var selStr = "���û�ӭ����#rǿ������#k\r\n#b";
			selStr +="��һ��װ�����Ե�һ�� ת�Ƶ��ڶ���װ����,ͬʱ��һ��װ�����Խ���գ���������װ��������\r\n\r\n";
            selStr += "#d#v"+Id2+"##t"+Id2+"# ����Ϊ#k\r\n";
			selStr +="����:"+����2+" + "+����1+" = "+(����1+����2)+"\r\n";
			selStr +="����:"+����2+" + "+����1+" = "+(����1+����2)+"\r\n";
			selStr +="����:"+����2+" + "+����1+" = "+(����1+����2)+"\r\n";
			selStr +="����:"+����2+" + "+����1+" = "+(����1+����2)+"\r\n";
			selStr +="������"+����2+" + "+����1+" = "+(����1+����2)+"\r\n";
			selStr +="ħ������:"+ħ��2+" + "+ħ��1+" = "+(ħ��1+ħ��2)+"#b\r\n\r\n";
			selStr +="ת�ƽ��۳���20Ԫ��                        #e�Ƿ�ת�ƣ�";
        cm.sendYesNo(selStr);
    } else if (status == 1) {
		if (cm.getPlayer().getAccountLog("�ۼ���������_����",1) < 20) {
            cm.sendOk("��...���Ԫ������~��Ҫ20Ԫ��!");
            cm.dispose();
            return;
        }
		cm.getPlayer().setAccountLog("�ۼ���������_����",1,-20);
		cm.setBossLog("ת������");
		cm.getInventory(1).getItem(1).setStr(0);
		cm.getInventory(1).getItem(1).setDex(0);
		cm.getInventory(1).getItem(1).setInt(0);
		cm.getInventory(1).getItem(1).setLuk(0);
		cm.getInventory(1).getItem(1).setWatk(0);
		cm.getInventory(1).getItem(1).setMatk(0);
		cm.getInventory(1).getItem(2).setStr((����1+����2));
		cm.getInventory(1).getItem(2).setDex((����1+����2));
		cm.getInventory(1).getItem(2).setInt((����1+����2));
		cm.getInventory(1).getItem(2).setLuk((����1+����2));
		cm.getInventory(1).getItem(2).setWatk((����1+����2));
		cm.getInventory(1).getItem(2).setMatk((ħ��1+ħ��2));
		cm.getInventory(1).getItem(1).setLocked(1);
		cm.getInventory(1).getItem(2).setLocked(1);
		cm.ˢ��״̬();
		cm.sendOk("ת�Ƴɹ�!");
		cm.����(1, "Ģ�������[" + cm.getPlayer().getName() + "]�ɹ������װ������ת�ƣ�");
        cm.dispose();
    }
}