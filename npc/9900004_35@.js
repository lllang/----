/*
 便捷功能
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
			
			//cm.喇叭(2,"玩家：["+cm.getName()+"]");
				
            text = "顶级装备回收\r\n";
			text += "当前纪念币有:#c4000463#个\r\n"
            text += "#L0##v1432182##r红色武器系列 - 兑换50纪念币#k#l\r\n";
            text += "#L1##v1102481##r暴君披风系列 - 兑换50纪念币#K#l\r\n";
            text += "#L2##v1072743##r暴君鞋子系列 - 兑换50纪念币#K#l\r\n";
            text += "#L3##v1132174##r暴君腰带系列 - 兑换50纪念币#K#l\r\n";
            //text += "#L4##v1032219##r神话耳环回收 - 兑换100纪念币#K#l\r\n";
            text += "#L5##v2290096##r冒险岛勇士回收 - 兑换10纪念币#K#l\r\n";
            //text += "#L2##e#r删除消耗类#v2060000##v2061000##v2000000##v2000001##v2000002##v2000003##l\r\n";
            //text += "#L3##e#r删除其他类#v4130000##v4130001##v4130002##v4130003#等等辅助促进剂#l\r\n";
            //text += "#L2##e#r领取女生认证称号。#l\r\n";
            text += "\r\n\r\n\r\n\r\n";
			
					if (cm.getInventory(4).isFull(0)) {//前面的2对应装备第二栏，也就是消耗 后面就是格数
					cm.sendOk("其他栏空间不足请及时清理。");//判断不等于，就提示对话
					cm.dispose();
					}
            cm.sendSimple(text);
        }else if (status == 1) {
			if(selection==0){
                kuangshi1 = 0;
			text = "请选择你要回收的装备 - 50纪念币.\r\n#r*一旦选择就会回收，慎重选择！#k\r\n\r\n";
			text += "当前纪念币:#c4000463#\r\n"
            text += "#L0#- 拥有：#r#c1432182##k 个。#r#v1432182##z1432182##k		#l\r\n";
            text += "#L1#- 拥有：#r#c1402214##k 个。#r#v1402214##z1402214##k		#l\r\n";
            text += "#L2#- 拥有：#r#c1382226##k 个。#r#v1382226##z1382226##k		#l\r\n";
            text += "#L27#- 拥有：#r#c1422156##k 个。#r#v1422156##z1422156##k		#l\r\n";
            text += "#L28#- 拥有：#r#c1442182##k 个。#r#v1442182##z1442182##k		#l\r\n";
            text += "#L3#- 拥有：#r#c1452220##k 个。#r#v1452220##z1452220##k		#l\r\n";
            text += "#L4#- 拥有：#r#c1462208##k 个。#r#v1462208##z1462208##k		#l\r\n";
            text += "#L5#- 拥有：#r#c1332242##k 个。#r#v1332242##z1332242##k		#l\r\n";
            text += "#L6#- 拥有：#r#c1472230##k 个。#r#v1472230##z1332242##k		#l\r\n";
            text += "#L7#- 拥有：#r#c1482183##k 个。#r#v1482183##z1472230##k		#l\r\n";
            text += "#L8#- 拥有：#r#c1492194##k 个。#r#v1492194##z1482183##k		#l\r\n";
            //text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
			}else if(selection==1){
			text = "请选择你要回收的装备 - 50纪念币.\r\n#r*一旦选择就会回收，慎重选择！#k\r\n\r\n";
			text += "当前纪念币:#c4000463#\r\n"
            text += "#L9#- 拥有：#r#c1102481##k 个。#r#v1102481##z1102481##k		#l\r\n";
            text += "#L10#- 拥有：#r#c1102482##k 个。#r#v1102482##z1102482##k		#l\r\n";
            text += "#L11#- 拥有：#r#c1102483##k 个。#r#v1102483##z1102483##k		#l\r\n";
            text += "#L12#- 拥有：#r#c1102484##k 个。#r#v1102484##z1102484##k		#l\r\n";
            text += "#L13#- 拥有：#r#c1102485##k 个。#r#v1102485##z1102485##k		#l\r\n";
            cm.sendSimple(text);
			}else if(selection==2){
			text = "请选择你要回收的装备 - 50纪念币.\r\n#r*一旦选择就会回收，慎重选择！#k\r\n\r\n";
			text += "当前纪念币:#c4000463#\r\n"
            text += "#L14#- 拥有：#r#c1072743##k 个。#r#v1072743##z1072743##k		#l\r\n";
            text += "#L15#- 拥有：#r#c1072744##k 个。#r#v1072744##z1072744##k		#l\r\n";
            text += "#L16#- 拥有：#r#c1072745##k 个。#r#v1072745##z1072745##k		#l\r\n";
            text += "#L17#- 拥有：#r#c1072746##k 个。#r#v1072746##z1072746##k		#l\r\n";
            text += "#L18#- 拥有：#r#c1072747##k 个。#r#v1072747##z1072747##k		#l\r\n";
            cm.sendSimple(text);
			}else if(selection==3){
			text = "请选择你要回收的装备 - 50纪念币.\r\n#r*一旦选择就会回收，慎重选择！#k\r\n\r\n";
			text += "当前纪念币:#c4000463#\r\n"
            text += "#L19#- 拥有：#r#c1132174##k 个。#r#v1132174##z1132174##k		#l\r\n";
            text += "#L20#- 拥有：#r#c1132175##k 个。#r#v1132175##z1132175##k		#l\r\n";
            text += "#L21#- 拥有：#r#c1132176##k 个。#r#v1132176##z1132176##k		#l\r\n";
            text += "#L22#- 拥有：#r#c1132177##k 个。#r#v1132177##z1132177##k		#l\r\n";
            text += "#L23#- 拥有：#r#c1132178##k 个。#r#v1132178##z1132178##k		#l\r\n";
            cm.sendSimple(text);
			}else if(selection==4){
			text = "请选择你要回收的装备 - 100纪念币.\r\n#r*一旦选择就会回收，慎重选择！#k\r\n\r\n";
			text += "当前纪念币:#c4000463#\r\n"
            text += "#L24#- 拥有：#r#c1032219##k 个。#r#v1032219##z1032219##k		#l\r\n";
            cm.sendSimple(text);
			}else if(selection==5){
			text = "请选择你要回收的技能书 - 10纪念币.\r\n#r*一旦选择就会回收，慎重选择！#k\r\n\r\n";
			text += "当前纪念币:#c4000463#\r\n"
            text += "#L25#- 拥有：#r#c2290096##k 个。#r#v2290096##z2290096##k	#l\r\n";
            text += "#L26#- 拥有：#r#c2290125##k 个。#r#v2290125##z2290125##k	#l\r\n";
            cm.sendSimple(text);
			}
		}else if (status == 2) {
			if(selection==0){
				if(cm.haveItem(1432182,1)){
				cm.gainItem(1432182,-1); //黑猫
				cm.gainItem(4000463,50); //加减纪念币
				//cm.setmoneyb(+50);  //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1432182##z1432182# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==1){
              if(cm.haveItem(1402214,1)){
				cm.gainItem(1402214,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1402214##z1402214# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==27){
              if(cm.haveItem(1422156,1)){
				cm.gainItem(1422156,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1422156##z1422156# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==28){
              if(cm.haveItem(1442182,1)){
				cm.gainItem(1442182,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1442182##z1442182# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==2){
              if(cm.haveItem(1382226,1)){
				cm.gainItem(1382226,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1382226##z1382226# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==3){
              if(cm.haveItem(1452220,1)){
				cm.gainItem(1452220,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1452220##z1452220# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==4){
              if(cm.haveItem(1462208,1)){
				cm.gainItem(1462208,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1462208##z1462208# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==5){
              if(cm.haveItem(1332242,1)){
				cm.gainItem(1332242,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1332242##z1332242# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==6){
              if(cm.haveItem(1472230,1)){
				cm.gainItem(1472230,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1472230##z1472230# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==7){
              if(cm.haveItem(1482183,1)){
				cm.gainItem(1482183,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1482183##z1482183# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==8){
              if(cm.haveItem(1492194,1)){
				cm.gainItem(1492194,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1492194##z1492194# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==9){
              if(cm.haveItem(1102481,1)){
				cm.gainItem(1102481,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1102481##z1102481# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==10){
              if(cm.haveItem(1102482,1)){
				cm.gainItem(1102482,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1102482##z1102482# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==11){
              if(cm.haveItem(1102483,1)){
				cm.gainItem(1102483,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1102483##z1102483# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==12){
              if(cm.haveItem(1102484,1)){
				cm.gainItem(1102484,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1102484##z1102484# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==13){
              if(cm.haveItem(1102485,1)){
				cm.gainItem(1102485,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1102485##z1102485# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==14){
              if(cm.haveItem(1072743,1)){
				cm.gainItem(1072743,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1072743##z1072743# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==15){
              if(cm.haveItem(1072744,1)){
				cm.gainItem(1072744,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1072744##z1072744# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==16){
              if(cm.haveItem(1072745,1)){
				cm.gainItem(1072745,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1072745##z1072745# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==17){
              if(cm.haveItem(1072746,1)){
				cm.gainItem(1072746,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1072746##z1072746# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==18){
              if(cm.haveItem(1072747,1)){
				cm.gainItem(1072747,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1072747##z1072747# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==19){
              if(cm.haveItem(1132174,1)){
				cm.gainItem(1132174,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1132174##z1132174# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==20){
              if(cm.haveItem(1132175,1)){
				cm.gainItem(1132175,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1132175##z1132175# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==21){
              if(cm.haveItem(1132176,1)){
				cm.gainItem(1132176,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1132176##z1132176# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==22){
              if(cm.haveItem(1132177,1)){
				cm.gainItem(1132177,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1132177##z1132177# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==23){
              if(cm.haveItem(1132178,1)){
				cm.gainItem(1132178,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,50); //加减纪念币
				cm.sendOk("回收成功#r50#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1132178##z1132178# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==24){
              if(cm.haveItem(1032219,1)){
				cm.gainItem(1032219,-1); //黑猫
				//cm.setmoneyb(+50);  //加减纪念币
				cm.gainItem(4000463,100); //加减纪念币
				cm.sendOk("回收成功#r100#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v1032219##z1032219# - 你并没有这个装备。");
				cm.dispose();
				}	
			}else if(selection==25){
              if(cm.haveItem(2290096,1)){
				cm.gainItem(2290096,-1); //黑猫
				//cm.setmoneyb(+20);  //加减纪念币
				cm.gainItem(4000463,10); //加减纪念币
		        cm.worldMessage(6,"蘑菇仔玩家：["+cm.getName()+"]在系统里回收了冒险岛勇士70,兑换了10纪念币.");
				cm.sendOk("回收成功#r10#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v2290096##z2290096# - 你并没有这个技能书。");
				cm.dispose();
				}	
			}else if(selection==26){
              if(cm.haveItem(2290125,1)){
				cm.gainItem(2290125,-1); //黑猫
				//cm.setmoneyb(+20);  //加减纪念币
				cm.gainItem(4000463,10); //加减纪念币
		        cm.worldMessage(6,"蘑菇仔玩家：["+cm.getName()+"]在系统里回收了冒险岛勇士50,兑换了10纪念币.");
				cm.sendOk("回收成功#r10#k纪念币。");
				cm.dispose();
				}else{
				cm.sendOk("#v2290125##z2290125# - 你并没有这个技能书。");
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
					cm.gainMeso(-10000000); //加减金币
					cm.gainItem(1003112,30,0,0,0,0,0,2,0,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶扎昆头盔！");
                    cm.sendOk("合成物品成功！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==1){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) &&cm.haveItem(4251102, 5) &&cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //加减金币
					cm.gainItem(1003112,0,30,0,0,0,0,2,0,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶扎昆头盔！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==2){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) &&cm.haveItem(4250902, 5) &&cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //加减金币
					cm.gainItem(1003112,0,0,0,21,0,0,0,2,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶扎昆头盔！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==3){
                if (cm.haveItem(4011008, 5) && cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 10) && cm.getPlayer().getMeso() >10000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-10);
					cm.gainItem(4011008,-5);
					cm.gainMeso(-10000000); //加减金币
					cm.gainItem(1003112,0,0,30,0,0,0,2,0,0,0,30,30,0,0);
//cm.gainItem(1002939,0,500,0,0,200,200,350,11111,0,0,0,0,5,5);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶扎昆头盔！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==4){//4250802 4251102 4250902 4251002
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250802, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250802,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //加减金币
					cm.gainItem(1012319,15,0,0,0,0,0,5,0,0,0,30,30,0,0);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶力量8周年点点红！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==5){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251102, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251102,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //加减金币
					cm.gainItem(1012319,0,15,0,0,0,0,5,0,0,0,30,30,0,0);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶敏捷8周年点点红！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==6){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4250902, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4250902,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //加减金币
					cm.gainItem(1012319,0,0,0,10,0,0,0,5,0,0,30,30,0,0);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶智力8周年点点红！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==7){
                if (cm.haveItem(1002357, 1) && cm.haveItem(4251002, 2) && cm.haveItem(4011008, 2) && cm.haveItem(4001080, 10)  && cm.getPlayer().getMeso() >20000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-2);
					cm.gainItem(4011008,-2);
					cm.gainItem(4001080,-10);
					cm.gainMeso(-20000000); //加减金币
					cm.gainItem(1012319,0,0,15,0,0,0,5,0,0,0,30,30,0,0);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶运气8周年点点红！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==8){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //加减金币
					cm.gainItem(1052314,30,0,0,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了140级战士套服！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==9){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //加减金币
					cm.gainItem(1052316,0,30,0,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了140级弓箭手套服！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==10){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //加减金币
					cm.gainItem(1052315,0,0,0,20,0,0,0,2,0,0,55,55,0,0);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了140级法师套服！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==11){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //加减金币
					cm.gainItem(1052317,0,0,30,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了140级飞侠套服！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==12){
                if (cm.haveItem(1002357, 1) &&cm.haveItem(4251002, 5) &&cm.haveItem(4001080, 5) && cm.getPlayer().getMeso() >30000000){
					cm.gainItem(1002357,-1);
					cm.gainItem(4251002,-5);
					cm.gainItem(4001080,-5);
					cm.gainMeso(-30000000); //加减金币
					cm.gainItem(1052318,0,0,0,0,0,0,2,0,0,0,55,55,0,0);
                    cm.sendOk("合成物品成功！");
					cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了140级海盗套服！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==13){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4250802, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4250802,-10);
					cm.gainItem(4001094,-20);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //加减金币
					cm.gainItem(1122076,30,0,0,0,0,0,30,0,0,0,0,0,0,0);
                    cm.sendOk("合成物品成功！");
					//cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶黑龙王项链！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==14){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4251102, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4251102,-10);
					cm.gainItem(4001094,-20);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //加减金币
					cm.gainItem(1122076,0,30,0,0,0,0,30,0,0,0,0,0,0,0);
                    cm.sendOk("合成物品成功！");
					//cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶黑龙王项链！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==15){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4250902, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4250902,-10);
					cm.gainItem(4001094,-20);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //加减金币
					cm.gainItem(1122076,0,0,0,25,0,0,0,10,0,0,0,0,0,0);
                    cm.sendOk("合成物品成功！");
					//cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶黑龙王项链！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			if (zhakuntou==16){
                if (cm.haveItem(1122000, 1) &&cm.haveItem(4251002, 10) &&cm.haveItem(4001094, 20) && cm.haveItem(4011008, 10) && cm.getPlayer().getMeso() >100000000){
					cm.gainItem(1122000,-1);
					cm.gainItem(4251002,-10);
					cm.gainItem(4001094,-20);
					cm.gainItem(4011008,-10);
					cm.gainMeso(-100000000); //加减金币
					cm.gainItem(1122076,0,0,30,0,0,0,30,0,0,0,0,0,0,0);
                    cm.sendOk("合成物品成功！");
					//cm.喇叭(1,"玩家："+cm.getName()+" 努力制作了进阶黑龙王项链！");
					cm.dispose();
                } else {
                    cm.sendOk("未达到合成需求无法合成，请检查合成需要的东西。");
                    cm.dispose()
                }
			}
			
			
		}
    }
}
