//importPackage(Packages.client);
//importPackage(Packages.client.inventory);
//importPackage(Packages.server);
//importPackage(Packages.tools);
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红桃心 = "#fEffect/CharacterEff/1112905/0/1#";//红桃心
var status = 0;

var itemList =  
Array(   
Array(1,800),
Array(2,300),
Array(3,80),
Array(4,800),
Array(5,100),
Array(6,50),
Array(7,300),
Array(8,300),
Array(9,600),
Array(10,200),
Array(11,600),
Array(12,300),
Array(13,300),
Array(14,800),
Array(15,300),
Array(16,300),
Array(15,500),
Array(18,300),
Array(16,300),
Array(20,300)
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
			
			var txt2 = "#d#L2#"+爱心+"领取赏金任务证明"+爱心+"\r\n\r\n";
			var txt3 = "#d#L3#"+爱心+"重置赏金猎人奖牌<放在装备栏第一格>"+爱心+"\r\n\r\n";
            var txt1 = "#d#L1#"+爱心+"开始赏金任务"+爱心+"\r\n\r\n";
         
            cm.sendSimple("#b#v1142747#每小时前10分钟可以在我这里领取随机奖励赏金任务!#k\r\n	 注意:\r\n	 1.任务完成时间不限时.\r\n	 2.任务开始要先领取赏金任务证明并放在装备栏第一格\r\n	 3.每位玩家仅能领取1次赏金猎人证明,请勿丢弃。\r\n#r当前时间："+clock+"#k\r\n" +txt2+ txt3+ txt1);
        } else if (status == 1) {
			if (selection == 1) {
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
					if(item.getId() == 1142747){
						if(item.getFlag() == 126){
							if(mm >= 0 && mm <= 10){
								var chance = Math.floor(Math.random() * 200);
								var finalitem = Array();
								for (var i = 0; i < itemList.length; i++) {
									if (itemList[i][1] >= chance) {
										finalitem.push(itemList[i]);
									}
								}
								if (finalitem.length != 0) {
									var item;
									var random = new java.util.Random();
									var finalchance = random.nextInt(finalitem.length);
									var flag = finalitem[finalchance][0];
									item.setFlag(flag-1);
									cm.openNpc(9050002, 17);
								}
							} else {
								cm.sendOk("请在每个小时的前10分钟找我领取赏金任务!\r\n#r当前时间："+clock+"#k\r\n");
							}
						} else {
							if(item.getFlag() == 0){
								if(mm >= 0 && mm <= 10){
									cm.openNpc(9050002, 17);
								} else {
									cm.sendOk("请在每个小时的前10分钟找我领取赏金任务!\r\n#r当前时间："+clock+"#k\r\n");
								}
							} else {
								cm.openNpc(9050002, 17);
							}
						}
					}else{
						cm.sendOk("请确认你是否将赏金任务证明并放到了装备栏第一格!");
					}
				}else {
					cm.sendOk("请确认你是否领取了赏金任务证明并放到了装备栏第一格!");
				}
			} 
			if (selection == 2) {
				if(cm.haveItem(1142747,1)){
					cm.sendOk("你已经获得了赏金猎人任务资格证明#v1142747#!\r\n快去领取赏金任务吧!");
				}else{
					if(cm.getOneTimeLog("赏金猎人证明") > 0){
						cm.sendOk("每位玩家只能领取一次赏金猎人证明!");
					} else {
						cm.setOneTimeLog("赏金猎人证明");
						cm.gainItem(1142747, 1);
						cm.sendOk("恭喜你获得赏金猎人任务资格证明#v1142747#!");
					}
				}
			} 
			if(selection == 3){
				if (cm.getInventory(1).getItem(1).getId() != 1142747){
					cm.sendOk("装备栏第一格必须是#v1142747#!");
					cm.dispose();
				}  else{
					cm.getInventory(1).getItem(1).setFlag(0);
					cm.sendOk("重置成功去领取任务吧!");
					cm.dispose();
				}
			}
        }
    }
}
