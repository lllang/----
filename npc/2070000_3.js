var status = 0;

var 水晶矿石数量;
var 普通矿石数量;
var 可获得累计经验;


var 普通母矿 = Array(
    4020001,//	紫水晶母矿	发出紫光的宝石的母矿.
    4010002,//	锂矿石母矿	轻而坚硬的锂矿石的母矿。提炼时可以获得珍贵的魔法粉末（嫩绿色）。
    4020002,//	海蓝石母矿	发出青光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(白色) 。
    4020007,//	钻石母矿	无色透明的宝石的母矿。提炼时可以获得珍贵的魔法粉末(白色) 。
    4020008,//	黑水晶母矿	含有黑暗之力的水晶的母矿。提炼时可以获得珍贵的魔法粉末（黑色）
    4020000,//	石榴石母矿	发出红光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(红色) 。
    4010003,//	朱矿石母矿	重而坚硬的朱矿石的母矿。提炼时可以获得珍贵的魔法粉末（褐色）。
    4020004,//	蛋白石母矿	发出多种光彩的宝石的母矿.
    4020003,//	祖母绿母矿	发出绿光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(嫩绿色) 。
    4010006,//	黄金母矿	非常稀少的黄金的母矿。提炼时可以获得珍贵的魔法粉末（黄色）。
    4020005,//	蓝宝石母矿	透明和有青光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(蓝色) 。
    4020006,//	黄晶母矿	有黄光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(黄色) 。
    4010001,//	钢铁母矿	坚硬钢铁的母矿。提炼时可以获得珍贵的魔法粉末（蓝色）。
    4010004,//	银的母矿	有光彩的银的母矿.
    4010005,//	紫矿石母矿	非常稀贵的紫矿石的母矿.
    4010000//	青铜母矿	轻且脆的青铜的母矿。提炼时可以获得珍贵的魔法粉末（褐色）。

);


function start() {
    普通矿石数量 =
        cm.itemQuantity(4020001) +
        cm.itemQuantity(4010002) +//	锂矿石母矿	轻而坚硬的锂矿石的母矿。提炼时可以获得珍贵的魔法粉末（嫩绿色）。
        cm.itemQuantity(4020002) +//	海蓝石母矿	发出青光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(白色) 。
        cm.itemQuantity(4020007) +//	钻石母矿	无色透明的宝石的母矿。提炼时可以获得珍贵的魔法粉末(白色) 。
        cm.itemQuantity(4020008) +//	黑水晶母矿	含有黑暗之力的水晶的母矿。提炼时可以获得珍贵的魔法粉末（黑色）
        cm.itemQuantity(4020000) +//	石榴石母矿	发出红光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(红色) 。
        cm.itemQuantity(4010003) +//	朱矿石母矿	重而坚硬的朱矿石的母矿。提炼时可以获得珍贵的魔法粉末（褐色）。
        cm.itemQuantity(4020004) +//	蛋白石母矿	发出多种光彩的宝石的母矿.
        cm.itemQuantity(4020003) +//	祖母绿母矿	发出绿光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(嫩绿色) 。
        cm.itemQuantity(4010006) +//	黄金母矿	非常稀少的黄金的母矿。提炼时可以获得珍贵的魔法粉末（黄色）。
        cm.itemQuantity(4020005) +//	蓝宝石母矿	透明和有青光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(蓝色) 。
        cm.itemQuantity(4020006) +//	黄晶母矿	有黄光的宝石的母矿。提炼时可以获得珍贵的魔法粉末(黄色) 。
        cm.itemQuantity(4010001) +//	钢铁母矿	坚硬钢铁的母矿。提炼时可以获得珍贵的魔法粉末（蓝色）。
        cm.itemQuantity(4010004) +//	银的母矿	有光彩的银的母矿.
        cm.itemQuantity(4010005) +//	紫矿石母矿	非常稀贵的紫矿石的母矿.
        cm.itemQuantity(4010000);//	青铜母矿	轻且脆的青铜的母矿。提炼时可以获得珍贵的魔法粉末（褐色）。

    可获得累计经验 = 普通矿石数量 * 10;//

    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == -1) {
            cm.dispose();
        } else if (status == 0) {
            text = "#r请寻找各种矿石，\r\n";
            text += "使用矿石 兑换 #b10#r 豆豆\r\n";
            for (var i = 0; i < 普通母矿.length; i++) {
                text += "#v" + 普通母矿[i] + "#"
            }
            text += "\r\n#L0##k一键回收矿石#l\r\n\r\n";
            cm.sendSimple(text);

        } else if (status == 1) {
            if (selection == 0) {	//
                text = "以下为可回收的矿石#n\r\n";
                text += " - #k以下矿石可累计#r " + 可获得累计经验 + " #k点豆豆：\r\n";
                for (var i = 0; i < 普通母矿.length; i++) {
                    text += " - #d#z" + 普通母矿[i] + "##k - 当前拥有：#b#c" + 普通母矿[i] + "##k 颗。\r\n";
                }
                cm.sendYesNo(text);
            }

        } else if (status == 2) {
            cm.getPlayer().setBeans(cm.getPlayer().getBeans() + 可获得累计经验);
            cm.getPlayer().fakeRelog();
            cm.sendOk("回收成功，豆豆增加 #r" + 可获得累计经验 + "#k 个。\r\n\r\n");
            for (var i = 0; i < 普通母矿.length; i++) {
                cm.removeAll(普通母矿[i]);
            }
            cm.dispose();
            return;
        }
    }
}

