���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1051295/0/0#";
var �ٷ� = "#fEffect/CharacterEff/1003252/0/0#";
var Сѩ�� = "#fEffect/CharacterEff/1003393/0/0#";
var ���� = "#fEffect/CharacterEff/1032063/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon2/7#";
var ����ne = "#fUI/UIWindow/Quest/icon6/7#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var status = -1;
var typ;
var chajia;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
		var text = "\r\n";
		text += "                   "+����+"#r��Ա����#k"+����+"  #n\r\n"   
        text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		if(cm.getVip() < 1){
		text += "#L1#��ͨ��Ա�ȼ�#l\r\n";
		}
		text += "#L2#������Ա�ȼ�#l\r\n";
		text += "#L3#��ȡ��Աÿ�ո���#l\r\n";
        cm.sendSimple(text);
    } else if (selection == 1) {
				if(cm.getOneTimeLog("�������1") == 1 ||cm.getOneTimeLog("�������2") == 1 ||cm.getOneTimeLog("�������3") == 1 ){
				cm.sendOk("���Ѿ�����������");
				cm.dispose();		
		        }else if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= 1000){
					cm.getPlayer().setAccountLog("�ۼ���������_����",1,-1000);
					cm.setOneTimeLog("�������2");
					cm.sendOk("����ɹ�~!");
					cm.dispose();
				} else {
					cm.sendOk("�������,Ԫ������~!");
					cm.dispose();
				}
			}else if (selection == 2) {
				if(cm.getOneTimeLog("123") == 1  ){
				cm.sendOk("���Ѿ�����������");
				cm.dispose();		
		        }else if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= 1000){
					cm.getPlayer().setAccountLog("�ۼ���������_����",1,-1000);
					cm.setOneTimeLog("123");
					cm.sendOk("����ɹ�~!");
					cm.dispose();
				} else {
					cm.sendOk("�������,Ԫ������~!");
					cm.dispose();
				}
			}
		} 
			} else if(cm.getPlayer().getAccountLog("�ۼ���������_����",1) >= chajia){
				cm.gainVip(1);
				cm.getPlayer().setAccountLog("�ۼ���������_����",1,-chajia);
				cm.sendOk("��ϲ����Ա�ȼ������ɹ�~!Ŀǰ��Ա�ȼ�Ϊ��"+cm.getVip());
				cm.dispose();
			} else {
				cm.sendOk("Ԫ���������ֵ.");
				cm.dispose();
			}
		} else {
			cm.sendNext("#r��������: mode : " + mode + " status : " + status);
			cm.dispose();
		}
    } else {
        cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}