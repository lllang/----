//importPackage(Packages.client);
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
        if (status == 0) {
            var txt = "";
            txt = "我是每日跑商第7环NPC哦！我叫小刘\r\n\r\n";

            if (cm.getPS() == 6){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!

                txt += "#L1##b收集星光精灵的星块#v4000059#X20个、月光精灵的月块#v4000060#X20、日光精灵的日块#v4000061#X20个交给我！！#l";
                cm.sendSimple(txt);
            }else{
                txt += "你已经完成过了然后你去找.冰封雪域-仓库管理员-武先生!\r\n请第二天再来！";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000059,20) && cm.haveItem(4000060,20) && cm.haveItem(4000061,20)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		
                cm.gainItem(4000059, -20);
                cm.gainItem(4000060, -20);
                cm.gainItem(4000061, -20);
cm.gainExp(+100000);
cm.gainMeso(+150000);
cm.gainD(+300);
                cm.sendOk("跑商第7环完成!恭喜获得金币=150000、经验=100000、抵用300点\r\n\r\n然后你去找..冰封雪域-仓库管理员-武先生.进行下一环！");
                cm.dispose();
            }else{
                cm.sendOk("收集20个星光精灵的星块#v4000059#、20个月光精灵的月块#v4000060#、20个日光精灵的日块#v4000061#、交给我!");
                cm.dispose();
            }
        }
    }
}
