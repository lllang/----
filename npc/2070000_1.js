var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var itemlist = Array(
    Array(2041332, 30000)
    //Array(4310028, 8888),
    //Array(4250002, 8888),
    //Array(4310174, 8888),
    //Array(4310196, 12000),
    //Array(4251202, 24000),
    //Array(4251202, 10000),
    //Array(4000464, 10000)
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
            text = "��Ҫ�ö����һ�ʲô��Ʒ�أ�\r\n";
            text += "  #e#d- Ŀǰӵ�ж���������#r#e " + cm.getPlayer().getBeans() + " #n #k\r\n";
            for (var i = 0; i < itemlist.length; i++) {
                text += "#L" + i + "##v" + itemlist[i][0] + "#(��Ҫ #r" + itemlist[i][1] + "#k �� ������)#l\r\n\r\n";
                if (i != 0 && (i + 1) % 99 == 0) {
                    text += "\r\n";
                }
            }
            cm.sendSimple(text);
        } else if (a == 1) {
            selects = selection;
            var txt = " - ��ǰ�һ����ߣ�#r#i" + itemlist[selects][0] + "\r\n\r\n"
            txt += " - ��ǰ���ߵ��ۣ�#r" + itemlist[selects][1] + "#k ������\r\n\r\n"
            txt += " - ����������һ���ֵ��\r\n\r\n"
            cm.sendGetNumber(txt, 1, 1, 100);
        } else if (a == 2) {
            jg = selection
            var itemid = itemlist[selects][0];
            if (cm.canHold(itemid,jg) == false) {
                cm.sendOk("���ı����ռ䲻�㣬��������ٶһ���");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getBeans() <= itemlist[selects][1] * jg) {
                cm.sendOk("�뱣֤�㱳�������㹻�Ķ�����");
                cm.dispose();
            } else {
                cm.getPlayer().setBeans(cm.getPlayer().getBeans()-itemlist[selects][1] * jg);
                cm.gainItem(itemlist[selects][0], jg);
                cm.getPlayer().fakeRelog();
                cm.sendOk("��ϲ�㻨����#r " + itemlist[selects][1] * jg + " #k����������#v" + itemlist[selects][0] + "# * #r" + jg + "#k����");
                cm.dispose();
        }
    }//mode
}
}