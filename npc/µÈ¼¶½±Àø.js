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
            text += "#b��ӭ����"+cm.ms()+"�ȼ�����#k\r\n\r\n"

            text += "#L1#" + ��ɫ�ǵ� + "��ȡ10������#l\r\n";

            text += "#L2#" + ��ɫ�ǵ� + "��ȡ30������#l\r\n";
			
			text += "#L3#" + ��ɫ�ǵ� + "��ȡ50������#l\r\n";
			
			text += "#L4#" + ��ɫ�ǵ� + "��ȡ70������#l\r\n";
			
			text += "#L5#" + ��ɫ�ǵ� + "��ȡ100������#l\r\n";
			
			text += "#L6#" + ��ɫ�ǵ� + "��ȡ120������#l\r\n";
			
			text += "#L7#" + ��ɫ�ǵ� + "��ȡ150������#l\r\n";
			
			text += "#L8#" + ��ɫ�ǵ� + "��ȡ180������#l\r\n";
			
			text += "#L9#" + ��ɫ�ǵ� + "��ȡ200������#l\r\n";
			
			text += "#L10#" + ��ɫ�ǵ� + "��ȡ230������#l\r\n";
			
			text += "#L11#" + ��ɫ�ǵ� + "��ȡ250������#l\r\n";

            cm.sendSimple(text);
        } else if (status == 1) {
            if (selection == 1) {
				if (cm.getPlayer().getLevel() < 10 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ10����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 1 ) {//�޸�<������֣�1Ϊ#L1#
                    //cm.gainItem(5570000,1);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(100000);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(1000);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(5000);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�10���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }

            } else if (selection == 2) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 30 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ30����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 2 ) {//�޸�<������֣�2Ϊ#L2#
                    cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(300000);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(1000);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(0);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�30���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
				
			} else if (selection == 3) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 50 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ50����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 3 ) {//�޸�<������֣�2Ϊ#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(500000);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(1500);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(0);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�50���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
				
			} else if (selection == 4) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 70 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ70����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 4 ) {//�޸�<������֣�2Ϊ#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(1000000);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(2000);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(0);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�70���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
				
			} else if (selection == 5) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 100 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ100����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 5 ) {//�޸�<������֣�2Ϊ#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(2000000);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(2500);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(0);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�100���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
				
			} else if (selection == 6) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 120 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ120����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 6 ) {//�޸�<������֣�2Ϊ#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(3000000);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(0);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(10000);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�120���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
				
			} else if (selection == 7) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 150 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ150����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 7 ) {//�޸�<������֣�2Ϊ#L2#
                    //cm.gainItem(5030000,1);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(5000000);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(3000);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(0);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�150���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
				
			} else if (selection == 8) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 180 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ180����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 8 ) {//�޸�<������֣�2Ϊ#L2#
                    cm.gainItem(4000464,20);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(0);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(4000);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(0);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�180���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
				
			} else if (selection == 9) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 200 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ200����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 9 ) {//�޸�<������֣�2Ϊ#L2#
                    cm.gainItem(4000464,30);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(0);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(5000);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(0);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�200���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
				
			} else if (selection == 10) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 230 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ230����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 10 ) {//�޸�<������֣�2Ϊ#L2#
                    cm.gainItem(4000464,50);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(0);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(8000);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(0);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�230���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
				
			} else if (selection == 11) {//SVIP�¿��ڵ��߷������⡣
				if (cm.getPlayer().getLevel() < 250 ){//�˴��޸ĵȼ�
					cm.sendOk("�ȼ���δ�ﵽ250����");
					cm.dispose();
					return;
				}
                if (cm.getPlayer().getBossLog("�ȼ�����",1) < 11 ) {//�޸�<������֣�2Ϊ#L2#
                    cm.gainItem(4000464,80);
					cm.getPlayer().setBossLog("�ȼ�����",1);
					cm.gainMeso(0);//1��Ϊ������ֵ���Ǹ����
					cm.gainNX(10000);//1��Ϊ������ֵ���Ǹ���ȯ
					cm.gainDY(0);//1��Ϊ������ֵ���Ǹ�����ȯ
					cm.sendOk("�ɹ���ȡ�ȼ�250���������");
                    cm.dispose();
                } else {
                    cm.sendOk("��Ǹ������ȡ���ˡ�");
                    cm.dispose();
                }
            }
        }
    }
}
