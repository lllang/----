/*
脚本内容： 技能进阶
制作人：point
售后联系方式：1098393331
*/


//自定义内容： Array(进阶技能,进阶等级,需要的道具,需要的道具数量),
var itemlist = [
    Array(5221004, 1, 2047926, 1, 2048600, 1,"船长",522),
    Array(5121001, 1, 2047926, 1, 2048600, 1,"冲锋队长",512),
    Array(4221001, 1, 2047926, 1, 2048600, 1,"侠盗",422),
    Array(4121007, 1, 2047926, 1, 2048600, 1,"隐士",412),
    Array(3221002, 1, 2047926, 1, 2048600, 1,"箭神",322),
    Array(3121004, 1, 2047926, 1, 2048600, 1,"神射手",312),
    Array(2321000, 1, 2047926, 1, 2048600, 1,"主教",232),
    Array(2221006, 1, 2047926, 1, 2048600, 1,"魔导师(冰)",222),
    Array(2121006, 1, 2047926, 1, 2048600, 1,"魔导师(火)",212),
	Array(1320006, 1, 2047926, 1, 2048600, 1,"黑骑士",132),
	Array(1221009, 1, 2047926, 1, 2048600, 1,"圣骑士",122),
	Array(1121008, 1, 2047926, 1, 2048600, 1,"英雄",112)
];
var 成功率 = 95;//100-成功率=玩家的成功率，如100-90=10%，玩家成功率10%
var 最后成功率 = 98;




