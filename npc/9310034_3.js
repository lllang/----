var itemList = new Array(
//�һ�����Ʒid �һ������� ��Ҫ��ƷID ��Ҫ��Ʒ����
	Array(4011007, 1, 1492023, 1),
	Array(4011007, 1, 1482023, 1),
	Array(4011007, 1, 1472068, 1),
	Array(4011007, 1, 1462050, 1),
	Array(4011007, 1, 1452057, 1),
	Array(4011007, 1, 1432047, 1),
    Array(4011007, 1, 1442063, 1),
	Array(4011007, 1, 1422037, 1),
    Array(4011007, 1, 1402046, 1),
	Array(4011007, 1, 1382057, 1),
	Array(4011007, 1, 1302081, 1),
    Array(4011007, 1, 1332074, 1)
);
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg +="#fUI/Basic/CheckBox/1#��ʯ�һ�����#fUI/Basic/CheckBox/1#:\r\n\r\n";
        msg += "#g------------------------------------------------------\r\n";
        for (var i = 0; i < itemList.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "ʹ��#i" + itemList[i][2] + ":# �� " + itemList[i][3] + " �һ� #i" + itemList[i][0] + ":# �� " + itemList[i][1] + "#l\r\n";
        }
        cm.sendSimple("" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(itemList[sels][0])) {
            cm.sendNext("#r�����ռ䲻��");
            cm.dispose();
            return;
        }
        if (!cm.haveItem(itemList[sels][2], itemList[sels][3])) {
			cm.sendNext("#b����û��#r#i" + itemList[sels][2] + "##t" + itemList[sels][2] + "#x" + itemList[sels][3] + "");
            cm.dispose();
            return;
        }
        cm.sendYesNo("#b�Ƿ�Ҫ�һ�#r #i" + itemList[sels][0] + "# �� " + itemList[sels][1] + "? \r\n");
    } else if (status == 2) {
        cm.gainItem(itemList[sels][2], -itemList[sels][3]);
        cm.gainItem(itemList[sels][0], itemList[sels][1]);
        cm.sendNext("#b�Ѿ��һ��� #i" + itemList[sels][0] + "# �� "+itemList[sels][1]+"");
        cm.dispose();
    } else {
        cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}