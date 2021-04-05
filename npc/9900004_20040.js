var 警报灯 = "#fMob/1210102.img/move/0#";
var 红色双箭头 = "#fUI/UIWindow.img/Quest/icon9/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 蜗牛 = "#fMob/0100101.img/move/0#";
var selec;
var sele;
var hsddd = 0;
var hsks = Array(
//矿石 物品ID 单价
	Array(1452044,1),
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
            text += " #e#b\t\t\t这里是#r武器#k分解机#k\r\n\r\n此机器只会分解#v1402185#（135级）#v1402036#（110级）#v1402035#（100级）系列#r各职业#k武器\r\n分解装备有几率可以获得以下物品：\r\n#b10点券#k#r（15%）#k#b10抵用#k#r（15%）#k#b 10万金币#k#r（15%）\r\n#k#b100杀怪点#k#r（15%）#k#v4001126##r（15%）#k#v4000313##r（15%）#k#v4310098##r（3%）#k#v4310156##r（2%）#k#v4251202##r（2%）#k#v2049323##r（3%）#k\r\n"//3
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
								cm.gainItem(4001126,100);
								
							} else if(s1 >=75 && s1 < 90){
								cm.gainItem(4000313,10);
								
								
								
							} else if(s1 >=90 && s1 < 93){
								cm.gainItem(4310098,1);
								
							} else if(s1 >=93 && s1 < 95){
								cm.gainItem(4310156,1);
								
							} else if(s1 >=95 && s1 < 97){
								cm.gainItem(4251202,1);
								
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


