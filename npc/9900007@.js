var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 大心 = "#fEffect/CharacterEff/1051295/0/0#";
var 琴符 = "#fEffect/CharacterEff/1003252/0/0#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 圆形 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon2/7#";
var 美化ne = "#fUI/UIWindow/Quest/icon6/7#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
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

				

text += "\r\n                   "+小雪花+"#e欢迎使用#b"+小雪花+"  #n\r\n\r\n\r\n"   
text += "   "+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+"\r\n"
text += "#L0#"+琴符+"点卷中介"+琴符+"#l       #L1#"+琴符+"BS币兑换"+琴符+"#l\r\n\r\n"
text += "#L2#"+琴符+"豆豆兑换"+琴符+"#l       #L5#"+琴符+"枫叶兑换"+琴符+"#l\r\n\r\n"
//text += "#L5#"+琴符+"邮票兑换"+琴符+"#l       \r\n\r\n"
//text += "#L3#"+琴符+"副本装备"+琴符+"#l       #L7#"+琴符+"翅膀进化"+琴符+"#l\r\n\r\n"
//text += "#L10#"+琴符+"师徒系统"+琴符+"#l       #L11#"+琴符+"中级BOSS"+琴符+"#l\r\n\r\n"
//text += "#L13#"+琴符+"前去白嫖"+琴符+"#l\r\n\r\n"
text += "   "+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+琴符+圆形+"\r\n"	
			

			cm.sendSimple(text); 

		} else if (status == 1) {
			if (selection == 0) {
				cm.dispose();
				cm.openNpc(9310074, 9)
		   } else if (selection == 1) {
				cm.dispose();
				cm.openNpc(9900004, 11)

			} else if (selection == 2) {
				cm.dispose();
				cm.openNpc(2070000, 1)
			} else if (selection == 3) {
				cm.dispose();
				cm.openNpc(9310074, 100)
		    } else if (selection == 7) {
				cm.dispose();
				cm.openNpc(2100000, 6)
			} else if (selection == 4) {
				cm.dispose();
				cm.openNpc(9310060, 2)
			} else if (selection == 6) {
				cm.dispose();
				cm.openNpc(2100000, 5)
			} else if (selection == 5) {
				cm.dispose();
				cm.openNpc(2070000, 2)
			}
		}
	}
}

