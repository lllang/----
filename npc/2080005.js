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
            txt = "����ÿ���������һ�ֵ�10��NPCŶ���ҽп�˹��\r\n\r\n";

            if (cm.getPS() == 9){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##bľ����Ƥ��#v4001038#X1������ˮ����Ƥ��#v4001042#X1������������Ƥ��#v4001041#X1����������Ƥ��#v4001040#X1��������������Ƥ��#v4001043#X1����Ģ������Ƥ��#v4001039#X1�������ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��ľ��-�ֿ����Ա-��˹��!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4001038,1) && cm.haveItem(4001042,1) && cm.haveItem(4001041,1) && cm.haveItem(4001040,1) && cm.haveItem(4001043,1) && cm.haveItem(4001039,1)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4001038, -1);
                cm.gainItem(4001042, -1);
                cm.gainItem(4001041, -1);
				cm.gainItem(4001040, -1);
				cm.gainItem(4001043, -1);
				cm.gainItem(4001039, -1);
               // cm.gainItem(4251200, 1);
                cm.gainExp(+400000);
                cm.gainMeso(+1000000);
                cm.gainNX(+2000);
				//cm.gainItem(4002000,10);
				//cm.gainItem(4310049,1);//�����˽��
				cm.gainItem(5072000,3,1);//����
				cm.gainItem(4031456,15);//��Ҷ��
				cm.gainItem(4000487,20);//��Ӱ��
                cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������һ���������񣬻�ý��=1000000������=400000����ȯ����2000�������3������������ʮ�㰡��");
                cm.sendOk("�������һ����10�����!��ϲ��ý��=1000000������=400000�����=3500�� ��Ʊ 10�� ����3�� ��Ӱ��20����\r\n\r\n���Ѿ���������е����������������������ɣ�");
                cm.dispose();
            }else{
                cm.sendOk("ľ����Ƥ��#v4001038#X1������ˮ����Ƥ��#v4001042#X1������������Ƥ��#v4001041#X1����������Ƥ��#v4001040#X1��������������Ƥ��#v4001043#X1����Ģ������Ƥ��#v4001039#X1�������ң���");
                cm.dispose();
            }
        }
    }
}
