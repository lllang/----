function start() {
	if (cm.getMap().getAllMonstersThreadsafe().size() == 0) { //ò��צ�Ӵ����Ժ󻹻���������֣�������bug
		//cm.warpPlayer(105100300, 105100301); //��������ͼ
		//cm.warpPlayer(105100300, 105100100); //����������ͼ
		cm.warp(105100100,0);//��������ͼ�м�
		cm.dispose();
	} else {
		cm.sendYesNo("��ȷ��Ҫ�뿪�����ͼ���");
	}
}

function action(mode, type, selection) {
    if (mode == 1) {
		//cm.warpPlayer(105100300, 105100100);
		cm.warp(105100100,0);//��������ͼ�м�
    }
    cm.dispose();
}