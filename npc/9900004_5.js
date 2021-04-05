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
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += " \t\t     #e#d在我这里可以合成各种材料哦#n\r\n"
            
            //text += "\t\t\t#e#d当前在线时间：" + cm.getGamePoints() + "分钟！#k#n\r\n"
            
            //text += "\t#e#d账户余额：剩余点卷" + cm.getNX(1) + "#k\t剩余抵用卷" + cm.getNX(2) + "#k#n\r\n"
            
            text += "    #L1#制作勋章#l#L2#合成水晶#l#L3#合成矿石#l#L4#合成宝石#l\r\n\r\n"
			
            
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 5111);

        } else if (selection == 2) {
            cm.openNpc(9900004, 5112);

        } else if (selection == 3) {
            cm.openNpc(9900004, 5113);

        } else if (selection == 4) {
            cm.openNpc(9900004, 5114);

        } else if (selection == 5) {
            cm.openNpc(9900004, 5115);
        }
    }
}