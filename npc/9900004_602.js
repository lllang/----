//importPackage(Packages.client);
//importPackage(Packages.client.inventory);
//importPackage(Packages.server);
//importPackage(Packages.tools);
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红桃心 = "#fEffect/CharacterEff/1112905/0/1#";//红桃心
var status = 0;
var itemList =  
Array(   
Array(1,500,4000011,50,"100w金币",5200000),
Array(2,500,4000036,50,"50抵用券",5680148),
Array(3,500,4000037,100,"50点券",1001095),
Array(4,500,4000043,50,"下等敏捷水晶",4251100),
Array(5,500,4170013,3,"混沌卷轴",2049100),
Array(6,500,4001084,1,"新年小红包",4031546),
Array(7,500,4031258,10,"月石",4011007),
Array(8,500,4031231,10,"星石",4021009),
Array(9,500,4000151,20,"D片",4031179),
Array(10,500,4000274,150,"祝福卷轴",2340000),
Array(11,500,4000069,50,"200W金币",4310028),
Array(12,500,4000406,30,"绿水灵邮票",4002003),
Array(13,500,4000019,100,"绿蜗牛邮票",4002000),
Array(14,500,4031196,1,"下等智慧水晶",4250900),
Array(15,500,4000026,5,"50抵用券",5680148),
Array(16,500,4000050,5,"50抵用券",5680148),
Array(17,500,2022116,15,"火焰的眼",4001017),
Array(18,500,4000194,10,"50抵用券",5680148),
Array(19,500,4001084,1,"吴子经验书",2370001),
Array(20,500,4000004,20,"50抵用券",5680148)
);
function start() {
	var now = new Date();
	var year = now.getFullYear();       //年
	var month = now.getMonth() + 1;     //月
	var day = now.getDate();            //日
	var hh = now.getHours();            //时
	var mm = now.getMinutes();          //分
	var ss = now.getSeconds();           //秒
	var clock = year + "-";
	if(month < 10)
	clock += "0";
	clock += month + "-";
	if(day < 10)
	clock += "0";
	clock += day + " ";
	if(hh < 10)
	clock += "0";
	clock += hh + ":";
	if (mm < 10) clock += '0'; 
	clock += mm + ":"; 
	if (ss < 10) clock += '0'; 
	clock += ss; 
	
    status = -1;
    action(1, 0, 0,clock);
}

