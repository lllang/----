var setupTask;
var Open = 20;//晚上八点
var Close = 22;//晚上十点
function init() {
	scheduleNew();
}

function scheduleNew() {
	var cal = java.util.Calendar.getInstance();
	cal.set(java.util.Calendar.SECOND, 5);
	var nextTime = cal.getTimeInMillis();
	while (nextTime <= java.lang.System.currentTimeMillis()) {
		nextTime += 1000;
	}
	setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
	setupTask.cancel(true);
}

function start() {
	var mDate = new Date();
	if (mDate.getSeconds() == 0 && mDate.getMinutes() == 0 && mDate.getHours() == Open) {
		em.broadcastServerMsg(5, "开启双倍经验,时间2小时", false);
		em.getChannelServer().setDoubleExp(2);
	} else if (mDate.getHours() >= Open && mDate.getHours() < Close) {
		em.getChannelServer().setDoubleExp(2);
	} else if (mDate.getSeconds() == 0 && mDate.getMinutes() == 0 && mDate.getHours() == Close) {
		em.broadcastServerMsg(5, "双倍经验已关闭，每日"+Open+" - "+Close+" 开启。", false);
		em.getChannelServer().setDoubleExp(1);
	} else {
		em.getChannelServer().setDoubleExp(1);
	}
	scheduleNew();
}
