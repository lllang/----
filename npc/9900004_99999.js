//importPackage(net.sf.odinms.client);
var status = 0;
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var �����Ʒ = "#v1302000#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


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

	
	    var textz = "\r\n�����죡 \r\n\r\n";

        textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		
		textz += "#d#L0##r��ȡ100Ԫ��ֵ���(��Ҫ100��ֵ����)#k#v4000424#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

		textz += "#d#L1##r��ȡ300Ԫ��ֵ���(��Ҫ300��ֵ����)#k#v4000423#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

		textz += "#d#L2##r��ȡ500Ԫ��ֵ���(��Ҫ500��ֵ����)#k#v4031353#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

		textz += "#d#L3##r��ȡ800Ԫ��ֵ���(��Ҫ800��ֵ����)#k#v4031777#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		
		textz += "#d#L4##r��ȡ1000Ԫ��ֵ���(��Ҫ1000��ֵ����)#k#v4031983#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

		textz += "#d#L5##r��ȡ3000Ԫ��ֵ���(��Ҫ3000��ֵ����)#k#v4031427#\r\n";
		
		textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		
		//textz += "#d#L6##r��ȡ5000Ԫ��ֵ���(��Ҫ5000��ֵ����)#k#v5680053#\r\n";
		
		//textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"

                cm.sendSimple (textz);  

			
	}else if (status == 1) {

	if (selection == 0) {

            if(cm.getPlayer().getjf()>=100){//��ɫ�����
				cm.dispose();
				cm.gainjf(-100);
              //  cm.gainNX(10000);//��ȯ
				cm.gainMeso(2000000);//���
				//cm.gainItem(4001126,1000);//��Ҷ
				cm.gainItem(4310030,10);//�齱��
				cm.gainItem(4000487,10);//��Ӱ��
				cm.gainItem(1142296,10,10,10,10,100,100,10,10,10,10,10,10,10,10);//����������
				//cm.gainItem(1082149,0,0,0,0,0,0,21,21,0,0,0,0,0,0);//��������
				cm.gainItem(2049116,1);//ǿ��
				cm.gainItem(2340000,1);//ף��
				cm.gainItem(5072000,5,1);//����
				cm.gainvip(+1);//�ƹ��ȼ�
				//cm.gainItem(4000424,-1);
				cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ�Ĳ��Ǹõ����~.");
                cm.dispose();
	    


}else if (selection == 1) {

            if(cm.getPlayer().getjf()>=300){//��ɫ�����
			cm.gainjf(-300);
				cm.gainMeso(5000000);//���

				cm.gainItem(1142559,20,20,20,20,200,200,20,20,20,20,20,20,10,10);//�����ļ�
				cm.gainItem(1122017,10,10,10,10,0,0,10,10,0,0,0,0,0,0);//�����׹
				cm.gainItem(1112404,10,10,10,10,0,0,0,0,0,0,0,0,0,0);//�����ָ
				cm.gainItem(4310030,20);//�齱��
				cm.gainItem(4000487,20);//��Ӱ��
			
				cm.gainItem(2049116,3);//ǿ��
				cm.gainItem(2340000,3);//ף��
				cm.gainItem(5072000,10,1);//����
				cm.gainvip(+2);//�ƹ��ȼ�
				//cm.gainItem(4000423,-1);
				cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ�Ĳ��Ǹõ����~.");
                cm.dispose();
	    

}else if (selection == 2) {

            if(cm.getPlayer().getjf()>=500){//���ֺ�
			cm.gainjf(-500);
              //  cm.gainNX(50000);//��ȯ
				cm.gainMeso(8000000);//���
				cm.gainItem(4310030,50);//�齱��
				//cm.gainItem(4001126,3000);//��Ҷ
				//cm.gainItem(4000313,600);//�ƽ��Ҷ
				//cm.gainItem(4000463,200);//�����
				cm.gainItem(1112404,20,20,20,20,0,0,0,0,0,0,0,0,0,0);//�����ָ
				cm.gainItem(1142265,40,40,40,40,400,400,40,40,40,40,40,40,10,10);//�������ѫ��
				cm.gainItem(1122017,15,15,15,15,0,0,15,15,0,0,0,0,0,0);//�����׹
				cm.gainItem(4000487,50);//��Ӱ��
		
				cm.gainItem(2049116,10);//ǿ��
				cm.gainItem(2340000,10);//ף��
				cm.gainItem(5072000,30,1);//����
				cm.gainvip(+3);//�ƹ��ȼ�
				//cm.gainItem(4031353,-1);
				cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ�Ĳ��Ǹõ����~.");
                cm.dispose();

}else if (selection == 3){

            if(cm.getPlayer().getjf()>=800){//����Ҷ������
				cm.dispose();
				cm.gainjf(-800);
               // cm.gainNX(100000);//��ȯ
				cm.gainMeso(10000000)//���
				cm.gainItem(4310030,100);//�齱��
				//cm.gainItem(4001126,5000);//��Ҷ
				cm.gainItem(4000313,200);//�ƽ��Ҷ
				//cm.gainItem(4000463,500);//�����
				cm.gainItem(1112404,30,30,30,30,0,0,0,0,0,0,0,0,0,0);//�����ָ
				cm.gainItem(1142558,60,60,60,60,800,800,80,60,60,60,60,60,20,20);//���糬��
				cm.gainItem(1122017,20,20,20,20,0,0,20,20,0,0,0,0,0,0);//�����׹
			    cm.gainItem(4000487,80);//��Ӱ��
				cm.gainItem(2049116,20);//ǿ��
				cm.gainItem(2340000,20);//ף��
				cm.gainItem(5072000,50,1);//����
				cm.gainvip(+5);//�ƹ��ȼ�
			//	cm.gainItem(4031777,-1);
				cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ�Ĳ��Ǹõ����~.");
                cm.dispose();

}else if (selection == 4){

            if(cm.getPlayer().getjf()>=1000){//���������
				cm.dispose();
				cm.gainjf(-1000);
                cm.gainMeso(15000000)//���
				cm.gainItem(4310030,150);//�齱��
                cm.gainItem(1112404,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�����ָ
				cm.gainItem(4000313,400);//�ƽ��Ҷ
				cm.gainItem(1142515,90,90,90,90,1500,1500,90,90,90,90,90,90,20,20);//����籩֮��
				cm.gainItem(1122017,25,25,25,25,0,0,25,25,0,0,0,0,0,0);//�����׹����
				cm.gainItem(4000487,110);//��Ӱ��
				cm.gainItem(2049116,30);//ǿ��
				cm.gainItem(2340000,30);//ף��
				cm.gainItem(5072000,80,1);//����
				cm.gainvip(+30);//�ƹ��ȼ�
				//cm.gainItem(4031983,-1);
				cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ�Ĳ��Ǹõ����~.");
                cm.dispose();

				}else if (selection == 5){

            if(cm.getPlayer().getjf()>=3000){ //��������Ʒ��
				cm.dispose();
				cm.gainjf(-3000);
                cm.gainMeso(50000000)//���
				cm.gainItem(4310030,300);//�齱��
				cm.gainItem(4000313,2000);//�ƽ��Ҷ
				cm.gainItem(1112404,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�����ָ
				cm.gainItem(1142594,150,150,150,150,2500,2500,150,150,150,150,150,150,30,30);//����籩֮��
				cm.gainItem(1122017,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�����׹����
				cm.gainItem(4000487,200);//��Ӱ��
				cm.gainItem(2049116,100);//ǿ��
				cm.gainItem(2340000,100);//ף��
				cm.gainItem(5072000,200,1);//����
				cm.sendOk("��ϲ�㣬�����˳�ֵ�����! .");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ�Ĳ��Ǹõ����~.");
                cm.dispose();
				
}else if (selection == 6){

            if(cm.getPlayer().getjf()>=5000){//����ʱ�̽�ɫ����
				cm.dispose();
                cm.gainjf(-5000);
                cm.gainMeso(100000000)//���
				cm.gainItem(4310030,2000);//�齱��
				cm.gainItem(4000313,3000);//�ƽ��Ҷ
				cm.gainItem(1112404,200,200,200,200,0,0,0,0,0,0,0,0,0,0);//�����ָ
				cm.gainItem(1142569,400,400,400,400,7500,7500,400,400,400,400,400,400,40,40);//����籩֮��
				cm.gainItem(1122017,400,400,400,400,0,0,400,400,0,0,0,0,0,0);//�����׹����
				cm.gainItem(4000487,400);//��Ӱ��
				cm.gainItem(2049116,500);//ǿ��
				cm.gainItem(2340000,500);//ף��
				cm.gainItem(5072000,400,1);//����
				cm.sendOk("��ϲ�㣬������5000Ԫ�����! .");
				cm.dispose();
            }else
                cm.sendOk("��Ǹ������δ��ֵ�����߳�ֵ�Ĳ��Ǹõ����~.");
                cm.dispose();

}else if (selection == 6){
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest7') < 1) {
		cm.gainItem(4001085,-1);
		cm.setBossLog('PlayQuest7');
		cm.gainItem(4001126,2500);
		cm.sendOk("�������,������½���:\r\n#2500�ŷ�Ҷ!");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 7){
	if (cm.haveItem(4001083,1) && cm.getBossLog('PlayQuest8') < 1) {
		cm.gainItem(4001083,-1);
		cm.setBossLog('PlayQuest8');
		cm.gainItem(4001126,5000);
		cm.sendOk("�������,������½���:\r\n5000�ŷ�Ҷ");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 8){
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest9') < 1) {
		cm.gainItem(4001085,-1);
		cm.setBossLog('PlayQuest9');
		cm.gainNX(1000);
		cm.sendOk("�������,������½���:\r\n1000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 9){
	if (cm.haveItem(4001084,1) && cm.getBossLog('PlayQuest10') < 1) {
		cm.gainItem(4001084,-1);
		cm.setBossLog('PlayQuest10');
		cm.gainNX(1000);
		cm.sendOk("�������,������½���:\r\n1000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();

}else if (selection == 10){
	if (cm.haveItem(4001083,1) && cm.getBossLog('PlayQuest11') < 1) {
		cm.gainItem(4001083,-1);
		cm.setBossLog('PlayQuest11');
		cm.gainNX(2000);
		cm.sendOk("�������,������½���:\r\n2000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();



}else if (selection == 11){
	if (cm.haveItem(4001126,1000) && cm.getBossLog('PlayQuest14') < 1) {
		cm.gainItem(4001126,-1000);
		cm.setBossLog('PlayQuest14');
		cm.gainNX(1000);
		cm.sendOk("�������,������½���:\r\n1000���");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ�����һ��)#k");
		cm.dispose();


}
}
}
}
