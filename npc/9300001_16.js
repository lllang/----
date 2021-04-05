正在进行中 = "#fUI/UIWindow/Quest/Tab/enabled/1#";
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
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";
var 美化new = "#fUI/UIWindow/Quest/icon2/7#";
var 美化ne = "#fUI/UIWindow/Quest/icon6/7#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var status = -1;
var typ;
var chajia;
var viplist = [
[1,10000000],
[2,50000000],
[3,100000000]
//[4,100000],
//[5,200000],
//[6,350000],
//[7,500000],
//[8,1000000]
];
var jllist = [
[1,2041200,1],
[1,2049323,5],
[1,2340000,5],
[1,2590000,1],
[1,3994578,50],


[2,2041200,2],
[2,2049323,10],
[2,2340000,10],
[2,2590000,3],
[2,2047954,1],
[2,2041332,2],
[2,2041226,4],
[2,3994578,150],

[3,2041200,4],
[3,2049323,20],
[3,2340000,20],
[3,2590000,6],
[3,2047954,2],
[3,2041332,4],
[3,2041226,6],
[3,2531006,1],
[3,3994578,300],

[4,2041226,4],
[4,4001017,5],//火眼
[4,4031179,5],//D片
[4,4031217,3],//黄金钥匙
[4,2049345,2],//11星强化卷
[4,2049323,5],//高级强化卷
[4,2340000,5],//祝福卷
[4,4000464,2],//中国心
[4,4251202,2],//高等五彩水晶
[4,2047954,1],
[4,2041332,2],
[4,2041226,4],
[4,4001017,8],//火眼
[4,4031179,8],//D片
[4,4031217,4],//黄金钥匙
[4,2049345,3],//11星强化卷
[4,2049323,10],//高级强化卷
[4,2340000,10],//祝福卷
[4,4000464,3],//中国心
[4,4251202,3],//高等五彩水晶
[5,2047954,2],
[5,2041332,4],
[5,2041226,6],
[5,4001017,10],//火眼
[5,4031179,10],//D片
[5,4031217,5],//黄金钥匙
[5,2049345,4],//11星强化卷
[5,2049323,15],//高级强化卷
[5,2340000,15],//祝福卷
[5,4000464,4],//中国心
[5,4251202,4],//高等五彩水晶
[5,2049346,4],//12星强化卷
[5,2614000,2],//破功石1W
[5,4000487,9],//暗影币
[6,2047954,3],
[6,2041332,5],
[6,2041226,8],
[6,4001017,15],//火眼
[6,4031179,15],//D片
[6,4031217,6],//黄金钥匙
[6,2049345,5],//11星强化卷
[6,2049323,20],//高级强化卷
[6,2340000,20],//祝福卷
[6,4000464,5],//中国心
[6,4251202,5],//高等五彩水晶
[6,2049346,6],//12星强化卷
[6,2049347,6],//13星强化卷
[6,2614000,4],//破功石1W
[6,4000487,18],//暗影币
[6,2531006,2],//保护卷
[7,2047954,3],
[7,2041332,5],
[7,2041226,8],
[7,4001017,20],//火眼
[7,4031179,20],//D片
[7,4031217,7],//黄金钥匙
[7,2049345,7],//11星强化卷
[7,2049323,25],//高级强化卷
[7,2340000,25],//祝福卷
[7,4000464,6],//中国心
[7,4251202,6],//高等五彩水晶
[7,2049346,7],//12星强化卷
[7,2049347,7],//13星强化卷
[7,2049348,7],//14星强化卷
[7,2614000,6],//破功石1W
[7,4000487,50],//暗影币
[7,2531006,4],//保护卷
[8,2047954,5],
[8,2041332,8],
[8,2041226,10],
[8,4001017,30],//火眼
[8,4031179,30],//D片
[8,4031217,8],//黄金钥匙
[8,2049345,10],//11星强化卷
[8,2049323,30],//高级强化卷
[8,2340000,30],//祝福卷
[8,4000464,10],//中国心
[8,4251202,10],//高等五彩水晶
[8,2049346,10],//12星强化卷
[8,2049347,10],//13星强化卷
[8,2049348,10],//14星强化卷
[8,2049349,10],//15星强化卷
[8,2614000,10],//破功石1W
[8,4000487,70],//暗影币
[8,2531006,10]//保护卷
];

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
		var text = "\r\n";
		text += "#e                 "+爱心+"#r会员中心#k"+爱心+"  #n\r\n"   
		
        text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		text += "#e  你目前的会员等级为:#rVIP"+cm.getVip()+"#l#k\r\n";
		if(cm.getVip() < 1){
		text += "#L0#开通会员VIP1等级#l\r\n\r\n";
		
		}
		text += "#L2#升级会员等级#l\r\n\r\n";
		text += "#L1#领取会员每日福利#l\r\n\r\n";
		text += "#L3#查看会员礼包#l\r\n\r\n\r\n";
		text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
        cm.sendSimple(text);
    } else if (status == 1) {
        if(selection == 0){
			var text = "";
			text += "是否确定开通VIP1?\r\n";
			// for (var i = 0; i < viplist.length; i++){
				// text += "#L"+i+"##r#eVIP"+viplist[i][0]+" 价格:"+viplist[i][1]+"元宝#k#l\r\n\r\n\r\n#b每日领取:#k\r\n\r\n";
				// for (var j = 0; j < jllist.length; j++){
					// if(jllist[j][0] == viplist[i][0]){
						// text += "#i"+jllist[j][1]+":##z"+jllist[j][1]+"# × "+jllist[j][2]+"\r\n";
					// }
				// }
				// text += "\r\n";
			// }
			cm.sendYesNo(text);
			typ = 0;
		} else if(selection == 1){
			if(cm.getVip() > 0){
				if(cm.getInventory(2).isFull(2)||cm.getInventory(4).isFull(2)){
					cm.sendOk("请把背包的消耗和其他栏留出3个位置再来找我！");
					cm.dispose();
				}else if(cm.getBossLog("每日会员福利") == 0){
					var text = "恭喜您成功领取到:\r\n";
					for (var j = 0; j < jllist.length; j++){
						if(jllist[j][0] == cm.getVip()){
							cm.gainItem(jllist[j][1], jllist[j][2]);
							text += "#i"+jllist[j][1]+":##z"+jllist[j][1]+"# × "+jllist[j][2]+"\r\n";
						}
					}
					cm.setBossLog("每日会员福利");
					cm.喇叭(2, "恭喜蓝蜗牛VIP[" + cm.getVip() + "]玩家：[" + cm.getName() + "] 领取了今日会员福利！");
					cm.sendOk(text);
				} else {
					cm.sendOk("你今日已经领取过了奖励.");
				}
			} else {
				cm.sendOk("抱歉你没有开通会员功能.");
			}
			cm.dispose();
		} else if(selection == 2){
			if(cm.getVip() >= 8){
				cm.sendOk("你已经最高级了~!");
				cm.dispose();
				return;
			}
			var text ="";
			for (var j = 0; j < jllist.length; j++){
				if(jllist[j][0] == cm.getVip()+1){
					text += "#i"+jllist[j][1]+":##z"+jllist[j][1]+"# × "+jllist[j][2]+"\r\n";
				}
			}
			if(cm.getVip() > 0){
				chajia = viplist[cm.getVip()][1] - viplist[cm.getVip()-1][1];
				cm.sendYesNo("\r\n#e你目前的会员等级为:#rVIP"+cm.getVip()+"#b 升级到 #rVIP "+(cm.getVip()+1)+"#k\r\n需要补#r元宝:"+chajia+" #k升级后每日福利将为#k#n\r\n"+text);
				typ = 1;
			} else {
				cm.sendOk("抱歉你没有开通会员功能.");
				cm.dispose();
			}
		}if(selection == 3){
			var text = "";
			for (var i = 0; i < viplist.length; i++){
				text += "#r#eVIP"+viplist[i][0]+" 价格:"+viplist[i][1]+"元宝#k#l\r\n\r\n\r\n#b每日领取:#k\r\n\r\n";
				for (var j = 0; j < jllist.length; j++){
					if(jllist[j][0] == viplist[i][0]){
						text += "#i"+jllist[j][1]+":##z"+jllist[j][1]+"# × "+jllist[j][2]+"\r\n";
					}
				}
				
			}
			cm.sendSimple(text);
			
		}
    } else if (status == 2) {
		if (typ == 0){
			if(cm.getVip() == 0){
				if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= 10000){
					cm.setVip(1);
					cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-10000);
					cm.sendOk("#e恭喜你开通 #rVIP1#k 成功请领取你每日奖励吧~!");
					cm.dispose();
				} else {
					cm.sendOk("元宝不足请充值.");
					cm.dispose();
				}
			} else {
				cm.sendOk("你目前已经开通了VIP请点击升级VIP等级哦.");
				cm.dispose();
			}
		} else if (typ == 1){
			if(cm.getVip() == 1){
				if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= chajia){
						cm.gainVip(1);
						cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-chajia);
						cm.sendOk("恭喜您会员等级升级成功~!目前会员等级为： #e#rVIP"+cm.getVip());
						cm.dispose();
				} else {
					cm.sendOk("元宝不足请充值.");
					cm.dispose();
				}
			} else if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= chajia){
				cm.gainVip(1);
				cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-chajia);
				cm.sendOk("恭喜您会员等级升级成功~!目前会员等级为： #r#eVIP"+cm.getVip());
				cm.dispose();
			} else {
				cm.sendOk("元宝不足请充值.");
				cm.dispose();
			}
		} else {
			cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
			cm.dispose();
		}
    } else {
        cm.sendNext("#r发生错误: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}