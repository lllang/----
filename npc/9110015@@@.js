status = -1;
//刚刚找你 你不在 所以我就给你写这套脚本出来了 我给你解说下 
////////////////var itemList = new Array(//首先我们要接触到的 就是 Array函数系列的运用
			/*Array(1032027,800, 1, 1), //黑水晶耳环
			如上面一排格式大概就是这样   Array(物品ID,概率,数量,播报),//物品名字
			大概格式就是这样然后我给你解说下 概率和播报这两个
			概率这个值是怎么算高或者怎么算低呢？？ 就是全部所有的物品的暴率都加起来然后用这个数除以总暴率就是 这件物品的暴率了
			播报很简单 0就是抽中奖品后不发公告内容 1就是中奖之后要发一条喇叭说 谁谁谁中奖了*/
			//玩具
			Array(1102778,100,1,1),
Array(1102668,20,1,1),
Array(1102671,10,1,1),
Array(1102601,20,1,1), 
Array(1102605,10,1,1),
Array(1102604,10,1,1),
Array(1102358,800,1,1),
Array(1102357,500,1,1),
Array(1102356,300,1,1),
Array(1102354,300,1,1),
Array(1102350,300,1,1),
Array(1102349,100,1,1),
Array(1102326,300,1,1),
Array(1102290,300,1,1),
Array(1102251,300,1,1),
Array(1102245,300,1,1),
Array(1102233,300,1,1),
Array(1102232,300,1,1),
Array(1102230,300,1,1),
Array(1102229,300,1,1),
Array(1102225,300,1,1),
Array(1102224,300,1,1),
Array(1102222,300,1,1),  
Array(1102220,300,1,1),
Array(1102218,300,1,1),
Array(1100004,300,1,1),
Array(1101000,300,1,1),
Array(1102142,300,1,1),
Array(1102152,300,1,1),
Array(1102163,300,1,1),
Array(1102202,300,1,1),
Array(1102212,300,1,1),
Array(1102217,300,1,1),


