/*
 *
 *  �˽ű������������������
 * ������ҵ�ű����Ⱥ:1049548
 *
 */


//importPackage(net.sf.cherry.client);

var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

//------------------------------------------------------------------------

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;
var feixing = 0;

//------------------------------------------------------------------------

var bossmaps = Array(
Array(100000005,0," ��Ģ���� "), 
                                        //Array(106020300,0,"��Ģ����-0.5h"), 
                                        Array(800010100,0," ��Ģ���� "), 
                                        Array(105070002,0," ��ʬ���� "), 
                                        Array(701010320,0," ������� "), 
										Array(105090900,0," С����ħ "), 
                                        //Array(921100300,0," ����֮�� "), 
                                        //Array(910000013,0," 糺���� "), 
										Array(551030100,0," ������ʨ "),
										Array(541020700,0," ǧ������ "),
										Array(702070400,0," ������ɮ "), 
										Array(240020400,0," �������� "),
										Array(240020100,0," ��ľ��ӥ "),
										Array(240040401,0," ������ "),
										Array(270030500,0," ��ȴ�׿� "),
										Array(270020500,0," �������� "),
										//Array(270010500,0," ׷���� "),
										Array(230040410,0," �������� "),
										Array(220080000,0," ʱ������ "), 
                                        //Array(801030000,0,"�ڵ�boss -     �ϰ�-2h"),
                                        //Array(800020130,0," ����칷 "), 
                                        //Array(801010000,0,"�ֵ�boss   -  ��ǿ���� -4h"), 
                                        //Array(800020300,0,"Ĺ��boss   -  ����   -4h"),  
										Array(211042400,0," �������� "), 
										//Array(211042400,0,"�������   -  ����"), 
										//Array(280030000,0,"�����ط� - �����Ժ��ٽ�����Ȼ�ٻ���������"), 
										Array(240040700,0," �������� "),
										Array(270050000,0," �ƻ�Ʒ�� ")
	
	//Array(910000018, 0, "��룬ϣ��˹��ħŮ �ռ� BOSS��ս")
);


function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendOk("#b�õ�,�´��ټ�.");
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("#b�õ�,�´��ټ�.");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        //------------------------------------------------------------------------

        if (status == 0) {

            var selStr = "#d������������������ѡ�����Ŀ�ĵذ�.#k#b";
            for (var i = 0; i < bossmaps.length; i++) {
                selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
            }
            cm.sendSimple(selStr);


        } else if (status == 1) {
            cm.sendYesNo("��ȷ��Ҫȥ " + bossmaps[selection][2] + "?");
            chosenMap = selection;

        } else if (status == 2) {
            if (cm.getMeso() >= bossmaps[chosenMap][1]) {
                cm.warp(bossmaps[chosenMap][0], 0);
                cm.gainMeso(-bossmaps[chosenMap][1]);
            } else {
                cm.sendOk("��û���㹻�Ľ��Ŷ!");
            }
            cm.dispose();


            //------------------------------------------------------------------------

        }
    }
}

