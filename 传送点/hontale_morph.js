function enter(pi) {
   // pi.openNpc(2081005);
	
	if (pi.getParty() == true) {
		pi.playerMessage(5, "ֻ�ܵ��˽��룬�޷���ӡ�");
	return false;
	}
	if (pi.getPlayer().getLevel() < 160) {
		pi.playerMessage(5, "ֻ��160�����ϲſ�������ս��");
	return false;
	}
	if (pi.getBossLog("��ս��������") > 1) {
		pi.playerMessage(5, "������ս�����Ѵﵽ���ޣ������_��NPC�������һ����ս������");
	return false;
	}
        pi.warp(240050400,0);
		
}