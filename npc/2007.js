var 聊天 = "#fUI/StatusBar/BtChat/normal/0#";
var Name = "天天冒险岛";
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
			text += "\t\t\t  #e欢迎来到#r"+Name+" #k!#n\r\n"
            text += "#b特别注意：萌新请看群文件的新人指引说明，这个很重要\r\n\r\n"//3
			text += "#r1.本服福利多，长期更新活动，适合休闲玩耍#l\r\n\r\n"//3
            text += "#r2.本服禁止使用外挂，否则帐号或角色就会被永久封禁，请萌新必须引起注意！#l\r\n\r\n"//3
            text += "#r3.新手礼包已经发放到您的背包，请注意查收！#l\r\n\r\n"//3
            text += "#r4.本服充值比例：1RMB=1充值币=1000点券#l\r\n\r\n"//3
            text += "#r5.修复副本+任务+部分功能，增加大量特色功能，PK系统、全面改进！#l\r\n\r\n"//3
          //  text += "#r6.买卖账号只允许在游戏里面喊，在群里发卖号信息的一律T群并且封闭账号，我说到做到！#l\r\n\r\n"//3
            //text += "#r6.欢迎加入我们的"+Name+"079群一起讨论：318260236#l\r\n\r\n"//3
            cm.sendOk(text);
			cm.喇叭(1,"欢迎新人[" + cm.getPlayer().getName() + "]！！大家祝贺吧！！！~又是一名新人加入了"+Name+"~！");
            //cm.喇叭(3,"欢迎[" + cm.getPlayer().getName() + "]加入"+Name+"~！！！大家一起祝贺吧！！！");
		    cm.dispose();
		}
    }
}


