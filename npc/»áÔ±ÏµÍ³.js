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
function 
start() {
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
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "#e元宝兑换点券比例#r1：10！#k您账号累计赞助积分：#r" + cm.getPlayer().getAccountLog("累计赞助积分", 1) + "#k\r\n\r\n";
            text += "#e                 "+爱心+"#r会员中心#k"+爱心+"  #n\r\n"   
		
            text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		    text += " #e#L7##r会员开通即每日福利#l       \r\n\r\n\r\n"
			//text += " #e#L1##b领取累计赞助礼包#l \r\n\r\n\r\n"
			 text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
            text += "#e#L4#【5000元宝兑换点券，可以兑换 #r50000#k点券】\r\n\r\n";
            text += "#e#L5#【10000元宝兑换点券，可以兑换 #r100000#k点券】\r\n\r\n";
            //text += "#e#L3#【#b全部元宝#k兑换点券，总共可以兑换 #r" + cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) * 1000 + "#k点券】\r\n";
            text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
		    //text += "#L4##v4031250#兑换充值1：1\r\n"
            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 4) {
                if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= 5000){
					cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-5000);
					cm.gainNX(+50000);
					cm.sendOk("兑换成功~!");
					cm.dispose();
				} else {
					cm.sendOk("你元宝不足50~!");
					cm.dispose();
				}

            } else if (selection == 5) {
                if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= 10000){
					cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-10000);
					cm.gainNX(+100000);
					cm.sendOk("兑换成功~!");
					cm.dispose();
				} else {
					cm.sendOk("你元宝不足100~!");
					cm.dispose();
				}
            }else if (selection == 6) {
            cm.openNpc(9000069,3);
            }else if (selection == 7) {
            cm.openNpc(9300001,16);
            }else if (selection == 1) {
                cm.openNpc(9310037, 2);
            } else if (selection == 2) {
                cm.openNpc(9310037, 3);
            } else if (selection == 3) {
                cm.gainNX(cm.getPlayer().getAccountLog("累计赞助积分_暂用", 1) * 1000);
                cm.getPlayer().setAccountLog("累计赞助积分_暂用", 1, -cm.getPlayer().getAccountLog("累计赞助积分_暂用", 1));
                cm.sendOk("兑换成功。");
                cm.dispose();
            }
        }
    }
}
