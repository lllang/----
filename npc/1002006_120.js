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
	text += "#d�ϳ�-- #r��8000HPѪ�¡���Ҫ������Ʒ��\r\n#v1012058##d8000HPѪ�� 1��\r\n#v4001126##d#z4001126# 5000��\r\n#v4031456##d#z4031456# 100��\r\n#v4002003##d#z4002003# 50��\r\n#v4000463##d#z4000463# 200��\r\n\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ������8000HPѪ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012060,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4001126,5000) && cm.haveItem(4031456,100) &&  cm.haveItem(4002003,50) && cm.haveItem(4000463,200)){
			cm.gainItem(4001126, -5000);
			cm.gainItem(4031456, -100);
			cm.gainItem(4002003, -50);
			cm.gainItem(4000463, -200);
			
cm.gainItem(1012060,30,30,30,30,8000,8000,5,5,0,0,0,0,0,0);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�ɹ�����8000HPѪ�£���ϲ����");
			}else{
            cm.sendOk("�޷�������������#v4001126#����5000��\r\n#v4031456#����100��\r\n#v4002003#����200��\r\n#v4000463#����300��\r\n");
            cm.dispose();
			}
		}
    }
}




