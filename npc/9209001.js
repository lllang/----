var nx;
var status = 0;

var ǿ������_1 = 2049600;// 1-10ǿ����Ҫ����
var ǿ������_2 = 2049600;//11-15ǿ����Ҫ����
var �������� = 2610003;


var �ɹ����� = Math.floor(Math.random() * 100);
var һ������ = Math.floor(Math.random() * 2 + 1);
var �������� = Math.floor(Math.random() * 4 + 3);
var �������� = Math.floor(Math.random() * 5 + 7);
var �������� = Math.floor(Math.random() * 3 + 13);
var �������� = Math.floor(Math.random() * 4 + 16);
var �������� = Math.floor(Math.random() * 4 + 20);
var �������� = Math.floor(Math.random() * 4 + 24);
var �������� = Math.floor(Math.random() * 7 + 28);
var �������� = Math.floor(Math.random() * 5 + 35);
var ʮ������ = Math.floor(Math.random() * 4 + 40);
var ʮһ������ = 40;
var ʮ�������� = 80;
var ʮ�������� = 160;
var ʮ�������� = 220;
var ʮ�������� = 300;



var һ��һ������ = 300;
var һ�׶������� = 320;
var һ���������� = 340;
var һ���������� = 360;
var һ���������� = 380;
var һ���������� = 400;
var һ���������� = 420;
var һ�װ������� = 440;
var һ�׾������� = 460;
var һ��ʮ������ = 500;



var ���ǳɹ��� = 100;
var ���ǳɹ��� = 80;
var ���ǳɹ��� = 70;
var ���ǳɹ��� = 60;
var ���ǳɹ��� = 50;
var ���ǳɹ��� = 40;
var ���ǳɹ��� = 30;
var ���ǳɹ��� = 20;
var ʮ�ǳɹ��� = 10;
var ʮһ�ǳɹ��� = 8;
var ʮ���ǳɹ��� = 8;
var ʮ���ǳɹ��� = 6;
var ʮ���ǳɹ��� = 4;
var ʮ���ǳɹ��� = 2;
var ʮ���ǳɹ��� = 1;

//function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("�뽫Ҫǿ����װ�������ڡ�#rװ����-��һ��#k��");
		cm.dispose();
	} else if (cm.isCash(cm.getInventory(1).getItem(1).getId()) == false) {
		cm.sendOk("ֻ�е�װ���ܽ���ǿ��");
		cm.dispose();
	} else {
		status = -1;
		action(1, 0, 0);
	}
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
			var װ��ID = cm.getInventory(1).getItem(1).getId();
			var װ������ = cm.getInventory(1).getItem(1).getOwner();
			var textz = "��ǰ��ѡǿ��װ������#b#i" + װ��ID + "##t" + װ��ID + "##k��\r\n\r\n";
			if (װ������ == "") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";
				
				textz += "ǿ����֪�ؿ���#r�����Եĵ�װ����ǿ��#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r100%#k\r\n\r\n";

				textz += "				#L0##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r" + ���ǳɹ��� + "%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#b��#k\r\n\r\n";

				textz += "				#L1##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r" + ���ǳɹ��� + "%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#b��#k\r\n\r\n";

				textz += "				#L2##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r" + ���ǳɹ��� + "%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#b��#k\r\n\r\n";

				textz += "				#L3##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r" + ���ǳɹ��� + "%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#b��#k\r\n\r\n";

				textz += "				#L4##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r" + ���ǳɹ��� + "%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#b��#k\r\n\r\n";

				textz += "				#L5##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r" + ���ǳɹ��� + "%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#b��#k\r\n\r\n";

				textz += "				#L6##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r" + ���ǳɹ��� + "%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#b��#k\r\n\r\n";

				textz += "				#L7##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r" + ���ǳɹ��� + "%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#b��#k\r\n\r\n";

				textz += "				#L8##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_1 + "##t" + ǿ������_1 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r" + ʮ�ǳɹ��� + "%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#b��#k\r\n\r\n";

				textz += "				#L9##d��װ������ǿ��#k";

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_2 + "##t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r10%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L11##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				
				//textz += "		#L10##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_2 + "##t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r10%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

                textz += "#L13##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L12##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";

				cm.sendSimple(textz);
				
			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_2 + "##t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r10%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L15##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L14##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				
				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_2 + "##t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r10%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L17##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L16##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);

			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "ǿ��������ߣ�#b#i" + ǿ������_2 + "##t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r5%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r1000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L19##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
				
				
				
				
				
				
				
				
