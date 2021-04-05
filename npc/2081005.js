
var morph;
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
	
    if (status == 0) {	
	cm.sendYesNo("在我这里可以使用 “#b#v5220006##z5220006##k” 增加一次 #r黑龙挑战次数#k。");
	
	} else if (status == 1) {
	if (cm.getBossLog("挑战黑龙次数") == 0) {
		cm.sendOk("当前不需要增加次数。");
		cm.dispose();
	} else if (cm.getBossLog("增加黑龙次数") > 0) {
		cm.sendOk("今天已经使用过了，无法再次增加挑战次数。");
		cm.dispose();
	} else if (cm.haveItem(5220006,1) == false) {
		cm.sendYesNo("你的背包内没有“#b#v5220006##z5220006##k”，是否进行购买？（#r5000#k点卷）");
	}else{
		cm.gainItem(5220006,-1);
		cm.getPlayer().setBossLog("挑战黑龙次数",0,-1);
		cm.getPlayer().setBossLog("增加黑龙次数",0,1);
	    cm.sendOk("增加次数完成。");
		cm.dispose();
	}
	} else if (status == 2) {	
	       if (cm.getPlayer().getCSPoints(1) > 5000) { 
		       cm.gainItem(5220006,1);
			   cm.gainNX(-5000);
			   cm.sendOk("购买成功~");
			   cm.dispose();
			   status = -1;
		   }else{
			   cm.sendOk("点卷不足，无法购买");
			   cm.dispose();
}
}
}