/*
  �������������
       ����ʱ�䣺2020/05/15
                  QQ��1098393331
                               */	


var �������� = 4000000;//��ʯͷ
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var sj;
var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}

	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
		if (cm.getInventory(1).getItem(1) == null)  {
		            cm.sendOk("�뽫Ҫ������װ�������� װ���� ��һ��.");
				    cm.dispose();		
		}else{
	    var textz = "��������Ҫ��Щʲô��\r\n";

		textz += "#L0#ʹ�� #b#v"+��������+"##k ���װ����ӡ״̬[100%�ɹ�]\r\n\r\n";
		
		cm.sendSimple (textz);  
}

             } else if (status == 1) {
				 var ItemID = cm.getInventory(1).getItem(1).getItemId(); 
                 var �������� = cm.getInventory(1).getItem(1).getUpgradeSlots();
                				 
                   if (selection == 0) {
                      var selStr = "��ǰ��Ҫ������װ��Ϊ��#b#v"+ItemID+"##z"+ItemID+"##k\r\n\r\n";
						  selStr += " #e- �������ĵ��ߣ�#n#r#v"+��������+"##z"+��������+"##k\r\n\r\n";
						  selStr += " 								#d#e�Ƿ�ȷ�Ͻ�����#k";
                          cm.sendYesNo(selStr);
                          sj = 1;
						  
				  }
	}else if (status == 2) {
		
           var ItemID = cm.getInventory(1).getItem(1).getItemId(); 
           var item = cm.getInventory(1).getItem(1).copy();				
           var type = ii.getInventoryType(ItemID);
		   var �������� = cm.getInventory(1).getItem(1).getUpgradeSlots();
		   var �������� = cm.getInventory(1).getItem(1).getLevel();
	       if (sj == 1){		
		   if (cm.haveItem(��������,1) == false) {
                cm.sendOk("�뱣֤��#b#z"+��������+"#");
				cm.dispose();
           } else{
                    var statup = new java.util.ArrayList();
		 		    var item = cm.getInventory(1).getItem(1).copy();
					item.setLocked(0);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		 		    cm.gainItem(��������,-1);
		 		    var selStr = "��ϲ������ɹ���\r\n\r\n";
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}


}
}
}
}