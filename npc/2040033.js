/*
	Neru - Ludibrium : Ludibrium Pet Walkway (220000006)
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	if (cm.haveItem(4031128)) {
	    cm.sendNext("嗯，这是我弟弟的信！也许骂我以为我不工作和东西......咦？唉唉......你跟着我的哥哥的意见和训练有素的宠物，站起身来这里，是吧？不错！既然你辛辛苦苦来到这里，我会提高你的亲密关系水平与您的宠物.");
	} else {
	    cm.sendOk("我哥哥告诉我，照顾宠物的障碍，当然，但是...因为我远离他，我不禁想游手好闲......呵呵，因为我没有看到他在眼前，还不如干脆放松几分钟.");
	    cm.dispose();
	}
    } else if (status == 1) {
	if (cm.getPlayer().getPet(0) == null) {
	    cm.sendNextPrev("嗯...你真的来到这里与您的宠物？这些障碍的宠物。在这里，你有哪些没有它？在这里得到失控!");
	    cm.dispose();
	} else if (cm.getPlayer().getAccountLog("玩具跳跳",0) > 1) {
		cm.sendOk("一天只能完成一次，你离开吧");
		cm.dispose();
		cm.warp(910000000,0);
	} else {
		cm.getPlayer().setAccountLog("玩具跳跳",0);
		cm.gainItem(2022428,1);
		cm.gainItem(4001126,100);
	    cm.喇叭(1, "[" + cm.getPlayer().getName() + "]通过玩具城跳跳获得箱子枫叶*100奖励~");
	    cm.gainItem(4031128, -1);
	    cm.gainClosenessAll(4);
	    cm.sendNextPrev("你觉得呢？难道你不认为你已经得到了你的宠物更接近？如果你有时间，再训练你的宠物在这个障碍......当然当然，我的哥哥的许可.");
	    cm.dispose();
	}
    }
}