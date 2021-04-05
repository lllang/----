//importPackage(java.lang);
//importPackage(Packages.tools);
//importPackage(Packages.client);
//importPackage(Packages.server);
var 高级附魔师 = "#fEffect/SkillName1.img/1001003/高级附魔师#";
var status = 0;
var 黑水晶 = 4021008;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 忠告 = "#k温馨提示：任何非法程序和外挂封号处理.封杀侥幸心理.";
function start() {
    status = -1;
    action(1, 0, 0);
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
	    var a1 = "#L1##b力量附魔 + 5#l  #L5##b命中附魔 + 6#l  #L9##b物击附魔 + 3#l\r\n";
		var a2 = "#L2##b敏捷附魔 + 5#l  #L6##b回避附魔 + 6#l  #L10##b魔攻附魔 + 3#l\r\n";
		var a3 = "#L3##b智力附魔 + 5#l  #L7##b生命附魔 + 50#l \r\n";
		var a4 = "#L4##b运气附魔 + 5#l  #L8##b魔力附魔 + 50#l \r\n";


             cm.sendSimple(""+ 高级附魔师+"  \r\n#r       - 需要附魔的装备放在第一行第一格 -#k\r\n\r\n"+a1+""+a2+""+a3+""+a4+"");
	    } else if (selection == 1) {
		if (cm.haveItem(4032221, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032221, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,0,0,5,0,0,0,0,0,0,0);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   力量 + 5 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032221##z4032221# x 10");
			cm.dispose();
			return;
		}
		
		} else if (selection == 2) {
		if (cm.haveItem(4032221, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032221, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,0,0,0,5,0,0,0,0,0,0);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   敏捷 + 5 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032221##z4032221# x 10");
			cm.dispose();
			return;
		}
		
		} else if (selection == 3) {
		if (cm.haveItem(4032221, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032221, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,0,0,0,0,5,0,0,0,0,0);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   智力 + 5 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032221##z4032221# x 10");
			cm.dispose();
			return;
		}
		
		} else if (selection == 4) {
		if (cm.haveItem(4032221, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032221, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,0,0,0,0,0,5,0,0,0,0);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   运气 + 5 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032221##z4032221# x 10");
			cm.dispose();
			return;
		}
		
		} else if (selection == 5) {
		if (cm.haveItem(4032222, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032222, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,6,0);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   命中 + 6 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032222##z4032222# x 10");
			cm.dispose();
			return;
		}
		
				} else if (selection == 6) {
		if (cm.haveItem(4032222, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032222, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,6);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   回避 + 6 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032222##z4032222# x 10");
			cm.dispose();
			return;
		}
		
						} else if (selection == 7) {
		if (cm.haveItem(4032222, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032222, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,0,0,0,0,0,0,50,0,0,0);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   生命 + 50 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032222##z4032222# x 10");
			cm.dispose();
			return;
		}
								} else if (selection == 8) {
		if (cm.haveItem(4032222, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032222, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,50,0,0);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   魔力 + 50 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032222##z4032222# x 10");
			cm.dispose();
			return;
		}
		
										} else if (selection == 9) {
		if (cm.haveItem(4032223, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032223, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,3,0,0,0,0,0,0,0,0,0);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   物攻 + 3 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032223##z4032223# x 10");
			cm.dispose();
			return;
		}
		
												} else if (selection == 10) {
		if (cm.haveItem(4032223, 10) && cm.getMeso()>=10000 ) {
			cm.gainItem(4032223, -10);
			cm.gainMeso(-10000);
			var rand=Math.floor(Math.random()*100);
			if(rand<50){
			cm.gainEquiPproperty(0,0,3,0,0,0,0,0,0,0,0);//次数/w攻击/m攻击/力量/敏捷/智力/运气/HP/MP/命中/回避/
			cm.sendOk("#fEffect/BasicEff.img/Fishing/6#\r\n\r\n#r增加属性#k;#b   魔攻 + 3 熟练度 + 1");
			cm.setBossRankCount("附魔熟练度");    
			cm.dispose();
			return;
			}
			else {
			cm.gainEquiPproperty(0,0,0,0,0,0,0,0,0,0,0);
			cm.sendOk("很遗憾失败了。");
			cm.dispose();
			return;
				}
		} else {
			cm.sendOk("你没有#i4032223##z4032223# x 10");
			cm.dispose();
			return;
		}
    }
}
}