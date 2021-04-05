
var v = "#fUI/GuildMark/Mark/Letter/00005021/4#";
var 哎 = "#fUI/GuildMark/Mark/Letter/00005008/4#";
var p = "#fUI/GuildMark/Mark/Letter/00005015/4#";
var 皇冠白 ="#fUI/GuildMark/Mark/Etc/00009004/15#";
var 幸运草 ="#fUI/GuildMark/Mark/Plant/00003006/15#";
var 香水 ="#fUI/GuildMark/Mark/Pattern/00004008/15#";
var 中条白 ="#fUI/Basic/HScr7/disabled/base#";
var 中条蓝 ="#fUI/ChatBalloon/tutorial/w#";

var 中条猫 ="#fUI/ChatBalloon/119/n#";
var 猫右 =  "#fUI/ChatBalloon/119/ne#";
var 猫左 =  "#fUI/ChatBalloon/119/nw#";
var 右 =    "#fUI/ChatBalloon/119/e#";
var 左 =    "#fUI/ChatBalloon/119/w#";
  
var 下条猫 ="#fUI/ChatBalloon/119/s#";
var 猫下右 ="#fUI/ChatBalloon/119/se#";
var 猫下左 ="#fUI/ChatBalloon/119/sw#";

var 彩虹1 ="#fUI/ChatBalloon/122/n#";
var 彩虹上1 =  "#fUI/ChatBalloon/122/ne#";
var 彩虹上2 =  "#fUI/ChatBalloon/122/nw#";
var 彩1 =    "#fUI/ChatBalloon/122/e#";
var 彩2 =    "#fUI/ChatBalloon/122/w#";
  
