load("nashorn:mozilla_compat.js");
importPackage(Packages.java.util);
importPackage(Packages.client);
importPackage(Packages.server);
var v = "#fUI/GuildMark/Mark/var ter/00005021/4#";
var �� = "#fUI/GuildMark/Mark/var ter/00005008/4#";
var p = "#fUI/GuildMark/Mark/var ter/00005015/4#";
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
var consume = 20;
var  itemList = [

	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//500���� 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�̵�"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫��"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ū"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȫ��"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "צ��"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ǹ"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ�·�"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ����"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ�·�"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ����"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//500���� 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�̵�"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫��"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ū"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȫ��"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "צ��"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ǹ"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ�·�"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ����"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ�·�"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ����"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//500���� 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�̵�"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫��"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ū"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȫ��"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "צ��"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ǹ"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ�·�"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ����"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ�·�"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ����"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//500���� 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�̵�"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫��"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ū"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȫ��"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "צ��"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ǹ"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ�·�"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ����"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ�·�"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ����"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
		{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//500���� 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�̵�"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫��"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ū"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȫ��"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "צ��"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:150,properties: 500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ǹ"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:150,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ�·�"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ����"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ�·�"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:250,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ����"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:200,properties:500, doubleAttack: 500, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	
    {id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//1000���� 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�̵�"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫��"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ū"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȫ��"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "צ��"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:100,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ǹ"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:100,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:100,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ�·�"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ����"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ�·�"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:160,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ����"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:1000, doubleAttack: 1000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//2000���� 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�̵�"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫��"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ū"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȫ��"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "צ��"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:80,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ǹ"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:80,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:80,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ�·�"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ����"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ�·�"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:120,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ����"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:80,properties:2000, doubleAttack: 2000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//4000���� 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�̵�"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫��"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ū"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȫ��"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "צ��"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:50,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ǹ"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:50,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:50,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ�·�"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ����"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ�·�"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:70,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ����"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:50,properties:3000, doubleAttack: 3000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	{id: 1302107, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//6000���� 
    {id: 1332237, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�̵�"},
    {id: 1382144, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402130, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫��"},
    {id: 1422090, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432118, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1452148, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��"},
    {id: 1462138, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ū"},
    {id: 1472160, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȫ��"},
    {id: 1482121, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "צ��"},
	{id: 1492121, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ǹ"},
	
	{id: 1042258, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062169, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042257, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062168, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������"},
	
	{id: 1042256, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����·�"},
	{id: 1062167, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
	
	{id: 1042255, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ�·�"},
	{id: 1062166, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ʦ����"},
	
	{id: 1042254, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ�·�"},
	{id: 1062165, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "սʿ����"},
	{id: 1092048, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
	{id: 1112444, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	{id: 1112443, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	{id: 1112442, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	{id: 1112441, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	{id: 1112440, isEquipment:1 ,propertiesFlag: 1, probability:20,properties:6000, doubleAttack: 6000, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
	{id: 4441101, isEquipment:1 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//100����
	{id: 4440101, isEquipment:1 ,propertiesFlag: 0, probability:300,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//500
	{id: 4443101, isEquipment:1 ,propertiesFlag: 0, probability:20,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//1000

	{id: 4000464, isEquipment:1 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//�й���
	
	
	{id: 4310080, isEquipment:1 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"}//8888��Ҷ4000464
	

  



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
	        var  str1 = "             #d"+�ʹڰ�+" - #r#e�� �� �� �� ϵ ͳ#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			
            str1 += ""+���˲�+" �������ʹ�ö���������Ƭ���г齱�и��ʻ��ȫ����500-6000��ϡ��������װ�����и��ʻ��100-1000������ֵ��#l\r\n";
            str1 += "              #L1##b"+���˲�+" #k[#v4442100##bx1#k]��һ��#k#l\r\n\r\n\r\n";
            
      
            for (var  i = 0; i < itemList.length; i++) {
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
            if( cm.haveItem(4442100,1) ){
                cm.gainItem(4442100,-1);
                luckDraw()
            }else{
                cm.sendOk("���߲��㣺#v4442100# 1��");
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
            cm.����(2, "��Ʒ����id��"+id+"_"+properties+"_"+properties+"_"+properties+"_"+properties+"_"+hmp+"_"+hmp+"_"+doubleAttack+"_"+doubleAttack+"_"+doubleDefense+"_"+doubleDefense+"_"+hit+"_"+avoid+"_");
        }
    }else{
        cm.gainItem(id,1);
    }
	if(cm.getItemName(id) =="" || cm.getItemName(id) == null){
	cm.��������(finalitem.id, "��ϲ�ʺ絺[" + cm.getPlayer().getName() + "]ʹ�ö���������Ƭ��ȡ��ϡ�е���");//��ʾ����ĵ�������
	}else{
    cm.��������(finalitem.id, "��ϲ�ʺ絺[" + cm.getPlayer().getName() + "]ʹ�ö���������Ƭ��ȡ��ϡ�е���");//��ʾ����ĵ�������
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