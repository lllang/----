var �ʹڰ� ="#fUI/GuildMark/Mark/Etc/00009004/15#";var ���˲� ="#fUI/GuildMark/Mark/Plant/00003006/15#";var �ʺ�1 ="#fUI/ChatBalloon/122/n#";var �ʺ���1 =  "#fUI/ChatBalloon/122/ne#";var �ʺ���2 =  "#fUI/ChatBalloon/122/nw#";var ��1 =    "#fUI/ChatBalloon/122/e#";var ��2 =    "#fUI/ChatBalloon/122/w#";var ���ͷ = "#fUI/Basic/icon/arrow#"; var �ʺ��� ="#fUI/ChatBalloon/122/s#";var �ʺ���1 ="#fUI/ChatBalloon/122/se#";var �ʺ���2 ="#fUI/ChatBalloon/122/sw#";var �ʺ��� ="#fUI/ChatBalloon/122/head#";var ÷�� ="#fUI/GuildMark/Mark/Animal/00002008/14#";var ÷�� ="#fUI/GuildMark/Mark/Animal/00002020/14#";var ���� = "#fEffect/CharacterEff/1114000/2/0#";var ���� = "#fEffect/CharacterEff/1022223/4/0#";var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";var ������ = "#fUI/UIWindow/Quest/icon3/6#";var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";var ��̾�� = "#fUI/UIWindow/Quest/icon0#";var �˳� = "#fUI/CN_Chat/ChattingRoom/BtExit/0/mouseOver/0#";var ���� = "#fUI/UIWindow/Quest/reward#";var ���� = "#fUI/UIWindow/PersonalShop/BtBuy/mouseOver/0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }else {
            status--;
        }
		if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "                "+����+"#e#r��������װ��װ����#k"+����+"  #n\r\n\r\n"   
			text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			text += "#e#L1#"+�ʹڰ�+" �ϳ�#r��һ����������װ��#k ȫ����+30 "+����+"#l\r\n\r\n\r\n"
            text += "#e#L2#"+�ʹڰ�+" �ϳ�#r��������������װ��#k ȫ����+80"+����+"#l\r\n\r\n\r\n"
            //text += "#e#L3#"+�ʹڰ�+" �ϳ�#r����־��ɫ������#k ��ά��+100"+����+"#l\r\n"
            //text += "#e#L4#"+�ʹڰ�+" �ϳ�#r����߱��ս�ָ��#k ȫ����+30"+����+"#l\r\n"
            //text += "#e#L5#"+�ʹڰ�+" �ϳ�#r����߱��ն�����#k ȫ����+30"+����+"#l\r\n"
            //text += "#e#L6#"+�ʹڰ�+" �ϳ�#r����߱��յ�׹��#k ȫ����+30"+����+"#l\r\n"
            //text += "#e#L7#"+�ʹڰ�+" �ϳ�#r����߱���������#k ȫ����+30"+����+"#l\r\n\r\n\r\n"
			text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
        }  else if (selection == 1) {
			warp = 1;
			cm.sendYesNo(""+Բ��+" �ϳ�#rһ����������װ#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1003540##r#c 1003540##k/1 ] [ #v 1032142##r#c 1032142##k/1 ] [ #v 1052460##r#c 1052460##k/1 ]\r\n"+��̾��+" [#v 1072664##r#c 1072664##k/1 ] [ #v 1082432##r#c 1082432##k/1 ] [ #v 1112738##r#c 1112738##k/1 ] \r\n"+��̾��+" [ #v 1122197##r#c 1122197##k/1 ] [ #v 1132152##r#c 1132152##k/1 ][ #v 4002001##r#c 4002001##k/5 ]\r\n");
			
        } else if (selection == 2) {
			warp = 2;
			cm.sendYesNo(""+Բ��+" �ϳ�#r������������װ#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1003540##r#c 1003540##k/3 ] [ #v 1032142##r#c 1032142##k/3 ] [ #v 1052460##r#c 1052460##k/3 ]\r\n"+��̾��+" [#v 1072664##r#c 1072664##k/3 ] [ #v 1082432##r#c 1082432##k/3 ] [ #v 1112738##r#c 1112738##k/3 ] \r\n"+��̾��+" [ #v 1122197##r#c 1122197##k/3 ] [ #v 1132152##r#c 1132152##k/3 ][ #v 4310049##r#c 4310049##k/1 ][ #v 4002001##r#c 4002001##k/10 ]\r\n");
			
        } else if (selection == 3) {
			warp = 3;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��־��ɫ����#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1132211##r#c 1132211##k/1 ] [ #v 1132212##r#c 1132212##k/1 ] [ #v 1132213##r#c 1132213##k/1 ]\r\n"+��̾��+" [#v 1132214##r#c 1132214##k/1 ] [ #v 4310156##r#c 4310156##k/30 ] [ #v 4310097##r#c 4310097##k/30 ] \r\n\r\n"+��̾��+" #d�����6�����Ͻ��������кϳ�\r\n");
			
        } else if (selection == 4) {
			warp = 4;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��߱��ս�ָ#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1113072##r#c 1113072##k/1 ] [ #v 1113073##r#c 1113073##k/1 ] [ #v 1113074##r#c 1113074##k/1 ]\r\n"+��̾��+" [#v 4310156##r#c 4310156##k/20 ] [ #v 4310097##r#c 4310097##k/20 ] [ #v 4310098##r#c 4310098##k/20 ] \r\n\r\n"+��̾��+" #d�����6�����Ͻ��������кϳ�\r\n");
			
        } else if (selection == 5) {
			warp = 5;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��߱��ն���#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1032220##r#c 1032220##k/1 ] [ #v 1032221##r#c 1032221##k/1 ] [ #v 1032222##r#c 1032222##k/1 ]\r\n"+��̾��+" [#v 4310156##r#c 4310156##k/20 ] [ #v 4310097##r#c 4310097##k/20 ] [ #v 4310098##r#c 4310098##k/20 ] \r\n\r\n"+��̾��+" #d�����6�����Ͻ��������кϳ�\r\n");
			
        } else if (selection == 6) {
			warp = 6;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��߱��յ�׹#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1122264##r#c 1122264##k/1 ] [ #v 1122265##r#c 1122265##k/1 ] [ #v 1122266##r#c 1122266##k/1 ]\r\n"+��̾��+" [#v 4310156##r#c 4310156##k/20 ] [ #v 4310097##r#c 4310097##k/20 ] [ #v 4310098##r#c 4310098##k/20 ] \r\n\r\n"+��̾��+" #d�����6�����Ͻ��������кϳ�\r\n");
			
        } else if (selection == 7) {
			warp = 7;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��߱�������#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1132243##r#c 1132243##k/1 ] [ #v 1132244##r#c 1132244##k/1 ] [ #v 1132245##r#c 1132245##k/1 ]\r\n"+��̾��+" [#v 4310156##r#c 4310156##k/20 ] [ #v 4310097##r#c 4310097##k/20 ] [ #v 4310098##r#c 4310098##k/20 ] \r\n\r\n"+��̾��+" #d�����6�����Ͻ��������кϳ�\r\n");
			
        } else if(status = 1) {
		    if(warp == 1){
		     if (!cm.haveItem(1003540,1)) {
			    cm.sendOk("�뽫#v 1003540##b#z 1003540##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032142,1)) {
			    cm.sendOk("�뽫#v 1032142##b#z 1032142##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1052460,1)) {
			    cm.sendOk("�뽫#v 1052460##b#z 1052460##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1072664,1)) {
			    cm.sendOk("�뽫#v 1072664##b#z 1072664##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1082432,1)) {
			    cm.sendOk("�뽫#v 1082432##b#z 1082432##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1112738,1)) {
			    cm.sendOk("�뽫#v 1112738##b#z 1112738##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1122197,1)) {
			    cm.sendOk("�뽫#v 1122197##b#z 1122197##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132152,1)) {
			    cm.sendOk("�뽫#v 1132152##b#z 1132152##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002001,5)) {
			    cm.sendOk("�뽫#v 4002001##b#z 4002001##k���뱳����");
                cm.dispose();
			}else{
                cm.gainItem(1003540,-1);//1
                cm.gainItem(1032142,-1);//2
                cm.gainItem(1052460,-1);//3
                cm.gainItem(1072664,-1);//4
                cm.gainItem(1082432,-1);//5
                cm.gainItem(1112738,-1);//6
				cm.gainItem(1122197,-1);//7
				cm.gainItem(1132152,-1);//8
				cm.gainItem(4002001,-5);//8
				cm.gainItem(1003540,30,30,30,30,0,0,30,30,0,0,0,0,0,0);//1
				cm.gainItem(1032142,30,30,30,30,0,0,30,30,0,0,0,0,0,0);//2
				cm.gainItem(1052460,30,30,30,30,0,0,30,30,0,0,0,0,0,0);//3
				cm.gainItem(1072664,30,30,30,30,0,0,30,30,0,0,0,0,0,0);//4
				cm.gainItem(1082432,30,30,30,30,0,0,30,30,0,0,0,0,0,0);//5
				cm.gainItem(1112738,30,30,30,30,0,0,30,30,0,0,0,0,0,0);//6
				cm.gainItem(1122197,30,30,30,30,0,0,30,30,0,0,0,0,0,0);//7
				cm.gainItem(1132152,30,30,30,30,0,0,30,30,0,0,0,0,0,0);//8
                cm.sendOk("�ϳɳɹ�");
				cm.����(1," ���:<"+cm.getName()+">�ɹ��ϳ���ȫ����+30һ����������װ��8����ϲ��~!");
                cm.dispose();
        }
			
		}else if(warp == 2){
		     if (!cm.haveItem(1003540,3)) {
			    cm.sendOk("�뽫#v 1003540##b#z 1003540##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032142,3)) {
			    cm.sendOk("�뽫#v 1032142##b#z 1032142##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1052460,3)) {
			    cm.sendOk("�뽫#v 1052460##b#z 1052460##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1072664,3)) {
			    cm.sendOk("�뽫#v 1072664##b#z 1072664##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1082432,3)) {
			    cm.sendOk("�뽫#v 1082432##b#z 1082432##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1112738,3)) {
			    cm.sendOk("�뽫#v 1112738##b#z 1112738##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1122197,3)) {
			    cm.sendOk("�뽫#v 1122197##b#z 1122197##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132152,3)) {
			    cm.sendOk("�뽫#v 1132152##b#z 1132152##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002001,10)) {
			    cm.sendOk("�뽫#v 4002001##b#z 4002001##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310049,1)) {
			    cm.sendOk("�뽫#v 4310049##b#z 4310049##k���뱳����");
                cm.dispose();
			}else{
                cm.gainItem(1003540,-3);//1
                cm.gainItem(1032142,-3);//2
                cm.gainItem(1052460,-3);//3
                cm.gainItem(1072664,-3);//4
                cm.gainItem(1082432,-3);//5
                cm.gainItem(1112738,-3);//6
				cm.gainItem(1122197,-3);//7
				cm.gainItem(1132152,-3);//8
				cm.gainItem(4002001,-10);//8
				cm.gainItem(4310049,-1);//8
				cm.gainItem(1003540,80,80,80,80,0,0,80,80,0,0,0,0,0,0);//1
				cm.gainItem(1032142,80,80,80,80,0,0,80,80,0,0,0,0,0,0);//2
				cm.gainItem(1052460,80,80,80,80,0,0,80,80,0,0,0,0,0,0);//3
				cm.gainItem(1072664,80,80,80,80,0,0,80,80,0,0,0,0,0,0);//4
				cm.gainItem(1082432,80,80,80,80,0,0,80,80,0,0,0,0,0,0);//5
				cm.gainItem(1112738,80,80,80,80,0,0,80,80,0,0,0,0,0,0);//6
				cm.gainItem(1122197,80,80,80,80,0,0,80,80,0,0,0,0,0,0);//7
				cm.gainItem(1132152,80,80,80,80,0,0,80,80,0,0,0,0,0,0);//8
                cm.sendOk("�ϳɳɹ�");
				cm.����(1," ���:<"+cm.getName()+">�ɹ��ϳ���ȫ����+80������������װ��8����ϲ��~!");
                cm.dispose();
        }
		
		}else if(warp == 3){
		     if (!cm.haveItem(1132211,1)) {
			    cm.sendOk("�뽫#v 1132211##b#z 1132211##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132213,1)) {
			    cm.sendOk("�뽫#v 1132213##b#z 1132213##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310097,30)) {
			    cm.sendOk("�뽫30��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,30)) {
			    cm.sendOk("�뽫30��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132214,1)) {
			    cm.sendOk("�뽫#v 1132214##b#z 1132214##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132212,1)) {
			    cm.sendOk("�뽫#v 1132212##b#z 1132212##k���뱳����");
                cm.dispose();
			}else{
                cm.gainItem(1132211,-1);
                cm.gainItem(1132213,-1);
                cm.gainItem(4310097,-30);
                cm.gainItem(4310156,-30);
                cm.gainItem(1132214,-1);
                cm.gainItem(1132212,-1);
                cm.gainItem(1132215,100,100,100,100,100,100,50,50,100,100,100,100,100,100);
                cm.sendOk("�ϳɳɹ�");
                cm.dispose();
        }
		
		}else if(warp == 4){
		     if (!cm.haveItem(4310097,20)) {
			    cm.sendOk("�뽫20��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1113074,1)) {
			    cm.sendOk("�뽫#v 1113074##b#z 1113074##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,20)) {
			    cm.sendOk("�뽫20��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310098,20)) {
			    cm.sendOk("�뽫20��#v 4310098##b#z 4310098##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1113073,1)) {
			    cm.sendOk("�뽫#v 1113073##b#z 1113073##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1113072,1)) {
			    cm.sendOk("�뽫#v 1113072##b#z 1113072##k���뱳����");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-20);
                cm.gainItem(1113074,-1);
                cm.gainItem(4310156,-20);
                cm.gainItem(4310098,-20);
                cm.gainItem(1113073,-1);
                cm.gainItem(1113072,-1);
                cm.gainItem(1113075,30,30,30,30,0,0,30,30,0,0,0,0,0,0);
			    cm.sendOk("�ϳɳɹ�");
                cm.dispose();
            }	
		
		}else if(warp == 5){
		     if (!cm.haveItem(4310097,20)) {
			    cm.sendOk("�뽫20��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032222,1)) {
			    cm.sendOk("�뽫#v 1032222##b#z 1032222##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,20)) {
			    cm.sendOk("�뽫20��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310098,20)) {
			    cm.sendOk("�뽫20��#v 4310098##b#z 4310098##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032221,1)) {
			    cm.sendOk("�뽫#v 1032221##b#z 1032221##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032220,1)) {
			    cm.sendOk("�뽫#v 1032220##b#z 1032220##k���뱳����");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-20);
                cm.gainItem(1032222,-1);
                cm.gainItem(4310156,-20);
                cm.gainItem(4310098,-20);
                cm.gainItem(1032221,-1);
                cm.gainItem(1032220,-1);
                cm.gainItem(1032223,30,30,30,30,0,0,30,30,0,0,0,0,0,0);
			    cm.sendOk("�ϳɳɹ�");
                cm.dispose();
            }
			
		}else if(warp == 6){
		     if (!cm.haveItem(4310097,20)) {
			    cm.sendOk("�뽫20��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1122266,1)) {
			    cm.sendOk("�뽫#v 1122266##b#z 1122266##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,20)) {
			    cm.sendOk("�뽫20��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310098,20)) {
			    cm.sendOk("�뽫20��#v 4310098##b#z 4310098##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1122265,1)) {
			    cm.sendOk("�뽫#v 1122265##b#z 1122265##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1122264,1)) {
			    cm.sendOk("�뽫#v 1122264##b#z 1122264##k���뱳����");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-20);
                cm.gainItem(1122266,-1);
                cm.gainItem(4310156,-20);
                cm.gainItem(4310098,-20);
                cm.gainItem(1122265,-1);
                cm.gainItem(1122264,-1);
                cm.gainItem(1122267,30,30,30,30,0,0,30,30,0,0,0,0,0,0);
			    cm.sendOk("�ϳɳɹ�");
                cm.dispose();
            }
		}else if(warp == 7){
		     if (!cm.haveItem(4310097,20)) {
			    cm.sendOk("�뽫20��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132245,1)) {
			    cm.sendOk("�뽫#v 1132245##b#z 1132245##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310098,20)) {
			    cm.sendOk("�뽫20��#v 4310098##b#z 4310098##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,20)) {
			    cm.sendOk("�뽫20��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132244,1)) {
			    cm.sendOk("�뽫#v 1132244##b#z 1132244##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132243,1)) {
			    cm.sendOk("�뽫#v 1132243##b#z 1132243##k���뱳����");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-20);
                cm.gainItem(1132245,-1);
                cm.gainItem(4310156,-20);
                cm.gainItem(4310098,-20);
                cm.gainItem(1132244,-1);
                cm.gainItem(1132243,-1);
                cm.gainItem(1132246,30,30,30,30,0,0,30,30,0,0,0,0,0,0);
			    cm.sendOk("�ϳɳɹ�");
                cm.dispose();
            }

		}
		}		
    }
}
// return false;