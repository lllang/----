var ��ɫ˫��ͷ = "#fUI/UIWindow.img/Quest/icon9/0#";
var ��ɫ˫��ͷ = "#fUI/UIWindow.img/Quest/icon8/0#";
var ѡ�����ͼ�� = "#fUI/UIWindow.img/QuestIcon/3/0#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var Ǧ��ͼ�� = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var ������ = "#fUI/StatusBar/BtClaim/normal/0#";
var H��ĸ = "#fUI/CashShop/CSEffect/effect/1#";
var ���ͼ�� = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var ������� = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";

//------------------- �Զ���ר�� ------------------
var �һ����� = 500;
var �������� = true; // ���Ҫ�رո����������true��Ϊfalse
var ÿ���������1��� = 99;
var ÿ���������1 = Array(
    Array(4310080, 3),
	Array(2041332, 20),
	Array(2613008, 20),
	Array(2531000, 20),
	Array(2610003, 20),
	Array(2049600, 20),
	Array(2613001, 10)
);

var ÿ���������2��� = 199;
var ÿ���������2 = Array(
    Array(3992025, 1),
	Array(4442100, 1),
	Array(4442000, 1),
	Array(4000464, 1),
	Array(4310080, 6),
	Array(2041332, 40),
	Array(2613008, 40),
	Array(2531000, 40),
	Array(2610003, 40),
	Array(2049600, 40),
	Array(2048904, 20),
	Array(2613001, 20)
);

var ÿ���������3��� = 299;
var ÿ���������3 = Array(
    Array(3992025, 1),
	Array(4442100, 1),
	Array(4442000, 1),
	Array(4000464, 1),
	Array(4310080, 9),
	Array(2041332, 60),
	Array(2613008, 60),
	Array(2531000, 60),
	Array(2610003, 100),
	Array(2049600, 200),
	Array(2048904, 40),
	Array(2613001, 30)
);

var ÿ���������4��� = 399;
var ÿ���������4 = Array(
    Array(3992025, 2),
	Array(4442100, 2),
	Array(4442000, 2),
	Array(4000464, 2),
	Array(4310080, 12),
	Array(2041332, 80),
	Array(2613008, 80),
	Array(2531000, 80),
	Array(2610003, 150),
	Array(2049600, 300),
	Array(2048904, 60),
	Array(2613001, 50)
	
);

