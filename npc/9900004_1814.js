var 红色双箭头 = "#fUI/UIWindow.img/Quest/icon9/0#";
var 蓝色双箭头 = "#fUI/UIWindow.img/Quest/icon8/0#";
var 选择道具图标 = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 铅笔图标 = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var H字母 = "#fUI/CashShop/CSEffect/effect/1#";
var 金币图标 = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var 表情高兴 = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";

//------------------- 自定义专区 ------------------
var 兑换倍率 = 500;
var 给予三倍 = true; // 如果要关闭给予三倍请把true改为false
var 每日赞助礼包1金额 = 99;
var 每日赞助礼包1 = Array(
    Array(4310080, 3),
	Array(2041332, 20),
	Array(2613008, 20),
	Array(2531000, 20),
	Array(2610003, 20),
	Array(2049600, 20),
	Array(2613001, 10)
);

var 每日赞助礼包2金额 = 199;
var 每日赞助礼包2 = Array(
    Array(3992025, 1),
	Array(4442100, 1),
	Array(4442000, 1),
	Array(4000464, 1),
	Array(4310080, 6),
	Array(2041332, 40),
	Array(2613008, 40),
	Array(2531000, 40),
	Array(2610003, 40),
	Array(2049600, 40),
	Array(2048904, 20),
	Array(2613001, 20)
);

var 每日赞助礼包3金额 = 299;
var 每日赞助礼包3 = Array(
    Array(3992025, 1),
	Array(4442100, 1),
	Array(4442000, 1),
	Array(4000464, 1),
	Array(4310080, 9),
	Array(2041332, 60),
	Array(2613008, 60),
	Array(2531000, 60),
	Array(2610003, 100),
	Array(2049600, 200),
	Array(2048904, 40),
	Array(2613001, 30)
);

var 每日赞助礼包4金额 = 399;
var 每日赞助礼包4 = Array(
    Array(3992025, 2),
	Array(4442100, 2),
	Array(4442000, 2),
	Array(4000464, 2),
	Array(4310080, 12),
	Array(2041332, 80),
	Array(2613008, 80),
	Array(2531000, 80),
	Array(2610003, 150),
	Array(2049600, 300),
	Array(2048904, 60),
	Array(2613001, 50)
	
);

