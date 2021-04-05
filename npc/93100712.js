
var v = "#fUI/GuildMark/Mark/Letter/00005021/4#";
var 哎 = "#fUI/GuildMark/Mark/Letter/00005008/4#";
var p = "#fUI/GuildMark/Mark/Letter/00005015/4#";
var 皇冠白 ="#fUI/GuildMark/Mark/Etc/00009004/15#";
var 幸运草 ="#fUI/GuildMark/Mark/Plant/00003006/15#";
var 香水 ="#fUI/GuildMark/Mark/Pattern/00004008/15#";
var 中条白 ="#fUI/Basic/HScr7/disabled/base#";
var 中条蓝 ="#fUI/ChatBalloon/tutorial/w#";

var 中条猫 ="#fUI/ChatBalloon/119/n#";
var 猫右 =  "#fUI/ChatBalloon/119/ne#";
var 猫左 =  "#fUI/ChatBalloon/119/nw#";
var 右 =    "#fUI/ChatBalloon/119/e#";
var 左 =    "#fUI/ChatBalloon/119/w#";
  
var 下条猫 ="#fUI/ChatBalloon/119/s#";
var 猫下右 ="#fUI/ChatBalloon/119/se#";
var 猫下左 ="#fUI/ChatBalloon/119/sw#";

var 彩虹1 ="#fUI/ChatBalloon/122/n#";
var 彩虹上1 =  "#fUI/ChatBalloon/122/ne#";
var 彩虹上2 =  "#fUI/ChatBalloon/122/nw#";
var 彩1 =    "#fUI/ChatBalloon/122/e#";
var 彩2 =    "#fUI/ChatBalloon/122/w#";
  
var 彩虹下 ="#fUI/ChatBalloon/122/s#";
var 彩虹下1 ="#fUI/ChatBalloon/122/se#";
var 彩虹下2 ="#fUI/ChatBalloon/122/sw#";
var 彩虹中 ="#fUI/ChatBalloon/122/head#";
//
var 梅花 ="#fUI/GuildMark/Mark/Animal/00002008/14#";
var 蝴蝶 ="#fUI/GuildMark/Mark/Animal/00002020/14#";
var 星星 = "#fEffect/CharacterEff/1114000/2/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 正方形 = "#fUI/UIWindow/Quest/icon3/6#";
var 蓝色箭头 = "#fUI/UIWindow/Quest/icon2/7#";
var 圆形 = "#fUI/UIWindow/Quest/icon3/6#";//"+圆形+"
var 感叹号 = "#fUI/UIWindow/Quest/icon0#";
var 退出 = "#fUI/CN_Chat/ChattingRoom/BtExit/0/mouseOver/0#";
var 奖励 = "#fUI/UIWindow/Quest/reward#";
var 键盘 = "#fUI/UIWindow/SoftKeyboard/key/97/mouseOver/0#";
var 二段跳 = "#fSkill/411/skill/4111006/iconMouseOver#";
var 购买 = "#fUI/UIWindow/PersonalShop/BtBuy/mouseOver/0#";
status = -1;
// 定义抽奖消耗
//isEquipment:是装备还是非裝備 1代表是 0代表不是
//porpertiesFlag: 是否自定义修改属性 0代表否 1代表是
//probability: 概率 1-500	
//properties: 4维
//doubleAttack:双攻
//hmp: 红蓝
//doubleDefense:双防
//avoid:回避
//hit:命中
let consume = 20;
let itemList = [
    
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	
    {id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	
	
 
	
	
	
   

	
	

	{id: 1032219, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack: 300, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神秘之影战斗枪"},
	
 

	
	
	
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "属性点装"}
    
    //{id: 1302160, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "蝙蝠鞭子"},
    //{id: 1302161, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "蝙蝠鞭子"},
    //{id: 1302162, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "蝙蝠鞭子"},
    //{id: 1432037, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "枫叶	  "},
    //{id: 1402063, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "樱花伞	"},
    //{id: 1092022, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "调色板盾牌		"},
    //{id: 1302106, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "燃烧的冰焰刀"},
    //{id: 1302080, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冒险岛小灯泡"},
    //{id: 1302085, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "叉子"},
    //{id: 1302087, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "火炬"},
    //{id: 1402044, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "南瓜灯笼"},
    //{id: 1302061, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "蔓藤鞭子"},
    //{id: 1432046, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "圣诞树手杖"},
    //{id: 1302024, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "废报纸武器"},
    //{id: 1322051, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "七夕"},
    //{id: 1402014, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "温度计"},
    //{id: 1402029, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "鬼刺狼牙棒"},
    //{id: 1332053, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "野外烧烤"},
    //{id: 1372017, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "领路灯"},
    //{id: 1442039, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冻冻鱼"},
    //{id: 1332021, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "乌龙茶"},
    //{id: 1302036, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "枫叶小旗 "},
    //{id: 1092049, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "热情剑盾"},
    //{id: 1302049, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "光线鞭"},
    //{id: 1012056, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "狗狗鼻子1012056"},
    //{id: 1012161, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "发光的鼻子"},
    //{id: 1402037, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "龙背刀"},
	

];


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("再见。加把油。");
            cm.dispose();
        }
        status--;
    }


    if (status == 0) { //这里就是脚本开始的地方
	        let str1 = "                #d"+皇冠白+" - #g#e娱乐抽奖#d - "+皇冠白+"#n#l\r\n\r\n";
			str1 += " "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
            //str1 += "#L3##r#e"+幸运草+" [中介币]抽一次#l\r\n";//"+consume*10+"
            str1 += "   #L3##b"+幸运草+" #k[#v4031549##bx1#k]抽一次#k#l";
            str1 += " #L1##r"+幸运草+" #k[#r100 元宝#k]抽一次#k\r\n#l";
			
            str1 += "   #L4##b"+幸运草+" #k[#v4031549##bx9#k]十连抽#k#l";
            str1 += " #L2##r"+幸运草+" #k[#r1000元宝#k]十连抽#k#l\r\n\r\n";
			str1 += " "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
            str1 += "            #n - #b抽到星球和骑宠请联系GM -\r\n\r\n";
			//str1 += "            #n - #b称号四维+200攻击+500属性+50 -\r\n\r\n";
            for (let i = 0; i < itemList.length; i++) {
			if (str1.indexOf(itemList[i].id) == -1){
                str1 += "#v" + itemList[i].id + "#";
            }
			}
            cm.sendOk(str1);
    } else if (status == 1) {
        if (selection == 1) {

            if ( cm.getInventory(1).isFull(0)||cm.getInventory(2).isFull(0)||cm.getInventory(4).isFull(0)) {
                cm.sendSimple("您的背包空间不足。\r\n\r\n请#r装备、其他、消耗#k栏最少留出 #r1#k 个空位。");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= 100){
                cm.getPlayer().setAccountLog("累计赞助积分_暂用", 1, -100);
                luckDraw()
            }else{
                cm.sendOk("元宝不足：100" );
            }
        }else if (selection == 3) {
            if ( cm.getInventory(1).isFull(0)||cm.getInventory(2).isFull(0)||cm.getInventory(4).isFull(0)) {
                cm.sendSimple("您的背包空间不足。\r\n\r\n请#r装备、其他、消耗#k栏最少留出 #r1#k 个空位。");
                cm.dispose();
                return;
            }
            if( cm.haveItem(4031549,1) ){
                cm.gainItem(4031549,-1);
                luckDraw()
            }else{
                cm.sendOk("道具不足：#v4031549# 1个");
		}
        }else if(selection == 2){

            if ( cm.getInventory(1).isFull(9)||cm.getInventory(2).isFull(9)||cm.getInventory(4).isFull(9)) {
                cm.sendSimple("您的背包空间不足。\r\n\r\n请#r装备、其他、消耗#k栏最少留出 #r10#k 个空位。");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountLog("累计赞助积分_暂用",1) >= 1000) {
                cm.getPlayer().setAccountLog("累计赞助积分_暂用", 1, -1000);//-consume * 10
                for (let i = 0; i < 10; i++) {
                    luckDraw();
                }
            }else{
                cm.sendOk("元宝不足：1000");// + consume * 10
        }
        }else if(selection == 4){

            if ( cm.getInventory(1).isFull(9)||cm.getInventory(2).isFull(9)||cm.getInventory(4).isFull(9)) {
                cm.sendSimple("您的背包空间不足。\r\n\r\n请#r装备、其他、消耗#k栏最少留出 #r10#k 个空位。");
                cm.dispose();
                return;
            }
            if(cm.haveItem(4031549,9) ) {
			   cm.gainItem(4031549,-9);
                for (let i = 0; i < 10; i++) {
                    luckDraw();
                }
            }else{
                cm.sendOk("道具不足：#v4031549# 9个");// + consume * 10
            }

    }   }
}