function action(mode, type, selection,clock) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			
            var txt1 = "#d#L1#"+爱心+"完成赏金任务"+爱心+"\r\n\r\n";
			
			if(!cm.canHold(1112793,1))
				{
					cm.sendOk("请清理你的背包，至少空出2个位置！");
					cm.dispose();
				}else if(cm.getInventory(1).getItem(1)==null){
				cm.sendOk("对不起,你的装备栏第一个格子里面没有东西");
				cm.dispose();	
				return;
				}
				if(cm.haveItem(1142747,1)){
					var equip1 = cm.getInventory(1).getItem(1);
					if(equip1.getId() == 1142747){
						var chance = Math.floor(Math.random() * 200);
						var finalitem = Array();
						for (var i = 0; i < itemList.length; i++) {
							if (itemList[i][1] >= chance) {
								finalitem.push(itemList[i]);
							}
						}
						if (finalitem.length != 0) {
							if(equip1.getFlag()!=0){
								cm.sendSimple("#b#v1142747#当前赏金任务需求:\r\n\r\n收集#v"+finalitem[equip1.getFlag()][2]+"#×"+finalitem[equip1.getFlag()][3]+"个交给我!#k"+红桃心+"\r\n\r\n任务进度:[#c"+finalitem[equip1.getFlag()][2]+"#/"+finalitem[equip1.getFlag()][3]+"]\r\n\r\n任务奖励:#v"+finalitem[equip1.getFlag()][5]+"# "+finalitem[equip1.getFlag()][4]+"\r\n\r\n" + txt1);
							} else {
								var random = new java.util.Random();
								var finalchance = random.nextInt(finalitem.length);
								var flag = finalitem[finalchance][0];
								equip1.setFlag(flag);
								cm.sendSimple("#b#v1142747#当前赏金任务需求:\r\n\r\n收集#v"+finalitem[flag][2]+"#×"+finalitem[flag][3]+"个交给我!#k"+红桃心+"\r\n\r\n任务进度:[#c"+finalitem[flag][2]+"#/"+finalitem[flag][3]+"]\r\n\r\n任务奖励:#v"+finalitem[equip1.getFlag()][5]+"# "+finalitem[flag][4]+"\r\n\r\n" + txt1);
							}
						}
					}else{
						cm.sendOk("请确认你是否将赏金任务证明放到了装备栏第一格!");
					}
				}else {
					cm.sendOk("请确认你是否领取了赏金任务证明并放到了装备栏第一格!");
				}
        } else if (status == 1) {
			if (selection == 1) {
				if(!cm.canHold(1112793,1))
				{
					cm.sendOk("请清理你的背包，至少空出2个位置！");
					cm.dispose();
				}else if(cm.getInventory(1).getItem(1)==null){
				cm.sendOk("对不起,你的装备栏第一个格子里面没有东西");
				cm.dispose();	
				return;
				}
				if(cm.haveItem(1142747,1)){
					var item = cm.getInventory(1).getItem(1);
					if(item.getId() == 1142747){//任务flag比任务数组的排序少1
						if(item.getFlag() != 0){
							if(item.getFlag() ==0){
								if(cm.haveItem(4000011,50)){//蘑菇芽孢
									item.setFlag(126);
									cm.gainMeso(1000000);
									cm.gainItem(4000011,-50);
									cm.getPlayer().setBosslog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							} else if (item.getFlag() ==1){
								if(cm.haveItem(4000036,50)){//奇怪的药
									item.setFlag(126);
									cm.gainItem(4000036,-50);
									cm.gainDY(50);
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==2){
								if(cm.haveItem(4000037,100)){//
									item.setFlag(126);
									cm.gainItem(4000037,-100);
									cm.gainNX(50);
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==3){
								if(cm.haveItem(4000043,50)){//
									item.setFlag(126);
									cm.gainItem(4000043,-50);
									cm.gainItem(4251100,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==4){
								if(cm.haveItem(4170013,3)){
									item.setFlag(126);
									cm.gainItem(4170013,-3);
									cm.gainItem(2049100,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==5){
								if(cm.haveItem(4001084,1)){
									item.setFlag(126);
									cm.gainItem(4001084,-1);
									cm.gainItem(4031546,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==6){
								if(cm.haveItem(4031258,10)){
									item.setFlag(126);
									cm.gainItem(4031258,-10);
									cm.gainItem(4011007,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==7){
								if(cm.haveItem(4031231,10)){
									item.setFlag(126);
									cm.gainItem(4031231,-10);
									cm.gainItem(4021009,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==8){
								if(cm.haveItem(4000151,20)){
									item.setFlag(126);
									cm.gainItem(4000151,-20);
									cm.gainItem(4031179,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==9){
								if(cm.haveItem(4000274,150)){
									item.setFlag(126);
									cm.gainItem(4000274,-150);
									cm.gainItem(2340000,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==10){
								if(cm.haveItem(4000069,50)){
									item.setFlag(126);
									cm.gainItem(4000069,-50);
									cm.gainMeso(2000000)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==11){
								if(cm.haveItem(4000406,30)){
									item.setFlag(126);
									cm.gainItem(4000406,-30);
									cm.gainItem(4002003,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==12){
								if(cm.haveItem(4000019,100)){
									item.setFlag(126);
									cm.gainItem(4000019,-100);
									cm.gainItem(4002000,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==13){
								if(cm.haveItem(4031196,1)){
									item.setFlag(126);
									cm.gainItem(4031196,-1);
									cm.gainItem(4250900,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==14){
								if(cm.haveItem(4000026,5)){
									item.setFlag(126);
									cm.gainItem(4000026,-5);
									cm.gainDY(50)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==15){
								if(cm.haveItem(4000050,5)){
									item.setFlag(126);
									cm.gainItem(4000050,-5);
									cm.gainDY(50)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==16){
								if(cm.haveItem(2022116,15)){
									item.setFlag(126);
									cm.gainItem(2022116,-15);
									cm.gainItem(4001017,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==17){
								if(cm.haveItem(4000194,10)){
									item.setFlag(126);
									cm.gainItem(4000194,-10);
									cm.gainDY(50)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==18){
								if(cm.haveItem(4001084,1)){
									item.setFlag(126);
									cm.gainItem(4001084,-1);
									cm.gainItem(2370001,1)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}else if (item.getFlag() ==19){
								if(cm.haveItem(4000004,20)){
									item.setFlag(126);
									cm.gainItem(4000004,-20);
									cm.gainDY(50)
									cm.getPlayer().setBossLog("每日赏金");
									cm.sendOk("恭喜你完成赏金任务获得奖励!!");
									cm.喇叭(2, "玩家【" + cm.getPlayer().getName() + "】完成了赏金任务,获取缉拿奖励。");
									cm.dispose();	
								}else{
									cm.sendOk("请确认背包任务所需物品是否足够!!");
									cm.dispose();	
								}
							}
							
						} else if(item.getFlag() == 0){
							cm.sendOk("快去领取新的赏金任务吧!!");
						}
					}else{
						cm.sendOk("请确认你是否将赏金任务证明并放到了装备栏第一格!");
					}
				}else {
					cm.sendOk("请确认你是否领取了赏金任务证明并放到了装备栏第一格!");
				}
			} 
			
        }
    }
}