function start() {
    if (cm.getmoneyb() > 0) {
        cm.worldMessage(12, cm.getC().getChannel(), "【点券充值】" + " : " + " [" + cm.getPlayer().getName() + "] 通过赞助领取了 " + cm.getmoneyb() * 兑换倍率 + " 点券奖励！", true);
        cm.getPlayer().setBossLog("累计赞助积分", 1, cm.getmoneyb());
        cm.getPlayer().setBossLog("当日累计赞助", 0, cm.getmoneyb());
        cm.gainNX(cm.getmoneyb() * 兑换倍率);
        cm.setmoneyb(-cm.getmoneyb());
        status = -1;
        action(1, 0, 0);
    } else {
        status = -1;
        action(1, 0, 0);
    }
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("#b好的,下次再见.");
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("#b好的,下次再见.");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            var text = "\t\t\t\t  " + 铅笔图标 + " [充值系统] " + 铅笔图标 + "\r\n\r\n";
            text += "\t\t\t" + 警报灯 + " #d总计累计赞助: #r" + cm.getPlayer().getBossLog("累计赞助积分", 1) + " #d元 " + 警报灯 + "\r\n\r\n";
            //text += "\t\t\t" + 警报灯 + " #d今日累计赞助: #r" + cm.getPlayer().getBossLog("当日累计赞助", 0) + " #d元 " + 警报灯 + "\r\n";
            text += "              #b#L0#累 计 赞 助 礼 包#l\r\n\r\n";
            //text += "              #r#L1#每 日 充 值 礼 包#l\r\n\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {

            if (selection == 0) {
                cm.openNpc(9900007, 1000);

            } else if (selection == 1) {
                var text = "";
                text += "\t\t\t  #e#r" + 表情高兴 + "" + cm.serverName() + "每日赞助" + 表情高兴 + "#k#n\r\n\r\n#r"

                text += "#r奖励说明：每天累计赞助才可以领取！每次领取一次#k\r\n"
				
				text += "#r更新说明：每天更新一次首充内容#k\r\n"

                text += "今日累计赞助：#r" + cm.getPlayer().getBossLog("当日累计赞助", 0) + " #k元\r\n"

                text += "#d#L0#领取单日赞助 #r#e" + 每日赞助礼包1金额 + "R#d#n 礼包#l\r\n\r\n"
                text += " - 可领取道具："
                for (var i = 0; i < 每日赞助礼包1.length; i++) {
                    text += "#d#v" + 每日赞助礼包1[i][0] + "##k x #b" + 每日赞助礼包1[i][1] + "#k";
                }
                text += "\r\n\r\n"

                text += "#d#L1#领取单日赞助 #r#e" + 每日赞助礼包2金额 + "R#d#n 礼包#l\r\n\r\n"
                text += " - 可领取道具："
                for (var i = 0; i < 每日赞助礼包2.length; i++) {
                    text += "#d#v" + 每日赞助礼包2[i][0] + "##k x #b" + 每日赞助礼包2[i][1] + "#k";
                }
				
				text += "\r\n\r\n"

                text += "#d#L2#领取单日赞助 #r#e" + 每日赞助礼包3金额 + "R#d#n 礼包#l\r\n\r\n"
                text += " - 可领取道具："
                for (var i = 0; i < 每日赞助礼包3.length; i++) {
                    text += "#d#v" + 每日赞助礼包3[i][0] + "##k x #b" + 每日赞助礼包3[i][1] + "#k";
                }
				
				text += "\r\n\r\n"

                text += "#d#L3#领取单日赞助 #r#e" + 每日赞助礼包4金额 + "R#d#n 礼包#l\r\n\r\n"
                text += " - 可领取道具："
                for (var i = 0; i < 每日赞助礼包4.length; i++) {
                    text += "#d#v" + 每日赞助礼包4[i][0] + "##k x #b" + 每日赞助礼包4[i][1] + "#k";
                }

                cm.sendSimple(text);
            }

        } else if (status == 2) {
            if (selection == 0) {
                if (cm.getPlayer().getBossLog("当日累计赞助", 0) < 每日赞助礼包1金额) {
                    cm.sendOk("今日累计赞助金额不足，无法领取。");
                    cm.dispose();
                } else if (cm.getBossLog("每日赞助礼包1") > 0) {
                    cm.sendOk("该礼包今日已领取，请明日再来。");
                    cm.dispose();
                } else {
                    cm.setBossLog("每日赞助礼包1");
                    for (var i = 0; i < 每日赞助礼包1.length; i++) {
                        cm.gainItem(每日赞助礼包1[i][0], 每日赞助礼包1[i][1]);
                    }
                    cm.playerMessage(5, "恭喜你领取了今日的 " + 每日赞助礼包1金额 + "R 赞助礼包");
                    cm.worldMessage(12, cm.getC().getChannel(), "【每日赞助礼包】" + " : " + " [" + cm.getPlayer().getName() + "] 领取了每日赞助 " + 每日赞助礼包1金额 + "R 套餐！", true);
                    cm.sendOk("恭喜你领取成功~!");
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (cm.getPlayer().getBossLog("当日累计赞助", 0) < 每日赞助礼包2金额) {
                    cm.sendOk("今日累计赞助金额不足，无法领取。");
                    cm.dispose();
                } else if (cm.getBossLog("每日赞助礼包2") > 0) {
                    cm.sendOk("该礼包今日已领取，请明日再来。");
                    cm.dispose();
                } else {
                    cm.setBossLog("每日赞助礼包2");
                    for (var i = 0; i < 每日赞助礼包2.length; i++) {
                        cm.gainItem(每日赞助礼包2[i][0], 每日赞助礼包2[i][1]);
                    }
                    cm.playerMessage(5, "恭喜你领取了今日的 " + 每日赞助礼包2金额 + "R 赞助礼包");
                    cm.worldMessage(12, cm.getC().getChannel(), "【每日赞助礼包】" + " : " + " [" + cm.getPlayer().getName() + "] 领取了每日赞助 " + 每日赞助礼包2金额 + "R 套餐！", true);
                    cm.sendOk("恭喜你领取成功~!");
                    cm.dispose();
                }
				
			} else if (selection == 2) {
                if (cm.getPlayer().getBossLog("当日累计赞助", 0) < 每日赞助礼包2金额) {
                    cm.sendOk("今日累计赞助金额不足，无法领取。");
                    cm.dispose();
                } else if (cm.getBossLog("每日赞助礼包3") > 0) {
                    cm.sendOk("该礼包今日已领取，请明日再来。");
                    cm.dispose();
                } else {
                    cm.setBossLog("每日赞助礼包3");
                    for (var i = 0; i < 每日赞助礼包3.length; i++) {
                        cm.gainItem(每日赞助礼包3[i][0], 每日赞助礼包3[i][1]);
                    }
					if (给予三倍 == true ) {
						cm.gainItem(5211060,1,10,true);
						cm.playerMessage(5, "恭喜你领取了今日的 " + 每日赞助礼包3金额 + "R 赞助礼包");
						cm.worldMessage(12, cm.getC().getChannel(), "【每日赞助礼包】" + " : " + " [" + cm.getPlayer().getName() + "] 领取了每日赞助 " + 每日赞助礼包3金额 + "R 套餐！", true);
						cm.sendOk("恭喜你领取成功~!");
						cm.dispose();
					} else {
                    cm.playerMessage(5, "恭喜你领取了今日的 " + 每日赞助礼包3金额 + "R 赞助礼包");
                    cm.worldMessage(12, cm.getC().getChannel(), "【每日赞助礼包】" + " : " + " [" + cm.getPlayer().getName() + "] 领取了每日赞助 " + 每日赞助礼包3金额 + "R 套餐！", true);
                    cm.sendOk("恭喜你领取成功~!");
                    cm.dispose();
					}
				}
			} else if (selection == 3) {
                if (cm.getPlayer().getBossLog("当日累计赞助", 0) < 每日赞助礼包4金额) {
                    cm.sendOk("今日累计赞助金额不足，无法领取。");
                    cm.dispose();
                } else if (cm.getBossLog("每日赞助礼包4") > 0) {
                    cm.sendOk("该礼包今日已领取，请明日再来。");
                    cm.dispose();
                } else {
                    cm.setBossLog("每日赞助礼包4");
                    for (var i = 0; i < 每日赞助礼包4.length; i++) {
                        cm.gainItem(每日赞助礼包4[i][0], 每日赞助礼包4[i][1]);
                    }
                    cm.playerMessage(5, "恭喜你领取了今日的 " + 每日赞助礼包4金额 + "R 赞助礼包");
                    cm.worldMessage(12, cm.getC().getChannel(), "【每日赞助礼包】" + " : " + " [" + cm.getPlayer().getName() + "] 领取了每日赞助 " + 每日赞助礼包4金额 + "R 套餐！", true);
                    cm.sendOk("恭喜你领取成功~!");
                    cm.dispose();
                }
            }
        }
    }
}

