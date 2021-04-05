/* 维多
扎2任务
 */
 
var status;
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("恭喜来到这里，好吧我想我必须给您一点奖励来作为代价。");
    }
    else if (status == 1) {
	cm.sendNextPrev("来，这是我给你的奖励#b#t4031062##k。");
    }
    else if (status == 2) {
	cm.gainItem(2022428,1);
	cm.gainItem(4001126,100);
	cm.喇叭(1, "[" + cm.getPlayer().getName() + "]通过扎昆跳跳获得箱子枫叶*100奖励~");
	cm.getPlayer().setAccountLog("火山跳跳",0);
	cm.warp(211042300);
	if (cm.getQuestStatus(100202) != 2) {
	    cm.startQuest(100202);
	    cm.completeQuest(100202);
	}
	cm.dispose();
    }
}