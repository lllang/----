function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple("#b你好 #k#h  ##e  #b我是排名系统.#k\r\n         #L1##g[等级排名]\n\#l\r\n\r\n         #L2##g[金币排名]#l\n\#l\r\n\r\n         #L0##g[人气排名]#l");//\r\n#L2##b金币排名#l
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 0) {	
	cm.人气排行榜();
	cm.dispose(); 
	}
	else if (selection == 1) {
	cm.showlvl();
	cm.dispose();
	}
	else if (selection == 2) {
	cm.showmeso();
	cm.dispose();
	}
	
}
