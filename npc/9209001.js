var nx;
var status = 0;

var 强化材料_1 = 2049600;// 1-10强化需要材料
var 强化材料_2 = 2049600;//11-15强化需要材料
var 保护卷轴 = 2610003;


var 成功几率 = Math.floor(Math.random() * 100);
var 一星属性 = Math.floor(Math.random() * 2 + 1);
var 二星属性 = Math.floor(Math.random() * 4 + 3);
var 三星属性 = Math.floor(Math.random() * 5 + 7);
var 四星属性 = Math.floor(Math.random() * 3 + 13);
var 五星属性 = Math.floor(Math.random() * 4 + 16);
var 六星属性 = Math.floor(Math.random() * 4 + 20);
var 七星属性 = Math.floor(Math.random() * 4 + 24);
var 八星属性 = Math.floor(Math.random() * 7 + 28);
var 九星属性 = Math.floor(Math.random() * 5 + 35);
var 十星属性 = Math.floor(Math.random() * 4 + 40);
var 十一星属性 = 40;
var 十二星属性 = 80;
var 十三星属性 = 160;
var 十四星属性 = 220;
var 十五星属性 = 300;



var 一阶一星属性 = 300;
var 一阶二星属性 = 320;
var 一阶三星属性 = 340;
var 一阶四星属性 = 360;
var 一阶五星属性 = 380;
var 一阶六星属性 = 400;
var 一阶七星属性 = 420;
var 一阶八星属性 = 440;
var 一阶九星属性 = 460;
var 一阶十星属性 = 500;



var 二星成功率 = 100;
var 三星成功率 = 80;
var 四星成功率 = 70;
var 五星成功率 = 60;
var 六星成功率 = 50;
var 七星成功率 = 40;
var 八星成功率 = 30;
var 九星成功率 = 20;
var 十星成功率 = 10;
var 十一星成功率 = 8;
var 十二星成功率 = 8;
var 十三星成功率 = 6;
var 十四星成功率 = 4;
var 十五星成功率 = 2;
var 十七星成功率 = 1;

