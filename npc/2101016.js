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
			
			cm.����(2,"��ң�["+cm.getName()+"]��������½�ƺźϳɴ���");
            text = "ǿ���ð�ռ��ǣ��Ƿ������һ����������װ���أ�\r\n\r\n";
            text += "      #L0##e#r#v1142893#������½ѧԺ�ƺźϳɡ�#l\r\n";
            //text += "      #L1##e#r#v1112460#����칫�Ž�ָ������#l\r\n";
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
			text = "����ǿ���ʵ��ȥ��ȡһ��#v1142893#�ɣ�\r\n";
            text += "#L0##e#v1142499#����½ؼ��ʿ#r��ȫ����+15��#k#v1142499##l\r\n";
			
            text += "#L1##e#v1142345#����½ؼ��ʦ#r��ȫ����+50��#k#v1142345##l\r\n";
			
            text += "#L2##e#v1142905#����½ؼ����#r��ȫ����+150��#k#v1142905##l\r\n";
			
            text += "#L3##e#v1142662#����½ؼ����#r��ȫ����+450��#k#v1142662##l\r\n";
			
			text += "#L4##e#v1142344#����½ؼ���#r��ȫ����+1288��#k#v1142344##l\r\n";
			
			text += "#L5##e#v1142803#����½ؼ�궷��#r��ȫ����+2888��#k#v1142803##l\r\n";
			
			text += "#L6##e#v1142802#����½ؼ��Ŷ���#r��ȫ����+4888��#k#v1142802##l\r\n";
			
			text += "#L7##e#v1142745#������½ؼ��ʥ��ר��#r��ȫ����+9999��#k#v1142745##l\r\n";
			
			text += "#L8##e#v1142713#������½ؼ�ɵۡ�ר��#r��ȫ����+1W9��#k#v1142713##l\r\n";
			
			text += "#L9##e#v1142158#������½ؼ�����ר��#r��ȫ����+2W9��#k#v1142158##l\r\n";
			
			//text += "#L8##e#v1142713#���������ͻ��#r��ȫ����+55��#k#v1142713##l\r\n";
			
			//text += "#L9##e#v1142158#�����ɾ���ͻ��#r��ȫ����+60��#k#v1142158##l\r\n";
			
			//text += "#L10##e#v1142713#�����ɵ���ͻ��#r��ȫ����+65��#k#v1142713##l\r\n";
			
			//text += "#L11##e#v1142158#����������ͻ��#r��ȫ����+120��#k#v1142158##l\r\n";
			
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
                    cm.sendYesNo("     #v1142499#��ȫ����+15�� ��Ҫ��������#v1142499#\r\n\r\n#v1142263##z1142263# [#r#c1142263##k/1]\r\n#v4000000##z4000000# [#r#c4000000##k/200]\r\n#v3700031##z3700031# [#r#c3700031##k/1]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142499##k");
			}else if(selection==1){
                zhakuntou = 1;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1142345#��ȫ����+50�� ��Ҫ��������#v1142345#\r\n\r\n#v1142499##z1142499# [#r#c1142499##k/1]\r\n#v3700032##z3700032# [#r#c3700032##k/1]\r\n#v4000040##z4000040# [#r#c4000040##k/2]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/15000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142345##k");			}else if(selection==2){
                zhakuntou = 2;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1142905#��ȫ����+150�� ��Ҫ��������#v1142905#\r\n\r\n#v1142345##z1142345# [#r#c1142345##k/1]\r\n#v4000045##z4000045# [#r#c4000045##k/200]\r\n#v3700033##z3700033# [#r#c3700033##k/1]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/20000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142905##k");			}else if(selection==3){
                zhakuntou = 3;
				 if (cm.haveItem(1002357, 2)){
                    cm.sendOk("�Ѿ�����һ����������ͷ���ˣ�������ֻ����һ����")
					cm.safeDispose();
                 }
                    cm.sendYesNo("     #v1142662#��ȫ����+450�� ��Ҫ��������#v1142662#\r\n\r\n#v1142905##z1142905# [#r#c1142905##k/1]\r\n#v4000136##z4000136# [#r#c4000136##k/999]\r\n#v3700034##z3700034# [#r#c3700034##k/1]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142662##k");			}else if(selection==4){
                zhakuntou = 4;
                    cm.sendYesNo("     #v1142344#��ȫ����+1288�� ��Ҫ��������#v1142344#\r\n\r\n#v1142662##z1142662# [#r#c1142662##k/1]\r\n#v4000175##z4000175# [#r#c4000175##k/20]\r\n#v3700046##z3700046# [#r#c3700046##k/1]      \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/40000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142344##k");			}else if(selection==5){
                zhakuntou = 5;
                    cm.sendYesNo("     #v1142803#��ȫ����+2888�� ��Ҫ��������#v1142803#\r\n\r\n#v1142344##z1142344# [#r#c1142344##k/1]\r\n#v3700045##z3700045# [#r#c3700045##k/1]\r\n#v4000176##z4000176# [#r#c4000176##k/20]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/50000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142803##k");			}else if(selection==6){
                zhakuntou = 6;
                    cm.sendYesNo("     #v1142802#��ȫ����+4888�� ��Ҫ��������#v1142802#\r\n\r\n#v1142803##z1142803# [#r#c1142803##k/1]\r\n#v4000235##z4000235# [#r#c4000235##k/30]\r\n#v3700044##z3700044# [#r#c3700044##k/1]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/80000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142802##k");			}else if(selection==7){
                zhakuntou = 7;
                    cm.sendYesNo("     #v1142893#��ȫ����+9999�� ��Ҫ��������#v1142893#\r\n\r\n#v1142802##z1142802# [#r#c1142802##k/1]\r\n#v4002001##z4002001# [#r#c4002001##k/400]]\r\n#v3700254##z3700254# [#r#c3700254##k/1]        \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/100000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142893##k");			}else if(selection==8){
                zhakuntou = 8;
                    cm.sendYesNo("     #v1142713#��ȫ����+19999�� ��Ҫ��������#v1142713#\r\n\r\n#v1142893##z1142893# [#r#c1142893##k/1]\r\n#v4000245##z4000245# [#r#c4000245##k/500]\r\n#v4000244##z4000244# [#r#c4000244##k/500]       \r\n#v4002001##z4002001# [#r#c4002001##k/800] #v3700039##z3700039# [#r#c3700039##k/1] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/150000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142713##k");			}else if(selection==9){
                zhakuntou = 9;
                    cm.sendYesNo("     #v1142158#��ȫ����+29999�� ��Ҫ��������#v1142158#\r\n\r\n#v1142713##z1142713# [#r#c1142713##k/1]\r\n#v2591443##z2591443# [#r#c2591443##k/100]\r\n#v4310038##z4310038# [#r#c4310038##k/9999]       \r\n#v4002001##z4002001# [#r#c4002001##k/1000] \r\n#v3700043##z3700043# [#r#c3700043##k/1] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/200000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142158##k");			}else if(selection==10){
                zhakuntou = 10;
                    cm.sendYesNo("     #v1142713#��ȫ����+65�� ��Ҫ��������#v1142713#\r\n\r\n#v1142158##z1142158# [#r#c1142158##k/1]\r\n#v4000175##z4000175# [#r#c4000175##k/200]\r\n#v4000045##z4000045# [#r#c4000045##k/300]       #v4000136##z4000136# [#r#c4000136##k/222] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/250000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142713##k");			}else if(selection==11){
                zhakuntou = 11;
                    cm.sendYesNo("     #v1142158#��ȫ����+120�� ��Ҫ��������#v1142158#\r\n\r\n#v1142713##z1142713# [#r#c1142713##k/1]\r\n#v4000019##z4000019# [#r#c4000019##k/2000]\r\n#v4031161##z4031161# [#r#c4031161##k/10]       #v4031162##z4031162# [#r#c4031162##k/10] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/1500000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142158##k");			}else if(selection==12){
                zhakuntou = 12;
                    cm.sendYesNo("     #v1142499#��ȫ����+15�� ��Ҫ��������#v1142499#\r\n\r\n#v1142263##z1142263# [#r#c1142263##k/1]\r\n#v4000000##z4000000# [#r#c4000000##k/200]\r\n#v3700031##z3700031# [#r#c3700031##k/1]       #v4250102##z4250102# [#r#c4250102##k/5] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]\r\n\r\n#r               �Ƿ�ϳ�?#v1142499##k");			}else if(selection==13){
                zhakuntou = 13;
                cm.sendYesNo("#v1052318##t1052318#������30������2�� ��Ҫ�������¡�\r\n��Ҫ��#v1142158##t1002357# �� 1#l\r\n��Ҫ��#v4310038##t4310038# �� 5#l\r\n��Ҫ��#v4001080##t4001080# �� 5#l\r\n��Ҫ��#v4031138# �� 3000W#l\r\n�Ƿ�Ҫ����һ��#v1052318##t1052318#�أ���");
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
                    cm.sendYesNo("     #v1122076#������30������30�� ��Ҫ��������#v1122000#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/20]\r\n#v2591443##z2591443# [#r#c2591443##k/10]       #v4011008##z4011008# [#r#c4011008##k/10] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/100000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
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
                    cm.sendYesNo("     #v1122076#������30������30�� ��Ҫ��������#v1122000#\r\n\r\n#v1122000##z1122000# [#r#c1122000##k/1]       #v4001094##z4001094# [#r#c4001094##k/20]\r\n#v4310038##z4310038# [#r#c4310038##k/10]       #v4011008##z4011008# [#r#c4011008##k/10] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/100000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1122076##k");
			}else if(selection==18){
                zhakuntou = 18;
                    cm.sendYesNo("     #v1072737#��սʿ�� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072737##k");
			}else if(selection==19){
                zhakuntou = 19;
                    cm.sendYesNo("     #v1072738#����ʦ�� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4250902##z4250902# [#r#c4250902##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072738##k");
			}else if(selection==20){
                zhakuntou = 20;
                    cm.sendYesNo("     #v1072739#�����֣� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v2591443##z2591443# [#r#c2591443##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072739##k");
			}else if(selection==21){
                zhakuntou =21;
                    cm.sendYesNo("     #v1072740#�������� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/10]\r\n#v4310038##z4310038# [#r#c4310038##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1072740##k");
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
                    cm.sendYesNo("     #v1132171#�����֣� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v2591443##z2591443# [#r#c2591443##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132171##k");
			}else if(selection==26){
                zhakuntou =26;
                    cm.sendYesNo("     #v1132172#�������� ��Ҫ��������\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4310038##z4310038# [#r#c4310038##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/60000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132172##k");
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
                    cm.sendYesNo("     #v1132166#������18������4�� ��Ҫ��������#v1132166#\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v2591443##z2591443# [#r#c2591443##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132166##k");
			}else if(selection==31){
                zhakuntou =31;
                    cm.sendYesNo("     #v1132167#������18������4�� ��Ҫ��������#v1132167#\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4310038##z4310038# [#r#c4310038##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132167##k");
			}else if(selection==32){
                zhakuntou =32;
                    cm.sendYesNo("     #v1132168#������18������4�� ��Ҫ��������#v1132168#\r\n\r\n#v1142158##z1002357# [#r#c1002357##k/1]       #v4001080##z4001080# [#r#c4001080##k/15]\r\n#v4250802##z4250802# [#r#c4250802##k/2]       #v4011008##z4011008# [#r#c4011008##k/2] \r\n#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/25000000]\r\n\r\n#r               �����������������Ƿ����һ��?#v1132168##k");
			}
		}else if (status == 3) {
			if (zhakuntou==0){
                if (cm.haveItem(1142263, 1) && cm.haveItem(4000000, 200) && cm.haveItem(4250102, 0) && cm.haveItem(3700031, 1) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1142263,-1);
					cm.gainItem(4000000,-200);
					cm.gainItem(3700031,-1);
					//cm.gainItem(4250102,-5);
					cm.gainMeso(-10000000); //�Ӽ����
					cm.gainItem(1142499,15,15,15,15,200,200,15,15,0,0,0,0,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
					cm.����(2,"��ң�"+cm.getName()+" ����������������ͻ���˻�ʿ����һ�׶Ρ���ʦ��");
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==1){
                if (cm.haveItem(1142499, 1) && cm.haveItem(3700032, 1) &&cm.haveItem(4000040, 2) &&cm.haveItem(4250202, 0) && cm.getPlayer().getMeso() >15000000){
					cm.gainItem(1142499,-1);
					cm.gainItem(3700032,-1);
					cm.gainItem(4000040,-2);
					//cm.gainItem(4250202,-5);
					cm.gainMeso(-15000000); //�Ӽ����
					cm.gainItem(1142345,50,50,50,50,250,250,50,50,0,0,0,0,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(2,"��ң�"+cm.getName()+" ����������������ͻ���˻�ʦ��һ�׶Ρ�����");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==2){
                if (cm.haveItem(1142345, 1) && cm.haveItem(4000045, 200) &&cm.haveItem(3700033, 1) &&cm.haveItem(4250302, 0) && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1142345,-1);
					cm.gainItem(4000045,-200);
					cm.gainItem(3700033,-1);
					//cm.gainItem(4250302,-5);
					cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1142905,150,150,150,150,300,300,150,150,0,0,0,0,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ���˻�����һ�׶Ρ�������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==3){
                if (cm.haveItem(1142905, 1) && cm.haveItem(4000136, 999) &&cm.haveItem(3700034, 1) &&cm.haveItem(4250402, 0) && cm.getPlayer().getMeso() >25000000){
					cm.gainItem(1142905,-1);
					cm.gainItem(4000136,-999);
					cm.gainItem(3700034,-1);
					//cm.gainItem(4250402,-5);
					cm.gainMeso(-25000000); //�Ӽ����
					cm.gainItem(1142662,450,450,450,450,350,350,450,450,0,0,0,0,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ���˻�������һ�׶Ρ���ۡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==4){//4250802 2591443 4250902 4310038
                if (cm.haveItem(1142662, 1) && cm.haveItem(4000175, 20) &&cm.haveItem(3700046, 1) &&cm.haveItem(4250402, 0) && cm.getPlayer().getMeso() >40000000){
					cm.gainItem(1142662,-1);
					cm.gainItem(4000175,-20);
					cm.gainItem(3700046,-1);
					//cm.gainItem(4250502,-5);
					cm.gainMeso(-40000000); //�Ӽ����
					cm.gainItem(1142344,1288,1288,1288,1288,400,400,1288,1288,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ���˻����һ�׶Ρ��궷�ޡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==5){
                if (cm.haveItem(1142344, 1) && cm.haveItem(3700045, 1) && cm.haveItem(4000176, 20) && cm.haveItem(4250602, 0)  && cm.getPlayer().getMeso() >50000000){
					cm.gainItem(1142344,-1);
					cm.gainItem(3700045,-1);
					cm.gainItem(4000176,-20);
					//cm.gainItem(4250602,-5);
					cm.gainMeso(-50000000); //�Ӽ����
					cm.gainItem(1142803,2888,2888,2888,2888,450,450,2888,2888,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ���˻궷����һ�׶Ρ���Ŷ��ޡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==6){
                if (cm.haveItem(1142803, 1) && cm.haveItem(4000235, 30) && cm.haveItem(3700044, 1) && cm.haveItem(4250702, 0)  && cm.getPlayer().getMeso() >80000000){
					cm.gainItem(1142803,-1);
					cm.gainItem(4000235,-30);
					cm.gainItem(3700044,-1);
					//cm.gainItem(4250702,-10);
					cm.gainMeso(-80000000); //�Ӽ����
					cm.gainItem(1142802,4888,4888,4888,4888,500,500,4888,4888,0,0,0,0,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ���˷�Ŷ�����һ�׶Ρ�˽��ר�����ʥ��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==7){
                if (cm.haveItem(1142802, 1)  && cm.haveItem(4002001, 400) && cm.haveItem(3700254, 1) && cm.haveItem(4251402, 0)  && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1142802,-1);
					//cm.gainItem(3700241,-1);
					cm.gainItem(4002001,-400);
					cm.gainItem(3700254,-1);
					//cm.gainItem(4251402,-5);
					cm.gainMeso(-100000000); //�Ӽ����
					cm.gainItem(1142893,9999,9999,9999,9999,600,600,9999,9999,20,20,20,20,20,20);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ���˰�ʥ��");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
			    }
			}
			if (zhakuntou==8){
                if (cm.haveItem(1142893, 1) && cm.haveItem(4000245, 500) && cm.haveItem(4000244, 500) && cm.haveItem(4002001, 800) && cm.haveItem(3700039, 1) && cm.getPlayer().getMeso() >150000000){
					cm.gainItem(1142893,-1);
					cm.gainItem(4000245,-500);
					cm.gainItem(4000244,-500);
					cm.gainItem(4002001,-800);
					cm.gainItem(3700039,-1);
					cm.gainMeso(-150000000); //�Ӽ����
					cm.gainItem(1142713,19999,19999,19999,19999,0,0,19999,19999,19999,19999,19999,19999,19999,19999);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ�����ɵۡ�");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==9){
                if (cm.haveItem(1142713, 1) &&cm.haveItem(2591443, 100) &&cm.haveItem(4310038, 9999) && cm.haveItem(4002001, 1000) && cm.haveItem(3700043, 1)  && cm.getPlayer().getMeso() >200000000){
					cm.gainItem(1142713,-1);
					cm.gainItem(2591443,-100);
					cm.gainItem(4310038,-9999);
					cm.gainItem(4002001,-1000);
					cm.gainItem(3700043,-1);
					cm.gainMeso(-200000000); //�Ӽ����
					cm.gainItem(1142158,29999,29999,29999,29999,0,0,29999,29999,29999,29999,29999,29999,29999,29999);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" ����������������ͻ��������");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==10){
                if (cm.haveItem(1142158, 1) &&cm.haveItem(4000175, 200) &&cm.haveItem(4000045, 200) &&cm.haveItem(4000136, 222) && cm.getPlayer().getMeso() >250000000){
					cm.gainItem(1142158,-1);
					cm.gainItem(4000175,-200);
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
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4310038, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4310038,-5);
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
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4310038, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4310038,-5);
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
                if (cm.haveItem(1122000, 1) &&cm.haveItem(2591443, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(2591443,-10);
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
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4310038, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4310038,-10);
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
			if (zhakuntou==18){//4250802 2591443 4250902 4310038
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
                if (cm.haveItem(1002357, 1) && cm.haveItem(2591443, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(2591443,-2);
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
                if (cm.haveItem(1002357, 1) && cm.haveItem(4310038, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4310038,-2);
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
                if (cm.haveItem(1002357, 1) && cm.haveItem(2591443, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(2591443,-2);
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
                if (cm.haveItem(1002357, 1) && cm.haveItem(4310038, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >60000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4310038,-2);
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
                if (cm.haveItem(1002357, 1) && cm.haveItem(4310038, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >25000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4310038,-2);
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
                if (cm.haveItem(1002357, 1) && cm.haveItem(2591443, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >25000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(2591443,-2);
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
                if (cm.haveItem(1002357, 1) && cm.haveItem(4310038, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 15)  && cm.getPlayer().getMeso() >25000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4310038,-2);
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
