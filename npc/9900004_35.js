var 警报灯 = "#fMob/1210102.img/move/0#";
var 红色双箭头 = "#fUI/UIWindow.img/Quest/icon9/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 蜗牛 = "#fMob/0100101.img/move/0#";
var selec;
var sele;
var hsddd = 0;
var hsjns = Array(1132178,1132177,1132176,1132175,1132174,1102485,1102484,1102483,1102482,1102481,1082547,1082546,1082545,1082544,1082543,1072747,1072746,1072745,1072744,1072743,1132169,1132170,1132171,1132172,1132173,1102476,1102477,1102478,1102479,1102480,1072737,1072738,1072739,1072740,1072741);//技能书
var hsks = Array(
//矿石 物品ID 单价


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
            text += " #e#b\t\t\t这里是卷轴分解机#k\r\n\r\n此机器只会分解#v1102485##r #v1072737##r\r\n#r请将你需要的卷轴摆摊或者丢弃，重要的卷轴分解概不负责#k\r\n分解卷轴有几率可以获得以下物品：\r\n#b10点券#k#r（15%）#k#b10抵用#k#r（15%）#k#b 10万金币#k#r（15%）\r\n#k#b100杀怪点#k#r（15%）#k#v4001126##r（15%）#k#v4000313##r（15%）#k#v4310097##r（3%）#k#v4310156##r（2%）#k#v4251202##r（2%）#k#v2049323##r（3%）#k\r\n"//3
            text += "   #L1##e#b一键分解卷轴（一张卷轴需要1000费用）#l     \r\n"
           
            cm.sendSimple(text);
		} else if(status == 1){
			if (selection == 1) {
				var text ="系统自动检测到你可以分解的卷轴如下:\r\n\r\n";
				for(var i = 0; i < hsjns.length; i++){
					var hssl = cm.getPlayer().getItemQuantity(hsjns[i], false);
					if(hssl != 0){
						text += "#v"+hsjns[i]+"##t"+hsjns[i]+"# × "+hssl+"\r\n";
						hsddd += hssl;
					}
				}
				text += "一共可以分解 #r#e"+hsddd+"#n#k 次，是否继续？";
				
				cm.sendYesNo(text);
			}
		} else if(status == 2){
				if(cm.getMeso() >= 2000*hsddd){
					cm.gainMeso(-2000*hsddd);
					cm.dispose();
					if(hsddd != 0){
						for(var i = 0; i < hsjns.length; i++){
							cm.removeAll(hsjns[i]);
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
								cm.gainItem(4310097,1);
								
							} else if(s1 >=93 && s1 < 95){
								cm.gainItem(4310156,1);
								
							} else if(s1 >=95 && s1 < 97){
								cm.gainItem(4251202,1);
								
							} else if(s1 >=97 && s1 < 100){
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
			
		}
    }
}

