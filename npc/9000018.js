var 警报灯 = "#fMob/1210102.img/move/0#";
var 红色双箭头 = "#fUI/UIWindow.img/Quest/icon9/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 蜗牛 = "#fMob/0100101.img/move/0#";
var selec;
var sele;
var hsddd = 0;
var hsks = Array(
//矿石 物品ID 单价
Array(1432075,1),
Array(1402085,1),
Array(1372071,1),
Array(1462085,1),
Array(1452100,1),
Array(1472111,1),
Array(1482073,1),
Array(1492073,1),
Array(4031217,1),
Array(1402047,1),
Array(1432049,1),
Array(1442067,1),
Array(1452059,1),
Array(1462051,1),
Array(1472071,1),
Array(1482024,1),
Array(1492025,1),
Array(1302086,1),
Array(1332075,1),

Array(1003242,1),//1
Array(1052357,1),
Array(1102294,1),
Array(1072521,1),
Array(1082314,1),
Array(1132092,1),


Array(1132110,1),
Array(1102322,1),
Array(1082391,1),
Array(1072610,1),
Array(1052405,1),
Array(1003364,1),
Array(1122174,1),
Array(1082401,1),
Array(1072618,1),
Array(1062148,1),
Array(1042231,1),
Array(1032121,1),
Array(1302160,1),
Array(1302161,1),
Array(1302162,1),
Array(1432037,1),
Array(1402063,1),
Array(1092022,1),

Array(1302106,1),
Array(1302080,1),
Array(1302085,1),
Array(1302087,1),
Array(1402044,1),
Array(1302061,1),
Array(1432046,1),
Array(1302024,1),
Array(1322051,1),
Array(1402014,1),
Array(1402029,1),

Array(1332053,1),
Array(1372017,1),
Array(1442039,1),
Array(1332021,1),
Array(1302036,1),
Array(1092049,1),
Array(1302049,1),
Array(1012056,1),
Array(1012161,1),
Array(1402037,1),
Array(1032108,1),

Array(1004492,1),
Array(1052929,1),
Array(1073057,1),
Array(1082647,1),
Array(1102828,1),
Array(1012331,1),
Array(1022148,1),
Array(1032137,1),
Array(1122306,1),
Array(1132287,1),
Array(1072664,1),

Array(1022225,1),
Array(1113040,1),
Array(1382016,1),
Array(1302066,1),
Array(1012371,1),
Array(1132013,1),
Array(1102383,1),
Array(1012284,1),
Array(1112597,1),
Array(1142175,1),
Array(1072664,1),

Array(1004041,1),
Array(1004042,1),
Array(1004043,1),
Array(1004040,1),
Array(1004044,1),
Array(1003766,1),
Array(1102383,1),
Array(1012284,1),
Array(1112597,1),
Array(1142175,1),
Array(1072664,1),

Array(1302160,1),
Array(1302161,1),
Array(1302162,1),
Array(1432037,1),
Array(1402063,1),
Array(1092022,1),
Array(1302106,1),
Array(1302080,1),
Array(1302085,1),
Array(1302087,1),
Array(1402044,1),
Array(1302061,1),
Array(1432046,1),
Array(1302024,1),
Array(1322051,1),
Array(1402014,1),
Array(1402029,1),
Array(1332053,1),
Array(1372017,1),
Array(1442039,1),//布莱克缤短刀
Array(1332021,1),//布莱克缤短杖
Array(1302036,1),//布莱克缤长杖
Array(1092049,1), //布莱克缤双手剑
Array(1302049,1), // 布莱克缤双手斧
Array(1012056,1), //布莱克缤双手纯器
Array(1012161,1), //布莱克缤双手长枪
Array(1402037,1) //布莱克缤双手长矛

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
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//显示物品ID图片用的代码是  #v这里写入ID#
            text += " #e#b\t\t\t这里是#r武器#k分解机#k\r\n\r\n此机器只会分解抽奖玩具#v1302160#（玩具）#v1012161#（玩具）#v1402037#（玩具）系列#r各职业#k武器\r\n分解装备有几率可以获得以下物品：\r\n#b10点券#k#r（15%）#k#b10抵用#k#r（15%）#k#b 10万金币#k#r（15%）\r\n#k#b100杀怪点#k#r（15%）#k#v4001126##r（15%）#k#v4000313##r（15%）#k#v4310098##r（3%）#k#v4310156##r（2%）#k#v4310097##r（2%）#k#v2049323##r（3%）#k\r\n"//3
            text += "   #L2##e#b一键分解装备（一件装备分解需要2000费用）#l     \r\n"
           
            cm.sendSimple(text);
		} else if(status == 1){
			if (selection == 2) {
				var text ="系统自动检测到你可以分解的装备如下:\r\n\r\n";
				for(var i = 0; i < hsks.length; i++){
					var hssl = cm.getPlayer().getItemQuantity(hsks[i][0], false);
					var hssl1 = hssl * hsks[i][1];
					if(hssl != 0){
						text += "#v"+hsks[i][0]+"##t"+hsks[i][0]+"# × "+hssl+" \r\n";
						hsddd += hssl1;
					}
				}
				text += "一共可以抽奖 #r#e"+hsddd+"#n#k 次,是否继续";
				sele = 1;
				cm.sendYesNo(text);
				
			}
		} else if(status == 2){
			if(sele == 1){
				if(cm.getMeso() >= 2000*hsddd){
					cm.gainMeso(-2000*hsddd);
					cm.dispose();
					if(hsddd != 0){
						for(var i = 0; i < hsks.length; i++){
							cm.removeAll(hsks[i][0]);
						}
						while(hsddd > 0){
							s1 = Math.floor(Math.random() * (100 - 1) + 1);
							if(s1 >=1 && s1 < 15){
								cm.gainNX(10);
								
							} else if(s1 >=15 && s1 < 30){
								cm.gainDY(10);
								
							} else if(s1 >=30 && s1 < 45){
								cm.gainMeso(100000);
								
							} else if(s1 >=45 && s1 < 60){
								cm.getPlayer().setAccountLog("杀怪点数",1, 100);
								
							} else if(s1 >=60 && s1 < 75){
								cm.gainItem(4001126,5);
								
							} else if(s1 >=75 && s1 < 90){
								cm.gainItem(4000313,1);
								
								
								
							} else if(s1 >=90 && s1 < 93){
								cm.gainItem(4310098,1);
								
							} else if(s1 >=93 && s1 < 95){
								cm.gainItem(4310156,1);
								
							} else if(s1 >=95 && s1 < 97){
								cm.gainItem(4310097,1);
								
							}  else if(s1 >=97 && s1 < 100){
								cm.gainItem(2049323,1);
								
							} else {
								cm.gainMeso(100000);
							}
							hsddd--;
						}
						cm.sendOk("回收成功,请查看你背包获得了些什么吧~!");
						cm.dispose();
					} else {
						cm.sendOk("你没有可以回收的物品哦~!");
						cm.dispose();
					}
				} else {
					cm.sendOk("金币不足");
					cm.dispose();
				}
			} else {
				cm.sendOk(sele);
			}
		}
    }
}


