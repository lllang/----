/*
*   �����̵꣬��ǿ��  NPC
*   By: ZreHy_MS               �����Ҫ�Ķ����������޸ģ����˿����õ�~
*/

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
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("���ã��𾴵� #b#h ##k, ����С��ð�յ���#r�һ�ϵͳ#k������\r\n\r\n��Ŀǰ�г�ֵ�ң� " + cm.getmoneyb() + "\r\n��Ŀǰ�г�ֵ���֣� " + cm.getjf() + "\r\n��Ŀǰ�е�ȯ�� " + cm.getNX(1) + "\r\n#k��ǰӵ���н��:#c4000463# ��\r\n#b#L2#1��ֵ��#d===#r500��ȯ\r\n#n#b#L0#10��ֵ��#d===#r5000��ȯ#k#n#l\r\n#b#L1#100��ֵ��#d===#r50000��ȯ\r\n#L3#1000��ֵ��#d===#r500000��ȯ#k#n#l\r\n#L4#1��#v4000463##d===#r500��ȯ#k#n#l\r\n#L5#10��#v4000463##d===#r5000��ȯ#k#n#l\r\n#L6##r500��ȯ#k#n===1��#v4000463##d#l\r\n#L7##r5000��ȯ#k#n===10��#v4000463##d#l\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.getmoneyb() >= 10){
                 cm.setmoneyb(-10);				
				 cm.gainNX(+5000);
                 cm.gainjf(+10);				 
				cm.sendOk("��ϲ�㣬�һ��ɹ� .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĳ�ֵ�� ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.getmoneyb() >= 100){
                cm.setmoneyb(-100);				
				 cm.gainNX(+50000);
				  cm.gainjf(+100);
				cm.sendOk("��ϲ�㣬�һ��ɹ�! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĳ�ֵ�ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 2: 
            if(cm.getmoneyb() >= 1){
                cm.setmoneyb(-1);
 cm.gainjf(+1);				
				 cm.gainNX(+500);
				cm.sendOk("��ϲ�㣬�һ��ɹ�! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĳ�ֵ�ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 4: 
            if(cm.haveItem(4000463,1)){
                cm.gainNX(500);
				cm.gainItem(4000463,-1);
				cm.sendOk("��ϲ�㣬������ 500 ��ȯ! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �н�ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 5: 
            if(cm.haveItem(4000463,10)){
                cm.gainNX(5000);
				cm.gainItem(4000463,-10);
				cm.sendOk("��ϲ�㣬������ 5000 ��ȯ! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �н�ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 6: 
            if (cm.getPlayer().getNX() >= 500) {
                cm.gainNX(-500);
				cm.gainItem(4000463,1);
				cm.sendOk("��ϲ�㣬������1��#v4000463#! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �н�ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
			case 7: 
            if (cm.getPlayer().getNX() >= 5000) {
                cm.gainNX(-5000);
				cm.gainItem(4000463,10);
				cm.sendOk("��ϲ�㣬������10��#v4000463#! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �н�ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
		case 3: 
            if(cm.getmoneyb() >= 1000){
                cm.setmoneyb(-1000);
 cm.gainjf(+1000);				
				 cm.gainNX(+500000);
				cm.sendOk("��ϲ�㣬�һ��ɹ�! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĳ�ֵ�ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 8: 
            if((cm.getPlayer().getCSPoints(1) >= 300)){          
				 cm.gainNX(-300);
				cm.gainItem(4001126,1);
				cm.sendOk("��ϲ�㣬�һ��ɹ� .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�ĵ�� ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 9: 
            if(cm.haveItem(4001126,10)){              
				cm.gainItem(4001126,-10);
				cm.gainNX(2600);
				cm.sendOk("��ϲ�㣬������ 2600���! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ����ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 11: 
            if(cm.haveItem(4032226,10)){
                cm.gainMeso(2000000);
				cm.gainItem(4032226,-10);
				cm.sendOk("��ϲ�㣬������ 2000000 ���! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ������Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
           case 12: 
            if(cm.haveItem(4001126,1)){              
				cm.gainItem(4001126,-1);
				cm.gainNX(260);
				cm.sendOk("��ϲ�㣬������ 260���! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ����ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 13: 
            if(cm.getMeso() >= 10000000){
                cm.sendOk("��ϲ�㣬������ 2000000 ����ֵ! .");
                cm.gainMeso(-10000000);
                cm.gainExp(2000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 10000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 14: 
            if(cm.getMeso() >= 100000000){
                cm.sendOk("��ϲ�㣬������ 50000000 ����ֵ! .");
                cm.gainMeso(-100000000);
                cm.gainExp(50000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1�� ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 9: 
                cm.openNpc(9270052, 0);
            }
        }
    }
}