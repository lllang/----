/*
ѩ��ð�յ���ʾ�ű�

VIP������ʾ�ű�(����������ҵ)

by ��

*/


var status = 0;
//����������������������ΪVIP��ͼ����,�������Ҫ���õ�ͼID
var vip1map = 209000000;
var vip2map = 749020920;
var vip3map = 749020910;
var vip4map = 920010000;


//����������������������Ϊ���ʣ���ң�����,�������Ҫ��������;
var GZ_Player_money = 2000000;
var GZ_V1_money = 50000000;
var GZ_V2_money = 100000000;
var GZ_V3_money = 200000000;
var GZ_V4_money = 300000000;


//����������������������Ϊ���ʣ����ߣ�����,�������Ҫ��������; 
var GZ_Player_item = Array(1002140,0);   //���÷��� ֻ����� Aarray(����ID,����);
var GZ_V1_item = Array(1002140,0);       //����Ϊ0 ��ʾ����.
var GZ_V2_item = Array(1002140,0);
var GZ_V3_item = Array(1002140,0);
var GZ_V4_item = Array(1002140,0);


//����������������������Ϊ���ʣ�����ȯ������,�������Ҫ��������;

var GZ_Player_Nx = 800;
var GZ_V1_Nx = 1000;
var GZ_V2_Nx = 5000;
var GZ_V3_Nx = 10000;
var GZ_V4_Nx = 20000;

var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";

//////////////////////////////////////////////////////////
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if(!cm.getPlayer().isGM()){
	//cm.dispose();
	//return;
	}
	
	if (mode == -1) {
		cm.dispose();
	} else {
		if (status >= 0 && mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			var text="��ӭ���ٳ齱����.#b\r\n    \r\n";
			text+="#L100##v2022359#5000��ȯ-����װ������齱#l\r\n";
			text+="#L3##v2280006#10����Ҷ-����������齱#l\r\n";
			text+="#L101##v2340000#1000��ȯ-��������齱#l\r\n";
			//if(cm.getPlayer().isGM()){
				text+="#b#d#L1##r#v3010070#1000��ȯ#b-�齱����(������η���)#l\r\n\r\n";
			//}
			cm.sendSimple(text);
			//\r\n#L0##r#v2022359#2000��ȯ#b�齱����(����������Ʒ)#v2022369##l   \r\n\r\n   #b#d#L1##r#v3010070#1000��ȯ#b�齱����(������η���)#v1402014##l       \r\n\r\n           #b#d#L4##r#v4170011#5�׵�#b�齱һ��#v4170011##l  \r\n\r\n           #b#d#L7##r#v4170005#5�Ƶ�#b�齱һ��#v4170005##l  \r\n\r\n           #b#d#L8##r#v4170016#5�ʵ�#b�齱һ��#v4170016##l  \r\n\r\n           #b#d#L3##r10��ֵ��#b�齱����(������)#l  \r\n\r\n           ");				
		}else if (status == 1) {
			var viplevel = cm.getPlayer().getVip;
			if(selection == 100){
				cm.openNpc(9310024,8);
			}
			else if(selection==101){
				cm.openNpc(9310024,31);
			}
			else if(selection == 0){
				cm.openNpc(9310024, 1);
			}else if(selection == 1){
				cm.openNpc(9310024, 2);
			}else if (selection == 2){
				cm.openNpc(9310024, 3);
			}else if (selection == 3){
				cm.openNpc(9310024, 4);
			}else if (selection == 4){
				cm.openNpc(9310024, 5);
			}else if (selection == 5){
				cm.openNpc(9310024, 6);
			}else if (selection == 6){
				cm.openNpc(9310024, 7);
			}else if (selection == 7){
				cm.openNpc(9310024, 8);
			}else if (selection == 8){
				cm.openNpc(9310024, 9);
			}else if (selection == 9){
                                cm.openNpc(9330042, 0);

				if(cm.getBossLog("qqzmxd_GZ")< 1){
					var vipstr = "��ͨ���";
					var sf_money = 0;
					var sf_item = 0;
					var sf_Nx = 0;
					var noticeType = 2;
					var quantity;
					if(viplevel <= 0){
						sf_money = GZ_Player_money;
						sf_item = GZ_Player_item[0];
						quantity = GZ_Player_item[1];
						sf_Nx = GZ_Player_Nx;
						vipstr = "��ͨ���"
						var noticeType = 2;
					}else if(viplevel == 1){
						sf_money = GZ_V1_money;
						sf_item = GZ_V1_item[0];
						quantity = GZ_V1_item[1];
						sf_Nx = GZ_V1_Nx;	
						vipstr = "��һ��VIP��";
						var noticeType = 2;
					}else if(viplevel == 2){
						sf_money = GZ_V2_money;
						sf_item = GZ_V2_item[0];
						quantity = GZ_V2_item[1];
						sf_Nx = GZ_V2_Nx;
						vipstr = "������VIP���";
						var noticeType = 3;
					}else if(viplevel == 3){
						sf_money = GZ_V3_money;
						sf_item = GZ_V3_item[0];
						quantity = GZ_V3_item[1];
						sf_Nx = GZ_V3_Nx;
						vipstr = "��������VIP����";
						var noticeType = 11;

					}else if(viplevel >= 4){
						sf_money = GZ_V4_money;
						sf_item = GZ_V4_item[0];
						quantity = GZ_V4_item[1];
						sf_Nx = GZ_V4_Nx;
						vipstr = "���������VIP�����";	
						var noticeType = 12;						
					}
					if((cm.getMeso()+ sf_money) < 2147483647){
						cm.gainMeso(sf_money);			
						cm.getChar().modifyCSPoints(1,sf_Nx);
						cm.getChar().UpdateCash();   //������ʾ����״̬
						if (quantity > 0){
							cm.gainItem(sf_item,quantity);
						}
						cm.setBossLog("qqzmxd_GZ");
						cm.sendOk("���ѳɹ���ȡ��#rVIP"+ cm.getPlayer().getVip +"#k�Ĺ���#r" + sf_money + "#k��ҡ�#r" + sf_Nx + "#k�����ȯ");
						cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.serverNotice(noticeType,cm.getC().getChannel(),"���ʷ���Ա" + " : " + "��ϲ " + vipstr + " " + cm.getPlayer().getName() +" ��ȡ������Ĺ���"  + sf_money + "��ҡ�" + sf_Nx + "�����ȯ",true).getBytes());
						cm.dispose();
					}else{
						cm.sendOk("���������ϵ�Ǯ����,�Ѿ�װ���½���Ĺ�����,������к�������ȡ�ɣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("����Ϊ24Сʱ����һ��,�������Ѿ���ȡ��������,����������!");
					cm.dispose();
				}
			}										
		}
	}
}

