
var status = 0;
var zones = 0;
//4000425
var ItemId = Array(
	Array(11,"��Ҫ����#l\r\n"),
    Array(12,"���ɴ����һ�����װ��#l\r\n")/*,
    Array(13,"��ɵڶ�������#l\r\n"),
	Array(14,"��ɵ���������#l\r\n")/*,
	//Array(84,"��Ʒʱװ_����#l")*/
        );
		

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			var ת�� = cm.getPlayer().getBossLog("ת��",1);
            StringS = "#r#e�����Ǳ�������ϵͳ��\r\n\r\n";
			StringS +="#b��ǰת��������"+(ת��)+"\r\n";
            for (var i = 0; i < ItemId.length; i++) {
                StringS +=     "#L" + i + "##d"+ItemId[i][1]+"\r\n";
            }
            cm.sendSimple(StringS);
            zones == 0;

        } else if (status == 1) {
			//���治���㣬���Բ���ʾ��
            if (zones == 1) {
                cm.sendNext("�����Ұ�����ʲô�أ�", 2);
                zones = 2;
            } else if (zones == 0) {
                cm.openNpc(9310019,ItemId[selection][0])
               
    }
}	}}