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
	text += "#d合成-- #r★3000HP血衣★需要以下物品：\r\n#v4001126##d#z4001126# 2000个\r\n#v4031456##d#z4031456# 30个\r\n#v4002001##d#z4002001# 50张\r\n#v4000463##d#z4000463# 50个\r\n~\r\n"
	text += "\r\n#L1##d我收集了以上物品。确定制作3000HP血衣";//七天
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1012058,1)){
			cm.sendOk("请清理你的背包，至少空出2个位置！");
            cm.dispose();
        } else if(cm.haveItem(4001126,2000) && cm.haveItem(4031456,30) && cm.haveItem(4002001,50) && cm.haveItem(4000463,50)){
			cm.gainItem(4001126, -2000);
			cm.gainItem(4031456, -30);
			cm.gainItem(4002001, -50);
			cm.gainItem(4000463, -50);
cm.gainItem(1012058,10,10,10,10,3000,3000,0,0,0,0,0,0,0,0);
            cm.sendOk("换购成功！");
            cm.dispose();
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]成功制作3000HP血衣，恭喜！！");
			}else{
             cm.sendOk("无法制作，或许你#v4001126#不足2000个\r\n#v4031456#不足30个\r\n#v4002003#不足50个\r\n#v4000463#不足50个\r\n");
            cm.dispose();
			}
		}
    }
}




