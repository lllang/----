status = -1;
//�ո����� �㲻�� �����Ҿ͸���д���׽ű������� �Ҹ����˵�� 
var itemList = new Array(//��������Ҫ�Ӵ����� ���� Array����ϵ�е�����
			/*Array(1032027,800, 1, 1), //��ˮ������
			������һ�Ÿ�ʽ��ž�������   Array(��ƷID,����,����,����),//��Ʒ����
			��Ÿ�ʽ��������Ȼ���Ҹ����˵�� ���ʺͲ���������
			�������ֵ����ô��߻�����ô����أ��� ����ȫ�����е���Ʒ�ı��ʶ�������Ȼ��������������ܱ��ʾ��� �����Ʒ�ı�����
			�����ܼ� 0���ǳ��н�Ʒ�󲻷��������� 1�����н�֮��Ҫ��һ������˵ ˭˭˭�н���*/
			//���
			
            Array(4310080,1, 1, 1),//ȼ�յĻ��浶
			
			Array(4001126,500, 1, 1),//������˫�����⸫
			Array(4001126,500, 2, 1),//�����ɸ���ϴ�
			Array(4001126,500, 3, 1),//�����ɴ���ʿ�｣
			Array(4001126,500, 4, 1),//�����ɶ�������
			Array(4001126,500, 5, 1),//������ħ����ȡ��
			Array(4001126,500, 6, 1),//������ħ��֮��
			Array(4001126,500, 7, 1),//���������֮��
			Array(4001126,500, 8, 1),//������ս�����⸫
			Array(4001126,500, 9, 1),//���������紸
			Array(4001126,500, 10, 1)//�����ɹ���ǹ
			
			
			/*
			
        �������Ҫ  ������Array�Ľ������� ��ס���һ�ŵ� Array����������û�ж��ŵ�  ��������ҽ�ͼ����QQ��ȥ 
			*/

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
		selStr = "\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#i" + itemList[i][0] + ":#";
            }
        if (cm.haveItem(2550002, 100)) {
            cm.sendYesNo("ֻҪ����#v2550002#X100���Ϳ���������Ի��������Ʒ��99%���\r\n\#b�Ƿ����� #r100#r��#b#v2550002#��100����?"+selStr);
        } else {
            cm.sendOk("��ȷ�����Ƿ�ӵ���㹻��#v2550002#X100���Ϳ���������������Ʒ��99%���\r\n\#b�Ƿ����� #r100#r��#b#v2550002#��100����\n"+selStr);
            cm.safeDispose();
        }
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
			for (var i = 0; i<100; i++){
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity );  //item = cm.gainGachaponItem(itemId, quantity, "", "");  ԭ���� 
            if (item != -1) {
					cm.gainItem(2550002, -1);
				if (itemId==1442029){
					cm.gainItem(1442029,-1); //�������ѫ��
				    cm.gainItem(1442029,0,0,0,0,0,0,175,0,0,0,0,0,0,0); //�������ѫ��
				}
                //cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
			}
            status = -1;
        } else {
            cm.sendOk("�������������ʲô��û���õ���\r\n(����˰�ο������ѩ�˷��ϵ�����ʯ��)");
           cm.gainItem(2550002, -1);
            cm.gainItem(4001322, 1);
            status = -1;
        }
    }
}