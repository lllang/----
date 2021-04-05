var status = -1;
var keys = Array(8, 9, 10, 11, 12, 13);
var keynames = Array("#fUI/UIWindow/KeyConfig/key/8#", "#fUI/UIWindow/KeyConfig/key/9#", "#fUI/UIWindow/KeyConfig/key/10#", "#fUI/UIWindow/KeyConfig/key/11#", "#fUI/UIWindow/KeyConfig/key/12#", "#fUI/UIWindow/KeyConfig/key/13#"); //just as reference
var skills = Array(4111006,2301001,2311003,1121002, 4221006, 3121002, 4111002,1311006);//二段跳,影分身,火眼晶晶,神圣祈祷,龙咆啸
var skillsnames = Array("二段跳（#r偷学技能#k）", "瞬移（#r偷学技能#k）", "神圣祈祷（#r偷学技能#k）", "稳如泰山（#r偷学技能#k）", "烟雾弹（#r无敌有CD时间#k）", "火眼晶晶（#r偷学技能#k）", "影分身（#r近战无效#k）","龙咆哮（#r全屏技能#k）");
var skillsp = Array(1,1,1, 2,2, 4, 10,1);//学习技能所需数量
var Itemid = 4031868;


function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode != 1) {
		cm.dispose();
		return;
	}
	status++;
	if (status == 0) {
		cm.sendSimple("消耗 #v4031868##z4031868#*1，可以在我这里永久获得额外的职业技能哦~");
	} else if (status == 1) {
		sel = selection;
		var selStr = "请选择你所需要的技能：\r\n\r\n";
		for (var i = 0; i < skills.length; i++) {
			selStr += "#L" + i + "##s" + skills[i] + "#" + skillsnames[i] + " 需要 #e#v"+Itemid+"#x" + skillsp[i] + "#n 个#n#l\r\n";
		}
		cm.sendSimple(selStr + "#k");

	} else if (status == 2) {

		itt = selection;
		var selStr = "请选择所放置的技能位置：#b\r\n";
		for (var i = 0; i < keys.length; i++) {
			selStr += "#L" + i + "#" + keynames[i] + "#l\r\n";
		}
		cm.sendSimple(selStr + "#k");

	} else if (status == 3) {
		if (cm.haveItem(Itemid,skillsp[itt]) ==false) {
			cm.sendOk("你没有拥有 " + skillsp[itt] + "个#v"+Itemid+"#，无法学习.");
			cm.dispose();
		} else {
			cm.teachSkill(skills[itt], 30, 30);
			cm.gainItem(Itemid,-skillsp[itt]);
			cm.getPlayer().changeKeybinding(keys[selection], 1, skills[itt]);
			cm.sendOk("学习成功。");
			cm.喇叭(1, "玩家：[" + cm.getName() + "]成功偷学到一个技能，重新上线生效");
			cm.dispose();
		}
	}
}