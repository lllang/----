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
            txt = "����ÿ�����̵�6��NPCŶ���ҽ�������\r\n\r\n";

            if (cm.getPS() == 5){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�50���������֮β#v4000007#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.���֮��-�ֿ����Ա-С��!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000007,50)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000007, -50);
                cm.gainExp(+80000);
                cm.gainMeso(+100000);
                cm.gainD(+200);
                cm.sendOk("���̵�6�����!��ϲ��ý��=100000������=80000������200��\r\n\r\nȻ����ȥ��..���֮��-�ֿ����Ա-С��.������һ����");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�50���������֮β#v4000007#������!");
                cm.dispose();
            }
        }
    }
}