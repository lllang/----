var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ��ֵ1 = 3000;
var ��� = 1000000;
var itemlist = Array(
    Array(4000016, 999, 1142490, 5, 0,0),
    Array(4000232, 999, 1142491, 10, 0, 1142490,0),
    Array(4000151, 300, 1142493, 15, 0, 1142491,0),
    Array(4000402, 300, 1142492, 20, 0, 1142493,0),
    Array(4000406, 300, 1142494, 25, 0, 1142492,0),
    Array(4000040, 100, 1142541, 30, 0, 1142494,0),
    Array(4021010, 100, 1142008, 40, 0, 1142541,0),
    Array(4021010, 0, 1142003, 40, 3000, 1142008,1000)

);

function start() {
	if (cm.getInventory(1).getItem(1) == null)  {
		            cm.sendOk("�뽫��ĳƺŷ�����װ�����ĵ�һ��");
				    cm.dispose();
	}else{
    a = -1;
    action(1, 0, 0);
}}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            var ItemID = cm.getInventory(1).getItem(1).getItemId();
            text = "                  ð�յ� - ѫ��ϵͳ\r\n";
            if (cm.getPlayer().getBossLog("ð�յ� - ѫ��ϵͳ", 1) == 0) {
                text += " - �����ռ����ߣ�#b#z" + itemlist[0][0] + "##k x #r" + itemlist[0][1] + "#k  ��ǰӵ�У�#g#c" + itemlist[0][0] + "##k ��\r\n\r\n";
                text += " - ����ѫ�����ԣ�#dȫ���� + " + itemlist[0][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[0][0]) < itemlist[0][1] ? " #b ������߲��㣬���ٽ�������" : "#r#L0#��������ռ���ϣ��Ƿ�Ҫ��ȡ������#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("ð�յ� - ѫ��ϵͳ", 1) == 1) {
                text += " - ��������ѫ�£�#b#z" + itemlist[1][5] + "##k \r\n#r       Tip���������#dװ���� - ��һ��#k\r\n\r\n";
                text += " - �����ռ����ߣ�#b#z" + itemlist[1][0] + "##k x #r" + itemlist[1][1] + "#k  ��ǰӵ�У�#g#c" + itemlist[1][0] + "##k ��\r\n\r\n";
                text += " - ����ѫ�����ԣ�#dȫ���� + " + itemlist[1][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[1][0]) < itemlist[1][1] ? " #b ������߲��㣬���ٽ�������" : "#r#L1#��������ռ���ϣ��Ƿ�Ҫ��ȡ������#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("ð�յ� - ѫ��ϵͳ", 1) == 2) {
                text += " - ��������ѫ�£�#b#z" + itemlist[2][5] + "##k \r\n#r       Tip���������#dװ���� - ��һ��#k\r\n\r\n";
                text += " - �����ռ����ߣ�#b#z" + itemlist[2][0] + "##k x #r" + itemlist[2][1] + "#k  ��ǰӵ�У�#g#c" + itemlist[2][0] + "##k ��\r\n\r\n";
                text += " - ����ѫ�����ԣ�#dȫ���� + " + itemlist[2][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[2][0]) < itemlist[2][1] ? " #b ������߲��㣬���ٽ�������" : "#r#L2#��������ռ���ϣ��Ƿ�Ҫ��ȡ������#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("ð�յ� - ѫ��ϵͳ", 1) == 3) {
                text += " - ��������ѫ�£�#b#z" + itemlist[3][5] + "##k \r\n#r       Tip���������#dװ���� - ��һ��#k\r\n\r\n";
                text += " - �����ռ����ߣ�#b#z" + itemlist[3][0] + "##k x #r" + itemlist[3][1] + "#k  ��ǰӵ�У�#g#c" + itemlist[3][0] + "##k ��\r\n\r\n";
                text += " - ����ѫ�����ԣ�#dȫ���� + " + itemlist[3][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[3][0]) < itemlist[3][1] ? " #b ������߲��㣬���ٽ�������" : "#r#L3#��������ռ���ϣ��Ƿ�Ҫ��ȡ������#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("ð�յ� - ѫ��ϵͳ", 1) == 4) {
                text += " - ��������ѫ�£�#b#z" + itemlist[4][5] + "##k \r\n#r       Tip���������#dװ���� - ��һ��#k\r\n\r\n";
                text += " - �����ռ����ߣ�#b#z" + itemlist[4][0] + "##k x #r" + itemlist[4][1] + "#k  ��ǰӵ�У�#g#c" + itemlist[4][0] + "##k ��\r\n\r\n";
                text += " - ����ѫ�����ԣ�#dȫ���� + " + itemlist[4][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[4][0]) < itemlist[4][1] ? " #b ������߲��㣬���ٽ�������" : "#r#L4#��������ռ���ϣ��Ƿ�Ҫ��ȡ������#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("ð�յ� - ѫ��ϵͳ", 1) == 5) {
                text += " - ��������ѫ�£�#b#z" + itemlist[5][5] + "##k \r\n#r       Tip���������#dװ���� - ��һ��#k\r\n\r\n";
                text += " - �����ռ����ߣ�#b#z" + itemlist[5][0] + "##k x #r" + itemlist[5][1] + "#k  ��ǰӵ�У�#g#c" + itemlist[5][0] + "##k ��\r\n\r\n";
                text += " - ����ѫ�����ԣ�#dȫ���� + " + itemlist[5][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[5][0]) < itemlist[5][1] ? " #b ������߲��㣬���ٽ�������" : "#r#L5#��������ռ���ϣ��Ƿ�Ҫ��ȡ������#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("ð�յ� - ѫ��ϵͳ", 1) == 6) {
                text += " - ��������ѫ�£�#b#z" + itemlist[6][5] + "##k \r\n#r       Tip���������#dװ���� - ��һ��#k\r\n\r\n";
                text += " - �����ռ����ߣ�#b#z" + itemlist[6][0] + "##k x #r" + itemlist[6][1] + "#k  ��ǰӵ�У�#g#c" + itemlist[6][0] + "##k ��\r\n\r\n";
                text += " - ����ѫ�����ԣ�#dȫ���� + " + itemlist[6][3] + "\r\n\r\n";
                text += "       " + (cm.itemQuantity(itemlist[6][0]) < itemlist[6][1] ? " #b ������߲��㣬���ٽ�������" : "#r#L6#��������ռ���ϣ��Ƿ�Ҫ��ȡ������#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else if (cm.getPlayer().getBossLog("ð�յ� - ѫ��ϵͳ", 1) == 7) {
                text += " - ��������ѫ�£�#b#z" + itemlist[7][5] + "##k \r\n#r       Tip���������#dװ���� - ��һ��#k\r\n\r\n";
                text += " - ��������������#b" + itemlist[7][6] + "#k �� ����\r\n\r\n";
                text += " - ����ѫ�����ԣ�#dȫ���� + " + itemlist[7][3] + " || #dHP/MP + " + itemlist[7][4] + "\r\n\r\n";
                text += "       " + (cm.getPlayer().getFame() < itemlist[7][6] ? " #b �����������㣬���ٽ�������" : "#r#L7#��������ռ���ϣ��Ƿ�Ҫ��ȡ������#k") + "\r\n\r\n";
                cm.sendYesNo(text);
            } else {
                cm.sendOk("��ĳƺ��Ѿ��ﵽ������޷�����ǿ����")
            }
        } else if (a == 1) {
            var ItemID = cm.getInventory(1).getItem(1).getItemId();
            if (cm.canHold(itemlist[selection][0]) == false) {
                cm.sendOk("���ı����ռ䲻�㣬��������ٶһ���");
                cm.dispose();
                return;
            }
            if (ItemID != itemlist[selection][5]) {
                cm.sendOk("�����һ��װ���Ƿ���ȷ");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getFame() < itemlist[selection][6]) {
                cm.sendOk("�������������Ȳ��㡣");
                cm.dispose();
                return;
            }
            if (cm.haveItem(itemlist[selection][0], itemlist[selection][1])) {
                cm.gainItem(itemlist[selection][0], -itemlist[selection][1]);
                cm.gainItem(itemlist[selection][5],-1);
                cm.gainItem(itemlist[selection][2], itemlist[selection][3], itemlist[selection][3], itemlist[selection][3], itemlist[selection][3], itemlist[selection][4], itemlist[selection][4], itemlist[selection][3], itemlist[selection][3],0,0,0,0,0,0,0);
                cm.getPlayer().setBossLog("ð�յ� - ѫ��ϵͳ", 1);
                cm.sendOk("�һ��ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�Բ���������߲��㣬��ȷ�ϡ�");
                cm.dispose();
            }
        }
    }
}