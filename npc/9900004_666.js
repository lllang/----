
/*
This file is part of the OdinMS Maple Story Server
Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
Matthias Butz <matze@odinms.de>
Jan Christian Meyer <vimes@odinms.de>
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License version 3
as published by the Free Software Foundation. You may not use, modify
or distribute this program under any other version of the
GNU Affero General Public License.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.
You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.
*/
/* Straw Hat Snowman
Happyville Tree NPC by Mercury of Mercury MapleStory
*/
var 一 = "#fUI/GuildMark.img/Mark/Letter/00005027/15#";
var 二 = "#fUI/GuildMark.img/Mark/Letter/00005028/15#";
var 三 = "#fUI/GuildMark.img/Mark/Letter/00005029/15#";
var 四 = "#fUI/GuildMark.img/Mark/Letter/00005030/15#";
var 五 = "#fUI/GuildMark.img/Mark/Letter/00005031/15#";
var 六 = "#fUI/GuildMark.img/Mark/Letter/00005032/15#";
var 七 = "#fUI/GuildMark.img/Mark/Letter/00005033/15#";
var 零 = "#fUI/GuildMark.img/Mark/Letter/00005026/15#";
var 九 = "#fUI/GuildMark.img/Mark/Letter/00005035/15#";
var 七 = "#fUI/GuildMark.img/Mark/Letter/00005033/15#";
var 零 = "#fUI/GuildMark.img/Mark/Letter/00005026/15#";

function start() {  
cm.sendSimple ("★★★★★★★★自由冒险岛房屋租赁★★★★★★★★\r\n        ★★★★★★★★★★★★★★★★★\r\n            ★★★★★★★★★★★★★\r\n      #b\r\n#L1#"+零+""+零+""+二+"【#n私人小屋】#l#k #L100001##b-小 屋 信 息-#k\r\n#L2#"+零+""+零+""+三+"#b#n【私人小屋】#l#k #L100002##b-小 屋 信 息-#k\r\n#L3#"+零+""+零+""+四+"#b#n【私人小屋】#l#k #L100003##b-小 屋 信 息-#k\r\n#L4#"+零+""+零+""+五+"#b#n【私人小屋】#l#k #L100004##b-小 屋 信 息-#k\r\n");  
}
function action(mode, type, selection) {
cm.dispose();
if (selection == 1){
 if (cm.getName() == "七宝" ){
cm.warp(209000001,0);
} else {
cm.sendOk("抱歉，这个私人小屋不属于你。");
cm.dispose();}
}

if (selection == 2){
 if (cm.getName() == "未出租" ){
cm.warp(209000002,0);
} else {
cm.sendOk("抱歉，这个私人小屋不属于你。");
cm.dispose();}
}

if (selection == 3){
 if (cm.getName() == "未出租" ){
cm.warp(209000003,0);
} else {
cm.sendOk("抱歉，这个私人小屋不属于你。");
cm.dispose();}
}

if (selection == 4){
 if (cm.getName() == "未出租" ){
cm.warp(209000004,0);
} else {
cm.sendOk("抱歉，这个私人小屋不属于你。");
cm.dispose();}



} else if (selection == 30) {
cm.warp (209000004, 0);
} else if (selection == 40) {
cm.warp (209000005, 0);
} else if (selection == 5) {
cm.warp (209000006, 0);
} else if (selection == 6) {
cm.warp (209000007, 0);
} else if (selection == 7) {
cm.warp (209000008, 0);
} else if (selection == 8) {
cm.warp (209000009, 0);
} else if (selection == 9) {
cm.warp (209000010, 0);
} else if (selection == 10) {
cm.warp (209000011, 0);
} else if (selection == 11) {
cm.warp (209000012, 0);
} else if (selection == 12) {
cm.warp (209000013, 0);
} else if (selection == 13) {
cm.warp (209000014, 0);
} else if (selection == 14) {
cm.warp (209000015, 0);
} else if (selection == 100001) {
cm.openNpc(9900004,100001);
}else if (selection == 100002) {
cm.openNpc(9900004,100002);
}else if (selection == 100003) {
cm.openNpc(9900004,100003);
}else if (selection == 100004) {
cm.openNpc(9900004,100004);
}


}