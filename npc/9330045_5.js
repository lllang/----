/* 
 * 脚本类型: cm
 * 脚本用途: 点卷中介
 * 脚本作者: 故事丶
 * 制作时间: 2014/12/18
 */


//importPackage(net.sf.cherry.client);
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
var dds;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("如果需要点卷中介服务在来找我吧。");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            // cm.getChar().gainCashDD(+1000);

            if (cm.haveItem(4200007, 1)) {
                cm.sendOk("你是个可疑的人，不允许打开兑换。");
                cm.dispose();
            }

            var gsjb = "";
            gsjb = "看看你有什么鱼可以和我做交易呢？\r\n\r\n";
            gsjb += "#L0##r #z4031636# #v4031636# x 200 兑换 #v4001126# 200\r\n";
			
			gsjb += "#L1##r #z4031637# #v4031637# x 50 兑换 #v2049345# #l\r\n";
			
			gsjb += "#L2##r #z4031638# #v4031638#  x 50 兑换 #v2049346# #l\r\n";
			
			gsjb += "#L3##r #z4031639# #v4031639#  x 50 兑换 #v2049347# #l\r\n";
			
			gsjb += "#L4##r #z4031640# #v4031640#  x 50 兑换 #v2049348# #l\r\n";
			
			gsjb += "#L5##r #z4031641# #v 4031641#  x 50 兑换 #v2049349# #l\r\n";
			
			gsjb += "#L6##r #z4031642# #v 4031642#  x 50 兑换 #v2041332# #l\r\n";
			
			gsjb += "#L7##r #z4031643# #v 4031643#  x 100 兑换 #v2047954# #l\r\n";
			
			gsjb += "#L8##r #z4031644# #v 4031644#  x 100 兑换 #v2533000# #l\r\n";
			
			gsjb += "#L9##r #z4031645# #v 4031645#  x 150 兑换 #v2614000# #l\r\n";
			
			//gsjb += "#L10##r #z4031646# #v4031646#  x 200 兑换200张 #v3994578# #l\r\n";
			
			//gsjb += "#L11##r #z4031647# #v4031647#  x 1000 兑换四维+300 攻击+100 #v1003946# #l\r\n";
			
			//gsjb += "#L12##r #z4031648# #v4031648#  x 1000 兑换四维+300 攻击+100 #v1072853# #l\r\n";
			
			//gsjb += "#L0##r #z4031636# x 100 兑换 #v2450000# #l\r\n";
			
			//gsjb += "#L0##r #z4031636# x 100 兑换 #v2450000# #l\r\n";
			
			//gsjb += "#L0##r #z4031636# x 100 兑换 #v2450000# #l\r\n";
			
			//gsjb += "#L0##r #z4031636# x 100 兑换 #v2450000# #l\r\n";
            //gsjb += "#L1##r #z4031640# x 300 兑换 #v2041226# #l\r\n";
            //gsjb += "#L2##r #z4031644# x 300 兑换 #v1022079# 全属性150 #l\r\n";
            //gsjb += "#L3##r #z4031648# x 400 兑换 #v1032024# 全属性500 #l\r\n";
            //gsjb += "#L4##r #z4031648# x 400 兑换 #v2590000#  #l\r\n";
			//gsjb += "#L5##r #z4031648# x 2000 兑换 #v4442000#  #l\r\n";
            //gsjb += "#L5##r #z4031629# x 1兑换 找GMQQ要神器 #l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.haveItem(4031636, 200)) {
                    cm.gainItem(4031636, -200);
                    cm.gainItem(4001126, 200);//完成
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (cm.haveItem(4031637, 50)) {
                    cm.gainItem(4031637, -50);
                    cm.gainItem(2049345, 1);//完成
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
            } else if (selection == 2) {
                if (cm.haveItem(4031638, 50)) {
                    cm.gainItem(4031638, -50);
                    cm.gainItem(2049346, 1);//完成
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
            } else if (selection == 3) {
                if (cm.haveItem(4031639, 50)) {
                    cm.gainItem(4031639, -50);
                    cm.gainItem(2049347, 1);//完成
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
            } else if (selection == 4) {
                if (cm.haveItem(4031640, 50)) {
                    cm.gainItem(4031640, -50);
                    cm.gainItem(2049348,1);//完成
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
			 } else if (selection == 5) {
                if (cm.haveItem(4031641, 50)) {
                    cm.gainItem(4031641, -50);
                    cm.gainItem(2049349,1);
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
			} else if (selection == 6) {
                if (cm.haveItem(4031642, 50)) {
                    cm.gainItem(4031642, -50);
                    cm.gainItem(2041332,1);
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
			} else if (selection == 7) {
                if (cm.haveItem(4031643, 100)) {
                    cm.gainItem(4031643, -100);
                    cm.gainItem(2047954,1);
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
			} else if (selection == 8) {
                if (cm.haveItem(4031644, 100)) {
                    cm.gainItem(4031644, -100);
                    cm.gainItem(2530000,1);
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
			} else if (selection == 9) {
                if (cm.haveItem(4031645, 150)) {
                    cm.gainItem(4031645, -150);
                    cm.gainItem(2614000,1);
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
			} else if (selection == 10) {
                if (cm.haveItem(4031646, 200)) {
                    cm.gainItem(4031646, -200);
                    cm.gainItem(3994578,200);
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
			} else if (selection == 11) {
                if (cm.haveItem(4031647, 1000)) {
                    cm.gainItem(4031647, -1000);
                    cm.gainItem(1003946, 300, 300, 300, 300, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
			} else if (selection == 12) {
                if (cm.haveItem(4031648, 1000)) {
                    cm.gainItem(4031648, -1000);
                    cm.gainItem(1072853, 300, 300, 300, 300, 0, 0, 100, 100, 0, 0, 0, 0, 0, 0);
                    cm.sendOk("兑换完毕");
                    cm.dispose();
                } else {
                    cm.sendOk("道具不足。");
                    cm.dispose();
                }
            } else if (selection == 5) {
                cm.sendOk("请联系GM兑换");
                cm.dispose();

            }
        }
    }
}
