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
    {id: 1332289, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "����"},//���Ʊ��� 
	{id: 1702598, isEquipment:1 ,propertiesFlag: 1, probability:1,properties: 1266, doubleAttack: 1266, hmp: 0, doubleDefense:0, avoid:1266, hit:1266, remark: "����"},//���Ʊ��� 
    {id: 1382273, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1492245, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1402267, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1422196, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1432226, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1442284, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1452265, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1462251, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1482232, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
	{id: 1472275, isEquipment:1 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
	
    //{id: 1302275, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 155, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},//���Ʊ���
    //{id: 1332225, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 155, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
    //{id: 1492179, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 130, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
   //{id: 1382208, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
    //{id: 1402196, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
    //{id: 1422140, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
    //{id: 1432167, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
    //{id: 1442223, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
    //{id: 1452205, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
    //{id: 1462193, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 165, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
	//{id: 1472214, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 130, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
	//{id: 1482168, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 130, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "FFN����"},
	
	{id: 1302063, isEquipment:1 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:1, avoid:0, hit:0, remark: "��"},//���Ʊ���
    {id: 1092048, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
    {id: 1092049, isEquipment:1 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    //{id: 1302156, isEquipment:1 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�ڵ�"},
    //{id: 1302157, isEquipment:1 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ֿ���"},
    //{id: 1402305, isEquipment:1 ,propertiesFlag: 0, probability:8,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "˫�ִ󿳵�"},
    //{id: 1452152, isEquipment:1 ,propertiesFlag: 0, probability:8,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�ƻ���"},
    //{id: 1432152, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�Ļʰ׺���"},
	{id: 1102723, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���"},
	{id: 1102724, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���"},	
	{id: 1102588, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���"},	
	{id: 1102487, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���"},	
	
	
	{id: 1112951, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�����˹�ķ�ŭ"},
	{id: 1112952, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ϣ���ķ�ŭ"},
	{id: 1012174, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�������"},
	{id: 1132211, isEquipment:1 ,propertiesFlag: 0, probability:80,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��־����"},
	{id: 1132212, isEquipment:1 ,propertiesFlag: 0, probability:60,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��־����"},
	{id: 1132213, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��־����"},
	{id: 1132214, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��־����"},
	
    {id: 1122236, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "����ð����"},//���Ʊ���
    {id: 1122237, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "����ð����"},
	{id: 1122238, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "����ð����"},
    {id: 1122239, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "����ð����"},
	{id: 1122240, isEquipment:1 ,propertiesFlag: 1, probability:20,properties: 0, doubleAttack: 50, hmp: 0, doubleDefense:50, avoid:0, hit:0, remark: "����ð����"},
	
	{id: 1032205, isEquipment:1 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�񻰶���1"},
	{id: 1032206, isEquipment:1 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�񻰶���1"},//���Ʊ���
    {id: 1032207, isEquipment:1 ,propertiesFlag: 0, probability:120,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�񻰶���2"},
	{id: 1032208, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�񻰶���3"},
    {id: 1032209, isEquipment:1 ,propertiesFlag: 0, probability:80,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�񻰶���4"},
	{id: 1032219, isEquipment:1 ,propertiesFlag: 0, probability:30,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�񻰶���5"},
	
    {id: 1102482, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "�����ն�÷˹����"},//���Ʊ���
    {id: 1102481, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "�������Ǵ�˹����"},
    {id: 1102484, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������������"},
    {id: 1102485, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������̩����"},
    {id: 1102483, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "������������"},
    {id: 1072747, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������̩ѥ"},
    {id: 1072745, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������ѥ"},
    {id: 1072744, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "�����ն�÷˹ѥ"},
    {id: 1072746, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "����������ѥ"},
    {id: 1072743, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "�������Ǵ�˹ѥ"},
    {id: 1082547, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������̩����"},
    {id: 1082544, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "�����ն�÷˹����"},
    {id: 1082546, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������������"},
    {id: 1082545, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "������������"},
    {id: 1082543, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "�������Ǵ�˹����"},
    {id: 1132176, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "������������"},
    {id: 1132175, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "�����ն�÷˹����"},
    {id: 1132177, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������������"},
    {id: 1132174, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "�������Ǵ�˹����"},
    {id: 1132178, isEquipment:1 ,propertiesFlag: 1, probability:15, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������̩����"},
	{id: 2614001, isEquipment:1 ,propertiesFlag: 0, probability:40, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������̩����"},
	{id: 2614000, isEquipment:1 ,propertiesFlag: 0, probability:40, properties: 200, doubleAttack: 200, hmp: 0, doubleDefense:200, avoid:1, hit:1, remark: "��������̩����"},

	{id: 1132169, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С�����ն�÷˹����"},//���Ʊ���
    {id: 1132170, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С�������Ǵ�˹����"},
    {id: 1132171, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С��������������"},
    {id: 1132172, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С��������̩����"},
    {id: 1132173, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С������������"},
    {id: 1102476, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С��������̩ѥ"},
    {id: 1102477, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С��������ѥ"},
    {id: 1102478, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С�����ն�÷˹ѥ"},
    {id: 1102479, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С����������ѥ"},
    {id: 1102480, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С�������Ǵ�˹ѥ"},
    {id: 1072737, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С��������̩����"},
    {id: 1072738, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С�����ն�÷˹����"},
    {id: 1072739, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С��������������"},
    {id: 1072740, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С������������"},
    {id: 1072741, isEquipment:1 ,propertiesFlag: 1, probability:40, properties: 100, doubleAttack: 100, hmp: 0, doubleDefense:100, avoid:1, hit:1, remark: "С�����Ǵ�˹����"},
	
    {id: 1112763, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����֮Ӱ˫�ִ�"},
    {id: 1112775, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����֮Ӱ��ʥ��"},
    {id: 1112771, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����֮Ӱ��ʥ��"},
    {id: 1112767, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����֮Ӱս��ǹ"},
    
    {id: 1032220, isEquipment:1 ,propertiesFlag: 0, probability:150,properties: 10, doubleAttack: 10, hmp: 100, doubleDefense:100, avoid:1, hit:1, remark: "�ͼ����յ¶���"},
    {id: 1113072, isEquipment:1 ,propertiesFlag: 0, probability:150,properties: 10, doubleAttack: 10, hmp: 100, doubleDefense:100, avoid:1, hit:1, remark: "�ͼ����յ½�ָ"},
    {id: 1122264, isEquipment:1 ,propertiesFlag: 0, probability:150,properties: 10, doubleAttack: 10, hmp: 100, doubleDefense:100, avoid:1, hit:1, remark: "�ͼ����յ¿�ӡ��׹"},
    {id: 1132243, isEquipment:1 ,propertiesFlag: 0, probability:150,properties: 10, doubleAttack: 10, hmp: 100, doubleDefense:100, avoid:1, hit:1, remark: "�ͼ����յ¿�ӡ����"},
    {id: 1032221, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 20, doubleAttack: 20, hmp: 200, doubleDefense:100, avoid:1, hit:1, remark: "�м����յ¶���"},
    {id: 1113073, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 20, doubleAttack: 20, hmp: 200, doubleDefense:100, avoid:1, hit:1, remark: "�м����յ½�ָ"},
    {id: 1122265, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 20, doubleAttack: 20, hmp: 200, doubleDefense:100, avoid:1, hit:1, remark: "�м����յ¿�ӡ��׹"},
    {id: 1132244, isEquipment:1 ,propertiesFlag: 0, probability:100,properties: 20, doubleAttack: 20, hmp: 200, doubleDefense:100, avoid:1, hit:1, remark: "�м����յ¿�ӡ����"},
    {id: 1032222, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 30, doubleAttack: 30, hmp: 400, doubleDefense:100, avoid:1, hit:1, remark: "�߼����յ¶���"},
    {id: 1113074, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 30, doubleAttack: 30, hmp: 400, doubleDefense:100, avoid:1, hit:1, remark: "�߼����յ½�ָ"},
    {id: 1122266, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 30, doubleAttack: 30, hmp: 400, doubleDefense:100, avoid:1, hit:1, remark: "�߼����յ¿�ӡ��׹"},
    {id: 1132245, isEquipment:1 ,propertiesFlag: 0, probability:40,properties: 30, doubleAttack: 30, hmp: 400, doubleDefense:100, avoid:1, hit:1, remark: "�߼����յ¿�ӡ����"},
	
    {id: 1003242, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��ʯ��װ"},
    {id: 1052357, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��ʯ��װ"},
    {id: 1102294, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��ʯ��װ"},
    {id: 1072521, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��ʯ��װ"},
    {id: 1082314, isEquipment:1 ,propertiesFlag: 1, probability:350,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��ʯ��װ"}, 
    {id: 1003843, isEquipment:1 ,propertiesFlag: 1, probability:100,properties: 2, doubleAttack: 2, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��ʯ��װ"}, 
	
    {id: 1132110, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��˵��װ"},
    {id: 1102322, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��˵��װ"},
    {id: 1082391, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��˵��װ"},
    {id: 1072610, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��˵��װ"},
    {id: 1052405, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��˵��װ"}, 
    {id: 1003364, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 5, doubleAttack: 5, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "��˵��װ"}, 
	
    {id: 1122174, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�˶���װ"},
    {id: 1082401, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�˶���װ"},
    {id: 1072618, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�˶���װ"},
    {id: 1062148, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�˶���װ"},
    {id: 1042231, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�˶���װ"}, 
    {id: 1032121, isEquipment:1 ,propertiesFlag: 1, probability:250,properties: 8, doubleAttack: 8, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�˶���װ"}, 
	
    {id: 1132154, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�Ͻ���װ"},
    {id: 1102441, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�Ͻ���װ"},
    {id: 1082433, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�Ͻ���װ"},
    {id: 1072666, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�Ͻ���װ"},
    {id: 1052461, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�Ͻ���װ"}, 
    {id: 1003552, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�Ͻ���װ"}, 
	
    {id: 1132161, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�籩��װ"},
    {id: 1102467, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�籩��װ"},
    {id: 1082438, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�籩��װ"},
    {id: 1072672, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�籩��װ"},
    {id: 1052467, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�籩��װ"}, 
    {id: 1003561, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�籩��װ"}, 
	
    {id: 1132209, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�ռ���װ"},
    {id: 1102506, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�ռ���װ"},
    {id: 1082498, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�ռ���װ"},
    {id: 1072768, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�ռ���װ"},
    {id: 1052569, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�ռ���װ"}, 
    {id: 1003740, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "�ռ���װ"}, 
	
    {id: 1132242, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"},
    {id: 1102612, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"},
    {id: 1082540, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"},
    {id: 1072853, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"},
    {id: 1052647, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"}, 
    {id: 1003946, isEquipment:1 ,propertiesFlag: 1, probability:80,properties: 15, doubleAttack: 15, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"}, 
	
    {id: 1132152, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"},
    {id: 1122197, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"},
    {id: 1112738, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"},
    {id: 1082432, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"},
    {id: 1072664, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"}, 
    {id: 1052460, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"}, 
    {id: 1032142, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"}, 
    {id: 1003540, isEquipment:1 ,propertiesFlag: 1, probability:50,properties: 18, doubleAttack: 18, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "������װ"}, 
	
	
    {id: 1004492, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ������"},
    {id: 1052929, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ������"},
    {id: 1073057, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ������"},
    {id: 1082647, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ������"},
    {id: 1102828, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ������"},
	
    {id: 1012331, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ����Ʒ"},
    {id: 1022148, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ����Ʒ"},
    {id: 1032137, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ����Ʒ"},
    {id: 1122306, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ����Ʒ"},
    {id: 1132287, isEquipment:1 ,propertiesFlag: 1, probability:200,properties: 10, doubleAttack: 10, hmp: 0, doubleDefense:0, avoid:1, hit:1, remark: "Ѱ����Ʒ"},
	
    {id: 2340000, isEquipment:0 ,propertiesFlag: 0, probability:300,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ף������"},
    //{id: 2049100, isEquipment:0 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�������60%"},
    {id: 2340000, isEquipment:0 ,propertiesFlag: 0, probability:500,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ף������"},
    //{id: 2049100, isEquipment:0 ,propertiesFlag: 0, probability:300,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�������60%"},
	
    {id: 5520000, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 5570000, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����%"},
    //{id: 2070006, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    //{id: 2070007, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1112915, isEquipment:0 ,propertiesFlag: 0, probability:10,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ֽ�ɻ�"},
    //{id: 2070024, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    //{id: 2070016, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    //{id: 2070023, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    //{id: 2070026, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    //{id: 2070011, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    //{id: 2070019, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    
    {id: 1302160, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�������"},
    {id: 1302161, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�������"},
    {id: 1302162, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�������"},
    {id: 1432037, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��Ҷ	  "},
    {id: 1402063, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ӣ��ɡ	"},
    {id: 1092022, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ɫ�����		"},
    {id: 1302106, isEquipment:0 ,propertiesFlag: 0, probability:200,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ȼ�յı��浶"},
    {id: 1302080, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ð�յ�С����"},
    {id: 1302085, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����"},
    {id: 1302087, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���"},
    {id: 1402044, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�Ϲϵ���"},
    {id: 1302061, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���ٱ���"},
    {id: 1432046, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "ʥ��������"},
    {id: 1302024, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�ϱ�ֽ����"},
    {id: 1322051, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��Ϧ"},
    {id: 1402014, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�¶ȼ�"},
    {id: 1402029, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���������"},
    {id: 1332053, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "Ұ���տ�"},
    {id: 1372017, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��·��"},
    {id: 1442039, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
    {id: 1332021, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
    {id: 1302036, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��ҶС�� "},
    {id: 1092049, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���齣��"},
    {id: 1302049, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "���߱�"},
    {id: 1012056, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "��������1012056"},
    {id: 1012161, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "����ı���"},
    {id: 1402037, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "������"},
	
    {id: 2043103, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044003, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044815, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2043003, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044908, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044203, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2043803, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2040303, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044703, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044403, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044603, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044103, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2043203, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2043303, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2043703, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044503, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2044303, isEquipment:0 ,propertiesFlag: 0, probability:150,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"},
    
    {id: 2613008, isEquipment:0 ,propertiesFlag: 0, probability:40,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2533000, isEquipment:0 ,propertiesFlag: 0, probability:50,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2530000, isEquipment:0 ,propertiesFlag: 0, probability:100,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2047926, isEquipment:0 ,propertiesFlag: 0, probability:60,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2048600, isEquipment:0 ,propertiesFlag: 0, probability:60,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}, 
    {id: 2531000, isEquipment:0 ,propertiesFlag: 0, probability:60,properties: 0, doubleAttack: 0, hmp: 0, doubleDefense:0, avoid:0, hit:0, remark: "�س�"}



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
	        var  str1 = "                #d"+�ʹڰ�+" - #g#e���ֳ齱#d - "+�ʹڰ�+"#n#l\r\n\r\n";
			str1 += " "+�ʺ���2+""+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ���+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+�ʺ�1+""+�ʺ���1+"\r\n";
            //str1 += "#L3##r#e"+���˲�+" [�н��]��һ��#l\r\n";//"+consume*10+"
            str1 += "   #L3##b"+���˲�+" #k[#v4170000##bx1#k]��һ��#k#l";
            str1 += " #L3##r"+���˲�+" #k[#v4170000##bx1#k]��һ��#k\r\n#l";
			
            str1 += "   #L4##b"+���˲�+" #k[#v4170000##bx10#k]ʮ����#k#l";
            str1 += " #L4##r"+���˲�+" #k[#v4170000##bx10#k]ʮ����#k#l\r\n\r\n";
			str1 += " "+�ʺ���2+""+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+�ʺ���+""+�ʺ���1+"\r\n";
            //str1 += "#r��ǰ��ӵ�г�ֵ����#k��" + cm.getPlayer().getAccountLog("�ۼ���������", 1) + "\r\n";
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
            if(cm.getPlayer().getAccountLog("�ۼ���������",1) >= 5){
                cm.getPlayer().setAccountLog("�ۼ���������", 1, -5);
                luckDraw()
            }else{
                cm.sendOk("���ֲ��㣺5" );
            }
        }else if (selection == 3) {
            if ( cm.getInventory(1).isFull(0)||cm.getInventory(2).isFull(0)||cm.getInventory(4).isFull(0)) {
                cm.sendSimple("���ı����ռ䲻�㡣\r\n\r\n��#rװ��������������#k���������� #r1#k ����λ��");
                cm.dispose();
                return;
            }
            if( cm.haveItem(4170000,1) ){
                cm.gainItem(4170000,-1);
                luckDraw()
            }else{
                cm.sendOk("���߲��㣺#v4170000# 1��");
		}
        }else if(selection == 2){

            if ( cm.getInventory(1).isFull(9)||cm.getInventory(2).isFull(9)||cm.getInventory(4).isFull(9)) {
                cm.sendSimple("���ı����ռ䲻�㡣\r\n\r\n��#rװ��������������#k���������� #r10#k ����λ��");
                cm.dispose();
                return;
            }
            if(cm.getPlayer().getAccountLog("�ۼ���������",1) >= 50) {
                cm.getPlayer().setAccountLog("�ۼ���������", 1, -50);//-consume * 10
                for (var  i = 0; i < 10; i++) {
                    luckDraw();
                }
            }else{
                cm.sendOk("���ֲ��㣺50");// + consume * 10
        }
        }else if(selection == 4){

            if ( cm.getInventory(1).isFull(9)||cm.getInventory(2).isFull(9)||cm.getInventory(4).isFull(9)) {
                cm.sendSimple("���ı����ռ䲻�㡣\r\n\r\n��#rװ��������������#k���������� #r10#k ����λ��");
                cm.dispose();
                return;
            }
            if(cm.haveItem(4170000,10) ) {
			   cm.gainItem(4170000,-10);
                for (var  i = 0; i < 10; i++) {
                    luckDraw();
                }
            }else{
                cm.sendOk("���߲��㣺#v4170000# 10��");// + consume * 10
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
	cm.��������(finalitem.id, "��ϲ�ʺ絺[" + cm.getPlayer().getName() + "]�齱�鵽");//��ʾ����ĵ�������
	}else{
    cm.��������(finalitem.id, "��ϲ�ʺ絺[" + cm.getPlayer().getName() + "]�齱�鵽");//��ʾ����ĵ�������
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