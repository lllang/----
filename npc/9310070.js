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
    {id: 1332289, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "创世"},//复制备用 
	{id: 1702598, isEquipment:1 ,propertiesFlag: 1, probability:1,properties: 1266, doubleAttack: 1266, hmp: 0, doubleDefense:0, avoid:1266, hit:1266, remark: "创世"},//复制备用 
    {id: 1382273, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
    {id: 1492245, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
    {id: 1402267, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
    {id: 1422196, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
    {id: 1432226, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
    {id: 1442284, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
    {id: 1452265, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
    {id: 1462251, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
    {id: 1482232, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
	{id: 1472275, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "创世"},
	
    //{id: 1302275, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 155, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},//复制备用
    //{id: 1332225, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 155, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
    //{id: 1492179, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 130, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
   //{id: 1382208, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
    //{id: 1402196, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
    //{id: 1422140, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
    //{id: 1432167, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
    //{id: 1442223, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
    //{id: 1452205, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
    //{id: 1462193, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
	//{id: 1472214, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 130, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
	//{id: 1482168, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 130, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN武器"},
	
	{id: 1302063, isEquipment:1 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "火刀"},//复制备用
    {id: 1092048, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冰刀盾"},
    {id: 1092049, isEquipment:1 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "剑盾"},
    //{id: 1302156, isEquipment:1 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "黑刀"},
    //{id: 1302157, isEquipment:1 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "单手砍刀"},
    //{id: 1402305, isEquipment:1 ,propertiesFlag: 0, probability:8,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "双手大砍刀"},
    //{id: 1452152, isEquipment:1 ,propertiesFlag: 0, probability:8,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "黄虎弓"},
    //{id: 1432152, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "四皇白胡子"},
	{id: 1102723, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "翅膀"},
	{id: 1102724, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "翅膀"},	
	{id: 1102588, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "翅膀"},	
	{id: 1102487, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "翅膀"},	
	
	
	{id: 1112951, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "麦格纳斯的愤怒"},
	{id: 1112952, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "希拉的愤怒"},
	{id: 1012174, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "鬼娃面具"},
	{id: 1132211, isEquipment:1 ,propertiesFlag: 0, probability:80,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "意志腰带"},
	{id: 1132212, isEquipment:1 ,propertiesFlag: 0, probability:60,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "意志腰带"},
	{id: 1132213, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "意志腰带"},
	{id: 1132214, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "意志腰带"},
	
    {id: 1122236, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "觉醒冒险心"},//复制备用
    {id: 1122237, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "觉醒冒险心"},
	{id: 1122238, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "觉醒冒险心"},
    {id: 1122239, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "觉醒冒险心"},
	{id: 1122240, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "觉醒冒险心"},
	
	{id: 1032205, isEquipment:1 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神话耳环1"},
	{id: 1032206, isEquipment:1 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神话耳环1"},//复制备用
    {id: 1032207, isEquipment:1 ,propertiesFlag: 0, probability:120,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神话耳环2"},
	{id: 1032208, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神话耳环3"},
    {id: 1032209, isEquipment:1 ,propertiesFlag: 0, probability:80,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神话耳环4"},
	{id: 1032219, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神话耳环5"},
	
    {id: 1102482, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君赫尔梅斯披风"},//复制备用
    {id: 1102481, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君西亚戴斯披风"},
    {id: 1102484, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君利卡昂披风"},
    {id: 1102485, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君阿尔泰披风"},
    {id: 1102483, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君凯伦披风"},
    {id: 1072747, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君阿尔泰靴"},
    {id: 1072745, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君凯伦靴"},
    {id: 1072744, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君赫尔梅斯靴"},
    {id: 1072746, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君利卡昂靴"},
    {id: 1072743, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君西亚戴斯靴"},
    {id: 1082547, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君阿尔泰手套"},
    {id: 1082544, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君赫尔梅斯手套"},
    {id: 1082546, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君利卡昂手套"},
    {id: 1082545, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君凯伦手套"},
    {id: 1082543, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君西亚戴斯手套"},
    {id: 1132176, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君凯伦腰带"},
    {id: 1132175, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君赫尔梅斯腰带"},
    {id: 1132177, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君利卡昂腰带"},
    {id: 1132174, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君西亚戴斯腰带"},
    {id: 1132178, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君阿尔泰腰带"},
	{id: 2614001, isEquipment:1 ,propertiesFlag: 0, probability:40, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君阿尔泰腰带"},
	{id: 2614000, isEquipment:1 ,propertiesFlag: 0, probability:40, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "暴君阿尔泰腰带"},

	{id: 1132169, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君赫尔梅斯披风"},//复制备用
    {id: 1132170, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君西亚戴斯披风"},
    {id: 1132171, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君利卡昂披风"},
    {id: 1132172, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君阿尔泰披风"},
    {id: 1132173, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君凯伦披风"},
    {id: 1102476, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君阿尔泰靴"},
    {id: 1102477, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君凯伦靴"},
    {id: 1102478, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君赫尔梅斯靴"},
    {id: 1102479, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君利卡昂靴"},
    {id: 1102480, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君西亚戴斯靴"},
    {id: 1072737, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君阿尔泰手套"},
    {id: 1072738, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君赫尔梅斯手套"},
    {id: 1072739, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君利卡昂手套"},
    {id: 1072740, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小暴君凯伦手套"},
    {id: 1072741, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "小君西亚戴斯手套"},
	
    {id: 1112763, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神秘之影双手锤"},
    {id: 1112775, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神秘之影短圣仗"},
    {id: 1112771, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神秘之影长圣仗"},
    {id: 1112767, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "神秘之影战斗枪"},
    
    {id: 1032220, isEquipment:1 ,propertiesFlag: 0, probability:150,properties: 10, doubleAttack: 10, hmp: 100, doubleDefense:100, avoid:1, hit:1, remark: "低级贝勒德耳环"},
    {id: 1113072, isEquipment:1 ,propertiesFlag: 0, probability:150,properties: 10, doubleAttack: 10, hmp: 100, doubleDefense:100, avoid:1, hit:1, remark: "低级贝勒德戒指"},
    {id: 1122264, isEquipment:1 ,propertiesFlag: 0, probability:150,properties: 10, doubleAttack: 10, hmp: 100, doubleDefense:100, avoid:1, hit:1, remark: "低级贝勒德刻印吊坠"},
    {id: 1132243, isEquipment:1 ,propertiesFlag: 0, probability:150,properties: 10, doubleAttack: 10, hmp: 100, doubleDefense:100, avoid:1, hit:1, remark: "低级贝勒德刻印腰带"},
    {id: 1032221, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 20, doubleAttack: 20, hmp: 200, doubleDefense:100, avoid:1, hit:1, remark: "中级贝勒德耳环"},
    {id: 1113073, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 20, doubleAttack: 20, hmp: 200, doubleDefense:100, avoid:1, hit:1, remark: "中级贝勒德戒指"},
    {id: 1122265, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 20, doubleAttack: 20, hmp: 200, doubleDefense:100, avoid:1, hit:1, remark: "中级贝勒德刻印吊坠"},
    {id: 1132244, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 20, doubleAttack: 20, hmp: 200, doubleDefense:100, avoid:1, hit:1, remark: "中级贝勒德刻印腰带"},
    {id: 1032222, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 30, doubleAttack: 30, hmp: 400, doubleDefense:100, avoid:1, hit:1, remark: "高级贝勒德耳环"},
    {id: 1113074, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 30, doubleAttack: 30, hmp: 400, doubleDefense:100, avoid:1, hit:1, remark: "高级贝勒德戒指"},
    {id: 1122266, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 30, doubleAttack: 30, hmp: 400, doubleDefense:100, avoid:1, hit:1, remark: "高级贝勒德刻印吊坠"},
    {id: 1132245, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 30, doubleAttack: 30, hmp: 400, doubleDefense:100, avoid:1, hit:1, remark: "高级贝勒德刻印腰带"},
	
    {id: 1003242, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "宝石套装"},
    {id: 1052357, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "宝石套装"},
    {id: 1102294, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "宝石套装"},
    {id: 1072521, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "宝石套装"},
    {id: 1082314, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "宝石套装"}, 
    {id: 1003843, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "宝石套装"}, 
	
    {id: 1132110, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "传说套装"},
    {id: 1102322, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "传说套装"},
    {id: 1082391, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "传说套装"},
    {id: 1072610, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "传说套装"},
    {id: 1052405, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "传说套装"}, 
    {id: 1003364, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "传说套装"}, 
	
    {id: 1122174, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "运动套装"},
    {id: 1082401, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "运动套装"},
    {id: 1072618, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "运动套装"},
    {id: 1062148, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "运动套装"},
    {id: 1042231, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "运动套装"}, 
    {id: 1032121, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "运动套装"}, 
	
    {id: 1132154, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "紫金套装"},
    {id: 1102441, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "紫金套装"},
    {id: 1082433, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "紫金套装"},
    {id: 1072666, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "紫金套装"},
    {id: 1052461, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "紫金套装"}, 
    {id: 1003552, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "紫金套装"}, 
	
    {id: 1132161, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "风暴套装"},
    {id: 1102467, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "风暴套装"},
    {id: 1082438, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "风暴套装"},
    {id: 1072672, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "风暴套装"},
    {id: 1052467, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "风暴套装"}, 
    {id: 1003561, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "风暴套装"}, 
	
    {id: 1132209, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "终极套装"},
    {id: 1102506, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "终极套装"},
    {id: 1082498, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "终极套装"},
    {id: 1072768, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "终极套装"},
    {id: 1052569, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "终极套装"}, 
    {id: 1003740, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "终极套装"}, 
	
    {id: 1132242, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "革命套装"},
    {id: 1102612, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "革命套装"},
    {id: 1082540, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "革命套装"},
    {id: 1072853, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "革命套装"},
    {id: 1052647, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "革命套装"}, 
    {id: 1003946, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "革命套装"}, 
	
    {id: 1132152, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "外星套装"},
    {id: 1122197, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "外星套装"},
    {id: 1112738, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "外星套装"},
    {id: 1082432, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "外星套装"},
    {id: 1072664, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "外星套装"}, 
    {id: 1052460, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "外星套装"}, 
    {id: 1032142, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "外星套装"}, 
    {id: 1003540, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "外星套装"}, 
	
	
    {id: 1004492, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝防具"},
    {id: 1052929, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝防具"},
    {id: 1073057, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝防具"},
    {id: 1082647, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝防具"},
    {id: 1102828, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝防具"},
	
    {id: 1012331, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝饰品"},
    {id: 1022148, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝饰品"},
    {id: 1032137, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝饰品"},
    {id: 1122306, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝饰品"},
    {id: 1132287, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "寻宝饰品"},
	
    {id: 2340000, isEquipment:0 ,propertiesFlag: 0, probability:300,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "祝福卷轴"},
    //{id: 2049100, isEquipment:0 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "混沌卷轴60%"},
    {id: 2340000, isEquipment:0 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "祝福卷轴"},
    //{id: 2049100, isEquipment:0 ,propertiesFlag: 0, probability:300,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "混沌卷轴60%"},
	
    {id: 5520000, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "剪刀"},
    {id: 5570000, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "金锤子%"},
    //{id: 2070006, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "齿轮"},
    //{id: 2070007, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "月牙"},
    {id: 1112915, isEquipment:0 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "纸飞机"},
    //{id: 2070024, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞镖"},
    //{id: 2070016, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞镖"},
    //{id: 2070023, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞镖"},
    //{id: 2070026, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞镖"},
    //{id: 2070011, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞镖"},
    //{id: 2070019, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "飞镖"},
    
    {id: 1302160, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "蝙蝠鞭子"},
    {id: 1302161, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "蝙蝠鞭子"},
    {id: 1302162, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "蝙蝠鞭子"},
    {id: 1432037, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "枫叶	  "},
    {id: 1402063, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "樱花伞	"},
    {id: 1092022, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "调色板盾牌		"},
    {id: 1302106, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "燃烧的冰焰刀"},
    {id: 1302080, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冒险岛小灯泡"},
    {id: 1302085, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "叉子"},
    {id: 1302087, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "火炬"},
    {id: 1402044, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "南瓜灯笼"},
    {id: 1302061, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "蔓藤鞭子"},
    {id: 1432046, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "圣诞树手杖"},
    {id: 1302024, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "废报纸武器"},
    {id: 1322051, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "七夕"},
    {id: 1402014, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "温度计"},
    {id: 1402029, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "鬼刺狼牙棒"},
    {id: 1332053, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "野外烧烤"},
    {id: 1372017, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "领路灯"},
    {id: 1442039, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "冻冻鱼"},
    {id: 1332021, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "乌龙茶"},
    {id: 1302036, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "枫叶小旗 "},
    {id: 1092049, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "热情剑盾"},
    {id: 1302049, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "光线鞭"},
    {id: 1012056, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "狗狗鼻子1012056"},
    {id: 1012161, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "发光的鼻子"},
    {id: 1402037, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "龙背刀"},
	
    {id: 2043103, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044003, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044815, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2043003, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044908, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044203, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2043803, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2040303, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044703, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044403, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044603, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044103, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2043203, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2043303, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2043703, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044503, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2044303, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"},
    
    {id: 2613008, isEquipment:0 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2533000, isEquipment:0 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2530000, isEquipment:0 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2047926, isEquipment:0 ,propertiesFlag: 0, probability:60,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2048600, isEquipment:0 ,propertiesFlag: 0, probability:60,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}, 
    {id: 2531000, isEquipment:0 ,propertiesFlag: 0, probability:60,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "必成"}



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
	        var  str1 = "                #d"+皇冠白+" - #g#e娱乐抽奖#d - "+皇冠白+"#n#l\r\n\r\n";
			str1 += " "+彩虹上2+""+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹中+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+彩虹1+""+彩虹上1+"\r\n";
            //str1 += "#L3##r#e"+幸运草+" [中介币]抽一次#l\r\n";//"+consume*10+"
            str1 += "   #L3##b"+幸运草+" #k[#v4170000##bx1#k]抽一次#k#l";
            str1 += " #L3##r"+幸运草+" #k[#v4170000##bx1#k]抽一次#k\r\n#l";
			
            str1 += "   #L4##b"+幸运草+" #k[#v4170000##bx10#k]十连抽#k#l";
            str1 += " #L4##r"+幸运草+" #k[#v4170000##bx10#k]十连抽#k#l\r\n\r\n";
			str1 += " "+彩虹下2+""+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+彩虹下+""+彩虹下1+"\r\n";
            //str1 += "#r当前您拥有充值积分#k：" + cm.getPlayer().getAccountLog("累计赞助积分", 1) + "\r\n";
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
            if(cm.getPlayer().getAccountLog("累计赞助积分",1) >= 5){
                cm.getPlayer().setAccountLog("累计赞助积分", 1, -5);
                luckDraw()
            }else{
                cm.sendOk("积分不足：5" );
            }
        }else if (selection == 3) {
            if ( cm.getInventory(1).isFull(0)||cm.getInventory(2).isFull(0)||cm.getInventory(4).isFull(0)) {
                cm.sendSimple("您的背包空间不足。\r\n\r\n请#r装备、其他、消耗#k栏最少留出 #r1#k 个空位。");
                cm.dispose();
                return;
            }
            if( cm.haveItem(4170000,1) ){
                cm.gainItem(4170000,-1);
                luckDraw()
            }else{
                cm.sendOk("道具不足：#v4170000# 1个");
		}
        }else if(selection == 2){

            if ( cm.getInventory(1).isFull(9)||cm.getInventory(2).isFull(9)||cm.getInventory(4).isFull(9)) {
                cm.sendSimple("您的背包空间不足。\r\n\r\n请#r装备、其他、消耗#k栏最少留出 #r10#k 个空位。");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountLog("累计赞助积分",1) >= 50) {
                cm.getPlayer().setAccountLog("累计赞助积分", 1, -50);//-consume * 10
                for (var  i = 0; i < 10; i++) {
                    luckDraw();
                }
            }else{
                cm.sendOk("积分不足：50");// + consume * 10
        }
        }else if(selection == 4){

            if ( cm.getInventory(1).isFull(9)||cm.getInventory(2).isFull(9)||cm.getInventory(4).isFull(9)) {
                cm.sendSimple("您的背包空间不足。\r\n\r\n请#r装备、其他、消耗#k栏最少留出 #r10#k 个空位。");
                cm.dispose();
                return;
            }
            if(cm.haveItem(4170000,10) ) {
			   cm.gainItem(4170000,-10);
                for (var  i = 0; i < 10; i++) {
                    luckDraw();
                }
            }else{
                cm.sendOk("道具不足：#v4170000# 10个");// + consume * 10
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
	cm.道具喇叭(finalitem.id, "恭喜彩虹岛[" + cm.getPlayer().getName() + "]抽奖抽到");//显示代码的道具喇叭
	}else{
    cm.道具喇叭(finalitem.id, "恭喜彩虹岛[" + cm.getPlayer().getName() + "]抽奖抽到");//显示代码的道具喇叭
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