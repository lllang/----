var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 大心 = "#fEffect/CharacterEff/1051295/0/0#";
var 琴符 = "#fEffect/CharacterEff/1003252/0/0#";
var 小雪花 = "#fEffect/CharacterEff/1003393/0/0#";
var 音符 = "#fEffect/CharacterEff/1032063/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var 完成 = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var 正在进行中蓝 = "#fUI/UIWindow/MonsterCarnival/icon1#";
var 完成红 = "#fUI/UIWindow/MonsterCarnival/icon0#";
var 礼包物品 = "#v1302000#";
var x1 = "1302000,+1";// 物品ID,数量
var x2;
var x3;
var x4;
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon2/7#";
var 美化ne = "#fUI/UIWindow/Quest/icon6/7#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var selec;
var sele;
var hsddd = 29;
var hsjns = Array(1432137,2290003,2290014,2290015,2290008,2290009,2290000,2290001,2290006,2290007,2290004,2290005,2290010,2290011,2290016,2290017,2290022,2290023,2290012,2290013,2290026,2290027,2290024,2290025,2290028,2290029,2290036,2290037,2290038,2290039,2290040,2290041,2290030,2290031,2290044,2290045,2290032,2290033,2290042,2290043,2290046,2290047,2290050,2290051,2290034,2290035,2290206,2290207,2290048,2290049,2290056,2290057,2290052,2290053,2290054,2290055,2290060,2290061,2290058,2290059,2290062,2290063,2290064,2290065,2290066,2290067,2290070,2290071,2290068,2290069,2290074,2290075,2290072,2290073,2290076,2290077,2290078,2290079,2290080,2290081,2290082,2290083,2290084,2290085,2290088,2290089,2290086,2290087,2290092,2290093,2290094,2290095,2290090,2290091,2290112,2290113,2290124,2290114,2290117,2290118,2290123,2290121,2290122,2290115,2290116,2290119,2290120,2290097,2290098,2290099,2290100,2290101,2290102,2290103,2290104,2290105,2290108,2290110,2290111,2290021,2290106,2290107,2290096,2290125);//技能书
var hsks = Array(
//矿石 物品ID 单价
Array(4010000,1),//青铜母矿
Array(4011000,10),//青铜
Array(4010001,1),//钢铁母矿
Array(4011001,10),//钢铁
Array(4010002,1),//锂矿石母矿
Array(4011002,10),//锂矿石
Array(4010003,1),//朱矿石母矿
Array(4011003,10),//朱矿石
Array(4010004,1),//银的母矿
Array(4011004,10),//银块
Array(4010005,1),//紫矿石母矿
Array(4011005,10),//紫矿石
Array(4010006,1),//黄金母矿
Array(4011006,10),//黄金
Array(4020000,1),//石榴石母矿
Array(4021000,10),//石榴石
Array(4020001,1),//紫水晶母矿
Array(4021001,10),//紫水晶
Array(4020002,1),//海蓝石母矿
Array(4021002,10),//海蓝宝石
Array(4020003,1),//祖母绿母矿
Array(4021003,10),//祖母绿
Array(4020004,1),//蛋白石母矿
Array(4021004,10),//蛋白石
Array(4020005,1),//蓝宝石母矿
Array(4021005,10),//蓝宝石
Array(4020006,1),//黄晶母矿
Array(4021006,10),//黄晶
Array(4020007,1),//钻石母矿
Array(4021007,10),//钻石
Array(4020008,1),//黑水晶母矿
Array(4021008,10)//黑水晶
);
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
                text += "";
            }

				

text += "\r\n          "+爱心+"#e欢迎使用#b"+爱心+"#r彩虹回收功能#k"+音符+"  #n\r\n\r\n\r\n"   
text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
text += "#L1#"+爱心+"武器回收"+爱心+"#l      #L2#"+爱心+"卷轴回收"+爱心+"#l\r\n\r\n"
text += "#L6#"+爱心+"高级武器"+爱心+"#l      #L4#"+爱心+"暴君分解"+爱心+"#l\r\n\r\n"
text += "#L5#"+爱心+"收技能书"+爱心+"#l      #L3#"+爱心+"矿石回收"+爱心+"#l\r\n\r\n"	
text += "#L7#"+爱心+"矿石回收2"+爱心+"#l     #L7#"+爱心+"矿石回收2"+爱心+"#l\r\n\r\n"
text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"		 
cm.sendSimple(text);  
} else if(status == 1){
			if (selection == 5) {
				var text ="系统自动检测到你可以回收的技能书如下:\r\n\r\n";
				for(var i = 0; i < hsjns.length; i++){
					var hssl = cm.getPlayer().getItemQuantity(hsjns[i], false);
					if(hssl != 0){
						text += "#v"+hsjns[i]+"##t"+hsjns[i]+"# × "+hssl+"\r\n";
						hsddd += hssl;
					}
				}
				text += "一共可以回收 #r#e"+hsddd+"#n#k 点抵用";
				sele = 0;
				cm.senNXesNo(text);
				
		}else if (selection == 1) {
            cm.openNpc(9900004, 20040);

        }else if (selection == 2) {
            cm.openNpc(9900004, 20041);

        } else if (selection == 4) {
            cm.openNpc(9900004, 35);

        }else if (selection == 6) {
            cm.openNpc(9900004, 20042);
			
		}else if (selection == 7) {
            cm.openNpc(2070000, 3);
			
		}else if (selection == 8) {
            cm.openNpc(9900004, 520);

        } else if (selection == 3) {
				var text ="系统自动检测到你可以回收的矿石如下:\r\n\r\n";
				for(var i = 0; i < hsks.length; i++){
					var hssl = cm.getPlayer().getItemQuantity(hsks[i][0], false);
					var hssl1 = hssl * hsks[i][1];
					if(hssl != 0){
						text += "#v"+hsks[i][0]+"##t"+hsks[i][0]+"# × "+hssl+"  #r#e"+hssl1+"#n#k点抵用\r\n";
						hsddd += hssl1;
					}
				}
				text += "一共可以回收 #r#e"+hsddd+"#n#k 点抵用";
				sele = 1;
				cm.senNXesNo(text);
				
			}
		} else if(status == 2){
			if(sele == 0){
				if(hsddd != 0){
					for(var i = 0; i < hsjns.length; i++){
						cm.removeAll(hsjns[i]);
					}
					cm.gainNX(hsddd);
					cm.sendOk("兑换成功~!获得了 "+hsddd+" 点抵用");
					cm.喇叭(1, "蓝蜗牛[" + cm.getPlayer().getName() + "]通过技能回收站换取了"+hsddd+" 点抵用");
					cm.dispose();
				} else {
					cm.sendOk("你没有可以回收的技能书哦~!");
					cm.dispose();
				}
			} else if(sele == 1){
				if(hsddd != 0){
					for(var i = 0; i < hsks.length; i++){
						cm.removeAll(hsks[i][0]);
					}
					cm.gainNX(hsddd);
					cm.sendOk("兑换成功~!获得了 "+hsddd+" 点抵用");
					cm.喇叭(1, "蓝蜗牛[" + cm.getPlayer().getName() + "]通过矿石回收站换取了"+hsddd+" 点抵用");
					cm.dispose();
				} else {
					cm.sendOk("你没有可以回收的矿石哦~!");
					cm.dispose();
				}
			} else {
				cm.sendOk(sele);
			}
		}
    }
}