//function start() {
	if (cm.getInventory(1).getItem(1) == null) {
		cm.sendOk("请将要强化的装备放置在“#r装备栏-第一格#k”");
		cm.dispose();
	} else if (cm.isCash(cm.getInventory(1).getItem(1).getId()) == false) {
		cm.sendOk("只有点装才能进行强化");
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
			var 装备ID = cm.getInventory(1).getItem(1).getId();
			var 装备名称 = cm.getInventory(1).getItem(1).getOwner();
			var textz = "当前所选强化装备：“#b#i" + 装备ID + "##t" + 装备ID + "##k”\r\n\r\n";
			if (装备名称 == "") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";
				
				textz += "强化须知必看：#r有属性的点装不能强化#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "强化成功几率：#r100%#k\r\n\r\n";

				textz += "				#L0##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "①星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";

				textz += "强化成功几率：#r" + 二星成功率 + "%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#b否#k\r\n\r\n";

				textz += "				#L1##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "②星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";

				textz += "强化成功几率：#r" + 三星成功率 + "%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#b否#k\r\n\r\n";

				textz += "				#L2##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "③星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";

				textz += "强化成功几率：#r" + 四星成功率 + "%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#b否#k\r\n\r\n";

				textz += "				#L3##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "④星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";

				textz += "强化成功几率：#r" + 五星成功率 + "%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#b否#k\r\n\r\n";

				textz += "				#L4##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "⑤星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";

				textz += "强化成功几率：#r" + 六星成功率 + "%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#b否#k\r\n\r\n";

				textz += "				#L5##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "⑥星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";

				textz += "强化成功几率：#r" + 七星成功率 + "%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#b否#k\r\n\r\n";

				textz += "				#L6##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "⑦星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";

				textz += "强化成功几率：#r" + 八星成功率 + "%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#b否#k\r\n\r\n";

				textz += "				#L7##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "⑧星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";

				textz += "强化成功几率：#r" + 九星成功率 + "%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#b否#k\r\n\r\n";

				textz += "				#L8##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "⑨星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_1 + "##t" + 强化材料_1 + "##k\r\n\r\n";

				textz += "强化成功几率：#r" + 十星成功率 + "%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#b否#k\r\n\r\n";

				textz += "				#L9##d对装备进行强化#k";

				cm.sendSimple(textz);

			} else if (装备名称 == "⑩星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_2 + "##t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r10%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L11##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				
				//textz += "		#L10##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);

			} else if (装备名称 == "⑾星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_2 + "##t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r10%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

                textz += "#L13##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L12##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";

				cm.sendSimple(textz);
				
			} else if (装备名称 == "⑿星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_2 + "##t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r10%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L15##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L14##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				
				cm.sendSimple(textz);

			} else if (装备名称 == "⒀星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_2 + "##t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r10%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L17##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L16##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);

			} else if (装备名称 == "⒁星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "强化所需道具：#b#i" + 强化材料_2 + "##t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r5%#k\r\n\r\n";
				
				textz += "强化所需金币：#r1000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L19##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
				
				
				
				
				
				
				
				
//                             1阶///////////////////////////////////////////////////




			} else if (装备名称 == "⒂星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶至1阶所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L21##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
				
			} else if (装备名称 == "1阶①星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶强化所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L23##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
			} else if (装备名称 == "1阶②星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶强化所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L25##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
			} else if (装备名称 == "1阶③星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶强化所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L27##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				

			} else if (装备名称 == "1阶④星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶强化所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L29##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);

			} else if (装备名称 == "1阶⑤星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶强化所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L31##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);


			} else if (装备名称 == "1阶⑥星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶强化所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L33##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);


			} else if (装备名称 == "1阶⑦星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶强化所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L35##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);


			} else if (装备名称 == "1阶⑧星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶强化所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L37##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
				
			} else if (装备名称 == "1阶⑨星") {
				textz += "当前强化星级：#d" + 装备名称 + "#k\r\n";

				textz += "进阶强化所需道具：#b#i" + 强化材料_2 + "#2张#t" + 强化材料_2 + "##k\r\n\r\n";

				textz += "强化成功几率：#r2%#k\r\n\r\n";
				
				textz += "强化所需金币：#r2000万#k\r\n\r\n";

				textz += "是否毁坏装备：#r是#k\r\n\r\n";

				textz += "#L39##d使用#b#i" + 保护卷轴 + "##t" + 保护卷轴 + "##r - 强化失败，装备保留#k";
				//textz += "		#L18##d对装备进行强化 - 强化失败，装备损坏#k#l\r\n\r\n";
				

				cm.sendSimple(textz);
















			} else {
				cm.sendYesNo("无法使用此功能，请确认是否达到最高星级。");
				cm.dispose();


				
				
			}
			


























		} else if (status == 1) {
			var 装备ID = cm.getInventory(1).getItem(1).getId();
			//--------------①星强化--------------//
			if (selection == 0) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
				}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					var statup = new java.util.ArrayList();
					var item = cm.getInventory(1).getItem(1).copy();
					var Name = 一星属性;
					item.setStr(Name);
					item.setInt(Name);
					item.setLuk(Name);
					item.setDex(Name);
					item.setWatk(Name);
					item.setMatk(Name);
					item.setOwner("①星");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(强化材料_1, -1);
					cm.gainMeso(-10000000);
					cm.sendOk("装备升星成功。");
					cm.dispose();
				}
				//--------------②星强化--------------//
			} else if (selection == 1) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 二星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 二星属性;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("②星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------③星强化--------------//
			} else if (selection == 2) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 三星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 三星属性;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("③星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------④星强化--------------//
			} else if (selection == 3) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 四星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 四星属性;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("④星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⑤星强化--------------//
			} else if (selection == 4) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 五星属性;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("⑤星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⑥星强化--------------//
			} else if (selection == 5) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 六星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 六星属性;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("⑥星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⑦星强化--------------//
			} else if (selection == 6) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 七星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 七星属性;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("⑦星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⑧星强化--------------//
			} else if (selection == 7) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 八星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 八星属性;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("⑧星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⑨星强化--------------//
			} else if (selection == 8) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 九星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 九星属性;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("⑨星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⑩星强化--------------//
			} else if (selection == 9) {
				if (cm.haveItem(强化材料_1, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_1 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十星属性;
						item.setStr(Name);
						item.setInt(Name);
						item.setLuk(Name);
						item.setDex(Name);
						item.setWatk(Name);
						item.setMatk(Name);
						item.setOwner("⑩星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(强化材料_1, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⑾星强化--------------//
			} else if (selection == 10) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十一星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十一星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⑾星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
				//--------------⑾星强化--------------//
			} else if (selection == 11) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十一星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十一星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⑾星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.gainItem(保护卷轴, -1);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-10000000);
						cm.gainItem(强化材料_2, -1);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⑿星强化--------------//
			} else if (selection == 12) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十二星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十二星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⑿星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 13) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十二星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十二星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⑿星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⒀星强化--------------//
			} else if (selection == 14) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十三星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十三星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⒀星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 15) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十三星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十三星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⒀星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⒁星强化--------------//
			} else if (selection == 16) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十四星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十四星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⒁星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 17) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十四星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十四星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⒁星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				//--------------⒂星强化--------------//
			} else if (selection == 18) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十五星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⒂星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 19) {
				if (cm.haveItem(强化材料_2, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 10000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 十五星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("⒂星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -1);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -1);
						cm.gainMeso(-10000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
				
				
			//1阶/////////
			
			
			
							//--------------1阶1星强化--------------//
			} else if (selection == 20) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶一星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶①星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 21) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶一星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶①星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶①星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
											//--------------1阶2星强化--------------//
			} else if (selection == 22) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶二星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶②星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 23) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶二星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶②星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶②星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
											//--------------1阶3星强化--------------//
			} else if (selection == 24) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶三星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶③星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 25) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶三星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶③星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶③星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
											//--------------1阶4星强化--------------//
			} else if (selection == 26) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶四星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶④星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 27) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶四星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶④星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶④星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
											//--------------1阶5星强化--------------//
			} else if (selection == 28) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十七星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶五星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑤星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 29) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十七星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶五星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑤星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶⑤星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
											//--------------1阶6星强化--------------//
			} else if (selection == 30) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶六星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑥星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 31) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶四星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑥星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶⑥星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
											//--------------1阶7星强化--------------//
			} else if (selection == 32) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶七星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑦星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 33) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶七星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑦星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶⑦星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
											//--------------1阶8星强化--------------//
			} else if (selection == 34) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶八星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑧星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 35) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十五星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶八星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑧星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶⑧星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
											//--------------1阶9星强化--------------//
			} else if (selection == 36) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十七星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶九星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑨星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 37) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十七星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶九星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑨星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶⑨星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
											//--------------1阶10星强化--------------//
			} else if (selection == 38) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else {
					if (成功几率 < 十七星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶十星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑩星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.dispose();
					} else {
						cm.gainItem(装备ID, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料和装备消失。");
						cm.dispose();
					}
				}
			} else if (selection == 39) {
				if (cm.haveItem(强化材料_2, 2) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 强化材料_2 + "##k");
					cm.dispose();
					}else if (cm.getPlayer().getMeso() < 20000000) {
					cm.sendOk("金币不足。");
					cm.dispose();
				} else if (cm.haveItem(保护卷轴, 1) == false) {
					cm.sendOk("请检查是否拥有 #b#z" + 保护卷轴 + "##k");
					cm.dispose();
				} else {
					if (成功几率 < 十七星成功率) {
						var statup = new java.util.ArrayList();
						var item = cm.getInventory(1).getItem(1).copy();
						var Name = 一阶十星属性;
						item.setStr(item.getStr() + Name);
						item.setInt(item.getInt() + Name);
						item.setLuk(item.getLuk() + Name);
						item.setDex(item.getDex() + Name);
						item.setWatk(item.getWatk() + Name);
						item.setMatk(item.getMatk() + Name);
						item.setOwner("1阶⑩星");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(强化材料_2, -2);
						cm.gainItem(保护卷轴, -1);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星成功。");
						cm.全服漂浮喇叭("彩虹岛玩家 " + cm.getChar().getName() + " 使用时装进阶功能成功进阶 [ 1阶⑩星 ] 级别的时装,鸿运当头.可喜可贺", 5120015);
						cm.dispose();
					} else {
						cm.gainItem(保护卷轴, -1);
						cm.gainItem(强化材料_2, -2);
						cm.gainMeso(-20000000);
						cm.sendOk("装备升星失败，材料消失。");
						cm.dispose();
					}
				}
				
			
			}
		
		}
	}
}