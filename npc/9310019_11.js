var status = 0;
var 转生所需道具 = 4000463;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {


    if (mode == -1) {//ExitChat
        cm.dispose();

    } else if (mode == 0) {//No
        cm.sendOk("好的, 请告诉我你确定需要 #b飞升#k.");
        cm.dispose();

    } else {            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var text = "                #e欢迎来到#b冒险岛v079#n#k\r\n\r\n";
            text +="这里可以帮满级玩家进行降级：\r\n";
            text +="降级对象：#r所有满级玩家（250级），每人限50次！#k\r\n";
            text +="降级之后：#r玩家变成200级，属性不变，职业不变，血量不变，技能不变（不等于转生）#k\r\n";
            text +="降级好处：#r保留属性，再次升到250级时多出50点属性！#k\r\n\r\n";
            text +="  #L0##e#d我要降级到200级\r\n";
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (cm.getChar().getLevel() <= 249) {
                cm.sendOk("很抱歉，您需要250级。");
                cm.dispose();
            } else {
                cm.sendOk("以满足所有条件，是否要转换成“#b200级#k”职业不变？\r\n\r\n #e#r- 此操作不可逆！#k#n");
            }
        } else if (status == 2) {
            if (cm.getPlayer().getBossLog("转生",1) <100){
            cm.getPlayer().setBossLog("转生",1);
            cm.getPlayer().setLevel(201);
            cm.getPlayer().fakeRelog();
            cm.sendNext("降级成功。");
            cm.dispose();
            } else {
                cm.sendNext("次数已达到最高次数。");
                cm.dispose(); 
            }
        }
    }
}
