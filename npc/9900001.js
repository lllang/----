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
        cm.dispose();

    } else {            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var text = "如要转生，请满足以下要求：\r\n\r\n";
            text += "1).等级达到 #r250#k级。\r\n";
            text += "2).“#b力量，敏捷，魔力，运气#k”任意一项属性达到 #r5000#k。\r\n\r\n";
            text += " - Tip：#b职业/技能#k不变，等级降低至 #r200 #k级。\r\n";
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (cm.getChar().getLevel() <= 249) {
                cm.sendOk("很抱歉，您需要250级。");
                cm.dispose();
            } else if (cm.getPlayer().getStr() < 5000 && cm.getPlayer().getDex() < 5000 && cm.getPlayer().getInt() < 5000 && cm.getPlayer().getLuk() < 5000) {
                var text = "请保证任意属性值达到 #r5000#k 点。\r\n\r\n";
                text += " - 当前力量值：#r"+cm.getPlayer().getStr()+"#k\r\n";
                text += " - 当前敏捷值：#r"+cm.getPlayer().getDex()+"#k\r\n";
                text += " - 当前智力值：#r"+cm.getPlayer().getInt()+"#k\r\n";
                text += " - 当前运气值：#r"+cm.getPlayer().getLuk()+"#k\r\n";
                cm.sendOk(text);
                cm.dispose();
            } else {
                cm.getPlayer().setLevel(201);
                cm.getPlayer().fakeRelog();
                cm.sendNext("转生成功。");
                cm.dispose();
            }
        }
    }
}