/////////////////////////////////////////////????
Array(1702093,500,1,1),
Array(1702100,500,1,1),
Array(1702149,500,1,1),
Array(1702150,500,1,1),
Array(1702151,500,1,1),
Array(1702152,500,1,1),
Array(1702154,500,1,1),
Array(1702210,500,1,1),
Array(1702212,500,1,1),
Array(1702213,500,1,1),
Array(1702216,500,1,1),
Array(1702246,500,1,1),
Array(1702240,500,1,1),
Array(1702239,500,1,1),
Array(1702248,500,1,1),
Array(1702249,500,1,1),
Array(1702250,500,1,1),
Array(1702256,500,1,1),
Array(1702257,500,1,1),
Array(1702258,500,1,1),
Array(1702259,500,1,1),
Array(1702260,500,1,1),
Array(1702262,500,1,1),
Array(1702263,500,1,1),
Array(1702274,500,1,1),
Array(1702295,500,1,1),
Array(1702296,500,1,1),
Array(1702299,500,1,1),
Array(1702300,500,1,1),
Array(1702302,500,1,1),
Array(1702303,500,1,1),
Array(1702304,500,1,1),
Array(1702305,500,1,1),
Array(1702306,500,1,1),
Array(1702310,500,1,1),
Array(1702313,500,1,1),
Array(1702315,500,1,1),
Array(1702317,500,1,1),
Array(1702318,500,1,1),
Array(1702319,500,1,1),
Array(1702320,500,1,1),
Array(1702321,500,1,1),
Array(1702322,500,1,1),
Array(1702323,500,1,1),
Array(1702330,500,1,1),
Array(1702334,500,1,1),
Array(1702347,500,1,1),
Array(1702348,500,1,1),
Array(1702350,500,1,1),
Array(1702352,500,1,1),
Array(1702357,100,1,1),
Array(1702365,500,1,1),
Array(1702367,100,1,1),
Array(1702368,100,1,1),
Array(1702366,1000,1,1),
Array(1702371,500,1,1),
Array(1702372,1000,1,1),
Array(1702373,500,1,1),
Array(1702375,100,1,1),
Array(1702379,500,1,1),
Array(1702382,300,1,1),
Array(1702390,500,1,1),
Array(1702393,1000,1,1),
Array(1702392,1000,1,1),
Array(1702399,500,1,1),
Array(1702400,1000,1,1),
Array(1702401,1100,1,1),
Array(1702402,1100,1,1),
Array(1702403,1100,1,1),
Array(1702405,700,1,1),
Array(1702408,1000,1,1),
Array(1702415,1000,1,1),
Array(1702423,500,1,1),
Array(1702424,1000,1,1),
Array(1702426,500,1,1),
Array(1702442,500,1,1),
Array(1702444,500,1,1),
Array(1702447,500,1,1),
Array(1702451,500,1,1),
Array(1702452,1500,1,1),
Array(1702453,300,1,1),
Array(1702454,500,1,1),
Array(1702455,300,1,1),
Array(1702456,300,1,1),
Array(1702457,500,1,1),
Array(1702458,500,1,1),
Array(1702461,1000,1,1),
Array(1702463,500,1,1),
Array(1702464,400,1,1),
Array(1702466,500,1,1),
Array(1702468,300,1,1),
Array(1702469,500,1,1),
Array(1702473,500,1,1),
Array(1702480,1000,1,1),
Array(1702483,1200,1,1),
Array(1702485,800,1,1),
Array(1702486,500,1,1),
Array(1702487,300,1,1),
Array(1702488,500,1,1),
Array(1702497,500,1,1),
Array(1702499,500,1,1),
Array(1702501,100,1,1),
Array(1702502,1500,1,1),
Array(1702503,300,1,1),
Array(1702504,300,1,1),
Array(1702505,300,1,1),
Array(1702506,1500,1,1),
Array(1702512,1500,1,1),
Array(1702535,1500,1,1),
Array(1702538,500,1,1),
Array(1702541,1500,1,1),
Array(1702547,1500,1,1),
Array(1702549,500,1,1),
Array(1702550,500,1,1),
Array(1702551,500,1,1),
Array(1702553,500,1,1),
Array(1702554,500,1,1),
Array(1702562,500,1,1),
Array(1702565,300,1,1),
Array(1702571,100,1,1),
Array(1702574,100,1,1),
Array(1702575,300,1,1),
Array(1702576,300,1,1),
Array(1702586,1500,1,1),
Array(1702587,1000,1,1),
Array(1702588,1500,1,1),
Array(1702589,300,1,1),
Array(1702590,500,1,1),
Array(1702591,100,1,1),
Array(1702593,300,1,1),
Array(1702594,500,1,1),
Array(1702595,200,1,1),
Array(1702598,500,1,1),
Array(1702608,500,1,1),
Array(1702617,300,1,1),
Array(1702620,300,1,1),
Array(1702623,500,1,1),
Array(1702624,500,1,1),
Array(1702627,200,1,1),
Array(1702628,500,1,1),
Array(1702637,200,1,1),
Array(1702132,1500,1,1),
Array(1702277,500,1,1),
Array(1702288,500,1,1),
Array(1702376,200,1,1),
Array(1702432,1000,1,1),
Array(1702437,200,1,1),
Array(1702527,300,1,1),
Array(1702528,200,1,1),
Array(1702529,300,1,1),
Array(1702530,200,1,1),
Array(1702533,200,1,1),
Array(1702534,100,1,1),
Array(1702544,200,1,1),
Array(1702623,1000,1,1),
Array(1702374,200,1,1),
Array(1702390,200,1,1),
Array(1702261,1200,1,1),
Array(1702549,200,1,1)
			
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
        if (cm.haveItem(4000463, 1)) {
            cm.sendYesNo("只要你有#v4000463#，就可以随机可以获得以下物品，99%获得\r\n\#b是否消耗 #r1#r个#b#v4000463#来1发？?"+selStr);
        } else {
            cm.sendOk("只要你有#v4000463#，就可以随机获得以下物品，99%获得\r\n\#b是否消耗 #r1#r个#b#v4000463#来1发？\n"+selStr);
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
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "超酷点装", "运气真好，获得了极品道具，大家也来试试把！");
            if (item != -1) {
					cm.gainItem(4000463, -1);
				if (itemId==1442029){
					cm.gainItem(1442029,-1); //优秀玩家勋章
				    cm.gainItem(1442029,0,0,0,0,0,0,175,0,0,0,0,0,0,0); //优秀玩家勋章
				}
                cm.sendOk("你获得了 #b#t" + item + "##k " + quantity + "个。");
            } else {
                cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
            }
            status = -1;
        } else {
            cm.sendOk("今天的运气可真差，什么都没有拿到。\r\n(获得了安慰奖：白雪人法老的蓝宝石。)");
           cm.gainItem(4000463, -1);
            cm.gainItem(4001322, 1);
            status = -1;
        }
    }
}
