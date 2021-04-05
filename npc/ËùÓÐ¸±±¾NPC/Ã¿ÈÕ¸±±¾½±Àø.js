/* ==================
 脚本类型: 组队副本奖励
 脚本作者：Point
 联系方式：1098393331
 =====================
 */

var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
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
            text += ""+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+星星+"\r\n"
			text += "\t\t\t完成任务奖励如下：#k#n\r\n"
			text += "#v4000487#[5]个  #v2616206#[5]个  #v4310090#[1]个 #v4002000#[5]个#k#n\r\n"
			text += "#v4330023#[2]个  #v4001256#[2]个  #v4002003#[5]个 #v2140002#2500万#k#n\r\n\r\n"
			text += "\t\t\t当前任务情况如下：#k#n\r\n"
			text += "#r月妙副本："+cm.getPlayer().getBossLog("月妙组队",0)+"/2  废弃组队："+cm.getPlayer().getBossLog("废弃组队",0)+"/2  玩具组队："+cm.getPlayer().getBossLog("玩具组队",0)+"/2#k#n\r\n"
			text += "#r天空副本："+cm.getPlayer().getBossLog("天空组队",0)+"/1  海盗组队："+cm.getPlayer().getBossLog("海盗组队",0)+"/2#k#n\r\n\r\n"
			text += "\t\t\t#b#L0#全部完成领取奖励#k#n\r\n"
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"

            cm.sendSimple(text);
        } else if (selection == 0) { 
			if (cm.getPlayer().getBossLog("月妙组队",0) < 2){
				cm.sendOk("抱歉，你月妙副本未完成2次。");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("废弃组队",0) < 2){
				cm.sendOk("抱歉，你废弃副本未完成2次。");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("玩具组队",0) < 2){
				cm.sendOk("抱歉，你玩具副本未完成2次。");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("天空组队",0) < 1){
				cm.sendOk("抱歉，你天空副本未完成2次。");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("海盗组队",0) < 2){
				cm.sendOk("抱歉，你海盗副本未完成2次。");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("每天组队一条奖励",0) >= 1){
				cm.sendOk("抱歉，今天领取过了。");
				cm.dispose();
			} else {
				cm.gainItem(4000487,5);
				cm.gainItem(2616206,5);
				cm.gainItem(4310090,1);
				cm.gainItem(4002000,5);
				cm.gainItem(4330023,2);
				cm.gainItem(4001256,2);
				cm.gainItem(4002003,5);
				cm.gainMeso(25000000);
				cm.getPlayer().setBossLog("每天组队一条奖励",0)
				cm.sendOk("领取成功，恭喜你完成了今日组队任务");
				cm.喇叭(1,"["+cm.getName()+"]玩家完成了今天的每日组队任务，获得大量奖励！");
				cm.dispose();
			}
        }
    }
}


