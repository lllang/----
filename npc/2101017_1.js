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
			
			cm.����(1,"��ң�["+cm.getName()+"]����껷��ȡ����");
            text = "ǿ���ð�ռ��ǣ��Ƿ������һ����������װ���أ�\r\n\r\n";
            text += "      #L0##e#r#v1112916#����½�껷ɭ��#l\r\n";
            //text += "      #L1##e#r#v1112460#���ʺ繫�Ž�ָ������#l\r\n";
            //text += "      #L4##e#r#v1072737#ŵ��Ь��#l\r\n";
            //text += "      #L5##e#r#v1132169#ŵ������#l\r\n";
            //text += "      #L6##e#r#v1132164#����ϣ������#l\r\n";
            //text += "      #L2##e#r#v1052314#lv140��ְҵ�׷�#l\r\n";
            //text += "      #L3##e#r#v1122000#���׺�������#l\r\n";
            //text += "#L1##e#rɾ����ʯ��#v4020000##v4020001##v4020002##v4020003##v4020004##v4020005##v4020006##v4020007##v4020008##l\r\n";
            //text += "#L2##e#rɾ��������#v2060000##v2061000##v2000000##v2000001##v2000002##v2000003##l\r\n";
            //text += "#L3##e#rɾ��������#v4130000##v4130001##v4130002##v4130003#�ȵȸ����ٽ���#l\r\n";
            //text += "#L2##e#r��ȡŮ����֤�ƺš�#l\r\n";
            text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
        }else if (status == 1) {
			if(selection==0){
                kuangshi1 = 0;
                //cm.sendYesNo("#v1142158#��ȷ��Ҫɾ����");
			text = "����ǿ���ʵ��ȥ��ȡһ���ɣ�\r\n";
            text += "#L0##e#v1112422#����껷��ȡ#r��ȫ����+100��#k#l\r\n";
			
            text += "#L1##e#v1112426#ǧ��껷��ȡ#r��ȫ����+500��#k#l\r\n";
			
            text += "#L2##e#v1112586#����껷��ȡ#r��ȫ����+1000��#k����Ч#l\r\n";
			
            text += "#L3##e#v1112932#ʮ����껷��ȡ#r��ȫ����+3888��#k����Ч#l\r\n";
			
			text += "#L4##e#v1112916#������껷��ȡ#r��ȫ����+9999��#k����Ч#l\r\n";
			
			
			
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
                    cm.sendYesNo("     #v1112422#��ȫ����+100�� ��Ҫ��������#v1112422#\r\n\r\n#v2591006##z2591006# [#r#c2591006##k/100]\r\n#v4001085##z4001085# [#r#c4001085##k/1]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/1000000000]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1112422##k");
			}else if(selection==1){
                zhakuntou = 1;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1112426#��ȫ����+500�� ��Ҫ��������#v1112426#\r\n\r\n#v1112422##z1112422# [#r#c1112422##k/1]\r\n#v2591104##z2591104# [#r#c2591104##k/100]\r\n#v4000040##z4000040# [#r#c4000040##k/20]        \r\n#v4002001##z4002001# [#r#c4002001##k/20]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1112426##k");			}else if(selection==2){
                zhakuntou = 2;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1112586#��ȫ����+1000�� ��Ҫ��������#v1112586#\r\n\r\n#v1112426##z1112426# [#r#c1112426##k/1]\r\n#v4000045##z4000045# [#r#c4000045##k/200]\r\n#v2591215##z2591215# [#r#c2591215##k/100]        \r\n#v4002001##z4002001# [#r#c4002001##k/50]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1112586##k");			}else if(selection==3){
                zhakuntou = 3;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1112932#��ȫ����+3888�� ��Ҫ��������#v1112932#\r\n\r\n#v1112586##z1112586# [#r#c1112586##k/1]\r\n#v4000136##z4000136# [#r#c4000136##k/100]\r\n#v2591443##z2591443# [#r#c2591443##k/100]        \r\n#v4002001##z4002001# [#r#c4002001##k/100]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1112932##k");			}else if(selection==4){
                zhakuntou = 4;
                    cm.sendYesNo("     #v1112916#��ȫ����+9999�� ��Ҫ��������#v1112916#\r\n\r\n#v1112932##z1112932# [#r#c1112932##k/1]\r\n#v4031794##z4031794# [#r#c4031794##k/100]\r\n#v2591244##z2591244# [#r#c2591244##k/100]         \r\n#v4002001##z4002001# [#r#c4002001##k/200]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1112916##k");			}else if(selection==5){
                zhakuntou = 5;
                    cm.sendYesNo("     #v1142398#��ȫ����+40�� ��Ҫ��������#v1142398#\r\n\r\n#v1112916##z1112916# [#r#c1112916##k/1]\r\n#v4000082##z4000082# [#r#c4000082##k/100]\r\n#v4000176##z4000176# [#r#c4000176##k/5]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/50000000]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1142398##k");			}else if(selection==6){
                zhakuntou = 6;
                    cm.sendYesNo("     #v1142126#��ȫ����+45�� ��Ҫ��������#v1142126#\r\n\r\n#v1142398##z1142398# [#r#c1142398##k/1]\r\n#v4000235##z4000235# [#r#c4000235##k/30]\r\n#v4030007##z4030007# [#r#c4030007##k/10]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/80000000]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1142126##k");			}else if(selection==7){
                zhakuntou = 7;
                    cm.sendYesNo("     #v1142360#��ȫ����+50�� ��Ҫ��������#v1142360#\r\n\r\n#v1142126##z1142126# [#r#c1142126##k/1]\r\n#v4000243##z4000243# [#r#c4000243##k/30]\r\n#v4002003##z4002003# [#r#c4002003##k/50]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/100000000]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1142360##k");			}else if(selection==8){
                zhakuntou = 8;
                    cm.sendYesNo("     #v1142524#��ȫ����+55�� ��Ҫ��������#v1142524#\r\n\r\n#v1142360##z1142360# [#r#c1142360##k/1]\r\n#v4000245##z4000245# [#r#c4000245##k/200]\r\n#v4000244##z4000244# [#r#c4000244##k/200]       #v4001430##z4001430# [#r#c4001430##k/1] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/150000000]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1142524##k");			}else if(selection==9){
                zhakuntou = 9;
                    cm.sendYesNo("     #v1142714#��ȫ����+60�� ��Ҫ��������#v1142714#\r\n\r\n#v1142524##z1142524# [#r#c1142524##k/1]\r\n#v4251102##z4251102# [#r#c4251102##k/10]\r\n#v4251002##z4251002# [#r#c4251002##k/10]       #v4250902##z4250902# [#r#c4250902##k/10] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/200000000]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1142714##k");			}else if(selection==10){
                zhakuntou = 10;
                    cm.sendYesNo("     #v1142713#��ȫ����+65�� ��Ҫ��������#v1142713#\r\n\r\n#v1142714##z1142714# [#r#c1142714##k/1]\r\n#v4031794##z4031794# [#r#c4031794##k/200]\r\n#v4000045##z4000045# [#r#c4000045##k/300]       #v4000136##z4000136# [#r#c4000136##k/222] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/250000000]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1142713##k");			}else if(selection==11){
                zhakuntou = 11;
                    cm.sendYesNo("     #v1142158#��ȫ����+120�� ��Ҫ��������#v1142158#\r\n\r\n#v1142713##z1142713# [#r#c1142713##k/1]\r\n#v4000019##z4000019# [#r#c4000019##k/2000]\r\n#v4031161##z4031161# [#r#c4031161##k/10]       #v4031162##z4031162# [#r#c4031162##k/10] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/1500000000]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1142158##k");			}else if(selection==12){
                zhakuntou = 12;
                    cm.sendYesNo("     #v1112422#��ȫ����+15�� ��Ҫ��������#v1112422#\r\n\r\n#v1142477##z1142477# [#r#c1142477##k/1]\r\n#v4000000##z4000000# [#r#c4000000##k/200]\r\n#v4001085##z4001085# [#r#c4001085##k/1]       #v4250102##z4250102# [#r#c4250102##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �Ƿ��������һ�׶�?#v1112422##k");			}else if(selection==13){
                zhakuntou = 13;
                cm.sendYesNo("#v1052318##t1052318#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1142158##t1002357# �� 1#l\r\n��Ҫ��#v4251002##t4251002# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052318##t1052318#�أ���");
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
                    cm.sendYesNo("     #v1072737#��սʿ�� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072737##k");
			}else if(selection==19){
                zhakuntou = 19;
                    cm.sendYesNo("     #v1072738#����ʦ�� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250902##z4250902# [#r#c4250902##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072738##k");
			}else if(selection==20){
                zhakuntou = 20;
                    cm.sendYesNo("     #v1072739#�����֣� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251102##z4251102# [#r#c4251102##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072739##k");
			}else if(selection==21){
                zhakuntou =21;
                    cm.sendYesNo("     #v1072740#�������� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4251002##z4251002# [#r#c4251002##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072740##k");
			}else if(selection==22){
                zhakuntou =22;
                    cm.sendYesNo("     #v1072741#�������� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072741##k");
			}else if(selection==23){
                zhakuntou =23;
                    cm.sendYesNo("     #v1132169#��սʿ�� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132169##k");
			}else if(selection==24){
                zhakuntou =24;
                    cm.sendYesNo("     #v1132170#����ʦ�� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250902##z4250902# [#r#c4250902##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132170##k");
			}else if(selection==25){
                zhakuntou =25;
                    cm.sendYesNo("     #v1132171#�����֣� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4251102##z4251102# [#r#c4251102##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132171##k");
			}else if(selection==26){
                zhakuntou =26;
                    cm.sendYesNo("     #v1132172#�������� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4251002##z4251002# [#r#c4251002##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132172##k");
			}else if(selection==27){
                zhakuntou =27;
                    cm.sendYesNo("     #v1132173#�������� ��Ҫ��������#v1102475#\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132173##k");
			}else if(selection==28){
                zhakuntou =28;
                    cm.sendYesNo("     #v1132164#������18������4�� ��Ҫ��������#v1132164#\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132164##k");
			}else if(selection==29){
                zhakuntou =29;
                    cm.sendYesNo("     #v1132165#������18ħ����4�� ��Ҫ��������#v1132165#\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250902##z4250902# [#r#c4250902##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132165##k");
			}else if(selection==30){
                zhakuntou =30;
                    cm.sendYesNo("     #v1132166#������18������4�� ��Ҫ��������#v1132166#\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4251102##z4251102# [#r#c4251102##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132166##k");
			}else if(selection==31){
                zhakuntou =31;
                    cm.sendYesNo("     #v1132167#������18������4�� ��Ҫ��������#v1132167#\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4251002##z4251002# [#r#c4251002##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132167##k");
			}else if(selection==32){
                zhakuntou =32;
                    cm.sendYesNo("     #v1132168#������18������4�� ��Ҫ��������#v1132168#\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132168##k");
			}
		}else if (status == 3) {
			if (zhakuntou==0){
                if (cm.haveItem(2591006, 100) && cm.haveItem(4000000, 0) && cm.haveItem(4250102, 0) && cm.haveItem(4001085, 1) && cm.getPlayer().getMeso() >1000000000){
					cm.gainItem(2591006,-100);
					//cm.gainItem(4000000,-200);
					cm.gainItem(4001085,-1);
					//cm.gainItem(4250102,-5);
					cm.gainMeso(-1000000000); //�Ӽ����
					cm.gainItem(1112422,100,100,100,100,200,200,100,100,0,0,0,0,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
					cm.����(2,"��ң�"+cm.getName()+" ��ɱ��100ֻ�������ڻ���˰���껷������һ�׶Ρ�ǧ��껷��");
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==1){
                if (cm.haveItem(1112422, 1) && cm.haveItem(2591104, 100) &&cm.haveItem(4000040, 20) &&cm.haveItem(4002001, 20) && cm.getPlayer().getMeso() >0){
					cm.gainItem(1112422,-1);
					cm.gainItem(2591104,-100);
					cm.gainItem(4000040,-20);
					cm.gainItem(4002001,-20);
					//cm.gainMeso(-15000000); //�Ӽ����
					cm.gainItem(1112426,500,500,500,500,250,250,500,500,0,0,0,0,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(2,"��ң�"+cm.getName()+" ��ɱ��100ֻǧ��������ڻ����ǧ��껷������һ�׶Ρ�����껷��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==2){
                if (cm.haveItem(1112426, 1) && cm.haveItem(4000045, 200) &&cm.haveItem(2591215, 100) &&cm.haveItem(4002001, 50) && cm.getPlayer().getMeso() >0){
					cm.gainItem(1112426,-1);
					cm.gainItem(4000045,-200);
					cm.gainItem(2591215,-100);
					cm.gainItem(4250302,-50);
					//cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1112586,1000,1000,1000,1000,300,300,1000,1000,0,0,0,0,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ��ɱ��100ֻ����������ڻ��������껷������һ�׶Ρ�ʮ����껷��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==3){
                if (cm.haveItem(1112586, 1) && cm.haveItem(4000136, 100) &&cm.haveItem(2591443, 100) &&cm.haveItem(4002001, 100) && cm.getPlayer().getMeso() >0){
					cm.gainItem(1112586,-1);
					cm.gainItem(4000136,-100);
					cm.gainItem(2591443,-100);
					cm.gainItem(4002001,-100);
					//cm.gainMeso(-25000000); //�Ӽ����
					cm.gainItem(1112932,3888,3888,3888,3888,350,350,3888,3888,0,0,0,0,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ��ɱ��100ֻʮ����������ڻ����ʮ����껷������һ�׶Ρ�������껷��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==4){//4250802 4251102 4250902 4251002
                if (cm.haveItem(1112932, 1) && cm.haveItem(4031794, 100) && cm.haveItem(2591244, 100) && cm.haveItem(4002001, 200)  && cm.getPlayer().getMeso() >40000000){
					cm.gainItem(1112932,-1);
					cm.gainItem(4031794,-100);
					cm.gainItem(2591244,-100);
					cm.gainItem(4002001,-200);
					//cm.gainMeso(-40000000); //�Ӽ����
					cm.gainItem(1112916,9999,9999,9999,9999,400,400,9999,9999,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ��ȡ������껷�����һ��Ĥ����������ţƤ��������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==5){
                if (cm.haveItem(1112916, 1) && cm.haveItem(4000082, 100) && cm.haveItem(4000176, 5) && cm.haveItem(4250602, 0)  && cm.getPlayer().getMeso() >50000000){
					cm.gainItem(1112916,-1);
					cm.gainItem(4000082,-100);
					cm.gainItem(4000176,-5);
					//cm.gainItem(4250602,-5);
					cm.gainMeso(-50000000); //�Ӽ����
					cm.gainItem(1142398,40,40,40,40,450,450,40,40,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ���˶ɽ�����һ�׶Ρ������ڡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==6){
                if (cm.haveItem(1142398, 1) && cm.haveItem(4000235, 30) && cm.haveItem(4030007, 10) && cm.haveItem(4250702, 0)  && cm.getPlayer().getMeso() >80000000){
					cm.gainItem(1142398,-1);
					cm.gainItem(4000235,-30);
					cm.gainItem(4030007,-10);
					//cm.gainItem(4250702,-10);
					cm.gainMeso(-80000000); //�Ӽ����
					cm.gainItem(1142126,45,45,45,45,500,500,45,45,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ���˵�������һ�׶Ρ������ڡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==7){
                if (cm.haveItem(1142126, 1) && cm.haveItem(4000243, 30) && cm.haveItem(4002003, 50) && cm.haveItem(4251402, 0)  && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1142126,-1);
					cm.gainItem(4000243,-30);
					cm.gainItem(4002003,-50);
					//cm.gainItem(4251402,-5);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1142360,50,50,50,50,600,600,50,50,20,20,20,20,20,20);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ������������һ�׶Ρ������ڡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
			    }
			}
			if (zhakuntou==8){
                if (cm.haveItem(1142360, 1) && cm.haveItem(4000245, 200) && cm.haveItem(4000244, 200) && cm.haveItem(4001430, 1)  && cm.getPlayer().getMeso() >150000000){
					cm.gainItem(1142360,-1);
					cm.gainItem(4000245,-200);
					cm.gainItem(4000245,-200);
					cm.gainItem(4001430,-1);
					cm.gainMeso(-150000000); //�Ӽ����
					cm.gainItem(1142524,55,55,55,55,600,600,55,55,20,20,20,20,20,20);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ���˽�������һ�׶Ρ��ɾ��ڡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==9){
                if (cm.haveItem(1142524, 1) &&cm.haveItem(4251102, 10) &&cm.haveItem(4251002, 10) && cm.haveItem(4250902, 10)  && cm.getPlayer().getMeso() >200000000){
					cm.gainItem(1142524,-1);
					cm.gainItem(4251102,-10);
					cm.gainItem(4251002,-10);
					cm.gainItem(4250902,-10);
					cm.gainMeso(-200000000); //�Ӽ����
					cm.gainItem(1142714,60,60,60,60,700,700,60,60,25,25,25,25,25,25);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ�����ɾ�����һ�׶Ρ��ɵ��ڡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==10){
                if (cm.haveItem(1142714, 1) &&cm.haveItem(4031794, 200) &&cm.haveItem(4000045, 200) &&cm.haveItem(4000136, 222) && cm.getPlayer().getMeso() >250000000){
					cm.gainItem(1142714,-1);
					cm.gainItem(4031794,-200);
					cm.gainItem(4000045,-200);
					cm.gainItem(4000136,-222);
					cm.gainMeso(-250000000); //�Ӽ����
					cm.gainItem(1142713,65,65,65,65,800,800,65,65,30,30,30,30,30,30);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ�����ɵ�����һ�׶Ρ������ڡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==11){
                if (cm.haveItem(1142713, 1) &&cm.haveItem(4000019, 2000) &&cm.haveItem(4031161, 10) &&cm.haveItem(4031162, 10) && cm.getPlayer().getMeso() >1500000000){
					cm.gainItem(1142713,-1);
					cm.gainItem(4000019,-2000);
					cm.gainItem(4031161,-10);
					cm.gainItem(4031162,-10);
					cm.gainMeso(-1500000000); //�Ӽ����
					cm.gainItem(1142158,120,120,120,120,1200,1200,120,120,50,50,50,50,50,50);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(2,"��ң���"+cm.getName()+" �����������ߵ��������ڻ��Ψһ�ƺš���������ͬ��");
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