//                             1��///////////////////////////////////////////////////




			} else if (װ������ == "����") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "������1��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L21##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
				
			} else if (װ������ == "1�ע���") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����ǿ��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L23##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
			} else if (װ������ == "1�ע���") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����ǿ��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L25##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
			} else if (װ������ == "1�ע���") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����ǿ��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L27##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				

			} else if (װ������ == "1�ע���") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����ǿ��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L29##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);

			} else if (װ������ == "1�ע���") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����ǿ��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L31##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);


			} else if (װ������ == "1�ע���") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����ǿ��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L33##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);


			} else if (װ������ == "1�ע���") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����ǿ��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L35##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);


			} else if (װ������ == "1�ע���") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����ǿ��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L37##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
			} else if (װ������ == "1�ע���") {
				textz += "��ǰǿ���Ǽ���#d" + װ������ + "#k\r\n";

				textz += "����ǿ��������ߣ�#b#i" + ǿ������_2 + "#2��#t" + ǿ������_2 + "##k\r\n\r\n";

				textz += "ǿ���ɹ����ʣ�#r2%#k\r\n\r\n";
				
				textz += "ǿ�������ң�#r2000��#k\r\n\r\n";

				textz += "�Ƿ�ٻ�װ����#r��#k\r\n\r\n";

				textz += "#L39##dʹ��#b#i" + �������� + "##t" + �������� + "##r - ǿ��ʧ�ܣ�װ������#k";
				//textz += "		#L18##d��װ������ǿ�� - ǿ��ʧ�ܣ�װ����#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
















			} else {
				cm.sendYesNo("�޷�ʹ�ô˹��ܣ���ȷ���Ƿ�ﵽ����Ǽ���");
				cm.dispose();


				
				
			}
			


























		} else if (status == 1) {
			var װ��ID = cm.getInventory(1).getItem(1).getId();
			//--------------����ǿ��--------------//
			if (selection == 0) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
				}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					var statup = new java.util.ArrayList();
					var item = cm.getInventory(1).getItem(1).copy();
					var Name = һ������;
					item.setStr(Name);
					item.setInt(Name);
					item.setLuk(Name);
					item.setDex(Name);
					item.setWatk(Name);
					item.setMatk(Name);
					item.setOwner("����");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(ǿ������_1, -1);
					cm.gainMeso(-10000000);
					cm.sendOk("װ�����ǳɹ���");
					cm.dispose();
				}
				//--------------����ǿ��--------------//
			} else if (selection == 1) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ��������;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 2) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ��������;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 3) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ��������;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 4) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ��������;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 5) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ��������;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 6) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ��������;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 7) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ��������;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 8) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ��������;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 9) {
				if (cm.haveItem(ǿ������_1, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ�ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮ������;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(ǿ������_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 10) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮһ�ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮһ������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 11) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮһ�ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮһ������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.gainItem(��������, -1);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainMeso(-10000000);
						cm.gainItem(ǿ������_2, -1);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 12) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮ��������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 13) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮ��������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainItem(��������, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 14) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮ��������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 15) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮ��������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainItem(��������, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 16) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮ��������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 17) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮ��������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainItem(��������, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				//--------------����ǿ��--------------//
			} else if (selection == 18) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮ��������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 19) {
				if (cm.haveItem(ǿ������_2, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = ʮ��������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("����");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -1);
						cm.gainItem(��������, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
				
				
			//1��/////////
			
			
			
							//--------------1��1��ǿ��--------------//
			} else if (selection == 20) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ��һ������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 21) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ��һ������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
											//--------------1��2��ǿ��--------------//
			} else if (selection == 22) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ�׶�������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 23) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ�׶�������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
											//--------------1��3��ǿ��--------------//
			} else if (selection == 24) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 25) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
											//--------------1��4��ǿ��--------------//
			} else if (selection == 26) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 27) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
											//--------------1��5��ǿ��--------------//
			} else if (selection == 28) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 29) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
											//--------------1��6��ǿ��--------------//
			} else if (selection == 30) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 31) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
											//--------------1��7��ǿ��--------------//
			} else if (selection == 32) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 33) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ����������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
											//--------------1��8��ǿ��--------------//
			} else if (selection == 34) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ�װ�������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 35) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ�װ�������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
											//--------------1��9��ǿ��--------------//
			} else if (selection == 36) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ�׾�������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 37) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ�׾�������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
											//--------------1��10��ǿ��--------------//
			} else if (selection == 38) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ��ʮ������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.dispose();
					} else {
						cm.gainItem(װ��ID, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ����Ϻ�װ����ʧ��");
						cm.dispose();
					}
				}
			} else if (selection == 39) {
				if (cm.haveItem(ǿ������_2, 2) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + ǿ������_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("��Ҳ��㡣");
					cm.dispose();
				} else if (cm.haveItem(��������, 1) == false) {
					cm.sendOk("�����Ƿ�ӵ�� #b#z" + �������� + "##k");
					cm.dispose();
				} else {
					if (�ɹ����� < ʮ���ǳɹ���) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = һ��ʮ������;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1�ע���");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(ǿ������_2, -2);
						cm.gainItem(��������, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("װ�����ǳɹ���");
						cm.ȫ��Ư������("�ʺ絺��� " + cm.getChar().getName() + " ʹ��ʱװ���׹��ܳɹ����� [ 1�ע��� ] �����ʱװ,���˵�ͷ.��ϲ�ɺ�", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(��������, -1);
						cm.gainItem(ǿ������_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("װ������ʧ�ܣ�������ʧ��");
						cm.dispose();
					}
				}
				
			
			}
		
		}
	}
}