var 彩虹下 ="#fUI/ChatBalloon/122/s#";
var 彩虹下1 ="#fUI/ChatBalloon/122/se#";
var 彩虹下2 ="#fUI/ChatBalloon/122/sw#";
var 彩虹中 ="#fUI/ChatBalloon/122/head#";
//
var 梅花 ="#fUI/GuildMark/Mark/Animal/00002008/14#";
var 蝴蝶 ="#fUI/GuildMark/Mark/Animal/00002020/14#";
var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";//"+圆形+"
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 退出 = "#fUI/CN_Chat/ChattingRoom/BtExit/0/mouseOver/0#";
var 奖励 = "#fUI/UIWindow/Quest/reward#";
var 键盘 = "#fUI/UIWindow/SoftKeyboard/key/97/mouseOver/0#";
var 二段跳 = "#fSkill/411/skill/4111006/iconMouseOver#";
var 购买 = "#fUI/UIWindow/PersonalShop/BtBuy/mouseOver/0#";
var 钻石 = "#fUI/GuildMark/Mark/Animal/00002006/16#";
var 热点 = "#fUI/CashShop/CSChar/BtCoordination/mouseOver/0#";
var 等级 = "#fEffect/PetEff/Basic/LevelUp/14#";
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
            cm.sendOk("感谢你的光临！");
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
		if(cm.getPlayer().getBossLog("炼器师级别",1) == 0){
        var text  = "                  #d"+皇冠白+" - #r#e宿主箱子#d - "+皇冠白+"#n#l\r\n\r\n";
			text += "         "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
			text += "                  #n#b炼器师级别:[#r炼器废材#b]#l\r\n"
			text += "         "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
			text += "       #n#L1##b[#r开始炼器#b]#l#L8##b[#r自我提升#b]#l#L7##b[#r购买丹炉#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("炼器师级别",1) == 1){
        var text  = "                  #d"+皇冠白+" - #r#e宿主箱子#d - "+皇冠白+"#n#l\r\n\r\n";
			text += "         "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
			text += "                  #n#b炼器师级别:[#r炼器学徒#b]#l\r\n"
			text += "         "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
			text += "       #n#L2##b[#r开始炼器#b]#l#L9##b[#r自我提升#b]#l#L7##b[#r购买丹炉#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("炼器师级别",1) == 2){
        var text  = "                  #d"+皇冠白+" - #r#e宿主箱子#d - "+皇冠白+"#n#l\r\n\r\n";
			text += "         "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
			text += "                 #n#b炼器师级别:[#r低级炼器师#b]#l\r\n"
			text += "         "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
			text += "       #n#L3##b[#r开始炼器#b]#l#L10##b[#r自我提升#b]#l#L7##b[#r购买丹炉#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("炼器师级别",1) == 3){
        var text  = "                  #d"+皇冠白+" - #r#e宿主箱子#d - "+皇冠白+"#n#l\r\n\r\n";
			text += "         "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
			text += "                 #n#b炼器师级别:[#r中级炼器师#b]#l\r\n"
			text += "         "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
			text += "       #n#L4##b[#r开始炼器#b]#l#L11##b[#r自我提升#b]#l#L7##b[#r购买丹炉#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("炼器师级别",1) == 4){
        var text  = "                  #d"+皇冠白+" - #r#e宿主箱子#d - "+皇冠白+"#n#l\r\n\r\n";
			text += "         "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
			text += "                 #n#b炼器师级别:[#r高级炼器师#b]#l\r\n"
			text += "         "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
			text += "       #n#L5##b[#r开始炼器#b]#l#L12##b[#r自我提升#b]#l#L7##b[#r购买丹炉#b]#l"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getBossLog("炼器师级别",1) == 5){
        var text  = "                  #d"+皇冠白+" - #r#e宿主箱子#d - "+皇冠白+"#n#l\r\n\r\n";
			text += "         "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
			text += "                  #n#b炼器师级别:[#r炼器大师#b]#l\r\n"
			text += "         "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
			text += "       #n#L6##b[#r开始炼器#b]#l#L13##b[#r法器兑换#b]#l#L14##b[#r法器合成#b]#l"
			cm.sendSimple(text);
		}
        }else if(status == 1){
			if (selection == 1) {
				cm.dispose();
				cm.openNpc(9310059,1001)
			}else if(selection == 2) {
				cm.dispose();
				cm.openNpc(9310059,1002)
			}else if(selection == 3) {
				cm.dispose();
				cm.openNpc(9310059,1003)
			}else if(selection == 4) {
				cm.dispose();
				cm.openNpc(9310059,1004)
			}else if(selection == 5) {
				cm.dispose();
				cm.openNpc(9310059,1005)
			}else if(selection == 6) {
				cm.dispose();
				cm.openNpc(9310059,1006)
			}else if(selection == 13) {
				cm.dispose();
				cm.openNpc(9310059,1007)
			}else if(selection == 14) {
				cm.dispose();
				cm.openNpc(9310059,1008)
//--------------------------------------------------------------------------------
			}else if(selection == 7){
				warp = 7;
				cm.sendYesNo(""+购买+"\r\n\r\n"+圆形+" 购买[#r#v3010109#丹炉#k]需要消耗:\r\n\r\n"+感叹号+" 杀怪点数#k[#r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k/#b5000#k]#k");
			}else if(selection == 8){
			    warp = 8;
			    cm.sendYesNo(""+等级+"\r\n\r\n"+圆形+" 需要[#d#v 3990000# #z 3990000##k] #r#c3990000##k/#b2#k\r\n"+圆形+" 成功炼器次数:[#r"+cm.getPlayer().getBossLog("成功炼器次数",1)+"#k/#b10#k]次\r\n"+圆形+" 消耗杀怪点数:#k[#r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k/#b100000#k]#k\r\n"+圆形+" 消耗背包金币:[#r"+cm.getPlayer().getMeso()+"#k/#b100000000#k]\r\n"+圆形+" 升级后炼器提升几率如下:\r\n\r\n"+感叹号+" :#b#v3990000# +0%#v3990001# +4%#v3990002# +3%#v3990003# +2%#v3990004# +1%#k\r\n"+感叹号+" 失败率减少#r -10%#k");
			}else if(selection == 9){
			    warp = 9;
			    cm.sendYesNo(""+等级+"\r\n\r\n"+圆形+" 需要[#d#v 3990001# #z 3990001##k] #r#c3990001##k/#b2#k\r\n"+圆形+" 成功炼器次数:[#r"+cm.getPlayer().getBossLog("成功炼器次数",1)+"#k/#b30#k]次\r\n"+圆形+" 消耗杀怪点数:#k[#r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k/#b150000#k]#k\r\n"+圆形+" 消耗背包金币:[#r"+cm.getPlayer().getMeso()+"#k/#b200000000#k]\r\n"+圆形+" 升级后炼器提升几率如下:\r\n\r\n"+感叹号+" :#b#v3990000# +0%#v3990001# +4%#v3990002# +3%#v3990003# +2%#v3990004# +1%#k\r\n"+感叹号+" 失败率减少#r -10%#k");
			}else if(selection == 10){
			    warp = 10;
			    cm.sendYesNo(""+等级+"\r\n\r\n"+圆形+" 需要[#d#v 3990002# #z 3990002##k] #r#c3990002##k/#b2#k\r\n"+圆形+" 成功炼器次数:[#r"+cm.getPlayer().getBossLog("成功炼器次数",1)+"#k/#b60#k]次\r\n"+圆形+" 消耗杀怪点数:#k[#r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k/#b200000#k]#k\r\n"+圆形+" 消耗背包金币:[#r"+cm.getPlayer().getMeso()+"#k/#b300000000#k]\r\n"+圆形+" 升级后炼器提升几率如下:\r\n\r\n"+感叹号+" :#b#v3990000# +0%#v3990001# +4%#v3990002# +3%#v3990003# +2%#v3990004# +1%#k\r\n"+感叹号+" 失败率减少#r -10%#k");
			}else if(selection == 11){
			    warp = 11;
			    cm.sendYesNo(""+等级+"\r\n\r\n"+圆形+" 需要[#d#v 3990003# #z 3990003##k] #r#c3990003##k/#b2#k\r\n"+圆形+" 成功炼器次数:[#r"+cm.getPlayer().getBossLog("成功炼器次数",1)+"#k/#b100#k]次\r\n"+圆形+" 消耗杀怪点数:#k[#r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k/#b300000#k]#k\r\n"+圆形+" 消耗背包金币:[#r"+cm.getPlayer().getMeso()+"#k/#b500000000#k]\r\n"+圆形+" 升级后炼器提升几率如下:\r\n\r\n"+感叹号+" :#b#v3990000# +0%#v3990001# +4%#v3990002# +3%#v3990003# +2%#v3990004# +1%#k\r\n"+感叹号+" 失败率减少#r -10%#k");
			}else if(selection == 12){
			    warp = 12;
			    cm.sendYesNo(""+等级+"\r\n\r\n"+圆形+" 需要[#d#v 3990004# #z 3990004##k] #r#c3990004##k/#b2#k\r\n"+圆形+" 成功炼器次数:[#r"+cm.getPlayer().getBossLog("成功炼器次数",1)+"#k/#b150#k]次\r\n"+圆形+" 消耗杀怪点数:#k[#r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k/#b500000#k]#k\r\n"+圆形+" 消耗背包金币:[#r"+cm.getPlayer().getMeso()+"#k/#b1000000000#k]\r\n"+圆形+" 升级后炼器提升几率如下:\r\n\r\n"+感叹号+" :#b#v3990000# -10%#v3990001# +5%#v3990002# +5%#v3990003# +5%#v3990004# +5%#k\r\n"+感叹号+" 失败率减少#r -10%#k");
			
			}
			
		}else if(status == 2) {
			if(warp == 7){
				if(cm.getInventory(3).isFull(0)){
					cm.sendOk("设置栏空余不足1个空格！");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("杀怪点数",1) >= 5000){ //物品条件
			       cm.getPlayer().getAccountLog("杀怪点数",1);
			       cm.getPlayer().setAccountLog("杀怪点数",1,-5000);
                   cm.gainItem(3010109,1);
				   cm.sendOk("购买成功");
				   cm.喇叭(2,"购买丹炉" + " : " + cm.getPlayer().getName() +"：炼器师的日常,无非就是买一个新的丹炉");
				   cm.dispose();
				}else{
				   cm.sendOk("杀怪点数不足5000");
				   cm.dispose();
   		
                }
		    }else if(warp == 8){//
				if(cm.getPlayer().getBossLog("成功炼器次数",1) < 10){
					cm.sendOk("你成功炼器次数不足10次");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("炼器师级别",1) == 1){
					cm.sendOk("你已经升级过了,有问题请联系GM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 100000000){
					cm.sendOk("你金币不足1亿");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990000,2)){
					cm.sendOk("你缺少1级次品法器2个");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("杀怪点数",1) >= 100000){ //物品条件
			       cm.getPlayer().getAccountLog("杀怪点数",1);
			       cm.getPlayer().setAccountLog("杀怪点数",1,-100000);
                   cm.getPlayer().setBossLog("炼器师级别",1)
                   cm.gainItem(3990000,-2);
				   cm.sendOk("升级成功");
				   cm.喇叭(2,"炼器学徒" + " : " + cm.getPlayer().getName() +"：恭喜成功升级为炼器学徒");
				   cm.dispose();
				}else{
				   cm.sendOk("杀怪点数不足10万");
				   cm.dispose();
   		
                }
		    }else if(warp == 9){//
				if(cm.getPlayer().getBossLog("成功炼器次数",1) < 30){
					cm.sendOk("你成功炼器次数不足30次");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("炼器师级别",1) == 2){
					cm.sendOk("你已经升级过了,有问题请联系GM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 200000000){
					cm.sendOk("你金币不足2亿");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990001,2)){
					cm.sendOk("你缺少2级下品法器2个");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("杀怪点数",1) >= 150000){ //物品条件
			       cm.getPlayer().getAccountLog("杀怪点数",1);
			       cm.getPlayer().setAccountLog("杀怪点数",1,-150000);
                   cm.getPlayer().setBossLog("炼器师级别",1)
                   cm.gainItem(3990001,-2);
				   cm.sendOk("升级成功");
				   cm.喇叭(2,"低级炼器师" + " : " + cm.getPlayer().getName() +"：恭喜成功升级为低级炼器师");
				   cm.dispose();
				}else{
				   cm.sendOk("杀怪点数不足15万");
				   cm.dispose();
   		
                }
		    }else if(warp == 10){//
				if(cm.getPlayer().getBossLog("成功炼器次数",1) < 60){
					cm.sendOk("你成功炼器次数不足60次");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("炼器师级别",1) == 3){
					cm.sendOk("你已经升级过了,有问题请联系GM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 300000000){
					cm.sendOk("你金币不足3亿");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990002,2)){
					cm.sendOk("你缺少3级中品法器2个");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("杀怪点数",1) >= 200000){ //物品条件
			       cm.getPlayer().getAccountLog("杀怪点数",1);
			       cm.getPlayer().setAccountLog("杀怪点数",1,-200000);
                   cm.getPlayer().setBossLog("炼器师级别",1)
                   cm.gainItem(3990002,-2);
				   cm.sendOk("升级成功");
				   cm.喇叭(2,"中级炼器师" + " : " + cm.getPlayer().getName() +"：恭喜成功升级为中级炼器师");
				   cm.dispose();
				}else{
				   cm.sendOk("杀怪点数不足20万");
				   cm.dispose();
   		
                }
		    }else if(warp == 11){//
				if(cm.getPlayer().getBossLog("成功炼器次数",1) < 100){
					cm.sendOk("你成功炼器次数不足100次");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("炼器师级别",1) == 4){
					cm.sendOk("你已经升级过了,有问题请联系GM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 500000000){
					cm.sendOk("你金币不足5亿");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990003,2)){
					cm.sendOk("你缺少4级上品法器2个");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("杀怪点数",1) >= 300000){ //物品条件
			       cm.getPlayer().getAccountLog("杀怪点数",1);
			       cm.getPlayer().setAccountLog("杀怪点数",1,-300000);
                   cm.getPlayer().setBossLog("炼器师级别",1)
                   cm.gainItem(3990003,-2);
				   cm.sendOk("升级成功");
				   cm.喇叭(2,"高级炼器师" + " : " + cm.getPlayer().getName() +"：恭喜成功升级为高级炼器师");
				   cm.dispose();
				}else{
				   cm.sendOk("杀怪点数不足30万");
				   cm.dispose();
   		
                }
		    }else if(warp == 12){//
				if(cm.getPlayer().getBossLog("成功炼器次数",1) < 150){
					cm.sendOk("你成功炼器次数不足150次");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getBossLog("炼器师级别",1) == 5){
					cm.sendOk("你已经升级过了,有问题请联系GM");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getMeso() < 1000000000){
					cm.sendOk("你金币不足10亿");
				    cm.dispose();
	            return false;
				}
				if(!cm.haveItem(3990004,2)){
					cm.sendOk("你缺少5级极品法器2个");
				    cm.dispose();
	            return false;
				}
				if(cm.getPlayer().getAccountLog("杀怪点数",1) >= 500000){ //物品条件
			       cm.getPlayer().getAccountLog("杀怪点数",1);
			       cm.getPlayer().setAccountLog("杀怪点数",1,-500000);
                   cm.getPlayer().setBossLog("炼器师级别",1)
                   cm.gainItem(3990004,-2);
				   cm.sendOk("升级成功");
				   cm.喇叭(2,"炼器大师" + " : " + cm.getPlayer().getName() +"：恭喜成功升级为炼器大师");
				   cm.dispose();
				}else{
				   cm.sendOk("杀怪点数不足50万");
				   cm.dispose();
   		
                }
		    }
		}   
    }
}


function packageHave(type,number){
	var object = -1;
	var count = 0;
	var flag = true;
//	for(var i = 0;i<32;i++){
//		object = cm.getInventory(type).getItem(i);
//		if(null == object){
//			count++;
//			if(count>=number){
//				flag = false;
//				break;
//			}
//		}
//	}
	return flag;
}