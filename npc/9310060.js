

var sj;


//道具代码：
var 强化升级次数道具 = 3991026;
var 强化血魔道具 = 3991027;

var 全属性 = 10;
var 双攻 = 5;
var 金币 = 50000000;
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
	    var textz = "	#r#e以下帽子每一级只可带一个！[你懂得]\r\n#e";

		textz += "#b#L0#制作#v1002394##z1002394##k\r\n";
		
		textz += "#r#L1#制作#v1002395##z1002395#[全属性10]#k\r\n";

		textz += "#r#L2#制作#v1002393##z1002393#[全属性20]#k\r\n";

		textz += "#r#L3#制作#v1002392##z1002392#[全属性30]#k\r\n";
		
		textz += "#r#L4#制作#v1002391##z1002391#[全属性40]#k\r\n";
		
		textz += "#r#L5#制作#v1003112##z1003112#[全属性50]#k\r\n";

			
		cm.sendSimple (textz); 

             } else if (status == 1) {
                   if (selection == 0) {
                      var selStr = "				  制作#v1002394##b#z1002394##k\r\n\r\n";
				          selStr += " #e- 制作所需材料：\r\n#n[ #d#v4010007##z4010007# #k]  数量：[ #b#c4010007# #k/ #r100#k ]\r\n";
						  selStr += "[ #d#v4010007##z4010007# #k]  数量：[ #b#c4010007# #k/ #r100#k ]\r\n";
						  selStr += " 								#d#e是否确认制作？#k";
                          cm.sendYesNo(selStr);
                          sj = 1;

				   }else if (selection == 1) {
                      var selStr = "				  制作#v1002395##b#z1002395##k\r\n\r\n";
				          selStr += " #e- 制作所需材料：\r\n#n[ #d#v1002394##z1002394# #k]  数量：[ #b#c1002394# #k/ #r1#k ]\r\n";
						  selStr += "[ #d#v4000046##z4000046# #k]  数量：[ #b#c4000046# #k/ #r50#k ]\r\n";
						  selStr += "[ #d#v4000028##z4000028# #k]  数量：[ #b#c4000028# #k/ #r50#k ]\r\n\r\n";
						  selStr += " 								#d#e是否确认制作？#k";
                          cm.sendYesNo(selStr);
                          sj = 2;
					
				   }else if (selection == 2) {
                      var selStr = "				  制作#v1002393##b#z1002393##k\r\n\r\n";
				          selStr += " #e-制作所需材料：#n\r\n";
						  selStr += " [ #d#v1002395##z1002395# #k] 数量：[ #b#c1002395# #k/ #r1#k ]\r\n";
						  selStr += " [ #d#v4000050##z4000050# #k] 数量：[ #b#c4000050# #k/ #r88#k ]\r\n\r\n";
						  selStr += " 								#d#e是否确认制作？#k";
                          cm.sendYesNo(selStr);
                          sj = 3;
						  
				   }else if (selection == 3) {
					   var selStr = "				  制作#v1002392##b#z1002392##k\r\n\r\n";
				          selStr += " #e-制作所需材料：\r\n#n[ #d#v1002393##z1002393# #k] 数量：[ #b#c1002393# #k/ #r1#k ]\r\n";
						  selStr += " [ #d#v4000054##z4000054# #k] 数量：[ #b#c4000054# #k/ #r50#k ]\r\n";
						  selStr += " [ #d#v4000053##z4000053# #k] 数量：[ #b#c4000053# #k/ #r50#k ]\r\n\r\n";
						  selStr += " 								#d#e是否确认制作？#k";
                          cm.sendYesNo(selStr);
                          sj = 4;
						  
					}else if (selection == 4) {
                      var selStr = "				  制作#v1002391##b#z1002391##k\r\n\r\n";
				          selStr += " #e-制作所需材料：#n\r\n";
						  selStr += " [ #d#v1002392##z1002392# #k] 数量：[ #b#c1002392# #k/ #r1#k ]\r\n";
						  selStr += " [ #d#v4000235##z4000235# #k] 数量：[ #b#c4000235# #k/ #r5#k ]\r\n";
						  selStr += " [ #d#v4000243##z4000243# #k] 数量：[ #b#c4000243# #k/ #r5#k ]\r\n";
						  selStr += " 								#d#e是否确认制作                                        ？#k";
                          cm.sendYesNo(selStr);
                          sj = 5;
						  
					}else if (selection == 5) {
                      var selStr = "				  制作#v1003112##b#z1003112##k\r\n\r\n";
				          selStr += " #e-制作所需材料：#n\r\n";
						  selStr += " [ #d#v1002391##z1002391# #k] 数量：[ #b#c1002391# #k/ #r1#k ]\r\n";
						  selStr += " [ #d#v4000175##z4000175# #k] 数量：[ #b#c4000175# #k/ #r5#k ]\r\n";
						  selStr += " [ #d#v3994839##z3994839# #k] 数量：[ #b#c3994839# #k/ #r1#k ]\r\n";
						  selStr += " 								#d#e是否确认制作？#k";
                          cm.sendYesNo(selStr);
                          sj = 6;
                   
                   
				  }
	}else if (status == 2) {
	       if (sj == 1){		
		   if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("请保证有足够的背包空间。");
				    cm.dispose();					
    } else if (cm.getPlayer().getMeso() <= 1) {
                    cm.sendOk("金币不足1，无法制作。");
					cm.dispose();
    } else if (cm.haveItem(4010007,100) == false) {
                    cm.sendOk("#v4010007#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(4010007,100) == false) {
                    cm.sendOk("#v4010007#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002394,1)) {
                    cm.sendOk("#r你已经拥有一个#v1002394##z1002394#\r\n请勿合成两个同等级的");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002394)) {
					cm.sendOk("#r你已经拥有一个#v1002394##z1002394#\r\n请勿合成两个同等级的");
					status = -1;
                    } else{
					cm.gainItem(4010007,-200);
					cm.gainItem(4010007,-100);
					cm.gainItem(1002394, 1);
					cm.喇叭(1," 玩家:<"+cm.getName()+">成功制作海盗头巾灰~!让我们一起祝贺他~!");
		 		    var selStr = "制作成功。"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}

    } else if (sj == 2){		
		  if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("请保证有足够的背包空间。");
				    cm.dispose();					
    } else if (cm.haveItem(4000028,50) == false) {
                    cm.sendOk("#v4000046#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(4000046,50) == false) {
                    cm.sendOk("#v4000046#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002394,1) == false) {
                    cm.sendOk("#v1142446#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002395,1)) {
                    cm.sendOk("#r你已经拥有一个#v1002395##z1002395#\r\n请勿合成两个同等级的");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002395)) {
					cm.sendOk("#r你已经拥有一个#v1002395##z1002395#\r\n请勿合成两个同等级的");
					status = -1;
                    } else{
					cm.gainItem(1002394,-1);
					cm.gainItem(4000028,-50);
					cm.gainItem(4000046,-50);
					cm.gainItem(1002395, 10,10,10,10,0,0,10,10,0,0,0,0,0,0);
					cm.喇叭(1," 玩家:<"+cm.getName()+">成功制作海盗头巾紫~!让我们一起祝贺他~!");
		 		    var selStr = "制作成功。"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
					
    } else if (sj == 3){		
		   if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("请保证有足够的背包空间。");
				    cm.dispose();					
	} else if (cm.haveItem(4000050,88) == false) {
                    cm.sendOk("#v4000050#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002395,1) == false) {
                    cm.sendOk("#v1142446#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002393,1)) {
                    cm.sendOk("#r你已经拥有一个#v1002393##z1002393#\r\n请勿合成两个同等级的");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002393)) {
					cm.sendOk("#r你已经拥有一个#v1002393##z1002393#\r\n请勿合成两个同等级的");
					status = -1;
                    } else{
					cm.gainItem(1002395,-1);
					cm.gainItem(4000050,-88);
					cm.gainItem(1002393, 20,20,20,20,0,0,20,20,0,0,0,0,0,0);
					cm.喇叭(1," 玩家:<"+cm.getName()+">成功制作海盗头巾粉~!让我们一起祝贺他~!");
		 		    var selStr = "制作成功。"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
					
    } else if (sj == 4){		
		   if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("请保证有足够的背包空间。");
				    cm.dispose();					
    } else if (cm.haveItem(4000053,50) == false) {
                    cm.sendOk("#v4000053#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(4000054,50) == false) {
                    cm.sendOk("#v4000054#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002393,1) == false) {
                    cm.sendOk("#v1142465#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002392,1)) {
                    cm.sendOk("#r你已经拥有一个#v1002392##z1002392#\r\n请勿合成两个同等级的");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002392)) {
					cm.sendOk("#r你已经拥有一个#v1002392##z1002392#\r\n请勿合成两个同等级的");
					status = -1;
                    } else{
					cm.gainItem(1002393,-1);
					cm.gainItem(4000053,-50);
					cm.gainItem(4000054,-50);
					cm.gainItem(1002392, 30,30,30,30,0,0,30,30,0,0,0,0,0,0);
					cm.喇叭(1," 玩家:<"+cm.getName()+">成功制作海盗头巾红~!让我们一起祝贺他~!");
		 		    var selStr = "制作成功。"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
					
	} else if (sj == 5){		
		  if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("请保证有足够的背包空间。");
				    cm.dispose();					
    } else if (cm.haveItem(4000243,5) == false) {
                    cm.sendOk("#v4000243#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(4000235,5) == false) {
                    cm.sendOk("#v4000235#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002392,1) == false) {
                    cm.sendOk("#v1142475#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002391,1)) {
                    cm.sendOk("#r你已经拥有一个#v1002391##z1002391#\r\n请勿合成两个同等级的");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1002391)) {
					cm.sendOk("#r你已经拥有一个#v1002391##z1002391#\r\n请勿合成两个同等级的");
					status = -1;
                    } else{
					cm.gainItem(1002392,-1);
					cm.gainItem(4000243,-5);
					cm.gainItem(4000235,-5);
					cm.gainItem(1002391, 40,40,40,40,0,0,40,40,0,0,0,0,0,0);
					cm.喇叭(1," 玩家:<"+cm.getName()+">成功制作海盗头巾绿~!让我们一起祝贺他~!");
		 		    var selStr = "制作成功。"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
	
	} else if (sj == 6){		
		   if (cm.canHold(1132294,1) == false)  {
		            cm.sendOk("请保证有足够的背包空间。");
				    cm.dispose();					
	} else if (cm.haveItem(4000175,5) == false) {
                    cm.sendOk("#v4000175#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1002391,1) == false) {
                    cm.sendOk("#v1142485#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(3994839,1) == false) {
                    cm.sendOk("#v3994839#道具数量不足，请确认后再来。");
				    status = -1;
	} else if (cm.haveItem(1003112,1)) {
                    cm.sendOk("#r你已经拥有一个#v1002357##z1002357#\r\n请勿合成两个同等级的");
				    status = -1;
	} else if (cm.getPlayer().hasEquipped(1003112)) {
					cm.sendOk("#r你已经拥有一个#v1002357##z1002357#\r\n请勿合成两个同等级的");
					status = -1;
                    } else{
					cm.gainItem(3994839,-1);
					cm.gainItem(1002391,-1);
					cm.gainItem(4000175,-5);
					cm.gainItem(1003112, 50,50,50,50,0,0,50,50,0,0,0,0,0,0);
					cm.喇叭(1," 玩家:<"+cm.getName()+">成功制作进阶扎昆头盔~!让我们一起祝贺他~!");
		 		    var selStr = "制作成功。"
		 		    cm.sendOk(selStr);
		 		    cm.dispose();
					}
					
}
}
}
}

