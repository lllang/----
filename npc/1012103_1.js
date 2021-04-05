load("nashorn:mozilla_compat.js");
importPackage(Packages.java.util);
importPackage(Packages.client);
importPackage(Packages.server);
var status = 0;
var beauty = 0;
var hairprice = 1000000;
var haircolorprice = 1000000;
var mhair = [33180,33240,33250,36440,36450,36490,36510,36520,36580,36590,36600,36620,36630,36640,36650,36670,36680,36690,36700,36710,36720,36730,36750,36810,36820,36830,36840,36850,36860,36880,36890,36910,36920,36930,36940,36950,36990,33260,33270,33280,33290,33300,33310,33320,33330,33340,33360,33370,33380,33390,33400,33410,33430,33440,33460,33470,33480,33500,33520,33540,33550,33580,33600,33630,33640,33660,33810,33930,33940,33950,33960,35180,35200,35210,35220,35230,35240,35250,35260,35270,35280,35290,35300,35330,35340,35350,35360,35420,35430,35440,35450,35460,35470,35490,35510,35520,35560,35600,35620,35630,35650,35660,35680,35690,35700,35720,35730,35750,35760,35770,35790,35800,35950,35960,36070,36080,36130,36140,36180,36280,36310,36330,36340,36350,36360,36380,36390,36410];
var fhair = [37510,41660,37520,37530,37540,37560,37580,37590,37610,37620,37630,37640,37650,37670,37680,37690,37700,37710,37720,37730,37740,37750,37760,37770,37780,37790,37800,37810,37820,37830,37840,37850,37860,37880,37900,37910,37920,37930,37940,37950,37960,37970,37980,37990,38000,38010,38020,38030,38040,38050,38060,38070,38080,38090,38100,38110,38120,38130,38150,38160,38220,38240,38250,38260,38270,38280,38290,38300,38310,38320,38330,38340,38350,38360,38370,38380,38390,38400,38410,38420,38430,38440,38450,38460,38470,38480,38490,38500,38520,38530,38540,38560,38570,38580,38590,38600,38610,38620,38630,38640,38650,38660,38670,38680,38690,38700,38710,38730,38740,38750,38760,38770,38790,38800,38810,38840,38850,38860,38880,38890,38900,38910,38930,38940,34870,38150];
var hairnew = Array();

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode < 1) {
        cm.dispose();
    } else {
        status++;
        if (status == 0) 
            cm.sendSimple("您好，我是这间美发店的老板. 如果你有 #b#t5150038##k 或者有 #b#t5150038##k 请允许我把你的头发护理。请选择一个你想要的.\r\n#L1#使用 #i5150038##t5150038##l\r\n");//#L2#使用 #i5150038##t5150038##l
        else if (status == 1) {
            if (selection == 0) {
                beauty = 0;
                cm.sendSimple("Which coupon would you like to buy?\r\n#L0#Haircut for " + hairprice + " mesos: #i5150038##t5150038##l\r\n#L1#Dye your hair for " + haircolorprice + " mesos: #i5150038##t5150038##l");
            } else if (selection == 1) {
                beauty = 1;
                hairnew = Array();
                if (cm.getPlayer().getGender() == 0)
                    for(var i = 0; i < mhair.length; i++)
                        hairnew.push(mhair[i] + parseInt(cm.getPlayer().getHair()% 10));
                if (cm.getPlayer().getGender() == 1)
                    for(var i = 0; i < fhair.length; i++)
                        hairnew.push(fhair[i] + parseInt(cm.getPlayer().getHair() % 10));
                cm.sendStyle("选择一个想要的.", 5150038, hairnew);
            } else if (selection == 2) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getPlayer().getHair()/10)*10;
                for(var i = 0; i < 8; i++)
                    haircolor.push(current + i);
                cm.sendStyle("选择一个想要的", 5150038, haircolor);
            }
        } else if (status == 2){
            cm.dispose();
            if (beauty == 1){
                if (cm.haveItem(5150038)){
                    cm.gainItem(5150038, -1);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("享受!");
                } else
                    cm.sendOk("您貌似没有#b#t5150038##k..");
            }
            if (beauty == 2){
                if (cm.haveItem(5150038)){
                    cm.gainItem(5150038, -1);
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("享受!");
                } else
                    cm.sendOk("您貌似没有#b#t5150038##k..");
            }
            if (beauty == 0){
                if (selection == 0 && cm.getMeso() >= hairprice) {
                    cm.gainMeso(-hairprice);
                    cm.gainItem(5150038, 1);
                    cm.sendOk("享受!");
                } else if (selection == 1 && cm.getMeso() >= haircolorprice) {
                    cm.gainMeso(-haircolorprice);
                    cm.gainItem(5150038, 1);
                    cm.sendOk("享受!");
                } else
                    cm.sendOk("您没有足够的枫币购买!");
            }
        }
    }
}
