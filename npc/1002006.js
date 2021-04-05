var status;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

    if (mode == 0) {
		cm.dispose();
	return;
    } else if (mode == 1){
	status++;
    } else {
	status--;
    }

    switch (status) {
        case 0: 
	    cm.sendOk("如果你给我1000W金币的话，我可以告诉你一个有价值的信息！");
		cm.dispose();
            break;
        case 1: //
            break;
    }
}
