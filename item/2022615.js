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
var 需要点券 = 5000;
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        im.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            im.sendOk("感谢你的光临！");
            im.dispose();
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
				
			
            text += "  #v1003861#     #e#r欢迎来到" + im.ms() + "身外之身  #v1003861##k#n\r\n"
			text += "#r#e----------------------------------------------#k#n\r\n";
			
			text += "#r#e----------------------------------------------#k#n\r\n";
			text += "#L0##k" + aaa + "#d开启身外之身(下线后请先关闭身外之身再开启即可)\r\n\r\n"
            text += "#L1##k" + aaa + "#r关闭身外之身#k#n\r\n\r\n"
 

            im.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {//活动传送
                if (im.getPlayer().getBossLog("身外之身",1) >= 1 ) {
					im.sendOk("你已经开启了身外之身，无需再次开启！");
					im.dispose();
					
				} else {
				   // im.喇叭(3,"恭喜大佬["+im.getName()+"]：成功开启身外之身,战斗力翻倍！");
					//im.喇叭(3,"恭喜大佬["+im.getName()+"]：成功开启身外之身,战斗力翻倍！");
					//im.喇叭(3,"恭喜大佬["+im.getName()+"]：成功开启身外之身,战斗力翻倍！");
					im.getPlayer().cloneLook();
					im.getPlayer().setBossLog("身外之身",1);
					im.sendOk("成功开启身外之身！");
					im.dispose();
				}
			
			 
                } else if (selection == 1) {
                if (im.getPlayer().getBossLog("身外之身",1) < 1 ) {
					im.sendOk("你还未开启身外之身，无需关闭。");
					im.dispose();
				} else {
					im.getPlayer().setBossLog("身外之身",1,-1);
					im.getPlayer().disposeClones();
					im.sendOk("已关闭身外之身,如需要请重新开启~");
					im.dispose();
                 }
				
            }
        }
    }
}

