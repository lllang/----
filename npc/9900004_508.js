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
            text += "                "+����+"#e#r��Ʒ�ϳ�����#k"+����+"  #n\r\n\r\n"   
			text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			text += "      #e#L1#"+÷��+" �ϳ�#r�������񻰶�����#k ȫ����+188"+÷��+"#l\r\n"
            text += "     #e#L2#"+÷��+" �ϳ�#r���ֲ������˿ڡ�#k ȫ����+188"+÷��+"#l\r\n"
            text += "     #e#L3#"+÷��+" �ϳ�#r����־��ɫ������#k ȫ����+188"+÷��+"#l\r\n"
            text += "     #e#L4#"+÷��+" �ϳ�#r����߱��ս�ָ��#k ȫ����+188"+÷��+"#l\r\n"
            text += "     #e#L5#"+÷��+" �ϳ�#r����߱��ն�����#k ȫ����+188"+÷��+"#l\r\n"
            text += "     #e#L6#"+÷��+" �ϳ�#r����߱��յ�׹��#k ȫ����+188"+÷��+"#l\r\n"
            text += "     #e#L7#"+÷��+" �ϳ�#r����߱���������#k ȫ����+188"+÷��+"#l\r\n\r\n\r\n"
			text += "   "+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
        }  else if (selection == 1) {
			warp = 1;
			cm.sendYesNo(""+Բ��+" �ϳ�#r�����񻰶���#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1032205##r#c 1032205##k/1 ] [ #v 1032206##r#c 1032206##k/1 ] [ #v 1032207##r#c 1032207##k/1 ]\r\n"+��̾��+" [#v 1032208##r#c 1032208##k/1 ] [ #v 1032209##r#c 1032209##k/1 ] [ #v 4310156##r#c 4310156##k/30 ]\r\n"+��̾��+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+��̾��+" #d�����Щ���Ͻ��������кϳ�\r\n");
			
        } else if (selection == 2) {
			warp = 2;
			cm.sendYesNo(""+Բ��+" �ϳ�#r�ֲ������˿�#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1012170##r#c 1012170##k/1 ] [ #v 1012171##r#c 1012171##k/1 ] [ #v 1012172##r#c 1012172##k/1 ]\r\n"+��̾��+" [#v 1012173##r#c 1012173##k/1 ] [ #v 4310156##r#c 4310156##k/30 ] [ #v 4310097##r#c 4310097##k/30 ]\r\n"+��̾��+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+��̾��+" #d�����Щ���Ͻ��������кϳ�\r\n");
			
        } else if (selection == 3) {
			warp = 3;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��־��ɫ����#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1132211##r#c 1132211##k/1 ] [ #v 1132212##r#c 1132212##k/1 ] [ #v 1132213##r#c 1132213##k/1 ]\r\n"+��̾��+" [#v 1132214##r#c 1132214##k/1 ] [ #v 4310156##r#c 4310156##k/88 ] [ #v 4310097##r#c 4310097##k/88 ]\r\n"+��̾��+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+��̾��+" #d�����Щ���Ͻ��������кϳ�\r\n");
			
        } else if (selection == 4) {
			warp = 4;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��߱��ս�ָ#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1113072##r#c 1113072##k/1 ] [ #v 1113073##r#c 1113073##k/1 ] [ #v 1113074##r#c 1113074##k/1 ]\r\n"+��̾��+" [#v 4310156##r#c 4310156##k/50 ] [ #v 4310097##r#c 4310097##k/50 ] [ #v 4310098##r#c 4310098##k/50 ]\r\n"+��̾��+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+��̾��+" #d�����Щ���Ͻ��������кϳ�\r\n");
			
        } else if (selection == 5) {
			warp = 5;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��߱��ն���#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1032220##r#c 1032220##k/1 ] [ #v 1032221##r#c 1032221##k/1 ] [ #v 1032222##r#c 1032222##k/1 ]\r\n"+��̾��+" [#v 4310156##r#c 4310156##k/50 ] [ #v 4310097##r#c 4310097##k/50 ] [ #v 4310098##r#c 4310098##k/50 ]\r\n"+��̾��+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+��̾��+" #d�����Щ���Ͻ��������кϳ�\r\n");
			
        } else if (selection == 6) {
			warp = 6;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��߱��յ�׹#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1122264##r#c 1122264##k/1 ] [ #v 1122265##r#c 1122265##k/1 ] [ #v 1122266##r#c 1122266##k/1 ]\r\n"+��̾��+" [#v 4310156##r#c 4310156##k/50 ] [ #v 4310097##r#c 4310097##k/50 ] [ #v 4310098##r#c 4310098##k/50 ]\r\n"+��̾��+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+��̾��+" #d�����Щ���Ͻ��������кϳ�\r\n");
			
        } else if (selection == 7) {
			warp = 7;
			cm.sendYesNo(""+Բ��+" �ϳ�#r��߱�������#k��Ҫ��\r\n\r\n"+��̾��+" [#v 1132243##r#c 1132243##k/1 ] [ #v 1132244##r#c 1132244##k/1 ] [ #v 1132245##r#c 1132245##k/1 ]\r\n"+��̾��+" [#v 4310156##r#c 4310156##k/50 ] [ #v 4310097##r#c 4310097##k/50 ] [ #v 4310098##r#c 4310098##k/50 ]\r\n"+��̾��+" [ #v 4002002##r#c 4002002##k/30 ] [ #v 4310038##r#c 4310038##k/100 ] [ #v 4002001##r#c 4002001##k/2 ] \r\n\r\n"+��̾��+" #d�����Щ���Ͻ��������кϳ�\r\n");
			
        } else if(status = 1) {
		    if(warp == 1){
		     if (!cm.haveItem(1032205,1)) {
			    cm.sendOk("�뽫#v 1032205##b#z 1032205##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032206,1)) {
			    cm.sendOk("�뽫#v 1032206##b#z 1032206##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032207,1)) {
			    cm.sendOk("�뽫#v 1032207##b#z 1032207##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032208,1)) {
			    cm.sendOk("�뽫#v 1032208##b#z 1032208##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032209,1)) {
			    cm.sendOk("�뽫#v 1032209##b#z 1032209##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,30)) {
			    cm.sendOk("�뽫30����#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("�뽫2����#v 4002001##b#z 4002001##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("�뽫100����#v 4310038##b#z 4310038##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("�뽫2����#v 4002002##b#z 4002002##k���뱳����");
                cm.dispose();
			}else{
                cm.gainItem(1032205,-1);
                cm.gainItem(1032206,-1);
                cm.gainItem(1032207,-1);
                cm.gainItem(1032208,-1);
                cm.gainItem(1032209,-1);
                cm.gainItem(4310156,-30);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
				cm.gainItem(1032219,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
                cm.sendOk("�ϳɳɹ�");
                cm.dispose();
        }
			
		}else if(warp == 2){
		     if (!cm.haveItem(4310156,30)) {
			    cm.sendOk("�뽫30��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1012173,1)) {
			    cm.sendOk("�뽫#v 1012173##b#z 1012173##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1012172,1)) {
			    cm.sendOk("�뽫#v 1012172##b#z 1012172##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310097,30)) {
			    cm.sendOk("�뽫30��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1012171,1)) {
			    cm.sendOk("�뽫#v 1012171##b#z 1012171##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1012170,1)) {
			    cm.sendOk("�뽫#v 1012170##b#z 1012170##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("�뽫2����#v 4002001##b#z 4002001##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("�뽫100����#v 4310038##b#z 4310038##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("�뽫2����#v 4002002##b#z 4002002##k���뱳����");
                cm.dispose();
			}else{
                cm.gainItem(4310156,-30);
                cm.gainItem(1012173,-1);
                cm.gainItem(1012172,-1);
                cm.gainItem(4310097,-30);
                cm.gainItem(1012171,-1);
                cm.gainItem(1012170,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1012174,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
                cm.sendOk("�ϳɳɹ�");
                cm.dispose();
        }
		
		}else if(warp == 3){
		     if (!cm.haveItem(1132211,1)) {
			    cm.sendOk("�뽫#v 1132211##b#z 1132211##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132213,1)) {
			    cm.sendOk("�뽫#v 1132213##b#z 1132213##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310097,88)) {
			    cm.sendOk("�뽫30��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,88)) {
			    cm.sendOk("�뽫30��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132214,1)) {
			    cm.sendOk("�뽫#v 1132214##b#z 1132214##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132212,1)) {
			    cm.sendOk("�뽫#v 1132212##b#z 1132212##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("�뽫2����#v 4002001##b#z 4002001##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("�뽫100����#v 4310038##b#z 4310038##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("�뽫2����#v 4002002##b#z 4002002##k���뱳����");
                cm.dispose();
			}else{
                cm.gainItem(1132211,-1);
                cm.gainItem(1132213,-1);
                cm.gainItem(4310097,-88);
                cm.gainItem(4310156,-88);
                cm.gainItem(1132214,-1);
                cm.gainItem(1132212,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1132215,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
                cm.sendOk("�ϳɳɹ�");
                cm.dispose();
        }
		
		}else if(warp == 4){
		     if (!cm.haveItem(4310097,50)) {
			    cm.sendOk("�뽫20��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1113074,1)) {
			    cm.sendOk("�뽫#v 1113074##b#z 1113074##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,50)) {
			    cm.sendOk("�뽫20��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310098,50)) {
			    cm.sendOk("�뽫20��#v 4310098##b#z 4310098##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1113073,1)) {
			    cm.sendOk("�뽫#v 1113073##b#z 1113073##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1113072,1)) {
			    cm.sendOk("�뽫#v 1113072##b#z 1113072##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("�뽫2����#v 4002001##b#z 4002001##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("�뽫100����#v 4310038##b#z 4310038##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("�뽫2����#v 4002002##b#z 4002002##k���뱳����");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-50);
                cm.gainItem(1113074,-1);
                cm.gainItem(4310156,-50);
                cm.gainItem(4310098,-50);
                cm.gainItem(1113073,-1);
                cm.gainItem(1113072,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1113075,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
			    cm.sendOk("�ϳɳɹ�");
                cm.dispose();
            }	
		
		}else if(warp == 5){
		     if (!cm.haveItem(4310097,50)) {
			    cm.sendOk("�뽫20��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032222,1)) {
			    cm.sendOk("�뽫#v 1032222##b#z 1032222##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,50)) {
			    cm.sendOk("�뽫20��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310098,50)) {
			    cm.sendOk("�뽫20��#v 4310098##b#z 4310098##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032221,1)) {
			    cm.sendOk("�뽫#v 1032221##b#z 1032221##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1032220,1)) {
			    cm.sendOk("�뽫#v 1032220##b#z 1032220##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("�뽫2����#v 4002001##b#z 4002001##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("�뽫100����#v 4310038##b#z 4310038##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("�뽫2����#v 4002002##b#z 4002002##k���뱳����");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-50);
                cm.gainItem(1032222,-1);
                cm.gainItem(4310156,-50);
                cm.gainItem(4310098,-50);
                cm.gainItem(1032221,-1);
                cm.gainItem(1032220,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1032223,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
			    cm.sendOk("�ϳɳɹ�");
                cm.dispose();
            }
			
		}else if(warp == 6){
		     if (!cm.haveItem(4310097,50)) {
			    cm.sendOk("�뽫20��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1122266,1)) {
			    cm.sendOk("�뽫#v 1122266##b#z 1122266##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,50)) {
			    cm.sendOk("�뽫20��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310098,50)) {
			    cm.sendOk("�뽫20��#v 4310098##b#z 4310098##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1122265,1)) {
			    cm.sendOk("�뽫#v 1122265##b#z 1122265##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1122264,1)) {
			    cm.sendOk("�뽫#v 1122264##b#z 1122264##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("�뽫2����#v 4002001##b#z 4002001##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("�뽫100����#v 4310038##b#z 4310038##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("�뽫2����#v 4002002##b#z 4002002##k���뱳����");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-50);
                cm.gainItem(1122266,-1);
                cm.gainItem(4310156,-50);
                cm.gainItem(4310098,-50);
                cm.gainItem(1122265,-1);
                cm.gainItem(1122264,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1122267,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
			    cm.sendOk("�ϳɳɹ�");
                cm.dispose();
            }
		}else if(warp == 7){
		     if (!cm.haveItem(4310097,50)) {
			    cm.sendOk("�뽫20��#v 4310097##b#z 4310097##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132245,1)) {
			    cm.sendOk("�뽫#v 1132245##b#z 1132245##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310098,50)) {
			    cm.sendOk("�뽫20��#v 4310098##b#z 4310098##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310156,50)) {
			    cm.sendOk("�뽫20��#v 4310156##b#z 4310156##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132244,1)) {
			    cm.sendOk("�뽫#v 1132244##b#z 1132244##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(1132243,1)) {
			    cm.sendOk("�뽫#v 1132243##b#z 1132243##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002001,2)) {
			    cm.sendOk("�뽫2����#v 4002001##b#z 4002001##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4310038,100)) {
			    cm.sendOk("�뽫100����#v 4310038##b#z 4310038##k���뱳����");
                cm.dispose();
			}else if (!cm.haveItem(4002002,30)) {
			    cm.sendOk("�뽫2����#v 4002002##b#z 4002002##k���뱳����");
                cm.dispose();
			}else{
			    cm.gainItem(4310097,-50);
                cm.gainItem(1132245,-1);
                cm.gainItem(4310156,-50);
                cm.gainItem(4310098,-50);
                cm.gainItem(1132244,-1);
                cm.gainItem(1132243,-1);
				cm.gainItem(4002001,-2);
				cm.gainItem(4310038,-100);
				cm.gainItem(4002002,-30);
                cm.gainItem(1132246,188,188,188,188,188,188,188,188,188,188,188,188,188,188);
			    cm.sendOk("�ϳɳɹ�");
                cm.dispose();
            }

		}
		}		
    }
}
// return false;