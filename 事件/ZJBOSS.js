function init() {
    em.setProperty("state", "0");
}

function monsterValue(eim, mobId) {
    return 1;
}

function setup() {
    em.setProperty("state", "1");

    var eim = em.newInstance("ZJBOSS");
    var map = eim.setInstanceMap(970030101);
    map.resetFully();
   // map.getPortal("next00").setScriptName("kpq1");
    map = eim.setInstanceMap(970030102);
    map.resetFully();
    map = eim.setInstanceMap(970030103);
    map.resetFully();
    map = eim.setInstanceMap(970030104);
    map.resetFully();
    map = eim.setInstanceMap(970030105);
    map.resetFully();

    eim.startEventTimer(10);

    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapFactory().getMap(970030101);
    player.changeMap(map, map.getPortal(0));
    //player.tryPartyQuest(1201);
}

function playerDead(eim, player) {}

function changedMap(eim, player, mapid) {
    switch (mapid) {
        case 970030101: // 1st Stage
        case 970030102: // 2nd Stage
        case 970030103: // 3rd Stage
        case 970030104: // 4th Stage
        case 970030105: // 5th Stage
            return;
    }
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
    }
}

function playerRevive(eim, player) {}

function playerDisconnected(eim, player) {
    return -2;
}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable
    if (eim.disposeIfPlayerBelow(3, 970030000)) {
        em.setProperty("started", "false");
    } else {
        playerExit(eim, player);
    }
}

function disbandParty(eim) {
    // Boot whole party and end
    eim.disposeIfPlayerBelow(100, 970030000);

    em.setProperty("state", "0");
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    var exit = eim.getMapFactory().getMap(970030000);
    player.changeMap(exit, exit.getPortal(0));
}

function clearPQ(eim) {
    // KPQ does nothing special with winners
    eim.disposeIfPlayerBelow(100, 970030000);

    em.setProperty("state", "0");
}

function scheduledTimeout(eim) {

    var players = eim.getPlayers();
    var exit = eim.getMapFactory().getMap(970030000);
    for (var i = 0; i < players.size(); i++) {
        var player = players.get(i);
        eim.unregisterPlayer(player);
        player.changeMap(exit, exit.getPortal(0));
    }

}


function allMonstersDead(eim) {}

function cancelSchedule() {}
