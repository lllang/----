var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //兔子粉

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if (cm.getPlayer().getLevel() < 10) {
        cm.sendOk("你的等级未达到10级，因此未能解锁本功能");
        cm.dispose();
		 }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
            cm.dispose();
        }  
    else if (status == 0) {
        var selStr = "  ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★\r\n";


			   
			  
			  
		 selStr += "┏━━━━━━━━━━━━━━━━━━━━━━━┓\r\n\r\n"; 
		 
		 
		 selStr += "     #L1##r#e宝箱抽奖#l #L2##b#e奖品展示#l\r\n";



		
		 
		 
	   
		
		  
 selStr +="#n#k\r\n\r\n┗━━━━━━━━━━━━━━━━━━━━━━━┛\r\n"	
 selStr += "  ★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★☆★\r\n"; 
 
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 1:
            cm.dispose();
			cm.openNpc(9110014,2);
            break; 
			
			case 2:
            cm.dispose();
			cm.openNpc(9110014,1);
            break; 
      
            case 3:
			var text = "\t\t\t\t#e#d★ 百宝箱达人 ★#k#n\r\n\r\n";
			text += "\t#e名次#n\t#e玩家昵称#n\t\t\t#e积分#n\t\t #e#n\r\n";
			var rankinfo_list=cm.getBossRankCountTop("百宝积分");
			if(rankinfo_list!=null){
				for(var i=0;i<rankinfo_list.size();i++){
					if(i==10){
						break;
					}
					var info=rankinfo_list.get(i);

					text+=i==1?"#r":i==2?"#g":i==3?"#b":"";
					text += "\t " + (i+1) + "\t\t ";
					// 填充名字空格
					text += info.getCname();
					for (var j = 16 - info.getCname().getBytes().length; j > 0 ; j--) {
						text += " ";
					}
					text += "\t  " + info.getCount();
					
					text += "\t\t\t #k";

					text += "\r\n";
				}
			}
			cm.sendOkS(text, 3);
			cm.dispose();

		}
    }
}