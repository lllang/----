var status = 0;
var 道具 = 4000463;
var 金币 = 500000000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("好的, 请告诉我你确定需要 #b飞升#k.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("如果等到达到“250级”就可以在我这里进行飞升哦。\r\n转生后等级将下降到“220级”，能力值、职业不变。需要2E金币"); 
        }else if (status == 1) {
        if(cm.getChar().getLevel() <= 249){
        cm.sendOk("很抱歉，您需要250级，才可以投胎转世.");
        cm.dispose();
        } else if(cm.getPlayer().getBossLog("转生",1) < 100){
            cm.sendOk("低于100次转生无法使用");
            cm.dispose();
        } else if(cm.getPlayer().getBossLog("修仙",1) > 998){
            cm.sendOk("达到最高次数");
            cm.dispose();
        } else if(cm.getChar().getMeso() <= 200000000){
            cm.sendOk("金币不足");
            cm.dispose();
        }else{
        cm.sendOk("#b您做得非常好#k, 你现在确定要#e飞升#n.吗？");
        }
        }else if (status == 2) {
        cm.getChar().setLevel(221);
        cm.gainMeso(-200000000);
		cm.getPlayer().setBossLog("修仙",1,1);
		cm.getPlayer().fakeRelog();
        cm.sendNext("飞升成功。");
        cm.dispose();
        }            
    }
 }
 