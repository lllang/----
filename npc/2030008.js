
var morph;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
	
    if (status == 0) {	
	cm.sendYesNo("在我这里可以使用 “#r3000#k点卷” 增加一次 #r扎昆挑战次数#k。");
	
	} else if (status == 1) {
	if (cm.getBossLog("挑战扎昆远征队") == 0) {
		cm.sendOk("当前不需要增加次数。");
		cm.dispose();
	} else if (cm.getBossLog("增加扎昆次数") > 0) {
		cm.sendOk("今天已经使用过了，无法再次增加挑战次数。");
		cm.dispose();
	} else if (cm.getPlayer().getCSPoints(1) < 3000) {
		cm.sendOk("点卷不足，无法购买");
		cm.dispose();
	}else{
		cm.gainNX(-3000);
		cm.getPlayer().setBossLog("挑战扎昆远征队",0,-1);
		cm.getPlayer().setBossLog("增加扎昆次数",0,1);
	    cm.sendOk("增加次数完成。");
		cm.dispose();
	}

}
}