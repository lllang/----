var tt = "#fEffect/CharacterEff/1082565/0/0#"; //饼干兔子
var bb = "#fUI/UIWindow4.img/PQRank/rank/gold#";//皇冠1
var cc = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"//开始条件
var A0 = "#fUI/Basic/LevelNo/0#"; //[1]+1
var A1 = "#fUI/Basic/LevelNo/1#"; //[1]+1
var A2 = "#fUI/Basic/LevelNo/2#"; //[1]+1
var A3 = "#fUI/Basic/LevelNo/3#"; //[1]+1
var A4 = "#fUI/Basic/LevelNo/4#"; //[1]+1
var A5 = "#fUI/Basic/LevelNo/5#"; //[1]+1
var z3 = "#fUI/GuildMark/Mark/Animal/00002006/16#";
var z4 = "#fUI/UIWindow2/MemoInGame/Get/BtClame/pressed/0#";
var z5 = "#fEffect/CharacterEff/1112904/2/1#";//五角花
var z6 = "#fUI/GuildMark/Mark/Etc/00009004/3#";//皇冠
var z7 = "#fUI/GuildMark/Mark/Etc/00009023/10#";//皇冠
var z8 = "#fUI/NameTag/medal/468/c#";
var Icon = Array(
    Array("星星", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("兔子", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("星空", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("骷髅", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("红心", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("白脸", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("皇冠", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("红灯", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("水滴", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("红旗", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("红心", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("云朵", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("翅膀", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("箭矢", "#fEffect/ItemEff/1112003/0/2#"),
    Array("黄鸭", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("王冠", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("灯组", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("条件", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("信封", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("钻石", "#fUI/NameTag/medal/556/w#"),
    Array("钻石", "#fUI/NameTag/medal/556/c#"),
    Array("钻石", "#fUI/NameTag/medal/556/e#"),
    Array("三角", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("蓝点", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("女神", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("拇指", "#fUI/NameTag/medal/10/w#"),
    Array("拇指", "#fUI/NameTag/medal/10/c#"),
    Array("拇指", "#fUI/NameTag/medal/10/e#"),
    Array("成功", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("失败", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("星星", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("蓝星", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("淡星", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("花朵", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("花朵", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("金菇", "#fUI/NameTag/medal/74/w#"),
    Array("金菇", "#fUI/NameTag/medal/74/c#"),
    Array("金菇", "#fUI/NameTag/medal/74/e#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/w#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/c#"),
    Array("蛋糕", "#fUI/NameTag/medal/758/e#"),
    Array("胡子", "#fUI/NameTag/124/w#"),
    Array("胡子", "#fUI/NameTag/124/c#"),
    Array("胡子", "#fUI/NameTag/124/e#"),
    Array("帽子", "#fUI/NameTag/nick/312/w#"),
    Array("帽子", "#fUI/NameTag/nick/312/c#"),
    Array("帽子", "#fUI/NameTag/nick/312/e#"),
    Array("圣诞", "#fUI/NameTag/medal/728/w#"),
    Array("圣诞", "#fUI/NameTag/medal/728/c#"),
    Array("圣诞", "#fUI/NameTag/medal/728/e#"),
    Array("红钻", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("王冠", "#fUI/NameTag/medal/468/w#"),
    Array("王冠", "#fUI/NameTag/medal/468/c#"),
    Array("王冠", "#fUI/NameTag/medal/468/e#"),
    Array("确认", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/default/7#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/walk1/3#"),
    Array("幽灵", "#fEffect/ItemEff/1004738/effect/jump/0#")
);
var status;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 3 && mode == 0) {
		cm.sendOk("保留成功！请继续选择要保留的物品...");
		status = 1;
		return;
    } else if (mode <= 0) {
        cm.dispose();
		return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "\t\t#b  #r#e  道具清理中心  #n#b#k\r\n\r\n";
            text += "\t\t\t #L0#清理包裹内#r指定#b道具#l\r\n";
            text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
        } else {
            if (selstatus == -1) {
                selstatus = selection;
            }
            switch (selstatus) {
                case 0:
                    deleteItemBySlot(selection);
                    break;
                case 1:
                    deleteItemBySlot1(selection);
					break;
				case 2:
                    deleteItemBySlot2(selection);
					break;
            }
        }
    }
}

function deleteItemBySlot(selection) {
    if (status == 1) {
        text = "\t\t#e- 请选择要清理的道具类型 -#n\r\n#b";
        text += "\t\t\t\t#L1#装备栏#l\r\n";
        text += "\t\t\t\t#L2#消耗栏#l\r\n";
        text += "\t\t\t\t#L4#其它栏#l\r\n";
        text += "\t\t\t\t#L3#设置栏#l\r\n";
        text += "\t\t\t\t#L5#特殊栏#l\r\n";
        cm.sendSimple(text);
    } else if (status == 2) {
        inventoryType = selection;
		var aaa = false;
			var indexof = 1;
	        inv = cm.getInventory(inventoryType);
            text = "\t\t\t  #e- 请选择要清理的道具 -#n\r\n\r\n#b";
			for (var i = 1; i <= inv.getSlotLimit(); i++) {
			var it = inv.getItem(i);
                if (it == null) {
                    continue;
                }
			var itemid = it.getItemId();
			    aaa = true;
			text += "#L" + i + "##v" + itemid + "##l";
            if (indexof > 1 && indexof % 6 == 0) {
                text += "\r\n";
            }
            indexof++;
		}
        if (!aaa) {
            cm.playerMessage(1,"该栏中没有道具");
            cm.dispose();
            return;
        }
        cm.sendSimple(text + "#k");
    } else if (status == 3) {
        var item = cm.getInventory(inventoryType).getItem(selection);
        deleteSlot = selection;
        deleteQuantity = item.getQuantity();
        text = "#e确定要清理#r#v" + item.getItemId() + "##z" + item.getItemId() + "# " + deleteQuantity + "个 #k吗？";
        cm.sendNextPrev(text);
    } else if (status == 4) {
        cm.removeSlot(inventoryType, deleteSlot, deleteQuantity);
        cm.sendOk("清理成功，祝你游戏愉快~");
        status = 0;
    }
}

function deleteItemBySlot1(selection) {
    if (status == 1) {
        text = "\t\t#e- 请选择要清理的道具类型 -#n\r\n#b";
        text += "\t\t\t\t#L1#装备栏#l\r\n";
        text += "\t\t\t\t#L2#消耗栏#l\r\n";
        text += "\t\t\t\t#L4#其它栏#l\r\n";
        text += "\t\t\t\t#L3#设置栏#l\r\n";
        text += "\t\t\t\t#L5#特殊栏#l\r\n";
        cm.sendSimple(text);
    } else if (status == 2) {
        inventoryType = selection;
		if (selection == 1) {
		   var xianshi = "装备栏";
 } else if (selection == 2) {
	       var xianshi = "消耗栏";
 } else if (selection == 4) {
	       var xianshi = "其他栏";
 } else if (selection == 3) {
	       var xianshi = "设置栏";
 } else if (selection == 5) {
	       var xianshi = "特殊栏";
            }
	    var aaa = false;
	        inv = cm.getInventory(inventoryType);
		    text = "#r"+ xianshi +"#b 内有以下道具，你确定都要清理吗？#k\r\n";
			for (var i = 1; i <= inv.getSlotLimit(); i++) {
			var it = inv.getItem(i);
                if (it == null) {
                    continue;
                }
			var itemid = it.getItemId();
			    aaa = true;
			text += "#e名称：#n#v" + itemid + "##b#z" + itemid + "##k，#e数量：#n#r"+ it.getQuantity() +"#k 个。\r\n";
		    }
        if (!aaa) {
            cm.playerMessage(1,"该栏中没有道具");
            cm.dispose();
            return;
        }
        cm.sendYesNo(text);
    } else if (status == 3) {
	        inv = cm.getInventory(inventoryType);
			text = "您成功清理了以下道具，祝您游戏愉快！~\r\n";
			for (var i = 1; i <= inv.getSlotLimit(); i++) {
			var it = inv.getItem(i);
                if (it == null) {
                    continue;
                }
			var itemid = it.getItemId();
			cm.removeSlot(inventoryType, i, it.getQuantity());
		    }
        cm.sendOk("您成功清理了道具，祝您游戏愉快！");
        status = 0;
    }
}
