/*
雪花冒险岛演示脚本

VIP功能演示脚本(请勿用于商业)

by 皓皓

*/


var status = 0;
//·········以下为VIP地图设置,请根据需要设置地图ID
var vip1map = 209000000;
var vip2map = 749020920;
var vip3map = 749020910;
var vip4map = 920010000;


//·········以下为工资（金币）参数,请根据需要自行配置;
var GZ_Player_money = 2000000;
var GZ_V1_money = 50000000;
var GZ_V2_money = 100000000;
var GZ_V3_money = 200000000;
var GZ_V4_money = 300000000;


//·········以下为工资（道具）参数,请根据需要自行配置; 
var GZ_Player_item = Array(1002140,0);   //配置方法 只需更改 Aarray(道具ID,数量);
var GZ_V1_item = Array(1002140,0);       //数量为0 表示不给.
var GZ_V2_item = Array(1002140,0);
var GZ_V3_item = Array(1002140,0);
var GZ_V4_item = Array(1002140,0);


//·········以下为工资（抵用券）参数,请根据需要自行配置;

var GZ_Player_Nx = 800;
var GZ_V1_Nx = 1000;
var GZ_V2_Nx = 5000;
var GZ_V3_Nx = 10000;
var GZ_V4_Nx = 20000;

var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";

//////////////////////////////////////////////////////////
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(!cm.getPlayer().isGM()){
	//cm.dispose();
	//return;
	}
	
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
			
			var text="欢迎光临抽奖中心.#b\r\n    \r\n";
			text+="#L100##v2022359#5000点券-武器装备随机抽奖#l\r\n";
			text+="#L3##v2280006#10个枫叶-技能书随机抽奖#l\r\n";
			text+="#L101##v2340000#1000点券-卷轴随机抽奖#l\r\n";
			//if(cm.getPlayer().isGM()){
				text+="#b#d#L1##r#v3010070#1000点券#b-抽奖分类(玩具座椅分类)#l\r\n\r\n";
			//}
			cm.sendSimple(text);
			//\r\n#L0##r#v2022359#2000点券#b抽奖分类(属性上升物品)#v2022369##l   \r\n\r\n   #b#d#L1##r#v3010070#1000点券#b抽奖分类(玩具座椅分类)#v1402014##l       \r\n\r\n           #b#d#L4##r#v4170011#5白蛋#b抽奖一次#v4170011##l  \r\n\r\n           #b#d#L7##r#v4170005#5黄蛋#b抽奖一次#v4170005##l  \r\n\r\n           #b#d#L8##r#v4170016#5彩蛋#b抽奖一次#v4170016##l  \r\n\r\n           #b#d#L3##r10充值币#b抽奖分类(技能书)#l  \r\n\r\n           ");				
		}else if (status == 1) {
			var viplevel = cm.getPlayer().getVip;
			if(selection == 100){
				cm.openNpc(9310024,8);
			}
			else if(selection==101){
				cm.openNpc(9310024,31);
			}
			else if(selection == 0){
				cm.openNpc(9310024, 1);
			}else if(selection == 1){
				cm.openNpc(9310024, 2);
			}else if (selection == 2){
				cm.openNpc(9310024, 3);
			}else if (selection == 3){
				cm.openNpc(9310024, 4);
			}else if (selection == 4){
				cm.openNpc(9310024, 5);
			}else if (selection == 5){
				cm.openNpc(9310024, 6);
			}else if (selection == 6){
				cm.openNpc(9310024, 7);
			}else if (selection == 7){
				cm.openNpc(9310024, 8);
			}else if (selection == 8){
				cm.openNpc(9310024, 9);
			}else if (selection == 9){
                                cm.openNpc(9330042, 0);

				if(cm.getBossLog("qqzmxd_GZ")< 1){
					var vipstr = "普通玩家";
					var sf_money = 0;
					var sf_item = 0;
					var sf_Nx = 0;
					var noticeType = 2;
					var quantity;
					if(viplevel <= 0){
						sf_money = GZ_Player_money;
						sf_item = GZ_Player_item[0];
						quantity = GZ_Player_item[1];
						sf_Nx = GZ_Player_Nx;
						vipstr = "普通玩家"
						var noticeType = 2;
					}else if(viplevel == 1){
						sf_money = GZ_V1_money;
						sf_item = GZ_V1_item[0];
						quantity = GZ_V1_item[1];
						sf_Nx = GZ_V1_Nx;	
						vipstr = "★一星VIP★";
						var noticeType = 2;
					}else if(viplevel == 2){
						sf_money = GZ_V2_money;
						sf_item = GZ_V2_item[0];
						quantity = GZ_V2_item[1];
						sf_Nx = GZ_V2_Nx;
						vipstr = "★★二星VIP★★";
						var noticeType = 3;
					}else if(viplevel == 3){
						sf_money = GZ_V3_money;
						sf_item = GZ_V3_item[0];
						quantity = GZ_V3_item[1];
						sf_Nx = GZ_V3_Nx;
						vipstr = "★★★三星VIP★★★";
						var noticeType = 11;

					}else if(viplevel >= 4){
						sf_money = GZ_V4_money;
						sf_item = GZ_V4_item[0];
						quantity = GZ_V4_item[1];
						sf_Nx = GZ_V4_Nx;
						vipstr = "★★★★四星VIP★★★★";	
						var noticeType = 12;						
					}
					if((cm.getMeso()+ sf_money) < 2147483647){
						cm.gainMeso(sf_money);			
						cm.getChar().modifyCSPoints(1,sf_Nx);
						cm.getChar().UpdateCash();   //更新显示抵用状态
						if (quantity > 0){
							cm.gainItem(sf_item,quantity);
						}
						cm.setBossLog("qqzmxd_GZ");
						cm.sendOk("您已成功领取到#rVIP"+ cm.getPlayer().getVip +"#k的工资#r" + sf_money + "#k金币、#r" + sf_Nx + "#k点抵用券");
						cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(noticeType,cm.getC().getChannel(),"工资发放员" + " : " + "恭喜 " + vipstr + " " + cm.getPlayer().getName() +" 领取到今天的工资"  + sf_money + "金币、" + sf_Nx + "点抵用券",true).getBytes());
						cm.dispose();
					}else{
						cm.sendOk("由于您身上的钱过多,已经装不下今天的工资了,请存银行后再来领取吧！");
						cm.dispose();
					}
				}else{
					cm.sendOk("工资为24小时发放一次,您今天已经领取过工资了,请明天再来!");
					cm.dispose();
				}
			}										
		}
	}
}