function start() {
    if (cm.getmoneyb() > 0) {
        cm.worldMessage(12, cm.getC().getChannel(), "����ȯ��ֵ��" + " : " + " [" + cm.getPlayer().getName() + "] ͨ��������ȡ�� " + cm.getmoneyb() * �һ����� + " ��ȯ������", true);
        cm.getPlayer().setBossLog("�ۼ���������", 1, cm.getmoneyb());
        cm.getPlayer().setBossLog("�����ۼ�����", 0, cm.getmoneyb());
        cm.gainNX(cm.getmoneyb() * �һ�����);
        cm.setmoneyb(-cm.getmoneyb());
        status = -1;
        action(1, 0, 0);
    } else {
        status = -1;
        action(1, 0, 0);
    }
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

        if (status == 0) {
            var text = "\t\t\t\t  " + Ǧ��ͼ�� + " [��ֵϵͳ] " + Ǧ��ͼ�� + "\r\n\r\n";
            text += "\t\t\t" + ������ + " #d�ܼ��ۼ�����: #r" + cm.getPlayer().getBossLog("�ۼ���������", 1) + " #dԪ " + ������ + "\r\n\r\n";
            //text += "\t\t\t" + ������ + " #d�����ۼ�����: #r" + cm.getPlayer().getBossLog("�����ۼ�����", 0) + " #dԪ " + ������ + "\r\n";
            text += "              #b#L0#�� �� �� �� �� ��#l\r\n\r\n";
            //text += "              #r#L1#ÿ �� �� ֵ �� ��#l\r\n\r\n";
            cm.sendSimple(text);
        } else if (status == 1) {

            if (selection == 0) {
                cm.openNpc(9900007, 1000);

            } else if (selection == 1) {
                var text = "";
                text += "\t\t\t  #e#r" + ������� + "" + cm.serverName() + "ÿ������" + ������� + "#k#n\r\n\r\n#r"

                text += "#r����˵����ÿ���ۼ������ſ�����ȡ��ÿ����ȡһ��#k\r\n"
				
				text += "#r����˵����ÿ�����һ���׳�����#k\r\n"

                text += "�����ۼ�������#r" + cm.getPlayer().getBossLog("�����ۼ�����", 0) + " #kԪ\r\n"

                text += "#d#L0#��ȡ�������� #r#e" + ÿ���������1��� + "R#d#n ���#l\r\n\r\n"
                text += " - ����ȡ���ߣ�"
                for (var i = 0; i < ÿ���������1.length; i++) {
                    text += "#d#v" + ÿ���������1[i][0] + "##k x #b" + ÿ���������1[i][1] + "#k";
                }
                text += "\r\n\r\n"

                text += "#d#L1#��ȡ�������� #r#e" + ÿ���������2��� + "R#d#n ���#l\r\n\r\n"
                text += " - ����ȡ���ߣ�"
                for (var i = 0; i < ÿ���������2.length; i++) {
                    text += "#d#v" + ÿ���������2[i][0] + "##k x #b" + ÿ���������2[i][1] + "#k";
                }
				
				text += "\r\n\r\n"

                text += "#d#L2#��ȡ�������� #r#e" + ÿ���������3��� + "R#d#n ���#l\r\n\r\n"
                text += " - ����ȡ���ߣ�"
                for (var i = 0; i < ÿ���������3.length; i++) {
                    text += "#d#v" + ÿ���������3[i][0] + "##k x #b" + ÿ���������3[i][1] + "#k";
                }
				
				text += "\r\n\r\n"

                text += "#d#L3#��ȡ�������� #r#e" + ÿ���������4��� + "R#d#n ���#l\r\n\r\n"
                text += " - ����ȡ���ߣ�"
                for (var i = 0; i < ÿ���������4.length; i++) {
                    text += "#d#v" + ÿ���������4[i][0] + "##k x #b" + ÿ���������4[i][1] + "#k";
                }

                cm.sendSimple(text);
            }

        } else if (status == 2) {
            if (selection == 0) {
                if (cm.getPlayer().getBossLog("�����ۼ�����", 0) < ÿ���������1���) {
                    cm.sendOk("�����ۼ��������㣬�޷���ȡ��");
                    cm.dispose();
                } else if (cm.getBossLog("ÿ���������1") > 0) {
                    cm.sendOk("�������������ȡ��������������");
                    cm.dispose();
                } else {
                    cm.setBossLog("ÿ���������1");
                    for (var i = 0; i < ÿ���������1.length; i++) {
                        cm.gainItem(ÿ���������1[i][0], ÿ���������1[i][1]);
                    }
                    cm.playerMessage(5, "��ϲ����ȡ�˽��յ� " + ÿ���������1��� + "R �������");
                    cm.worldMessage(12, cm.getC().getChannel(), "��ÿ�����������" + " : " + " [" + cm.getPlayer().getName() + "] ��ȡ��ÿ������ " + ÿ���������1��� + "R �ײͣ�", true);
                    cm.sendOk("��ϲ����ȡ�ɹ�~!");
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (cm.getPlayer().getBossLog("�����ۼ�����", 0) < ÿ���������2���) {
                    cm.sendOk("�����ۼ��������㣬�޷���ȡ��");
                    cm.dispose();
                } else if (cm.getBossLog("ÿ���������2") > 0) {
                    cm.sendOk("�������������ȡ��������������");
                    cm.dispose();
                } else {
                    cm.setBossLog("ÿ���������2");
                    for (var i = 0; i < ÿ���������2.length; i++) {
                        cm.gainItem(ÿ���������2[i][0], ÿ���������2[i][1]);
                    }
                    cm.playerMessage(5, "��ϲ����ȡ�˽��յ� " + ÿ���������2��� + "R �������");
                    cm.worldMessage(12, cm.getC().getChannel(), "��ÿ�����������" + " : " + " [" + cm.getPlayer().getName() + "] ��ȡ��ÿ������ " + ÿ���������2��� + "R �ײͣ�", true);
                    cm.sendOk("��ϲ����ȡ�ɹ�~!");
                    cm.dispose();
                }
				
			} else if (selection == 2) {
                if (cm.getPlayer().getBossLog("�����ۼ�����", 0) < ÿ���������2���) {
                    cm.sendOk("�����ۼ��������㣬�޷���ȡ��");
                    cm.dispose();
                } else if (cm.getBossLog("ÿ���������3") > 0) {
                    cm.sendOk("�������������ȡ��������������");
                    cm.dispose();
                } else {
                    cm.setBossLog("ÿ���������3");
                    for (var i = 0; i < ÿ���������3.length; i++) {
                        cm.gainItem(ÿ���������3[i][0], ÿ���������3[i][1]);
                    }
					if (�������� == true ) {
						cm.gainItem(5211060,1,10,true);
						cm.playerMessage(5, "��ϲ����ȡ�˽��յ� " + ÿ���������3��� + "R �������");
						cm.worldMessage(12, cm.getC().getChannel(), "��ÿ�����������" + " : " + " [" + cm.getPlayer().getName() + "] ��ȡ��ÿ������ " + ÿ���������3��� + "R �ײͣ�", true);
						cm.sendOk("��ϲ����ȡ�ɹ�~!");
						cm.dispose();
					} else {
                    cm.playerMessage(5, "��ϲ����ȡ�˽��յ� " + ÿ���������3��� + "R �������");
                    cm.worldMessage(12, cm.getC().getChannel(), "��ÿ�����������" + " : " + " [" + cm.getPlayer().getName() + "] ��ȡ��ÿ������ " + ÿ���������3��� + "R �ײͣ�", true);
                    cm.sendOk("��ϲ����ȡ�ɹ�~!");
                    cm.dispose();
					}
				}
			} else if (selection == 3) {
                if (cm.getPlayer().getBossLog("�����ۼ�����", 0) < ÿ���������4���) {
                    cm.sendOk("�����ۼ��������㣬�޷���ȡ��");
                    cm.dispose();
                } else if (cm.getBossLog("ÿ���������4") > 0) {
                    cm.sendOk("�������������ȡ��������������");
                    cm.dispose();
                } else {
                    cm.setBossLog("ÿ���������4");
                    for (var i = 0; i < ÿ���������4.length; i++) {
                        cm.gainItem(ÿ���������4[i][0], ÿ���������4[i][1]);
                    }
                    cm.playerMessage(5, "��ϲ����ȡ�˽��յ� " + ÿ���������4��� + "R �������");
                    cm.worldMessage(12, cm.getC().getChannel(), "��ÿ�����������" + " : " + " [" + cm.getPlayer().getName() + "] ��ȡ��ÿ������ " + ÿ���������4��� + "R �ײͣ�", true);
                    cm.sendOk("��ϲ����ȡ�ɹ�~!");
                    cm.dispose();
                }
            }
        }
    }
}

