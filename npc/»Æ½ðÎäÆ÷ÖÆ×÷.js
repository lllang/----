var weapon = new Array(
//�ϳ���ƷID,ǰһ��װ��ID
    Array(1302107,1302106),
	Array(1332237,1332242),
	Array(1382144,1382226),
	Array(1402130,1402214),
	Array(1422090,1422156),
	Array(1432118,1432182),
	Array(1452148,1452220),
	Array(1462138,1462208),
	Array(1472160,1472230),
	Array(1482121,1482183),
	Array(1492121,1492194)
);
//������������
var req = [
    [4001126, 10000]
    //[4031217, 1],
    //[4000487, 10],
    //[4310088, 10],
	//[4250802, 5],
	//[4251202, 5],
	//[4251002, 5],
	//[4310088, 20]
];
var rem = 128888888;
var gailv = 5;//����ٷ�֮����Ҫ����ٷֺ�ֻҪ���������������!!
var ʧ�ܵ��� = 4310080;
var sels;
var status = -1;
/* 
���Ը��ʴ��� 
		var aa = "";
		for (var i = 0; i < 1000; i++) {
			s1 = Math.floor(Math.random() * (100 - 1) + 1);
			if(s1 <= gailv){
				aa +="#g"+s1+"#k ";
			} else {
				aa +="#r"+s1+"#k ";
			}
		}
		cm.sendOk(aa);
*/
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
        msg += "\r\n#d����:#b ";
        msg += "ʧ�ܿɻ�÷�Ҷ8888����#v4310080#��ֱ�Ӷһ���������\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + ":##z" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 2 == 0 && ii !=0) {
                msg += "\r\n";
            }
        }
		msg += "\t\t";
		msg += rem+"���";
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i][1] + ":##z" + weapon[i][1] + "# #b����#r #i" + weapon[i][0] + ":##z" + weapon[i][0] + "##l\r\n";
        }
        cm.sendSimple("#d��Ҫ�һ�װ����? \t\tĿǰ�ϳɸ���Ϊ: #r#e"+gailv+"%#d#n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels][0])) {
            cm.sendNext("#r�����ռ䲻��");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b����û��#r#i" + req[i][0] + ":##z" + req[i][0] + "#x" + req[i][1] + "");
                cm.dispose();
                return;
            }
        }
		if (!cm.haveItem(weapon[sels][1],1)) {
            cm.sendNext("#b����û��#r#i" + weapon[sels][1] + ":##z" + weapon[sels][1] + "#");
            cm.dispose();
            return;
        }
		if(cm.getMeso() < rem){
			cm.sendNext("#b����û��#r"+rem+"���");
            cm.dispose();
            return;
		}
        cm.sendYesNo("#b�Ƿ�Ҫ�һ�װ��#r #i" + weapon[sels] + ":#? \r\n");
    } else if (status == 2) {
		s1 = Math.floor(Math.random() * (100 - 1) + 1);
		if(s1 <= gailv){
			for (var i = 0; i < req.length; i++) {
				cm.gainItem(req[i][0], -req[i][1]);
			}
			cm.gainMeso(-rem);
			cm.gainItem(weapon[sels][1],-1);
			cm.gainItem(weapon[sels][0], 1);
			cm.sendNext("#b�Ѿ��һ������� #i" + weapon[sels] + "#");
			cm.����(2, "��ң�[" + cm.getName() + "] ���ð���ˣ��ɹ�ʹ�ú�ɫ��������Ϊ�ƽ�����");
			cm.dispose();
		} else {
			for (var i = 0; i < req.length; i++) {
				cm.gainItem(req[i][0], -req[i][1]);
			}
			cm.gainMeso(-rem);
			cm.gainItem(ʧ�ܵ���,1);
			cm.sendNext("#b�ϳ�ʧ��,��Ͷ��Ĳ�����ʧ��~!");
			cm.����(2, "��ң�[" + cm.getName() + "] ���ź����ϳ�ʧ�ܻ�÷�Ҷ8888����һ��������");
			cm.dispose();
		}
    } else {
        cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}