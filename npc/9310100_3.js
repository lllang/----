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
[2614000,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"�ƹ�һ��",300],
//[1462138,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"��ά����+88������+200",88000],
//[1432118,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"��ά����+88������+200",88000],
//[1402130,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"��ά����+88������+200",88000],
//[1422090,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"��ά����+88������+200",88000],
//[1472160,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"��ά����+88������+200",88000],
//[1332237,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"��ά����+88������+200",88000],
//[1382144,88,88,88,88,0,0,0,200,0,0,0,0,0,0,"��ά����+88��ħ��+200",88000],
//[1482121,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"��ά����+88������+200",88000],
//[1492121,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"��ά����+88������+200",88000],
//[1302107,88,88,88,88,0,0,200,0,0,0,0,0,0,0,"��ά����+88��˫��+200",88000],




     
];

var req = [

	[2041215,2],
	
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
		
		msg += "\t\t\t  #v2614000##e#rһ �� �� �� ʯ#k#n#v2614000#\r\n"
		
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
			
			// msg += "#L100" + i + "    ##e#rֱ�ӹ��� Ԫ���ۼۣ�"+weapon[i][16]+"#l#k#n\r\n";
        }    
        cm.sendSimple(msg);
		
		
		
    } else if (status == 1) {
        selectio = selection;
        cm.sendGetNumber("������д��Ҫ���������:",0,1,100);
            
    } else if (status == 2) {
		
        selssss = selection;
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
            if (!cm.haveItem(req[i][0], req[i][1] * selection)) {
                cm.sendNext("#b������û��#r�㹻�Ĳ���#k�������ռ�����ȥ�ɣ�");
                cm.dispose();
                return;
            }
        }
	    ѡ�� = 1;
        cm.sendYesNo("#b�Ƿ�Ҫ����===========================\r\n#r #i" + weapon[0][0] + "##t" + weapon[0][0] + "#  #b["+weapon[0][15]+"]X" + selssss + "#k\r\n");
		itmem = weapon[0];
		sels2 = 0;
		}
    } else if (status == 3) {
		
		
		
		if (ѡ�� == 2) {
		var sels = gbcz;	
		cm.getPlayer().setAccountLog("�ۼ���������_����",1,-weapon[sels][16]);//�ㄻ		
		}
		if (ѡ�� == 1) {	
		var sels = sels2;
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -(req[i][1] * selssss));
        }
		}
        cm.gainItem(weapon[0][0],selssss);
        cm.sendOk("#b�Ѿ��ɹ����죺\r\n #r#v"+weapon[0][0]+"##t"+weapon[0][0]+"#  #b["+weapon[0][15]+"]X" + selssss + "#k");
		cm.����(1, "��ҡ�" + cm.getPlayer().getName() + "���ɹ��ϳ���һ���ƹ�ʯ��X " + selssss);
        cm.dispose();
    } else {
        cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
		
		
		

    }
}
