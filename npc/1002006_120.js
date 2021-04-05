function start() {
status = -1;

action(1, 0, 0);
}
function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
   cm.sendOk("感谢使用.");
   cm.dispose();
   return;                    
                }
                if (mode == 1) {
   status++;
  }
  else {
   status--;
  }
          if (status == 0) {
	var tex2 = "";	
	var text = "";
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "#d合成-- #r★8000HP血衣★需要以下物品：\r\n#v1012058##d8000HP血衣 1个\r\n#v4001126##d#z4001126# 5000个\r\n#v4031456##d#z4031456# 100个\r\n#v4002003##d#z4002003# 50个\r\n#v4000463##d#z4000463# 200个\r\n\r\n~\r\n"
	text += "\r\n#L1##d我收集了以上物品。确定制作8000HP血衣";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012060,1)){
			cm.sendOk("请清理你的背包，至少空出2个位置！");
            cm.dispose();
        } else if(cm.haveItem(4001126,5000) && cm.haveItem(4031456,100) &&  cm.haveItem(4002003,50) && cm.haveItem(4000463,200)){
			cm.gainItem(4001126, -5000);
			cm.gainItem(4031456, -100);
			cm.gainItem(4002003, -50);
			cm.gainItem(4000463, -200);
			
cm.gainItem(1012060,30,30,30,30,8000,8000,5,5,0,0,0,0,0,0);
            cm.sendOk("换购成功！");
            cm.dispose();
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]成功制作8000HP血衣，恭喜！！");
			}else{
            cm.sendOk("无法制作，或许你#v4001126#不足5000个\r\n#v4031456#不足100个\r\n#v4002003#不足200个\r\n#v4000463#不足300个\r\n");
            cm.dispose();
			}
		}
    }
}




