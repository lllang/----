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
                
   cm.sendOk("��лʹ��.");
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
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "#d�ϳ�-- #r��3000HPѪ�¡���Ҫ������Ʒ��\r\n#v4001126##d#z4001126# 2000��\r\n#v4031456##d#z4031456# 30��\r\n#v4002001##d#z4002001# 50��\r\n#v4000463##d#z4000463# 50��\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ������3000HPѪ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012058,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4001126,2000) && cm.haveItem(4031456,30) && cm.haveItem(4002001,50) && cm.haveItem(4000463,50)){
			cm.gainItem(4001126, -2000);
			cm.gainItem(4031456, -30);
			cm.gainItem(4002001, -50);
			cm.gainItem(4000463, -50);
cm.gainItem(1012058,10,10,10,10,3000,3000,0,0,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ɹ�����3000HPѪ�£���ϲ����");
			}else{
             cm.sendOk("�޷�������������#v4001126#����2000��\r\n#v4031456#����30��\r\n#v4002003#����50��\r\n#v4000463#����50��\r\n");
            cm.dispose();
			}
		}
    }
}




