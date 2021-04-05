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
			Array(3990000,500,1,"炼制出1级次品法器"), //橙色蜡笔
			
			Array(3990001,100,1,"炼制出2级下品法器"), //蓝色蜡笔
			
			Array(3990002,50,1,"炼制出3级中品法器"), //绿色蜡笔
			
			Array(3990003,30,1,"炼制出4级上品法器"), //紫色蜡笔
			
			Array(3990004,20,1,"炼制出5级极品法器")  //红色蜡笔
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
            cm.sendOk("放弃炼器是没有前途的！");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
	    if (!cm.haveItem(3010109,1)) {
	        cm.sendOk("你没有丹炉要怎么炼器");
			cm.safeDispose();
	    }
        if (cm.getPlayer().getAccountLog("杀怪点数",1) >= 20000 && cm.getPlayer().getMeso() >= 100000000) {
            cm.sendYesNo(""+个人情报+"\r\n\r\n"+圆形+" 消耗杀怪点数:[ #r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k / #b20000#k ]\r\n"+圆形+" 消耗自身金币:[ #r"+cm.getPlayer().getMeso()+"#k / #b100000000#k ]\r\n\r\n"+感叹号+" 几率:#b#v 3990000# 40%#v 3990001# 4%#v 3990002# 3%#v 3990003# 2%#v 3990004# 1%#k\r\n"+感叹号+" 失败几率:#b50% #k失败不扣#b[杀怪点数]#k,但是会#b[炸炉]");
        } else {
		cm.sendOk(""+个人情报+"\r\n\r\n"+感叹号+" 杀怪点数不足:[ #r"+cm.getPlayer().getAccountLog("杀怪点数",1)+"#k / #b20000#k ]\r\n"+感叹号+" 身上金币不足:[ #r"+cm.getPlayer().getMeso()+"#k / #b100000000#k ]");
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
            item = cm.gainGachaponItem(itemId, quantity, "炼器成功", notice);
            if (item != -1) {
                cm.gainMeso(-100000000);
			    cm.getPlayer().getAccountLog("杀怪点数",1);
			    cm.getPlayer().setAccountLog("杀怪点数",1,-20000);
			    cm.getPlayer().setBossLog("成功炼器次数",1);
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("你物品不足");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("炼器失败,丹炉炸毁 请从新购买丹炉");
           cm.喇叭(2,"炼器失败" + " : 【" + cm.getPlayer().getName() +"】 炼器失败,丹炉直接爆炸");
            cm.gainMeso(-100000000);
            cm.gainItem(3010109,-1);
			cm.getPlayer().setBossLog("失败炼器次数",1);
            cm.safeDispose();
        }
    }
}