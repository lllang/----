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
            txt = "����ÿ�����̵�9��NPCŶ���ҽ����\r\n\r\n";

            if (cm.getPS() == 8){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ���������#v4000095#X50�������տ���#v4000168#X50�������ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��ľ��-�ֿ����Ա-��˹��!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000095,50) && cm.haveItem(4000168,50)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000095, -50);
                cm.gainItem(4000168, -50);
cm.gainExp(+150000);
cm.gainMeso(+200000);
cm.gainNX(+200);
cm.����(2, "[" + cm.getPlayer().getName() + "]�ɹ�������������9�֣���õ��200�㽱����");
                cm.sendOk("���̵�9�����!��ϲ��ý��=200000������=150000�����=200��\r\n\r\nȻ����ȥ��..��ľ��-�ֿ����Ա-��˹��.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�50����������#v4000095#��50�����տ���#v4000168#������!");
                cm.dispose();
            }
        }
    }
}
