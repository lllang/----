
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
            text += "#e#b欢迎来到#r★魂兽大厅★#b\r\n"
            text += "\r\n";
            //text += "当前充值：" + cm.getPlayer().getBossLog("累计充值积分", 1) + "\r\n";
            text += "  #r#L0#千年魂兽#b>>>>>   消耗#v 4000040##b背包要有#v 1112422#1个#k#l\r\n\r\n";
            text += "  #r#L1#万年魂兽#b>>>>>   消耗#v 4000176##b背包要有#v 1112426#1个#k#l\r\n\r\n";
			text += "  #r#L2#十万年魂兽#b>>>>> 消耗#v 4002001##b背包要有#v 1112586#1个#k#l\r\n\r\n";
			text += "  #r#L3#百万年魂兽#b>>>>> 消耗#v 4000175##b背包要有#v 1112932#1个#k#l\r\n\r\n";
            text += "  #L4#送我离开#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
			if (cm.getMonsterCount(108010501)>=20) {
				cm.sendOk("最多存在10只，打死了以后在来召唤");
				cm.dispose();
				return;
			}
            if (selection == 0) {
                if (!cm.haveItem(4000040, 1)) {
                    cm.sendOk("请将#v 4000040##b#z 4000040##k放入背包中");
                    cm.dispose();
				} else if (!cm.haveItem(1112422, 1)) {
                    cm.sendOk("请将#v 1112422##b#z 1112422##k放入背包中");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("扎昆", 0) >= 999) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
					cm.gainItem(4000040, -1);
                    cm.spawnMobOnMap(8300007, 1, 400, 47, 108010501, 45000000000);
                    cm.getPlayer().setBossLog("闹钟", 0);
                    cm.sendOk("召唤成功。");
                    cm.dispose()
                }
            } else if (selection == 1) {
                if (!cm.haveItem(4000176, 1)) {
                    cm.sendOk("请将#v 4000176##b#z 4000176##k放入背包中");
                    cm.dispose();
				} else if (!cm.haveItem(1112426, 1)) {
                    cm.sendOk("请将#v 1112426##b#z 1112426##k放入背包中");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("扎昆", 0) >= 999) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
					cm.gainItem(4000176, -1);
                    cm.spawnMobOnMap(8860000, 1, 400, 47, 108010501, 125000000000);
                    cm.getPlayer().setBossLog("闹钟", 0);
                    cm.sendOk("召唤成功。");
                    cm.dispose()
                }
			} else if (selection == 2) {
                if (!cm.haveItem(4002001, 1)) {
                    cm.sendOk("请将#v 4002001##b#z 4002001##k放入背包中");
                    cm.dispose();
				} else if (!cm.haveItem(1112586, 1)) {
                    cm.sendOk("请将#v 1112586##b#z 1112586##k放入背包中");
                    cm.dispose();
                } else {
					cm.gainItem(4002001, -1);
                    cm.spawnMobOnMap(8910100, 1, 400, 47, 108010501, 350000000000);//半半
                    cm.getPlayer().setBossLog("闹钟", 0);
                    cm.sendOk("召唤成功。");
                    cm.dispose()
                }
			} else if (selection == 3) {
                 if (!cm.haveItem(4000175, 1)) {
                    cm.sendOk("请将#v 4000175##b#z 4000175##k放入背包中");
                    cm.dispose();
				} else if (!cm.haveItem(1112932, 1)) {
                    cm.sendOk("请将#v 1112932##b#z 1112932##k放入背包中");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("扎昆", 0) >= 999) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
					cm.gainItem(4000175, -1);
                    cm.spawnMobOnMap(8870000, 1, 400, 47, 108010501, 800000000000);//希拉
                    cm.getPlayer().setBossLog("闹钟", 0);
                    cm.sendOk("召唤成功。");
                    cm.dispose()
                }
            } else if (selection == 4) {
                cm.warp(910000000, 1);
                cm.dispose()
            }
        }
    }
}
