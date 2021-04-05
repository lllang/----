var 警报灯 = "#fMob/1210102.img/move/0#";
var 红色双箭头 = "#fUI/UIWindow.img/Quest/icon9/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 蜗牛 = "#fMob/0100101.img/move/0#";
var selec;
var sele;
var hsddd = 0;
var hsks = Array(
//矿石 物品ID 单价

Array(1432182,1), //红色枪
Array(1382226,1), //红色长杖  
Array(1452220,1), //红色弓                           
Array(1462208,1), //红色之弩
Array(1332242,1), //红色切割者
Array(1472230,1), //红色拳套 
Array(1482183,1), //红色拳甲  
Array(1492194,1), //红色短枪 
Array(1402214,1), //双手剑


Array(1302086, 1),
Array(1312038, 1),
Array(1322061, 1),
Array(1332075, 1),
Array(1332076, 1),
Array(1372045, 1),
Array(1382059, 1),
Array(1412034, 1),
Array(1422038, 1),
Array(1432049, 1),
Array(1442067, 1),
Array(1452059, 1),
Array(1462051, 1),
Array(1472071, 1),
Array(1482024, 1),
Array(1492025, 1),
Array(1142399, 1),
Array(1142443, 1),
Array(1002790, 1),
Array(1002791, 1),
Array(1002792, 1),
Array(1002793, 1),
Array(1002794, 1),
Array(1082239, 1),
Array(1082240, 1),
Array(1082241, 1),
Array(1082243, 1),
Array(1052160, 1),
Array(1052161, 1),
Array(1052162, 1),
Array(1052163, 1),
Array(1052164, 1),
Array(1072361, 1),
Array(1072362, 1),
Array(1072363, 1),
Array(1072364, 1),
Array(1072365, 1),



Array(1132169,1),//海盗
Array(1132170,1),//海盗
Array(1132171,1),//海盗
Array(1132172,1),//海盗
Array(1132173,1),//海盗
Array(1102476,1),//海盗
Array(1102477,1),//海盗
Array(1102478,1),//海盗
Array(1102479,1),//海盗
Array(1102480,1),//海盗
Array(1072737,1),//海盗
Array(1072738,1),//海盗
Array(1072739,1),//海盗
Array(1072740,1),//海盗
Array(1072741,1),//海盗




Array(1462039,1),
Array(1312031,1),
Array(1322052,1),
Array(1402036,1),
Array(1302059,1),
Array(1332050,1),
Array(1442209,1),
Array(1472051,1),
Array(1472052,1),
Array(1412026,1),
Array(1422028,1),
Array(1442045,1),
Array(1382036,1),
Array(1372032,1),
Array(1492013,1),
Array(1482013,1),
Array(1432038,1),
Array(1332049,1),
Array(1332214,1),//布莱克缤短刀
Array(1372168,1),//布莱克缤短杖
Array(1382199,1),//布莱克缤长杖
Array(1402185,1), //布莱克缤双手剑
Array(1412126,1), // 布莱克缤双手斧
Array(1422129,1), //布莱克缤双手纯器
Array(1432158,1), //布莱克缤双手长枪
Array(1442209,1), //布莱克缤双手长矛
Array(1452196,1), //布莱克缤弓
Array(1462184,1), //布莱克缤弩
Array(1472205,1), //布莱克缤拳套
Array(1482159,1), //布莱克缤指节
Array(1492170,1), //布莱克缤短枪

Array(1102713,1),
Array(1102714,1),
Array(1102715,1),
Array(1102716,1),
Array(1102717,1),
Array(1052275,1),
Array(1052209,1),
Array(1052580,1),
Array(1052581,1),
Array(1052582,1),
Array(1052583,1),
Array(1052584,1),
Array(1052649,1),
Array(1052650,1),
Array(1052651,1),
Array(1052652,1),
Array(1052648,1),
Array(1052804,1),
Array(1052805,1),
Array(1052806,1),
Array(1052807,1),
Array(1052808,1),
Array(1072786,1),
Array(1072787,1),
Array(1072788,1),
Array(1072789,1),
Array(1072790,1),

Array(1372010,1),
Array(1382035,1),
Array(1432030,1),
Array(1442044,1),
Array(1452019,1),
Array(1452020,1),
Array(1452021,1),
Array(1462017,1),
Array(1462016,1),
Array(1462015,1),
Array(1482012,1),
Array(1492012,1),
Array(1332052,1),
Array(1322045,1),
Array(1422027,1),
Array(1412021,1),
Array(1312030,1),
Array(1302056,1),
Array(1402035,1),
Array(1472053,1),
Array(1332051,1)
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
            text += " #e#b\t\t\t这里是#r武器防具#k分解机#r分解为全部默认#k\r\n\r\n此机器只会分解#v1422169#（200级）#v1052160#（0-100级）#v1102476#（100级）系列#r各职业#k武器防具\r\n分解装备有几率可以获得以下物品：\r\n#b100点券#k#r（15%）#k#b100抵用#k#r（15%）#k#b 100万金币#k#r（15%）\r\n#k#b300豆豆#k#r（15%）#k#v4001126##r（15%）#k#v4000313##r（15%）#k#v2049750##r（2%）#k#v4310088##r（2%）#k#v4251201##r（2%）#k#v2614000##r（2%）#k#v5150040##r（2%）#k\r\n"//3
            text += "   #L2##e#b一键分解装备（一件装备分解需要20000费用）#l     \r\n"
           
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
				if(cm.getMeso() >= 20000*hsddd){
					cm.gainMeso(-20000*hsddd);
					cm.dispose();
					if(hsddd != 0){
						for(var i = 0; i < hsks.length; i++){
							cm.removeAll(hsks[i][0]);
						}
						while(hsddd > 0){
							s1 = Math.floor(Math.random() * (100 - 1) + 1);
							if(s1 >=1 && s1 < 15){
								//cm.gainNX(100);
								
							} else if(s1 >=15 && s1 < 30){
								//cm.gainDY(100);
								
							} else if(s1 >=30 && s1 < 45){
								//cm.gainMeso(400000);
								
							} else if(s1 >=45 && s1 < 60){
								//cm.gainBeans(300);
								
							} else if(s1 >=60 && s1 < 75){
								cm.gainItem(4001126,50);
								
							} else if(s1 >=75 && s1 < 90){
								cm.gainItem(5150040,1);
								
								
								
							} else if(s1 >=90 && s1 < 92){
								cm.gainItem(4000313,1);
								
							} else if(s1 >=92 && s1 < 94){
								cm.gainItem(4310088,1);
								
							} else if(s1 >=94 && s1 < 96){
								cm.gainItem(4251201,1);
								
							} else if(s1 >=96 && s1 < 98){
								cm.gainItem(2614000,1);
								
							} else if(s1 >=98 && s1 < 100){
								cm.gainItem(2049750,1);
								
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


