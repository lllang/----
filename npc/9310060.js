

var sj;


//���ߴ��룺
var ǿ�������������� = 3991026;
var ǿ��Ѫħ���� = 3991027;

var ȫ���� = 10;
var ˫�� = 5;
var ��� = 50000000;
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
	    var textz = "	#r#e����ñ��ÿһ��ֻ�ɴ�һ����[�㶮��]\r\n#e";

		textz += "#b#L0#����#v1002394##z1002394##k\r\n";
		
		textz += "#r#L1#����#v1002395##z1002395#[ȫ����10]#k\r\n";

		textz += "#r#L2#����#v1002393##z1002393#[ȫ����20]#k\r\n";

		textz += "#r#L3#����#v1002392##z1002392#[ȫ����30]#k\r\n";
		
		textz += "#r#L4#����#v1002391##z1002391#[ȫ����40]#k\r\n";
		
		textz += "#r#L5#����#v1003112##z1003112#[ȫ����50]#k\r\n";

			
		cm.sendSimple (textz); 

             } else if (status == 1) {
                   if (selection == 0) {
                      var selStr = "				  ����#v1002394##b#z1002394##k\r\n\r\n";
				          selStr += " #e- ����������ϣ�\r\n#n[ #d#v4010007##z4010007# #k]  ������[ #b#c4010007# #k/ #r100#k ]\r\n";
						  selStr += "[ #d#v4010007##z4010007# #k]  ������[ #b#c4010007# #k/ #r100#k ]\r\n";
						  selStr += " 								#d#e�Ƿ�ȷ��������#k";
                          cm.sendYesNo(selStr);
                          sj = 1;

				   }else if (selection == 1) {
                      var selStr = "				  ����#v1002395##b#z1002395##k\r\n\r\n";
				          selStr += " #e- ����������ϣ�\r\n#n[ #d#v1002394##z1002394# #k]  ������[ #b#c1002394# #k/ #r1#k ]\r\n";
						  selStr += "[ #d#v4000046##z4000046# #k]  ������[ #b#c4000046# #k/ #r50#k ]\r\n";
						  selStr += "[ #d#v4000028##z4000028# #k]  ������[ #b#c4000028# #k/ #r50#k ]\r\n\r\n";
						  selStr += " 								#d#e�Ƿ�ȷ��������#k";
                          cm.sendYesNo(selStr);
                          sj = 2;
					
				   }else if (selection == 2) {
                      var selStr = "				  ����#v1002393##b#z1002393##k\r\n\r\n";
				          selStr += " #e-����������ϣ�#n\r\n";
						  selStr += " [ #d#v1002395##z1002395# #k] ������[ #b#c1002395# #k/ #r1#k ]\r\n";
						  selStr += " [ #d#v4000050##z4000050# #k] ������[ #b#c4000050# #k/ #r88#k ]\r\n\r\n";
						  selStr += " 								#d#e�Ƿ�ȷ��������#k";
                          cm.sendYesNo(selStr);
                          sj = 3;
						  
				   }else if (selection == 3) {
					   var selStr = "				  ����#v1002392##b#z1002392##k\r\n\r\n";
				          selStr += " #e-����������ϣ�\r\n#n[ #d#v1002393##z1002393# #k] ������[ #b#c1002393# #k/ #r1#k ]\r\n";
						  selStr += " [ #d#v4000054##z4000054# #k] ������[ #b#c4000054# #k/ #r50#k ]\r\n";
						  selStr += " [ #d#v4000053##z4000053# #k] ������[ #b#c4000053# #k/ #r50#k ]\r\n\r\n";
						  selStr += " 								#d#e�Ƿ�ȷ��������#k";
                          cm.sendYesNo(selStr);
                          sj = 4;
						  
					}else if (selection == 4) {
                      var selStr = "				  ����#v1002391##b#z1002391##k\r\n\r\n";
				          selStr += " #e-����������ϣ�#n\r\n";
						  selStr += " [ #d#v1002392##z1002392# #k] ������[ #b#c1002392# #k/ #r1#k ]\r\n";
						  selStr += " [ #d#v4000235##z4000235# #k] ������[ #b#c4000235# #k/ #r5#k ]\r\n";
						  selStr += " [ #d#v4000243##z4000243# #k] ������[ #b#c4000243# #k/ #r5#k ]\r\n";
						  selStr += " 								#d#e�Ƿ�ȷ������                                        ��#k";
                          cm.sendYesNo(selStr);
                          sj = 5;
						  
					}else if (selection == 5) {
                      var selStr = "				  ����#v1003112##b#z1003112##k\r\n\r\n";
				          selStr += " #e-����������ϣ�#n\r\n";
						  selStr += " [ #d#v1002391##z1002391# #k] ������[ #b#c1002391# #k/ #r1#k ]\r\n";
						  selStr += " [ #d#v4000175##z4000175# #k] ������[ #b#c4000175# #k/ #r5#k ]\r\n";
						  selStr += " [ #d#v3994839##z3994839# #k] ������[ #b#c3994839# #k/ #r1#k ]\r\n";
						  selStr += " 								#d#e�Ƿ�ȷ��������#k";
                          cm.sendYesNo(selStr);
                          sj = 6;
                   
                   
				  }
	}else if (status == 2) {
	       if (sj == 1){		
		   if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("�뱣֤���㹻�ı����ռ䡣");
				    cm.dispose();					
    } else if (cm.getPlayer().getMeso() <= 1) {
                    cm.sendOk("��Ҳ���1���޷�������");
					cm.dispose();
    } else if (cm.haveItem(4010007,100) == false) {
                    cm.sendOk("#v4010007#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(4010007,100) == false) {
                    cm.sendOk("#v4010007#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002394,1)) {
                    cm.sendOk("#r���Ѿ�ӵ��һ��#v1002394##z1002394#\r\n����ϳ�����ͬ�ȼ���");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002394)) {
					cm.sendOk("#r���Ѿ�ӵ��һ��#v1002394##z1002394#\r\n����ϳ�����ͬ�ȼ���");
					status = -1;
                    } else{
					cm.gainItem(4010007,-200);
					cm.gainItem(4010007,-100);
					cm.gainItem(1002394, 1);
					cm.����(1," ���:<"+cm.getName()+">�ɹ���������ͷ���~!������һ��ף����~!");
		 		    var selStr = "�����ɹ���"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}

    } else if (sj == 2){		
		  if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("�뱣֤���㹻�ı����ռ䡣");
				    cm.dispose();					
    } else if (cm.haveItem(4000028,50) == false) {
                    cm.sendOk("#v4000046#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(4000046,50) == false) {
                    cm.sendOk("#v4000046#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002394,1) == false) {
                    cm.sendOk("#v1142446#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002395,1)) {
                    cm.sendOk("#r���Ѿ�ӵ��һ��#v1002395##z1002395#\r\n����ϳ�����ͬ�ȼ���");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002395)) {
					cm.sendOk("#r���Ѿ�ӵ��һ��#v1002395##z1002395#\r\n����ϳ�����ͬ�ȼ���");
					status = -1;
                    } else{
					cm.gainItem(1002394,-1);
					cm.gainItem(4000028,-50);
					cm.gainItem(4000046,-50);
					cm.gainItem(1002395, 10,10,10,10,0,0,10,10,0,0,0,0,0,0);
					cm.����(1," ���:<"+cm.getName()+">�ɹ���������ͷ����~!������һ��ף����~!");
		 		    var selStr = "�����ɹ���"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
					
    } else if (sj == 3){		
		   if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("�뱣֤���㹻�ı����ռ䡣");
				    cm.dispose();					
	} else if (cm.haveItem(4000050,88) == false) {
                    cm.sendOk("#v4000050#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002395,1) == false) {
                    cm.sendOk("#v1142446#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002393,1)) {
                    cm.sendOk("#r���Ѿ�ӵ��һ��#v1002393##z1002393#\r\n����ϳ�����ͬ�ȼ���");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002393)) {
					cm.sendOk("#r���Ѿ�ӵ��һ��#v1002393##z1002393#\r\n����ϳ�����ͬ�ȼ���");
					status = -1;
                    } else{
					cm.gainItem(1002395,-1);
					cm.gainItem(4000050,-88);
					cm.gainItem(1002393, 20,20,20,20,0,0,20,20,0,0,0,0,0,0);
					cm.����(1," ���:<"+cm.getName()+">�ɹ���������ͷ���~!������һ��ף����~!");
		 		    var selStr = "�����ɹ���"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
					
    } else if (sj == 4){		
		   if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("�뱣֤���㹻�ı����ռ䡣");
				    cm.dispose();					
    } else if (cm.haveItem(4000053,50) == false) {
                    cm.sendOk("#v4000053#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(4000054,50) == false) {
                    cm.sendOk("#v4000054#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002393,1) == false) {
                    cm.sendOk("#v1142465#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002392,1)) {
                    cm.sendOk("#r���Ѿ�ӵ��һ��#v1002392##z1002392#\r\n����ϳ�����ͬ�ȼ���");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002392)) {
					cm.sendOk("#r���Ѿ�ӵ��һ��#v1002392##z1002392#\r\n����ϳ�����ͬ�ȼ���");
					status = -1;
                    } else{
					cm.gainItem(1002393,-1);
					cm.gainItem(4000053,-50);
					cm.gainItem(4000054,-50);
					cm.gainItem(1002392, 30,30,30,30,0,0,30,30,0,0,0,0,0,0);
					cm.����(1," ���:<"+cm.getName()+">�ɹ���������ͷ���~!������һ��ף����~!");
		 		    var selStr = "�����ɹ���"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
					
	} else if (sj == 5){		
		  if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("�뱣֤���㹻�ı����ռ䡣");
				    cm.dispose();					
    } else if (cm.haveItem(4000243,5) == false) {
                    cm.sendOk("#v4000243#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(4000235,5) == false) {
                    cm.sendOk("#v4000235#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002392,1) == false) {
                    cm.sendOk("#v1142475#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002391,1)) {
                    cm.sendOk("#r���Ѿ�ӵ��һ��#v1002391##z1002391#\r\n����ϳ�����ͬ�ȼ���");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002391)) {
					cm.sendOk("#r���Ѿ�ӵ��һ��#v1002391##z1002391#\r\n����ϳ�����ͬ�ȼ���");
					status = -1;
                    } else{
					cm.gainItem(1002392,-1);
					cm.gainItem(4000243,-5);
					cm.gainItem(4000235,-5);
					cm.gainItem(1002391, 40,40,40,40,0,0,40,40,0,0,0,0,0,0);
					cm.����(1," ���:<"+cm.getName()+">�ɹ���������ͷ����~!������һ��ף����~!");
		 		    var selStr = "�����ɹ���"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
	
	} else if (sj == 6){		
		   if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("�뱣֤���㹻�ı����ռ䡣");
				    cm.dispose();					
	} else if (cm.haveItem(4000175,5) == false) {
                    cm.sendOk("#v4000175#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1002391,1) == false) {
                    cm.sendOk("#v1142485#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(3994839,1) == false) {
                    cm.sendOk("#v3994839#�����������㣬��ȷ�Ϻ�������");
				    status = -1;
	} else if (cm.haveItem(1003112,1)) {
                    cm.sendOk("#r���Ѿ�ӵ��һ��#v1002357##z1002357#\r\n����ϳ�����ͬ�ȼ���");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1003112)) {
					cm.sendOk("#r���Ѿ�ӵ��һ��#v1002357##z1002357#\r\n����ϳ�����ͬ�ȼ���");
					status = -1;
                    } else{
					cm.gainItem(3994839,-1);
					cm.gainItem(1002391,-1);
					cm.gainItem(4000175,-5);
					cm.gainItem(1003112, 50,50,50,50,0,0,50,50,0,0,0,0,0,0);
					cm.����(1," ���:<"+cm.getName()+">�ɹ�������������ͷ��~!������һ��ף����~!");
		 		    var selStr = "�����ɹ���"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
					
}
}
}
}

