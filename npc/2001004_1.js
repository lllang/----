
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
            text += "#e#b欢迎来到#r★BOSS之家★#b练功房（每日共可挑战10次BOSS）\r\n"
            text += "要挑战的武林-妖僧BOSS#r需要 充值积分 达到300哦！\r\n";
            text += "当前充值：" + cm.getPlayer().getBossLog("累计充值积分", 1) + "\r\n";
            text += "  #L0#武林-妖僧  #b>>>>>>>       需满300充值积分#l\r\n\r\n";
            text += "  #L1#送我离开#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
               if (cm.haveItem(4000019, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else if (cm.getPlayer().getBossLog("武林妖僧", 0) >= 10) {
                    cm.sendOk("今日召唤已达到上限，无法召唤。");
                    cm.dispose();
                } else {
					cm.gainItem(4000019, -1);
                    cm.spawnMonster(9600025, 1);
                    cm.getPlayer().setBossLog("武林妖僧", 0);
                    cm.sendOk("召唤成功。");
                    cm.dispose()
                }
            } else if (selection == 1) {
                    cm.warp(910000000, 1);
                    cm.dispose()
                }
            }
        }
    }
