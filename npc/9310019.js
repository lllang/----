/*
 *
 *  �˽ű������������������
 * ������ҵ�ű����Ⱥ:1049548
 *
 */


////importPackage(net.sf.cherry.client);

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
    Array(100000200, 0, "�����"),
    Array(103000000, 0, "��������"),
    Array(221024500, 0, "��߸���"),
    Array(200080101, 0, "��ո���"),
    //Array(300030100, 0, "���︱��"),
    Array(251010404,0,"��������")
    //Array(261000011,0,"����Ů����")
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
