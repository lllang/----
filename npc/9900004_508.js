var 皇冠白 ="#fUI/GuildMark/Mark/Etc/00009004/15#";var 幸运草 ="#fUI/GuildMark/Mark/Plant/00003006/15#";var 彩虹1 ="#fUI/ChatBalloon/122/n#";var 彩虹上1 =  "#fUI/ChatBalloon/122/ne#";var 彩虹上2 =  "#fUI/ChatBalloon/122/nw#";var 彩1 =    "#fUI/ChatBalloon/122/e#";var 彩2 =    "#fUI/ChatBalloon/122/w#";var 大箭头 = "#fUI/Basic/icon/arrow#"; var 彩虹下 ="#fUI/ChatBalloon/122/s#";var 彩虹下1 ="#fUI/ChatBalloon/122/se#";var 彩虹下2 ="#fUI/ChatBalloon/122/sw#";var 彩虹中 ="#fUI/ChatBalloon/122/head#";var 梅花 ="#fUI/GuildMark/Mark/Animal/00002008/14#";var 梅花 ="#fUI/GuildMark/Mark/Animal/00002020/14#";var 星星 = "#fEffect/CharacterEff/1114000/2/0#";var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";var 感叹号 = "#fUI/UIWindow/Quest/icon0#";var 退出 = "#fUI/CN_Chat/ChattingRoom/BtExit/0/mouseOver/0#";var 奖励 = "#fUI/UIWindow/Quest/reward#";var 购买 = "#fUI/UIWindow/PersonalShop/BtBuy/mouseOver/0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }else {
            status--;
        }
		if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "                "+爱心+"#e#r饰品合成中心#k"+爱心+"  #n\r\n\r\n"   
			text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
			text += "      #e#L1#"+梅花+" 合成#r【遗忘神话耳环】#k 全属性+188"+梅花+"#l\r\n"
            text += "     #e#L2#"+梅花+" 合成#r【恐怖鬼娃伤口】#k 全属性+188"+梅花+"#l\r\n"
            text += "     #e#L3#"+梅花+" 合成#r【意志黑色腰带】#k 全属性+188"+梅花+"#l\r\n"
            text += "     #e#L4#"+梅花+" 合成#r【最高贝勒戒指】#k 全属性+188"+梅花+"#l\r\n"
            text += "     #e#L5#"+梅花+" 合成#r【最高贝勒耳环】#k 全属性+188"+梅花+"#l\r\n"
            text += "     #e#L6#"+梅花+" 合成#r【最高贝勒吊坠】#k 全属性+188"+梅花+"#l\r\n"
            text += "     #e#L7#"+梅花+" 合成#r【最高贝勒腰带】#k 全属性+188"+梅花+"#l\r\n\r\n\r\n"
			text += "   "+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n"
            cm.sendSimple(text);
        }  else if (selection == 1) {
			warp = 1;
			cm.sendYesNo(""+圆形+" 合成#r遗忘神话耳环#k需要：\r\n\r\n"+感叹号+" [#v 1032205##r#c 1032205##k/1 ] [ #v 1032206##r#c 1032206##k/1 ] [ #v 1032207##r#c 1032207##k/1 ]\r\n"+感叹号+" [#v 1032208##r#c 1032208##k/1 ] [ #v 1032209##r#c 1032209##k/1 ] [ #v 4310156##r#c 4310156##k/30 ]\r\n"+感叹号+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+感叹号+" #d请把这些材料进背包进行合成\r\n");
			
        } else if (selection == 2) {
			warp = 2;
			cm.sendYesNo(""+圆形+" 合成#r恐怖鬼娃伤口#k需要：\r\n\r\n"+感叹号+" [#v 1012170##r#c 1012170##k/1 ] [ #v 1012171##r#c 1012171##k/1 ] [ #v 1012172##r#c 1012172##k/1 ]\r\n"+感叹号+" [#v 1012173##r#c 1012173##k/1 ] [ #v 4310156##r#c 4310156##k/30 ] [ #v 4310097##r#c 4310097##k/30 ]\r\n"+感叹号+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+感叹号+" #d请把这些材料进背包进行合成\r\n");
			
        } else if (selection == 3) {
			warp = 3;
			cm.sendYesNo(""+圆形+" 合成#r意志黑色腰带#k需要：\r\n\r\n"+感叹号+" [#v 1132211##r#c 1132211##k/1 ] [ #v 1132212##r#c 1132212##k/1 ] [ #v 1132213##r#c 1132213##k/1 ]\r\n"+感叹号+" [#v 1132214##r#c 1132214##k/1 ] [ #v 4310156##r#c 4310156##k/88 ] [ #v 4310097##r#c 4310097##k/88 ]\r\n"+感叹号+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+感叹号+" #d请把这些材料进背包进行合成\r\n");
			
        } else if (selection == 4) {
			warp = 4;
			cm.sendYesNo(""+圆形+" 合成#r最高贝勒戒指#k需要：\r\n\r\n"+感叹号+" [#v 1113072##r#c 1113072##k/1 ] [ #v 1113073##r#c 1113073##k/1 ] [ #v 1113074##r#c 1113074##k/1 ]\r\n"+感叹号+" [#v 4310156##r#c 4310156##k/50 ] [ #v 4310097##r#c 4310097##k/50 ] [ #v 4310098##r#c 4310098##k/50 ]\r\n"+感叹号+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+感叹号+" #d请把这些材料进背包进行合成\r\n");
			
        } else if (selection == 5) {
			warp = 5;
			cm.sendYesNo(""+圆形+" 合成#r最高贝勒耳环#k需要：\r\n\r\n"+感叹号+" [#v 1032220##r#c 1032220##k/1 ] [ #v 1032221##r#c 1032221##k/1 ] [ #v 1032222##r#c 1032222##k/1 ]\r\n"+感叹号+" [#v 4310156##r#c 4310156##k/50 ] [ #v 4310097##r#c 4310097##k/50 ] [ #v 4310098##r#c 4310098##k/50 ]\r\n"+感叹号+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+感叹号+" #d请把这些材料进背包进行合成\r\n");
			
        } else if (selection == 6) {
			warp = 6;
			cm.sendYesNo(""+圆形+" 合成#r最高贝勒吊坠#k需要：\r\n\r\n"+感叹号+" [#v 1122264##r#c 1122264##k/1 ] [ #v 1122265##r#c 1122265##k/1 ] [ #v 1122266##r#c 1122266##k/1 ]\r\n"+感叹号+" [#v 4310156##r#c 4310156##k/50 ] [ #v 4310097##r#c 4310097##k/50 ] [ #v 4310098##r#c 4310098##k/50 ]\r\n"+感叹号+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+感叹号+" #d请把这些材料进背包进行合成\r\n");
			
        } else if (selection == 7) {
			warp = 7;
			cm.sendYesNo(""+圆形+" 合成#r最高贝勒腰带#k需要：\r\n\r\n"+感叹号+" [#v 1132243##r#c 1132243##k/1 ] [ #v 1132244##r#c 1132244##k/1 ] [ #v 1132245##r#c 1132245##k/1 ]\r\n"+感叹号+" [#v 4310156##r#c 4310156##k/50 ] [ #v 4310097##r#c 4310097##k/50 ] [ #v 4310098##r#c 4310098##k/50 ]\r\n"+感叹号+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+感叹号+" #d请把这些材料进背包进行合成\r\n");
			
        } else if(status = 1) {
		    if(warp == 1){
		     if (!cm.haveItem(1032205,1)) {
			    cm.sendOk("请将#v 1032205##b#z 1032205##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1032206,1)) {
			    cm.sendOk("请将#v 1032206##b#z 1032206##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1032207,1)) {
			    cm.sendOk("请将#v 1032207##b#z 1032207##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1032208,1)) {
			    cm.sendOk("请将#v 1032208##b#z 1032208##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1032209,1)) {
			    cm.sendOk("请将#v 1032209##b#z 1032209##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310156,30)) {
			    cm.sendOk("请将30个个#v 4310156##b#z 4310156##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("请将2个个#v 4002001##b#z 4002001##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("请将100个个#v 4310038##b#z 4310038##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("请将2个个#v 4002002##b#z 4002002##k放入背包中");
                cm.dispose();
			}else{
                cm.gainItem(1032205,-1);
                cm.gainItem(1032206,-1);
                cm.gainItem(1032207,-1);
                cm.gainItem(1032208,-1);
                cm.gainItem(1032209,-1);
                cm.gainItem(4310156,-30);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
				cm.gainItem(1032219,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
                cm.sendOk("合成成功");
                cm.dispose();
        }
			
		}else if(warp == 2){
		     if (!cm.haveItem(4310156,30)) {
			    cm.sendOk("请将30个#v 4310156##b#z 4310156##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1012173,1)) {
			    cm.sendOk("请将#v 1012173##b#z 1012173##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1012172,1)) {
			    cm.sendOk("请将#v 1012172##b#z 1012172##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310097,30)) {
			    cm.sendOk("请将30个#v 4310097##b#z 4310097##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1012171,1)) {
			    cm.sendOk("请将#v 1012171##b#z 1012171##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1012170,1)) {
			    cm.sendOk("请将#v 1012170##b#z 1012170##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("请将2个个#v 4002001##b#z 4002001##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("请将100个个#v 4310038##b#z 4310038##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("请将2个个#v 4002002##b#z 4002002##k放入背包中");
                cm.dispose();
			}else{
                cm.gainItem(4310156,-30);
                cm.gainItem(1012173,-1);
                cm.gainItem(1012172,-1);
                cm.gainItem(4310097,-30);
                cm.gainItem(1012171,-1);
                cm.gainItem(1012170,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1012174,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
                cm.sendOk("合成成功");
                cm.dispose();
        }
		
		}else if(warp == 3){
		     if (!cm.haveItem(1132211,1)) {
			    cm.sendOk("请将#v 1132211##b#z 1132211##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1132213,1)) {
			    cm.sendOk("请将#v 1132213##b#z 1132213##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310097,88)) {
			    cm.sendOk("请将30个#v 4310097##b#z 4310097##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310156,88)) {
			    cm.sendOk("请将30个#v 4310156##b#z 4310156##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1132214,1)) {
			    cm.sendOk("请将#v 1132214##b#z 1132214##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1132212,1)) {
			    cm.sendOk("请将#v 1132212##b#z 1132212##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("请将2个个#v 4002001##b#z 4002001##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("请将100个个#v 4310038##b#z 4310038##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("请将2个个#v 4002002##b#z 4002002##k放入背包中");
                cm.dispose();
			}else{
                cm.gainItem(1132211,-1);
                cm.gainItem(1132213,-1);
                cm.gainItem(4310097,-88);
                cm.gainItem(4310156,-88);
                cm.gainItem(1132214,-1);
                cm.gainItem(1132212,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1132215,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
                cm.sendOk("合成成功");
                cm.dispose();
        }
		
		}else if(warp == 4){
		     if (!cm.haveItem(4310097,50)) {
			    cm.sendOk("请将20个#v 4310097##b#z 4310097##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1113074,1)) {
			    cm.sendOk("请将#v 1113074##b#z 1113074##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310156,50)) {
			    cm.sendOk("请将20个#v 4310156##b#z 4310156##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310098,50)) {
			    cm.sendOk("请将20个#v 4310098##b#z 4310098##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1113073,1)) {
			    cm.sendOk("请将#v 1113073##b#z 1113073##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1113072,1)) {
			    cm.sendOk("请将#v 1113072##b#z 1113072##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("请将2个个#v 4002001##b#z 4002001##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("请将100个个#v 4310038##b#z 4310038##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("请将2个个#v 4002002##b#z 4002002##k放入背包中");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-50);
                cm.gainItem(1113074,-1);
                cm.gainItem(4310156,-50);
                cm.gainItem(4310098,-50);
                cm.gainItem(1113073,-1);
                cm.gainItem(1113072,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1113075,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
			    cm.sendOk("合成成功");
                cm.dispose();
            }	
		
		}else if(warp == 5){
		     if (!cm.haveItem(4310097,50)) {
			    cm.sendOk("请将20个#v 4310097##b#z 4310097##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1032222,1)) {
			    cm.sendOk("请将#v 1032222##b#z 1032222##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310156,50)) {
			    cm.sendOk("请将20个#v 4310156##b#z 4310156##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310098,50)) {
			    cm.sendOk("请将20个#v 4310098##b#z 4310098##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1032221,1)) {
			    cm.sendOk("请将#v 1032221##b#z 1032221##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1032220,1)) {
			    cm.sendOk("请将#v 1032220##b#z 1032220##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("请将2个个#v 4002001##b#z 4002001##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("请将100个个#v 4310038##b#z 4310038##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("请将2个个#v 4002002##b#z 4002002##k放入背包中");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-50);
                cm.gainItem(1032222,-1);
                cm.gainItem(4310156,-50);
                cm.gainItem(4310098,-50);
                cm.gainItem(1032221,-1);
                cm.gainItem(1032220,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1032223,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
			    cm.sendOk("合成成功");
                cm.dispose();
            }
			
		}else if(warp == 6){
		     if (!cm.haveItem(4310097,50)) {
			    cm.sendOk("请将20个#v 4310097##b#z 4310097##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1122266,1)) {
			    cm.sendOk("请将#v 1122266##b#z 1122266##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310156,50)) {
			    cm.sendOk("请将20个#v 4310156##b#z 4310156##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310098,50)) {
			    cm.sendOk("请将20个#v 4310098##b#z 4310098##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1122265,1)) {
			    cm.sendOk("请将#v 1122265##b#z 1122265##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1122264,1)) {
			    cm.sendOk("请将#v 1122264##b#z 1122264##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("请将2个个#v 4002001##b#z 4002001##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("请将100个个#v 4310038##b#z 4310038##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("请将2个个#v 4002002##b#z 4002002##k放入背包中");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-50);
                cm.gainItem(1122266,-1);
                cm.gainItem(4310156,-50);
                cm.gainItem(4310098,-50);
                cm.gainItem(1122265,-1);
                cm.gainItem(1122264,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1122267,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
			    cm.sendOk("合成成功");
                cm.dispose();
            }
		}else if(warp == 7){
		     if (!cm.haveItem(4310097,50)) {
			    cm.sendOk("请将20个#v 4310097##b#z 4310097##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1132245,1)) {
			    cm.sendOk("请将#v 1132245##b#z 1132245##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310098,50)) {
			    cm.sendOk("请将20个#v 4310098##b#z 4310098##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310156,50)) {
			    cm.sendOk("请将20个#v 4310156##b#z 4310156##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1132244,1)) {
			    cm.sendOk("请将#v 1132244##b#z 1132244##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(1132243,1)) {
			    cm.sendOk("请将#v 1132243##b#z 1132243##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("请将2个个#v 4002001##b#z 4002001##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("请将100个个#v 4310038##b#z 4310038##k放入背包中");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("请将2个个#v 4002002##b#z 4002002##k放入背包中");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-50);
                cm.gainItem(1132245,-1);
                cm.gainItem(4310156,-50);
                cm.gainItem(4310098,-50);
                cm.gainItem(1132244,-1);
                cm.gainItem(1132243,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1132246,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
			    cm.sendOk("合成成功");
                cm.dispose();
            }

		}
		}		
    }
}
// return false;