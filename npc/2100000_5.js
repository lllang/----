var sele;
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

            cm.sendOk("��лʹ��ѫ������ϵͳ��");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
		if(status == 0){
			var text = "ѫ������ϵͳ\r\n";
				text+= "#L0#1.ʹ�� #v4030003# ����һ�����ѫ�£�#v1142263#��\r\n";
				text+= "#L1#2.ʹ������ѫ�£�#v1142263#��+����˹���飨#v4030004#��*20�һ�6����ѫ�£�#v1142100#��ȫ����10#l\r\n";
				text+= "#L2#3.ʹ��6����ѫ�£�#v1142100#��+����˹���飨#v4030005#��*50�һ�7����ѫ�£�#v1142218#��ȫ����+20#l\r\n";
				text+= "#L3#4.ʹ��7����ѫ�£�#v1142218#��+����˹���飨#v4030006#��*100�һ�8����ѫ�£�#v1142298#��ȫ����+35#l\r\n";
				text+= "#L4#5.ʹ��8����ѫ�£�#v1142298#��+����˹���飨#v4030007#��*188�һ�9����ѫ�£�#v1142408#��ȫ����+55#l\r\n";
				text+= "#L5#6.ʹ��9����ѫ�£�#v1142408#��+�����*15��#v4031514#��+Ӣ��ѫ��*15��#v4031515#���һ��ʺ�ƽ�����VIP��#v1142338#��ȫ����+88\r\n";
			cm.sendSimple(text);  
		} else if (status == 1) {
			if(selection == 0){
				cm.sendGetNumber("��������Ҫ�һ������� 1:1",0,1,214755885);
			} else if(selection == 1){
				if(cm.haveItem(1142263,1) && cm.haveItem(4030004,20)){
					cm.gainItem(1142263,-1);
					cm.gainItem(4030004,-20);
					cm.gainItem(1142100,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
					cm.sendOk("�һ��ɹ�~!");
				} else {
					cm.sendOk("���ϲ���~!");
				}
				cm.dispose();
			} else if(selection == 2){
				if(cm.haveItem(1142100,1) && cm.haveItem(4030005,50)){
					cm.gainItem(1142100,-1);
					cm.gainItem(4030005,-50);
					cm.gainItem(1142218,20,20,20,20,20,20,20,20,20,20,20,20,20,20);
					cm.sendOk("�һ��ɹ�~!");
				} else {
					cm.sendOk("���ϲ���~!");
				}
				cm.dispose();
			} else if(selection == 3){
				if(cm.haveItem(1142218,1) && cm.haveItem(4030006,100)){
					cm.gainItem(1142218,-1);
					cm.gainItem(4030006,-100);
					cm.gainItem(1142298,35,35,35,35,35,35,35,35,35,35,35,35,35,35);
					cm.sendOk("�һ��ɹ�~!");
				} else {
					cm.sendOk("���ϲ���~!");
				}
				cm.dispose();
			} else if(selection == 4){
				if(cm.haveItem(1142298,1) && cm.haveItem(4030007,188)){
					cm.gainItem(1142298,-1);
					cm.gainItem(4030007,-188);
					cm.gainItem(1142408,55,55,55,55,55,55,55,55,55,55,55,55,55,55);
					cm.sendOk("�һ��ɹ�~!");
				} else {
					cm.sendOk("���ϲ���~!");
				}
				cm.dispose();
			} else if(selection == 5){
				if(cm.haveItem(1142408,1) && cm.haveItem(4031514,15) && cm.haveItem(4031515,15)){
					cm.gainItem(1142408,-1);
					cm.gainItem(4031514,-15);
					cm.gainItem(4031515,-15);
					cm.gainItem(1142338,88,88,88,88,88,88,88,88,88,88,88,88,88,88);
					cm.sendOk("�һ��ɹ�~!");
				} else {
					cm.sendOk("���ϲ���~!");
				}
				cm.dispose();
			}
           
        } else if(status == 2){
            if(cm.haveItem(4030003,selection)){
				cm.gainItem(4030003,-selection);
				cm.gainItem(1142263,selection);
				cm.sendOk("�һ��ɹ�");
			} else {
				cm.sendOk("���ϲ���");
			}
			cm.dispose();
          
                }
                }    
}



