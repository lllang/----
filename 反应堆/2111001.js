/*
Zakum Altar - Summons Zakum.
*/

function act() {
    rm.changeMusic("Bgm06/FinalFight");
	rm.getMap().spawnZakum(-10, -215);
    rm.mapMessage("扎昆被神秘的力量唤醒。");
	if (!rm.getPlayer().isGM()) {
		rm.getMap().startSpeedRun();
	}
}
