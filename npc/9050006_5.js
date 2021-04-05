/*
  点点制作：解锁
       更新时间：2020/05/15
                  QQ：1098393331
                               */	


var 解锁道具 = 4000000;//星石头
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
		            cm.sendOk("请将要解锁的装备放置在 装备栏 第一格.");
				    cm.dispose();		
		}else{
	    var textz = "看看你想要做些什么：\r\n";

		textz += "#L0#使用 #b#v"+解锁道具+"##k 解除装备封印状态[100%成功]\r\n\r\n";
		
		cm.sendSimple (textz);  
}

             } else if (status == 1) {
				 var ItemID = cm.getInventory(1).getItem(1).getItemId(); 
                 var 升级次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();
                				 
                   if (selection == 0) {
                      var selStr = "当前所要解锁的装备为：#b#v"+ItemID+"##z"+ItemID+"##k\r\n\r\n";
						  selStr += " #e- 所需消耗道具：#n#r#v"+解锁道具+"##z"+解锁道具+"##k\r\n\r\n";
						  selStr += " 								#d#e是否确认解锁？#k";
                          cm.sendYesNo(selStr);
                          sj = 1;
						  
				  }
	}else if (status == 2) {
		
           var ItemID = cm.getInventory(1).getItem(1).getItemId(); 
           var item = cm.getInventory(1).getItem(1).copy();				
           var type = ii.getInventoryType(ItemID);
		   var 升级次数 = cm.getInventory(1).getItem(1).getUpgradeSlots();
		   var 解锁次数 = cm.getInventory(1).getItem(1).getLevel();
	       if (sj == 1){		
		   if (cm.haveItem(解锁道具,1) == false) {
                cm.sendOk("请保证有#b#z"+解锁道具+"#");
				cm.dispose();
           } else{
                    var statup = new java.util.ArrayList();
		 		    var item = cm.getInventory(1).getItem(1).copy();
					item.setLocked(0);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		 		    cm.gainItem(解锁道具,-1);
		 		    var selStr = "恭喜你解锁成功。\r\n\r\n";
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}


}
}
}
}