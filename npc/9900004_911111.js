/*
*   交换商店，增强版  NPC
*   By: ZreHy_MS               如果需要改动，请自行修改，本人开服用的~
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("您好，尊敬的 #b#h ##k, 我是小宇冒险岛的#r兑换系统#k负责人\r\n\r\n您目前有充值币： " + cm.getmoneyb() + "\r\n您目前有充值积分： " + cm.getjf() + "\r\n您目前有点券： " + cm.getNX(1) + "\r\n#k当前拥有中介币:#c4000463# 个\r\n#b#L2#1充值币#d===#r500点券\r\n#n#b#L0#10充值币#d===#r5000点券#k#n#l\r\n#b#L1#100充值币#d===#r50000点券\r\n#L3#1000充值币#d===#r500000点券#k#n#l\r\n#L4#1个#v4000463##d===#r500点券#k#n#l\r\n#L5#10个#v4000463##d===#r5000点券#k#n#l\r\n#L6##r500点券#k#n===1个#v4000463##d#l\r\n#L7##r5000点券#k#n===10个#v4000463##d#l\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.getmoneyb() >= 10){
                 cm.setmoneyb(-10);				
				 cm.gainNX(+5000);
                 cm.gainjf(+10);				 
				cm.sendOk("恭喜你，兑换成功 .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的充值币 ，我不能给你换购~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.getmoneyb() >= 100){
                cm.setmoneyb(-100);				
				 cm.gainNX(+50000);
				  cm.gainjf(+100);
				cm.sendOk("恭喜你，兑换成功! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的充值币，我不能给你换购~.");
                cm.dispose();
            }
            break;
			case 2: 
            if(cm.getmoneyb() >= 1){
                cm.setmoneyb(-1);
 cm.gainjf(+1);				
				 cm.gainNX(+500);
				cm.sendOk("恭喜你，兑换成功! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的充值币，我不能给你换购~.");
                cm.dispose();
            }
            break;
         case 4: 
            if(cm.haveItem(4000463,1)){
                cm.gainNX(500);
				cm.gainItem(4000463,-1);
				cm.sendOk("恭喜你，你获得了 500 点券! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 中介币，我不能给你换购~.");
                cm.dispose();
            }
            break;
			case 5: 
            if(cm.haveItem(4000463,10)){
                cm.gainNX(5000);
				cm.gainItem(4000463,-10);
				cm.sendOk("恭喜你，你获得了 5000 点券! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 中介币，我不能给你换购~.");
                cm.dispose();
            }
            break;
			case 6: 
            if (cm.getPlayer().getNX() >= 500) {
                cm.gainNX(-500);
				cm.gainItem(4000463,1);
				cm.sendOk("恭喜你，你获得了1个#v4000463#! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 中介币，我不能给你换购~.");
                cm.dispose();
            }
            break;
			case 7: 
            if (cm.getPlayer().getNX() >= 5000) {
                cm.gainNX(-5000);
				cm.gainItem(4000463,10);
				cm.sendOk("恭喜你，你获得了10个#v4000463#! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 中介币，我不能给你换购~.");
                cm.dispose();
            }
            break;
		case 3: 
            if(cm.getmoneyb() >= 1000){
                cm.setmoneyb(-1000);
 cm.gainjf(+1000);				
				 cm.gainNX(+500000);
				cm.sendOk("恭喜你，兑换成功! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的充值币，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 8: 
            if((cm.getPlayer().getCSPoints(1) >= 300)){          
				 cm.gainNX(-300);
				cm.gainItem(4001126,1);
				cm.sendOk("恭喜你，兑换成功 .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的点卷 ，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 9: 
            if(cm.haveItem(4001126,10)){              
				cm.gainItem(4001126,-10);
				cm.gainNX(2600);
				cm.sendOk("恭喜你，你获得了 2600点卷! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 国庆币，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 11: 
            if(cm.haveItem(4032226,10)){
                cm.gainMeso(2000000);
				cm.gainItem(4032226,-10);
				cm.sendOk("恭喜你，你获得了 2000000 金币! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 黄金猪猪，我不能给你换购~.");
                cm.dispose();
            }
            break;
           case 12: 
            if(cm.haveItem(4001126,1)){              
				cm.gainItem(4001126,-1);
				cm.gainNX(260);
				cm.sendOk("恭喜你，你获得了 260点卷! .");
				cm.dispose();
            }else{
                cm.sendOk("你没有 足够的 国庆币，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 13: 
            if(cm.getMeso() >= 10000000){
                cm.sendOk("恭喜你，你获得了 2000000 经验值! .");
                cm.gainMeso(-10000000);
                cm.gainExp(2000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有 10000000 金币，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 14: 
            if(cm.getMeso() >= 100000000){
                cm.sendOk("恭喜你，你获得了 50000000 经验值! .");
                cm.gainMeso(-100000000);
                cm.gainExp(50000000);
                cm.dispose();
            }else{
                cm.sendOk("你没有 1亿 金币，我不能给你换购~.");
                cm.dispose();
            }
            break;
            case 9: 
                cm.openNpc(9270052, 0);
            }
        }
    }
}