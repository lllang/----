���� = 0;
���� = 0;
���� = 0;
���� = 0;
  HP = 0;
  MP = 0;
�﹥ = 0;
ħ�� = 0;
��� = 0;
ħ�� = 0;
�ر� = 0;
���� = 0;
��Ծ = 0;
�ٶ� = 0;
var itmem = 0;

var weapon = [
//[1492194,����,����,����,����,HP,MP,�﹥,ħ��,���,ħ��,�ر�,����,��Ծ,�ٶ�,"װ������"]
[1492235,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1482221,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1462243,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1452257,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1442274,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1432218,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1382265,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1332279,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1422189,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1302343,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1402259,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
[1472265,50,50,50,50,0,0,0,0,0,0,0,0,0,0,"��ά����+50",88000],
//[1322060,20,20,20,20,0,0,0,0,0,0,0,0,0,0,"��ά����+20",88000],
//[1312037,20,20,20,20,0,0,0,0,0,0,0,0,0,0,"��ά����+20",88000],
//[1302081,20,20,20,20,0,0,0,0,0,0,0,0,0,0,"��ά����+20",88000],



     
];

var req = [

    [4021009,1],
	[4310143,100],
	[4002001,5],
	[4170009,30],
	[4170002,30],
	[4002002,100],
	[4170005,30],
	[4170014,30],
	[4001266,3],
	[4310080,2],
];
var sels;
var status = -1;

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
        var msg = "";
		
		msg += "\t\t\t  #v4031574##e#r�� �� �� �� �� ��#k#n#v4031574#\r\n"
		
        msg += "\r\n#d��Ҫ���²���:#b ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "# ��#e#c"+req[ii][0]+"##k/#r" + req[ii][1] +"#k#n#b��";
            if (ii % 1 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#b��ѡ������Ҫ�Ķ���-----------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i][0] +"##t" + weapon[i][0] +  "##b["+weapon[i][15]+"] ����ϳ�#k#l\r\n";
			
			//msg += "#L100" + i + "    ##e#rֱ�ӹ��� Ԫ���ۼۣ�"+weapon[i][16]+"#l#k#n\r\n";
        }    
        cm.sendSimple(msg);
		
		
		
    } else if (status == 1) {
		
        sels = selection;
		//cm.sendNext("#����"+sels);
		if (sels >= 999) {
		
		if (sels == 1000) {
		gbcz = 0;
		} else if (sels == 1001) {
		gbcz = 1;		
		} else if (sels == 1002) {
		gbcz = 2;	
		} else if (sels == 1003) {
		gbcz = 3;
        } else if (sels == 1004) {
		gbcz = 4;
		} else if (sels == 1005) {
		gbcz = 5;
		} else if (sels == 1006) {
		gbcz = 6;
		} else if (sels == 1007) {
		gbcz = 7;
		} else if (sels == 1008) {
		gbcz = 8;
		} else if (sels == 1009) {
		gbcz = 9;
        } else if (sels == 10010) {
		gbcz = 10;	
        } else if (sels == 10011) {
		gbcz = 11;			
		}		
		
       if(cm.getInventory(1).isFull(1)){
					cm.sendOk("�������㣡");
					cm.dispose();
            return;
        }
        
            if (cm.getPlayer().getAccountLog("�ۼ���������_����",1) <= weapon[gbcz][16] ) {
                cm.sendNext("#b��û���㹻��Ԫ����#k������׬���ȥ�ɣ���Ҫ"+weapon[gbcz][16]);
                cm.dispose();
                return;
            }
        ѡ�� = 2;
        cm.sendYesNo("#b�Ƿ���\r\n#r #i" + weapon[gbcz][0] + "##t" + weapon[gbcz][0] + "#  #b["+weapon[gbcz][15]+"]#k\r\n");
		itmem = weapon[gbcz];		
		
		} else { //��������Ҫ�ϳ�
        if(cm.getInventory(1).isFull(1)){
					cm.sendOk("�������㣡");
					cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b������û��#r�㹻�Ĳ���#k�������ռ�����ȥ�ɣ�");
                cm.dispose();
                return;
            }
        }
	    ѡ�� = 1;
        cm.sendYesNo("#b�Ƿ�Ҫ����===========================\r\n#r #i" + weapon[sels][0] + "##t" + weapon[sels][0] + "#  #b["+weapon[sels][15]+"]#k\r\n");
		itmem = weapon[sels];
		sels2 = sels;
		}
    } else if (status == 2) {
		
		
		
		if (ѡ�� == 2) {
		var sels = gbcz;	
		cm.getPlayer().setAccountLog("�ۼ���������_����",1,-weapon[sels][16]);//�ㄻ		
		}
		if (ѡ�� == 1) {	
		var sels = sels2;
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
		}
        cm.gainItem(weapon[sels][0],weapon[sels][1],weapon[sels][2],weapon[sels][3],weapon[sels][4],weapon[sels][5],weapon[sels][6],weapon[sels][7],weapon[sels][8],weapon[sels][9],weapon[sels][10],weapon[sels][11],weapon[sels][12],weapon[sels][13],weapon[sels][14]);
        cm.sendOk("#b�Ѿ��ɹ����죺\r\n #r#v"+weapon[sels][0]+"##t"+weapon[sels][0]+"#  #b["+weapon[sels][15]+"]#k");
		cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "������������ά+50������������ϲ��̤����ж�λ��");
        cm.dispose();
    } else {
        cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}
