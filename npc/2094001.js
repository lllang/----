var status = -1;

function action(mode, type, selection) {
			if (!cm.canHold(4170005,1)) {
				cm.sendOk("請檢查你的其他欄有沒有空格");
				cm.dispose();
				return;
			}
			cm.removeAll(4001348);  //清楚物品所有数目
			cm.removeAll(4001347);  //清楚物品所有数目
			cm.removeAll(4001117);
			cm.removeAll(4001120);
			cm.removeAll(4001121);
			cm.removeAll(4001122);
			cm.removeAll(4001118);
			cm.removeAll(4031438);
			cm.removeAll(4031437);
			cm.removeAll(4001119);
			cm.removeAll(2022131);
			cm.removeAll(2022132);
			cm.removeAll(4001120);  //清楚物品所有数目
			cm.removeAll(4001121);  //清楚物品所有数目
			cm.removeAll(4001122);  //清楚物品所有数目
			cm.removeAll(2020001);  //清楚物品所有数目
				cm.gainItem(4170009, 1);//黄蛋
				//cm.gainAp(2);
				cm.gainExp(100000);//个人给经验
			cm.getPlayer().setBossLog("海盗组队",0);
				cm.gainItem(4002002,20);
				//cm.setBossLog("海盗组队次数");
				//cm.gainItem(randItem, qty);
				
				if (cm.isLeader()) {
				cm.sendOk("是队长。");
						if (cm.getLevel() > 119){
							
						//cm.gainItem(4001322, 1);//黄蛋
						var rand = 0 + Math.floor(Math.random() * 4);  //随机数
						if (rand==0){
								//cm.gainItem(4001322,1);//兵法
								//cm.gainAp(2);
								var bf="蓝宝石x2、";
								}else{
								var bf="";
						}
						cm.worldMessage(6,"玩家：["+cm.getName()+"]带领小弟们完成了海盗副本！经验值10W！");
						cm.warp(251010404);
						cm.safeDispose(); //结束脚本
						}else{
							//cm.gainItem(4001322, 1);
							//cm.gainAp(2);
							//cm.gainItem(4001322,1);//兵法
							//cm.gainExp(1000000);
							cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了海盗副本！、经验值10W！");
							cm.warp(251010404);
							cm.dispose();
						}
				}
				//cm.喇叭(1,"玩家："+cm.getName()+" 完成了天空女神副本！奖励黄蛋x1、兵法卷轴x1、经验值100W！");
				if (!cm.isLeader()) {
				cm.worldMessage(6,"玩家：["+cm.getName()+"]完成了海盗副本！、经验值10W！");
				cm.warp(251010404);
				cm.dispose();
				}
				}