var status = -1;
var keys = Array(8, 9, 10, 11, 12, 13);
var keynames = Array("#fUI/UIWindow/KeyConfig/key/8#", "#fUI/UIWindow/KeyConfig/key/9#", "#fUI/UIWindow/KeyConfig/key/10#", "#fUI/UIWindow/KeyConfig/key/11#", "#fUI/UIWindow/KeyConfig/key/12#", "#fUI/UIWindow/KeyConfig/key/13#"); //just as reference
var skills = Array(4111006,2301001,2311003,1121002, 4221006, 3121002, 4111002,1311006);//������,Ӱ����,���۾���,��ʥ��,����Х
var skillsnames = Array("��������#r͵ѧ����#k��", "˲�ƣ�#r͵ѧ����#k��", "��ʥ����#r͵ѧ����#k��", "����̩ɽ��#r͵ѧ����#k��", "������#r�޵���CDʱ��#k��", "���۾�����#r͵ѧ����#k��", "Ӱ����#r��ս��Ч#k��","��������#rȫ������#k��");
var skillsp = Array(1,1,1, 2,2, 4, 10,1);//ѧϰ������������
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
		cm.sendSimple("���� #v4031868##z4031868#*1�����������������û�ö����ְҵ����Ŷ~");
	} else if (status == 1) {
		sel = selection;
		var selStr = "��ѡ��������Ҫ�ļ��ܣ�\r\n\r\n";
		for (var i = 0; i < skills.length; i++) {
			selStr += "#L" + i + "##s" + skills[i] + "#" + skillsnames[i] + " ��Ҫ #e#v"+Itemid+"#x" + skillsp[i] + "#n ��#n#l\r\n";
		}
		cm.sendSimple(selStr + "#k");

	} else if (status == 2) {

		itt = selection;
		var selStr = "��ѡ�������õļ���λ�ã�#b\r\n";
		for (var i = 0; i < keys.length; i++) {
			selStr += "#L" + i + "#" + keynames[i] + "#l\r\n";
		}
		cm.sendSimple(selStr + "#k");

	} else if (status == 3) {
		if (cm.haveItem(Itemid,skillsp[itt]) ==false) {
			cm.sendOk("��û��ӵ�� " + skillsp[itt] + "��#v"+Itemid+"#���޷�ѧϰ.");
			cm.dispose();
		} else {
			cm.teachSkill(skills[itt], 30, 30);
			cm.gainItem(Itemid,-skillsp[itt]);
			cm.getPlayer().changeKeybinding(keys[selection], 1, skills[itt]);
			cm.sendOk("ѧϰ�ɹ���");
			cm.����(1, "��ң�[" + cm.getName() + "]�ɹ�͵ѧ��һ�����ܣ�����������Ч");
			cm.dispose();
		}
	}
}