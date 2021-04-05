
var status = 0;
var zones = 0;
//4000425
var ItemId = Array(
	Array(4310044, 30, 30, 1, "转生奖励_1"),
	Array(4310044, 50, 50, 2, "转生奖励_2"),
	Array(4310044, 50, 50, 3, "转生奖励_3"),
	Array(4310044, 50, 50, 4, "转生奖励_4"),
	Array(4310044, 50, 50, 5, "转生奖励_5"),
	Array(4310044, 50, 50, 6, "转生奖励_6"),
	Array(4310044, 50, 50, 7, "转生奖励_7"),
	Array(4310044, 50, 50, 8, "转生奖励_8"),
	Array(4310044, 50, 50, 9, "转生奖励_9"),
	Array(4310044, 50, 50, 10, "转生奖励_10"),
	Array(4310044, 50, 50, 11, "转生奖励_11"),
	Array(4310044, 50, 50, 12, "转生奖励_12"),
	Array(4310044, 50, 50, 13, "转生奖励_13"),
	Array(4310044, 50, 50, 14, "转生奖励_14"),
	Array(4310044, 50, 50, 15, "转生奖励_15"),
	Array(4310044, 50, 50, 16, "转生奖励_16"),
	Array(4310044, 50, 50, 17, "转生奖励_17"),
	Array(4310044, 50, 50, 18, "转生奖励_18"),
	Array(4310044, 50, 50, 19, "转生奖励_19"),
	Array(4310044, 50, 50, 20, "转生奖励_20"),
	Array(4310044, 50, 50, 21, "转生奖励_21"),
	Array(4310044, 50, 50, 22, "转生奖励_22"),
	Array(4310044, 50, 50, 23, "转生奖励_23"),
	Array(4310044, 50, 50, 24, "转生奖励_24"),
	Array(4310044, 50, 50, 25, "转生奖励_25"),
	Array(4310044, 50, 50, 26, "转生奖励_26"),
	Array(4310044, 50, 50, 27, "转生奖励_27"),
	Array(4310044, 50, 50, 28, "转生奖励_28"),
	Array(4310044, 50, 50, 29, "转生奖励_29"),
	Array(4310044, 50, 50, 30, "转生奖励_30"),
	Array(4310044, 50, 50, 31, "转生奖励_31"),
	Array(4310044, 50, 50, 32, "转生奖励_32"),
	Array(4310044, 50, 50, 33, "转生奖励_33"),
	Array(4310044, 50, 50, 34, "转生奖励_34"),
	Array(4310044, 50, 50, 35, "转生奖励_35"),
	Array(4310044, 50, 50, 36, "转生奖励_36"),
	Array(4310044, 50, 50, 37, "转生奖励_37"),
	Array(4310044, 50, 50, 38, "转生奖励_38"),
	Array(4310044, 50, 50, 39, "转生奖励_39"),
	Array(4310044, 50, 50, 40, "转生奖励_40"),
	Array(4310044, 50, 50, 41, "转生奖励_41"),
	Array(4310044, 50, 50, 42, "转生奖励_42"),
	Array(4310044, 50, 50, 43, "转生奖励_43"),
	Array(4310044, 50, 50, 44, "转生奖励_44"),
	Array(4310044, 50, 50, 45, "转生奖励_45"),
	Array(4310044, 50, 50, 46, "转生奖励_46"),
	Array(4310044, 50, 50, 47, "转生奖励_47"),
	Array(4310044, 50, 50, 48, "转生奖励_48"),
	Array(4310044, 50, 50, 49, "转生奖励_49"),
	Array(4310044, 50, 50, 50, "转生奖励_50"),
	Array(4443300, 50, 50, 100, "转生奖励_100")
);


function start() {
	status = -1;
	action(1, 0, 0);
}


function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			var 转生 = cm.getPlayer().getBossLog("转生", 1);
			StringS = " #b在这里可以领取相应转生奖励：\r\n";
			StringS += " #k- 当前转生次数：#r" + (转生) + "#k 次\r\n";
			for (var i = 0; i < ItemId.length; i++) {
				StringS += "#L" + i + "#领取：#d#v" + ItemId[i][0] + "##z" + ItemId[i][0] + "##l\r\n\r\n";
				StringS += "#k,  需要转生次数：#b" + 转生 + "#k / #r" + ItemId[i][3] + "#k\r\n";
			}
			cm.sendSimple(StringS);

		} else if (status == 1) {
			if (cm.getPlayer().getBossLog("转生", 1) < ItemId[selection][3]) {
				cm.sendOk("转生次数不足，无法兑换。");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog(ItemId[selection][4], 1) == 0) {
				cm.getPlayer().setBossLog(ItemId[selection][4], 1, 1);
				cm.gainItem(ItemId[selection][0], ItemId[selection][1], ItemId[selection][1], ItemId[selection][1], ItemId[selection][1], 0, 0, ItemId[selection][2], ItemId[selection][2], 0, 0, 0, 0, 0, 0);
				cm.sendOk("兑换成功。");
				cm.dispose();
			}
		}
	}
}