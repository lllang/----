load("nashorn:mozilla_compat.js");
importPackage(Packages.java.util);
importPackage(Packages.client);
importPackage(Packages.server);
var v = "#fUI/GuildMark/Mark/var ter/00005021/4#";
var 哎 = "#fUI/GuildMark/Mark/var ter/00005008/4#";
var p = "#fUI/GuildMark/Mark/var ter/00005015/4#";
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
var consume = 20;
var  itemList = [

	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "刀"},//500属性 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短刀"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "长仗"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "锤子"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "抢"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "奴"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "全套"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "爪子"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短枪"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗衣服"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗裤子"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠衣服"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠裤子"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手衣服"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手裤子"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师衣服"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师裤子"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士衣服"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士裤子"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "刀"},//500属性 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短刀"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "长仗"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "锤子"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "抢"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "奴"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "全套"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "爪子"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短枪"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗衣服"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗裤子"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠衣服"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠裤子"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手衣服"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手裤子"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师衣服"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师裤子"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士衣服"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士裤子"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "刀"},//500属性 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短刀"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "长仗"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "锤子"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "抢"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "奴"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "全套"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "爪子"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短枪"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗衣服"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗裤子"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠衣服"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠裤子"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手衣服"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手裤子"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师衣服"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师裤子"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士衣服"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士裤子"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "刀"},//500属性 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短刀"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "长仗"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "锤子"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "抢"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "奴"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "全套"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "爪子"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短枪"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗衣服"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗裤子"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠衣服"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠裤子"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手衣服"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手裤子"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师衣服"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师裤子"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士衣服"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士裤子"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
		{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "刀"},//500属性 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短刀"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "长仗"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "锤子"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "抢"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "奴"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "全套"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "爪子"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短枪"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗衣服"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗裤子"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠衣服"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠裤子"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手衣服"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手裤子"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师衣服"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师裤子"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士衣服"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士裤子"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
    {id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "刀"},//1000属性 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短刀"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "长仗"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "锤子"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "抢"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "奴"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "全套"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "爪子"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:100,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短枪"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗衣服"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗裤子"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠衣服"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠裤子"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:100,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手衣服"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:100,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手裤子"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师衣服"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师裤子"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士衣服"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士裤子"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "刀"},//2000属性 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短刀"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "长仗"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "锤子"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "抢"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "奴"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "全套"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "爪子"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:80,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短枪"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗衣服"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗裤子"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠衣服"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠裤子"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:80,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手衣服"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:80,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手裤子"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师衣服"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师裤子"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士衣服"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士裤子"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:80,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "刀"},//4000属性 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短刀"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "长仗"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "锤子"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "抢"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "奴"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "全套"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "爪子"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:50,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短枪"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗衣服"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗裤子"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠衣服"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠裤子"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:50,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手衣服"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:50,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手裤子"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师衣服"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师裤子"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士衣服"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士裤子"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:50,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "刀"},//6000属性 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短刀"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "长仗"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "锤子"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "抢"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "奴"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "全套"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "爪子"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "短枪"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗衣服"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "海盗裤子"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠衣服"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞侠裤子"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手衣服"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "弓手裤子"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师衣服"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "法师裤子"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士衣服"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "战士裤子"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
	{id: 1112444, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	{id: 1112443, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	{id: 1112442, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	{id: 1112441, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	{id: 1112440, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
	
	{id: 4441101, isEquipment:1 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "火刀"},//100赞助
	{id: 4440101, isEquipment:1 ,propertiesFlag: 0, probability:300,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "火刀"},//500
	{id: 4443101, isEquipment:1 ,propertiesFlag: 0, probability:20,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "火刀"},//1000

	{id: 4000464, isEquipment:1 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "火刀"},//中国心
	
	
	{id: 4310080, isEquipment:1 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "火刀"}//8888枫叶4000464
	

  



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
	        var  str1 = "             #d"+皇冠白+" - #r#e顶 级 抽 奖 系 统#d - "+皇冠白+"#n#l\r\n\r\n";
			
            str1 += ""+幸运草+" 这里可以使用顶级武器碎片进行抽奖有概率获得全属性500-6000的稀有神器神装，更有概率获得100-1000赞助充值。#l\r\n";
            str1 += "              #L1##b"+幸运草+" #k[#v4442100##bx1#k]抽一次#k#l\r\n\r\n\r\n";
            
      
            for (var  i = 0; i < itemList.length; i++) {
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
            if( cm.haveItem(4442100,1) ){
                cm.gainItem(4442100,-1);
                luckDraw()
            }else{
                cm.sendOk("道具不足：#v4442100# 1个");
		    }


    }   }
}

function luckDraw(){
    var  finalitem = getItem();
    var  id = parseInt(finalitem.id);
    var  isEquipment = parseInt(finalitem.isEquipment);
    var  propertiesFlag = parseInt(finalitem.propertiesFlag);
    var  probability = parseInt(finalitem.probability);
    var  properties = parseInt(finalitem.properties);
    var  doubleAttack =parseInt(finalitem.doubleAttack);
    var  hmp = parseInt(finalitem.hmp);
    var  doubleDefense = parseInt(finalitem.doubleDefense);
    var  avoid = parseInt(finalitem.avoid);
    var  hit = parseInt(finalitem.hit);
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
	cm.道具喇叭(finalitem.id, "恭喜彩虹岛[" + cm.getPlayer().getName() + "]使用顶级武器碎片抽取到稀有道具");//显示代码的道具喇叭
	}else{
    cm.道具喇叭(finalitem.id, "恭喜彩虹岛[" + cm.getPlayer().getName() + "]使用顶级武器碎片抽取到稀有道具");//显示代码的道具喇叭
	}
}

function getItem(){

    var  resultArray = [];
    var  chance = Math.floor(Math.random() * 500);
    for (var  i = 0; i < itemList.length; i++) {
        if (itemList[i].probability >=chance) {
            resultArray.push(itemList[i]);
        }
    }
    var  random = new java.util.Random();
    var  finalchance = random.nextInt(resultArray.length);
    //cm.sendOk(chance + "_" + resultArray.length + "_" + finalchance+"_"+resultArray[finalchance].id);
    return resultArray[finalchance];
}