/*

     �ű���д RCMS-��� Q�ţ�1098393331
�нӽű���д - WZ�����޸� - �����ƹ� - �����淨

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
	    var textz = "����ϵͳ��\r\n";

		textz += "#L0#����#v4442001# #v2531006# #v2340000#  #v2610001# #v4442001# #v2000005# #v4310148#\r\n\r\n";

		//textz += "#L1#����#v1132294##b#z1132294##k\r\n\r\n";
		
		cm.sendSimple (textz);  


             } else if (status == 1) {
                				 
                   if (selection == 0) {
                      var selStr = "				  ����#v4442001# #v2531006# #v2340000#\r\n\r\n";
				          selStr += " #e- ����������ϣ�\r\n#n[ #d#v4000460##z4000460# #k]  ������[ #b#c4000460# #k/ #r2#k ]\r\n";
						  selStr += "[ #d#v4000461##z4000461# #k]  ������[ #b#c4000461# #k/ #r2#k ]\r\n\r\n";
						  //selStr += "[ #d#v4031794##z4031794# #k]  ������[ #b#c4031794# #k/ #r10#k ]\r\n\r\n";
						  selStr += "[ #d���#k]  ������[ #b"+cm.getPlayer().getMeso()+"#k/ #r5000000#k ]\r\n\r\n";
						  selStr += "�ϳɳɹ���������ã�\r\n";
						  selStr += "#v4442001# #v2531006# #v2340000# #v3994731# #v2450000# #v2610001# #v4442001# #v2000005# #v4310148#\r\n\r\n";
						  selStr += " 								#d#e�Ƿ�ȷ�����ƣ�#k";
                          cm.sendYesNo(selStr);
                          sj = 1;

				   }else if (selection == 1) {
                      var selStr = "				  ����#v1492184##b#z1492184##k\r\n\r\n";
				          selStr += " #e- ����������ϣ�\r\n#n[ #d#v4021007##z4021007# #k]  ������[ #b#c4021007# #k/ #r20#k ]\r\n";
						  selStr += "[ #d#v4011002##z4011002# #k]  ������[ #b#c4011002# #k/ #r20#k ]\r\n\r\n";
						  selStr += "[ #d#v4000053##z4000053# #k]  ������[ #b#c4000053# #k/ #r60#k ]\r\n\r\n";
						  selStr += "[ #d#v4000054##z4000054# #k]  ������[ #b#c4000054# #k/ #r60#k ]\r\n\r\n";
						  selStr += "[ #d#v4000151##z4000151# #k]  ������[ #b#c4000151# #k/ #r100#k ]\r\n\r\n";
						  selStr += "[ #d#v4000152##z4000152# #k]  ������[ #b#c4000152# #k/ #r100#k ]\r\n\r\n";
						  selStr += "[ #d#v1432040##z1432040# #k]  ������[ #b#c1432040# #k/ #r1#k ]\r\n\r\n";
						  selStr += "[ #d���#k]  ������[ #b"+cm.getPlayer().getMeso()+"#k/ #r30000000#k ]\r\n\r\n";
						  selStr += " 								#d#e�Ƿ�ȷ�϶��죿#k";
                          cm.sendYesNo(selStr);
                          sj = 2;
					
				  }
	}else if (status == 2) {
	       if (sj == 1){		
		   if (cm.canHold(1492184,1) == false)  {
		            cm.sendOk("�뱣֤���㹻�ı����ռ䡣");
				    cm.dispose();					
    } else if (cm.haveItem(4000460,2) == false && cm.haveItem(4000461,2) == false ) {
                    cm.sendOk("�����\r\n#v4000460# *2 \r\n #v4000461# * 2 ");
				    status = -1;
    } else if (cm.getPlayer().getMeso() <= 5000000) {
                    cm.sendOk("��Ҳ���30000000���޷����졣");
					cm.dispose();
    } else if (cm.getPlayer().getBeans() < 0) {
                    cm.sendOk("��������5000���޷����졣");
					cm.dispose();
                    } else{
		 		    cm.gainItem(4000460,-2);
					cm.gainItem(4000461,-2);
					cm.gainBeans(-0);
					cm.gainMeso(-5000000);
					//cm.gainItem(4442001,1);
					cm.getPlayer().setBossLog("װ���ϳɳɹ�",1);//�Ժ�ϳɳɹ�����disposeǰ��������
		 		    cm.dispose();//�����sendOk��
					cm.openNpc(9310060,95);//�Ժ�ϳɳɹ�����dispose����������
					}

    } else if (sj == 2){		
		   if (cm.canHold(1492184,1) == false)  {
		            cm.sendOk("�뱣֤���㹻�ı����ռ䡣");
				    cm.dispose();					
    } else if (cm.haveItem(4021007,20) == false && cm.haveItem(4011002,20) == false && cm.haveItem(4000152,100) == false && cm.haveItem(4000151,100) == false && cm.haveItem(4000054,60) == false && cm.haveItem(4000053,60) == false) {
                    cm.sendOk("�����\r\n#v4021007# *20 \r\n #v4011002# * 20\r\n#v4000152# *100 \r\n #v4000151# *100 \r\n #v4000054# * 60\r\n #v400054# *60 ");
				    status = -1;
    } else if (cm.getPlayer().getMeso() <= 30000000) {
                    cm.sendOk("��Ҳ���30000000���޷����졣");
					cm.dispose();
    } else if (cm.getPlayer().getBeans() < 5000) {
                    cm.sendOk("��������5000���޷����졣");
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
					cm.getPlayer().setBossLog("װ���ϳɳɹ�",1);//�Ժ�ϳɳɹ�����disposeǰ��������
		 		    cm.dispose();
					cm.openNpc(9310060,95);//�Ժ�ϳɳɹ�����dispose����������
					}

}
}
}
}

