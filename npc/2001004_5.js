
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
            text += "#e#b欢迎来到#r★超凡大师★#b练功房（每日共可挑战10次BOSS）\r\n"
            text += "要挑战的BOSS#r需要 充值积分 达到4000哦！\r\n";
            text += "当前充值：" + cm.getPlayer().getBossLog("累计充值积分", 1) + "\r\n";
            text += "  #L0#蝙蝠魔  #b>>>>>>>       需满4000充值积分#l\r\n\r\n";
           // text += "  #r#L1#皮亚努斯  #b>>>>>>>       需满4000充值积分#l\r\n\r\n";
            text += "  #L2#送我离开#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getPlayer().getBossLog("累计充值积分", 1) < 4000) {
                    cm.sendOk("所需充值积分不足，无法召唤。");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("蝙蝠魔", 0) >= 10) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
                    cm.spawnMonster(8150000, 1);
                    cm.getPlayer().setBossLog("蝙蝠魔", 0);
                    cm.sendOk("召唤成功。");
                    cm.dispose()
                }
            } else if (selection == 1) {
                if (cm.getPlayer().getBossLog("累计充值积分", 1) < 4000) {
                    cm.sendOk("所需充值积分不足，无法召唤。");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("皮亚努斯", 0) >= 10) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
                    cm.spawnMonster(8520000, 1);
                    cm.getPlayer().setBossLog("皮亚努斯", 0);
                    cm.sendOk("召唤成功。");
                    cm.dispose()
                }
            } else if (selection == 2) {
                cm.warp(910000000, 1);
                cm.dispose()
            }
        }
    }
}
