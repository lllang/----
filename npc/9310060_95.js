status = -1;
/*

�Զ������ݣ�Array(��ƷID , �齱����, ����, �Ƿ�������)�� 
����������0��û�����ȣ�����1�������ȡ�
�齱�������Ϊ100��������׳�����СΪ1���򼸺�����
���û��100�ĵ��ߣ����и��ʳ�գ�

     �ű���д RCMS-��� Q�ţ�1098393331
�нӽű���д - WZ�����޸� - �����ƹ� - �����淨

*/

var itemList = Array(

	Array(4442001, 50, 1, 1),
	Array(2340000, 100, 1, 1),
	//Array(2450000, 100, 1, 1),
	//Array(3994731, 30, 1, 1),
	Array(2531006, 20, 1, 1),
	Array(2610001, 1, 1, 1),
	Array(4442001, 1, 1, 1),
	Array(4310148, 60, 1, 1),
	Array(2000005, 70, 100, 1)//�˴����ɼӶ���
	
);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�ټ��ð��͡�");
			cm.dispose();
		}
		status--;
	}
	if (status == 0) {
		if (cm.getPlayer().getBossLog("װ���ϳɳɹ�",1) >= 1) {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			cm.sendYesNo("��ϲ��ϳɳɹ���������ȡ��ĺϳɽ����ɣ�\r\n��ȡ�����б��ڵ���Ʒ��" + str1);
		} else {
			var str1 = "\r\n";
			for (var i = 0; i < itemList.length; i++) {
				str1 += "#v" + itemList[i][0] + "#";
			}
			cm.sendOk("������ȡ��ĺϳɽ����ɣ�\r\n��ȡ�����б��ڵ���Ʒ��" + str1);
			cm.dispose();
		}
	} else if (status == 1) {
		var chance = Math.floor(Math.random() * 100);
		var finalitem = Array();
		for (var i = 0; i < itemList.length; i++) {
			if (itemList[i][1] >= chance) {
				finalitem.push(itemList[i]);
			}
		}
		if (finalitem.length != 0) {
			var item;
			var random = new java.util.Random();
			var finalchance = random.nextInt(finalitem.length);
			var itemId = finalitem[finalchance][0];
			var quantity = finalitem[finalchance][2];
			var notice = finalitem[finalchance][3];
			item = cm.gainGachaponItem(itemId, quantity, "����ϵͳ", notice);
			if (item != -1) {
				cm.getPlayer().setBossLog("װ���ϳɳɹ�",1,-1);
				cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
			} else {
				cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
			}
			cm.safeDispose();
		} else {
			cm.getPlayer().setBossLog("װ���ϳɳɹ�",1,-1);
			cm.safeDispose();
		}
	}
}