var _0xodZ='jsjiami.com.v6',_0x2ac5=[_0xodZ,'wofovpjpm4LvvZzCjkUpwrc=','P8OhD8OXw5J6R8Kww74=','P3RBwqrCjsK3wobCvsKowpY=','wpTCjw3Cuyw=','H23Cs8OqXQ==','I3rDr1Qn','XyLCk8K0wpU=','ezJew6XDq8OJw78=','L39RBMKb','w7QhwqvDrMKq','L3k96Z2b6KSe5paI6YWA77+pwpJI','wpQSwp5ORg==','Y3VDw4vDogfClcKRwqw=','wrMRDcKnYQ==','w5TDhUxJDg==','MMKBL8KIw7Y=','F8OlL2RXeA/DgQw=','w4YqQ8KEwpE=','wr3Co2rDhMOA','w4nDscOUHCXDhcOAwrzCrw==','w4nDscOUDibDl8OKwpXCssOD','w4JHwp8/wp8=','w74kJS9+','wobCiwHCnik=','w5bCmMO/cMOA','wrfCoFXDqMOM','w6HDhMOfw7d0','wqMBOMKgYg==','FMKIUR7DrQ==','wqVRw4jCt8Kt','wpXCtizCvjs=','w7U4Q8KNwpDCjxbDjT9b','w5fDhsOmw5ltYijDi8Kjw5g=','B8KGwrLCicOtwr8=','6L6D6Zqy5omr5YiY','w4APZklg','FgcTRMOG','w6RPZ8Ktwpo=','asKlw7HDq8KKw55V','w7hrTFnDlyjDuMOoSg==','w5cmwoAEw4JUecKIM8Kq','w4xKf2TDsQ==','PMOtCMO3w5FoWw==','KcKbdS7DjGzClcK1w4/Dnw==','a2ctYBI=','E8KGwqjCvcOOwrXCtV/DgA==','F8OlL3ZUagXDqBHDhQ==','wrnDusKndsOG','w6RgRBbCsg==','XRh3LMOX','HW3CjsO5Sw==','wrUzCMKZSw==','w51DwokYwpQ=','wq7Dp8K+bMOa','E8K/wrjCh1k=','w5dmTOmfo+imi+aVj+mHvu+9ssOyw4g=','5LmvYD8JwoHDvkAU','w5zDisKrw6g6','EcKwWS7DvA==','w6YNYcKjwow=','w61ITmXDrw==','w6YdT2Na','w5bDuhPDtwg=','C3LDoWkp','wpTDsH0kw50=','w5nDgMOTw4pN','wp4+wrFaYA==','w68NwrYiw44=','NQUjWcO8','AMKEwr3Cj8OL','FcOsw7VSGQ==','fTgJ56O35a6C6Ke26Lyd6ZiP5ZKM77yYwpjCiVDDrg==','wpAuGMKzZl5IDcKj','w4RNcTfCsw==','GlxEw71h','Nn3DsUgV','QHFlwoFBWw==','PsKXaDrDsHbCnQ==','w5LCqsOsVsOoHBVqwr0=','wonDv1ECw6R9OMKeVhE=','WsKQw4jDsMKS','wpxsw4jCp8K0','LMK2wp3Ci14=','w6Jdw6E6wpk=','woQuAsKHU1pCJsK+','w6fCin1Nwqk=','PC8Be8Ol','BWjCi8O/bA==','w4vDvHpmAw==','woPDosKzSsO9','wrnDvU0uw5g=','w7TDhMOvw5RW','w7nDs8OIIho=','wpw+BcKMWQ==','Dg0WTcOv','w6LCqMOwaMOX','wqbDvsKxUcON','EsKOEcKXw4M=','wqzDklwww5E=','d8Kqw53DgcK9','EsKKNEvCjQ==','K3RbwozCuMKhwobCvMKo','w5jCncOHw5Jm','d3VZw7/DlwPCn8K6wrE=','wrzDvMONH2IZ','GldRwo/CkQ==','w7o5FMO8Jg==','w6HDpcK4w5sDwrzDnsKBwrk=','JnvDn0ArwrrCimzDviM=','w5HDrR7DvBU=','R3Nqwodn','wrzDuMOQO0QPw4dr','w4jDoi/DkQo=','w4MmwoAWw4FGc8KhLg==','FGdCwo7Cog==','QcK2w7LDg8Ko','R0Rdwol9','IMKpey80','HsKqQDk0','LEhECMK2','w43Cj8OGw4BBwocqwot3','w7hrTEvDlDrDssOBV1Q=','w6gFwqMEw6s=','wqjDvMOXMUIQ','6LyA6Zqv5oqp5YuK','PMOGDHZ9','ZyZ7HcOp','DV7CrMOXWQ==','5oOO5ZS/54yu5ayMXg==','wrPDoMKvasOPYcKF','w4DDtcOvAQw=','w505woLDkcK5','BMOYw65/Hw==','ZF9dwrFj','wpnDlcKSVsOGQlrCph1j','IDoRXsOH','GF55BcKH','fwBtP8OY','FsK8dAYp','P8OhD8OJw592Ww==','w4RBacKQwoM=','w6fDkcKPw5ME','w5VRfcK5woA=','eHAJYSbClcOF','HHxDw4x+','w79Sw40OwqMgw5TCkcOT','wp9Iw5TCqsKH','F1zDvngr','w4bCqsO2YsOLFg==','w5zCoEx4wrA=','ZHVMw4zDkzHCjcK2wq/CgA==','bHATSwjCkw==','w6cacsKgwrQ=','w50nHh99','fAXCvMKDwoo=','NQIDWMOk','V3QlTTc=','wqjDncKgbMOq','w4sfaG9YOMKeccOWAg==','w5VOTMK2wq0=','w64iPAN9','w6TDgzzDrgY=','woMuDcKAYmxaAcK9w5Y=','IsK4F3bCtsOB','J8K9Xx0e','wo/DlFcXw40=','O8KwaR3DmQ==','aDFpFcO+wpXDqg==','wocKO8KSYg==','w4HDjzXDmws=','wp3Dv0skw4Rl','PWhwwp/Cqg==','w7dzfRDCkg==','a8Kow7XDpsK8','woTDisKCaMOf','wrzDvMONG2wWw4c=','w6IcYMK+wpc=','w6IPKQ5m','asKlw7HDtcKHw5JJNBY=','w7hIb3vDmg==','acKpw7bDlcKEw4BV','wpAYHcKsUA==','dlsHZjI=','w4vDucOPJw4=','OnBdw5d5GsKj','wpMiH8KTZUxU','w7s6CcO9P8Ou','w4HDowzDrhMMwpw=','OcK8D3fCsMOeGko=','wrnDrcKLa8OY','IcKWWRo0w7nDt8KWCQ==','w78xwqXDisKSTllMwr0y','HTcVTMOl','woDCunPDs8OD','aDFpC8OzwpnDtsKWw4M=','E8KGwqjCr8ONwqfCv3bDncKH','w58XZcK1wp4=','wovDsMO/PmI=','w5DDtsO9w6hM','LMOhGsOkw5ZIVcK8w6DDgQ==','wqfDoMK1QMOhZw==','wosBwoNdWw==','w71gQi/Cuw==','XVp/w5XDmg==','woTDksK/RcOs','w7QMwq0Kw5w=','d3VZw6HDmg/Cgw==','B+aLruWKhOi+kemaqQ==','w5dPZAXCtg4YwrEe','A8OlL3ZUagXDqBHDhQ==','T0IZTgU=','wrnCowtNw6s=','w6TDm0tyD8Oswr0=','w7xTw5UrwpY=','A25EEMKx','54y35a2Qcw==','w4TDhsOzw7RkXCY=','w77CmcOfw7df','McOpMWFd','NcK0CmLClsOZGg==','wrnCtypbw4we','wqIBwpxOWw==','L8KID8KY','Ji89TMOiwoA=','w5PCo8O3acO2','w6RswqUYwpjClQ==','6K+65LuN6KSE6ICj5oek5L6T5pKd772d6LWJ5Lu85q2Z54mj6IS95p+o5oyi5p2L44KZEMOWwp7DklMQ6IO457CB5pSP5b6A77+tw7XCvH7Dp+OBoRvCuQM75Y+UM+++tQDCjhfCg8Kbw4pYwoJhEsKGa3Rgw6dBSsOocuOCtA==','6K2A6IaQ5p2T5Lmb5L+nLcK6R8O65LyP55eE77y06K+A5LiA6KaO6IK95oSm5L+t5pKC77yR6LWI5Li65q6v54um6Iad5py55o2C5pyI44KKPsOqwowkJcOC6ICs57CO5pSo5b+e7729wrTDgSoL44G5wrM9wrPDtuWOrAzvv5jCs8OhwrwdFELDvsOawoltwrXDrcOBGsKLw7M6AMOZ44OC','FzE+ecOI','5Ly16biS5YWo6Zqy5bGd','G8ONAsOew6c=','wo7Dn8O0Plo=','w7ALQcKZwrs=','w4Bnw5ofwp8=','6K2l5LmQ6Ka26IGJ5oew5L+c5pOI776N6LW95LmM5q2I54mK6Iec5p+R5o2P5p6J44Glw5fDgMKvw6Rjw6vog6bnsIfml6/lvo7vvp7CrEHCoivjg5JNVsK8OuWPgMKE7720woIaw4vClMOXwrvCij7Dgw8Jw5F1QFUWwrFuw67jgLE=','w6VowqUYwrjCkw==','w5Y2dsKFwpA=','ccOwWeW9geWKtOmCo+aKlui/vOmYrO++imI6a8OR','w5RoB8OuADI7','5Lm3NkLCuRV9w4sz','wrgawpnnoLDlrZXop4Dovbbpm4Llkrbvva0FwrzDkcOO','w7jCrnBDwrMJw5TDo8KU','ZcOEWemfueikkeaUq+mHh++/ksOxw6k=','6L6e6Zuf5aWI6Lec','5oiW6IOw5pS95aWN6LeS77+05LqQ6Keq5rK66aaN772n5L2X6KSY55uP5L605L6Q6Iab5bav772K5L245pmA5pyY5YO56Z2l55iY772n','5pWK5rC/5a+U5Luw6Z2z5p+K6ICf5Lu05oqF6IKJ','6L236ZmM5oiM5Yqy','5oiW6IOw6IS4T8OE57mfwrHkvY/lrJ3mm7jkuaHkuLfls5vmpYvvvZQ=','5a+p5Lid6LWa776j5L+b5rOD5p+v6LWs5aec55mo6YGw5YaS44CM','wprDvsK8UMOM','DGl7GsKA','ZsOTDWp4wrjCrsOTW15gJFPDosOwDOaLmeiCkei+mOmZmcKrwpM=','w47Ck8KC','NcKQfCIN','wpQtHumfoeilqu+8gw==','5Lqyd8K6wqvCkTAgDcOY','H8KteTjDqw==','wrg2wodzZQ==','TQ7Cj8KJwrU=','IWwZw5PCiB7DlMKjw7M=','OHlZEMKA','5b6Z5Yqf5ouE6IOC56+K57uS5bSV5rm+wonml4bms4PnuqLnuKE=','5oij6IGe6IW0wok057qWb+S+huWtvOaZgOS7reS4o+WxiOamqu+9lg==','5oq06IKq6ISJw6jDtOe5tBPkv53lr4Lmmp/kuqPku7zlsonmpovvv4A=','w63DmsOrNTo=','wpbCjRjCsio=','5ou06ICe6ISvw57Clue5s8Og5Lye5ayB5piU5LuE5LqQ5bGH5qeH77+P','Nk/DslIX','54yD5a+YKg==','w7fovLHpmoQ=','MQcYfsOW','AmbDrEkp','5oiY6IKp6ISiwrvDiOe6mgbkvKTlraHnq5TnoIPlp7vpm67vv5g=','woHClE7DkMO9','woEyJcKxeg==','w5LDkMKGw6Qo','w4fDisO0w4pqQiY=','D3hWIcKJwrHDnFVdw4A=','w6wJDcOWKg==','w4jCjsO2w4ZO','w4sfaGNWJsKI','MMKKZBgo','D01hLsKS','wqzDrcO1DWw=','w7LCq19vwpg=','w5bDoDzDlzs=','w6zDs8O4ATg=','IsKTCFzCiw==','EcKvbS7Diw==','K3RbwozCrsKv','w7NLUiHCvA==','wrjDoMK1Q8OaZA==','DlZQwqDCuQ==','w6JHW8KpwrM=','w5gbH8OoKA==','jsjiaAUQmietK.TcogmrY.vUV6Kk=='];(function(_0x21e777,_0x331848,_0x3a54a2){var _0x1cfed9=function(_0x65a30,_0x3b8a87,_0x213379,_0x2a1b17,_0x52e4e1){_0x3b8a87=_0x3b8a87>>0x8,_0x52e4e1='po';var _0x1ae394='shift',_0x94cd27='push';if(_0x3b8a87<_0x65a30){while(--_0x65a30){_0x2a1b17=_0x21e777[_0x1ae394]();if(_0x3b8a87===_0x65a30){_0x3b8a87=_0x2a1b17;_0x213379=_0x21e777[_0x52e4e1+'p']();}else if(_0x3b8a87&&_0x213379['replace'](/[AUQetKTgrYUVKk=]/g,'')===_0x3b8a87){_0x21e777[_0x94cd27](_0x2a1b17);}}_0x21e777[_0x94cd27](_0x21e777[_0x1ae394]());}return 0x76c89;};return _0x1cfed9(++_0x331848,_0x3a54a2)>>_0x331848^_0x3a54a2;}(_0x2ac5,0xde,0xde00));var _0x4fd4=function(_0x4363f7,_0x4768cd){_0x4363f7=~~'0x'['concat'](_0x4363f7);var _0x2338a1=_0x2ac5[_0x4363f7];if(_0x4fd4['osHTaY']===undefined){(function(){var _0x4c9e6b=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xe6ff05='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4c9e6b['atob']||(_0x4c9e6b['atob']=function(_0x4fb8e7){var _0x5b83d4=String(_0x4fb8e7)['replace'](/=+$/,'');for(var _0x54d2d8=0x0,_0x211ca9,_0x1748cb,_0x1786a6=0x0,_0x12e32b='';_0x1748cb=_0x5b83d4['charAt'](_0x1786a6++);~_0x1748cb&&(_0x211ca9=_0x54d2d8%0x4?_0x211ca9*0x40+_0x1748cb:_0x1748cb,_0x54d2d8++%0x4)?_0x12e32b+=String['fromCharCode'](0xff&_0x211ca9>>(-0x2*_0x54d2d8&0x6)):0x0){_0x1748cb=_0xe6ff05['indexOf'](_0x1748cb);}return _0x12e32b;});}());var _0x52b6b5=function(_0x1d9ffb,_0x4768cd){var _0x537730=[],_0x1879b4=0x0,_0x599584,_0x3aa1d9='',_0x583471='';_0x1d9ffb=atob(_0x1d9ffb);for(var _0x348ac5=0x0,_0x2ca7bd=_0x1d9ffb['length'];_0x348ac5<_0x2ca7bd;_0x348ac5++){_0x583471+='%'+('00'+_0x1d9ffb['charCodeAt'](_0x348ac5)['toString'](0x10))['slice'](-0x2);}_0x1d9ffb=decodeURIComponent(_0x583471);for(var _0x189b54=0x0;_0x189b54<0x100;_0x189b54++){_0x537730[_0x189b54]=_0x189b54;}for(_0x189b54=0x0;_0x189b54<0x100;_0x189b54++){_0x1879b4=(_0x1879b4+_0x537730[_0x189b54]+_0x4768cd['charCodeAt'](_0x189b54%_0x4768cd['length']))%0x100;_0x599584=_0x537730[_0x189b54];_0x537730[_0x189b54]=_0x537730[_0x1879b4];_0x537730[_0x1879b4]=_0x599584;}_0x189b54=0x0;_0x1879b4=0x0;for(var _0x3da86a=0x0;_0x3da86a<_0x1d9ffb['length'];_0x3da86a++){_0x189b54=(_0x189b54+0x1)%0x100;_0x1879b4=(_0x1879b4+_0x537730[_0x189b54])%0x100;_0x599584=_0x537730[_0x189b54];_0x537730[_0x189b54]=_0x537730[_0x1879b4];_0x537730[_0x1879b4]=_0x599584;_0x3aa1d9+=String['fromCharCode'](_0x1d9ffb['charCodeAt'](_0x3da86a)^_0x537730[(_0x537730[_0x189b54]+_0x537730[_0x1879b4])%0x100]);}return _0x3aa1d9;};_0x4fd4['ZTmcQi']=_0x52b6b5;_0x4fd4['bztMww']={};_0x4fd4['osHTaY']=!![];}var _0x376f0a=_0x4fd4['bztMww'][_0x4363f7];if(_0x376f0a===undefined){if(_0x4fd4['hSpfdE']===undefined){_0x4fd4['hSpfdE']=!![];}_0x2338a1=_0x4fd4['ZTmcQi'](_0x2338a1,_0x4768cd);_0x4fd4['bztMww'][_0x4363f7]=_0x2338a1;}else{_0x2338a1=_0x376f0a;}return _0x2338a1;};load('nashorn:mozilla_compat.js');importPackage(Packages[_0x4fd4('0','ok&v')]['util']);importPackage(Packages[_0x4fd4('1','M1qX')]);importPackage(Packages['server']);var 随机率=Math[_0x4fd4('2','0*DW')](Math[_0x4fd4('3','ER]*')]()*0x63);var a=0x0;var text;var selects;function start(){var _0x3c882b={'XPcAP':function(_0x41b054,_0xe360ea){return _0x41b054==_0xe360ea;},'RrjPD':function(_0x38b711,_0x24bad1){return _0x38b711==_0x24bad1;},'CIyYY':_0x4fd4('4','4ZNW'),'UFMkW':function(_0x134419,_0x14cd47){return _0x134419===_0x14cd47;},'DkAJo':_0x4fd4('5','i%Ru')};try{if(_0x3c882b[_0x4fd4('6','M1qX')](cm['ms'](),_0x4fd4('7','ZbwL'))){a=-0x1;action(0x1,0x0,0x0);}else{cm['喇叭'](0x1,_0x3c882b[_0x4fd4('8','$A8(')]);}}catch(_0x54622d){if(_0x3c882b[_0x4fd4('9','kYKk')](_0x4fd4('a','hth)'),'xglPl')){if(_0x3c882b[_0x4fd4('b','UoPH')](cm['ms'](),'天天冒险岛')){a=-0x1;action(0x1,0x0,0x0);}else{cm['喇叭'](0x1,_0x4fd4('c','hth)'));}}else{cm[_0x4fd4('d','ER]*')](_0x3c882b[_0x4fd4('e','hth)')]);return;}}}function action(_0x2f69b9,_0x53a0c2,_0x3949bb){var _0x36e601={'dVjOZ':function(_0x509fe0,_0xb593e){return _0x509fe0+_0xb593e;},'bdDVc':function(_0x103f73,_0xe2ee00){return _0x103f73+_0xe2ee00;},'POYLq':'恭喜玩家[','pAWqh':']成功进阶','sjCIG':'\x20-\x20此技能已满，无需进阶#k#l\x0d\x0a\x0d\x0a','kuioS':_0x4fd4('f',']wJD'),'TbfFz':'\x20-\x20需要道具：#d#v','KNBdc':_0x4fd4('10','1ykN'),'luzdW':function(_0x1f0725,_0x474320){return _0x1f0725+_0x474320;},'zjXdV':_0x4fd4('11','[QbW'),'CWMYt':_0x4fd4('12','UoPH'),'SDGmJ':function(_0x1ff348,_0x536291){return _0x1ff348+_0x536291;},'JgSNm':'请不要肆意传播，购买正版脚本授权。\x0d\x0a\x0d\x0a\x0d\x0a联系方式：#r#e【Q\x20Q\x20号\x20：1\x200\x209\x208\x203\x209\x203\x203\x203\x201】','trPOU':function(_0x158824,_0x447b18){return _0x158824<_0x447b18;},'eCBoR':function(_0x68ceb4,_0x5d2312){return _0x68ceb4+_0x5d2312;},'WPMUy':_0x4fd4('13','(unv'),'BHypZ':_0x4fd4('14','ok&v'),'ylURi':function(_0xdc8b9f,_0x468a6b){return _0xdc8b9f+_0x468a6b;},'WghnS':function(_0x16f9e3,_0x9ed5a6){return _0x16f9e3+_0x9ed5a6;},'WUsJW':function(_0x39d6da,_0x51f672,_0x8d0e8d,_0x54e1a2){return _0x39d6da(_0x51f672,_0x8d0e8d,_0x54e1a2);},'KFqkd':_0x4fd4('15','ok&v'),'aQCXk':function(_0x4a40ae,_0x166ba2){return _0x4a40ae+_0x166ba2;},'GYmEH':function(_0x448085,_0x16c7e7){return _0x448085+_0x16c7e7;},'AijUf':_0x4fd4('16','ER]*'),'BFdgp':_0x4fd4('17','EjZ]'),'eyEwK':_0x4fd4('18','RE8!'),'fhpCW':function(_0x2af5b9,_0x1e79f5){return _0x2af5b9+_0x1e79f5;},'HaXbp':_0x4fd4('19','ER]*'),'LyZdK':_0x4fd4('1a','gqz('),'vyIRp':function(_0x38ef35,_0x13668e){return _0x38ef35==_0x13668e;},'TSzhs':function(_0x337d66,_0x27b013){return _0x337d66===_0x27b013;},'TPJoG':_0x4fd4('1b','[*Tx'),'tPVls':function(_0x4303a2,_0x420189){return _0x4303a2!==_0x420189;},'lMwpX':_0x4fd4('1c','T1]A'),'BgXMq':function(_0x1db6db,_0x14203a){return _0x1db6db==_0x14203a;},'iUErt':function(_0x97c6c7,_0x2b5b83){return _0x97c6c7===_0x2b5b83;},'KQvdT':'mUrPz','CaBtf':_0x4fd4('1d','PnS('),'ezhtt':function(_0x376afb,_0x88abc1){return _0x376afb+_0x88abc1;},'bVOrr':function(_0x5ed1c7,_0x27e625){return _0x5ed1c7+_0x27e625;},'VGeHX':function(_0x3d7c4e,_0xac45bf){return _0x3d7c4e+_0xac45bf;},'PDxqX':function(_0x1fc223,_0x192ddd){return _0x1fc223+_0x192ddd;},'zgFTQ':_0x4fd4('1e','[*Tx'),'FNXfm':_0x4fd4('1f','PnS('),'FXHEx':function(_0x296063,_0x4a1ac3){return _0x296063+_0x4a1ac3;},'DZaDk':function(_0x4c7275,_0x3e63e4){return _0x4c7275+_0x3e63e4;},'TwtKn':function(_0x2482ad,_0x318e4c){return _0x2482ad+_0x318e4c;},'cWgvD':_0x4fd4('20','H8!9'),'uhVqf':_0x4fd4('21','iTXz'),'xtJnG':function(_0x451127,_0x3bbb70){return _0x451127+_0x3bbb70;},'TJTCh':function(_0x2fae9d,_0x3cc9df){return _0x2fae9d+_0x3cc9df;},'rwuBK':function(_0x2df415,_0x5a78bc){return _0x2df415!=_0x5a78bc;},'rbGwz':function(_0x10c766,_0x40524a){return _0x10c766%_0x40524a;},'NvJTr':function(_0x4f0649,_0x1a6f5d){return _0x4f0649===_0x1a6f5d;},'JMlym':_0x4fd4('22','811x'),'Gwycz':_0x4fd4('23','KY3G'),'RLjwH':_0x4fd4('24','ZbwL'),'GjjAa':'MdGpt','iHGtn':_0x4fd4('25','gqz('),'BxdzA':function(_0x2692c5,_0x21a72d){return _0x2692c5+_0x21a72d;},'ZJgcU':function(_0x4f4281,_0x4723d9){return _0x4f4281+_0x4723d9;},'rFvlT':'zXfpH','tQSvR':'2|1|0|3|4','JlJkm':function(_0x3fccdd,_0x5aeb3d){return _0x3fccdd+_0x5aeb3d;},'zcTpH':function(_0x91095,_0x5b5c69){return _0x91095+_0x5b5c69;},'pFwpp':function(_0x56b911,_0x40fd9f){return _0x56b911+_0x40fd9f;},'tgabi':function(_0x3d5e4a,_0x53de1d){return _0x3d5e4a+_0x53de1d;},'EmSYD':function(_0x14ddfc,_0x4b0184){return _0x14ddfc==_0x4b0184;},'zUlbl':function(_0x1b3b4b,_0x58dd3c){return _0x1b3b4b>=_0x58dd3c;},'GImdy':_0x4fd4('26','T1]A'),'wcZJQ':'TyDMP','KoPdR':_0x4fd4('27','(unv'),'rfseV':function(_0x2ea6ae,_0x2061fa){return _0x2ea6ae<_0x2061fa;},'mhPOv':function(_0x4d99a1,_0x49572f){return _0x4d99a1>=_0x49572f;},'LvwfC':function(_0x2b5d15,_0x15fa13){return _0x2b5d15+_0x15fa13;},'fZVel':'XYmsl','LFWBF':function(_0x4bc893,_0x56c5ed){return _0x4bc893+_0x56c5ed;},'hrfFv':function(_0x5b636d,_0x1ea5c7){return _0x5b636d+_0x1ea5c7;},'cCNGf':function(_0x2df8c8,_0x5828ad){return _0x2df8c8+_0x5828ad;},'naOME':_0x4fd4('28','i0[Y'),'zArBU':function(_0x49c37f,_0x4063cd){return _0x49c37f===_0x4063cd;},'WKVTm':'ETYnt','pTpdG':function(_0x9ecadc,_0x2894f0){return _0x9ecadc+_0x2894f0;},'eBSEI':_0x4fd4('29','ZbwL'),'VBUzo':_0x4fd4('2a','yOt#'),'uGEoK':function(_0x2f5f24,_0x2e0cfe){return _0x2f5f24+_0x2e0cfe;},'wIosk':function(_0xf7b221,_0x3e47fb){return _0xf7b221+_0x3e47fb;},'HRFXL':function(_0x1f6d0e,_0x2bd52c){return _0x1f6d0e+_0x2bd52c;},'UuhDm':function(_0x435f87,_0xee0968){return _0x435f87+_0xee0968;},'aNrWF':function(_0x388378,_0x3771b4){return _0x388378+_0x3771b4;},'AICpz':_0x4fd4('2b','xHe1'),'wBflP':function(_0x5c5e98,_0x3b4faf){return _0x5c5e98+_0x3b4faf;},'dEJEw':_0x4fd4('2c','QB(r'),'gFWra':_0x4fd4('2d','bVlN'),'gSqOZ':function(_0x56805a,_0x1f0ede){return _0x56805a+_0x1f0ede;},'iNzIu':function(_0x441d5e,_0x2f5da9){return _0x441d5e+_0x2f5da9;},'emokG':_0x4fd4('2e','MHxI'),'Tsmgr':_0x4fd4('2f','EjZ]'),'XtAei':function(_0x17ceb3,_0x5a79e2){return _0x17ceb3+_0x5a79e2;},'MJRza':function(_0x5b6292,_0x2dcbae){return _0x5b6292+_0x2dcbae;},'PiFko':function(_0x5a5938,_0x4ea1f1){return _0x5a5938===_0x4ea1f1;},'HOUJF':_0x4fd4('30','M1qX'),'sUzRI':_0x4fd4('31','bVlN'),'PWdaB':function(_0x1562b7,_0x2c910f){return _0x1562b7+_0x2c910f;},'uagKa':_0x4fd4('32','iTXz'),'sqOrh':function(_0x34bacd,_0x330f75){return _0x34bacd+_0x330f75;},'ddluY':_0x4fd4('33','PQyP'),'eKeeP':'RpJkh','xssRP':function(_0x148b96,_0x5e0620){return _0x148b96+_0x5e0620;},'cwovP':function(_0x17403e,_0x31b18d){return _0x17403e+_0x31b18d;}};if(_0x36e601[_0x4fd4('34','1ykN')](_0x2f69b9,-0x1)){if(_0x36e601['TSzhs'](_0x36e601[_0x4fd4('35','%ZnF')],'wNOeb')){cm[_0x4fd4('36','i0[Y')]();}else{cm[_0x4fd4('37','T1]A')](itemlist[selects][0x0],0x20,0x20);cm['sendOk']('进阶成功');cm['喇叭'](0x2,_0x36e601[_0x4fd4('38','@dl@')](_0x36e601[_0x4fd4('39','EjZ]')](_0x36e601['POYLq'],cm[_0x4fd4('3a','RE8!')]()),_0x36e601['pAWqh'])+itemlist[selects][0x6]+'技能至32级,伤害更上一层楼！');}}else{if(_0x36e601[_0x4fd4('3b','PnS(')](_0x2f69b9,0x1))a++;else a--;if(_0x36e601['vyIRp'](a,-0x1)){if(_0x36e601[_0x4fd4('3c','T1]A')](_0x4fd4('3d','kYKk'),_0x36e601[_0x4fd4('3e','spdj')])){text+=_0x36e601[_0x4fd4('3f','i%Ru')];}else{cm['dispose']();}}else if(_0x36e601[_0x4fd4('40','yOt#')](a,0x0)){if(_0x36e601['iUErt'](_0x4fd4('41',']wJD'),_0x36e601[_0x4fd4('42','811x')])){cm[_0x4fd4('43','822a')]('该脚本仅供RCMS使用！请不要肆意传播，购买正版脚本授权。\x0d\x0a\x0d\x0a\x0d\x0a联系方式：#r#e【Q\x20Q\x20号\x20：1\x200\x209\x208\x203\x209\x203\x203\x203\x201】');return;}else{text=_0x36e601[_0x4fd4('44','YsW^')];for(var _0x3022b3=0x0;_0x3022b3<itemlist[_0x4fd4('45','ptDa')];_0x3022b3++){text+=_0x36e601['fhpCW'](_0x36e601['ezhtt'](_0x36e601['bVOrr'](_0x36e601['VGeHX'](_0x36e601[_0x4fd4('46','822a')](_0x36e601[_0x4fd4('47','H8!9')](_0x36e601[_0x4fd4('48','@dl@')]('#L',_0x3022b3),_0x4fd4('49',')Yxj')),itemlist[_0x3022b3][0x0]),_0x36e601['zgFTQ']),itemlist[_0x3022b3][0x0]),'#'),itemlist[_0x3022b3][0x1])+'技能';if(_0x36e601['trPOU'](cm[_0x4fd4('4a','$A8(')]()[_0x4fd4('4b','822a')](_0x36e601['PDxqX'](''+itemlist[_0x3022b3][0x0],''),0x1),0x4)){if(_0x36e601[_0x4fd4('4c','xHe1')]===_0x4fd4('4d','7DYi')){var _0x56324e=_0x36e601[_0x4fd4('4e','bVlN')](_0x36e601[_0x4fd4('4f','ZbwL')],itemlist[selects][0x0])+_0x4fd4('50','822a');_0x56324e+=_0x36e601['bdDVc'](_0x36e601[_0x4fd4('51','T1]A')]+itemlist[selects][0x4],_0x36e601['KNBdc']);_0x56324e+=_0x36e601[_0x4fd4('52','iTXz')](_0x4fd4('53','8%T&'),itemlist[selects][0x5])+_0x36e601[_0x4fd4('54','KY3G')];_0x56324e+=_0x36e601['CWMYt'];cm[_0x4fd4('55','gqz(')](_0x56324e);}else{text+=_0x36e601['PDxqX'](_0x36e601['FXHEx'](_0x36e601[_0x4fd4('56','1ykN')](_0x36e601['DZaDk'](_0x36e601[_0x4fd4('57','6IB^')](_0x36e601['cWgvD'],itemlist[_0x3022b3][0x6]),'#v'),itemlist[_0x3022b3][0x2])+'#x',itemlist[_0x3022b3][0x3]),_0x36e601[_0x4fd4('58','ok&v')]);}}else if(cm[_0x4fd4('59','0mv0')]()['getBossLog'](_0x36e601[_0x4fd4('5a','hth)')](_0x36e601[_0x4fd4('5b','PQyP')]('',itemlist[_0x3022b3][0x0]),''),0x1)>=0x4&&cm[_0x4fd4('5c','yOt#')]()[_0x4fd4('5d','yOt#')](_0x36e601[_0x4fd4('5e','ER]*')](''+itemlist[_0x3022b3][0x0],''),0x1)<0x5){text+=_0x36e601[_0x4fd4('5f','MHxI')](_0x36e601['TJTCh'](_0x36e601[_0x4fd4('60','xHe1')](_0x36e601[_0x4fd4('61','0*DW')],itemlist[_0x3022b3][0x6]),'#v'),itemlist[_0x3022b3][0x4])+'#x'+itemlist[_0x3022b3][0x5]+_0x4fd4('21','iTXz');}else{text+=_0x36e601['sjCIG'];}if(_0x36e601[_0x4fd4('62','PQyP')](_0x3022b3,0x0)&&_0x36e601[_0x4fd4('63','i0[Y')](_0x36e601['rbGwz'](_0x36e601[_0x4fd4('64','1ykN')](_0x3022b3,0x1),0x63),0x0)){if(_0x36e601[_0x4fd4('65','811x')](_0x36e601[_0x4fd4('66','eKgw')],_0x36e601[_0x4fd4('67','xHe1')])){if(cm['getPlayer']()[_0x4fd4('68','hth)')](''+itemlist[selects][0x0]+'',0x1)==0x4){cm[_0x4fd4('69','i0[Y')](itemlist[selects][0x0],0x23,0x23);cm[_0x4fd4('6a','QB(r')](_0x4fd4('6b','$A8('));cm['喇叭'](0x2,_0x36e601['luzdW'](_0x36e601[_0x4fd4('6c','RE8!')](_0x36e601['luzdW'](_0x36e601[_0x4fd4('6d','M1qX')](_0x36e601[_0x4fd4('6e','H8!9')],cm[_0x4fd4('6f','4ZNW')]()),_0x36e601['pAWqh']),itemlist[selects][0x6]),'技能至35级,伤害突破天际！'));}cm[_0x4fd4('70','jFFO')]()[_0x4fd4('71',')Yxj')](_0x36e601[_0x4fd4('72','jFFO')]('',itemlist[selects][0x0])+'',0x1);cm[_0x4fd4('73','$A8(')]();}else{text+='\x0d\x0a';}}}cm[_0x4fd4('74','811x')](text);}}else if(_0x36e601['BgXMq'](a,0x1)){selects=_0x3949bb;if(_0x36e601[_0x4fd4('75','CuVN')](cm[_0x4fd4('76','QB(r')]()[_0x4fd4('77','0mv0')](_0x36e601[_0x4fd4('78','[*Tx')](_0x36e601[_0x4fd4('79','YsW^')]('',itemlist[selects][0x0]),''),0x1),0x4)){if(_0x36e601[_0x4fd4('7a','8%T&')]!==_0x36e601['GjjAa']){var _0x25002d=_0x36e601['iHGtn'][_0x4fd4('7b','7DYi')]('|'),_0x5535c1=0x0;while(!![]){switch(_0x25002d[_0x5535c1++]){case'0':cm['sendYesNo'](_0x5683c4);continue;case'1':var _0x5683c4=_0x36e601[_0x4fd4('7c','1ykN')](_0x36e601['kuioS'],itemlist[selects][0x0])+_0x36e601[_0x4fd4('7d','ER]*')];continue;case'2':_0x5683c4+=_0x36e601[_0x4fd4('7e','[*Tx')];continue;case'3':_0x5683c4+=_0x36e601[_0x4fd4('7f','w9CG')](_0x36e601['ZJgcU'](_0x4fd4('80','1ykN'),itemlist[selects][0x3]),_0x4fd4('81','M1qX'));continue;case'4':_0x5683c4+=_0x36e601[_0x4fd4('82','%ZnF')](_0x36e601['TbfFz'],itemlist[selects][0x2])+_0x36e601[_0x4fd4('83','811x')];continue;}break;}}else{cm['dispose']();}}else{if(_0x36e601[_0x4fd4('84','hth)')](_0x36e601[_0x4fd4('85','jFFO')],'zXfpH')){cm['喇叭'](0x1,_0x36e601[_0x4fd4('86','RE8!')]);}else{var _0x33337e=_0x36e601['tQSvR'][_0x4fd4('87','i%Ru')]('|'),_0xd14cab=0x0;while(!![]){switch(_0x33337e[_0xd14cab++]){case'0':_0x5683c4+=_0x36e601[_0x4fd4('88','bVlN')](_0x36e601['BHypZ'],itemlist[selects][0x5])+_0x36e601[_0x4fd4('89','mEvA')];continue;case'1':_0x5683c4+=_0x36e601[_0x4fd4('8a','i0[Y')](_0x36e601[_0x4fd4('8b','KY3G')]('\x20-\x20需要道具：#d#v',itemlist[selects][0x4]),_0x36e601[_0x4fd4('8c',')Yxj')]);continue;case'2':var _0x5683c4=_0x36e601[_0x4fd4('8d','M1qX')](_0x36e601[_0x4fd4('8e','QB(r')](_0x36e601[_0x4fd4('8f','$mYP')],itemlist[selects][0x0]),_0x36e601[_0x4fd4('7d','ER]*')]);continue;case'3':_0x5683c4+=_0x4fd4('90','[QbW');continue;case'4':cm['sendYesNo'](_0x5683c4);continue;}break;}}}}else if(_0x36e601['EmSYD'](a,0x2)){jg=_0x3949bb;var _0x1d4e05=itemlist[selects][0x0];if(_0x36e601['zUlbl'](cm[_0x4fd4('91','1ykN')]()['getBossLog'](_0x36e601[_0x4fd4('92','YsW^')]('',itemlist[selects][0x0])+'',0x1),0x5)){if(_0x36e601[_0x4fd4('93','[QbW')]!==_0x36e601[_0x4fd4('94','bVlN')]){cm[_0x4fd4('95','cSR7')](_0x36e601['KoPdR']);cm[_0x4fd4('96','811x')]();return;}else{selects=_0x3949bb;if(_0x36e601['trPOU'](cm[_0x4fd4('97','0*DW')]()[_0x4fd4('98','mEvA')](_0x36e601['eCBoR']('',itemlist[selects][0x0])+'',0x1),0x4)){var _0x26a008=_0x36e601[_0x4fd4('99','4ZNW')][_0x4fd4('9a','eKgw')]('|'),_0x830ec5=0x0;while(!![]){switch(_0x26a008[_0x830ec5++]){case'0':_0x33ca3d+=_0x36e601[_0x4fd4('9b','w9CG')](_0x36e601['BHypZ']+itemlist[selects][0x3],_0x36e601[_0x4fd4('9c','UoPH')]);continue;case'1':cm[_0x4fd4('9d','1ykN')](_0x33ca3d);continue;case'2':var _0x33ca3d=_0x36e601[_0x4fd4('9e','spdj')](_0x36e601[_0x4fd4('9f','M1qX')](_0x36e601[_0x4fd4('a0','7DYi')],itemlist[selects][0x0]),_0x36e601[_0x4fd4('a1','6IB^')]);continue;case'3':_0x33ca3d+=_0x36e601['CWMYt'];continue;case'4':_0x33ca3d+=_0x36e601[_0x4fd4('a2','ptDa')](_0x36e601[_0x4fd4('a3','mEvA')](_0x36e601['TbfFz'],itemlist[selects][0x2]),_0x36e601['KNBdc']);continue;}break;}}else{var _0x33ca3d=_0x36e601[_0x4fd4('a4','i0[Y')](_0x36e601[_0x4fd4('a5','yOt#')](_0x36e601[_0x4fd4('a6','1ykN')],itemlist[selects][0x0]),_0x36e601[_0x4fd4('a7','M1qX')]);_0x33ca3d+=_0x36e601[_0x4fd4('a8','0*DW')](_0x36e601['TbfFz'],itemlist[selects][0x4])+_0x36e601[_0x4fd4('a9','[*Tx')];_0x33ca3d+=_0x36e601[_0x4fd4('aa','ok&v')](_0x36e601[_0x4fd4('ab','mEvA')]+itemlist[selects][0x5],_0x36e601[_0x4fd4('ac','4ZNW')]);_0x33ca3d+=_0x36e601[_0x4fd4('ad',']wJD')];cm[_0x4fd4('ae','822a')](_0x33ca3d);}}}if(_0x36e601[_0x4fd4('af','EjZ]')](cm[_0x4fd4('b0','gqz(')]()[_0x4fd4('b1','kYKk')](),itemlist[selects][0x7])){cm['sendOk'](_0x36e601[_0x4fd4('b2','822a')]);cm['dispose']();return;}if(_0x36e601[_0x4fd4('b3','@dl@')](cm[_0x4fd4('b4','%ZnF')]()[_0x4fd4('b5','bVlN')](_0x36e601[_0x4fd4('b6','i%Ru')](_0x36e601[_0x4fd4('b7','cSR7')]('',itemlist[selects][0x0]),''),0x1),0x4)){if(cm['haveItem'](itemlist[selects][0x2],itemlist[selects][0x3])){cm[_0x4fd4('b8','kYKk')](itemlist[selects][0x2],-itemlist[selects][0x3]);if(_0x36e601[_0x4fd4('b9','i%Ru')](随机率,成功率)&&cm[_0x4fd4('ba',')Yxj')]()[_0x4fd4('5d','yOt#')](_0x36e601[_0x4fd4('bb','822a')](_0x36e601[_0x4fd4('bc','4ZNW')]('',itemlist[selects][0x0]),''),0x1)<0x4){if(_0x36e601[_0x4fd4('bd','cSR7')](_0x36e601[_0x4fd4('be','PnS(')],_0x4fd4('bf','PnS('))){a=-0x1;_0x36e601[_0x4fd4('c0','T1]A')](action,0x1,0x0,0x0);}else{if(cm[_0x4fd4('c1','EjZ]')]()[_0x4fd4('c2','jFFO')](_0x36e601[_0x4fd4('c3',')Yxj')]('',itemlist[selects][0x0])+'',0x1)==0x0){cm['teachSkill'](itemlist[selects][0x0],0x1f,0x1f);cm[_0x4fd4('c4','kYKk')](_0x4fd4('c5','kYKk'));cm['喇叭'](0x2,_0x36e601[_0x4fd4('c6','0mv0')](_0x36e601[_0x4fd4('c7','8%T&')](_0x36e601[_0x4fd4('c8','7DYi')](_0x4fd4('c9','i0[Y')+cm[_0x4fd4('ca','ptDa')](),_0x36e601['pAWqh']),itemlist[selects][0x6]),_0x36e601[_0x4fd4('cb','yOt#')]));}if(_0x36e601[_0x4fd4('cc','iTXz')](cm[_0x4fd4('97','0*DW')]()['getBossLog'](_0x36e601['cCNGf'](''+itemlist[selects][0x0],''),0x1),0x1)){if(_0x36e601[_0x4fd4('cd','$mYP')](_0x36e601['WKVTm'],_0x36e601[_0x4fd4('ce','cSR7')])){cm[_0x4fd4('cf','[*Tx')](itemlist[selects][0x0],0x20,0x20);cm['sendOk'](_0x36e601[_0x4fd4('d0','M1qX')]);cm['喇叭'](0x2,_0x36e601[_0x4fd4('d1','T1]A')](_0x36e601[_0x4fd4('d2','8%T&')](_0x36e601[_0x4fd4('d3','PnS(')]+cm[_0x4fd4('d4','$A8(')]()+_0x36e601[_0x4fd4('d5','H8!9')],itemlist[selects][0x6]),_0x36e601['eBSEI']));}else{cm[_0x4fd4('6a','QB(r')](_0x36e601['KFqkd']);cm['喇叭'](0x2,_0x36e601[_0x4fd4('d6','%ZnF')](_0x36e601[_0x4fd4('d7','H8!9')](_0x36e601['GYmEH']('玩家[',cm[_0x4fd4('d8','CuVN')]())+']进阶',itemlist[selects][0x6]),_0x36e601[_0x4fd4('d9','[QbW')]));cm['dispose']();}}if(cm[_0x4fd4('da','UoPH')]()['getBossLog'](_0x36e601[_0x4fd4('db','eKgw')](_0x36e601['pTpdG']('',itemlist[selects][0x0]),''),0x1)==0x2){if('mpsJg'===_0x36e601[_0x4fd4('dc','bVlN')]){cm[_0x4fd4('dd','0*DW')](_0x36e601[_0x4fd4('de','spdj')]);cm['dispose']();return;}else{cm[_0x4fd4('df','gqz(')](itemlist[selects][0x0],0x21,0x21);cm[_0x4fd4('e0','CuVN')](_0x36e601['eyEwK']);cm['喇叭'](0x2,_0x36e601[_0x4fd4('e1','hth)')](_0x36e601[_0x4fd4('e2','MHxI')](_0x36e601[_0x4fd4('e3','ZbwL')](_0x36e601['UuhDm']('恭喜玩家[',cm['getName']()),_0x36e601[_0x4fd4('e4','M1qX')]),itemlist[selects][0x6]),_0x36e601[_0x4fd4('e5','CuVN')]));}}if(_0x36e601[_0x4fd4('e6','[*Tx')](cm['getPlayer']()[_0x4fd4('e7','RE8!')](_0x36e601[_0x4fd4('e8','H8!9')](''+itemlist[selects][0x0],''),0x1),0x3)){if(_0x4fd4('e9','MHxI')===_0x36e601[_0x4fd4('ea','i%Ru')]){cm[_0x4fd4('eb','1ykN')](itemlist[selects][0x0],0x22,0x22);cm[_0x4fd4('ec',']wJD')](_0x36e601['eyEwK']);cm['喇叭'](0x2,_0x36e601[_0x4fd4('ed','PnS(')](_0x36e601[_0x4fd4('ee','mEvA')](_0x36e601[_0x4fd4('ef','811x')](_0x36e601['wBflP']('恭喜玩家[',cm[_0x4fd4('f0','8%T&')]()),_0x36e601[_0x4fd4('f1','1ykN')]),itemlist[selects][0x6]),_0x36e601[_0x4fd4('f2','i%Ru')]));}else{cm[_0x4fd4('69','i0[Y')](itemlist[selects][0x0],0x21,0x21);cm[_0x4fd4('f3','mEvA')](_0x36e601[_0x4fd4('f4','822a')]);cm['喇叭'](0x2,_0x36e601[_0x4fd4('f5','YsW^')](_0x36e601['GYmEH'](_0x36e601[_0x4fd4('f6','4ZNW')](_0x36e601[_0x4fd4('f7','ptDa')],cm[_0x4fd4('f8','kYKk')]()),_0x36e601[_0x4fd4('f9','hth)')])+itemlist[selects][0x6],_0x36e601[_0x4fd4('fa','MHxI')]));}}cm[_0x4fd4('fb','4ZNW')]()['setBossLog'](_0x36e601['wBflP']('',itemlist[selects][0x0])+'',0x1);cm['dispose']();}}else{if(_0x36e601[_0x4fd4('3c','T1]A')](_0x36e601['gFWra'],_0x36e601[_0x4fd4('fc','jFFO')])){cm[_0x4fd4('fd','4ZNW')]();}else{cm['sendOk']('进阶失败');cm['喇叭'](0x2,_0x36e601['wBflP'](_0x36e601['wBflP'](_0x36e601[_0x4fd4('fe','1ykN')](_0x36e601[_0x4fd4('ff','CuVN')](_0x36e601[_0x4fd4('100','yOt#')],cm[_0x4fd4('101','[QbW')]()),_0x36e601['Tsmgr']),itemlist[selects][0x6]),_0x36e601['AijUf']));cm[_0x4fd4('102','1ykN')]();}}}else{cm[_0x4fd4('103','@dl@')](_0x36e601['LyZdK']);cm[_0x4fd4('104','i%Ru')]();}}else{if(cm[_0x4fd4('105',']wJD')](itemlist[selects][0x4],itemlist[selects][0x5])){cm['gainItem'](itemlist[selects][0x4],-itemlist[selects][0x5]);if(随机率>=最后成功率&&_0x36e601[_0x4fd4('106','ptDa')](cm[_0x4fd4('107','PnS(')]()[_0x4fd4('108','iTXz')](_0x36e601['XtAei'](_0x36e601[_0x4fd4('109','M1qX')]('',itemlist[selects][0x0]),''),0x1),0x4)){if(_0x36e601[_0x4fd4('10a','PQyP')](cm[_0x4fd4('10b','8%T&')]()[_0x4fd4('10c','QB(r')](_0x36e601[_0x4fd4('10d','hth)')]('',itemlist[selects][0x0])+'',0x1),0x4)){if(_0x36e601[_0x4fd4('10e','kYKk')](_0x36e601['HOUJF'],_0x36e601[_0x4fd4('10f','i0[Y')])){text+='\x0d\x0a';}else{cm[_0x4fd4('110','$A8(')](itemlist[selects][0x0],0x23,0x23);cm[_0x4fd4('111','ptDa')](_0x36e601[_0x4fd4('112','KY3G')]);cm['喇叭'](0x2,_0x36e601[_0x4fd4('113','YsW^')](_0x36e601[_0x4fd4('114','gqz(')](_0x36e601[_0x4fd4('115','ptDa')](_0x36e601[_0x4fd4('116',')Yxj')],cm[_0x4fd4('117','gqz(')]())+_0x4fd4('118','811x'),itemlist[selects][0x6]),_0x36e601['uagKa']));}}cm[_0x4fd4('119','YsW^')]()[_0x4fd4('11a','0mv0')](_0x36e601[_0x4fd4('11b','CuVN')](_0x36e601[_0x4fd4('11c','(unv')]('',itemlist[selects][0x0]),''),0x1);cm[_0x4fd4('11d','6IB^')]();}else{if(_0x36e601[_0x4fd4('11e','UoPH')]!==_0x36e601['eKeeP']){cm[_0x4fd4('ec',']wJD')](_0x36e601['KFqkd']);cm['喇叭'](0x2,_0x36e601[_0x4fd4('11f','T1]A')](_0x36e601['cwovP'](_0x4fd4('120','spdj'),cm[_0x4fd4('121','i0[Y')]()),_0x36e601[_0x4fd4('122','EjZ]')])+itemlist[selects][0x6]+_0x36e601[_0x4fd4('123','0mv0')]);cm[_0x4fd4('124',']wJD')]();}else{cm[_0x4fd4('125','(unv')](_0x36e601['LyZdK']);cm['dispose']();}}}else{cm[_0x4fd4('103','@dl@')](_0x36e601[_0x4fd4('126','KY3G')]);cm[_0x4fd4('124',']wJD')]();}}}}};_0xodZ='jsjiami.com.v6';