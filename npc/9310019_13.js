var status = 0;
var ���� = 4000463;
var ��� = 500000000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("�õ�, ���������ȷ����Ҫ #b����#k.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("����ȵ��ﵽ��250�����Ϳ�������������з���Ŷ��\r\nת����ȼ����½�����220����������ֵ��ְҵ���䡣��Ҫ2E���"); 
        }else if (status == 1) {
        if(cm.getChar().getLevel() <= 249){
        cm.sendOk("�ܱ�Ǹ������Ҫ250�����ſ���Ͷ̥ת��.");
        cm.dispose();
        } else if(cm.getPlayer().getBossLog("ת��",1) < 100){
            cm.sendOk("����100��ת���޷�ʹ��");
            cm.dispose();
        } else if(cm.getPlayer().getBossLog("����",1) > 998){
            cm.sendOk("�ﵽ��ߴ���");
            cm.dispose();
        } else if(cm.getChar().getMeso() <= 200000000){
            cm.sendOk("��Ҳ���");
            cm.dispose();
        }else{
        cm.sendOk("#b�����÷ǳ���#k, ������ȷ��Ҫ#e����#n.��");
        }
        }else if (status == 2) {
        cm.getChar().setLevel(221);
        cm.gainMeso(-200000000);
		cm.getPlayer().setBossLog("����",1,1);
		cm.getPlayer().fakeRelog();
        cm.sendNext("�����ɹ���");
        cm.dispose();
        }            
    }
 }
 