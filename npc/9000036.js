
//var sj;
//var itemSet = Array(2044908, 2044815, 2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003,
    2043303, 2043203, 2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710,
    2040709, 2040603, 2040507, 2040506, 2040303, 2040007, 2040006, 2040826, 2044908, 2044815,
    2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003, 2043303, 2043203,
    2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710, 2040709, 2040603,
    2040507, 2040506, 2040303, 2040007, 2040006, 2040826);
var itemSet1 = Array(2044908, 2044815, 2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003,
    2043303, 2043203, 2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710,
    2040709, 2040603, 2040507, 2040506, 2040303, 2040007, 2040006, 2040826, 2044908, 2044815,
    2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003, 2043303, 2043203,
    2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710, 2040709, 2040603,
    2040507, 2040506, 2040303, 2040007, 2040006, 2040826);
var sel = Math.floor(Math.random() * itemSet.length);
var sel1 = Math.floor(Math.random() * itemSet1.length);
var status = 0;
var 跑环;
var 环数
function start() {
    跑环 = cm.getBossLog("每日跑环_十环");
    sj = 跑环
    环数 = sj + 1
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
            var textz = "                 主 线 任 务 -  " + 环数 + " \r\n\r\n";
            if (跑环 == 0) {

                textz += " - 完成主线任务所需道具：#v4000019# x 30\r\n";
                textz += " - 完成主线任务所需道具：#v4000000# x 30\r\n";
                textz += " - 完成主线任务所需道具：#v4000016# x 30\r\n";

                textz += " - 奖励金币：200W\r\n\r\n";
                cm.sendYesNo(textz);
				
            } else if (跑环 == 1) {

                textz += " - 完成主线任务所需道具：#v4031227# x 1\r\n\r\n";

                textz += " - 奖励金币：300W\r\n\r\n";

                cm.sendYesNo(textz);

            } else if (跑环 == 2) {

                textz += " - 本环所需道具：#v4000004# x 200\r\n\r\n";

                textz += " - 奖励金币：400W\r\n\r\n";

                cm.sendYesNo(textz);
            } else if (跑环 == 3) {

                textz += " - 本环所需道具：#v4031794# x 30\r\n\r\n";

                textz += " - 奖励道具：#v2531000#\r\n\r\n";

                cm.sendYesNo(textz);
            } else if (跑环 == 4) {

                textz += " - 本环所需道具：#v4000040# x 1\r\n\r\n";

                textz += " - 奖励道具：#v2041332#x2\r\n\r\n";

                cm.sendYesNo(textz);
            } else if (跑环 == 5) {

                textz += " - 本环所需道具：#v4000150# x 50\r\n\r\n";

                textz += " - 奖励金币：500W\r\n\r\n";

                textz += " - 奖励道具：#v2049323#*1 + #v2041226#*1\r\n\r\n";

                cm.sendYesNo(textz);
			} else if (跑环 == 6) {

                textz += " - 本环所需道具：#v4000313# x 50\r\n\r\n";

                textz += " - 奖励金币：666W\r\n\r\n";

                textz += " - 奖励道具：#v2047954#*1\r\n\r\n";

                cm.sendYesNo(textz);
			} else if (跑环 == 7) {

                textz += " - 本环所需道具：#v4000429# x 200\r\n\r\n";

                textz += " - 奖励金币：1000W\r\n\r\n";

                textz += " - 奖励道具：#z4310038#*40\r\n\r\n";

                cm.sendYesNo(textz);
			} else if (跑环 == 8) {

                textz += " - 本环所需道具：#v4001084# x 1\r\n\r\n";

                textz += " - 奖励金币：1500W\r\n\r\n";

                textz += " - 奖励道具：#v2450000#*1\r\n\r\n";

                cm.sendYesNo(textz);
			} else if (跑环 == 9) {

                textz += " - 本环所需道具：#v4001083# x 1\r\n\r\n";

                textz += " - 奖励金币：2000W\r\n\r\n";

                textz += " - 奖励道具：#v2041200# #v2047926#*2 #v2614000# #v2533000#*1\r\n\r\n";;

                cm.sendYesNo(textz);
            } else {
                cm.sendOk("今日跑环任务以完成，请明日再来。");
                cm.dispose();
            }

        } else if (status == 1) {
            if (sj == 0) {
                if (cm.haveItem(4000019, 30) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else if (cm.haveItem(4000000, 30) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else if (cm.haveItem(4000016, 30) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000019, -30);
                    cm.gainItem(4000000, -30);
                    cm.gainItem(4000016, -30);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainMeso(2000000);
                    cm.sendOk("任务完成。");
                    cm.dispose();
                }

            } else if (sj == 1) {//2星
                if (cm.haveItem(4031227, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4031227, -1);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainMeso(3000000);
                    cm.sendOk("任务完成。");
                    cm.dispose();
                }

            } else if (sj == 2) {//3星
                if (cm.haveItem(4000004, 200) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000004, -200);
                    cm.setBossLog("每日跑环_十环");
					cm.gainMeso(4000000);
                    //cm.gainNX(500);
                    cm.sendOk("任务完成。");
                    cm.dispose();
                }

            } else if (sj == 3) {//4星
                if (cm.haveItem(4031794, 30) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4031794, -30);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainItem(2531000,1);
                    cm.sendOk("任务完成。");
                    cm.dispose();
                }

            } else if (sj == 4) {//5星
                if (cm.haveItem(4000040, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000040, -1);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainItem(2041332,2);
                    cm.sendOk("任务完成。");
                    cm.dispose();
                }

            } else if (sj == 5) {//6星
                if (cm.haveItem(4000150, 50) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000150, -50);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainMeso(5000000);
                    cm.gainItem(2049323,1);
                    cm.gainItem(2041226,1);
                    cm.sendOk("任务完成。");
                    cm.dispose();
                }

            } else if (sj == 6) {//7星
                if (cm.haveItem(4000313, 50) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000313, -50);
                    cm.setBossLog("每日跑环_十环");
                    //cm.gainNX(500);
					cm.gainMeso(6666666);
                    cm.gainItem(2047954,1);
                    //cm.gainItem(4000463,5);
                    cm.sendOk("任务完成。");
                    cm.dispose();
                }

            } else if (sj == 7) {//8星
                if (cm.haveItem(4000429, 200) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4000429, -200);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainMeso(10000000);
					cm.gainItem(4310038,40);
                    cm.sendOk("任务完成。");
                    cm.dispose();
                }

            } else if (sj == 8) {//9星
                if (cm.haveItem(4001084, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4001084, -1);
                    cm.setBossLog("每日跑环_十环");
                    cm.gainMeso(15000000);
                    cm.gainItem(2450000,1);
                    cm.sendOk("任务完成。");
                    cm.dispose();
                }

            } else if (sj == 9) {//10星
                if (cm.haveItem(4001083, 1) == false) {
                    cm.sendOk("道具所需数量不足。");
                    cm.dispose();
                } else {
                    cm.gainItem(4001083, -1);
                    cm.gainItem(2614000, 1);
                    cm.gainItem(2041200, 1);
					cm.gainItem(2533000, 1);
					cm.gainItem(2047926, 2);
                    //cm.gainNX(5000);
                    cm.gainItem(itemSet[sel], 1);
                    cm.gainItem(itemSet1[sel1], 1);;
                    cm.gainMeso(20000000);
                    cm.setBossLog("每日跑环_十环");
                    cm.sendOk("今日跑环任务全部完成，请明日再来。");
                    cm.dispose();
                }

            }
        }
    }
}