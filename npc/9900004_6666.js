function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            //显示物品ID图片用的代码是  #v这里写入ID#
            text += "#L1##r点我领取#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(2022336, 1)) {//二次判断是否存在神秘箱子（新手礼包箱子）
                cm.gainItem(2022336, -1);
				cm.gainNX(0);//删除背包内的箱子
                cm.gainDY(30000);//给予抵用卷30000点
				cm.gainMeso(1000000);//金币
				cm.gainItem(2000005, 50);//超级药水50瓶
				//cm.gainItem(4080000, 1);//五子棋
				//cm.gainItem(4080100, 1);//记忆大考验
				cm.gainItem(1052550,1,72); //海豹上衣
				cm.gainItem(1003713,1,72); //海豹手套
				cm.gainItem(1082493,1,72); //海豹帽子
				cm.gainItem(1112404,15,15,15,15,0,0,0,0,0,0,0,0,0,0); //极光戒指
				cm.gainItem(1142358,5,5,5,5,0,0,0,0,0,0,0,0,10,10); //新手勋章我最可爱
				//cm.gainItem(1002419,15,15,15,15,0,0,15,15,0,0,0,0,0,0,2);
                //cm.gainItem(5150001, 1);//给予- 射手村美发店高级会员卡 - 在射手村美发店可以用一次的会员卡.可以把发型变换到愿意的样子
                //cm.gainItem(5152001, 1);//给予- 射手村整形手术高级会员卡 - 在射手村整形手术医院可以用一次的会员卡.可以把脸变换到想要的样子.
                cm.sendOk("领取成功！");		
                cm.喇叭(3, "玩家：[" + cm.getName() + "]领取了王者冒险岛新人大礼包一份！");
                cm.dispose();
            } else {
                cm.sendOk("礼包呢？哪去了？你没礼包箱子你是怎么打开的？！");
                cm.dispose();
            }
        }
    }
}


