var setupTask;
var Open = 20;//���ϰ˵�
var Close = 22;//����ʮ��
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
		em.broadcastServerMsg(5, "����˫������,ʱ��2Сʱ", false);
		em.getChannelServer().setDoubleExp(2);
	} else if (mDate.getHours() >= Open && mDate.getHours() < Close) {
		em.getChannelServer().setDoubleExp(2);
	} else if (mDate.getSeconds() == 0 && mDate.getMinutes() == 0 && mDate.getHours() == Close) {
		em.broadcastServerMsg(5, "˫�������ѹرգ�ÿ��"+Open+" - "+Close+" ������", false);
		em.getChannelServer().setDoubleExp(1);
	} else {
		em.getChannelServer().setDoubleExp(1);
	}
	scheduleNew();
}
