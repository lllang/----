/*
	Weaver - Ludibrium : Ludibrium Pet Walkway (220000006)
**/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
	cm.dispose();
	return;
    } else if (status >= 1 && mode == 0) {
	cm.sendNext("需要的时候可以来找我。");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendYesNo("你是来完成任务的吗？我给你信件，你上去给我老表吧。\r\n\r\n#r上去前请确保背包拥有#v4031128#不然白跳了。");
    } else if (status == 1) {
	if (cm.haveItem(4031128)) {
	    cm.sendNext("拿到这一封信，跳跃过那些障碍把这封信给我弟弟他会给你奖励...");
	    cm.dispose();
	} else {
	    cm.gainItem(4031128, 1);
	    cm.sendOk("好运!");
	    cm.dispose();
	}
    }
}