var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var add = "#fEffect/CharacterEff/1022223/4/0#";
var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var add = "#fEffect/CharacterEff/1112905/0/1#";//红桃心
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//红色右箭头
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//选择道具
//var add = "#fUI/Basic/BtHide3/mouseOver/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 琴符 = "#fEffect/CharacterEff/1003252/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 花 = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var s = "#fUI/StatusBar/BtClaim/normal/0#";
var h = "#fUI/CashShop/CSEffect/effect/1#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 翅膀 = "#fUI/CashShop/Base/Tab/Enable/2#";//翅膀
var 爱心4 = "#fEffect/CharacterEff/1042176/1/1#"; // 实体深红爱心【小型】
var 爱心2 = "#fEffect/CharacterEff/1022223/3/0#"; // 虚体深色粉红爱心
var 爱心1 = "#fEffect/CharacterEff/1003271/0/0#"; // 实体粉红爱心
var 表情大笑 ="#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";//表情大笑/1哭/0微笑 

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
        }
        else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#v1003861#   #e#r欢迎来到" + cm.ms() + "任务中心  #v1003861##k#n\r\n"
			text += "#r#e----------------------------------------------#k#n\r\n";
			text += "当前金币拥有：#r[" + cm.getPlayer().getMeso() + "]#k    目前点券拥有：#r["+cm.getPlayer().getCSPoints(1)+"]#k#n\r\n"
			text += "#r#e----------------------------------------------#k#n\r\n";
            text += " - 本环所需道具：[ #v 4000031##r#c 4000031##k/99 ] \r\n"
			text += " - 本环奖励道具：四维+20双攻+20#v1042003# x 1\r\n\r\n";
			text += "#L1##k" + aaa + "#d完成任务\r\n\r\n"

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 1) {//活动传送
                if (cm.getPlayer().getBossLog("任务名",10) >= 10 ) {
					cm.sendOk("你已经完成过一次了，无法再次完成");
					cm.dispose();
				} else if (cm.haveItem(4000031, 99) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
				} else {
					cm.getPlayer().setBossLog("任务名",1);
					cm.gainItem(4000031, -99);
					cm.gainItem(1042003, 20, 20, 20, 20, 0, 0, 20, 20, 0, 0, 0, 0, 0, 0);
					cm.喇叭(2, "彩虹岛[" + cm.getPlayer().getName() + "]在拍卖新手装备制作出了全属性+20双攻+20的道具！");
					cm.sendOk("成功完成！");
					cm.dispose();
				}
            }
        }
    }
}

