var 音符 = "#fEffect/CharacterEff/1022223/4/0#";
var 音符1 = "#fEffect/CharacterEff/1112949/0/0#";
var 音符2 = "#fEffect/CharacterEff/1112949/1/0#";
var 兔子1 = "#fEffect/CharacterEff/1082565/0/0#";
var 兔子2 = "#fEffect/CharacterEff/1082565/2/0#";
var 兔子3 = "#fEffect/CharacterEff/1082565/4/0#";
var 星星1 = "#fEffect/CharacterEff/1051294/0/0#";
var 星星2 = "#fEffect/CharacterEff/1051295/0/0#";
var 星星3 = "#fEffect/CharacterEff/1051296/0/0#";
var 小雪花 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 爱心1 = "#fEffect/CharacterEff/1032063/0/0#";
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 美化new = "#fUI/UIWindow/Quest/icon5/1#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var 铅笔图标 = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var 警报灯 = "#fUI/StatusBar/BtClaim/normal/0#";
var H字母 = "#fUI/CashShop/CSEffect/effect/1#";
var 金币图标 = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var 游戏标题 = "#fString/ZEVMS.img/游戏标题/游戏标题#";


var getView = function (itemId) {
    return "#v" + itemId + "#";
}
var getNum = function (itemId) {
    return "#c" + itemId + "#";
}
var getName = function (itemId) {
    return "#z" + itemId + "#";
}
var formatTextForCost = function(cost){
    var text = "#b"+cost.num+"";
    if(cost.type==0){
        return text+"金币";
    }
    if(cost.type==1){
        return text+"钻石";
    }
    if(cost.type==2){
        return text+"个"+getName(cost.id)+getView(cost.id);
    }
}
var costCheck = function(cm,cost){
    var flag = false;
    if(cost.type==0)
        flag = cm.getMeso()>=cost.num;
    if(cost.type==1)
        flag = cm.getzb()>=cost.num;
    if(cost.type==2)
        flag = cm.haveItem(cost.id,cost.num);
    return flag;
}
var costAction = function(cm,cost){
    if(cost.type==0)
        cm.gainMeso(-cost.num);
    if(cost.type==1)
        cm.gainzb(-cost.num);
    if(cost.type==2)
        cm.gainItem(cost.id,-cost.num);
}
var mapId = 910000019;
var map= {x:555,y:94};
var mobList=[
    {id:9300742 ,name:"希纳斯（初级）",hp:40000000000},
    {id:8800400 ,name:"蜘蛛女王（初级）",hp:40000000000},
	{id:8920100 ,name:"混沌血腥女王（中级）",hp:100000000000},
	//{id:9700006,name:"森兰丸（中级）",hp:10000000000},
	{id:9700008,name:"材料BOSS（小丑）",hp:10000000000},
	{id:9410224,name:"秦始皇（高级）",hp:300000000000},
	//{id:8880000,name:"麦格纳斯（终极）",hp:600000000000},
    {id:9700007,name:"黛米安（终极）",hp:600000000000}
];
//type 0 金币,1 钻石,2 物品
var costList = [
    {type:2,id:2590000,num:1},//1
	{type:2,id:2590000,num:1},//2
	{type:2,id:2640011,num:1},//3
	{type:2,id:2640011,num:1},//4
	{type:2,id:2640011,num:1},//4
	{type:2,id:2613001,num:1},//5
	{type:2,id:2613001,num:1},//6
	{type:2,id:2613001,num:1}//6
]

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
            var text = "            "+音符+"欢迎来到召唤中心"+音符+"\r\n";
            for(var i =0;i<mobList.length;i++){
                text += "#L"+i+"# #k花费"+formatTextForCost(costList[i])+"召唤 #r "+警报灯+mobList[i].name+警报灯+"  #l \r\n";
            }
			cm.sendSimple(text);
		} else if (status == 1) {
            var index = selection;
            if(!costCheck(cm,costList[index])){
                cm.sendSimple("抱歉，您的召唤材料不足，请检查后重试。");
                cm.dispose();
                return;
            }
            costAction(cm,costList[index]);
            cm.spawnMobOnMap(mobList[index].id, 1, map.x, map.y, mapId, mobList[index].hp);
            cm.dispose();
		}
	}
}