function luckDraw(){
    let finalitem = getItem();
    let id = parseInt(finalitem.id);
    let isEquipment = parseInt(finalitem.isEquipment);
    let propertiesFlag = parseInt(finalitem.propertiesFlag);
    let probability = parseInt(finalitem.probability);
    let properties = parseInt(finalitem.properties);
    let doubleAttack =parseInt(finalitem.doubleAttack);
    let hmp = parseInt(finalitem.hmp);
    let doubleDefense = parseInt(finalitem.doubleDefense);
    let avoid = parseInt(finalitem.avoid);
    let hit = parseInt(finalitem.hit);
    if (isEquipment==1 && propertiesFlag == 1) {
        try {
            cm.gainItem(id, properties, properties, properties, properties, hmp, hmp, doubleAttack, doubleAttack, doubleDefense, doubleDefense, hit, avoid, 0, 0);
        } catch (e) {
            cm.喇叭(2, "物品出错id："+id+"_"+properties+"_"+properties+"_"+properties+"_"+properties+"_"+hmp+"_"+hmp+"_"+doubleAttack+"_"+doubleAttack+"_"+doubleDefense+"_"+doubleDefense+"_"+hit+"_"+avoid+"_");
        }
    }else{
        cm.gainItem(id,1);
    }
	if(cm.getItemName(id) =="" || cm.getItemName(id) == null){
		
    Packages.handling.world.World.Broadcast.broadcastMessage
    (Packages.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),
    "[新年抽奖]" + " : " + "恭喜彩虹岛[" + cm.getPlayer().getName() + "]抽奖抽到【"+finalitem.remark+"】！！",true));
	}else{
    Packages.handling.world.World.Broadcast.broadcastMessage
    (Packages.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),
    "[新年抽奖]" + " : " + "恭喜彩虹岛[" + cm.getPlayer().getName() + "]抽奖抽到【"+cm.getItemName(id)+"】！！",true));
	}
}

function getItem(){

    let resultArray = [];
    let chance = Math.floor(Math.random() * 500);
    for (let i = 0; i < itemList.length; i++) {
        if (itemList[i].probability >=chance) {
            resultArray.push(itemList[i]);
        }
    }
    let random = new java.util.Random();
    let finalchance = random.nextInt(resultArray.length);
    //cm.sendOk(chance + "_" + resultArray.length + "_" + finalchance+"_"+resultArray[finalchance].id);
    return resultArray[finalchance];
}