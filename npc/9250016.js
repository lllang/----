var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �����Ʒ = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

//�����޸����⡣
var vip1 = 1000;
var vip2 = 2000;
var vip3 = 3000;
var vip4 = 4000;
var svip = 40000463;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "#b��ӭ����"+cm.ms()+"��������~#k\r\n"

            text += "#L0#" + ��ɫ�ǵ� + "��ߵ�[��#b4#k��] - ������#v2022428# #r<1>#k - ����������#r["+cm.getPlayer().getAccountLog("�ߵ�����",0)+"]#k#l\r\n";//109040000

            text += "#L1#" + ��ɫ�ǵ� + "��  ��[��#b3#k��] - ������#v2022428# #r<1>#k - ����������#r["+cm.getPlayer().getAccountLog("�̿�����",0)+"]#k#l\r\n";//101000100	
			
			text += "#L2#" + ��ɫ�ǵ� + "���ִ�[��#b1#k��] - ������#v2022428# #r<1>#k - ����������#r["+cm.getPlayer().getAccountLog("��������",0)+"]#k#l\r\n";//100000202
			
			text += "#L3#" + ��ɫ�ǵ� + "��߳�[��#b1#k��] - ������#v2022428# #r<1>#k - ����������#r["+cm.getPlayer().getAccountLog("�������",0)+"]#k#l\r\n";//220000006
			
			text += "#L4#" + ��ɫ�ǵ� + "����ɽ[��#b2#k��] - ������#v2022428# #r<1>#k - ����������#r["+cm.getPlayer().getAccountLog("��ɽ����",0)+"]#k#l\r\n";//280020000	
			
			text += "\t#r#e#L5#" + ��ɫ�ǵ� + "ÿ�����һ�ο���ȡ������#v2614000# #r<10>#k #v2022428# #r<5>#k#l\r\n";//280020000	

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getPlayer().getAccountLog("�ߵ�����",0) >= 2 ) {//9000002
                    cm.sendOk("�����Ѿ������2���ˡ��޷���ǰ����");
                    cm.dispose();
                } else {
					cm.warp(109040000);
                    cm.dispose();
                }

            } else if (selection == 1) {
				if (cm.getPlayer().getAccountLog("�̿�����",0) >= 2 ) {//1043001
                    cm.sendOk("�����Ѿ������2���ˡ��޷���ǰ����");
                    cm.dispose();
                } else {
					cm.warp(101000102);
					cm.sendOk("����");
					cm.dispose();
				}

            } else if (selection == 2) {
				if (cm.getPlayer().getAccountLog("��������",0) > 1){//1012007
					cm.sendOk("һ��ֻ�����һ�Σ����뿪��");
					cm.dispose();
				} else {
					cm.warp(100000202);
					cm.sendOk("����");
					cm.dispose();
				}

            } else if (selection == 3) {//2040033
				if (cm.getPlayer().getAccountLog("�������",0) > 5){//1012007
						cm.sendOk("һ��ֻ�����һ�Σ����뿪��");
						cm.dispose();
					} else {
					cm.warp(220000006);
					cm.sendOk("����");
					cm.dispose();
					}
				
			} else if (selection == 4) {//2032003
				if (cm.getPlayer().getAccountLog("��ɽ����",0) > 1){//1012007
						cm.sendOk("һ��ֻ�����һ�Σ����뿪��");
						cm.dispose();
				}else{
				cm.warp(280020000);
				cm.sendOk("����");
				cm.dispose();
				}
				
			} else if (selection == 5) {//2032003
				if (cm.getPlayer().getAccountLog("��ɽ����",0) < 1){//1012007
					cm.sendOk("��ɽ����δ���");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("�̿�����",0) < 1){//1012007
					cm.sendOk("�̿�����δ���");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("�������",0) < 1){//1012007
					cm.sendOk("�������δ���");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("��������",0) < 1){//1012007
					cm.sendOk("��������δ���");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("�ߵ�����",0) < 1){//1012007
					cm.sendOk("�ߵ�����δ���");
					cm.dispose();
				} else if (cm.getPlayer().getAccountLog("ÿ����������",0) != 0){//1012007
					cm.sendOk("������ȡ���ˡ�");
					cm.dispose();
				}else{					
				    cm.gainItem(2022428,5);
					cm.gainItem(2614000,10);
					cm.gainItem(4001126,2000);
					cm.getPlayer().setAccountLog("ÿ����������",0);
					cm.����(1,"���"+cm.getName()+"�ɹ��������������������ȡ��2000��Ҷ��ֵ������");
					cm.sendOk("��ȡ���");
					cm.dispose();
				}
            }
        }
    }
}

