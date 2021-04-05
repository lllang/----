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

            cm.sendOk("感谢使用勋章升级系统！");
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
			var text = "勋章升级系统\r\n";
				text+= "#L0#1.使用 #v4030003# 方块兑换新手勋章（#v1142263#）\r\n";
				text+= "#L1#2.使用新手勋章（#v1142263#）+俄罗斯方块（#v4030004#）*20兑换6周年勋章（#v1142100#）全属性10#l\r\n";
				text+= "#L2#3.使用6周年勋章（#v1142100#）+俄罗斯方块（#v4030005#）*50兑换7周年勋章（#v1142218#）全属性+20#l\r\n";
				text+= "#L3#4.使用7周年勋章（#v1142218#）+俄罗斯方块（#v4030006#）*100兑换8周年勋章（#v1142298#）全属性+35#l\r\n";
				text+= "#L4#5.使用8周年勋章（#v1142298#）+俄罗斯方块（#v4030007#）*188兑换9周年勋章（#v1142408#）全属性+55#l\r\n";
				text+= "#L5#6.使用9周年勋章（#v1142408#）+五角星*15（#v4031514#）+英雄勋章*15（#v4031515#）兑换彩虹黄金至尊VIP（#v1142338#）全属性+88\r\n";
			cm.sendSimple(text);  
		} else if (status == 1) {
			if(selection == 0){
				cm.sendGetNumber("请输入你要兑换的数量 1:1",0,1,214755885);
			} else if(selection == 1){
				if(cm.haveItem(1142263,1) && cm.haveItem(4030004,20)){
					cm.gainItem(1142263,-1);
					cm.gainItem(4030004,-20);
					cm.gainItem(1142100,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
					cm.sendOk("兑换成功~!");
				} else {
					cm.sendOk("材料不足~!");
				}
				cm.dispose();
			} else if(selection == 2){
				if(cm.haveItem(1142100,1) && cm.haveItem(4030005,50)){
					cm.gainItem(1142100,-1);
					cm.gainItem(4030005,-50);
					cm.gainItem(1142218,20,20,20,20,20,20,20,20,20,20,20,20,20,20);
					cm.sendOk("兑换成功~!");
				} else {
					cm.sendOk("材料不足~!");
				}
				cm.dispose();
			} else if(selection == 3){
				if(cm.haveItem(1142218,1) && cm.haveItem(4030006,100)){
					cm.gainItem(1142218,-1);
					cm.gainItem(4030006,-100);
					cm.gainItem(1142298,35,35,35,35,35,35,35,35,35,35,35,35,35,35);
					cm.sendOk("兑换成功~!");
				} else {
					cm.sendOk("材料不足~!");
				}
				cm.dispose();
			} else if(selection == 4){
				if(cm.haveItem(1142298,1) && cm.haveItem(4030007,188)){
					cm.gainItem(1142298,-1);
					cm.gainItem(4030007,-188);
					cm.gainItem(1142408,55,55,55,55,55,55,55,55,55,55,55,55,55,55);
					cm.sendOk("兑换成功~!");
				} else {
					cm.sendOk("材料不足~!");
				}
				cm.dispose();
			} else if(selection == 5){
				if(cm.haveItem(1142408,1) && cm.haveItem(4031514,15) && cm.haveItem(4031515,15)){
					cm.gainItem(1142408,-1);
					cm.gainItem(4031514,-15);
					cm.gainItem(4031515,-15);
					cm.gainItem(1142338,88,88,88,88,88,88,88,88,88,88,88,88,88,88);
					cm.sendOk("兑换成功~!");
				} else {
					cm.sendOk("材料不足~!");
				}
				cm.dispose();
			}
           
        } else if(status == 2){
            if(cm.haveItem(4030003,selection)){
				cm.gainItem(4030003,-selection);
				cm.gainItem(1142263,selection);
				cm.sendOk("兑换成功");
			} else {
				cm.sendOk("材料不足");
			}
			cm.dispose();
          
                }
                }    
}



