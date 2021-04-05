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
var 个人情报 = "#fUI/PredictHarmony/predictmaritalharmony/BtResult/mouseOver/0#";

var status = 0;
var itemList = 
Array(   
			Array(3992027,500,1,"炼制出6级神器") //橙色蜡笔
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("放弃炼丹是没有前途的！");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		if(cm.getInventory(3).isFull(0)){
			cm.sendOk("设置栏空余不足1个空格！");
			cm.safeDispose();
		}
        if (cm.haveItem(3990000,1) && cm.haveItem(3990001,1) && cm.haveItem(3990002,1) && cm.haveItem(3990003,1) && cm.haveItem(3990004,1) ) {
		cm.sendYesNo(""+个人情报+"\r\n\r\n"+圆形+" 消耗:#v3990000# [#r#c3990000##k/#b1#k] #v3990001# [#r#c3990001##k/#b1#k] #v3990002# [#r#c3990002##k/#b1#k]\r\n"+圆形+" 消耗:#v3990003# [#r#c3990003##k/#b1#k] #v3990004# [#r#c3990004##k/#b1#k]\r\n\r\n"+感叹号+" 有 #r50%#k 的几率合成出传说神器");
        } else {
		cm.sendOk(""+个人情报+"\r\n\r\n"+圆形+" 消耗:#v3990000# [#r#c3990000##k/#b1#k] #v3990001# [#r#c3990001##k/#b1#k] #v3990002# [#r#c3990002##k/#b1#k]\r\n"+圆形+" 消耗:#v3990003# [#r#c3990003##k/#b1#k] #v3990004# [#r#c3990004##k/#b1#k]\r\n\r\n"+感叹号+" 你确定你的物品足够吗？");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 1000);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "合成神器", notice);
            if (item != -1) {
                cm.gainItem(3990000,-1);
                cm.gainItem(3990001,-1);
                cm.gainItem(3990002,-1);
                cm.gainItem(3990003,-1);
                cm.gainItem(3990004,-1);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            cm.喇叭(2,"合成神器成功" + " : 【" + cm.getPlayer().getName() +"】 卧槽这都行,居然合成出了6级神器!");
            } else {
                cm.sendOk("你物品不足");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("合成失败");
            cm.喇叭(2,"合成神器失败" + " : 【" + cm.getPlayer().getName() +"】 这也正常,毕竟只有 50% 的成功率!");
                cm.gainItem(3990000,-1);
                cm.gainItem(3990001,-1);
                cm.gainItem(3990002,-1);
                cm.gainItem(3990003,-1);
                cm.gainItem(3990004,-1);
            cm.safeDispose();
        }
    }
}