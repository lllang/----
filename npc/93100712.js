
var v = "#fUI/GuildMark/Mark/Letter/00005021/4#";
var �� = "#fUI/GuildMark/Mark/Letter/00005008/4#";
var p = "#fUI/GuildMark/Mark/Letter/00005015/4#";
var �ʹڰ� ="#fUI/GuildMark/Mark/Etc/00009004/15#";
var ���˲� ="#fUI/GuildMark/Mark/Plant/00003006/15#";
var ��ˮ ="#fUI/GuildMark/Mark/Pattern/00004008/15#";
var ������ ="#fUI/Basic/HScr7/disabled/base#";
var ������ ="#fUI/ChatBalloon/tutorial/w#";

var ����è ="#fUI/ChatBalloon/119/n#";
var è�� =  "#fUI/ChatBalloon/119/ne#";
var è�� =  "#fUI/ChatBalloon/119/nw#";
var �� =    "#fUI/ChatBalloon/119/e#";
var �� =    "#fUI/ChatBalloon/119/w#";
  
var ����è ="#fUI/ChatBalloon/119/s#";
var è���� ="#fUI/ChatBalloon/119/se#";
var è���� ="#fUI/ChatBalloon/119/sw#";

var �ʺ�1 ="#fUI/ChatBalloon/122/n#";
var �ʺ���1 =  "#fUI/ChatBalloon/122/ne#";
var �ʺ���2 =  "#fUI/ChatBalloon/122/nw#";
var ��1 =    "#fUI/ChatBalloon/122/e#";
var ��2 =    "#fUI/ChatBalloon/122/w#";
  
