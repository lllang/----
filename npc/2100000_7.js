/*
 ��ݹ���
 */

var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var kuangshi1;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
			//if (cm.getLevel() > 200){
				//cm.gainItem(1022225,1111,1111,1111,1111,1111,1111,21111,11111,7,7,7,7,5,5);
			//}
			
			//cm.����(2,"��ң�["+cm.getName()+"]");
            text = "ǿ���ð�ռ��ǣ��Ƿ������һ����������װ���أ�\r\n\r\n";
            text += "      #L0##e#r#v1002357#��������ͷ��#l\r\n";
            text += "      #L1##e#r#v1102476#ŵ������#l\r\n";
            text += "      #L4##e#r#v1072737#ŵ��Ь��#l\r\n";
            text += "      #L5##e#r#v1132169#ŵ������#l\r\n";
            //text += "      #L6##e#r#v1132164#����ϣ������#l\r\n";
            text += "      #L2##e#r#v1052314#lv140��ְҵ�׷�#l\r\n";
            text += "      #L3##e#r#v1122000#���׺�������#l\r\n";
            //text += "#L1##e#rɾ����ʯ��#v4020000##v4020001##v4020002##v4020003##v4020004##v4020005##v4020006##v4020007##v4020008##l\r\n";
            //text += "#L2##e#rɾ��������#v2060000##v2061000##v2000000##v2000001##v2000002##v2000003##l\r\n";
            //text += "#L3##e#rɾ��������#v4130000##v4130001##v4130002##v4130003#�ȵȸ����ٽ���#l\r\n";
            //text += "#L2##e#r��ȡŮ����֤�ƺš�#l\r\n";
            text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
        }else if (status == 1) {
			if(selection==0){
                kuangshi1 = 0;
                //cm.sendYesNo("#v1002357#��ȷ��Ҫɾ����");
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1002357##t1002357#�ɣ�\r\n#r#v1002357##t1002357#ֻ����һ��Ŷ#k��\r\n";
            text += "#L0##e#v1002357#��������ͷ��#r������30������2��#k#v1002357##l\r\n";
            text += "#L1##e#v1002357#��������ͷ��#r������30������2��#k#v1002357##l\r\n";
            text += "#L2##e#v1002357#��������ͷ��#r������21ħ����2��#k#v1002357##l\r\n";
            text += "#L3##e#v1002357#��������ͷ��#r������30������2��#k#v1002357##l\r\n";
            //text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
			}else if(selection==1){
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1102476#�ɣ�\r\n\r\n";
            text += "#L4##e#v1102476##t1102476##r��սʿ��#k#l\r\n";
            text += "#L5##e#v1102477##t1102477##r����ʦ��#k#l\r\n";
            text += "#L6##e#v1102478##t1102478##r�����֣�#k#l\r\n";
            text += "#L7##e#v1102479##t1102479##r��������#k#l\r\n";
			text += "#L8##e#v1102480##t1102480##r��������#k#l\r\n";
            cm.sendSimple(text);
			}else if(selection==2){
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1052314##t1052314#�ɣ�\r\n\r\n";
            text += "#L9##e#v1052314##t1052314##r������30������2��#k#v1052314##l\r\n";
            text += "#L10##e#v1052316##t1052316##r������30������2��#k#v1052316##l\r\n";
            text += "#L11##e#v1052315##t1052315##r������20ħ����2��#k#v1052315##l\r\n";
            text += "#L12##e#v1052317##t1052317##r������30������2��#k#v1052317##l\r\n";
            text += "#L13##e#v1052318##t1052318##r������30������2��#k#v1052318##l\r\n";
            cm.sendSimple(text);
			}else if(selection==3){
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1122076##t1122076#�ɣ�\r\n\r\n";
            text += "#L14##e#v1122076##t1122076##r������30������30��#k#v1122076##l\r\n";
            text += "#L15##e#v1122076##t1122076##r������30������30��#k#v1122076##l\r\n";
            text += "#L16##e#v1122076##t1122076##r������25ħ����10��#k#v1122076##l\r\n";
            text += "#L17##e#v1122076##t1122076##r������30������30��#k#v1122076##l\r\n";
            cm.sendSimple(text);
			}else if(selection==4){
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1072737##t1072737#�ɣ�\r\n\r\n";
            text += "#L18##e#v1072737##t1072737##r��սʿ��#k#l\r\n";
            text += "#L19##e#v1072738##t1072738##r����ʦ��#k#l\r\n";
            text += "#L20##e#v1072739##t1072739##r�����֣�#k#l\r\n";
            text += "#L21##e#v1072740##t1072740##r��������#k#l\r\n";
			text += "#L22##e#v1072741##t1072741##r��������#k#l\r\n";
            cm.sendSimple(text);
			}else if(selection==5){
			text = "����ǿ���ʵ��ȥ��ȡһ��ŵ���������ɣ�\r\n\r\n";
            text += "#L23##e#v1132169##t1132169##r��սʿ��#k#l\r\n";
            text += "#L24##e#v1132170##t1132170##r����ʦ��#k#l\r\n";
            text += "#L25##e#v1132171##t1132171##r�����֣�#k#l\r\n";
            text += "#L26##e#v1132172##t1132172##r��������#k#l\r\n";
            text += "#L27##e#v1132173##t1132173##r��������#k#l\r\n";
            cm.sendSimple(text);
			}else if(selection==6){
			text = "����ǿ���ʵ��ȥ��ȡһ������ϣ�������ɣ�\r\n\r\n";
            text += "#L28##e#v1132164##t1132164##r������18��4��#k#v1132164##l\r\n";
            text += "#L29##e#v1132165##t1132165##r������18ħ4��#k#v1132165##l\r\n";
            text += "#L30##e#v1132166##t1132166##r������18��4��#k#v1132166##l\r\n";
            text += "#L31##e#v1132167##t1132167##r������18��4��#k#v1132167##l\r\n";
            text += "#L32##e#v1132168##t1132168##r������18��4��#k#v1132168##l\r\n";
            cm.sendSimple(text);
			}
		}else if (status == 2) {
			if(selection==0){
                zhakuntou = 0;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1002357#������30������2�� ��Ҫ��������#v1002357#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4250802##k/5]       #v4011008##z4011008# [#r#c4011008##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1003112##k");
			}else if(selection==1){
                zhakuntou = 1;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1002357#������30������2�� ��Ҫ��������#v1002357#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251102##z4251102# [#r#c4251102##k/5]       #v4011008##z4011008# [#r#c4011008##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1003112##k");
			}else if(selection==2){
                zhakuntou = 2;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1002357#������21ħ����2�� ��Ҫ��������#v1002357#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250902##z4250902# [#r#c4250902##k/5]       #v4011008##z4011008# [#r#c4011008##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1003112##k");
			}else if(selection==3){
                zhakuntou = 3;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1002357#������30������2�� ��Ҫ��������#v1002357#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251002##z4251002# [#r#c4251002##k/5]       #v4011008##z4011008# [#r#c4011008##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1003112##k");
			}else if(selection==4){
                zhakuntou = 4;
                    cm.sendYesNo("     #v1102476#��սʿ�� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/80000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1102476##k");
			}else if(selection==5){
                zhakuntou = 5;
                    cm.sendYesNo("     #v1102477#����ʦ�� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250902##z4250902# [#r#c4251102##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/80000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1102477##k");
			}else if(selection==6){
                zhakuntou = 6;
                    cm.sendYesNo("     #v1102478#�����֣� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251102##z4251102# [#r#c4250902##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/80000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1102478##k");
			}else if(selection==7){
                zhakuntou = 7;
                    cm.sendYesNo("     #v1102479#�������� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251002##z4251002# [#r#c4251002##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/80000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1102479##k");
			}else if(selection==8){
                zhakuntou = 8;
                    cm.sendYesNo("     #v1102480#�������� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4251002##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/80000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1102480##k");
			}else if(selection==9){
                zhakuntou = 9;
                cm.sendYesNo("#v1052314##t1052314#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4250802##t4250802# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052314##t1052314#�أ���");
			}else if(selection==10){
                zhakuntou = 10;
                cm.sendYesNo("#v1052316##t1052316#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4251102##t4251102# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052316##t1052316#�أ���");
			}else if(selection==11){
                zhakuntou = 11;
                cm.sendYesNo("#v1052315##t1052315#������20������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4250902##t4250902# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052315##t1052315#�أ���");
			}else if(selection==12){
                zhakuntou = 12;
                cm.sendYesNo("#v1052317##t1052317#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4251002##t4251002# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052317##t1052317#�أ���");
			}else if(selection==13){
                zhakuntou = 13;
                cm.sendYesNo("#v1052318##t1052318#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1002357##t1002357# �� 1#l\r\n��Ҫ��#v4251002##t4251002# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052318##t1052318#�أ���");
			}else if(selection==14){
                zhakuntou = 14;
				 if (cm.haveItem(1122000, 2)){
                    cm.sendOk("���׺�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1122076#������30������30�� ��Ҫ��������#v1122000#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/20]\r\n#v4250802##z4250802# [#r#c4250802##k/10]       #v4011008##z4011008# [#r#c4011008##k/10] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/100000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
			}else if(selection==15){
                zhakuntou = 15;
				 if (cm.haveItem(1122000, 2)){
                    cm.sendOk("���׺�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1122076#������30������30�� ��Ҫ��������#v1122000#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/20]\r\n#v4251102##z4251102# [#r#c4251102##k/10]       #v4011008##z4011008# [#r#c4011008##k/10] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/100000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
			}else if(selection==16){
                zhakuntou = 16;
				 if (cm.haveItem(1122000, 2)){
                    cm.sendOk("���׺�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1122076#������25ħ����10�� ��Ҫ��������#v1122000#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/20]\r\n#v4250902##z4250902# [#r#c4250902##k/10]       #v4011008##z4011008# [#r#c4011008##k/10] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/100000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
			}else if(selection==17){
                zhakuntou = 17;
				 if (cm.haveItem(1122000, 2)){
                    cm.sendOk("���׺�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1122076#������30������30�� ��Ҫ��������#v1122000#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/20]\r\n#v4251002##z4251002# [#r#c4251002##k/10]       #v4011008##z4011008# [#r#c4011008##k/10] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/100000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
			}else if(selection==18){
                zhakuntou = 18;
                    cm.sendYesNo("     #v1072737#��սʿ�� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072737##k");
			}else if(selection==19){
                zhakuntou = 19;
                    cm.sendYesNo("     #v1072738#����ʦ�� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250902##z4250902# [#r#c4250902##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072738##k");
			}else if(selection==20){
                zhakuntou = 20;
                    cm.sendYesNo("     #v1072739#�����֣� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251102##z4251102# [#r#c4251102##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072739##k");
			}else if(selection==21){
                zhakuntou =21;
                    cm.sendYesNo("     #v1072740#�������� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251002##z4251002# [#r#c4251002##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072740##k");
			}else if(selection==22){
                zhakuntou =22;
                    cm.sendYesNo("     #v1072741#�������� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072741##k");
			}else if(selection==23){
                zhakuntou =23;
                    cm.sendYesNo("     #v1132169#��սʿ�� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132169##k");
			}else if(selection==24){
                zhakuntou =24;
                    cm.sendYesNo("     #v1132170#����ʦ�� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250902##z4250902# [#r#c4250902##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132170##k");
			}else if(selection==25){
                zhakuntou =25;
                    cm.sendYesNo("     #v1132171#�����֣� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4251102##z4251102# [#r#c4251102##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132171##k");
			}else if(selection==26){
                zhakuntou =26;
                    cm.sendYesNo("     #v1132172#�������� ��Ҫ��������\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4251002##z4251002# [#r#c4251002##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132172##k");
			}else if(selection==27){
                zhakuntou =27;
                    cm.sendYesNo("     #v1132173#�������� ��Ҫ��������#v1102475#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132173##k");
			}else if(selection==28){
                zhakuntou =28;
                    cm.sendYesNo("     #v1132164#������18������4�� ��Ҫ��������#v1132164#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132164##k");
			}else if(selection==29){
                zhakuntou =29;
                    cm.sendYesNo("     #v1132165#������18ħ����4�� ��Ҫ��������#v1132165#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250902##z4250902# [#r#c4250902##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132165##k");
			}else if(selection==30){
                zhakuntou =30;
                    cm.sendYesNo("     #v1132166#������18������4�� ��Ҫ��������#v1132166#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4251102##z4251102# [#r#c4251102##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132166##k");
			}else if(selection==31){
                zhakuntou =31;
                    cm.sendYesNo("     #v1132167#������18������4�� ��Ҫ��������#v1132167#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4251002##z4251002# [#r#c4251002##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132167##k");
			}else if(selection==32){
                zhakuntou =32;
                    cm.sendYesNo("     #v1132168#������18������4�� ��Ҫ��������#v1132168#\r\n\r\n#v1002357##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132168##k");
			}
		}else if (status == 3) {
			if (zhakuntou==0){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) && cm.haveItem(4250802, 5) && cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //�Ӽ����
					cm.gainItem(1003112,30,0,0,0,0,0,2,0,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������ͷ����");
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==1){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) &&cm.haveItem(4251102, 5) &&cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //�Ӽ����
					cm.gainItem(1003112,0,30,0,0,0,0,2,0,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������ͷ����");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==2){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) &&cm.haveItem(4250902, 5) &&cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //�Ӽ����
					cm.gainItem(1003112,0,0,0,21,0,0,0,2,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������ͷ����");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==3){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //�Ӽ����
					cm.gainItem(1003112,0,0,30,0,0,0,2,0,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������ͷ����");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==4){//4250802 4251102 4250902 4251002
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250802, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >80000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-80000000); //�Ӽ����
					cm.gainItem(1102476,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�����Ǵ�˹���磡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==5){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250902, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >80000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-80000000); //�Ӽ����
					cm.gainItem(1102477,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�ͺն�÷˹���磡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==6){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251102, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >80000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-80000000); //�Ӽ����
					cm.gainItem(1102478,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�Ϳ������磡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==7){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251002, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >80000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-80000000); //�Ӽ����
					cm.gainItem(1102479,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�����������磡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
			    }
			}
			if (zhakuntou==8){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251002, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >80000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-80000000); //�Ӽ����
					cm.gainItem(1102480,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�Ͱ���̩���磡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==9){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052314,30,0,0,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140��սʿ�׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==10){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052316,0,30,0,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140���������׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==11){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052315,0,0,0,20,0,0,0,2,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140����ʦ�׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==12){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052317,0,0,30,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140�������׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==13){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //�Ӽ����
					cm.gainItem(1052318,0,0,0,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ��������140�������׷���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==14){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4250802, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4250802,-10);
					cm.gainItem(4001094,-20);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1122076,30,0,0,0,0,0,30,0,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽��׺�����������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==15){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4251102, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4251102,-10);
					cm.gainItem(4001094,-20);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1122076,0,30,0,0,0,0,30,0,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽��׺�����������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==16){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4250902, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4250902,-10);
					cm.gainItem(4001094,-20);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1122076,0,0,0,25,0,0,0,10,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽��׺�����������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==17){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4251002, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4251002,-10);
					cm.gainItem(4001094,-20);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1122076,0,0,30,0,0,0,30,0,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽��׺�����������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==18){//4250802 4251102 4250902 4251002
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250802, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1072737,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�����Ǵ�˹ѥ��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==19){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251102, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1072738,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�ͺն�÷˹ѥ��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==20){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250902, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1072739,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�Ϳ���ѥ��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==21){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251002, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1072740,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ��������ѥ��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==22){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250802, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1072741,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�Ͱ���̩ѥ��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==23){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250802, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1132169,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�����Ǵ�˹������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==24){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250902, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1132170,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�ͺն�÷˹������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==25){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251102, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1132171,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�Ϳ���������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==26){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251002, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1132172,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ��������������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==27){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250802, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-60000000); //�Ӽ����
					cm.gainItem(1132173,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ��������ŵ�Ͱ���̩������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==28){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251002, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >25000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-25000000); //�Ӽ����
					cm.gainItem(1132164,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==29){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250902, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >25000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-25000000); //�Ӽ����
					cm.gainItem(1132165,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==30){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251102, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >25000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-25000000); //�Ӽ����
					cm.gainItem(1132166,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==31){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251002, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >25000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-25000000); //�Ӽ����
					cm.gainItem(1132167,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==32){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250802, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >25000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-15);
					cm.gainMeso(-25000000); //�Ӽ����
					cm.gainItem(1132168,1);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					//cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			
		}
    }
}
