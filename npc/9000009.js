var status = -1;
var msg;
var sel;
var item = [1932010,1932023,1932044,1932043,1932047,1932053,1932071,1932081,1932087,1932105,1932107,1932109,1932110,1932110,1932140,1932164,1932152,1932154,1932156,1932158,1932159,1932166,1932170,1932193,1932195,1932201,1932212,1932213,1932215,1932223,1932234,1932239,1932246,1932251,1932252,1932254,1932259,1932260,1932265,1932264,1932287,1932291,1932297,1932315,1932316,1932323,1932327,1932329,1932330,1932335,1932342,
1932351,1932352,1932361,1932366,1932376,1932178,1932177,1932190,1932205,1932263,1932293,1932308,1932318,1932350,1932034,1932099,1932106];
var random = true;
var need = 5000;

function start(){
	action(1, 0, 0);
}

function action(mode, type, selection){
	if(mode == 1){
		status++;
	} else if(mode == 0){
		status--;
	} else {
		cm.dispose();
		return;
	}
	if(status == 0) {
		msg = "你好,我是皇家骑宠代理人,你将愿意花费点券在我这里随机获取皇家骑宠技能吗 ?";
		if(cm.getPlayer().getMountId() != 0 && Packages.server.MapleItemInformationProvider.getInstance().itemExists(cm.getPlayer().getMountId())){
			msg += "\r\n#r 目前你的骑宠是 : #i" + cm.getPlayer().getMountId() + "##t" + cm.getPlayer().getMountId() + "#";
		}
		cm.sendYesNo(msg);
	} else if(status == 1) {
		cm.sendSimple("#b#L0# 抽取骑宠#l\r\n#r #L1#查看骑宠种类");
	} else if(status == 2) {
		msg = "\r\n";
		if(selection == 1){
			for(var i = 0; i < item.length; i++){
				if(Packages.server.MapleItemInformationProvider.getInstance().itemExists(item[i])){
					msg += "#i"+item[i]+":##t"+item[i]+"#\r\n ";
				}
			}
			cm.sendNext(msg);
			status = 0;
		}
		
		if(selection == 0 && random){
			if(cm.getPlayer().getNX() < need){
				cm.sendNext("点券不足" + need);
				cm.dispose();
				return;
			} else if(!cm.canHold(1932081)){
				//cm.sendNext("装备栏空间不足");
				//cm.dispose();
				//return;
			}
			
			var exist = true;
			do{
				sel = Math.floor(Math.random() * item.length);
				exist = Packages.server.MapleItemInformationProvider.getInstance().itemExists(item[sel]);
			}while(!exist);
			cm.getPlayer().setMountId(item[sel]);
			cm.getPlayer().modifyCSPoints(1, -need, true);
			cm.sendNext("你获得了 #i"+item[sel]+":##t"+item[sel]+"#");
			cm.dispose();
		} else {
			if(selection == 0){
				for(var i = 0; i < item.length; i++){
					msg += "#L"+i+"##i"+item[i]+":##t"+item[i]+"\r\n";
				}
				cm.sendSimple(msg);
			}
		}
	} else if(status == 3){
		if(!random){
			sel = selection;
			cm.sendYesNo("你确定是否选择 #i"+item[sel]+":##t"+item[sel]+"#");
		}
	} else if(status == 4){
		if(!random){
			cm.getPlayer().setMountId(item[sel]);
			cm.sendNext("你获得了 #i"+item[sel]+":##t"+item[sel]+"#");
			cm.dispose();
		}
	} else {
		cm.dispose();
	}
}