var �ʺ��� ="#fUI/ChatBalloon/122/s#";
var �ʺ���1 ="#fUI/ChatBalloon/122/se#";
var �ʺ���2 ="#fUI/ChatBalloon/122/sw#";
var �ʺ��� ="#fUI/ChatBalloon/122/head#";
//
var ÷�� ="#fUI/GuildMark/Mark/Animal/00002008/14#";
var ���� ="#fUI/GuildMark/Mark/Animal/00002020/14#";
var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";//"+Բ��+"
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var �˳� = "#fUI/CN_Chat/ChattingRoom/BtExit/0/mouseOver/0#";
var ���� = "#fUI/UIWindow/Quest/reward#";
var ���� = "#fUI/UIWindow/SoftKeyboard/key/97/mouseOver/0#";
var ������ = "#fSkill/411/skill/4111006/iconMouseOver#";
var ���� = "#fUI/UIWindow/PersonalShop/BtBuy/mouseOver/0#";
status = -1;
// ����齱����
//isEquipment:��װ�����Ƿ��b�� 1������ 0������
//porpertiesFlag: �Ƿ��Զ����޸����� 0����� 1������
//probability: ���� 1-500	
//properties: 4ά
//doubleAttack:˫��
//hmp: ����
//doubleDefense:˫��
//avoid:�ر�
//hit:����
let consume = 20;
let itemList = [
    
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack:300, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	
    {id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack:200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	
	
 
	
	
	
   

	
	

	{id: 1032219, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 300, doubleAttack: 300, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����֮Ӱս��ǹ"},
	
 

	
	
	
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 1000, doubleAttack: 30, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 700, doubleAttack: 700, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:300,properties: 500, doubleAttack: 500, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	
	{id: 1002186, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1012057, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1022048, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1032024, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1072153, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1082102, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1102039, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112900, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112901, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112903, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112904, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112178, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"},
	{id: 1112290, isEquipment:1 ,propertiesFlag: 1, probability:500,properties: 200, doubleAttack: 200, hmp: 200, doubleDefense:0, avoid:0, hit:0, remark: "���Ե�װ"}
    
    //{id: 1302160, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�������"},
    //{id: 1302161, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�������"},
    //{id: 1302162, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�������"},
    //{id: 1432037, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��Ҷ	  "},
    //{id: 1402063, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ӣ��ɡ	"},
    //{id: 1092022, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ɫ�����		"},
    //{id: 1302106, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȼ�յı��浶"},
    //{id: 1302080, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ð�յ�С����"},
    //{id: 1302085, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    //{id: 1302087, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���"},
    //{id: 1402044, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�Ϲϵ���"},
    //{id: 1302061, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ٱ���"},
    //{id: 1432046, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ʥ��������"},
    //{id: 1302024, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�ϱ�ֽ����"},
    //{id: 1322051, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��Ϧ"},
    //{id: 1402014, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�¶ȼ�"},
    //{id: 1402029, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���������"},
    //{id: 1332053, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "Ұ���տ�"},
    //{id: 1372017, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��·��"},
    //{id: 1442039, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
    //{id: 1332021, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
    //{id: 1302036, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ҶС�� "},
    //{id: 1092049, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���齣��"},
    //{id: 1302049, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���߱�"},
    //{id: 1012056, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������1012056"},
    //{id: 1012161, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����ı���"},
    //{id: 1402037, isEquipment:0 ,propertiesFlag: 0, probability:88,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	

];


function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("�ټ����Ӱ��͡�");
            cm.dispose();
        }
        status--;
    }


    if (status == 0) { //������ǽű���ʼ�ĵط�
	        let str1 = "                #d"+�ʹڰ�+" - #g#e���ֳ齱#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			str1 += " "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
            //str1 += "#L3##r#e"+���˲�+" [�н��]��һ��#l\r\n";//"+consume*10+"
            str1 += "   #L3##b"+���˲�+" #k[#v4031549##bx1#k]��һ��#k#l";
            str1 += " #L1##r"+���˲�+" #k[#r100 Ԫ��#k]��һ��#k\r\n#l";
			
            str1 += "   #L4##b"+���˲�+" #k[#v4031549##bx9#k]ʮ����#k#l";
            str1 += " #L2##r"+���˲�+" #k[#r1000Ԫ��#k]ʮ����#k#l\r\n\r\n";
			str1 += " "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
            str1 += "            #n - #b�鵽������������ϵGM -\r\n\r\n";
			//str1 += "            #n - #b�ƺ���ά+200����+500����+50 -\r\n\r\n";
            for (let i = 0; i < itemList.length; i++) {
			if (str1.indexOf(itemList[i].id) == -1){
                str1 += "#v" + itemList[i].id + "#";
            }
			}
            cm.sendOk(str1);
    } else if (status == 1) {
        if (selection == 1) {

            if ( cm.getInventory(1).isFull(0)||cm.getInventory(2).isFull(0)||cm.getInventory(4).isFull(0)) {
                cm.sendSimple("���ı����ռ䲻�㡣\r\n\r\n��#rװ��������������#k���������� #r1#k ����λ��");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= 100){
                cm.getPlayer().setAccountLog("�ۼ���������_����", 1, -100);
                luckDraw()
            }else{
                cm.sendOk("Ԫ�����㣺100" );
            }
        }else if (selection == 3) {
            if ( cm.getInventory(1).isFull(0)||cm.getInventory(2).isFull(0)||cm.getInventory(4).isFull(0)) {
                cm.sendSimple("���ı����ռ䲻�㡣\r\n\r\n��#rװ��������������#k���������� #r1#k ����λ��");
                cm.dispose();
                return;
            }
            if( cm.haveItem(4031549,1) ){
                cm.gainItem(4031549,-1);
                luckDraw()
            }else{
                cm.sendOk("���߲��㣺#v4031549# 1��");
		}
        }else if(selection == 2){

            if ( cm.getInventory(1).isFull(9)||cm.getInventory(2).isFull(9)||cm.getInventory(4).isFull(9)) {
                cm.sendSimple("���ı����ռ䲻�㡣\r\n\r\n��#rװ��������������#k���������� #r10#k ����λ��");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= 1000) {
                cm.getPlayer().setAccountLog("�ۼ���������_����", 1, -1000);//-consume * 10
                for (let i = 0; i < 10; i++) {
                    luckDraw();
                }
            }else{
                cm.sendOk("Ԫ�����㣺1000");// + consume * 10
        }
        }else if(selection == 4){

            if ( cm.getInventory(1).isFull(9)||cm.getInventory(2).isFull(9)||cm.getInventory(4).isFull(9)) {
                cm.sendSimple("���ı����ռ䲻�㡣\r\n\r\n��#rװ��������������#k���������� #r10#k ����λ��");
                cm.dispose();
                return;
            }
            if(cm.haveItem(4031549,9) ) {
			   cm.gainItem(4031549,-9);
                for (let i = 0; i < 10; i++) {
                    luckDraw();
                }
            }else{
                cm.sendOk("���߲��㣺#v4031549# 9��");// + consume * 10
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
            cm.����(2, "��Ʒ����id��"+id+"_"+properties+"_"+properties+"_"+properties+"_"+properties+"_"+hmp+"_"+hmp+"_"+doubleAttack+"_"+doubleAttack+"_"+doubleDefense+"_"+doubleDefense+"_"+hit+"_"+avoid+"_");
        }
    }else{
        cm.gainItem(id,1);
    }
	if(cm.getItemName(id) =="" || cm.getItemName(id) == null){
		
    Packages.handling.world.World.Broadcast.broadcastMessage
    (Packages.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),
    "[����齱]" + " : " + "��ϲ�ʺ絺[" + cm.getPlayer().getName() + "]�齱�鵽��"+finalitem.remark+"������",true));
	}else{
    Packages.handling.world.World.Broadcast.broadcastMessage
    (Packages.tools.MaplePacketCreator.serverNotice(2,cm.getC().getChannel(),
    "[����齱]" + " : " + "��ϲ�ʺ絺[" + cm.getPlayer().getName() + "]�齱�鵽��"+cm.getItemName(id)+"������",true));
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