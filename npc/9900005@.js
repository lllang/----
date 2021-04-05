var 铅笔图标 = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var 兔子1 = "#fEffect/CharacterEff/1082565/0/0#";
var 兔子2 = "#fEffect/CharacterEff/1082565/2/0#";
var 兔子3 = "#fEffect/CharacterEff/1082565/4/0#";
var selectio;
var 商店物品 = Array( 
			//Array(2041214,1,5000, ""),
			Array(4170000,1,3, ""),
			Array(4310148,1,5000, ""),
			Array(2041216,1,10000, ""),
			//Array(4310054,1,100, ""),
			Array(5510000,1,2000, ""),
			Array(5590001,1,20000, ""),
			Array(5520000,1,10000, ""),
			Array(5570000,1,5000, "")
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
	cm.Lunpan();
           // cm.Guaguale();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			var str1 = "";	
			for (var i = 0; i < 商店物品.length; i++){
                   str1 += "#L"+i+"##v"+商店物品[i][0]+"##z"+商店物品[i][0]+"#× #b"+商店物品[i][1]+"#d  价格:#r"+商店物品[i][2]+"#d "+商店物品[i][3]+"#l\r\n";
            }
            cm.sendSimple("你好，这里是 - 点卷商城 - \r\n 您目前的点卷:#r"+cm.getPlayer().getAccountLog("累计赞助积分_暂用",1)+"#n#d  \r\n\r\n彩虹点卷商店，购买强化材料道具  （单次最高购买100）\r\n"+str1);//#L2#"+兔子2+"#r推广系统介绍 - 奖励分红详细说明
		} else if (status == 1) {
			selectio = selection;
			cm.sendGetNumber("请你填写你要购买的数量:",0,1,100);
				
        } else if (status == 2) {
			if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= 商店物品[selectio][2] * selection){
				//cm.gainNX(-商店物品[selectio][2] * selection);
				cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-商店物品[selectio][2]* selection);
				cm.gainItem(商店物品[selectio][0],商店物品[selectio][1] * selection); 
				cm.sendOk("购买成功~!\r\n购买数量:#r#e"+selection+"");
				cm.喇叭(1,"["+ cm.getPlayer().getName() + "] 在自由市场点卷商店购买了道具!");
                cm.dispose();
			} else {
				cm.sendOk("点卷不足~!");
                cm.dispose();
			}
		}
	}
}