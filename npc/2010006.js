//importPackage(Packages.client);
var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "����ÿ�����̵�7��NPCŶ���ҽ�С��\r\n\r\n";

            if (cm.getPS() == 6){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ��ǹ⾫����ǿ�#v4000059#X20�����¹⾫����¿�#v4000060#X20���չ⾫����տ�#v4000061#X20�������ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.����ѩ��-�ֿ����Ա-������!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000059,20) && cm.haveItem(4000060,20) && cm.haveItem(4000061,20)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000059, -20);
                cm.gainItem(4000060, -20);
                cm.gainItem(4000061, -20);
cm.gainExp(+100000);
cm.gainMeso(+150000);
cm.gainD(+300);
                cm.sendOk("���̵�7�����!��ϲ��ý��=150000������=100000������300��\r\n\r\nȻ����ȥ��..����ѩ��-�ֿ����Ա-������.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�20���ǹ⾫����ǿ�#v4000059#��20���¹⾫����¿�#v4000060#��20���չ⾫����տ�#v4000061#��������!");
                cm.dispose();
            }
        }
    }
}
