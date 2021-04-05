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
            txt = "我是每日跑商最后一轮第10环NPC哦！我叫寇斯裤\r\n\r\n";

            if (cm.getPS() == 9){// cm.getPS()  的意思是 读取跑商值如果等于1 就得出他跑商已经完成了第一环 就运行他进行第二环跑商!

                txt += "#L1##b木妖橡皮擦#v4001038#X1个、绿水灵橡皮擦#v4001042#X1个、大幽灵橡皮擦#v4001041#X1个、猴子橡皮擦#v4001040#X1个、三眼章鱼橡皮擦#v4001043#X1个、蘑菇王橡皮擦#v4001039#X1个交给我！！#l";
                cm.sendSimple(txt);
            }else{
                txt += "你已经完成过了然后你去找.神木村-仓库管理员-寇斯裤!\r\n请第二天再来！";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4001038,1) && cm.haveItem(4001042,1) && cm.haveItem(4001041,1) && cm.haveItem(4001040,1) && cm.haveItem(4001043,1) && cm.haveItem(4001039,1)){
                cm.gainPS(1);//cm.gainPS(1);  的意思是 你完成跑商第一环的时候给予你 跑商值+1这样你就无法在重复做第二环了。只有凌晨12点刷新才行！
		
                cm.gainItem(4001038, -1);
                cm.gainItem(4001042, -1);
                cm.gainItem(4001041, -1);
				cm.gainItem(4001040, -1);
				cm.gainItem(4001043, -1);
				cm.gainItem(4001039, -1);
               // cm.gainItem(4251200, 1);
                cm.gainExp(+400000);
                cm.gainMeso(+1000000);
                cm.gainNX(+2000);
				//cm.gainItem(4002000,10);
				//cm.gainItem(4310049,1);//外星人金币
				cm.gainItem(5072000,3,1);//喇叭
				cm.gainItem(4031456,15);//枫叶珠
				cm.gainItem(4000487,20);//暗影币
                cm.喇叭(2, "[" + cm.getPlayer().getName() + "]成功完成最后一轮跑商任务，获得金币=1000000、经验=400000、点券奖励2000点和喇叭3个，真是毅力十足啊！");
                cm.sendOk("跑商最后一环第10环完成!恭喜获得金币=1000000、经验=400000、点卷=3500点 邮票 10张 喇叭3个 暗影币20个。\r\n\r\n你已经完成了所有的跑商任务，请你明天再来吧！");
                cm.dispose();
            }else{
                cm.sendOk("木妖橡皮擦#v4001038#X1个、绿水灵橡皮擦#v4001042#X1个、大幽灵橡皮擦#v4001041#X1个、猴子橡皮擦#v4001040#X1个、三眼章鱼橡皮擦#v4001043#X1个、蘑菇王橡皮擦#v4001039#X1个交给我！！");
                cm.dispose();
            }
        }
    }
}
