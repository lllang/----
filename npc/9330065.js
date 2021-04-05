var 聊天 = "#fUI/StatusBar/BtChat/normal/0#";
var Name = "#r强化介绍（请仔细阅读）#k";
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
			text += "\t\t\t  #e#r"+Name+" #k#n\r\n"
            text += "#b特别注意：#r一定要看完，看完，看完#k，这个很重要\r\n\r\n"//3
			text += "#r1.此鉴定是迅速成长的关键#l\r\n\r\n"//3
            text += "#r2.此鉴定有风险（装备爆炸会消失）！#l\r\n\r\n"//3
            text += "#r3.背包有防爆卷则消耗防爆卷轴（失败装备不会消失）！#l\r\n\r\n"//3
            text += "#r4.11星鉴定消耗一张11星强化卷（成功失败都会扣除）！#l\r\n\r\n"//3
            text += "#r5.12星鉴定消耗一张12星强化卷（成功失败都会扣除）！#l\r\n\r\n"//3
			text += "#r6.13星鉴定消耗一张13星强化卷（成功失败都会扣除）！#l\r\n\r\n"//3
			text += "#r7.14星鉴定消耗一张14星强化卷（成功失败都会扣除）！#l\r\n\r\n"//3
			text += "#r8.15星鉴定消耗一张15星强化卷（成功失败都会扣除）！#l\r\n\r\n"//3
			text += "#r9.1211星.12星.鉴定都会扣除强化卷和保护卷13星.14星.15星 失败扣除保护卷（成功则不扣除保护卷）！#l\r\n\r\n"//3
			text += "#r10.鉴定之前一定要确认（背包里面到底有没有保护卷）！#l\r\n\r\n"//3
          //  text += "#r6.买卖账号只允许在游戏里面喊，在群里发卖号信息的一律T群并且封闭账号，我说到做到！#l\r\n\r\n"//3
            //text += "#r6.欢迎加入我们的"+Name+"079群一起讨论：318260236#l\r\n\r\n"//3
            cm.sendOk(text);
			//cm.喇叭(1,"欢迎新人[" + cm.getPlayer().getName() + "]！！大家祝贺吧！！！~又是一名新人加入了"+Name+"~！");
            //cm.喇叭(3,"欢迎[" + cm.getPlayer().getName() + "]加入"+Name+"~！！！大家一起祝贺吧！！！");
		    cm.dispose();
		}
    }
}


