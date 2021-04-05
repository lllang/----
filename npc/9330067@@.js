
var status = 0;
var zones = 0;
//4000425
var ItemId = Array(
	Array(11,"我要修仙#l\r\n"),
    Array(12,"修仙次数兑换属性装备#l\r\n")/*,
    Array(13,"完成第二次修仙#l\r\n"),
	Array(14,"完成第三次修仙#l\r\n")/*,
	//Array(84,"精品时装_上衣#l")*/
        );
		

function start() {
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
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			var 转生 = cm.getPlayer().getBossLog("转生",1);
            StringS = "#r#e这里是本服修仙系统！\r\n\r\n";
			StringS +="#b当前转生次数："+(转生)+"\r\n";
            for (var i = 0; i < ItemId.length; i++) {
                StringS +=     "#L" + i + "##d"+ItemId[i][1]+"\r\n";
            }
            cm.sendSimple(StringS);
            zones == 0;

        } else if (status == 1) {
			//下面不满足，所以不提示。
            if (zones == 1) {
                cm.sendNext("你让我帮你做什么呢？", 2);
                zones = 2;
            } else if (zones == 0) {
                cm.openNpc(9310019,ItemId[selection][0])
               
    }
}	}}