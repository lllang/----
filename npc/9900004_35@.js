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
				
            text = "����װ������\r\n";
			text += "��ǰ�������:#c4000463#��\r\n"
            text += "#L0##v1432182##r��ɫ����ϵ�� - �һ�50�����#k#l\r\n";
            text += "#L1##v1102481##r��������ϵ�� - �һ�50�����#K#l\r\n";
            text += "#L2##v1072743##r����Ь��ϵ�� - �һ�50�����#K#l\r\n";
            text += "#L3##v1132174##r��������ϵ�� - �һ�50�����#K#l\r\n";
            //text += "#L4##v1032219##r�񻰶������� - �һ�100�����#K#l\r\n";
            text += "#L5##v2290096##rð�յ���ʿ���� - �һ�10�����#K#l\r\n";
            //text += "#L2##e#rɾ��������#v2060000##v2061000##v2000000##v2000001##v2000002##v2000003##l\r\n";
            //text += "#L3##e#rɾ��������#v4130000##v4130001##v4130002##v4130003#�ȵȸ����ٽ���#l\r\n";
            //text += "#L2##e#r��ȡŮ����֤�ƺš�#l\r\n";
            text += "\r\n\r\n\r\n\r\n";
			
					if (cm.getInventory(4).isFull(0)) {//ǰ���2��Ӧװ���ڶ�����Ҳ�������� ������Ǹ���
					cm.sendOk("�������ռ䲻���뼰ʱ����");//�жϲ����ڣ�����ʾ�Ի�
					cm.dispose();
					}
            cm.sendSimple(text);
        }else if (status == 1) {
			if(selection==0){
                kuangshi1 = 0;
			text = "��ѡ����Ҫ���յ�װ�� - 50�����.\r\n#r*һ��ѡ��ͻ���գ�����ѡ��#k\r\n\r\n";
			text += "��ǰ�����:#c4000463#\r\n"
            text += "#L0#- ӵ�У�#r#c1432182##k ����#r#v1432182##z1432182##k		#l\r\n";
            text += "#L1#- ӵ�У�#r#c1402214##k ����#r#v1402214##z1402214##k		#l\r\n";
            text += "#L2#- ӵ�У�#r#c1382226##k ����#r#v1382226##z1382226##k		#l\r\n";
            text += "#L27#- ӵ�У�#r#c1422156##k ����#r#v1422156##z1422156##k		#l\r\n";
            text += "#L28#- ӵ�У�#r#c1442182##k ����#r#v1442182##z1442182##k		#l\r\n";
            text += "#L3#- ӵ�У�#r#c1452220##k ����#r#v1452220##z1452220##k		#l\r\n";
            text += "#L4#- ӵ�У�#r#c1462208##k ����#r#v1462208##z1462208##k		#l\r\n";
            text += "#L5#- ӵ�У�#r#c1332242##k ����#r#v1332242##z1332242##k		#l\r\n";
            text += "#L6#- ӵ�У�#r#c1472230##k ����#r#v1472230##z1332242##k		#l\r\n";
            text += "#L7#- ӵ�У�#r#c1482183##k ����#r#v1482183##z1472230##k		#l\r\n";
            text += "#L8#- ӵ�У�#r#c1492194##k ����#r#v1492194##z1482183##k		#l\r\n";
            //text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
			}else if(selection==1){
			text = "��ѡ����Ҫ���յ�װ�� - 50�����.\r\n#r*һ��ѡ��ͻ���գ�����ѡ��#k\r\n\r\n";
			text += "��ǰ�����:#c4000463#\r\n"
            text += "#L9#- ӵ�У�#r#c1102481##k ����#r#v1102481##z1102481##k		#l\r\n";
            text += "#L10#- ӵ�У�#r#c1102482##k ����#r#v1102482##z1102482##k		#l\r\n";
            text += "#L11#- ӵ�У�#r#c1102483##k ����#r#v1102483##z1102483##k		#l\r\n";
            text += "#L12#- ӵ�У�#r#c1102484##k ����#r#v1102484##z1102484##k		#l\r\n";
            text += "#L13#- ӵ�У�#r#c1102485##k ����#r#v1102485##z1102485##k		#l\r\n";
            cm.sendSimple(text);
			}else if(selection==2){
			text = "��ѡ����Ҫ���յ�װ�� - 50�����.\r\n#r*һ��ѡ��ͻ���գ�����ѡ��#k\r\n\r\n";
			text += "��ǰ�����:#c4000463#\r\n"
            text += "#L14#- ӵ�У�#r#c1072743##k ����#r#v1072743##z1072743##k		#l\r\n";
            text += "#L15#- ӵ�У�#r#c1072744##k ����#r#v1072744##z1072744##k		#l\r\n";
            text += "#L16#- ӵ�У�#r#c1072745##k ����#r#v1072745##z1072745##k		#l\r\n";
            text += "#L17#- ӵ�У�#r#c1072746##k ����#r#v1072746##z1072746##k		#l\r\n";
            text += "#L18#- ӵ�У�#r#c1072747##k ����#r#v1072747##z1072747##k		#l\r\n";
            cm.sendSimple(text);
			}else if(selection==3){
			text = "��ѡ����Ҫ���յ�װ�� - 50�����.\r\n#r*һ��ѡ��ͻ���գ�����ѡ��#k\r\n\r\n";
			text += "��ǰ�����:#c4000463#\r\n"
            text += "#L19#- ӵ�У�#r#c1132174##k ����#r#v1132174##z1132174##k		#l\r\n";
            text += "#L20#- ӵ�У�#r#c1132175##k ����#r#v1132175##z1132175##k		#l\r\n";
            text += "#L21#- ӵ�У�#r#c1132176##k ����#r#v1132176##z1132176##k		#l\r\n";
            text += "#L22#- ӵ�У�#r#c1132177##k ����#r#v1132177##z1132177##k		#l\r\n";
            text += "#L23#- ӵ�У�#r#c1132178##k ����#r#v1132178##z1132178##k		#l\r\n";
            cm.sendSimple(text);
			}else if(selection==4){
			text = "��ѡ����Ҫ���յ�װ�� - 100�����.\r\n#r*һ��ѡ��ͻ���գ�����ѡ��#k\r\n\r\n";
			text += "��ǰ�����:#c4000463#\r\n"
            text += "#L24#- ӵ�У�#r#c1032219##k ����#r#v1032219##z1032219##k		#l\r\n";
            cm.sendSimple(text);
			}else if(selection==5){
			text = "��ѡ����Ҫ���յļ����� - 10�����.\r\n#r*һ��ѡ��ͻ���գ�����ѡ��#k\r\n\r\n";
			text += "��ǰ�����:#c4000463#\r\n"
            text += "#L25#- ӵ�У�#r#c2290096##k ����#r#v2290096##z2290096##k	#l\r\n";
            text += "#L26#- ӵ�У�#r#c2290125##k ����#r#v2290125##z2290125##k	#l\r\n";
            cm.sendSimple(text);
			}
		}else if (status == 2) {
			if(selection==0){
				if(cm.haveItem(1432182,1)){
				cm.gainItem(1432182,-1); //��è
				cm.gainItem(4000463,50); //�Ӽ������
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1432182##z1432182# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==1){
              if(cm.haveItem(1402214,1)){
				cm.gainItem(1402214,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1402214##z1402214# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==27){
              if(cm.haveItem(1422156,1)){
				cm.gainItem(1422156,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1422156##z1422156# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==28){
              if(cm.haveItem(1442182,1)){
				cm.gainItem(1442182,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1442182##z1442182# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==2){
              if(cm.haveItem(1382226,1)){
				cm.gainItem(1382226,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1382226##z1382226# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==3){
              if(cm.haveItem(1452220,1)){
				cm.gainItem(1452220,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1452220##z1452220# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==4){
              if(cm.haveItem(1462208,1)){
				cm.gainItem(1462208,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1462208##z1462208# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==5){
              if(cm.haveItem(1332242,1)){
				cm.gainItem(1332242,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1332242##z1332242# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==6){
              if(cm.haveItem(1472230,1)){
				cm.gainItem(1472230,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1472230##z1472230# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==7){
              if(cm.haveItem(1482183,1)){
				cm.gainItem(1482183,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1482183##z1482183# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==8){
              if(cm.haveItem(1492194,1)){
				cm.gainItem(1492194,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1492194##z1492194# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==9){
              if(cm.haveItem(1102481,1)){
				cm.gainItem(1102481,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1102481##z1102481# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==10){
              if(cm.haveItem(1102482,1)){
				cm.gainItem(1102482,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1102482##z1102482# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==11){
              if(cm.haveItem(1102483,1)){
				cm.gainItem(1102483,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1102483##z1102483# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==12){
              if(cm.haveItem(1102484,1)){
				cm.gainItem(1102484,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1102484##z1102484# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==13){
              if(cm.haveItem(1102485,1)){
				cm.gainItem(1102485,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1102485##z1102485# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==14){
              if(cm.haveItem(1072743,1)){
				cm.gainItem(1072743,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1072743##z1072743# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==15){
              if(cm.haveItem(1072744,1)){
				cm.gainItem(1072744,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1072744##z1072744# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==16){
              if(cm.haveItem(1072745,1)){
				cm.gainItem(1072745,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1072745##z1072745# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==17){
              if(cm.haveItem(1072746,1)){
				cm.gainItem(1072746,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1072746##z1072746# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==18){
              if(cm.haveItem(1072747,1)){
				cm.gainItem(1072747,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1072747##z1072747# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==19){
              if(cm.haveItem(1132174,1)){
				cm.gainItem(1132174,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1132174##z1132174# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==20){
              if(cm.haveItem(1132175,1)){
				cm.gainItem(1132175,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1132175##z1132175# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==21){
              if(cm.haveItem(1132176,1)){
				cm.gainItem(1132176,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1132176##z1132176# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==22){
              if(cm.haveItem(1132177,1)){
				cm.gainItem(1132177,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1132177##z1132177# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==23){
              if(cm.haveItem(1132178,1)){
				cm.gainItem(1132178,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,50); //�Ӽ������
				cm.sendOk("���ճɹ�#r50#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1132178##z1132178# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==24){
              if(cm.haveItem(1032219,1)){
				cm.gainItem(1032219,-1); //��è
				//cm.setmoneyb(+50);  //�Ӽ������
				cm.gainItem(4000463,100); //�Ӽ������
				cm.sendOk("���ճɹ�#r100#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v1032219##z1032219# - �㲢û�����װ����");
				cm.dispose();
				}	
			}else if(selection==25){
              if(cm.haveItem(2290096,1)){
				cm.gainItem(2290096,-1); //��è
				//cm.setmoneyb(+20);  //�Ӽ������
				cm.gainItem(4000463,10); //�Ӽ������
		        cm.worldMessage(6,"Ģ������ң�["+cm.getName()+"]��ϵͳ�������ð�յ���ʿ70,�һ���10�����.");
				cm.sendOk("���ճɹ�#r10#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v2290096##z2290096# - �㲢û����������顣");
				cm.dispose();
				}	
			}else if(selection==26){
              if(cm.haveItem(2290125,1)){
				cm.gainItem(2290125,-1); //��è
				//cm.setmoneyb(+20);  //�Ӽ������
				cm.gainItem(4000463,10); //�Ӽ������
		        cm.worldMessage(6,"Ģ������ң�["+cm.getName()+"]��ϵͳ�������ð�յ���ʿ50,�һ���10�����.");
				cm.sendOk("���ճɹ�#r10#k����ҡ�");
				cm.dispose();
				}else{
				cm.sendOk("#v2290125##z2290125# - �㲢û����������顣");
				cm.dispose();
				}	
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
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250802, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1012319,15,0,0,0,0,0,5,0,0,0,30,30,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==5){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251102, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1012319,0,15,0,0,0,0,5,0,0,0,30,30,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==6){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250902, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1012319,0,0,0,10,0,0,0,5,0,0,30,30,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==7){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251002, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //�Ӽ����
					cm.gainItem(1012319,0,0,15,0,0,0,5,0,0,0,30,30,0,0);
                    cm.sendOk("�ϳ���Ʒ�ɹ���");
					cm.����(1,"��ң�"+cm.getName()+" Ŭ�������˽�������8������죡");
					cm.dispose();
                } else {
                    cm.sendOk("δ�ﵽ�ϳ������޷��ϳɣ�����ϳ���Ҫ�Ķ�����");
                    cm.dispose()
                }
			}
			if (zhakuntou==8){
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
			if (zhakuntou==9){
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
			if (zhakuntou==10){
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
			if (zhakuntou==11){
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
			if (zhakuntou==12){
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
			if (zhakuntou==13){
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
			if (zhakuntou==14){
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
			if (zhakuntou==15){
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
			if (zhakuntou==16){
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
			
			
		}
    }
}
