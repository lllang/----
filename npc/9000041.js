var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
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

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "我这里是点卷兑换中介！\r\n\r\n";
                text += "" + 红色箭头 + "#L1##b#e使用#v4001126# （800个） 兑换：盛大#v4031250#=1个#l \r\n\r\n"//3
				text += "" + 红色箭头 + "#L2##b#e使用#v4001126# （8000个）兑换：盛大#v4031250#=10个#l \r\n\r\n"//3
				text += "" + 红色箭头 + "#L3##b#e使用#v4001126# （32000个）兑换：盛大#v4031250#=40个#l \r\n\r\n"//3
				//text += "" + 红色箭头 + "#L3##b#e使用#v2550002# （一百个）兑换：枫叶#v2022614#=1个#l \r\n\r\n"//3
			cm.sendSimple(text);
            }
			
			
			} else if (selection == 13) {
                if(cm.getmoneyb() >= 20){
				 cm.setmoneyb(-20);	
				 cm.getPlayer().setBossLog("消费积分",1,20);
				//cm.increaseCharacterSlots(0);//不需扣除点券
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买[角色位1个]");
            cm.dispose();
			}else{
            cm.sendOk("充值币不足无法换购！");
            cm.dispose();
               }
			   
			   
        } else if (selection == 1) {
                if (cm.haveItem(4001126,800)) {
                cm.gainItem(4001126,-800);
				cm.gainItem(4031250,1);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]使用800个枫叶兑换了一个易宝~");
            cm.dispose();
			}else{
            cm.sendOk("枫叶不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 2) {
                if (cm.haveItem(4001126,8000)) {
                cm.gainItem(4001126,-8000);
				cm.gainItem(4031250,10);
cm.喇叭(1, "[" + cm.getPlayer().getName() + "]使用8000个枫叶兑换了十个易宝~~");
            cm.dispose();
			}else{
            cm.sendOk("枫叶不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 3) {
                if (cm.haveItem(4001126,32000)) {
                cm.gainItem(4001126,-32000);
				cm.gainItem(4031250,40);
cm.喇叭(1, "[" + cm.getPlayer().getName() + "]使用32000个枫叶兑换了三十个易宝~");
            cm.dispose();
			}else{
            cm.sendOk("枫叶不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 4) {
                if (cm.haveItem(4001126,9000)) {
                cm.gainItem(4001126,-9000);
				cm.gainItem(4310080,1);
cm.喇叭(1, "[" + cm.getPlayer().getName() + "]使用9000个枫叶｛成功兑换8888枫叶袋子｝感谢光临~");
            cm.dispose();
			}else{
            cm.sendOk("枫叶不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 5) {
                if (cm.haveItem(4001126,1000)) {
                cm.gainItem(4001126,-1000);
				cm.gainItem(5510000,10);
cm.喇叭(1, "[" + cm.getPlayer().getName() + "]枫叶兑换[原地复活10个]，感谢光临~");
            cm.dispose();
			}else{
            cm.sendOk("枫叶不足无法换购！");
            cm.dispose();
			}
			
			} else if (selection == 14) {
                if(cm.getPlayer().getNX() >= 10000){
                    cm.gainNX(-10000);
				 //cm.getPlayer().setBossLog("消费积分",1,30);
				cm.gainItem(5211060,1,168);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买[三倍经验卡（168小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 6) {
                if (cm.getPlayer().getNX() >= 300) {
				cm.gainNX(-300);
				cm.gainItem(5360014,1,10);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（10小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 7) {
                if (cm.getPlayer().getNX() >= 600) {
				cm.gainNX(-600);
				cm.gainItem(5360014,1,24);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（24小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 8) {
                if (cm.getPlayer().getNX() >= 2000) {
				cm.gainNX(-2000);
				cm.gainItem(5360014,1,168);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（7天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 9) {
                if (cm.getPlayer().getNX() >= 1666) {
				cm.gainNX(-1666);
				cm.gainItem(5360014,1,24);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（24小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("抵用卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 10) {
                if (cm.getPlayer().getDY() >= 600) {
				cm.gainDY(-600);
				cm.gainItem(5360014,1,3);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（3小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("抵用卷不足无法换购！");
            cm.dispose();
			}
		}
    }
}
