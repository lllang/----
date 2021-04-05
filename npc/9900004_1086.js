var 装备图标 = "#fEffect/CharacterEff/1062114/1/0#";  //爱心
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 可回收金币数 = 0;
var 装备回收格子数 = 24;//X格子后会被回收
var itemList;
var 装备攻击对应的金币数 = new Array(
new Array(40,0),//Array(攻击/魔法力小于100,给0金币);这个不要去动后面这个0
new Array(100,500000),
new Array(110,500000),
new Array(120,500000),//Array(攻击/魔法力小于120,给150万金币);
new Array(130,500000),
new Array(140,500000),
new Array(150,500000),
new Array(160,500000),//所有区间段，是与上一个为大于，意思就是现在这个160给1000万，那就是大于150攻击小于160攻击给5000万。
new Array(170,500000),
new Array(180,500000),
new Array(190,500000),
new Array(200,500000),
new Array(210,500000),
new Array(220,500000),
new Array(230,500000),
new Array(240,500000),
new Array(9999,50000000)//这里不要动前面，后面5000万为给的金币上限，你可以修改。
)
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
      if(status == 0)
	  {
		 var text = "";
		  text = "		 "+装备图标+" ---- #d#e浪人 装备回收#k#n ---- "+装备图标+" \r\n\r\n";
		  text += "            #b- 欢迎光临 - #r浪人 - #b装备回收 -\r\n\r\n";
		  text += "            	 #b#L1#"+正方箭头+"开始回收装备#l\r\n\r\n";
		  cm.sendSimple(text);
	  }
	  else if (status == 1)
	  {
			if(selection == 1)
			{
				text = "		"+装备图标+"		- #b#e装 备 分 解#k#n -       "+装备图标+"\r\n\r\n";
				text += "               #e#r- "+装备回收格子数+"格子以后的装备会被回收 -#n\r\n#b";
				itemList = cm.getInventory(1).list().iterator();
				var indexof = 1;
				while (itemList.hasNext()) 
				{
					var item = itemList.next();
					var itemid = item.getItemId();
					if(item.getPosition()>装备回收格子数)
					{
						if (parseInt(item.getItemId() / 10000) >= 130 && parseInt(item.getItemId() / 10000) <= 149 ) 
						{
							if(item.getMatk()>=装备攻击对应的金币数[0][0]||item.getWatk()>=装备攻击对应的金币数[0][0])
							{
								text += "#v" + item.getItemId() + "#";
								if (indexof > 1 && indexof % 6 == 0) {
									text += "\r\n";
								}
							}
						}
					}
					indexof++;
				}
				cm.sendSimple(text);
			}
	  }
	  else if(status == 2)
	  {
		  可回收金币数 = 0;
		  text = "";
		  itemList = cm.getInventory(1).list().iterator();
			while (itemList.hasNext()) 
			{
				var item = itemList.next();
				var itemid = item.getItemId();
				if(item.getPosition()>装备回收格子数)
				{
					if (parseInt(item.getItemId() / 10000) >= 130 && parseInt(item.getItemId() / 10000) <= 149 ) 
					{
						for(var i=0;i<装备攻击对应的金币数.length;i++)
						{
							if(item.getMatk()>=装备攻击对应的金币数[0][0]||item.getWatk()>=装备攻击对应的金币数[0][0])
							{
								var 判断 = true;
								if(item.getMatk()>item.getWatk())
								{
									判断 = true;
								}
								else
								{
									判断 = false;
								}
								if(判断)
								{
									if(item.getMatk()<=装备攻击对应的金币数[i][0])
									{
										可回收金币数 = 可回收金币数 +  装备攻击对应的金币数[i][1];
										break;	
									}
								}
								else
								{
									if(item.getWatk()<=装备攻击对应的金币数[i][0])
									{
										可回收金币数 = 可回收金币数 +  装备攻击对应的金币数[i][1];
										break;	
									}
								}
							}
						}
					}
				}
			}
		  text += "#e 这些装备的预计可回收: #n\r\n\r\n#b";
		  text += "#b金币  :      #r["+可回收金币数+"]金币\r\n";
		  cm.sendNext(text);
	  }
	  else if(status == 3)
	  {
		  var list = [];
		  var itemList = cm.getInventory(1).list().iterator();
		 while (itemList.hasNext()) 
			{
				var item = itemList.next();
				var itemid = item.getItemId();
				if(item.getPosition()>装备回收格子数)
				{
					if (parseInt(item.getItemId() / 10000) >= 130 && parseInt(item.getItemId() / 10000) <= 149 ) 
					{
						if(item.getMatk()>=装备攻击对应的金币数[0][0]||item.getWatk()>=装备攻击对应的金币数[0][0])
						{
							list.push(item.getPosition());
						}
					}
				}
			}
			for(var i=0;i<list.length;i++)
			{
				cm.removeSlot(1, cm.getInventory(1).getItem(list[i]).getPosition(), 1);
			}
				text = "回收成功,获得"+可回收金币数+"金币";
				cm.gainMeso(可回收金币数);
				cm.sendOk(text);
				cm.dispose();
		  }
}