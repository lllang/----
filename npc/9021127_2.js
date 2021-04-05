var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
			cm.sendOk("感谢使用~!");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
if(cm.getInventory(1).getItem(1) == null || cm.getInventory(1).getItem(2) == null){
	cm.sendOk("如果要强化。请把物品放在背包第一格和第二格!");
	cm.dispose();
	return;
}
if (cm.getLevel() < 210){
            cm.sendOk("210级以上才可以转移！");
			return;//结束
			}
if(cm.getJob() >= 200 && cm.getJob() <= 299){
	cm.sendOk("法师太强大禁止转移");
	cm.dispose();	
	return;
}
if(cm.getInventory(1).getItem(2).getStr()>=20000||cm.getInventory(1).getItem(2).getDex()>=20000||cm.getInventory(1).getItem(2).getLuk()>=20000||cm.getInventory(1).getItem(2).getInt()>=20000||cm.getInventory(1).getItem(2).getWatk()>=20000||cm.getInventory(1).getItem(2).getMatk()>=20000) {
    cm.sendOk("第二格装备属性不能超过20000，请换件装备");
	cm.dispose();
	return;
}

if(cm.getInventory(1).getItem(1).getItemId() == 1003274 || cm.getInventory(1).getItem(2).getItemId() == 1003274){
	cm.sendOk("#v1003274##t1003274#不能放在第一格或者第二格强化!");
	cm.dispose();
	return;
}if(cm.getInventory(1).getItem(1).getItemId() == 1112907 || cm.getInventory(1).getItem(2).getItemId() == 1112907){
	cm.sendOk("#v1112907##t1112907#不可能被你锁住的，换个装备吧!");
	cm.dispose();
	return;
}
		if (cm.getBossLog("转移属性") == 1) {
            cm.sendOk("嗯...一天只能转移一次属性哦~!");
            cm.dispose();
            return;
        }
		
		
		力量2 = cm.getInventory(1).getItem(2).getStr();
		敏捷2 = cm.getInventory(1).getItem(2).getDex();
		运气2 = cm.getInventory(1).getItem(2).getLuk();
		智力2 = cm.getInventory(1).getItem(2).getInt();
		攻击2 = cm.getInventory(1).getItem(2).getWatk();
		魔法2 = cm.getInventory(1).getItem(2).getMatk();
		力量1 = (cm.getInventory(1).getItem(1).getStr())/2;
		敏捷1 = (cm.getInventory(1).getItem(1).getDex())/2;
		运气1 = (cm.getInventory(1).getItem(1).getLuk())/2;
		智力1 = (cm.getInventory(1).getItem(1).getInt())/2;
		攻击1 = (cm.getInventory(1).getItem(1).getWatk())/2;
		魔法1 = (cm.getInventory(1).getItem(1).getMatk())/2;
		var Id1 = cm.getInventory(1).getItem(1).getItemId();
		var Id2 = cm.getInventory(1).getItem(2).getItemId();
        var selStr = "您好欢迎来到#r强化中心#k\r\n#b";
			selStr +="第一格装备属性的一半 转移到第二格装备上,同时第一件装备属性将清空，并且两件装备将锁定\r\n\r\n";
            selStr += "#d#v"+Id2+"##t"+Id2+"# 属性为#k\r\n";
			selStr +="力量:"+力量2+" + "+力量1+" = "+(力量1+力量2)+"\r\n";
			selStr +="敏捷:"+敏捷2+" + "+敏捷1+" = "+(敏捷1+敏捷2)+"\r\n";
			selStr +="智力:"+智力2+" + "+智力1+" = "+(智力1+智力2)+"\r\n";
			selStr +="运气:"+运气2+" + "+运气1+" = "+(运气1+运气2)+"\r\n";
			selStr +="物理攻击"+攻击2+" + "+攻击1+" = "+(攻击1+攻击2)+"\r\n";
			selStr +="魔法攻击:"+魔法2+" + "+魔法1+" = "+(魔法1+魔法2)+"#b\r\n\r\n";
			selStr +="转移将扣除你20元宝                        #e是否转移？";
        cm.sendYesNo(selStr);
    } else if (status == 1) {
		if (cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) < 20) {
            cm.sendOk("嗯...你的元宝不足~需要20元宝!");
            cm.dispose();
            return;
        }
		cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-20);
		cm.setBossLog("转移属性");
		cm.getInventory(1).getItem(1).setStr(0);
		cm.getInventory(1).getItem(1).setDex(0);
		cm.getInventory(1).getItem(1).setInt(0);
		cm.getInventory(1).getItem(1).setLuk(0);
		cm.getInventory(1).getItem(1).setWatk(0);
		cm.getInventory(1).getItem(1).setMatk(0);
		cm.getInventory(1).getItem(2).setStr((力量1+力量2));
		cm.getInventory(1).getItem(2).setDex((敏捷1+敏捷2));
		cm.getInventory(1).getItem(2).setInt((智力1+智力2));
		cm.getInventory(1).getItem(2).setLuk((运气1+运气2));
		cm.getInventory(1).getItem(2).setWatk((攻击1+攻击2));
		cm.getInventory(1).getItem(2).setMatk((魔法1+魔法2));
		cm.getInventory(1).getItem(1).setLocked(1);
		cm.getInventory(1).getItem(2).setLocked(1);
		cm.刷新状态();
		cm.sendOk("转移成功!");
		cm.喇叭(1, "蘑菇仔玩家[" + cm.getPlayer().getName() + "]成功完成了装备属性转移！");
        cm.dispose();
    }
}