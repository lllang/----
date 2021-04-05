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
		text += "                   "+爱心+"#r会员中心#k"+爱心+"  #n\r\n"   
        text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
		if(cm.getVip() < 1){
		text += "#L1#开通会员等级#l\r\n";
		}
		text += "#L2#升级会员等级#l\r\n";
		text += "#L3#领取会员每日福利#l\r\n";
        cm.sendSimple(text);
    } else if (selection == 1) {
				if(cm.getOneTimeLog("点数礼包1") == 1 ||cm.getOneTimeLog("点数礼包2") == 1 ||cm.getOneTimeLog("点数礼包3") == 1 ){
				cm.sendOk("你已经购买过礼包咯");
				cm.dispose();		
		        }else if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= 1000){
					cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-1000);
					cm.setOneTimeLog("点数礼包2");
					cm.sendOk("购买成功~!");
					cm.dispose();
				} else {
					cm.sendOk("输入错误,元宝不足~!");
					cm.dispose();
				}
			}else if (selection == 2) {
				if(cm.getOneTimeLog("123") == 1  ){
				cm.sendOk("你已经购买过礼包咯");
				cm.dispose();		
		        }else if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= 1000){
					cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-1000);
					cm.setOneTimeLog("123");
					cm.sendOk("购买成功~!");
					cm.dispose();
				} else {
					cm.sendOk("输入错误,元宝不足~!");
					cm.dispose();
				}
			}
		} 
			} else if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= chajia){
				cm.gainVip(1);
				cm.getPlayer().setAccountLog("累计赞助积分_暂用",1,-chajia);
				cm.sendOk("恭喜您会员等级升级成功~!目前会员等级为："+cm.getVip());
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