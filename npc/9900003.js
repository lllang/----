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
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
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

				

text += "\r\n                 "+爱心+"#e元宝兑换#b"+爱心+"  #n\r\n\r\n\r\n"   
text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
text += "#L2#"+爱心+"元宝兑换壹元宝#l\r\n\r\n"
text += "#L3#"+爱心+"元宝兑换拾元宝#l\r\n\r\n"
text += "#L4#"+爱心+"元宝兑换五拾元宝#l\r\n\r\n"

text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"		 
cm.sendSimple(text);  
}  else if (selection == 1) { 
            if(cm.haveItem(4031217,1)){
			cm.gainItem(4031217,-1); 
		    cm.warpBack(921100300,910000000,180);
			cm.sendOk("你有3分钟的时间来白嫖。");
			cm.喇叭(2, "彩虹岛[" + cm.getPlayer().getName() + "]使用钥匙打开了掉宝地图，开启疯狂白拿3分钟！");
			cm.dispose();
			}else{
			cm.sendOk("你没有钥匙，别想白嫖。");
			cm.dispose();
			cm.喇叭(1, "彩虹岛[" + cm.getPlayer().getName() + "]没有钥匙还想进入掉宝地图，真丢人/挂机可获得门票！");
			cm.dispose();
		}	
	}else if (selection == 2) { 
            if(cm.haveItem(2041213,1)){
			cm.gainItem(2041213,-1); 
		    cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,1);
			cm.sendOk("兑换成功！");
			cm.喇叭(1, "蓝蜗牛[" + cm.getPlayer().getName() + "]通过桑克斯兑换1元宝！");
			cm.dispose();
			}else{
			cm.sendOk("你没有#v2041213#一个来换壹元宝。");
			cm.dispose();
		}
	}else if (selection == 3) { 
            if(cm.haveItem(2041213,10)){
			cm.gainItem(2041213,-10); 
		    cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,10);
			cm.sendOk("兑换成功！");
			cm.喇叭(1, "蓝蜗牛[" + cm.getPlayer().getName() + "]通过桑克斯兑换10元宝！");
			cm.dispose();
			}else{
			cm.sendOk("你没有#v2041213#拾个来换拾元宝。");
			cm.dispose();
		}
	}else if (selection == 4) { 
            if(cm.haveItem(2041213,50)){
			cm.gainItem(2041213,-50); 
		    cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,50);
			cm.sendOk("兑换成功！");
			cm.喇叭(1, "蓝蜗牛[" + cm.getPlayer().getName() + "]通过桑克斯兑换50元宝！");
			cm.dispose();
			}else{
			cm.sendOk("你没有#v2041213#五拾个来换五拾元宝。");
			cm.dispose();
		}	
	}
}
}