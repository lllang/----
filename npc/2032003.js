/* ά��
��2����
 */
 
var status;
 
function start() {
    status = -1;
    action(1, 0, 0);
}
 
function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	cm.sendNext("��ϲ��������ð������ұ������һ�㽱������Ϊ���ۡ�");
    }
    else if (status == 1) {
	cm.sendNextPrev("���������Ҹ���Ľ���#b#t4031062##k��");
    }
    else if (status == 2) {
	cm.gainItem(2022428,1);
	cm.gainItem(4001126,100);
	cm.����(1, "[" + cm.getPlayer().getName() + "]ͨ����������������ӷ�Ҷ*100����~");
	cm.getPlayer().setAccountLog("��ɽ����",0);
	cm.warp(211042300);
	if (cm.getQuestStatus(100202) != 2) {
	    cm.startQuest(100202);
	    cm.completeQuest(100202);
	}
	cm.dispose();
    }
}