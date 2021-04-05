
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
		if(cm.getPlayer().getOneTimeLog("副职业炼丹师") == 0  && cm.getPlayer().getOneTimeLog("副职业炼器师") == 0 ){
        var text  = "                  #d"+皇冠白+" - #r#e宿主箱子#d - "+皇冠白+"#n#l\r\n\r\n";
			text += "         "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
			text += "          #n#L4##b副职业[#r炼丹师#b]#l#L5##b副职业[#r炼器师#b]#l\r\n\r\n"
			text += "         "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
			text += "                  #n#L100##b兑换[#r杀怪点数#b]#l\r\n"
			cm.sendSimple(text);
		}
		if(cm.getPlayer().getOneTimeLog("副职业炼丹师") == 1 || cm.getPlayer().getOneTimeLog("副职业炼器师") == 1){
        var text  = "                  #d"+皇冠白+" - #r#e宿主箱子#d - "+皇冠白+"#n#l\r\n\r\n";
			text += "         "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
		
		if(cm.getPlayer().getOneTimeLog("副职业炼丹师") == 1 ){
			text += "       #n#L7##b[#r炼丹功能#b]#l#n       #L10##b丹药[#r增加属性#b]]#l\r\n\r\n"
		}
		if(cm.getPlayer().getOneTimeLog("副职业炼器师") == 1){
			text += "       #n#L15##b[#r炼器功能#b]#l#n      #L109##b法器[#r强化装备#b]#l\r\n\r\n"
		}
		
			//text += "       #n#L10##b[#r强化功能#b]#l#L11##b[#r装备制作#b]#l#L12##b[#r点数商店#b]#l\r\n\r\n"
			text += "         "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
			text += "                  #n#L100##b兑换[#r杀怪点数#b]#l\r\n"
			cm.sendSimple(text);
		}
        }else if(status == 1){
			 if(selection == 2){
				cm.dispose();
				cm.openNpc(9900004,1110006)
				
			}else if(selection == 3){
				cm.dispose();
				cm.openNpc(1063010,99)
				
			}else if(selection == 109){
				cm.dispose();
				cm.openNpc(9310059,1100)
				
			}else if(selection == 7){
				cm.dispose();
				cm.openNpc(9310059,0)
				
			}else if(selection == 8){
				cm.dispose();
				cm.openNpc(1063010,20)
				
			}else if(selection == 9){
				cm.dispose();
				cm.openNpc(9900004,1212121)
				
			}else if(selection == 15){
				cm.dispose();
				cm.openNpc(9310059,1000)
				
			}else if(selection == 10){
				cm.dispose();
				cm.openNpc(9310059,101)
				
			}else if(selection == 11){
				cm.dispose();
				cm.openNpc(9310059,300)
				
			}else if(selection == 12){
				cm.dispose();
				cm.openNpc(9310059,200)
				
			}else if(selection == 100){
				cm.dispose();
				cm.openNpc(1063010,4)
				
			}else if(selection == 4){
			warp = 4;
			cm.sendYesNo(""+热点+":【#r炼丹师#k】\r\n\r\n"+圆形+" #d炼丹师可以炼制出[#r5#d]种级别的丹药,#b[都可买卖]#d\r\n"+圆形+" 对应给自身增加#r [2,4,6,10,15] #d点属性\r\n"+圆形+" #d炼丹师自身分为五级每次升级可提高炼丹成功率\r\n"+圆形+" #d每次炼丹需要消耗#r20000#d杀怪点以及#r5000#d万金币\r\n\r\n"+感叹号+" 副职业角色只能选一个,选了#r[炼丹师]#d就不能选#r[炼器师]\r\n"+感叹号+" #k考虑清楚了吗?消耗#k[#r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k/#b50000#k]#k万点杀怪点数转职");
			
            }else if(selection == 5){
			warp = 5;
			cm.sendYesNo(""+热点+":【#r炼器师#k】\r\n\r\n"+圆形+" #d炼器师可以炼制出[#r5#d]种级别的法器,#b[都可买卖]#d\r\n"+圆形+" 对应给装备增加#r [1.2.3.4.5] #d点攻击\r\n"+圆形+" #d炼器师自身分为五级每次升级可提高炼器成功率\r\n"+圆形+" #d每次炼器需要消耗#r20000#d杀怪点以及#r1#d亿金币\r\n\r\n"+感叹号+" 副职业角色只能选一个,选了#r[炼器师]#d就不能选#r[炼丹师]\r\n"+感叹号+" #k考虑清楚了吗?消耗#k[#r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k/#b50000#k]#k点杀怪点数转职");
		
			}
		
		}else if(status == 2) {
			if(warp == 4){
	            if (cm.getPlayer().getOneTimeLog("副职业炼器师") == 1) {
	                cm.sendOk("你已经选择了炼器师了!");
					cm.dispose();
	            return false;
	            }
				if(cm.getPlayer().getAccountLog("杀怪点数",1) >= 50000){ //物品条件
			       cm.getPlayer().getAccountLog("杀怪点数",1);
			       cm.getPlayer().setAccountLog("杀怪点数",1,-50000);
				   cm.getPlayer().setOneTimeLog("副职业炼丹师");
				  cm.喇叭(2,"副职业" + " : " + cm.getPlayer().getName() +"：成功选择了炼丹师");
				   cm.dispose();
				}else{
				   cm.sendOk("杀怪点数不足5万");
				   cm.dispose();
				}
		    }else if(warp == 5){
	            if (cm.getPlayer().getOneTimeLog("副职业炼丹师") == 1) {
	                cm.sendOk("你已经选择了炼丹师了!");
					cm.dispose();
	            return false;
	            }
				if(cm.getPlayer().getAccountLog("杀怪点数",1) >= 50000){ //物品条件
			       cm.getPlayer().getAccountLog("杀怪点数",1);
			       cm.getPlayer().setAccountLog("杀怪点数",1,-50000);
				   cm.getPlayer().setOneTimeLog("副职业炼器师");
				   cm.喇叭(2,"副职业" + " : " + cm.getPlayer().getName() +"：成功选择了炼器师");
				   cm.dispose();
				}else{
				   cm.sendOk("杀怪点数不足5万");
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

/*
	}else if(selection == 10000){
		if (cm.getInventory(4).isFull(29) ) {
		    cm.sendOk("#b其他栏空间不足30格.");	
	           cm.dispose();
	       return false;
		}
		cm.gainExp(50000);
		if(cm.getPlayer().getLevel() <= 230){
		cm.getChar().setLevel(250);
		cm.gainAp(1250);
		}
		cm.gainSp(500);
		cm.gainNX(50000);
		cm.gainMeso(888888888);
		cm.gainItem(4310154,10000);
		cm.gainItem(2049100,10);
		cm.gainItem(2340000,10);
		cm.gainItem(2049306,10);
		cm.gainItem(2049415,10);
		if(cm.getPlayer().getBossLog("lqcs1") < 2){
		cm.gainItem(4000435,999);
		cm.gainItem(4000460,999);
		cm.gainItem(4000461,999);
		cm.gainItem(4000462,999);
		cm.gainItem(4000243,999);
		cm.gainItem(4000235,999);
		cm.gainItem(2210006,10);
		cm.gainItem(4031475,999);
		cm.gainItem(4000382,999);
		cm.gainItem(4000379,999);
		cm.gainItem(4000383,999);
		cm.gainItem(4000431,999);
		cm.gainItem(4000430,999);
		cm.gainItem(4000020,999);
		cm.gainItem(4000021,999);
		cm.gainItem(4000040,999);
		cm.gainItem(4000478,999);
		cm.gainItem(4000037,999);
		cm.gainItem(4000107,999);
		cm.gainItem(4000106,999);
		cm.gainItem(4000025,999);
		cm.gainItem(4000177,999);
		cm.gainItem(4003004,999);
		cm.gainItem(4020008,999);
		cm.gainItem(4000429,999);
		cm.gainItem(4001111,999);
		cm.gainItem(4000000,999);
		cm.gainItem(4000016,999);
		cm.gainItem(4000019,999);
		cm.gainItem(4031026,999);
		cm.gainItem(4000176,999);
		cm.gainItem(4031227,999);
		cm.gainItem(4000245,999);
		cm.gainItem(4000244,999);
		}
		cm.setBossLog("月秒副本");
		cm.setBossLog("废弃副本");
		cm.setBossLog("玩具副本");
		cm.setBossLog("毒物副本");
		cm.setBossLog("海盗副本");
		cm.setBossLog("月秒副本");
		cm.setBossLog("废弃副本");
		cm.setBossLog("玩具副本");
		cm.setBossLog("毒物副本");
		cm.setBossLog("海盗副本");
		cm.getPlayer().setAccountLog('在线时间');
		cm.getPlayer().setAccountLog('在线时间');
		cm.getPlayer().setAccountLog('在线时间');
		cm.getPlayer().setBossLog("lqcs1")
		cm.刷新状态();
		
	    cm.dispose();
			*/