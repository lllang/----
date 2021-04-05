status = -1;
//刚刚找你 你不在 所以我就给你写这套脚本出来了 我给你解说下 
var itemList = new Array(//首先我们要接触到的 就是 Array函数系列的运用
			/*Array(1032027,800, 1, 1), //黑水晶耳环
			如上面一排格式大概就是这样   Array(物品ID,概率,数量,播报),//物品名字
			大概格式就是这样然后我给你解说下 概率和播报这两个
			概率这个值是怎么算高或者怎么算低呢？？ 就是全部所有的物品的暴率都加起来然后用这个数除以总暴率就是 这件物品的暴率了
			播报很简单 0就是抽中奖品后不发公告内容 1就是中奖之后要发一条喇叭说 谁谁谁中奖了*/
			//玩具
			
            Array(4310080,1, 1, 1),//燃烧的火焰刀
			
			Array(4001126,500, 1, 1),//法弗纳双刃切肉斧
			Array(4001126,500, 2, 1),//法弗纳戈耳迪锤
			Array(4001126,500, 3, 1),//法弗纳大马士革剑
			Array(4001126,500, 4, 1),//法弗纳洞察手杖
			Array(4001126,500, 5, 1),//法弗纳魔力夺取者
			Array(4001126,500, 6, 1),//法弗纳魔冠之杖
			Array(4001126,500, 7, 1),//法弗纳忏悔之剑
			Array(4001126,500, 8, 1),//法弗纳战斗切肉斧
			Array(4001126,500, 9, 1),//法弗纳闪电锤
			Array(4001126,500, 10, 1)//法弗纳贯雷枪
			
			
			/*
			
        这里很重要  这里是Array的结束段落 记住最后一排的 Array函数后面是没有逗号的  这个逗号我截图在你QQ上去 
			*/

);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("再见得把油。");
            cm.dispose();
        }
        status--;
    }
		if (status == 0) {
		selStr = "\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#i" + itemList[i][0] + ":#";
            }
        if (cm.haveItem(2550002, 100)) {
            cm.sendYesNo("只要你有#v2550002#X100，就可以随机可以获得以下物品，99%获得\r\n\#b是否消耗 #r100#r个#b#v2550002#来100发？?"+selStr);
        } else {
            cm.sendOk("请确认你是否拥有足够的#v2550002#X100，就可以随机获得以下物品，99%获得\r\n\#b是否消耗 #r100#r个#b#v2550002#来100发？\n"+selStr);
            cm.safeDispose();
        }
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
			for (var i = 0; i<100; i++){
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity );  //item = cm.gainGachaponItem(itemId, quantity, "", "");  原代码 
            if (item != -1) {
					cm.gainItem(2550002, -1);
				if (itemId==1442029){
					cm.gainItem(1442029,-1); //优秀玩家勋章
				    cm.gainItem(1442029,0,0,0,0,0,0,175,0,0,0,0,0,0,0); //优秀玩家勋章
				}
                //cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
			}
            status = -1;
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。\r\n(获得了安慰奖：白雪人法老的蓝宝石。)");
           cm.gainItem(2550002, -1);
            cm.gainItem(4001322, 1);
            status = -1;
        }
    }
}