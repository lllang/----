力量 = 0;
敏捷 = 0;
运气 = 0;
智力 = 0;
  HP = 0;
  MP = 0;
物攻 = 0;
魔攻 = 0;
物防 = 0;
魔防 = 0;
回避 = 0;
命中 = 0;
跳跃 = 0;
速度 = 0;
var itmem = 0;

var weapon = [
//[1492194,力量,敏捷,运气,智力,HP,MP,物攻,魔攻,物防,魔防,回避,命中,跳跃,速度,"装备介绍"]
[2614000,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"破功一万",300],
//[1462138,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"四维属性+88、攻击+200",88000],
//[1432118,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"四维属性+88、攻击+200",88000],
//[1402130,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"四维属性+88、攻击+200",88000],
//[1422090,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"四维属性+88、攻击+200",88000],
//[1472160,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"四维属性+88、攻击+200",88000],
//[1332237,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"四维属性+88、攻击+200",88000],
//[1382144,88,88,88,88,0,0,0,200,0,0,0,0,0,0,"四维属性+88、魔攻+200",88000],
//[1482121,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"四维属性+88、攻击+200",88000],
//[1492121,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"四维属性+88、攻击+200",88000],
//[1302107,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"四维属性+88、双攻+200",88000],




     
];

var req = [

	[2041215,2],
	
];
var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
		
		msg += "\t\t\t  #v2614000##e#r一 万 破 功 石#k#n#v2614000#\r\n"
		
        msg += "\r\n#d需要以下材料:#b ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "# 【#e#c"+req[ii][0]+"##k/#r" + req[ii][1] +"#k#n#b】";
            if (ii % 1 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#b请选择您需要的东西-----------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i][0] +"##t" + weapon[i][0] +  "##b["+weapon[i][15]+"] 点击合成#k#l\r\n";
			
			// msg += "#L100" + i + "    ##e#r直接购买 元宝售价："+weapon[i][16]+"#l#k#n\r\n";
        }    
        cm.sendSimple(msg);
		
		
		
    } else if (status == 1) {
        selectio = selection;
        cm.sendGetNumber("请你填写你要购买的数量:",0,1,100);
            
    } else if (status == 2) {
		
        selssss = selection;
		//cm.sendNext("#测试"+sels);
		if (sels >= 999) {
		
		if (sels == 1000) {
		gbcz = 0;
		} else if (sels == 1001) {
		gbcz = 1;		
		} else if (sels == 1002) {
		gbcz = 2;	
		} else if (sels == 1003) {
		gbcz = 3;
        } else if (sels == 1004) {
		gbcz = 4;
		} else if (sels == 1005) {
		gbcz = 5;
		} else if (sels == 1006) {
		gbcz = 6;
		} else if (sels == 1007) {
		gbcz = 7;
		} else if (sels == 1008) {
		gbcz = 8;
		} else if (sels == 1009) {
		gbcz = 9;
        } else if (sels == 10010) {
		gbcz = 10;	
        } else if (sels == 10011) {
		gbcz = 11;			
		}		
		
       if(cm.getInventory(1).isFull(1)){
					cm.sendOk("背包不足！");
					cm.dispose();
            return;
        }
        
            if (cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) <= weapon[gbcz][16] ) {
                cm.sendNext("#b你没有足够的元宝！#k，继续赚点卷去吧！需要"+weapon[gbcz][16]);
                cm.dispose();
                return;
            }
        选择 = 2;
        cm.sendYesNo("#b是否购买？\r\n#r #i" + weapon[gbcz][0] + "##t" + weapon[gbcz][0] + "#  #b["+weapon[gbcz][15]+"]#k\r\n");
		itmem = weapon[gbcz];		
		
		} else { //下面是需要合成
        if(cm.getInventory(1).isFull(1)){
					cm.sendOk("背包不足！");
					cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1] * selection)) {
                cm.sendNext("#b你身上没有#r足够的材料#k，继续收集材料去吧！");
                cm.dispose();
                return;
            }
        }
	    选择 = 1;
        cm.sendYesNo("#b是否要创造===========================\r\n#r #i" + weapon[0][0] + "##t" + weapon[0][0] + "#  #b["+weapon[0][15]+"]X" + selssss + "#k\r\n");
		itmem = weapon[0];
		sels2 = 0;
		}
    } else if (status == 3) {
		
		
		
		if (选择 == 2) {
		var sels = gbcz;	
		cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-weapon[sels][16]);//点劵		
		}
		if (选择 == 1) {	
		var sels = sels2;
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -(req[i][1] * selssss));
        }
		}
        cm.gainItem(weapon[0][0],selssss);
        cm.sendOk("#b已经成功创造：\r\n #r#v"+weapon[0][0]+"##t"+weapon[0][0]+"#  #b["+weapon[0][15]+"]X" + selssss + "#k");
		cm.喇叭(1, "玩家【" + cm.getPlayer().getName() + "】成功合成了一万破功石。X " + selssss);
        cm.dispose();
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
		
		
		

    }
}
