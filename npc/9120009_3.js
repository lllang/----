
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
            text += "#e#b欢迎来到#r★BOSS大厅★#b\r\n"
            text += "\r\n";
            //text += "当前充值：" + cm.getPlayer().getBossLog("累计充值积分", 1) + "\r\n";
            //text += "  #L0#召唤扎昆  #b>>>>>   #v 4001017##b#z 4001017#*1#k#l\r\n\r\n";
            text += "  #r#L1#召唤福袋    #b>>>>>   #v 3700010##b#z 3700010#*1#k#l\r\n\r\n";
			text += "  #r#L2#召唤年兽    #b>>>>>   #v 3700010##b#z 3700010#*1#k#l\r\n\r\n";
			text += "  #r#L3#召唤福袋    #b>>>>>   #v 3700000##b#z 3700000#*1#k#l\r\n\r\n";
			text += "  #r#L4#召唤年兽    #b>>>>>   #v 3700000##b#z 3700000#*1#k#l\r\n\r\n";
            //text += "  #L2#送我离开#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.haveItem(4001017, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("扎昆", 0) >= 999) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
					cm.gainItem(4001017, -1);
                    cm.getMap().spawnZakum(673, 94)
                    cm.getPlayer().setBossLog("扎昆", 0);
                    cm.sendOk("召唤成功。");
                    cm.dispose()
                }
            } else if (selection == 1) {
                if (cm.haveItem(3700010, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
				} else if (!cm.haveItem(2041213, 30)) {
                        cm.sendOk("请将#v 2041213##b#z 2041213##k放入背包中");
                        cm.dispose();
                } else if (cm.getPlayer().getBossLog("闹钟", 0) >= 1) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
					cm.gainItem(2041213, -30);
                    cm.spawnMonster(9600066, 1);
                    cm.getPlayer().setBossLog("闹钟", 0);
                    cm.sendOk("召唤成功。");
					cm.喇叭(1,"["+cm.getName()+"]召唤了福袋，大家快去抢啊");
                    cm.dispose()
                }
		    } else if (selection == 2) {
                if (cm.haveItem(3700010, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
				} else if (!cm.haveItem(2041213, 30)) {
                        cm.sendOk("请将#v 2041213##b#z 2041213##k放入背包中");
                        cm.dispose();
                } else if (cm.getPlayer().getBossLog("闹钟", 0) >= 1) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
					cm.gainItem(2041213, -30);
                    cm.spawnMonster(9600063, 1);
                    cm.getPlayer().setBossLog("闹钟", 0);
                    cm.sendOk("召唤成功。");
					cm.喇叭(1,"["+cm.getName()+"]召唤了年兽，大家快去抢啊");
                    cm.dispose()
                }
			
			} else if (selection == 3) {
                if (cm.haveItem(3700000, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
				} else if (!cm.haveItem(2041213, 30)) {
                        cm.sendOk("请将#v 2041213##b#z 2041213##k放入背包中");
                        cm.dispose();
                } else if (cm.getPlayer().getBossLog("闹钟", 0) >= 2) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
					cm.gainItem(2041213, -30);
                    cm.spawnMonster(9600066, 1);
                    cm.getPlayer().setBossLog("闹钟", 0);
                    cm.sendOk("召唤成功。");
					cm.喇叭(1,"["+cm.getName()+"]召唤了年兽，大家快去抢啊");
                    cm.dispose()
                }
				
			} else if (selection == 4) {
                if (cm.haveItem(3700000, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
				} else if (!cm.haveItem(2041213, 30)) {
                        cm.sendOk("请将#v 2041213##b#z 2041213##k放入背包中");
                        cm.dispose();
                } else if (cm.getPlayer().getBossLog("闹钟", 0) >= 2) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
					cm.gainItem(2041213, -30);
                    cm.spawnMonster(9600063, 1);
                    cm.getPlayer().setBossLog("闹钟", 0);
                    cm.sendOk("召唤成功。");
					cm.喇叭(1,"["+cm.getName()+"]召唤了年兽，大家快去抢啊");
                    cm.dispose()
                }
            } else if (selection == 2) {
                cm.warp(910000000, 1);
                cm.dispose()
            }
        }
    }
}
