var 皇冠白 = "#fUI/GuildMark/Mark/Etc/00009004/15#";
var 幸运草 = "#fUI/GuildMark/Mark/Plant/00003006/15#";
var 彩虹1 = "#fUI/ChatBalloon/122/n#";
var 彩虹上1 = "#fUI/ChatBalloon/122/ne#";
var 彩虹上2 = "#fUI/ChatBalloon/122/nw#";
var 彩1 = "#fUI/ChatBalloon/122/e#";
var 彩2 = "#fUI/ChatBalloon/122/w#";
var 大箭头 = "#fUI/Basic/icon/arrow#";
var 彩虹下 = "#fUI/ChatBalloon/122/s#";
var 彩虹下1 = "#fUI/ChatBalloon/122/se#";
var 彩虹下2 = "#fUI/ChatBalloon/122/sw#";
var 彩虹中 = "#fUI/ChatBalloon/122/head#";
var 梅花 = "#fUI/GuildMark/Mark/Animal/00002008/14#";
var 梅花 = "#fUI/GuildMark/Mark/Animal/00002020/14#";
var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 退出 = "#fUI/CN_Chat/ChattingRoom/BtExit/0/mouseOver/0#";
var 奖励 = "#fUI/UIWindow/Quest/reward#";
var 购买 = "#fUI/UIWindow/PersonalShop/BtBuy/mouseOver/0#";

