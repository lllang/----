var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ��ֵ1 = 3000;
var ��� = 1000000;
var itemlist = Array(
    Array(1302107, 50),
    Array(1332237, 50),
    Array(1382144, 50),
    Array(1402130, 50),
    Array(1422090, 50),
    Array(1432118, 50),
    Array(1452148, 50),
    Array(1462138, 20),
    Array(1472160, 20),
    Array(1482121, 20),
	Array(1492121, 20),
	
	Array(1332289, 20),
	Array(1372237, 20),
	Array(1382273, 20),
	Array(1302354, 20),
	Array(1402267, 20),
	Array(1412189, 20),
	Array(1422196, 20),
	Array(1432226, 20),
	Array(1442284, 20),
	Array(1452265, 20),
	Array(1462251, 20),
	Array(1472275, 20),
	Array(1482232, 20),
	Array(1492245, 20),
	
	Array(1492235, 20),
	Array(1482221, 20),
	Array(1462243, 20),
	Array(1452257, 20),
	Array(1442274, 20),
	Array(1432218, 20),
	Array(1382265, 20),
	Array(1372228, 20),
	Array(1332279, 20),
	Array(1312203, 20),
	Array(1412181, 20),
	Array(1322255, 20),
	Array(1422189, 20),
	Array(1302343, 20),
	Array(1402259, 20),
	Array(1472265, 20)
);

function start() {
    a = -1;
    action(1, 0, 0);
}

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
            text = "ʹ�ú�ɫ���������Զһ�ð�ձ�Ŷ����֪�����������ֶһ�ð�ձ��أ�#r(�һ�ǰ��ȷ���������ǲ��ǽ�ҳ���15E.���������¶һ�ʧ�ܵģ��Լ�����)\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#d#L" + i + "##v" + itemlist[i][0] + "##z" + itemlist[i][0] + "#1�� �һ�#v4310143# x " + itemlist[i][1] + "#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " ȷ�ϻ���װ��Ϊ��#r#i" + itemlist[selects][0] + "\r\n\r\n"
            cm.sendYesNo(txt);
        } else if (a == 2) {
            jg = 1
            var itemid = itemlist[selects][0];
            if (cm.canHold(4310143,20) == false) {
                cm.sendOk("���ı����ռ䲻�㣬��������ٶһ���");
                cm.dispose();
                return;
            }
            if (cm.haveItem(itemid,1) == false) {
                cm.sendOk("�뱣֤�㱳�����Ƿ��иõ��ߡ�");
                cm.dispose();
            } else {
                cm.gainItem(4310143, 20);
                cm.gainItem(itemid, -jg);
                cm.sendOk("���ճɹ�");
                cm.dispose();
            }
        }
    }//mode
}//f