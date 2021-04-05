var 警报灯 = "#fMob/1210102.img/move/0#";
var 红色双箭头 = "#fUI/UIWindow.img/Quest/icon9/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 蜗牛 = "#fMob/0100101.img/move/0#";
var selec;
var sele;
var hsddd = 0;
var hsks = Array(
//矿石 物品ID 单价
	Array(1312153,1),//FFN
Array(1412135,1),
Array(1322203,1),
Array(1422140,1),
Array(1442223,1),
Array(1432167,1),
Array(1302275,1),
Array(1402196,1),
Array(1452205,1),
Array(1462193,1),
Array(1372177,1),
Array(1382208,1),
Array(1472214,1),
Array(1332225,1),
Array(1492179,1),
Array(1482168,1),

Array(1302285,1),//巨匠
Array(1312162,1),
Array(1322213,1),
Array(1332235,1),//布莱克缤短刀
Array(1372186,1),//布莱克缤短杖
Array(1382220,1),//布莱克缤长杖
Array(1402204,1), //布莱克缤双手剑
Array(1412144,1), // 布莱克缤双手斧
Array(1422149,1), //布莱克缤双手纯器
Array(1432176,1), //布莱克缤双手长枪
Array(1442232,1), //布莱克缤双手长矛
Array(1452214,1), //布莱克缤弓
Array(1462202,1), //布莱克缤弩
Array(1472223,1), //布莱克缤拳套
Array(1482177,1), //布莱克缤指节
Array(1492188,1) //布莱克缤短枪
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
            text += " #e#b\t\t\t这里是#r高级武器#k分解机#k\r\n\r\n#r注意:请将有需要的武器转移走，分解背包内所有的FFN武器和巨匠武器\r\n#r注意:请将有需要的武器转移走，分解背包内所有的FFN武器和巨匠武器\r\n#r注意:请将有需要的武器转移走，分解背包内所有的FFN武器和巨匠武器\r\n此机器只会分解#v1402196#（FFN系列）#v1402204#（巨匠系列）#r各职业#k武器\r\n分解装备有几率可以获得以下物品：\r\n#b100点券#k#r（15%）#k#b100抵用#k#r（15%）#k#b 20万金币#k#r（15%）\r\n#k#b50豆豆#k#r（15%）#k#v4000313##r（15%）#k#v4310098##r（8%）#k#v4310156##r（8%）#k#v4251202##r（5%）#k#v2049323##r（4%）#k\r\n"//3
            text += "   #L2##e#b一键分解装备（一件装备分解需要5000金币）#l     \r\n"
           
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
				if(cm.getMeso() >= 5000*hsddd){
					cm.gainMeso(-5000*hsddd);
					cm.dispose();
					if(hsddd != 0){
						for(var i = 0; i < hsks.length; i++){
							cm.removeAll(hsks[i][0]);
						}
						while(hsddd > 0){
							s1 = Math.floor(Math.random() * (100 - 1) + 1);
							if(s1 >=1 && s1 < 15){
								cm.gainNX(100);
								
							} else if(s1 >=15 && s1 < 30){
								cm.gainDY(100);
								
							} else if(s1 >=30 && s1 < 45){
								cm.gainMeso(200000);
								
							} else if(s1 >=45 && s1 < 60){
								cm.gainBeans(50);
								
							}  else if(s1 >=60 && s1 < 75){
								cm.gainItem(4000313,20);
							} else if(s1 >=75 && s1 < 83){
								cm.gainItem(4310098,1);
								
							} else if(s1 >=83 && s1 < 91){
								cm.gainItem(4310156,1);
								
							} else if(s1 >=91 && s1 < 96){
								cm.gainItem(4251202,1);
								
							}  else if(s1 >=96 && s1 < 100){
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


