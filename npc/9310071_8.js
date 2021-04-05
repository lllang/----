var 道具1 = 3991026;
var 道具2 = 3991027;
var 道具3 = 3991028;
var 道具4 = 3991029;

var 时间;
var 记录时间;
var 读取记录时间;
var 清空时间;
var 已过时间;
var text;

var 挑战Log = "挑战系统";
var 元宝Log = "赞助系统";
var 转生Log = "转生";
var 所需元宝 = 300;
var 规定时间 = 72;// 3天
var 规定转生次数 = 1;
var 奖励元宝 = 1000;
var ii = Packages.server.MapleItemInformationProvider.getInstance();
var 是否为神秘, 装备代码, 装备代码1, 装备代码2, 代码;
var 力量, 敏捷, itemFlag, 运气, 智力, 生命值, 法力值, 物理攻击力, 魔法攻击力, 物理防御力, 魔法防御力, 回避率, 命中率, 跳跃力, 移动速度, itemsj;
var 随机值 = Math.floor(Math.random() * 100);;
var status = 0;

function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("请将“#r装备栏 - 第一格#k”放入#b 永恒系列 #k装备。");
		cm.dispose();
	} else {
		status = -1;
		action(1, 0, 0);
	}
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
			时间 = parseInt(new Date().getTime() / 1000);//取整至秒
			已过时间 = parseInt((时间 - cm.getPlayer().getBossLog("记录挑战时间", 1)) / 3600); //取整至1小时
			倒计时 = 时间 - cm.getPlayer().getBossLog("记录挑战时间", 1);//分钟
			text = "\r\n★ 挑战系统 ★\r\n";
			text += "说明：\r\n";
			text += "说明：\r\n";
			text += "说明：\r\n";
			if (cm.getPlayer().getBossLog(挑战Log, 1) == 0) {
				text += "#L0#参与挑战#l\r\n";
				cm.sendYesNo(text);
			} else if (已过时间 < 规定时间) {
				text += "当前剩余挑战时间：" + (规定时间 - 已过时间) + " 小时\r\n";
				text += "还未完成转生次数：" + (规定转生次数 - (cm.getPlayer().getBossLog(转生Log, 1) - cm.getPlayer().getBossLog("记录转生次数", 1))) + " 次\r\n";
				text += "#L1#领取奖励#l\r\n";
				cm.sendYesNo(text);
			} else {
				cm.getPlayer().setBossLog("记录转生次数", 1, -cm.getPlayer().getBossLog("记录转生次数", 1));//清空转生次数
				cm.getPlayer().setBossLog("记录挑战时间", 1, -cm.getPlayer().getBossLog("记录挑战时间", 1));//清空记录时间
				cm.getPlayer().setBossLog(挑战Log, 1, -cm.getPlayer().getBossLog(挑战Log, 1));//清空挑战
				cm.sendOk("时间以超过，任务挑战失败");
				cm.dispose();
			}
		} else if (status == 1) {
			if (selection == 0) {
				if (cm.getPlayer().getBossLog(挑战Log, 1) > 0) {
					cm.sendOk("挑战正在进行中，无法重复领取");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog(元宝Log, 1) < 所需元宝) {
					cm.sendOk("元宝数量不足，请确认");
					cm.dispose();
				} else {
					cm.getPlayer().setAccountLog(元宝Log, 1, -所需元宝);//减少所需元宝
					cm.getPlayer().setBossLog(挑战Log, 1, 1)
					cm.getPlayer().setBossLog("记录挑战时间", 1, 时间);
					cm.getPlayer().setBossLog("记录转生次数", 1, cm.getPlayer().getBossLog(转生Log, 1));//记录转生次数
					cm.sendOk("挑战开始，请在规定时间内点击NPC领取奖励，过时后果自负");
					cm.dispose();
				}

			} else if (selection == 1) {
				if (cm.getPlayer().getBossLog(挑战Log, 1) == 0) {
					cm.sendOk("请先开始挑战。");
					cm.dispose();
				} else if ((cm.getPlayer().getBossLog(转生Log, 1) - cm.getPlayer().getBossLog("记录转生次数", 1)) < 规定转生次数) {
					cm.sendOk("未完成要求，再接再厉");
					cm.dispose();
				} else {
					cm.getPlayer().setBossLog("记录转生次数", 1, -cm.getPlayer().getBossLog("记录转生次数", 1));//清空转生次数
					cm.getPlayer().setBossLog("记录挑战时间", 1, -cm.getPlayer().getBossLog("记录挑战时间", 1));//清空记录时间
					cm.getPlayer().setBossLog(挑战Log, 1, -cm.getPlayer().getBossLog(挑战Log, 1));//清空挑战
					cm.getPlayer().setAccountLog(元宝Log, 1, 奖励元宝);
					cm.sendOk("挑战完成");
					cm.dispose();
				}
			}
		}

	}
}