function start() {
    status = -1;

    action(1, 0, 0);
}

	function action(mode, type, selection) {
        if (mode == -1) {
            cm.dispose();
        } else {
            if (status >= 0 && mode == 0) {
                cm.sendOk("感谢你的光临！");
                cm.dispose();
                return;
            }
            if (mode == 1) {
                status++;
            } else {
                status--;
            }
            if (status == 0) {
                var tex2 = "";
                var text = "";
                for (i = 0; i < 10; i++) {
                    text += "";
                }
                text += "                " + 星星 + "#e#r外星人套装武装升级#k" + 星星 + "  #n\r\n\r\n"
                text += "   " + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"
                text += "#e#L1#" + 皇冠白 + " 提炼#r#v1003242#【宝石套装】#k 随机30-300属性 " + 星星 + "#l\r\n\r\n\r\n"
                text += "#e#L2#" + 皇冠白 + " 提炼#r#v1122174#【运动套装】#k 随机30-300属性 " + 星星 + "#l\r\n\r\n\r\n"
				text += "#e#L3#" + 皇冠白 + " 提炼#r#v1132110#【传说套装】#k 随机30-300属性 " + 星星 + "#l\r\n\r\n\r\n"
				text += "#e#L4#" + 皇冠白 + " 提炼#r#v1132161#【风暴套装】#k 随机30-300属性 " + 星星 + "#l\r\n\r\n\r\n"
				text += "#e#L5#" + 皇冠白 + " 提炼#r#v1332289#【点装武器】#k 随机90-800属性 " + 星星 + "#l\r\n\r\n\r\n"
                text += "   " + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"
                cm.sendSimple(text);
            } else if (selection == 1) {
                warp = 1;
                cm.sendYesNo("" + 圆形 + " 提炼#r宝石套装#k需要：\r\n\r\n" + 感叹号 + " [#v 1003242##r#c 1003242##k/1 ] [ #v 1052357##r#c 1052357##k/1 ] [ #v 1102294##r#c 1102294##k/1 ]\r\n" + 感叹号 + " [#v 1072521##r#c 1072521##k/1 ] [ #v 1082314##r#c 1082314##k/1 ] [ #v 4002001##r#c 4002001##k/1 ] \r\n");

            } else if (selection == 2) {
                warp = 2;
                cm.sendYesNo("" + 圆形 + " 提炼#r运动套装#k需要：\r\n\r\n" + 感叹号 + " [#v 1122174##r#c 1122174##k/1 ] [ #v 1082401##r#c 1082401##k/1 ] [ #v 1072618##r#c 1072618##k/1 ]\r\n" + 感叹号 + " [#v 1062148##r#c 1062148##k/1 ] [ #v 1042231##r#c 1042231##k/1 ] [ #v 1032121##r#c 1032121##k/1 ] \r\n" + 感叹号 + " [ #v 4002001##r#c 4002001##k/1 ] \r\n");

            } else if (selection == 3) {
                warp = 3;
                cm.sendYesNo("" + 圆形 + " 提炼#r传说套装#k需要：\r\n\r\n" + 感叹号 + " [#v 1132110##r#c 1132110##k/1 ] [ #v 1102322##r#c 1102322##k/1 ] [ #v 1082391##r#c 1082391##k/1 ]\r\n" + 感叹号 + " [#v 1072610##r#c 1072610##k/1 ] [ #v 1052405##r#c 1052405##k/1 ] [ #v 1003364##r#c 1003364##k/1 ] \r\n" + 感叹号 + " [ #v 4002001##r#c 4002001##k/1 ] \r\n");
				
			} else if (selection == 4) {
                warp = 4;
                cm.sendYesNo("" + 圆形 + " 提炼#r风暴套装#k需要：\r\n\r\n" + 感叹号 + " [#v 1132161##r#c 1132161##k/1 ] [ #v 1102467##r#c 1102467##k/1 ] [ #v 1082438##r#c 1082438##k/1 ]\r\n" + 感叹号 + " [#v 1072672##r#c 1072672##k/1 ] [ #v 1052467##r#c 1052467##k/1 ] [ #v 1003561##r#c 1003561##k/1 ] \r\n" + 感叹号 + " [ #v 4002001##r#c 4002001##k/1 ] \r\n");
			
			} else if (selection == 5) {
                warp = 5;
                cm.sendYesNo("" + 圆形 + " 提炼#r点装武器#k需要：\r\n\r\n" + 感叹号 + " [#v 1332289##r#c 1332289##k/1 ] [ #v 1382273##r#c 1382273##k/1 ] [ #v 1402267##r#c 1402267##k/1 ]\r\n" + 感叹号 + " [#v 1422196##r#c 1422196##k/1 ] [ #v 1432226##r#c 1432226##k/1 ] [ #v 1442284##r#c 1442284##k/1 ] \r\n" + 感叹号 + " [#v 1452265##r#c 1452265##k/1 ] [ #v 1462251##r#c 1462251##k/1 ] [ #v 1472275##r#c 1472275##k/1 ] \r\n" + 感叹号 + " [#v 1482232##r#c 1482232##k/1 ] [ #v 1492245##r#c 1492245##k/1 ] [ #v 4002001##r#c 4002001##k/10 ] \r\n");
				
            } else if (status = 1) {
				var 随机装 = Math.floor(Math.random() * 9)+1;
                if (warp == 1) {
                    if (!cm.haveItem(1003242, 1)) {
                        cm.sendOk("请将#v 1003242##b#z 1003242##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1052357, 1)) {
                        cm.sendOk("请将#v 1052357##b#z 1052357##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1102294, 1)) {
                        cm.sendOk("请将#v 1102294##b#z 1102294##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1072521, 1)) {
                        cm.sendOk("请将#v 1072521##b#z 1072521##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1082314, 1)) {
                        cm.sendOk("请将#v 1082314##b#z 1082314##k放入背包中");
                        cm.dispose();       
                    } else if (!cm.haveItem(4002001, 1)) {
                        cm.sendOk("请将#v 4002001##b#z 4002001##k放入背包中");
                        cm.dispose();
                    } else {
                        cm.gainItem(1003242, -1); //1
                        cm.gainItem(1052357, -1); //2
                        cm.gainItem(1102294, -1); //3
                        cm.gainItem(1072521, -1); //4
                        cm.gainItem(1082314, -1); //5
                        cm.gainItem(4002001, -1); //8
						if (随机装 < 2){
                        cm.gainItem(1003540, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 3 ){
                        cm.gainItem(1032142, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 4 ){
                        cm.gainItem(1052460, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 5 ){
                        cm.gainItem(1072664, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 6 ){
                        cm.gainItem(1082432, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 7 ){
                        cm.gainItem(1112738, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 8 ){
                        cm.gainItem(1122197, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else {
                        cm.gainItem(1132152, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						}
                        cm.sendOk("合成成功");
                        cm.喇叭(1, " 玩家:<" + cm.getName() + ">使用宝石套装提炼出随机30-300全属性外星人装备一件恭喜他~!");
                        cm.dispose();
                    }

                } else if (warp == 2) {
                    if (!cm.haveItem(1122174, 1)) {
                        cm.sendOk("请将#v 1122174##b#z 1122174##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1082401, 1)) {
                        cm.sendOk("请将#v 1082401##b#z 1082401##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1072618, 1)) {
                        cm.sendOk("请将#v 1072618##b#z 1072618##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1062148, 1)) {
                        cm.sendOk("请将#v 1062148##b#z 1062148##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1042231, 1)) {
                        cm.sendOk("请将#v 1042231##b#z 1042231##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1032121, 1)) {
                        cm.sendOk("请将#v 1032121##b#z 1032121##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(4002001, 1)) {
                        cm.sendOk("请将#v 4002001##b#z 4002001##k放入背包中");
                        cm.dispose();
                    } else {
                        cm.gainItem(1122174, -1); //1
                        cm.gainItem(1082401, -1); //2
                        cm.gainItem(1072618, -1); //3
                        cm.gainItem(1062148, -1); //4
                        cm.gainItem(1042231, -1); //5
                        cm.gainItem(1032121, -1); //6
                        cm.gainItem(4002001, -1); //8
						if (随机装 < 2){
                        cm.gainItem(1003540, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 3 ){
                        cm.gainItem(1032142, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 4 ){
                        cm.gainItem(1052460, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 5 ){
                        cm.gainItem(1072664, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 6 ){
                        cm.gainItem(1082432, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 7 ){
                        cm.gainItem(1112738, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 8 ){
                        cm.gainItem(1122197, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else {
                        cm.gainItem(1132152, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						}
                        cm.sendOk("合成成功");
                        cm.喇叭(1, " 玩家:<" + cm.getName() + ">使用运动套装提炼出随机30-300全属性外星人装备一件恭喜他~!");
                        cm.dispose();
                    }
					
				} else if (warp == 3) {
                    if (!cm.haveItem(1132110, 1)) {
                        cm.sendOk("请将#v 1132110##b#z 1132110##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1102322, 1)) {
                        cm.sendOk("请将#v 1102322##b#z 1102322##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1082391, 1)) {
                        cm.sendOk("请将#v 1082391##b#z 1082391##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1072610, 1)) {
                        cm.sendOk("请将#v 1072610##b#z 1072610##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1052405, 1)) {
                        cm.sendOk("请将#v 1052405##b#z 1052405##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1003364, 1)) {
                        cm.sendOk("请将#v 1003364##b#z 1003364##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(4002001, 1)) {
                        cm.sendOk("请将#v 4002001##b#z 4002001##k放入背包中");
                        cm.dispose();
                    } else {
                        cm.gainItem(1132110, -1); //1
                        cm.gainItem(1102322, -1); //2
                        cm.gainItem(1082391, -1); //3
                        cm.gainItem(1072610, -1); //4
                        cm.gainItem(1052405, -1); //5
                        cm.gainItem(1003364, -1); //6
                        cm.gainItem(4002001, -1); //8
						if (随机装 < 2){
                        cm.gainItem(1112954,  Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 3 ){
                        cm.gainItem(1112947, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 4 ){
                        cm.gainItem(1112946, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 5 ){
                        cm.gainItem(1112937, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 6 ){
                        cm.gainItem(1112960, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 7 ){
                        cm.gainItem(1115005, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 8 ){
                        cm.gainItem(1112192, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 9 ){
                        cm.gainItem(1115105, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else {
                        cm.gainItem(1115018, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						}
                        cm.sendOk("合成成功");
                        cm.喇叭(1, " 玩家:<" + cm.getName() + ">使用传说套装成功提炼出随机30-300点装戒指一枚恭喜他~!");
                        cm.dispose();
                    }
					
				} else if (warp == 4) {
                    if (!cm.haveItem(1132161, 1)) {
                        cm.sendOk("请将#v 1132161##b#z 1132161##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1102467, 1)) {
                        cm.sendOk("请将#v 1102467##b#z 1102467##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1082438, 1)) {
                        cm.sendOk("请将#v 1082438##b#z 1082438##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1072672, 1)) {
                        cm.sendOk("请将#v 1072672##b#z 1072672##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1052467, 1)) {
                        cm.sendOk("请将#v 1052467##b#z 1052467##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1003561, 1)) {
                        cm.sendOk("请将#v 1003561##b#z 1003561##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(4002001, 1)) {
                        cm.sendOk("请将#v 4002001##b#z 4002001##k放入背包中");
                        cm.dispose();
                    } else {
                        cm.gainItem(1132161, -1); //1
                        cm.gainItem(1102467, -1); //2
                        cm.gainItem(1082438, -1); //3
                        cm.gainItem(1072672, -1); //4
                        cm.gainItem(1052467, -1); //5
                        cm.gainItem(1003561, -1); //6
                        cm.gainItem(4002001, -1); //8
						if (随机装 < 2){
                        cm.gainItem(1912345,  Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 3 ){
                        cm.gainItem(1902345, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 4 ){
                        cm.gainItem(1902340, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 5 ){
                        cm.gainItem(1912340, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 6 ){
                        cm.gainItem(1912344, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 7 ){
                        cm.gainItem(1902344, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 8 ){
                        cm.gainItem(1912341, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						} else {
                        cm.gainItem(1912341, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, Math.floor(Math.random() * 270)+30, Math.floor(Math.random() * 270)+30, 0, 0, 0, 0, 0, 0); //1
						}
                        cm.sendOk("合成成功");
                        cm.喇叭(1, " 玩家:<" + cm.getName() + ">成功提炼出了随机30-300星球坐骑一个恭喜他~!");
                        cm.dispose();
                    }
					
				} else if (warp == 5) {
                    if (!cm.haveItem(1332289, 1)) {
                        cm.sendOk("请将#v 1332289##b#z 1332289##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1382273, 1)) {
                        cm.sendOk("请将#v 1382273##b#z 1382273##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1402267, 1)) {
                        cm.sendOk("请将#v 1402267##b#z 1402267##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1422196, 1)) {
                        cm.sendOk("请将#v 1422196##b#z 1422196##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1432226, 1)) {
                        cm.sendOk("请将#v 1432226##b#z 1432226##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1442284, 1)) {
                        cm.sendOk("请将#v 1442284##b#z 1442284##k放入背包中");
                        cm.dispose();
                    } else if (!cm.haveItem(1452265, 1)) {
                        cm.sendOk("请将#v 1452265##b#z 1452265##k放入背包中");
                        cm.dispose();
					} else if (!cm.haveItem(1462251, 1)) {
                        cm.sendOk("请将#v 1462251##b#z 1462251##k放入背包中");
                        cm.dispose();
					} else if (!cm.haveItem(1472275, 1)) {
                        cm.sendOk("请将#v 1472275##b#z 1472275##k放入背包中");
                        cm.dispose();
					} else if (!cm.haveItem(1482232, 1)) {
                        cm.sendOk("请将#v 1482232##b#z 1482232##k放入背包中");
                        cm.dispose();
					} else if (!cm.haveItem(1492245, 1)) {
                        cm.sendOk("请将#v 1492245##b#z 1492245##k放入背包中");
                        cm.dispose();
					} else if (!cm.haveItem(4002001, 10)) {
                        cm.sendOk("请将#v 4002001##b#z 4002001##k放入背包中");
                        cm.dispose();
                    } else {
                        cm.gainItem(1332289, -1); //1
                        cm.gainItem(1382273, -1); //2
                        cm.gainItem(1402267, -1); //3
                        cm.gainItem(1422196, -1); //4
                        cm.gainItem(1432226, -1); //5
                        cm.gainItem(1442284, -1); //6
						cm.gainItem(1462251, -1); //7
                        cm.gainItem(1452265, -1); //8
						cm.gainItem(1472275, -1); //8
						cm.gainItem(1482232, -1); //8
						cm.gainItem(1492245, -1); //8
						cm.gainItem(4002001, -10); //8
						if (随机装 < 2){
                        cm.gainItem(1702675, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 3 ){
                        cm.gainItem(1702330, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 4 ){
                        cm.gainItem(1702334, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 5 ){
                        cm.gainItem(1702631, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 6 ){
                        cm.gainItem(1702636, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 7 ){
                        cm.gainItem(1702634, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, 0, 0, 0, 0); //1
						} else if (随机装 == 8 ){
                        cm.gainItem(1702682, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, 0, 0, 0, 0); //1
						} else {
                        cm.gainItem(1702660, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, Math.floor(Math.random() * 710)+90, Math.floor(Math.random() * 710)+90, 0, 0, 0, 0, 0, 0); //1
						}
                        cm.sendOk("合成成功");
                        cm.喇叭(1, " 玩家:<" + cm.getName() + ">成功提炼出了随机90-800点装武器一个恭喜他~!");
                        cm.dispose();
					}
                }
            }
        }
    }