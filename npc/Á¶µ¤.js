/*

     脚本编写 RCMS-点点 Q号：1098393331
承接脚本编写 - WZ定制修改 - 抖音推广 - 创意玩法

*/
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
	    var textz = "炼丹系统：\r\n";

		textz += "#L0#炼制#v4442001# #v2531006# #v2340000#  #v2610001# #v4442001# #v2000005# #v4310148#\r\n\r\n";

		//textz += "#L1#锻造#v1132294##b#z1132294##k\r\n\r\n";
		
		cm.sendSimple (textz);  


             } else if (status == 1) {
                				 
                   if (selection == 0) {
                      var selStr = "				  炼制#v4442001# #v2531006# #v2340000#\r\n\r\n";
				          selStr += " #e- 炼制所需材料：\r\n#n[ #d#v4000460##z4000460# #k]  数量：[ #b#c4000460# #k/ #r2#k ]\r\n";
						  selStr += "[ #d#v4000461##z4000461# #k]  数量：[ #b#c4000461# #k/ #r2#k ]\r\n\r\n";
						  //selStr += "[ #d#v4031794##z4031794# #k]  数量：[ #b#c4031794# #k/ #r10#k ]\r\n\r\n";
						  selStr += "[ #d金币#k]  数量：[ #b"+cm.getPlayer().getMeso()+"#k/ #r5000000#k ]\r\n\r\n";
						  selStr += "合成成功后可随机获得：\r\n";
						  selStr += "#v4442001# #v2531006# #v2340000# #v3994731# #v2450000# #v2610001# #v4442001# #v2000005# #v4310148#\r\n\r\n";
						  selStr += " 								#d#e是否确认炼制？#k";
                          cm.sendYesNo(selStr);
                          sj = 1;

				   }else if (selection == 1) {
                      var selStr = "				  锻造#v1492184##b#z1492184##k\r\n\r\n";
				          selStr += " #e- 锻造所需材料：\r\n#n[ #d#v4021007##z4021007# #k]  数量：[ #b#c4021007# #k/ #r20#k ]\r\n";
						  selStr += "[ #d#v4011002##z4011002# #k]  数量：[ #b#c4011002# #k/ #r20#k ]\r\n\r\n";
						  selStr += "[ #d#v4000053##z4000053# #k]  数量：[ #b#c4000053# #k/ #r60#k ]\r\n\r\n";
						  selStr += "[ #d#v4000054##z4000054# #k]  数量：[ #b#c4000054# #k/ #r60#k ]\r\n\r\n";
						  selStr += "[ #d#v4000151##z4000151# #k]  数量：[ #b#c4000151# #k/ #r100#k ]\r\n\r\n";
						  selStr += "[ #d#v4000152##z4000152# #k]  数量：[ #b#c4000152# #k/ #r100#k ]\r\n\r\n";
						  selStr += "[ #d#v1432040##z1432040# #k]  数量：[ #b#c1432040# #k/ #r1#k ]\r\n\r\n";
						  selStr += "[ #d金币#k]  数量：[ #b"+cm.getPlayer().getMeso()+"#k/ #r30000000#k ]\r\n\r\n";
						  selStr += " 								#d#e是否确认锻造？#k";
                          cm.sendYesNo(selStr);
                          sj = 2;
					
				  }
	}else if (status == 2) {
	       if (sj == 1){		
		   if (cm.canHold(1492184,1) == false)  {
		            cm.sendOk("请保证有足够的背包空间。");
				    cm.dispose();					
    } else if (cm.haveItem(4000460,2) == false && cm.haveItem(4000461,2) == false ) {
                    cm.sendOk("请带来\r\n#v4000460# *2 \r\n #v4000461# * 2 ");
				    status = -1;
    } else if (cm.getPlayer().getMeso() <= 5000000) {
                    cm.sendOk("金币不足30000000，无法锻造。");
					cm.dispose();
    } else if (cm.getPlayer().getBeans() < 0) {
                    cm.sendOk("豆豆不足5000，无法锻造。");
					cm.dispose();
                    } else{
		 		    cm.gainItem(4000460,-2);
					cm.gainItem(4000461,-2);
					cm.gainBeans(-0);
					cm.gainMeso(-5000000);
					//cm.gainItem(4442001,1);
					cm.getPlayer().setBossLog("装备合成成功",1);//以后合成成功后，在dispose前面加上这个
		 		    cm.dispose();//无需加sendOk。
					cm.openNpc(9310060,95);//以后合成成功后，在dispose后面加上这个
					}

    } else if (sj == 2){		
		   if (cm.canHold(1492184,1) == false)  {
		            cm.sendOk("请保证有足够的背包空间。");
				    cm.dispose();					
    } else if (cm.haveItem(4021007,20) == false && cm.haveItem(4011002,20) == false && cm.haveItem(4000152,100) == false && cm.haveItem(4000151,100) == false && cm.haveItem(4000054,60) == false && cm.haveItem(4000053,60) == false) {
                    cm.sendOk("请带来\r\n#v4021007# *20 \r\n #v4011002# * 20\r\n#v4000152# *100 \r\n #v4000151# *100 \r\n #v4000054# * 60\r\n #v400054# *60 ");
				    status = -1;
    } else if (cm.getPlayer().getMeso() <= 30000000) {
                    cm.sendOk("金币不足30000000，无法锻造。");
					cm.dispose();
    } else if (cm.getPlayer().getBeans() < 5000) {
                    cm.sendOk("豆豆不足5000，无法锻造。");
					cm.dispose();
                    } else{
		 		    cm.gainItem(4021007,-20);
					cm.gainItem(4011002,-20);
					cm.gainItem(4000152,-100);
					cm.gainItem(4000151,-100);
					cm.gainItem(4000054,-60);
					cm.gainItem(4000053,-60);
					cm.gainBeans(-5000);
					cm.gainMeso(-30000000);
					cm.gainItem(1492184,1);
					cm.getPlayer().setBossLog("装备合成成功",1);//以后合成成功后，在dispose前面加上这个
		 		    cm.dispose();
					cm.openNpc(9310060,95);//以后合成成功后，在dispose后面加上这个
					}

}
}
}
}

