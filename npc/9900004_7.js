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
                text += "在我这里可以购买双倍增益哦！\r\n\r\n";
                text += "" + 蓝色箭头 + "#L1##b#e#v5360016# （一天权）需要：点卷=10000点#l \r\n\r\n"//3			
                text += "" + 蓝色箭头 + "#L2##r#e#v5210003# （一天权）需要：点卷=5000点#l\r\n\r\n"//3
				text += "" + 蓝色箭头 + "#L3##b#e#v5210005# （一天权）需要：点卷=5000点#l \r\n\r\n"//3
				//text += "" + 蓝色箭头 + "#L4##r#e#v5211060# （一天权）需要：枫叶#v4001126#=8000个#l\r\n\r\n"//3
		   // text += "" + 蓝色箭头 + "#L13##r#e扩充#r角色位一个需要：充值币20个#l \r\n\r\n"//3
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
                if (cm.getPlayer().getNX() >= 10000) {
				cm.gainNX(-10000);
				cm.gainItem(5360016,1,1);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]点卷购买[双倍爆率卡（1天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 2) {
                if (cm.getPlayer().getNX() >= 5000) {
				cm.gainNX(-5000);
				cm.gainItem(5210003,1,1);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]点卷购买[双倍经验卡（1天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 3) {
                if (cm.getPlayer().getNX() >= 5000) {
				cm.gainNX(-5000);
				cm.gainItem(5210005,1,1);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]枫叶兑换[双倍经验卡（1天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 4) {
                if (cm.haveItem(4001126,8000)) {
                cm.gainItem(4001126,-8000);
				cm.gainItem(5211060,1,1);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]枫叶兑换[三倍经验卡（1天权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
            cm.dispose();
			}
        } else if (selection == 5) {
                if (cm.getPlayer().getNX() >= 150) {
				cm.gainNX(-150);
				cm.gainItem(5360014,1,3);
cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功购买[双倍爆率卡（3小时权）]，爆肝愉快~");
            cm.dispose();
			}else{
            cm.sendOk("点卷不足无法换购！");
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


