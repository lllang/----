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
[1,10000],
[2,50000],
[3,100000],
[4,300000],
[5,500000],
[6,1250000]
//[7,500000],
//[8,1000000]
];
var jllist = [
//[1,2450000,1],
[1,4002001,1],
[1,2049600,1],
[1,2533000,1],
[1,2614000,1],
[1,4170000,1],
[1,2041332,1],
[1,2041226,1],
[1,2531000,1],

[2,4002001,2],
[2,2049600,2],
[2,2533000,2],
[2,2614000,2],
[2,4170000,2],
[2,2041332,2],
[2,2041226,2],
[2,2531000,2],


[3,4002001,3],
[3,2049600,3],
[3,2533000,3],
[3,2614000,3],
[3,4170000,3],
[3,2041332,3],
[3,2041226,3],
[3,2531000,3],

[4,4002001,4],
[4,2049600,4],
[4,2533000,4],
[4,2614000,4],
[4,4170000,4],
[4,2041332,4],
[4,2041226,4],
[4,2531000,4],


[5,4002001,5],
[5,2049600,5],
[5,2533000,5],
[5,2614000,5],
[5,4170000,5],
[5,2041332,5],
[5,2041226,5],
[5,2531000,5],


[6,4002001,6],
[6,2049600,6],
[6,2533000,6],
[6,2614001,2],
[6,4170000,6],
[6,2041332,6],
[6,2041226,6],
[6,2531000,6],

[7,2450000,12],
[7,4310174,14],
[7,2590005,14],
[7,2614000,14],
[7,4170000,70],
[7,4310054,1200],
[7,2041332,14],
[7,2041226,14],
[7,2531006,10],
[7,2022468,50],
[7,4001017,20],//火眼
[7,4031179,20],//D片


[8,2450000,20],
[8,4310174,20],
[8,2590005,20],
[8,2614000,20],
[8,4170000,100],
[8,4310054,2400],
[8,2041332,20],
[8,2590000,16],
[8,2047954,16],
[8,2041226,16],
[8,2022468,80],
[8,4001017,40],//火眼
[8,4031179,40],//D片
[8,2049345,10],//12星强化卷
[8,2049346,10],//12星强化卷
[8,2049347,10],//13星强化卷
[8,2049348,10],//12星强化卷
[8,2049349,10],//12星强化卷
[8,2531006,8]//保护卷
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