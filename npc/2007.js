var ���� = "#fUI/StatusBar/BtChat/normal/0#";
var Name = "����ð�յ�";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t  #e��ӭ����#r"+Name+" #k!#n\r\n"
            text += "#b�ر�ע�⣺�����뿴Ⱥ�ļ�������ָ��˵�����������Ҫ\r\n\r\n"//3
			text += "#r1.���������࣬���ڸ��»���ʺ�������ˣ#l\r\n\r\n"//3
            text += "#r2.������ֹʹ����ң������ʺŻ��ɫ�ͻᱻ���÷���������±�������ע�⣡#l\r\n\r\n"//3
            text += "#r3.��������Ѿ����ŵ����ı�������ע����գ�#l\r\n\r\n"//3
            text += "#r4.������ֵ������1RMB=1��ֵ��=1000��ȯ#l\r\n\r\n"//3
            text += "#r5.�޸�����+����+���ֹ��ܣ����Ӵ�����ɫ���ܣ�PKϵͳ��ȫ��Ľ���#l\r\n\r\n"//3
          //  text += "#r6.�����˺�ֻ��������Ϸ���溰����Ⱥ�﷢������Ϣ��һ��TȺ���ҷ���˺ţ���˵��������#l\r\n\r\n"//3
            //text += "#r6.��ӭ�������ǵ�"+Name+"079Ⱥһ�����ۣ�318260236#l\r\n\r\n"//3
            cm.sendOk(text);
			cm.����(1,"��ӭ����[" + cm.getPlayer().getName() + "]�������ף�ذɣ�����~����һ�����˼�����"+Name+"~��");
            //cm.����(3,"��ӭ[" + cm.getPlayer().getName() + "]����"+Name+"~���������һ��ף�ذɣ�����");
		    cm.dispose();
		}
    }
}


