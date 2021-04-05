


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (cm.getPlayer().getLevel() < 10) {
        cm.sendOk("你的等级未达到10级，因此未能解锁本功能");
        cm.dispose();
    }

    else if (status == 0) {
        if (cm.getMapId() == 209000001) {
            cm.dispose();
            cm.openNpc(2001004, 1);
        } else if (cm.getMapId() == 209000003) {
            cm.dispose();
            cm.openNpc(2001004, 2);
        } else if (cm.getMapId() == 209000004) {
            cm.dispose();
            cm.openNpc(2001004, 3);
        } else if (cm.getMapId() == 209000005) {
            cm.dispose();
            cm.openNpc(2001004, 4);
        } else if (cm.getMapId() == 209000006) {
            cm.dispose();
            cm.openNpc(2001004, 5);
        } else if (cm.getMapId() == 209000007) {
            cm.dispose();
            cm.openNpc(2001004, 6);
        } else if (cm.getMapId() == 209000008) {
            cm.dispose();
            cm.openNpc(2001004, 7);
        }
    }
}